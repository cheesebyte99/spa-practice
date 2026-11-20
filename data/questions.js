/* SPA 연습 질문 은행
 * lv: 1 기초 · 2 일상 · 3 업무 · 4 의견 · 5 심화 (실제 시험처럼 쉬운 것 → 어려운 것)
 * cat: intro 자기소개 · daily 일상 · work 회사·업무 · describe 묘사·설명 · exp 경험 · opinion 의견 · role 롤플레이·가정 · issue 산업·사회 이슈
 * follow: 시험관이 이어서 물을 만한 추가 질문
 * model: 모범 답변(예시) — 자기 상황에 맞게 바꿔 말하는 연습용
 * keys: 쓸 만한 핵심 표현 [영어, 뜻]
 */
window.SPA_CATS = {
  intro: '자기소개',
  daily: '일상·취미',
  work: '회사·업무',
  describe: '묘사·설명',
  exp: '경험 이야기',
  opinion: '의견·비교',
  role: '롤플레이·가정',
  issue: '산업·사회 이슈'
};

window.SPA_LEVELS = {
  1: { name: '기초', time: 45 },
  2: { name: '일상', time: 60 },
  3: { name: '업무', time: 90 },
  4: { name: '의견', time: 90 },
  5: { name: '심화', time: 120 }
};

window.SPA_QUESTIONS = [
  /* ───────── 자기소개 (Lv1) ───────── */
  {
    id: 'i1', cat: 'intro', lv: 1,
    q: 'Could you please introduce yourself?',
    ko: '자기소개를 해 주시겠어요?',
    follow: ['How long have you been working for your company?', 'What do you like most about your job?'],
    tip: '이름 → 회사·부서 → 근무 기간 → 하는 일 → 개인적인 한 가지(취미·가족) 순서로 30~40초. 외운 티가 나지 않게 천천히 말하세요.',
    model: "Sure. My name is Minsu Kim, and I've been working for Hyundai Motor for about twelve years. I'm currently in the quality management team, where I'm in charge of analyzing customer complaints and finding the root causes of defects. I live in Suwon with my wife and two kids. In my free time, I enjoy hiking and I've recently started learning how to cook. I'm a little nervous today, but I'm looking forward to our conversation.",
    keys: [['I\'ve been working for ~ for about N years', '~에서 N년째 일하고 있어요'], ['I\'m in charge of ~', '~을 담당하고 있어요'], ['In my free time, I enjoy ~', '여가 시간에 ~을 즐겨요'], ['I\'m looking forward to ~', '~이 기대돼요']]
  },
  {
    id: 'i2', cat: 'intro', lv: 1,
    q: 'Tell me about your hometown.',
    ko: '고향에 대해 이야기해 주세요.',
    follow: ['Would you recommend it to visitors? Why?', 'How has your hometown changed over the years?'],
    tip: '위치 → 특징(음식·자연·크기) → 개인적인 추억 하나. "It\'s famous for ~"로 쉽게 시작하세요.',
    model: "I'm originally from Jeonju, which is a city in the southwestern part of Korea. It's famous for bibimbap and its traditional hanok village, so a lot of tourists visit there every year. It's not a big city, so life there is calm and relaxed. When I was a kid, I used to walk around the old streets with my grandfather, and that's still one of my favorite memories. I try to go back at least twice a year to visit my parents.",
    keys: [['I\'m originally from ~', '저는 원래 ~ 출신이에요'], ['It\'s famous for ~', '~으로 유명해요'], ['I used to ~', '예전에 ~하곤 했어요'], ['at least twice a year', '적어도 1년에 두 번']]
  },
  {
    id: 'i3', cat: 'intro', lv: 1,
    q: 'Tell me about your family.',
    ko: '가족에 대해 이야기해 주세요.',
    follow: ['Who are you closest to in your family?', 'What do you usually do together as a family?'],
    tip: '가족 구성 → 한 사람씩 짧게 소개 → 함께 하는 일. 사람 묘사(personality) 표현을 하나씩 넣어 보세요.',
    model: "There are four people in my family: my wife, my two daughters, and me. My wife works as a nurse, so she's very caring but also very busy. My older daughter is ten and she's really into drawing, and my younger one is six and full of energy. On weekends, we usually go to a park nearby or visit my parents. Since my job keeps me busy during the week, I try to spend as much time as possible with them on weekends.",
    keys: [['There are N people in my family', '우리 가족은 N명이에요'], ['be really into ~', '~에 푹 빠져 있다'], ['full of energy', '에너지가 넘치는'], ['as much time as possible', '가능한 한 많은 시간']]
  },
  {
    id: 'i4', cat: 'intro', lv: 1,
    q: 'How did you get here today?',
    ko: '오늘 여기까지 어떻게 오셨어요?',
    follow: ['How long does your commute usually take?', 'What do you do while commuting?'],
    tip: '교통수단 + 걸린 시간 + 짧은 느낌. 과거형(took, came, was)을 정확히 쓰는 게 포인트예요.',
    model: "I came here by subway today. It took about forty minutes from my home, which is not bad. Usually I drive to work, but I thought the traffic would be heavy this morning, so I decided to take the subway instead. Actually, it was more comfortable than I expected, and I could review some English expressions on the way.",
    keys: [['It took about N minutes', '약 N분 걸렸어요'], ['The traffic would be heavy', '차가 막힐 것 같았어요'], ['I decided to ~ instead', '대신 ~하기로 했어요'], ['more ~ than I expected', '생각보다 더 ~한']]
  },

  /* ───────── 일상·취미 (Lv1~2) ───────── */
  {
    id: 'd1', cat: 'daily', lv: 1,
    q: 'What do you usually do in your free time?',
    ko: '여가 시간에 주로 무엇을 하세요?',
    follow: ['How did you get into that hobby?', 'Would you recommend it to others?'],
    tip: '취미 1~2개 → 왜 좋은지 → 얼마나 자주. 이유를 꼭 붙이면 다음 단계 질문으로 자연스럽게 이어져요.',
    model: "In my free time, I usually go hiking or play badminton. I go hiking with my friends about twice a month, mostly on mountains near Seoul like Bukhansan. I like it because it helps me clear my head after a stressful week. Badminton is something I play with my coworkers after work. It's a great way to stay in shape and also get closer to people at the office.",
    keys: [['about twice a month', '한 달에 두 번쯤'], ['clear my head', '머리를 식히다'], ['stay in shape', '건강·몸매를 유지하다'], ['get closer to ~', '~와 더 친해지다']]
  },
  {
    id: 'd2', cat: 'daily', lv: 2,
    q: 'What did you do last weekend?',
    ko: '지난 주말에 무엇을 하셨어요?',
    follow: ['What are your plans for this weekend?', 'Was it a typical weekend for you?'],
    tip: '시간 순서(On Saturday morning… After that… In the evening…)로 과거형 이야기. 느낌 한 문장으로 마무리.',
    model: "Last weekend was pretty relaxing. On Saturday morning, I slept in and then took my kids to a science museum. They loved the hands-on exhibits, especially the space section. After that, we had lunch at a noodle restaurant nearby. On Sunday, I stayed home most of the day, cleaned the house, and watched a baseball game on TV. It wasn't anything special, but it was exactly what I needed after a busy week.",
    keys: [['sleep in (slept in)', '늦잠 자다'], ['After that, ~', '그 다음에 ~'], ['stay home most of the day', '하루 대부분 집에 있다'], ['exactly what I needed', '딱 필요했던 것']]
  },
  {
    id: 'd3', cat: 'daily', lv: 2,
    q: 'Do you like to travel? Tell me about a memorable trip.',
    ko: '여행을 좋아하세요? 기억에 남는 여행을 이야기해 주세요.',
    follow: ['Where would you like to go next?', 'Do you prefer traveling alone or with others?'],
    tip: '언제·어디·누구와 → 한 일 → 가장 기억에 남는 장면 → 배운 점. 장면 하나를 생생하게 묘사하면 점수가 좋아요.',
    model: "Yes, I love traveling. The most memorable trip was to Vancouver, Canada, about three years ago. I went there with my family for ten days. We rented a car and drove to the Rocky Mountains. I'll never forget the moment I saw Lake Louise. The water was a bright turquoise color, and the mountains were covered with snow even in summer. It was so beautiful that we just stood there for a long time without saying anything.",
    keys: [['The most memorable trip was ~', '가장 기억에 남는 여행은 ~'], ['I\'ll never forget the moment ~', '~한 순간을 잊지 못할 거예요'], ['be covered with ~', '~으로 덮여 있다'], ['so ~ that ...', '너무 ~해서 …했다']]
  },
  {
    id: 'd4', cat: 'daily', lv: 2,
    q: 'What kind of food do you like? Can you recommend a good restaurant?',
    ko: '어떤 음식을 좋아하세요? 좋은 식당을 추천해 주실래요?',
    follow: ['Can you cook? What is your best dish?', 'What Korean food would you recommend to a foreigner?'],
    tip: '좋아하는 음식 → 이유 → 식당 위치·대표 메뉴·분위기. 맛 표현(spicy, savory, rich)을 써 보세요.',
    model: "I like almost all kinds of food, but my favorite is Korean barbecue. I love the fact that you grill the meat yourself and share it with others, so it's great for gatherings. If you're looking for a good place, I'd recommend a restaurant called Mapo Galbi near my office. Their pork ribs are marinated in a sweet and savory sauce, and the side dishes are really fresh. It can get crowded in the evening, so it's better to make a reservation.",
    keys: [['my favorite is ~', '제일 좋아하는 건 ~'], ['I\'d recommend ~', '~을 추천해요'], ['sweet and savory', '달고 감칠맛 나는'], ['It can get crowded', '붐빌 수 있어요']]
  },
  {
    id: 'd5', cat: 'daily', lv: 2,
    q: 'How do you stay healthy?',
    ko: '건강을 어떻게 유지하세요?',
    follow: ['Is it hard to exercise regularly when you\'re busy at work?', 'What bad habit would you like to change?'],
    tip: '운동 → 식습관 → 수면·스트레스 관리. 솔직한 약점 하나(I should ~ more)를 넣으면 자연스러워요.',
    model: "I try to stay healthy in a few ways. First, I go to the gym three times a week before work and do some weight training. Second, I try to eat home-cooked meals instead of fast food, although it's not always easy. Lastly, I make sure to get at least seven hours of sleep. To be honest, I still drink too much coffee at the office, so that's something I should cut down on.",
    keys: [['I try to ~', '~하려고 노력해요'], ['I make sure to ~', '꼭 ~하도록 해요'], ['To be honest, ~', '솔직히 말하면 ~'], ['cut down on ~', '~을 줄이다']]
  },
  {
    id: 'd6', cat: 'daily', lv: 2,
    q: 'Tell me about a movie or book you enjoyed recently.',
    ko: '최근에 재미있게 본 영화나 책을 이야기해 주세요.',
    follow: ['Who would you recommend it to?', 'Do you prefer watching movies at home or in a theater?'],
    tip: '제목·장르 → 줄거리 2~3문장(현재형) → 좋았던 점. 줄거리가 너무 길어지지 않게 주의!',
    model: "Recently I watched a movie called The Martian again. It's about an astronaut who gets stranded on Mars and has to survive alone until he's rescued. What I like about it is that the main character never gives up. He uses science and humor to solve one problem after another. It reminded me that staying positive is really important when things go wrong, even at work.",
    keys: [['It\'s about ~', '~에 관한 이야기예요'], ['What I like about it is that ~', '제가 좋아하는 점은 ~'], ['one problem after another', '문제를 하나씩 차례로'], ['It reminded me that ~', '~라는 걸 다시 느끼게 했어요']]
  },

  /* ───────── 회사·업무 (Lv2~3) ───────── */
  {
    id: 'w1', cat: 'work', lv: 2,
    q: 'What department do you work in, and what are your main responsibilities?',
    ko: '어느 부서에서 일하고, 주요 업무는 무엇인가요?',
    follow: ['What does a typical day look like for you?', 'Who do you work with most closely?'],
    tip: '부서 → 팀의 역할 → 내 업무 2~3가지. 전문 용어는 쉬운 말로 풀어서 설명하세요.',
    model: "I work in the purchasing department, specifically in the team that manages electronic parts. Our team's role is to find reliable suppliers and make sure we get parts at the right price and the right time. My main responsibilities are negotiating contracts with suppliers, monitoring delivery schedules, and solving problems when there are shortages. These days, I spend a lot of time on semiconductor supply issues.",
    keys: [['specifically, ~', '구체적으로는 ~'], ['make sure ~', '확실히 ~하도록 하다'], ['My main responsibilities are ~', '제 주요 업무는 ~'], ['spend a lot of time on ~', '~에 많은 시간을 쓰다']]
  },
  {
    id: 'w2', cat: 'work', lv: 2,
    q: 'Describe your typical workday from morning to evening.',
    ko: '아침부터 저녁까지 평범한 하루 일과를 설명해 주세요.',
    follow: ['What is the busiest part of your day?', 'Do you often work overtime?'],
    tip: '시간 표현(I usually start by ~ / Around noon / In the afternoon / Before I leave)으로 흐름을 만드세요. 현재형!',
    model: "I usually get to the office around eight. I start my day by checking emails and going over my schedule. At nine, we have a short team meeting to share updates. In the morning, I focus on reports and data analysis because that's when I concentrate best. After lunch, I usually have meetings with other departments or suppliers. Before I leave, I write a to-do list for the next day. I normally leave around six, unless something urgent comes up.",
    keys: [['I start my day by ~ing', '~하는 걸로 하루를 시작해요'], ['go over ~', '~을 검토하다'], ['that\'s when I concentrate best', '그때 가장 집중이 잘 돼요'], ['unless something urgent comes up', '급한 일이 생기지 않으면']]
  },
  {
    id: 'w3', cat: 'work', lv: 3,
    q: 'What do you like and dislike about your job?',
    ko: '업무에서 좋은 점과 싫은 점은 무엇인가요?',
    follow: ['If you could change one thing about your job, what would it be?', 'Have you ever thought about changing jobs?'],
    tip: '좋은 점(구체적 예) → 싫은 점(부드럽게) → 균형 잡힌 결론. "On the other hand"로 전환하세요.',
    model: "What I like most about my job is that I can see the results of my work. When a car that I helped develop is released, I feel really proud. I also like my team; we help each other a lot. On the other hand, the workload can be heavy, especially before a new model launch. There are times when I have to work late for several weeks in a row. But overall, I think the positives outweigh the negatives.",
    keys: [['What I like most about ~ is that ...', '~에서 가장 좋은 점은 …'], ['On the other hand, ~', '반면에 ~'], ['in a row', '연속으로'], ['the positives outweigh the negatives', '장점이 단점보다 크다']]
  },
  {
    id: 'w4', cat: 'work', lv: 3,
    q: 'How do you usually communicate with your team members?',
    ko: '팀원들과 주로 어떻게 소통하나요?',
    follow: ['Do you prefer meetings or emails? Why?', 'What makes communication difficult at work?'],
    tip: '수단(meetings, messenger, email) → 각각 언제 쓰는지 → 좋은 소통을 위한 나의 원칙.',
    model: "We use several ways to communicate depending on the situation. For quick questions, we use our company messenger because it's fast. For important decisions or anything that needs a record, we use email. We also have a weekly meeting on Monday mornings to share progress and discuss issues. Personally, I think face-to-face conversation is the most effective when there's a misunderstanding, so I try to talk in person when things get complicated.",
    keys: [['depending on the situation', '상황에 따라'], ['anything that needs a record', '기록이 필요한 건'], ['face-to-face conversation', '대면 대화'], ['when things get complicated', '일이 복잡해질 때']]
  },
  {
    id: 'w5', cat: 'work', lv: 3,
    q: 'What do you think is the most important skill for your job?',
    ko: '당신의 업무에서 가장 중요한 능력은 무엇이라고 생각하나요?',
    follow: ['How did you develop that skill?', 'What skill would you like to improve?'],
    tip: '능력 하나 선택 → 왜 중요한지 → 실제 예시. 예시가 있어야 레벨이 올라가요.',
    model: "I think the most important skill for my job is communication. My work involves many different teams, like design, production, and sales, and each team has different priorities. If I can't explain things clearly, small misunderstandings can turn into big problems. For example, last year a delivery was delayed because two teams understood a schedule differently. Since then, I always summarize decisions in writing after meetings to make sure everyone is on the same page.",
    keys: [['My work involves ~', '제 일은 ~과 관련이 있어요'], ['turn into ~', '~으로 번지다·변하다'], ['Since then, ~', '그 이후로 ~'], ['be on the same page', '같은 이해를 하다']]
  },
  {
    id: 'w6', cat: 'work', lv: 3,
    q: 'How do you handle stress at work?',
    ko: '직장에서 스트레스를 어떻게 관리하나요?',
    follow: ['What is the most stressful part of your job?', 'Do you think companies should do more to reduce employee stress?'],
    tip: '스트레스 원인 → 업무 중 대처 → 업무 밖 대처. "break it down into smaller tasks" 같은 구체적 방법이 좋아요.',
    model: "My biggest source of stress is tight deadlines. When I feel overwhelmed, I first break the work down into smaller tasks and prioritize them. That makes the situation feel more manageable. I also take short breaks, like walking around the building for five minutes. Outside of work, exercise helps me a lot. After a good workout, I usually feel refreshed and can think more clearly the next day.",
    keys: [['My biggest source of stress is ~', '가장 큰 스트레스 원인은 ~'], ['feel overwhelmed', '감당이 안 되는 느낌이다'], ['break ~ down into smaller tasks', '~을 작은 일로 쪼개다'], ['manageable', '감당할 수 있는']]
  },
  {
    id: 'w7', cat: 'work', lv: 3,
    q: 'Have you ever worked with people from other countries? Tell me about it.',
    ko: '외국 사람들과 일해 본 적 있나요? 이야기해 주세요.',
    follow: ['What was the biggest challenge?', 'What did you learn from that experience?'],
    tip: '언제·누구와·무슨 일 → 어려웠던 점(문화·시차·언어) → 해결 방법 → 배운 점.',
    model: "Yes, I have. Two years ago, I worked on a project with engineers from our plant in the Czech Republic. We had video calls every week to align the production process. At first, it was challenging because of the time difference and different working styles. They preferred very detailed documents, while we were used to discussing things quickly. So we agreed to share an agenda before every meeting. After that, things went much more smoothly, and I learned how important it is to adapt to other cultures.",
    keys: [['align ~', '~을 맞추다·조율하다'], ['be used to ~ing', '~하는 데 익숙하다'], ['things went much more smoothly', '일이 훨씬 순조로워졌다'], ['adapt to ~', '~에 적응하다']]
  },
  {
    id: 'w8', cat: 'work', lv: 3,
    q: 'What are your career goals for the next five years?',
    ko: '앞으로 5년간의 커리어 목표는 무엇인가요?',
    follow: ['What are you doing now to reach that goal?', 'Where do you see yourself in ten years?'],
    tip: '목표 → 이유 → 지금 하고 있는 노력. 진급 시험이니 "lead a team", "take on more responsibility"가 잘 어울려요.',
    model: "In the next five years, I'd like to become a team leader and take on more responsibility. I want to lead projects from planning to completion, not just handle one part of them. To get there, I'm working on my leadership and communication skills. I'm also studying English, because our company is expanding overseas and I'll need to work with global partners more often. Taking this test is actually part of that plan.",
    keys: [['take on more responsibility', '더 많은 책임을 맡다'], ['from planning to completion', '기획부터 완료까지'], ['To get there, ~', '거기에 도달하기 위해 ~'], ['be part of that plan', '그 계획의 일부이다']]
  },

  /* ───────── 묘사·설명 (Lv2~3) ───────── */
  {
    id: 's1', cat: 'describe', lv: 2,
    q: 'Describe your office or workplace.',
    ko: '사무실이나 일하는 곳을 묘사해 주세요.',
    follow: ['What would you change about your office?', 'Do you prefer an open office or private rooms?'],
    tip: '큰 그림(건물·층) → 내 자리 주변 → 분위기. 위치 표현(next to, in front of, on the left side)을 써 보세요.',
    model: "My office is on the fifth floor of a building in the research center. It's an open-plan office, so there are no walls between desks. My desk is next to the window, which I really like because I get a lot of sunlight. There's a small meeting room in the corner and a break area with a coffee machine on the other side. The atmosphere is usually quiet in the morning, but it gets busier in the afternoon when people come back from meetings.",
    keys: [['open-plan office', '칸막이 없는 사무실'], ['next to ~ / in the corner', '~ 옆에 / 구석에'], ['on the other side', '반대편에'], ['The atmosphere is ~', '분위기는 ~해요']]
  },
  {
    id: 's2', cat: 'describe', lv: 3,
    q: 'Explain your company\'s main products to someone who has never heard of it.',
    ko: '회사를 처음 듣는 사람에게 주요 제품을 설명해 주세요.',
    follow: ['What makes your products different from competitors?', 'Which product are you most proud of?'],
    tip: '회사 한 줄 소개 → 대표 제품 → 강점·최근 방향. 숫자 하나(판매량·국가 수)를 넣으면 설득력이 올라가요.',
    model: "My company is one of the biggest car makers in the world, based in Korea. We make a wide range of vehicles, from small city cars and family SUVs to luxury sedans. We sell cars in more than two hundred countries. Recently, our main focus has been electric vehicles. For example, our EV models have won several international awards for their design and fast charging. We're also investing in hydrogen cars and autonomous driving technology for the future.",
    keys: [['based in ~', '~에 본사를 둔'], ['a wide range of ~', '폭넓은 ~'], ['our main focus has been ~', '최근 주력은 ~'], ['invest in ~', '~에 투자하다']]
  },
  {
    id: 's3', cat: 'describe', lv: 3,
    q: 'Explain how a project usually proceeds in your team, step by step.',
    ko: '팀에서 프로젝트가 보통 어떻게 진행되는지 단계별로 설명해 주세요.',
    follow: ['Which step is usually the most difficult?', 'How do you check the progress of a project?'],
    tip: 'First → Next → Once ~ → Finally. 순서 표현을 정확히 쓰는 것만으로도 "논리적"이라는 인상을 줘요.',
    model: "First, we receive a request from another department or management and define the goal and the schedule. Next, we hold a kick-off meeting to divide the tasks among team members. Then, each person works on their part, and we check the progress in our weekly meeting. Once the main work is done, we test the results and get feedback from related teams. Finally, we write a report and share what we learned, so we can do better in the next project.",
    keys: [['First, / Next, / Then, / Finally,', '먼저 / 다음으로 / 그리고 / 마지막으로'], ['hold a kick-off meeting', '착수 회의를 열다'], ['divide the tasks among ~', '~에게 업무를 나누다'], ['Once ~ is done, ...', '~이 끝나면 …']]
  },
  {
    id: 's4', cat: 'describe', lv: 3,
    q: 'Describe a colleague you respect and explain why.',
    ko: '존경하는 동료를 묘사하고 이유를 설명해 주세요.',
    follow: ['What have you learned from that person?', 'What kind of colleague are you?'],
    tip: '누구(관계) → 성격·일하는 방식 → 기억나는 일화 → 나에게 준 영향.',
    model: "I really respect my former team leader, Mr. Park. He was calm and patient, even under a lot of pressure. What impressed me most was the way he handled mistakes. When I made a big error in a report early in my career, he didn't blame me. Instead, he helped me figure out what went wrong and how to prevent it. Because of him, I now try to treat my junior colleagues the same way.",
    keys: [['under a lot of pressure', '큰 압박 속에서도'], ['What impressed me most was ~', '가장 인상 깊었던 건 ~'], ['figure out what went wrong', '뭐가 잘못됐는지 알아내다'], ['treat ~ the same way', '~을 같은 방식으로 대하다']]
  },

  /* ───────── 경험 이야기 (Lv3) ───────── */
  {
    id: 'e1', cat: 'exp', lv: 3,
    q: 'Tell me about the most challenging project you\'ve worked on.',
    ko: '가장 힘들었던 프로젝트에 대해 이야기해 주세요.',
    follow: ['What would you do differently if you could do it again?', 'How did your team react to the difficulties?'],
    tip: 'STAR 구조: 상황(Situation) → 맡은 일(Task) → 내 행동(Action) → 결과(Result). 과거형으로!',
    model: "The most challenging project was launching a new SUV model two years ago. Three months before production, we found that a key part from a supplier had a quality issue. My task was to find a solution without delaying the launch. I visited the supplier with our engineers, and we worked together to change the manufacturing process. At the same time, I found a backup supplier just in case. In the end, we fixed the problem and launched on schedule. It taught me the importance of having a plan B.",
    keys: [['My task was to ~', '제 임무는 ~이었어요'], ['just in case', '만일에 대비해'], ['In the end, ~', '결국 ~'], ['on schedule', '예정대로']]
  },
  {
    id: 'e2', cat: 'exp', lv: 3,
    q: 'Tell me about a time you made a mistake at work and how you handled it.',
    ko: '업무에서 실수를 했던 경험과 어떻게 대처했는지 이야기해 주세요.',
    follow: ['How did your manager react?', 'What did you learn from it?'],
    tip: '실수 내용(솔직히) → 바로 한 행동 → 재발 방지 → 교훈. 실수보다 "대처"에 시간을 더 쓰세요.',
    model: "A few years ago, I sent a price quote to a client with the wrong numbers. I realized the mistake the next morning when I was reviewing the file. I immediately told my manager and called the client to explain the situation and apologize. Then I sent a corrected quote within an hour. Fortunately, the client appreciated our honesty, and we kept the deal. Since then, I always ask a coworker to double-check important documents before I send them.",
    keys: [['I realized the mistake', '실수를 깨달았어요'], ['immediately', '즉시'], ['appreciate one\'s honesty', '솔직함을 고맙게 여기다'], ['double-check', '한 번 더 확인하다']]
  },
  {
    id: 'e3', cat: 'exp', lv: 3,
    q: 'Tell me about a time you had a disagreement with a coworker.',
    ko: '동료와 의견이 달랐던 경험을 이야기해 주세요.',
    follow: ['How do you usually deal with conflict?', 'Is it better to avoid conflict or face it directly?'],
    tip: '무엇에 대해 의견이 달랐나 → 각자 입장 → 어떻게 합의했나 → 결과. 상대를 나쁘게 말하지 않는 게 포인트.',
    model: "Last year, a coworker and I disagreed about how to test a new system. He wanted to test everything at once to save time, but I thought we should test it step by step to reduce risk. We both had good reasons, so instead of arguing, we sat down and listed the pros and cons of each approach. In the end, we combined the two ideas: we tested the most critical parts first and the rest together. It worked well, and we actually became closer after that.",
    keys: [['disagree about ~', '~에 대해 의견이 다르다'], ['to reduce risk', '위험을 줄이기 위해'], ['list the pros and cons', '장단점을 정리하다'], ['combine the two ideas', '두 아이디어를 합치다']]
  },
  {
    id: 'e4', cat: 'exp', lv: 3,
    q: 'Tell me about an achievement you are proud of.',
    ko: '자랑스러운 성과를 이야기해 주세요.',
    follow: ['Who helped you achieve it?', 'What is your next goal?'],
    tip: '성과 → 왜 어려웠나 → 내가 한 일 → 숫자로 된 결과. "We" 와 "I"를 균형 있게.',
    model: "I'm most proud of a cost reduction project I led last year. Our team was asked to reduce the cost of a component by ten percent, which seemed almost impossible at first. I analyzed every step of the production process and suggested using a different material that was lighter and cheaper. After several months of testing, we reduced the cost by twelve percent without lowering quality. I received an award for it, but I think the real credit goes to the whole team.",
    keys: [['I\'m most proud of ~', '가장 자랑스러운 건 ~'], ['seemed almost impossible at first', '처음엔 거의 불가능해 보였다'], ['reduce ~ by N percent', '~을 N% 줄이다'], ['the credit goes to ~', '공은 ~에게 있다']]
  },
  {
    id: 'e5', cat: 'exp', lv: 3,
    q: 'Tell me about a time you had to learn something new quickly.',
    ko: '새로운 것을 빨리 배워야 했던 경험을 이야기해 주세요.',
    follow: ['How do you usually learn new skills?', 'What would you like to learn next?'],
    tip: '배워야 했던 것 → 왜 급했나 → 어떻게 배웠나(방법) → 결과.',
    model: "When our company introduced a new data analysis tool, I had to learn it within two weeks because I was in charge of the monthly report. I didn't have any experience with it, so I watched online tutorials every evening and practiced with real data from our team. When I got stuck, I asked a colleague from the IT team for help. By the deadline, I was able to make the report with the new tool, and later I even taught other team members how to use it.",
    keys: [['within two weeks', '2주 안에'], ['When I got stuck, ~', '막혔을 때는 ~'], ['By the deadline, ~', '마감까지 ~'], ['I was able to ~', '~할 수 있었어요']]
  },

  /* ───────── 의견·비교 (Lv4) ───────── */
  {
    id: 'o1', cat: 'opinion', lv: 4,
    q: 'Do you think working from home is more productive than working at the office?',
    ko: '재택근무가 사무실 근무보다 생산적이라고 생각하나요?',
    follow: ['What would be the best balance, in your opinion?', 'How would remote work affect company culture?'],
    tip: '입장 → 이유 1 (+예) → 이유 2 → 반대 측 인정 → 결론. 의견 질문은 이 틀 하나로 대부분 해결돼요.',
    model: "I think it depends on the type of work, but in general, a hybrid model is the most productive. Working from home saves commuting time and is great for tasks that need deep focus, like writing reports. On the other hand, the office is better for collaboration. In my experience, problems get solved much faster when people can just walk over and talk. So I believe the best balance would be two or three days at home and the rest at the office.",
    keys: [['It depends on ~', '~에 따라 달라요'], ['in general', '일반적으로'], ['In my experience, ~', '제 경험으로는 ~'], ['I believe the best balance would be ~', '최선의 균형은 ~라고 생각해요']]
  },
  {
    id: 'o2', cat: 'opinion', lv: 4,
    q: 'Some people say that English skills are essential for career success. Do you agree?',
    ko: '영어 실력이 커리어 성공에 필수라는 말에 동의하나요?',
    follow: ['Will AI translation make learning English unnecessary?', 'What is the best way to learn English?'],
    tip: '부분 동의(I partly agree)가 쓰기 쉽고 설득력도 있어요. 필수인 경우 vs 아닌 경우를 나눠 보세요.',
    model: "I partly agree. In global companies like mine, English is definitely a big advantage. We work with overseas plants and suppliers, and people who can communicate directly usually get more opportunities. However, I don't think it's essential for everyone. Expertise, problem-solving skills, and attitude matter more in many positions. Also, translation tools are getting better every year. So I would say English is a powerful tool, but it's not the only key to success.",
    keys: [['I partly agree', '부분적으로 동의해요'], ['a big advantage', '큰 장점'], ['matter more', '더 중요하다'], ['it\'s not the only key to ~', '~의 유일한 열쇠는 아니다']]
  },
  {
    id: 'o3', cat: 'opinion', lv: 4,
    q: 'What are the pros and cons of working for a large company compared to a startup?',
    ko: '대기업과 스타트업에서 일하는 것의 장단점은?',
    follow: ['Which would you choose if you were starting your career now?', 'Can large companies learn something from startups?'],
    tip: '비교 질문: 대기업 장점 → 단점 → 스타트업 장점 → 단점 → 내 선택. "whereas", "compared to"를 써 보세요.',
    model: "Large companies offer stability, good benefits, and systematic training. You can also work on big projects that have a real impact. The downside is that decisions can be slow because of many approval steps. Startups, on the other hand, move fast and give you more responsibility early on. You can learn a lot in a short time. However, there's more risk, since the company might not survive. Personally, I prefer a large company because I value stability, especially now that I have a family.",
    keys: [['The downside is that ~', '단점은 ~'], ['early on', '초기부터'], ['since ~', '~이기 때문에'], ['now that ~', '이제 ~이니까']]
  },
  {
    id: 'o4', cat: 'opinion', lv: 4,
    q: 'How has technology changed the way people work over the past ten years?',
    ko: '지난 10년간 기술이 일하는 방식을 어떻게 바꿨나요?',
    follow: ['Has technology made work more stressful or less stressful?', 'What technology will change work the most in the future?'],
    tip: '변화 2~3개 + 각각 예시 → 좋은 면·나쁜 면 → 정리. 현재완료(has changed, have become)를 정확히!',
    model: "Technology has changed the way we work dramatically. First, communication has become much faster. Ten years ago, we mainly used email and phone calls, but now we use messengers and video calls, so we can work with people anywhere. Second, a lot of repetitive work has been automated. For example, reports that used to take a whole day are now generated in minutes. The downside is that we're always connected, so it's harder to separate work from personal life.",
    keys: [['dramatically', '극적으로'], ['has become much faster', '훨씬 빨라졌다'], ['has been automated', '자동화되었다'], ['separate work from personal life', '일과 개인 생활을 분리하다']]
  },
  {
    id: 'o5', cat: 'opinion', lv: 4,
    q: 'Do you think AI will replace many jobs? What about your job?',
    ko: 'AI가 많은 일자리를 대체할까요? 당신의 일은요?',
    follow: ['How are you preparing for these changes?', 'Should the government help workers whose jobs are replaced?'],
    tip: '일반론(대체될 일 vs 남을 일) → 내 직무에 적용 → 대비. "rather than"으로 대조하세요.',
    model: "I think AI will replace some jobs, especially ones with repetitive tasks like data entry or simple customer service. But I believe it will change most jobs rather than eliminate them. In my case, AI could analyze defect data much faster than people, but someone still needs to understand the context, talk to suppliers, and make the final decision. So I see AI as a powerful assistant. The important thing is to learn how to use it well, so I've been using AI tools for my reports recently.",
    keys: [['rather than ~', '~하기보다는'], ['eliminate', '없애다'], ['make the final decision', '최종 결정을 내리다'], ['I see A as B', 'A를 B로 여겨요']]
  },
  {
    id: 'o6', cat: 'opinion', lv: 4,
    q: 'What makes a good leader?',
    ko: '좋은 리더의 조건은 무엇인가요?',
    follow: ['Do you think leaders are born or made?', 'What kind of leader do you want to be?'],
    tip: '자질 2~3개 + 각각 이유 → 실제로 본 리더 예시 → 나의 다짐. 진급 시험에 자주 나오는 주제예요.',
    model: "In my opinion, a good leader needs three qualities. The first is clear communication. Team members should understand the goal and why it matters. The second is trust. A good leader gives people responsibility instead of controlling every detail. And the third is taking responsibility when things go wrong, rather than blaming others. My former manager had all of these qualities, and our team performed really well under him. I hope to become that kind of leader.",
    keys: [['needs three qualities', '세 가지 자질이 필요해요'], ['why it matters', '그것이 왜 중요한지'], ['control every detail', '세세한 것까지 통제하다'], ['perform well under ~', '~ 아래에서 성과를 잘 내다']]
  },
  {
    id: 'o7', cat: 'opinion', lv: 4,
    q: 'Should companies introduce a four-day workweek?',
    ko: '회사가 주 4일 근무제를 도입해야 할까요?',
    follow: ['Which industries would find it difficult?', 'Would you take a pay cut for a four-day week?'],
    tip: '찬반 선택 → 근거 → 현실적 문제 인정 → 조건부 결론(It could work if ~).',
    model: "I think it's a good idea in theory, but it should be introduced carefully. Studies in some countries showed that people became more focused and productivity didn't drop. It would also help with work-life balance and burnout. However, in manufacturing, production lines need to run continuously, so it would be hard to apply the same system. So I think it could work if companies start with office jobs first and expand it gradually based on the results.",
    keys: [['in theory', '이론상으로는'], ['productivity didn\'t drop', '생산성이 떨어지지 않았다'], ['It could work if ~', '~라면 효과가 있을 수 있어요'], ['gradually', '점진적으로']]
  },

  /* ───────── 롤플레이·가정 (Lv4~5) ───────── */
  {
    id: 'r1', cat: 'role', lv: 4,
    q: 'Imagine a key supplier tells you the parts will arrive two weeks late. What would you do?',
    ko: '핵심 협력사가 부품이 2주 늦게 온다고 합니다. 어떻게 하시겠어요?',
    follow: ['How would you explain the situation to your boss?', 'How can this kind of problem be prevented?'],
    tip: '가정법(I would ~)을 끝까지 유지하세요. 원인 파악 → 영향 파악 → 대안 → 보고 순서.',
    model: "First, I would find out exactly why the parts are late and whether the delay could get even longer. Then I'd check how it affects our production schedule and how much stock we have left. Next, I would look for alternatives, such as getting some of the parts from another supplier or asking the supplier to send a partial delivery by air. At the same time, I'd report the situation to my manager with a clear plan, so we can make a decision quickly.",
    keys: [['I would find out ~', '~을 알아보겠어요'], ['how much stock we have left', '재고가 얼마나 남았는지'], ['a partial delivery by air', '항공으로 일부 납품'], ['report ~ with a clear plan', '명확한 계획과 함께 보고하다']]
  },
  {
    id: 'r2', cat: 'role', lv: 4,
    q: 'Role-play: I\'m a foreign client visiting your company. Can you recommend some places to visit in Seoul?',
    ko: '롤플레이: 저는 회사를 방문한 외국 고객이에요. 서울에서 가 볼 곳을 추천해 주세요.',
    follow: ['What Korean food should I try?', 'How should I get around the city?'],
    tip: '상대에게 직접 말하듯(You should ~ / If you like ~). 질문으로 취향을 묻는 것도 좋은 롤플레이 기술이에요.',
    model: "Of course! It depends on what you're interested in. If you like history, I'd definitely recommend Gyeongbokgung Palace. You can even rent a hanbok and get in for free. If you prefer modern places, you should check out Seongsu-dong, which has lots of trendy cafes and pop-up stores. And for the evening, Namsan Tower has a great night view of the city. How long will you be staying? If you have a free afternoon, I'd be happy to show you around.",
    keys: [['It depends on what you\'re interested in', '관심사에 따라 달라요'], ['I\'d definitely recommend ~', '~을 꼭 추천해요'], ['You should check out ~', '~에 가 보세요'], ['I\'d be happy to show you around', '기꺼이 안내해 드릴게요']]
  },
  {
    id: 'r3', cat: 'role', lv: 5,
    q: 'Role-play: You need to persuade your manager to approve a budget increase for your project. Make your case to me.',
    ko: '롤플레이: 프로젝트 예산 증액을 상사에게 설득해야 합니다. 저를 설득해 보세요.',
    follow: ['What if I say the company can\'t afford it right now?', 'What happens if we don\'t approve it?'],
    tip: '요청 → 이유(데이터) → 이익(ROI) → 반대 의견 미리 대응 → 정중한 마무리. 설득 질문은 최고 레벨 판단 문제예요.',
    model: "Thank you for your time. I'd like to request a fifteen percent increase in our project budget. The main reason is that material prices have gone up by about twenty percent since we made the plan. If we keep the current budget, we would have to cut the testing period, which could lead to quality problems later. That would cost much more in the long run. I understand that budgets are tight this year, so I've also prepared a plan to save costs in other areas. I'd really appreciate it if you could consider it.",
    keys: [['I\'d like to request ~', '~을 요청드리고 싶어요'], ['which could lead to ~', '그러면 ~으로 이어질 수 있어요'], ['in the long run', '장기적으로'], ['I\'d really appreciate it if you could ~', '~해 주시면 정말 감사하겠어요']]
  },
  {
    id: 'r4', cat: 'role', lv: 5,
    q: 'If you became the CEO of your company tomorrow, what would you change first?',
    ko: '내일 회사의 CEO가 된다면 무엇을 가장 먼저 바꾸겠어요?',
    follow: ['How would you deal with employees who resist the change?', 'What would you keep the same?'],
    tip: '가정법 과거(If I were/became ~, I would ~). 바꿀 것 1~2개 → 이유 → 기대 효과.',
    model: "If I became the CEO tomorrow, the first thing I would change is the decision-making process. Right now, even small decisions need several levels of approval, and that slows us down a lot. I would give team leaders more authority to make decisions on their own. I would also create a system where any employee can suggest ideas directly to management. I believe these changes would make our company faster and more innovative, which is essential as competition in the industry gets tougher.",
    keys: [['the first thing I would change is ~', '가장 먼저 바꿀 건 ~'], ['slow ~ down', '~을 느리게 하다'], ['give ~ more authority', '~에게 더 많은 권한을 주다'], ['as competition gets tougher', '경쟁이 심해지면서']]
  },
  {
    id: 'r5', cat: 'role', lv: 5,
    q: 'Imagine you\'re a team leader and a new team member is not getting along with the others. How would you handle it?',
    ko: '팀장인데 새 팀원이 다른 팀원들과 잘 어울리지 못합니다. 어떻게 하시겠어요?',
    follow: ['What if the problem continues?', 'How can a leader build a good team culture?'],
    tip: '관찰 → 1:1 대화(경청) → 팀 차원의 조치 → 후속 확인. 리더십 표현을 보여 줄 기회예요.',
    model: "First, I would try to understand the situation by observing and talking to a few team members privately. Then I would have a one-on-one conversation with the new member. I'd listen carefully to how they feel, because sometimes new people just feel left out or unsure about how things work. I might assign them a mentor and give them a small project with a teammate so they can build trust naturally. After a few weeks, I would check in again to see if things have improved.",
    keys: [['have a one-on-one conversation', '1:1 대화를 하다'], ['feel left out', '소외감을 느끼다'], ['build trust', '신뢰를 쌓다'], ['check in again', '다시 상황을 확인하다']]
  },
  {
    id: 'r6', cat: 'role', lv: 5,
    q: 'Role-play: I\'m a customer and my new car keeps having the same problem. Please respond to me.',
    ko: '롤플레이: 저는 고객이고 새 차에 같은 문제가 계속 생겨요. 응대해 주세요.',
    follow: ['I want a full refund. What can you do?', 'Why should I trust your company again?'],
    tip: '사과·공감 → 구체적 질문 → 해결책 제시 → 후속 약속. 고객에게 직접 말하는 말투(I\'m so sorry to hear that…)를 유지하세요.',
    model: "I'm really sorry to hear that. I completely understand how frustrating it must be to have problems with a new car. Could you tell me a little more about the problem, like when it happens and what kind of noise or warning you notice? Based on what you tell me, I'll arrange a priority inspection at our service center this week, and we'll provide a rental car while yours is being repaired. I'll also personally follow up with you after the repair to make sure the problem is completely solved.",
    keys: [['I\'m really sorry to hear that', '정말 죄송합니다(유감입니다)'], ['how frustrating it must be', '얼마나 답답하실지'], ['arrange a priority inspection', '우선 점검을 잡아 드리다'], ['personally follow up with you', '직접 후속 연락을 드리다']]
  },

  /* ───────── 산업·사회 이슈 (Lv5) ───────── */
  {
    id: 'x1', cat: 'issue', lv: 5,
    q: 'What do you think the automotive industry will look like in ten years?',
    ko: '10년 뒤 자동차 산업은 어떤 모습일까요?',
    follow: ['Which change will affect your work the most?', 'Will people still want to own cars?'],
    tip: '변화 2~3개(전동화·자율주행·소프트웨어) → 각각 근거 → 우리 회사·내 일에 미칠 영향. 미래 표현(will, is likely to)!',
    model: "I think the industry will change more in the next ten years than it did in the last fifty. First, most new cars will probably be electric, as batteries get cheaper and charging networks expand. Second, cars will become more like smartphones. Software will be updated over the air, and companies will make money from services, not just from selling cars. Autonomous driving is likely to be common on highways, although fully driverless cities may take longer. Car makers that can't adapt to software will struggle.",
    keys: [['as ~ get cheaper', '~이 저렴해지면서'], ['be updated over the air', '무선으로 업데이트되다'], ['be likely to ~', '~할 가능성이 높다'], ['struggle', '어려움을 겪다']]
  },
  {
    id: 'x2', cat: 'issue', lv: 5,
    q: 'Electric vehicles or hydrogen vehicles: which do you think has a better future? Why?',
    ko: '전기차와 수소차 중 어느 쪽이 더 미래가 있다고 보나요?',
    follow: ['What is the biggest obstacle for hydrogen cars?', 'Should the government keep giving subsidies for eco-friendly cars?'],
    tip: '한쪽 선택 + "다만 ~에서는 다른 쪽" 식의 균형 잡힌 답이 고득점. 용도(승용·상용) 구분이 좋은 근거예요.',
    model: "For passenger cars, I think electric vehicles have a better future. The technology is already mature, battery prices keep falling, and you can charge at home. Hydrogen cars, however, still have a serious infrastructure problem. There are very few charging stations, and producing clean hydrogen is expensive. That said, I believe hydrogen will play an important role in heavy vehicles like trucks and buses, because they need a long range and quick refueling. So both technologies will probably coexist.",
    keys: [['The technology is already mature', '기술이 이미 성숙했다'], ['That said, ~', '그렇긴 하지만 ~'], ['play an important role in ~', '~에서 중요한 역할을 하다'], ['coexist', '공존하다']]
  },
  {
    id: 'x3', cat: 'issue', lv: 5,
    q: 'Are fully autonomous cars a good idea? What are the risks?',
    ko: '완전 자율주행차는 좋은 생각일까요? 위험은 무엇인가요?',
    follow: ['If an autonomous car causes an accident, who should be responsible?', 'Would you let your children ride in one?'],
    tip: '장점 → 위험(안전·책임·해킹·일자리) → 해결 조건 → 결론. 어려운 질문엔 "That\'s a tough question, but…"으로 시간을 버세요.',
    model: "That's a tough question. In the long run, I think autonomous cars are a good idea, because most accidents are caused by human error, such as drowsy or distracted driving. They could also help elderly or disabled people move freely. However, there are serious risks. The technology still struggles in bad weather and unexpected situations, and it's not clear who is responsible when an accident happens. Hacking is another concern. So I believe we need strict regulations and a clear legal framework before they become widespread.",
    keys: [['That\'s a tough question', '어려운 질문이네요'], ['be caused by human error', '사람의 실수로 일어나다'], ['Another concern is ~', '또 다른 우려는 ~'], ['a clear legal framework', '명확한 법적 체계']]
  },
  {
    id: 'x4', cat: 'issue', lv: 5,
    q: 'How can companies balance making profits with environmental responsibility?',
    ko: '기업은 이익과 환경 책임 사이의 균형을 어떻게 잡을 수 있을까요?',
    follow: ['Do you think consumers are willing to pay more for eco-friendly products?', 'What is your company doing for the environment?'],
    tip: '"둘은 반대가 아니다"라는 관점이 설득력 있어요. 회사 사례(재활용 소재·탄소중립 공장)를 넣으세요.',
    model: "I don't think profit and environmental responsibility are always in conflict. In the short term, eco-friendly investments can be expensive, but in the long term they can reduce costs and attract customers. For example, using renewable energy in factories lowers energy bills over time, and many young consumers prefer brands that care about the environment. Also, regulations are getting stricter, especially in Europe, so companies that prepare early will have a competitive advantage. The key is to see sustainability as an investment, not a cost.",
    keys: [['be in conflict', '상충하다'], ['In the short term / In the long term', '단기적으로 / 장기적으로'], ['a competitive advantage', '경쟁 우위'], ['see A as B, not C', 'A를 C가 아닌 B로 보다']]
  },
  {
    id: 'x5', cat: 'issue', lv: 5,
    q: 'Korea has a very low birth rate. How might this affect companies and the economy?',
    ko: '한국은 출산율이 매우 낮습니다. 기업과 경제에 어떤 영향을 줄까요?',
    follow: ['What can companies do to help employees raise children?', 'Should Korea accept more immigrants?'],
    tip: '영향(인력 부족·내수 감소·연금) → 기업 대응(자동화·해외 인재·육아 지원) → 정리. 원인-결과 연결어(As a result, This means)를 쓰세요.',
    model: "The low birth rate will have a big impact. First, there will be fewer young workers, so companies will face labor shortages, especially in manufacturing. Second, the domestic market will shrink, which means companies will need to rely more on exports. To respond, companies will probably invest more in automation and hire more foreign talent. I also think companies should play a role in solving the problem itself, for example by offering flexible working hours and better childcare support, so that employees don't have to choose between their career and family.",
    keys: [['have a big impact', '큰 영향을 미치다'], ['face labor shortages', '인력 부족에 직면하다'], ['which means ~', '이는 ~을 의미해요'], ['choose between A and B', 'A와 B 중 선택하다']]
  },
  {
    id: 'x6', cat: 'issue', lv: 5,
    q: 'What is the biggest challenge facing your industry right now, and how should companies respond?',
    ko: '지금 당신의 산업이 직면한 가장 큰 과제는 무엇이고, 기업은 어떻게 대응해야 하나요?',
    follow: ['Is your company well prepared for it?', 'What role can you personally play?'],
    tip: '과제 하나를 골라 깊게: 배경 → 왜 어려운가 → 대응 2가지 → 내 역할. 너무 많이 나열하지 마세요.',
    model: "I think the biggest challenge is the transition to software-defined vehicles. In the past, car makers competed on engines and design, but now the key is software, like driver assistance and connected services. The problem is that traditional car companies don't have enough software engineers, and tech companies like Tesla are moving very fast. To respond, companies need to hire and train software talent aggressively and change their organizational culture to be more flexible. Personally, I'm trying to understand software processes better so I can work effectively with those teams.",
    keys: [['the transition to ~', '~으로의 전환'], ['compete on ~', '~으로 경쟁하다'], ['aggressively', '적극적으로'], ['so I can ~', '~할 수 있도록']]
  },

  /* ═════════ 추가 질문 묶음 ═════════ */
  {
    id: 'i5', cat: 'intro', lv: 1,
    q: 'Why are you taking this test today?',
    ko: '오늘 이 시험을 보는 이유는 무엇인가요?',
    follow: ['How did you prepare for this test?', 'How do you feel right now?'],
    tip: '솔직한 이유(진급) + 영어가 필요한 업무 상황 한 가지. 짧고 자신 있게!',
    model: "I'm taking this test because I'm up for promotion this year, and an English speaking score is one of the requirements. But it's not just for the promotion. These days, I have more chances to work with overseas plants and partners, so I really need to communicate in English. I've been practicing speaking every day for the past few months, so I hope it shows today.",
    keys: [['be up for promotion', '진급 대상이다'], ['one of the requirements', '요건 중 하나'], ['It\'s not just for ~', '단지 ~ 때문만은 아니에요'], ['I hope it shows', '그 노력이 드러나면 좋겠어요']]
  },
  {
    id: 'd7', cat: 'daily', lv: 1,
    q: 'What is your favorite season? Why?',
    ko: '가장 좋아하는 계절은? 이유는?',
    follow: ['What do you usually do in that season?', 'Which season do you like the least?'],
    tip: '계절 하나 → 이유 2가지(날씨·활동) → 그 계절에 하는 일. 형용사(cool, crisp, colorful)를 써 보세요.',
    model: "My favorite season is autumn. First, the weather is perfect. It's not too hot or too cold, and the sky is clear and blue. Second, it's a great season for outdoor activities. The mountains turn red and yellow, so I often go hiking with my family. The only problem is that it's too short in Korea. It feels like winter comes right after summer these days.",
    keys: [['not too hot or too cold', '너무 덥지도 춥지도 않은'], ['turn red and yellow', '붉고 노랗게 물들다'], ['The only problem is that ~', '유일한 문제는 ~'], ['It feels like ~', '~인 것 같은 느낌이에요']]
  },
  {
    id: 'd8', cat: 'daily', lv: 2,
    q: 'Tell me about the neighborhood you live in.',
    ko: '살고 있는 동네에 대해 이야기해 주세요.',
    follow: ['What do you like most about living there?', 'Would you like to move somewhere else in the future?'],
    tip: '위치·주거 형태 → 주변 시설 → 좋은 점·아쉬운 점. "There is / There are"를 활용하세요.',
    model: "I live in an apartment complex in Dongtan, which is a new town near Suwon. It's a good place for families because there are lots of parks, schools, and hospitals nearby. There's also a big shopping mall within walking distance. What I like most is the walking trail along the lake, where I often take a walk after dinner. The downside is the traffic during rush hour, because a lot of people commute to Seoul.",
    keys: [['apartment complex', '아파트 단지'], ['within walking distance', '걸어갈 수 있는 거리에'], ['take a walk', '산책하다'], ['during rush hour', '출퇴근 시간에']]
  },
  {
    id: 'd9', cat: 'daily', lv: 2,
    q: 'How do you study English?',
    ko: '영어 공부는 어떻게 하세요?',
    follow: ['What is the hardest part of learning English for you?', 'What advice would you give to someone starting to learn English?'],
    tip: '방법 2~3가지(앱·드라마·회화 수업) → 꾸준히 하는 요령 → 어려운 점. 지금 쓰는 이 앱 이야기도 좋아요!',
    model: "I study English in a few different ways. On my way to work, I listen to English podcasts about business and technology. Twice a week, I take an online conversation class with a native speaker. I also use an app to practice answering interview questions and record my voice. Listening to my own recordings was embarrassing at first, but it really helps me find my mistakes. The hardest part is finding time, so I try to study a little every day instead of a lot at once.",
    keys: [['On my way to work', '출근길에'], ['take an online conversation class', '온라인 회화 수업을 듣다'], ['embarrassing at first', '처음엔 창피한'], ['a little every day instead of a lot at once', '한 번에 많이 말고 매일 조금씩']]
  },
  {
    id: 'd10', cat: 'daily', lv: 2,
    q: 'How do you usually spend long holidays like Chuseok or Seollal?',
    ko: '추석·설 같은 긴 연휴는 주로 어떻게 보내세요?',
    follow: ['How have holidays changed compared to when you were young?', 'What is the best part of the holidays?'],
    tip: '명절 간단 소개 → 우리 가족이 하는 일(현재형) → 느낌. 외국인에게 설명하듯 말하세요.',
    model: "Chuseok is one of the biggest holidays in Korea, kind of like Thanksgiving. Usually my family drives to my parents' house in Daegu, although the traffic is terrible. We prepare food together, visit my grandparents' graves, and spend time catching up. My kids love it because their grandparents spoil them. These days, though, more people travel abroad during the holidays instead, and honestly, I'm tempted to try that someday.",
    keys: [['kind of like ~', '~ 같은 거예요'], ['although the traffic is terrible', '차가 엄청 막히긴 하지만'], ['spoil', '(아이를) 오냐오냐하다'], ['I\'m tempted to ~', '~하고 싶은 마음이 들어요']]
  },
  {
    id: 'w9', cat: 'work', lv: 3,
    q: 'How do you prioritize when you have many tasks at the same time?',
    ko: '여러 일이 한꺼번에 몰리면 우선순위를 어떻게 정하나요?',
    follow: ['What do you do when two managers ask for something urgent at the same time?', 'Do you use any tools to manage your tasks?'],
    tip: '기준(긴급성·중요도) → 구체적 방법 → 실제 예시. "urgent vs important" 구분이 핵심이에요.',
    model: "When I have many tasks, I first list everything and divide them by urgency and importance. Tasks that are both urgent and important come first, and things that are not urgent can be scheduled for later. If something can be done in five minutes, I just do it right away. For example, last month I had a quality report, a supplier meeting, and a training session in the same week. I asked my manager which one had the highest priority, and that helped me plan my time clearly.",
    keys: [['divide them by urgency and importance', '긴급도와 중요도로 나누다'], ['come first', '먼저 처리되다'], ['right away', '바로'], ['the highest priority', '최우선 순위']]
  },
  {
    id: 'w10', cat: 'work', lv: 3,
    q: 'What is the culture like at your company?',
    ko: '회사 문화는 어떤가요?',
    follow: ['How has it changed since you joined?', 'What would you like to improve about it?'],
    tip: '전체 분위기 → 예전과 달라진 점(예: 호칭·복장·유연근무) → 좋은 점/아쉬운 점.',
    model: "Overall, my company has a fairly traditional culture, but it's been changing a lot recently. When I first joined, there was a strict hierarchy, and we had to wear suits every day. Now, we have a casual dress code, flexible working hours, and we call each other by job titles that are much simpler. Younger employees speak up more in meetings, which I think is a good change. However, decision-making is still a bit slow, so there's room for improvement.",
    keys: [['fairly traditional', '꽤 보수적인'], ['a strict hierarchy', '엄격한 위계질서'], ['speak up', '의견을 말하다'], ['there\'s room for improvement', '개선의 여지가 있다']]
  },
  {
    id: 'w11', cat: 'work', lv: 3,
    q: 'How does your company train new employees?',
    ko: '회사는 신입 사원을 어떻게 교육하나요?',
    follow: ['What was your own training like?', 'What would make the training better?'],
    tip: '단계별 설명(입문 교육 → 부서 교육 → 멘토링) → 효과 → 개선점. 수동태(are trained, is assigned)를 써 보세요.',
    model: "New employees first go through a four-week orientation program at our training center, where they learn about the company's history, products, and basic business skills. After that, they are assigned to their departments. Each new person gets a mentor, usually a senior colleague, who helps them for about six months. I've been a mentor twice, and I think the mentoring part is the most effective, because it's personal and practical.",
    keys: [['go through an orientation program', '입문 교육을 거치다'], ['be assigned to ~', '~에 배치되다'], ['a senior colleague', '선배 동료'], ['personal and practical', '개인적이고 실용적인']]
  },
  {
    id: 'w12', cat: 'work', lv: 3,
    q: 'Describe a meeting you attended recently.',
    ko: '최근에 참석한 회의를 묘사해 주세요.',
    follow: ['Was the meeting productive? Why or why not?', 'How can meetings be more efficient?'],
    tip: '언제·누가·주제 → 오간 이야기 → 결론·내 역할. 과거형과 보고 표현(we discussed, we agreed)을 쓰세요.',
    model: "Last Thursday, I attended a meeting with the design and production teams about a new interior part. About ten people joined, some in person and some online. We discussed a problem where the part didn't fit well during the trial production. The design team wanted to change the shape, but production said it would take too long. After an hour of discussion, we agreed to make a small adjustment to the mold instead. My role was to check the cost and schedule impact and report back by Monday.",
    keys: [['some in person and some online', '일부는 대면, 일부는 온라인으로'], ['We discussed ~', '~을 논의했어요'], ['We agreed to ~', '~하기로 합의했어요'], ['report back', '결과를 보고하다']]
  },
  {
    id: 's5', cat: 'describe', lv: 3,
    q: 'Describe something you use every day and explain why it is important to you.',
    ko: '매일 쓰는 물건 하나를 묘사하고 왜 중요한지 설명해 주세요.',
    follow: ['How would your life be different without it?', 'What will replace it in the future?'],
    tip: '물건 → 생김새·기능 묘사 → 쓰는 상황 → 없으면 어떨지. 묘사력(shape, size, features)을 보여 주세요.',
    model: "Something I use every day is my smartwatch. It's small and black, with a round screen and a rubber strap. It shows the time, of course, but it also tracks my steps, heart rate, and sleep. During the day, it vibrates when I get important messages, so I don't have to keep checking my phone in meetings. It's important to me because it helps me stay healthy and focused. Honestly, when I forget it at home, I feel like something is missing.",
    keys: [['It\'s small and black, with ~', '작고 검은색이고 ~이 있어요'], ['track', '기록·추적하다'], ['so I don\'t have to ~', '그래서 ~하지 않아도 돼요'], ['I feel like something is missing', '뭔가 빠진 느낌이에요']]
  },
  {
    id: 's6', cat: 'describe', lv: 3,
    q: 'Explain a Korean tradition or custom to someone from another country.',
    ko: '외국인에게 한국의 전통이나 풍습 하나를 설명해 주세요.',
    follow: ['Is this tradition still common among young people?', 'Is there a similar custom in other countries?'],
    tip: '무엇인지 → 언제·어떻게 하는지 → 의미 → 요즘 변화. 한국어 단어는 꼭 영어로 풀어서!',
    model: "One interesting Korean custom is that people often pour drinks for each other instead of for themselves. When you drink with someone older or more senior, you hold the bottle with both hands, and when you receive a drink, you also hold your glass with both hands. Younger people sometimes turn their head slightly away when they drink. It's a way of showing respect. These days, it's less strict among young people, but in business dinners, it's still quite common.",
    keys: [['pour drinks for each other', '서로 술을 따라 주다'], ['with both hands', '두 손으로'], ['a way of showing respect', '존중을 표현하는 방법'], ['less strict', '덜 엄격한']]
  },
  {
    id: 'e6', cat: 'exp', lv: 3,
    q: 'Tell me about your first day at your company.',
    ko: '입사 첫날에 대해 이야기해 주세요.',
    follow: ['How has the company changed since then?', 'What advice would you give to new employees?'],
    tip: '그날의 장면 묘사 → 느낌(nervous, excited) → 기억나는 사람·일 → 지금 돌아보면. 과거형 연습에 좋아요.',
    model: "I still remember my first day very clearly. I wore a brand-new suit and arrived an hour early because I was so nervous. My team leader introduced me to everyone, but there were so many names that I couldn't remember any of them. At lunch, a senior colleague took me to a famous noodle place near the office and told me not to worry too much. That small kindness meant a lot to me. Looking back, I was so serious and stiff. Now I try to do the same for new people.",
    keys: [['I still remember ~ very clearly', '~을 아직 생생히 기억해요'], ['brand-new', '새로 산'], ['meant a lot to me', '저에게 큰 의미였어요'], ['Looking back,', '돌이켜 보면']]
  },
  {
    id: 'e7', cat: 'exp', lv: 3,
    q: 'Tell me about a time you had to meet a very tight deadline.',
    ko: '아주 빠듯한 마감을 맞춰야 했던 경험을 이야기해 주세요.',
    follow: ['What would you do differently next time?', 'Do you work better under pressure?'],
    tip: 'STAR 구조. 마감이 왜 급했나 → 내가 한 조치(분담·우선순위) → 결과 → 교훈.',
    model: "Last year, a major client suddenly moved their audit forward by two weeks, so we had only five days to prepare all the quality documents. First, I split the work among three team members based on their strengths. I focused on the most critical data myself. We had a quick check-in every morning and evening to catch problems early. We worked late for several days, but we submitted everything on time, and the audit went smoothly. I learned that clear roles matter more than long hours.",
    keys: [['move ~ forward', '(일정을) 앞당기다'], ['split the work among ~', '~에게 일을 나누다'], ['catch problems early', '문제를 일찍 발견하다'], ['clear roles matter more than long hours', '오래 일하는 것보다 명확한 역할이 중요하다']]
  },
  {
    id: 'e8', cat: 'exp', lv: 3,
    q: 'Tell me about a time you helped a colleague.',
    ko: '동료를 도와준 경험을 이야기해 주세요.',
    follow: ['Has a colleague ever helped you in a similar way?', 'Why is teamwork important in your job?'],
    tip: '동료의 상황 → 내가 한 도움 → 결과 → 느낀 점. 자랑보다 팀워크를 강조하세요.',
    model: "A couple of years ago, a junior colleague on my team was struggling with his first big presentation to senior management. He was very nervous and his slides were too detailed. I offered to help, so we stayed after work for two evenings. I showed him how to focus on three key messages and we practiced answering tough questions. The presentation went really well, and he even got compliments from the director. It felt great, maybe even better than when I succeed myself.",
    keys: [['be struggling with ~', '~으로 애를 먹고 있다'], ['I offered to help', '돕겠다고 나섰어요'], ['focus on three key messages', '핵심 메시지 세 개에 집중하다'], ['get compliments from ~', '~에게 칭찬을 받다']]
  },
  {
    id: 'o8', cat: 'opinion', lv: 4,
    q: 'Is it better to stay at one company for a long time or to change jobs several times?',
    ko: '한 회사에 오래 다니는 것과 여러 번 이직하는 것 중 어느 쪽이 나을까요?',
    follow: ['Has your view changed as you got older?', 'Why do young people change jobs more often these days?'],
    tip: '양쪽 장점 비교 → 내 입장 → 조건(직무·나이에 따라). "On the other hand"로 대조해 보세요.',
    model: "Both have their advantages. Staying at one company lets you build deep expertise and strong relationships, and you understand how everything works. Changing jobs, on the other hand, can help you gain a wider range of experience and often a higher salary. Personally, I prefer staying longer, as long as I keep growing. I've been at my company for twelve years, but I've moved between three different departments, so it feels like I've had several jobs in one company. I think what really matters is whether you keep learning.",
    keys: [['Both have their advantages', '둘 다 장점이 있어요'], ['a wider range of experience', '더 폭넓은 경험'], ['as long as ~', '~하는 한'], ['what really matters is ~', '정말 중요한 건 ~']]
  },
  {
    id: 'o9', cat: 'opinion', lv: 4,
    q: 'Should promotions be based on performance or on years of experience?',
    ko: '진급은 성과 기준이어야 할까요, 연차 기준이어야 할까요?',
    follow: ['How can a company measure performance fairly?', 'What are the risks of a purely performance-based system?'],
    tip: '진급 시험에서 나올 법한 주제! 입장 → 이유 → 반대쪽 우려 인정 → 균형 잡힌 제안.',
    model: "I believe promotions should be based mainly on performance. If people get promoted just because they've been around longer, talented employees lose motivation and may leave the company. On the other hand, performance can be hard to measure fairly, especially in support roles. Experience also brings valuable knowledge that doesn't always show up in numbers. So ideally, I think performance should be the main factor, but experience and teamwork should also be considered, with clear and transparent criteria.",
    keys: [['be based mainly on ~', '주로 ~에 근거하다'], ['lose motivation', '의욕을 잃다'], ['show up in numbers', '숫자로 드러나다'], ['clear and transparent criteria', '명확하고 투명한 기준']]
  },
  {
    id: 'o10', cat: 'opinion', lv: 4,
    q: 'Do you think social media has more positive or negative effects on people?',
    ko: '소셜 미디어가 사람들에게 긍정적 영향이 더 클까요, 부정적 영향이 더 클까요?',
    follow: ['How much time do you spend on social media?', 'Should children\'s use of social media be limited?'],
    tip: '장점(소통·정보) vs 단점(비교·중독·가짜 뉴스) → 내 결론 → 어떻게 써야 하는지.',
    model: "I think social media itself is neutral, but it has more negative effects when people use it without control. On the positive side, it helps us stay in touch with friends and get information quickly. Companies also use it to communicate with customers. However, many people compare their lives with others' perfect photos and feel unhappy. It can also spread fake news very fast. So I think the key is to use it moderately. Personally, I turned off notifications, and I check it only once or twice a day.",
    keys: [['On the positive side, ~', '긍정적인 면에서는 ~'], ['stay in touch with ~', '~와 연락을 유지하다'], ['spread fake news', '가짜 뉴스를 퍼뜨리다'], ['moderately', '적당히']]
  },
  {
    id: 'o11', cat: 'opinion', lv: 4,
    q: 'Should companies hire people based on skills rather than university degrees?',
    ko: '기업은 학위보다 실력을 보고 채용해야 할까요?',
    follow: ['How can companies test skills during hiring?', 'Is a university degree still worth it?'],
    tip: '입장 → 근거(기술 변화·다양성) → 학위의 가치도 인정 → 결론. 진급 시험 의견 질문의 전형이에요.',
    model: "Yes, I think skills should matter more than degrees. Technology changes so fast that what people learned at university can become outdated in a few years. Many great software engineers, for example, taught themselves online. Hiring for skills also gives a chance to talented people who couldn't go to a good university. That said, a degree still shows that someone can work hard and learn systematically. So the best approach would be to look at both, but give more weight to practical tests and real experience.",
    keys: [['become outdated', '구식이 되다'], ['teach oneself', '독학하다'], ['learn systematically', '체계적으로 배우다'], ['give more weight to ~', '~에 더 비중을 두다']]
  },
  {
    id: 'r7', cat: 'role', lv: 4,
    q: 'Role-play: You are going to be late for an important meeting with an overseas partner. Call me and explain.',
    ko: '롤플레이: 해외 파트너와의 중요한 회의에 늦게 됐어요. 저에게 전화해서 설명하세요.',
    follow: ['Can we just reschedule the meeting to tomorrow instead?', 'How long exactly will you be?'],
    tip: '인사·이름 → 사과 + 이유(짧게) → 도착 예상 시간 → 대안 제시 → 다시 사과. 전화 영어 표현 연습!',
    model: "Hello, Mr. Brown? This is Minsu Kim from Hyundai. I'm really sorry, but I'm afraid I'm going to be about twenty minutes late for our meeting. There was an accident on the highway, and traffic is completely stopped. I should arrive by two-twenty. If that's not convenient for you, we could start the meeting online now, and I can join from my phone. Or, if you prefer, we could move it to a later time today. Again, I apologize for the inconvenience.",
    keys: [['This is ~ from ~', '저는 ~의 ~입니다(전화)'], ['I\'m afraid I\'m going to be ~ late', '죄송하지만 ~ 늦을 것 같아요'], ['If that\'s not convenient for you, ~', '불편하시면 ~'], ['I apologize for the inconvenience', '불편을 드려 죄송합니다']]
  },
  {
    id: 'r8', cat: 'role', lv: 4,
    q: 'Role-play: I\'m your coworker. Ask me to cover your work while you\'re on vacation next week.',
    ko: '롤플레이: 저는 동료예요. 다음 주 휴가 동안 업무를 대신 봐 달라고 부탁하세요.',
    follow: ['I\'m really busy next week too. Can you ask someone else?', 'What should I do if there\'s an emergency?'],
    tip: '정중한 부탁(I was wondering if ~) → 맡길 일 구체적으로 → 준비해 둔 것 → 보답 약속.',
    model: "Hey, Jiwon, do you have a minute? I'm taking a vacation next week, from Monday to Friday, and I was wondering if you could cover a few things for me. There are just two main tasks: checking the daily delivery report and answering urgent emails from our supplier in Vietnam. I've written a simple guide with all the contacts and files, so it shouldn't take more than thirty minutes a day. If anything serious happens, you can call me anytime. I'll definitely return the favor when you go on vacation.",
    keys: [['Do you have a minute?', '잠깐 시간 있어요?'], ['I was wondering if you could ~', '혹시 ~해 줄 수 있을까 해서요'], ['it shouldn\'t take more than ~', '~ 이상은 안 걸릴 거예요'], ['return the favor', '신세를 갚다']]
  },
  {
    id: 'r9', cat: 'role', lv: 5,
    q: 'Imagine your team\'s project failed. How would you report it to senior management?',
    ko: '팀 프로젝트가 실패했다고 가정해 보세요. 경영진에게 어떻게 보고하겠어요?',
    follow: ['What if they blame your team members?', 'How would you keep your team motivated after the failure?'],
    tip: '가정법 유지(I would ~). 사실 → 원인 분석 → 책임 인정 → 재발 방지·다음 계획. 변명처럼 들리지 않게!',
    model: "I would report it as soon as possible and be completely honest about the result. First, I would explain what happened with clear data, without hiding anything. Then I would present the main causes. For example, we may have underestimated the technical difficulty. As the leader, I would take responsibility rather than blame individual members. Most importantly, I would focus on what we learned and propose a concrete plan to prevent the same problems, so that the failure becomes a valuable lesson for the company.",
    keys: [['be completely honest about ~', '~에 대해 완전히 솔직하다'], ['underestimate', '과소평가하다'], ['take responsibility rather than blame ~', '~을 탓하기보다 책임을 지다'], ['a concrete plan', '구체적인 계획']]
  },
  {
    id: 'x7', cat: 'issue', lv: 5,
    q: 'Should governments regulate artificial intelligence? Why or why not?',
    ko: '정부가 인공지능을 규제해야 할까요?',
    follow: ['Who should be responsible if AI makes a harmful decision?', 'How is AI used in your company?'],
    tip: '입장(대개 "적절한 규제 필요") → 위험 예시 → 과도한 규제의 문제 → 균형 잡힌 결론.',
    model: "I believe some regulation is necessary, but it should be balanced. AI is becoming very powerful, and without rules, it could be used to spread misinformation, violate privacy, or make unfair decisions in areas like hiring or loans. Clear rules would also help people trust AI more. However, if regulations are too strict, they could slow down innovation, and companies in other countries might move ahead. So I think governments should focus on high-risk areas first and work closely with companies and experts to create practical rules.",
    keys: [['it should be balanced', '균형이 잡혀야 해요'], ['violate privacy', '사생활을 침해하다'], ['slow down innovation', '혁신을 늦추다'], ['high-risk areas', '고위험 분야']]
  },
  {
    id: 'x8', cat: 'issue', lv: 5,
    q: 'Chinese car makers are growing very fast. How can Korean companies stay competitive?',
    ko: '중국 자동차 회사들이 빠르게 성장하고 있어요. 한국 기업은 어떻게 경쟁력을 유지할 수 있을까요?',
    follow: ['What are the strengths of Chinese car makers?', 'Should Korean companies cooperate with Chinese companies?'],
    tip: '상황 분석(중국의 강점: 가격·배터리·속도) → 우리의 대응 2~3가지 → 결론. 산업 어휘를 활용하세요.',
    model: "Chinese car makers have strong advantages, especially in battery costs and development speed. They can launch new models much faster and at lower prices. To stay competitive, Korean companies can't win on price alone. First, we need to focus on quality, safety, and brand trust, which take a long time to build. Second, we should speed up development by using more software and digital tools. Third, we need to secure our own battery supply chain. I think if we combine our reputation for quality with faster innovation, we can stay ahead.",
    keys: [['have strong advantages in ~', '~에서 강한 우위가 있다'], ['can\'t win on price alone', '가격만으로는 이길 수 없다'], ['secure a supply chain', '공급망을 확보하다'], ['stay ahead', '앞서 나가다']]
  },
  {
    id: 'x9', cat: 'issue', lv: 5,
    q: 'How will smart factories and automation change manufacturing jobs?',
    ko: '스마트 공장과 자동화는 제조업 일자리를 어떻게 바꿀까요?',
    follow: ['What skills will factory workers need in the future?', 'Who should pay for retraining workers?'],
    tip: '변화(단순 작업 감소, 새 직무 등장) → 장점·우려 → 대응(재교육). 원인-결과 표현을 쓰세요.',
    model: "Smart factories will definitely reduce the number of simple, repetitive jobs, because robots and AI can do them faster and more accurately. For example, in our plants, many inspection tasks are already done by cameras and AI. However, new jobs will also appear, such as maintaining robots, analyzing production data, and managing automated systems. The problem is that workers can't change their skills overnight. So companies and the government need to invest in retraining programs, so that experienced workers can move into these new roles.",
    keys: [['more accurately', '더 정확하게'], ['new jobs will appear', '새로운 일자리가 생길 거예요'], ['overnight', '하룻밤 사이에'], ['retraining programs', '재교육 프로그램']]
  },
  {
    id: 'x10', cat: 'issue', lv: 5,
    q: 'What do you think is the most important quality for a global company to succeed in different countries?',
    ko: '글로벌 기업이 여러 나라에서 성공하려면 가장 중요한 자질은 무엇일까요?',
    follow: ['Can you give an example of a company that failed abroad?', 'How does your company adapt to local markets?'],
    tip: '자질 하나(현지화) → 이유 → 회사 사례 → 정리. "think global, act local" 같은 표현을 써 보세요.',
    model: "In my opinion, the most important quality is the ability to adapt to local markets. Customers in each country have different tastes, needs, and regulations. A product that is popular in Korea might not sell at all in India or Europe. For example, my company designs some models specifically for the Indian market, with more space and stronger air conditioning for the hot weather, and they've been very successful. So I think global companies should think globally but act locally, and hire local people who truly understand the market.",
    keys: [['adapt to local markets', '현지 시장에 적응하다'], ['might not sell at all', '전혀 안 팔릴 수도 있다'], ['specifically for ~', '특별히 ~을 위해'], ['think globally but act locally', '생각은 세계적으로, 행동은 현지에 맞게']]
  }
];
