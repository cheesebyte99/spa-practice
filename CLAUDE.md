# spa-practice — 🎙️ SPA 영어 말하기 연습

## 저장소 원칙 (cheesebyte99 의 앱들)

- **새 프로그램은 새 저장소에서 만든다.** 기존 저장소에 하위 폴더로 더하지 않는다.
  Claude 는 저장소를 직접 만들 수 없으므로, 이름을 제안하고 사용자가 GitHub 에서 **빈 저장소**를 만들면
  그 저장소를 세션에 연결해 웹 주소(GitHub Pages)·빌드·자동 배포를 처음부터 따로 설정한다.
- 저장소 구성
  | 저장소 | 내용 | 주소 |
  | --- | --- | --- |
  | `book-tracker` | 📚 내 책장 (+ 옮긴 앱의 예전 주소에서 새 주소로 넘겨 주는 페이지) | https://cheesebyte99.github.io/book-tracker/ |
  | `our-calendar` | 📅 우리들의 캘린더 웹 + 안드로이드 앱 | https://cheesebyte99.github.io/our-calendar/ |
  | `our-photo-album` | 📸 우리 사진첩 웹 + 안드로이드 앱 | https://cheesebyte99.github.io/our-photo-album/ |
  | `our-gifticons` | 🎁 우리 기프티콘 웹 + 안드로이드 앱 | https://cheesebyte99.github.io/our-gifticons/ |
  | `spa-practice` | 🎙️ SPA 영어 말하기 연습 웹앱 | https://cheesebyte99.github.io/spa-practice/ |
  | `our-firebase` | 🔥 Firestore 규칙 · Cloud Functions(알림 서버) · 자동 배포 | (웹 없음) |
- 모든 앱이 Firebase 프로젝트 `jaeyeon-life` 하나를 함께 쓴다. **Firestore 규칙·알림 서버는 `our-firebase` 에만 둔다**
  (규칙 파일은 프로젝트에 하나뿐이라 나눠 두면 서로 덮어쓴다). 새 앱이 Firebase 를 쓰면 그 부분만 `our-firebase` 에 더한다.
- 앱에 새 Firestore 칸을 더할 때는 `our-firebase` 의 규칙을 **먼저** 배포(`main` 에 올리면 자동 배포)하고, 그다음 앱을 올린다.
- 안드로이드 APK 는 각 저장소의 GitHub Actions 가 빌드해 Releases 에 올린다. 서명은 각 저장소의 `android/debug.keystore`
  (폰에 깔린 앱과 같은 키 — 바꾸면 덮어쓰기 업데이트가 안 된다).
- 사용자와는 한국어로, 개발자가 아닌 사람도 따라 할 수 있게 단계별로 안내한다.

## 이 저장소

- 현대자동차그룹 진급용 **SPA(Speaking Proficiency Assessment)** 영어 인터뷰 대비 연습 웹앱. 주로 **휴대폰**으로 쓴다.
- 빌드 없는 정적 웹앱. GitHub Pages 가 `main` 의 맨 위 폴더를 그대로 보여 준다(`.nojekyll`).
  - `index.html`: 앱 전체(화면·녹음·받아쓰기·분석). `data/questions.js`: 질문 은행(난이도 1~5, 모범 답변, 핵심 표현, 추가 질문).
    `data/vocab.js`: 회화 단어장. `sw.js`: 오프라인용 — 앱 파일을 더하면 `FILES` 에도 넣고 `CACHE` 버전을 올린다.
- 기록(녹음·받아쓰기·자기 채점)은 기기 IndexedDB(`spa-practice`)에만 저장한다. Firebase 는 쓰지 않는다.
- 질문 읽기는 브라우저 `speechSynthesis`, 받아쓰기는 `SpeechRecognition`(크롬), 녹음은 `MediaRecorder`.
  사용자 휴대폰은 녹음과 받아쓰기를 **동시에 못 한다**. 그래서 "녹음 + AI 받아쓰기"(`mode: 'ai'`)가 있다:
  녹음이 끝나면 `asr-worker.js`(Web Worker)가 transformers.js(jsdelivr, `dist/transformers.min.js` — `.web` 판은 의존성 때문에 URL로 못 읽음)와
  Whisper 모델(`Xenova/whisper-tiny.en` / `base.en`, Hugging Face 에서 처음 한 번 내려받아 브라우저 Cache 에 저장)로 글자로 바꾼다.
  이 세션 환경에서는 huggingface.co 가 막혀 실제 모델 추론은 시험하지 못했다(가짜 작업자로 화면 흐름만 시험).
- **APK 는 사용자가 "최종 버전"이라고 할 때까지 만들지 않는다.** 만들게 되면 다른 앱들처럼 `android/` + Actions 로 하고 버전은 1.0.N 부터.
- SPA 시험 형식·점수 기준은 응시 후기 기반이다. 앱 안에서 공식 기준처럼 단정하지 않는다.
