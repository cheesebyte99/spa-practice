/* 기기 안 AI 받아쓰기 (Whisper, transformers.js)
 * 녹음과 받아쓰기를 동시에 못 하는 휴대폰을 위해: 녹음이 끝난 뒤 이 작업자가 녹음을 글자로 바꾼다.
 * 모델은 처음 한 번 Hugging Face 에서 내려받고, 그 뒤로는 브라우저 저장소(Cache)에서 읽는다.
 * 화면이 멈추지 않도록 별도 작업자(Web Worker)에서 돌린다. */
import { pipeline, env } from 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.8.1/dist/transformers.min.js';

env.allowLocalModels = false;
env.useBrowserCache = true;

let asr = null, current = '', loading = null;

function load(model) {
  if (asr && current === model) return Promise.resolve(asr);
  if (loading && current === model) return loading;
  current = model;
  loading = pipeline('automatic-speech-recognition', model, {
    device: 'wasm',
    dtype: 'q8',
    progress_callback: p => self.postMessage({ type: 'progress', p: { status: p.status, file: p.file, loaded: p.loaded, total: p.total } })
  }).then(a => { asr = a; loading = null; return a; }, err => { loading = null; current = ''; throw err; });
  return loading;
}

self.onmessage = async e => {
  const { id, cmd, model, audio } = e.data;
  try {
    const a = await load(model);
    if (cmd === 'preload') { self.postMessage({ type: 'done', id, text: '' }); return; }
    self.postMessage({ type: 'working', id });
    const out = await a(audio, { chunk_length_s: 30, stride_length_s: 5 });
    const text = (Array.isArray(out) ? out.map(o => o.text).join(' ') : out.text) || '';
    self.postMessage({ type: 'done', id, text: text.replace(/\[[^\]]*\]|\([^)]*\)/g, ' ').replace(/\s+/g, ' ').trim() });
  } catch (err) {
    self.postMessage({ type: 'error', id, message: String((err && err.message) || err) });
  }
};
