// ── Constants ──────────────────────────────────────────────────
const STORAGE_KEY      = 'toeic_speaking_history';
const OPIC_STORAGE_KEY    = 'opic_history';
const OPIC_JP_STORAGE_KEY = 'opic_jp_history';

// ── 가나 50음도 데이터 ─────────────────────────────────────────
// h = 히라가나, k = 카타카나, r = 로마자, null = 해당 음 없음
const _KANA_DATA = {
  basic: [
    { h:['あ','い','う','え','お'], k:['ア','イ','ウ','エ','オ'], r:['a','i','u','e','o'] },
    { h:['か','き','く','け','こ'], k:['カ','キ','ク','ケ','コ'], r:['ka','ki','ku','ke','ko'] },
    { h:['さ','し','す','せ','そ'], k:['サ','シ','ス','セ','ソ'], r:['sa','shi','su','se','so'] },
    { h:['た','ち','つ','て','と'], k:['タ','チ','ツ','テ','ト'], r:['ta','chi','tsu','te','to'] },
    { h:['な','に','ぬ','ね','の'], k:['ナ','ニ','ヌ','ネ','ノ'], r:['na','ni','nu','ne','no'] },
    { h:['は','ひ','ふ','へ','ほ'], k:['ハ','ヒ','フ','ヘ','ホ'], r:['ha','hi','fu','he','ho'] },
    { h:['ま','み','む','め','も'], k:['マ','ミ','ム','メ','モ'], r:['ma','mi','mu','me','mo'] },
    { h:['や',null,'ゆ',null,'よ'], k:['ヤ',null,'ユ',null,'ヨ'], r:['ya',null,'yu',null,'yo'] },
    { h:['ら','り','る','れ','ろ'], k:['ラ','リ','ル','レ','ロ'], r:['ra','ri','ru','re','ro'] },
    { h:['わ',null,null,null,'を'], k:['ワ',null,null,null,'ヲ'], r:['wa',null,null,null,'wo'] },
    { h:['ん',null,null,null,null], k:['ン',null,null,null,null], r:['n',null,null,null,null], single:true },
  ],
  daku: [
    { h:['が','ぎ','ぐ','げ','ご'], k:['ガ','ギ','グ','ゲ','ゴ'], r:['ga','gi','gu','ge','go'] },
    { h:['ざ','じ','ず','ぜ','ぞ'], k:['ザ','ジ','ズ','ゼ','ゾ'], r:['za','ji','zu','ze','zo'] },
    { h:['だ','ぢ','づ','で','ど'], k:['ダ','ヂ','ヅ','デ','ド'], r:['da','di','du','de','do'] },
    { h:['ば','び','ぶ','べ','ぼ'], k:['バ','ビ','ブ','ベ','ボ'], r:['ba','bi','bu','be','bo'] },
    { h:['ぱ','ぴ','ぷ','ぺ','ぽ'], k:['パ','ピ','プ','ペ','ポ'], r:['pa','pi','pu','pe','po'] },
  ],
  yoon: [
    { h:['きゃ','きゅ','きょ'], k:['キャ','キュ','キョ'], r:['kya','kyu','kyo'] },
    { h:['しゃ','しゅ','しょ'], k:['シャ','シュ','ショ'], r:['sha','shu','sho'] },
    { h:['ちゃ','ちゅ','ちょ'], k:['チャ','チュ','チョ'], r:['cha','chu','cho'] },
    { h:['にゃ','にゅ','にょ'], k:['ニャ','ニュ','ニョ'], r:['nya','nyu','nyo'] },
    { h:['ひゃ','ひゅ','ひょ'], k:['ヒャ','ヒュ','ヒョ'], r:['hya','hyu','hyo'] },
    { h:['みゃ','みゅ','みょ'], k:['ミャ','ミュ','ミョ'], r:['mya','myu','myo'] },
    { h:['りゃ','りゅ','りょ'], k:['リャ','リュ','リョ'], r:['rya','ryu','ryo'] },
    { h:['ぎゃ','ぎゅ','ぎょ'], k:['ギャ','ギュ','ギョ'], r:['gya','gyu','gyo'] },
    { h:['じゃ','じゅ','じょ'], k:['ジャ','ジュ','ジョ'], r:['ja','ju','jo'] },
    { h:['びゃ','びゅ','びょ'], k:['ビャ','ビュ','ビョ'], r:['bya','byu','byo'] },
    { h:['ぴゃ','ぴゅ','ぴょ'], k:['ピャ','ピュ','ピョ'], r:['pya','pyu','pyo'] },
  ]
};

function renderKanaTable(kanaType) {
  const key = kanaType === 'hiragana' ? 'h' : 'k';

  const cell = (ch, ro) => ch
    ? `<td><b class="kana-ch">${ch}</b><span class="kana-ro">${ro}</span></td>`
    : `<td class="kana-mt"></td>`;

  const basicRows = _KANA_DATA.basic.map(row => {
    if (row.single) {
      return `<tr><td colspan="5" class="kana-single"><b class="kana-ch">${row[key][0]}</b><span class="kana-ro">${row.r[0]}</span></td></tr>`;
    }
    return `<tr>${row[key].map((c, i) => cell(c, row.r[i])).join('')}</tr>`;
  }).join('');

  const dakuRows = _KANA_DATA.daku.map(row =>
    `<tr>${row[key].map((c, i) => cell(c, row.r[i])).join('')}</tr>`
  ).join('');

  const yoonRows = _KANA_DATA.yoon.map(row => {
    const base = row[key][0].slice(0, 1);
    return `<tr><th class="kana-rl">${base}</th>${row[key].map((c, i) => cell(c, row.r[i])).join('')}</tr>`;
  }).join('');

  const tbl5 = (title, rows, hdrs) => `
    <div class="kana-sec">
      <div class="kana-stitle">${title}</div>
      <table class="kana-tbl">
        <thead><tr>${hdrs.map(h => `<th>${h}</th>`).join('')}</tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;

  return `<div class="kana-view">
    ${tbl5('清音 — 기본 46자', basicRows, ['a','i','u','e','o'])}
    ${tbl5('濁音・半濁音 — 탁음・반탁음', dakuRows, ['a','i','u','e','o'])}
    <div class="kana-sec">
      <div class="kana-stitle">拗音 — 조합음</div>
      <table class="kana-tbl kana-yoon">
        <thead><tr><th></th><th>〜ゃ</th><th>〜ゅ</th><th>〜ょ</th></tr></thead>
        <tbody>${yoonRows}</tbody>
      </table>
    </div>
  </div>`;
}

// 서버/네트워크 완전 불가 시 사용하는 로컬 샘플 문제 (AI 불필요)
const LOCAL_QUESTIONS = {
  1: [
    { part: 1, instruction: '사진을 보고 45초 동안 묘사하세요. 준비 시간 30초.', question: '[Photo: A woman is standing at a coffee shop counter, ordering from a barista. Pastries are displayed in a glass case, and other customers are seated at tables in the background.]', prep_time: 30, answer_time: 45 },
    { part: 1, instruction: '사진을 보고 45초 동안 묘사하세요. 준비 시간 30초.', question: '[Photo: Two colleagues are having a meeting in a modern office. One person is pointing at a laptop screen while the other takes notes. Plants and a whiteboard are visible in the background.]', prep_time: 30, answer_time: 45 },
    { part: 1, instruction: '사진을 보고 45초 동안 묘사하세요. 준비 시간 30초.', question: '[Photo: A busy farmer\'s market on a sunny day. Vendors are selling fresh vegetables and fruits. Shoppers are walking through the aisles with bags and baskets.]', prep_time: 30, answer_time: 45 }
  ],
  2: [
    { part: 2, instruction: '친구가 직장 생활에 대한 설문을 하고 있습니다. 준비 없이 30초 안에 답하세요.', question: 'Imagine a friend is surveying you about work habits.\n\nQuestion: Do you prefer working independently or as part of a team, and why?', prep_time: 3, answer_time: 30 },
    { part: 2, instruction: '동료가 여행 습관에 대한 설문을 하고 있습니다. 준비 없이 30초 안에 답하세요.', question: 'Imagine a colleague is surveying you about travel preferences.\n\nQuestion: How do you usually prepare before going on a trip?', prep_time: 3, answer_time: 30 },
    { part: 2, instruction: '친구가 독서 습관에 대한 설문을 하고 있습니다. 준비 없이 30초 안에 답하세요.', question: 'Imagine a friend is surveying you about reading habits.\n\nQuestion: Do you prefer reading physical books or e-books, and why?', prep_time: 3, answer_time: 30 }
  ],
  3: [
    { part: 3, instruction: '다음 일정표를 보고 질문에 답하세요. 준비 시간 30초.', question: 'Community Center Summer Schedule\n• Swimming lessons: Mon/Wed, 9–11 AM, $45/session\n• Yoga class: Tue/Thu, 6–7:30 PM, $30/session\n• Art workshop: Saturday, 10 AM–2 PM, $60/session\n• Tennis court: Daily, 7 AM–9 PM, $15/hour\n\nQuestion: I want to take yoga classes. What days and times are they offered, and how much does each session cost?', prep_time: 30, answer_time: 30 },
    { part: 3, instruction: '다음 반품 정책을 보고 질문에 답하세요. 준비 시간 30초.', question: 'Online Store Return Policy\n• Return window: 30 days from delivery date\n• Items must be unused and in original packaging\n• Free return shipping on orders over $50\n• Refunds processed within 5–7 business days\n• Sale items: store credit only, no cash refund\n\nQuestion: I bought a sale item but want to return it for a cash refund. Is that possible?', prep_time: 30, answer_time: 30 },
    { part: 3, instruction: '다음 교육 일정을 보고 질문에 답하세요. 준비 시간 30초.', question: 'New Employee Orientation Schedule\n• Day 1 (Mon): Company overview & HR policies, 9 AM–12 PM\n• Day 2 (Tue): Department introduction & team lunch, 10 AM–3 PM\n• Day 3 (Wed): Systems training (IT), 9 AM–5 PM\n• Day 4 (Thu): Job-specific training with manager, 9 AM–5 PM\n• Day 5 (Fri): Q&A session & evaluation, 2–4 PM\n\nQuestion: On which day does the new employee receive job-specific training with their manager?', prep_time: 30, answer_time: 30 }
  ],
  4: [
    { part: 4, instruction: '음성 메시지를 듣고 문제를 해결하는 답변을 제안하세요. 준비 시간 45초.', question: 'Hi, this is Alex from Marketing. I\'m trying to book a conference room for tomorrow\'s client presentation at 2 PM, but Room A is already reserved and there are no other rooms available in the system. The client is very important and we really need a proper meeting space. Could you help me figure out what to do?', prep_time: 45, answer_time: 60 },
    { part: 4, instruction: '음성 메시지를 듣고 문제를 해결하는 답변을 제안하세요. 준비 시간 45초.', question: 'Hello, I\'m a customer calling about an order I placed two weeks ago. The tracking shows it was delivered, but I never received the package. I\'ve already checked with my neighbors and the building manager. This was a birthday gift for my daughter and her birthday is this weekend. What can you do for me?', prep_time: 45, answer_time: 60 },
    { part: 4, instruction: '음성 메시지를 듣고 문제를 해결하는 답변을 제안하세요. 준비 시간 45초.', question: 'Hi, this is Jamie from IT. The software update scheduled for tonight requires all computers to restart. However, the finance team needs systems running through midnight for end-of-month reporting. If we delay the update, a security vulnerability stays open. What would you recommend?', prep_time: 45, answer_time: 60 }
  ],
  5: [
    { part: 5, instruction: '설문 질문에 대해 의견을 제시하세요. 구체적인 이유와 예시를 들어 답하세요. 준비 시간 45초.', question: 'Some companies require employees to work from the office every day, while others allow remote work. Which arrangement do you think is better for employee productivity? Give specific reasons and examples to support your answer.', prep_time: 45, answer_time: 60 },
    { part: 5, instruction: '설문 질문에 대해 의견을 제시하세요. 구체적인 이유와 예시를 들어 답하세요. 준비 시간 45초.', question: 'Some people believe that companies should provide free meals and snacks to employees at work, while others think this is unnecessary. What is your opinion? Use specific reasons and details in your response.', prep_time: 45, answer_time: 60 },
    { part: 5, instruction: '설문 질문에 대해 의견을 제시하세요. 구체적인 이유와 예시를 들어 답하세요. 준비 시간 45초.', question: 'Some people think younger employees should prioritize gaining experience even if the salary is low, while others believe salary is the most important factor. What is your opinion? Give specific reasons.', prep_time: 45, answer_time: 60 }
  ],
  6: [
    { part: 6, instruction: '다음 주제에 대해 자신의 의견을 제시하세요. 준비 시간 45초.', question: 'Some people believe that technology has made communication between people less meaningful and personal. Do you agree or disagree? Use specific reasons and examples to support your opinion.', prep_time: 45, answer_time: 60 },
    { part: 6, instruction: '다음 주제에 대해 자신의 의견을 제시하세요. 준비 시간 45초.', question: 'It is often said that "failure is the best teacher." Do you agree or disagree? Support your answer with specific reasons and examples from your own experience.', prep_time: 45, answer_time: 60 },
    { part: 6, instruction: '다음 주제에 대해 자신의 의견을 제시하세요. 준비 시간 45초.', question: 'Some people believe that reading books is more beneficial than watching videos or movies for personal development. Others think visual media can be equally educational. What is your view? Use specific reasons and examples.', prep_time: 45, answer_time: 60 }
  ]
};

function pickLocalQuestion(part) {
  const bank = LOCAL_QUESTIONS[part];
  return { ...bank[Math.floor(Math.random() * bank.length)], ai_generated: false };
}

const PART_TYPE_LABEL = {
  1: 'Describe a Photo',
  2: 'Respond to Questions',
  3: 'Respond to Questions Using Information',
  4: 'Propose a Solution',
  5: 'Express an Opinion',
  6: 'Express an Opinion'
};

const PART_NAME_KO = {
  1: 'Part 1 — 사진 묘사',
  2: 'Part 2 — 질문에 답하기',
  3: 'Part 3 — 정보를 활용한 답변',
  4: 'Part 4 — 제안/의견 제시',
  5: 'Part 5 — 정보 제공',
  6: 'Part 6 — 의견 제시'
};

const SCORE_LABELS = {
  pronunciation: '발음',
  intonation:    '억양·강세',
  grammar:       '문법',
  content:       '내용',
  fluency:       '유창성'
};

const GRADE_COLORS = {
  AL: '#F59E0B',
  IH: '#4F46E5',
  IM: '#10B981',
  IL: '#F97316',
  NH: '#EF4444'
};

// ── OPIc config ────────────────────────────────────────────────
const OPIC_PART_TYPE_LABEL = {
  1: 'Self-Introduction',
  2: 'Daily Routine',
  3: 'Home & Neighborhood',
  4: 'Hobbies & Leisure',
  5: 'Travel',
  6: 'Work & School',
  7: 'Role-play',
  8: 'Experiences & Comparisons'
};

const OPIC_TOPIC_LABEL = {
  1: '자기소개',
  2: '일상 & 루틴',
  3: '거주지 & 동네',
  4: '취미 & 여가',
  5: '여행',
  6: '직장 & 학교',
  7: '롤플레이',
  8: '경험 & 비교'
};

const OPIC_PART_NAME_KO = {
  1: '자기소개',
  2: '일상 & 루틴',
  3: '거주지 & 동네',
  4: '취미 & 여가',
  5: '여행',
  6: '직장 & 학교',
  7: '롤플레이',
  8: '경험 & 비교'
};

const OPIC_SCORE_LABELS = {
  task_completion: '과제 완성도',
  discourse:       '담화 구성',
  vocabulary:      '어휘력',
  grammar:         '문법',
  fluency:         '유창성'
};

// ── OPIc 日本語 config ─────────────────────────────────────
const OPIC_JP_PART_TYPE_LABEL = {
  1: 'Self-Introduction (自己紹介)',
  2: 'Daily Routine (日課・日常)',
  3: 'Home & Neighborhood (住まい・近所)',
  4: 'Hobbies & Leisure (趣味・余暇)',
  5: 'Travel (旅行)',
  6: 'Work & School (職場・学校)',
  7: 'Role-play (ロールプレイ)',
  8: 'Experiences & Comparisons (経験・比較)'
};

const OPIC_JP_TOPIC_LABEL = {
  1: '自己紹介',
  2: '日課・日常',
  3: '住まい・近所',
  4: '趣味・余暇',
  5: '旅行',
  6: '職場・学校',
  7: 'ロールプレイ',
  8: '経験・比較'
};

const OPIC_JP_PART_NAME_KO = {
  1: '自己紹介',
  2: '日課・日常',
  3: '住まい・近所',
  4: '趣味・余暇',
  5: '旅行',
  6: '職場・学校',
  7: 'ロールプレイ',
  8: '経験・比較'
};

const LOCAL_OPIC_JP_QUESTIONS = {
  1: [{ topic: 1, part: 1, type: 'Self-Introduction', instruction: '自己紹介をしてください。2分間答えてください。', question: '自己紹介をお願いします。お名前とお仕事、趣味などについて教えてください。', prep_time: 5, answer_time: 120, ai_generated: false }],
  2: [{ topic: 2, part: 2, type: 'Daily Routine', instruction: '普段の一日について教えてください。', question: '平日の一日のスケジュールについて詳しく教えてください。', prep_time: 5, answer_time: 120, ai_generated: false }],
  3: [{ topic: 3, part: 3, type: 'Home & Neighborhood', instruction: '住まいや近所について教えてください。', question: '今住んでいる場所について教えてください。どんな家に住んでいますか？', prep_time: 5, answer_time: 120, ai_generated: false }],
  4: [{ topic: 4, part: 4, type: 'Hobbies & Leisure', instruction: '趣味や余暇の過ごし方について教えてください。', question: '趣味や余暇の過ごし方について教えてください。', prep_time: 5, answer_time: 120, ai_generated: false }],
  5: [{ topic: 5, part: 5, type: 'Travel', instruction: '旅行について教えてください。', question: '印象に残っている旅行について教えてください。', prep_time: 5, answer_time: 120, ai_generated: false }],
  6: [{ topic: 6, part: 6, type: 'Work & School', instruction: 'お仕事や学校について教えてください。', question: 'お仕事または学校について教えてください。普段どんなことをしていますか？', prep_time: 5, answer_time: 120, ai_generated: false }],
  7: [{ topic: 7, part: 7, type: 'Role-play', instruction: 'ロールプレイをしてみましょう。', question: 'ロールプレイをしてみましょう。レストランに電話して、来週の土曜日の夜7時に4名で予約をしてください。', prep_time: 20, answer_time: 90, ai_generated: false }],
  8: [{ topic: 8, part: 8, type: 'Experiences & Comparisons', instruction: '経験や変化について教えてください。', question: '予想外のことが起きた時の経験を教えてください。その時どう対応しましたか？', prep_time: 10, answer_time: 120, ai_generated: false }]
};

const LOCAL_OPIC_QUESTIONS = {
  1: [{ topic: 1, part: 1, type: 'Self-Introduction', instruction: '자기소개에 대해 2분 동안 답변하세요.', question: 'Please introduce yourself. Tell me about who you are, what you do, and what kind of person you are.', prep_time: 5, answer_time: 120, ai_generated: false }],
  2: [{ topic: 2, part: 2, type: 'Daily Routine', instruction: '하루 일과에 대해 2분 동안 답변하세요.', question: 'Describe your typical weekday from the time you wake up to when you go to bed.', prep_time: 5, answer_time: 120, ai_generated: false }],
  3: [{ topic: 3, part: 3, type: 'Home & Neighborhood', instruction: '거주지와 동네에 대해 2분 동안 답변하세요.', question: 'Tell me about the place where you live. Describe your home and the neighborhood around it.', prep_time: 5, answer_time: 120, ai_generated: false }],
  4: [{ topic: 4, part: 4, type: 'Hobbies & Leisure', instruction: '취미와 여가 활동에 대해 2분 동안 답변하세요.', question: 'What do you enjoy doing in your free time? Tell me about your hobbies and interests in detail.', prep_time: 5, answer_time: 120, ai_generated: false }],
  5: [{ topic: 5, part: 5, type: 'Travel', instruction: '여행 경험에 대해 2분 동안 답변하세요.', question: 'Tell me about a trip that was memorable for you. Where did you go and what made it special?', prep_time: 5, answer_time: 120, ai_generated: false }],
  6: [{ topic: 6, part: 6, type: 'Work & School', instruction: '직장 또는 학교에 대해 2분 동안 답변하세요.', question: 'Tell me about your job or school. What do you usually do there on a typical day?', prep_time: 5, answer_time: 120, ai_generated: false }],
  7: [{ topic: 7, part: 7, type: 'Role-play', instruction: '롤플레이 상황에서 90초 동안 답변하세요.', question: "I'd like you to role-play. You want to book a table at a restaurant for four people next Saturday at 7 PM. Call and make the reservation.", prep_time: 20, answer_time: 90, ai_generated: false }],
  8: [{ topic: 8, part: 8, type: 'Experiences & Comparisons', instruction: '경험이나 변화에 대해 2분 동안 답변하세요.', question: 'Tell me about a time when you faced an unexpected problem. What happened and how did you handle it?', prep_time: 10, answer_time: 120, ai_generated: false }]
};

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// ── State ──────────────────────────────────────────────────────
let currentMode       = 'toeic'; // 'toeic' | 'opic'
let currentQuestion   = null;
let currentPart       = null;
let currentFeedback   = null;
let currentDetailId   = null;
let currentFilter     = 'all';
let currentTab        = 'practice';

// Step 1 timer
let timerInterval = null;
let timerTotal    = 0;

// Step 2 recording
let recognition      = null;
let isRecording      = false;
let finalTranscript  = '';
let recTimerInterval = null;
let recTimerTotal    = 0;
let waveformInterval = null;

// Chart instances
let radarChart    = null;
let trendChart    = null;
let avgRadarChart = null;
let hdRadarChart  = null;

// Part 1 generated image
let currentImageSrc = null;

// ── TTS ────────────────────────────────────────────────────────
function cleanForSpeech(text) {
  return text
    .replace(/\(.*?\)/g, '')           // 괄호 내용 제거
    .replace(/\[.*?\]/g, '')           // 대괄호 내용 제거
    .replace(/[\u{1F000}-\u{1FFFF}]/gu, '') // 이모지(보충 다국어 평면)
    .replace(/[\u{2600}-\u{27BF}]/gu, '')   // 기타 기호/이모지
    .replace(/[\u{FE00}-\u{FE0F}]/gu, '')   // 변형 선택자
    .replace(/[☐☑☒✓✔✗✘□■●○◆◇▶►★☆]/g, '') // 체크박스·불릿 기호
    .replace(/[#*_~`]/g, '')           // 마크다운 서식 기호
    .replace(/\s+/g, ' ')              // 연속 공백 정리
    .trim();
}

function speak(btn, text) {
  if (!text || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  if (btn.classList.contains('speaking')) {
    btn.classList.remove('speaking');
    return;
  }
  document.querySelectorAll('.speak-btn.speaking').forEach(b => b.classList.remove('speaking'));
  const cleaned = cleanForSpeech(text);
  if (!cleaned) return;
  const utt = new SpeechSynthesisUtterance(cleaned);
  utt.lang = currentMode === 'opic-jp' ? 'ja-JP' : 'en-US';
  utt.rate = currentMode === 'opic-jp' ? 0.85 : 0.9;
  btn.classList.add('speaking');
  utt.onend   = () => btn.classList.remove('speaking');
  utt.onerror = () => btn.classList.remove('speaking');
  window.speechSynthesis.speak(utt);
}

function speakEl(btn, id) {
  const el = document.getElementById(id);
  if (!el) return;
  // ruby 태그가 있으면 rt(후리가나) 내용을 제외한 순수 텍스트로 읽음
  if (el.querySelector('rt')) {
    const clone = el.cloneNode(true);
    clone.querySelectorAll('rt').forEach(rt => rt.remove());
    speak(btn, clone.textContent);
  } else {
    speak(btn, el.textContent);
  }
}

// ── Screen management ──────────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(`screen-${id}`).classList.add('active');
}

// ── Navigation ────────────────────────────────────────────────
function navTo(tab) {
  if (isRecording) {
    if (!confirm('녹음을 중단하고 다른 메뉴로 이동하시겠습니까?')) return;
  }
  fullCleanup();
  currentTab = tab;
  document.querySelectorAll('.nav-tab').forEach(t =>
    t.classList.toggle('active', t.dataset.tab === tab)
  );
  switch (tab) {
    case 'practice':
      if (currentMode === 'opic')    showScreen('opic-practice');
      else if (currentMode === 'opic-jp') showScreen('opic-jp-practice');
      else showScreen('practice');
      break;
    case 'exercise': showExerciseScreen(); break;
    case 'study':    showStudyScreen();      break;
    case 'grammar':  showGrammarScreen();    break;
    case 'vocab':    showVocabHomeScreen();  break;
    case 'history':  showHistoryScreen();    break;
  }
}

function switchMode(mode) {
  if (currentMode === mode) return;
  if (isRecording) {
    if (!confirm('녹음을 중단하고 모드를 전환하시겠습니까?')) return;
  }
  fullCleanup();
  currentMode = mode;
  document.body.classList.remove('opic-mode', 'opic-jp-mode');
  if (mode === 'opic')    document.body.classList.add('opic-mode');
  if (mode === 'opic-jp') document.body.classList.add('opic-jp-mode');
  document.querySelectorAll('.mode-switch-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.mode === mode);
  });
  const brandNames = { toeic: 'TOEIC 스피킹', opic: 'OPIc', 'opic-jp': 'OPIc 日本語' };
  document.getElementById('nav-brand-text').textContent = brandNames[mode] || 'TOEIC 스피킹';
  navTo('practice');
}

function showExerciseScreen() {
  const isOpJp = currentMode === 'opic-jp';
  const isOp = currentMode === 'opic' || isOpJp;
  const header = document.querySelector('.ssh-exercise .screen-section-title');
  const sub    = document.querySelector('.ssh-exercise .screen-section-sub');
  const grid   = document.querySelector('.exercise-part-grid');

  if (isOp) {
    if (header) header.textContent = isOpJp ? 'OPIc 日本語 練習問題' : 'OPIc 연습 문제';
    if (sub)    sub.textContent    = isOpJp ? '주제별 일본어 샘플 문제 · 모범 답안 · 해설' : '주제별 샘플 문제 · 모범 답안 · 해설';
    const exItems = isOpJp ? [
      [1,'自己紹介','描写型'], [2,'日課・日常','描写型'], [3,'住まい・近所','描写型'],
      [4,'趣味・余暇','経験型'], [5,'旅行','経験型'], [6,'職場・学校','描写型'],
      [7,'ロールプレイ','RP型'], [8,'経験・比較','経験型']
    ] : [
      [1,'자기소개','묘사형'], [2,'일상·루틴','묘사형'], [3,'거주지·동네','묘사형'],
      [4,'취미·여가','경험형'], [5,'여행','경험형'], [6,'직장·학교','묘사형'],
      [7,'롤플레이','롤플레이형'], [8,'경험·비교','경험형']
    ];
    if (grid) grid.innerHTML = exItems.map(([t, label, qtype]) =>
      `<button class="exercise-part-btn opic-ex-btn" onclick="showPracticeList(${t})">${label}<span>${qtype}</span></button>`
    ).join('');
  } else {
    if (header) header.textContent = '연습 문제';
    if (sub)    sub.textContent    = '파트별 샘플 문제 · 모범 답안 · 해설';
    if (grid) grid.innerHTML = [
      [1,'Part 1','사진 묘사'],
      [2,'Part 2','질문에 답하기'],
      [3,'Part 3','정보 활용 답변'],
      [4,'Part 4','제안 / 의견'],
      [5,'Part 5','의견 제시'],
      [6,'Part 6','추상적 의견']
    ].map(([t, label, sub2]) =>
      `<button class="exercise-part-btn" onclick="showPracticeList(${t})">${label}<span>${sub2}</span></button>`
    ).join('');
  }
  showScreen('exercise');
}

function setActiveTab(tab) {
  currentTab = tab;
  document.querySelectorAll('.nav-tab').forEach(t =>
    t.classList.toggle('active', t.dataset.tab === tab)
  );
}

function showGrammarScreen() {
  const modules = currentMode === 'opic-jp' ? OPIC_JP_GRAMMAR_MODULES : GRAMMAR_MODULES;
  const list    = document.getElementById('grammar-module-list');

  list.dataset.renderedMode = list.dataset.renderedMode || '';
  if (list.dataset.renderedMode !== currentMode) {
    list.innerHTML = modules.map(mod => `
      <div class="study-module-card" onclick="openGrammarModule('${mod.id}')">
        <div class="smc-body">
          <div class="smc-icon" style="background:${mod.color}22">${mod.icon}</div>
          <div class="smc-info">
            <div class="smc-title">${mod.title}</div>
            <div class="smc-subtitle">${mod.subtitle}</div>
          </div>
          <div class="smc-right"><span class="smc-arrow">›</span></div>
        </div>
      </div>`).join('');
    list.dataset.renderedMode = currentMode;
  }

  const headerTitle = document.querySelector('.ssh-grammar .screen-section-title');
  const headerSub   = document.querySelector('.ssh-grammar .screen-section-sub');
  if (currentMode === 'opic-jp') {
    if (headerTitle) headerTitle.textContent = 'OPIc 日本語 文法';
    if (headerSub)   headerSub.textContent   = '동사 활용 · 조사 · 시제 · 비교 · 빈출 문형';
  } else {
    if (headerTitle) headerTitle.textContent = '문법 강의';
    if (headerSub)   headerSub.textContent   = '시제 · 전치사 · 비교급 · 고득점 구문';
  }

  showScreen('grammar');
}

function showVocabHomeScreen() {
  const modules = currentMode === 'opic-jp' ? OPIC_JP_VOCAB_MODULES
    : currentMode === 'opic' ? OPIC_VOCAB_MODULES : VOCAB_MODULES;
  const list    = document.getElementById('vocab-module-list');

  list.dataset.renderedMode = list.dataset.renderedMode || '';
  if (list.dataset.renderedMode !== currentMode) {
    let vocabListHtml = modules.map(mod => `
      <div class="study-module-card" onclick="openVocabModule('${mod.id}')">
        <div class="smc-body">
          <div class="smc-icon" style="background:${mod.color}22">${mod.icon}</div>
          <div class="smc-info">
            <div class="smc-title">${mod.moduleTitle}</div>
            <div class="smc-subtitle">${mod.type === 'kana-table' ? '일람표 · 탁음 · 요음' : mod.words.length + '개 단어'}</div>
          </div>
          <div class="smc-right"><span class="smc-arrow">›</span></div>
        </div>
      </div>`).join('');
    if (currentMode === 'opic-jp') vocabListHtml = applyJpFurigana(vocabListHtml);
    list.innerHTML = vocabListHtml;
    list.dataset.renderedMode = currentMode;
  }

  const headerTitle = document.querySelector('.ssh-vocab .screen-section-title');
  const headerSub   = document.querySelector('.ssh-vocab .screen-section-sub');
  if (currentMode === 'opic-jp') {
    if (headerTitle) headerTitle.textContent = 'OPIc 日本語 核心表現';
    if (headerSub)   headerSub.textContent   = '주제별 일본어 필수 표현 · 고득점 담화 연결어';
  } else if (currentMode === 'opic') {
    if (headerTitle) headerTitle.textContent = 'OPIc 핵심 어휘';
    if (headerSub)   headerSub.textContent   = '주제별 필수 표현 · 고득점 담화 연결어';
  } else {
    if (headerTitle) headerTitle.textContent = '빈출단어';
    if (headerSub)   headerSub.textContent   = '단원별 핵심 어휘 · 예문 · 학습 팁';
  }

  showScreen('vocab-home');
}

function renderVocabMeanings(meaning) {
  return meaning.split('·').map(part => {
    const s = part.trim();
    const m = s.match(/^([a-z]+\.(?:\/[a-z]+\.)*)\s+(.+)/);
    if (m) {
      return `<span class="vocab-meaning-item"><span class="vocab-meaning-pos-inline">${m[1]}</span> ${m[2]}</span>`;
    }
    return `<span class="vocab-meaning-item">${s}</span>`;
  }).join('');
}

let vocabShowBookmarksOnly = false;

function getVocabBookmarks() {
  try { return new Set(JSON.parse(localStorage.getItem('vocab_bookmarks') || '[]')); }
  catch { return new Set(); }
}

function saveVocabBookmarks(set) {
  try { localStorage.setItem('vocab_bookmarks', JSON.stringify([...set])); } catch {}
}

function toggleVocabBookmark(word, event) {
  event.stopPropagation();
  const bookmarks = getVocabBookmarks();
  if (bookmarks.has(word)) bookmarks.delete(word);
  else bookmarks.add(word);
  saveVocabBookmarks(bookmarks);

  const card = event.currentTarget.closest('.vocab-card');
  const btn = event.currentTarget;
  const isMarked = bookmarks.has(word);
  btn.textContent = isMarked ? '★' : '☆';
  btn.classList.toggle('vocab-bookmark-active', isMarked);
  card.classList.toggle('vocab-card-bookmarked', isMarked);

  updateVocabToolbar();
  if (vocabShowBookmarksOnly && !isMarked) card.style.display = 'none';
}

function updateVocabToolbar() {
  const bookmarks = getVocabBookmarks();
  const filterBtn = document.getElementById('vocab-filter-btn');
  if (!filterBtn) return;
  const n = bookmarks.size;
  filterBtn.textContent = vocabShowBookmarksOnly
    ? `★ 복습만 보기 (${n}개) ✓`
    : `☆ 복습만 보기${n > 0 ? ` (${n}개)` : ''}`;
}

function toggleVocabFilter() {
  vocabShowBookmarksOnly = !vocabShowBookmarksOnly;
  const bookmarks = getVocabBookmarks();
  const filterBtn = document.getElementById('vocab-filter-btn');
  if (filterBtn) filterBtn.classList.toggle('vocab-filter-active', vocabShowBookmarksOnly);
  document.querySelectorAll('#vocab-word-list .vocab-card').forEach(card => {
    card.style.display = (vocabShowBookmarksOnly && !bookmarks.has(card.dataset.word)) ? 'none' : '';
  });
  updateVocabToolbar();
}

function getPhoneticCache() {
  try { return JSON.parse(localStorage.getItem('vocab_phonetics_cache') || '{}'); }
  catch { return {}; }
}

async function loadVocabPhonetics(words) {
  const cache = getPhoneticCache();
  const toFetch = words.filter(w => cache[w.word] === undefined);

  if (toFetch.length > 0) {
    const results = await Promise.all(toFetch.map(async w => {
      try {
        const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(w.word)}`);
        if (!res.ok) return [w.word, ''];
        const data = await res.json();
        const phonetic = data[0]?.phonetic || data[0]?.phonetics?.find(p => p.text)?.text || '';
        return [w.word, phonetic];
      } catch { return [w.word, '']; }
    }));
    results.forEach(([word, ph]) => { cache[word] = ph; });
    try { localStorage.setItem('vocab_phonetics_cache', JSON.stringify(cache)); } catch {}
  }

  words.forEach(w => {
    const span = document.querySelector(`.vocab-phonetic[data-word="${CSS.escape(w.word)}"]`);
    if (span) span.textContent = cache[w.word] || '';
  });
}

function openVocabModule(moduleId) {
  const modules = currentMode === 'opic-jp' ? OPIC_JP_VOCAB_MODULES
    : currentMode === 'opic' ? OPIC_VOCAB_MODULES : VOCAB_MODULES;
  const mod = modules.find(m => m.id === moduleId);
  if (!mod) return;
  const vocabTitleEl = document.getElementById('vocab-screen-title');
  vocabTitleEl.innerHTML = currentMode === 'opic-jp' ? applyJpFurigana(mod.moduleTitle) : mod.moduleTitle;

  // ── 가나 테이블 모듈 ─────────────────────────────────────────
  if (mod.type === 'kana-table') {
    document.getElementById('vocab-word-count').textContent =
      mod.kanaType === 'hiragana' ? '청음 46자 · 탁음 · 요음' : '청음 46자 · 탁음 · 요음 · 장음ー';
    document.getElementById('vocab-word-list').innerHTML = renderKanaTable(mod.kanaType);
    document.getElementById('vocab-filter-btn').style.display = 'none';
    setActiveTab('vocab');
    showScreen('vocab');
    document.getElementById('screen-vocab').scrollTop = 0;
    return;
  }
  document.getElementById('vocab-filter-btn').style.display = '';
  document.getElementById('vocab-word-count').textContent = `총 ${mod.words.length}개 단어`;

  let vocabHtml = mod.words.map(w => `
    <div class="vocab-card" data-word="${w.word}" onclick="toggleVocabCard(this)">
      <div class="vocab-card-front">
        <div class="vocab-left">
          <div class="vocab-word-row">
            <span class="vocab-word">${w.word}</span>
            <span class="vocab-pos">${w.pos}</span>
            <button class="speak-btn" onclick="event.stopPropagation(); speak(this, this.dataset.t)" data-t="${w.word.replace(/"/g, '&quot;')}" title="소리로 듣기">🔊</button>
          </div>
          <span class="vocab-phonetic" data-word="${w.word}"></span>
          <span class="vocab-expand-hint">탭하여 예문 보기 ▼</span>
        </div>
        <div class="vocab-right">
          <button class="vocab-bookmark-btn" onclick="toggleVocabBookmark('${w.word}', event)">☆</button>
          ${renderVocabMeanings(w.meaning)}
        </div>
      </div>
      <div class="vocab-card-back hidden">
        <div class="vocab-example-wrap">
          <p class="vocab-example">"${w.example}"</p>
          <button class="speak-btn" onclick="event.stopPropagation(); speak(this, this.dataset.t)" data-t="${w.example.replace(/"/g, '&quot;')}" title="소리로 듣기">🔊</button>
        </div>
        ${w.exampleKo ? `<p class="vocab-example-ko">${w.exampleKo}</p>` : ''}
        <p class="vocab-tip">💡 ${w.tip}</p>
      </div>
    </div>
  `).join('');
  if (currentMode === 'opic-jp') vocabHtml = applyJpFurigana(vocabHtml);
  document.getElementById('vocab-word-list').innerHTML = vocabHtml;

  // 저장된 북마크 상태 복원
  const bookmarks = getVocabBookmarks();
  document.querySelectorAll('#vocab-word-list .vocab-card').forEach(card => {
    if (bookmarks.has(card.dataset.word)) {
      card.classList.add('vocab-card-bookmarked');
      const btn = card.querySelector('.vocab-bookmark-btn');
      if (btn) { btn.textContent = '★'; btn.classList.add('vocab-bookmark-active'); }
    }
  });

  // 필터 초기화
  vocabShowBookmarksOnly = false;
  const filterBtn = document.getElementById('vocab-filter-btn');
  if (filterBtn) filterBtn.classList.remove('vocab-filter-active');
  updateVocabToolbar();

  setActiveTab('vocab');
  showScreen('vocab');
  document.getElementById('screen-vocab').scrollTop = 0;
  loadVocabPhonetics(mod.words);
}

function toggleVocabCard(card) {
  const back = card.querySelector('.vocab-card-back');
  const hint = card.querySelector('.vocab-expand-hint');
  const isOpen = !back.classList.contains('hidden');
  back.classList.toggle('hidden', isOpen);
  hint.textContent = isOpen ? '탭하여 예문 보기 ▼' : '접기 ▲';
  card.classList.toggle('vocab-card-open', !isOpen);
}


// ── 연습 문제 목록 화면 ────────────────────────────────────────
function showPracticeList(part) {
  const isOpJpPL  = currentMode === 'opic-jp';
  const isOpPL    = currentMode === 'opic' || isOpJpPL;
  const plTopicMap = isOpJpPL ? OPIC_JP_TOPIC_LABEL : OPIC_TOPIC_LABEL;
  const plTypeMap  = isOpJpPL ? OPIC_JP_PART_TYPE_LABEL : OPIC_PART_TYPE_LABEL;
  document.getElementById('pl-part-badge').textContent = isOpPL
    ? (plTopicMap[part] || `Topic ${part}`)
    : `Part ${part}`;
  document.getElementById('pl-type').textContent = isOpPL
    ? (plTypeMap[part] || '')
    : (PART_TYPE_LABEL[part] || '');

  const items = isOpJpPL ? (OPIC_JP_PRACTICE_DATA[part] || [])
    : isOpPL ? (OPIC_PRACTICE_DATA[part] || [])
    : (PRACTICE_DATA[part] || []);
  let practiceHtml = items.map((item, idx) => {
    const imgHtml = item.image
      ? `<img class="pi-img" src="${item.image}" alt="사진 묘사">`
      : '';
    const qSpeakBtn = !item.image
      ? `<button class="speak-btn" onclick="speakEl(this,'pq-${idx}')" title="소리로 듣기">🔊</button>`
      : '';
    return `
    <div class="practice-item">
      <div class="practice-item-q">
        <div class="practice-item-num">문제 ${idx + 1}</div>
        ${imgHtml ? `<div class="pi-img-wrap">${imgHtml}</div>` : ''}
        <div class="pi-question-row">
          <p class="practice-item-question" id="pq-${idx}">${item.question}</p>
          ${qSpeakBtn}
        </div>
      </div>
      <button class="practice-item-toggle" onclick="togglePracticeAnswer(this)">
        <span>모범 답안 · 해설 보기</span>
        <span>▼</span>
      </button>
      <div class="practice-item-answer">
        <div class="answer-section-header">
          <div class="answer-section-label model">모범 답안</div>
          <button class="speak-btn" onclick="speakEl(this,'pa-${idx}')" title="소리로 듣기">🔊</button>
        </div>
        <p class="answer-text" id="pa-${idx}">${item.model_answer}</p>
        <div class="answer-section-label explain">답안 해설</div>
        <div class="explain-text">${item.explanation}</div>
      </div>
    </div>`;
  }).join('');
  if (currentMode === 'opic-jp') practiceHtml = applyJpFurigana(practiceHtml);
  document.getElementById('practice-item-list').innerHTML = practiceHtml;

  setActiveTab('exercise');
  showScreen('practice-list');
}

function togglePracticeAnswer(btn) {
  const answer = btn.nextElementSibling;
  const arrow  = btn.querySelector('span:last-child');
  const isOpen = answer.classList.contains('open');
  answer.classList.toggle('open', !isOpen);
  arrow.textContent = isOpen ? '▼' : '▲';
  btn.querySelector('span:first-child').textContent = isOpen ? '모범 답안 · 해설 보기' : '접기';
}

document.getElementById('btn-practice-back').addEventListener('click', () => showScreen('exercise'));

// ══════════════════════════════════════════════════════════════
// STEP 1 — Question & Prep Timer
// ══════════════════════════════════════════════════════════════

function clearTimer() {
  if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
}

function startTimer(seconds) {
  clearTimer();
  timerTotal = seconds;
  let timeLeft = seconds;
  const display = document.getElementById('timer-display');
  const bar     = document.getElementById('timer-bar');

  function tick() {
    display.textContent = String(timeLeft).padStart(2, '0');
    bar.style.width = `${(timeLeft / timerTotal) * 100}%`;
    const cls = timeLeft <= 5 ? 'danger' : timeLeft <= Math.ceil(timerTotal * 0.3) ? 'warning' : '';
    display.className = 'timer-display ' + cls;
    bar.className     = 'timer-bar '     + cls;
  }

  tick();
  timerInterval = setInterval(() => {
    timeLeft--;
    tick();
    if (timeLeft <= 0) { clearTimer(); enterAnswerPhase(); }
  }, 1000);
}

function enterAnswerPhase() { showRecordScreen(); }

function showQuestion(question) {
  currentQuestion = question;
  currentImageSrc = null;
  const isOpicJp = currentMode === 'opic-jp';
  const isOpic   = currentMode === 'opic';
  const partLabel = (isOpic || isOpicJp)
    ? ((isOpicJp ? OPIC_JP_TOPIC_LABEL : OPIC_TOPIC_LABEL)[question.part] || `Topic ${question.part}`)
    : `Part ${question.part}`;
  document.getElementById('q-part-badge').textContent = partLabel;
  document.getElementById('q-type').textContent = isOpicJp
    ? (OPIC_JP_PART_TYPE_LABEL[question.part] || question.type || '')
    : isOpic
      ? (OPIC_PART_TYPE_LABEL[question.part] || question.type || '')
      : (PART_TYPE_LABEL[question.part] || '');
  document.getElementById('q-instruction').textContent = question.instruction;
  document.getElementById('q-content').textContent     = question.question;

  const badge = document.getElementById('q-mode-badge');
  if (question.ai_generated === false) {
    badge.textContent = '📋 샘플 문제';
    badge.className   = 'mode-badge sample-mode';
    badge.classList.remove('hidden');
  } else {
    badge.textContent = '🤖 AI 생성';
    badge.className   = 'mode-badge ai-mode';
    badge.classList.remove('hidden');
  }

  // Part 1: 이미지 생성
  const imageWrap      = document.getElementById('q-image-wrap');
  const qContentWrap   = document.getElementById('q-content-wrap');
  const imageLoading   = document.getElementById('q-image-loading');
  const qPhoto         = document.getElementById('q-photo');

  if (question.part === 1) {
    const match = question.question.match(/\[Photo:\s*([\s\S]*?)\]/i);
    const desc = match ? match[1].trim() : question.question;
    qContentWrap.classList.add('hidden');
    imageWrap.classList.remove('hidden');
    imageLoading.classList.remove('hidden');
    qPhoto.classList.add('hidden');
    generateQuestionImage(desc);
  } else {
    qContentWrap.classList.remove('hidden');
    imageWrap.classList.add('hidden');
  }

  showScreen('question');
  startTimer(question.prep_time);
}

async function generateQuestionImage(description) {
  try {
    const res  = await fetch('/api/generate-image', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: `${description}, realistic photograph, high quality, natural lighting` })
    });
    const data = await res.json();

    const imageLoading  = document.getElementById('q-image-loading');
    const qPhoto        = document.getElementById('q-photo');
    const qContentWrap  = document.getElementById('q-content-wrap');

    if (!res.ok || (!data.url && !data.b64)) {
      imageLoading.classList.add('hidden');
      qContentWrap.classList.remove('hidden');
      return;
    }

    const src = data.url || `data:image/png;base64,${data.b64}`;
    currentImageSrc = src;
    qPhoto.src = src;
    qPhoto.onload  = () => { imageLoading.classList.add('hidden'); qPhoto.classList.remove('hidden'); };
    qPhoto.onerror = () => { imageLoading.classList.add('hidden'); qContentWrap.classList.remove('hidden'); };
  } catch {
    const imageLoading = document.getElementById('q-image-loading');
    if (imageLoading) imageLoading.classList.add('hidden');
    const qContentWrap = document.getElementById('q-content-wrap');
    if (qContentWrap) qContentWrap.classList.remove('hidden');
  }
}

async function generateQuestion(part) {
  currentPart = part;
  showScreen('loading');

  if (currentMode === 'opic') {
    try {
      const res  = await fetch('/api/generate-opic-question', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic: part })
      });
      const data = await res.json();
      if (!res.ok) {
        if (res.status === 429) { showError(data.error || 'API 요청 한도 초과. 잠시 후 다시 시도해주세요.'); showScreen('opic-practice'); return; }
        showQuestion(LOCAL_OPIC_QUESTIONS[part][0]);
        return;
      }
      showQuestion(data);
    } catch {
      showQuestion(LOCAL_OPIC_QUESTIONS[part][0]);
    }
    return;
  }

  if (currentMode === 'opic-jp') {
    try {
      const res  = await fetch('/api/generate-opic-jp-question', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic: part })
      });
      const data = await res.json();
      if (!res.ok) {
        if (res.status === 429) { showError(data.error || 'API 요청 한도 초과. 잠시 후 다시 시도해주세요.'); showScreen('opic-jp-practice'); return; }
        showQuestion(LOCAL_OPIC_JP_QUESTIONS[part][0]);
        return;
      }
      showQuestion(data);
    } catch {
      showQuestion(LOCAL_OPIC_JP_QUESTIONS[part][0]);
    }
    return;
  }

  try {
    const res  = await fetch('/api/generate-question', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ part })
    });
    const data = await res.json();
    if (!res.ok) {
      if (res.status === 429) { showError(data.error || 'API 요청 한도 초과. 잠시 후 다시 시도해주세요.'); showScreen('practice'); return; }
      showQuestion(pickLocalQuestion(part));
      return;
    }
    showQuestion(data);
  } catch {
    showQuestion(pickLocalQuestion(part));
  }
}

// ══════════════════════════════════════════════════════════════
// STEP 2 — Recording
// ══════════════════════════════════════════════════════════════

function showRecordScreen() {
  finalTranscript = '';
  const recTopicMap = currentMode === 'opic-jp' ? OPIC_JP_TOPIC_LABEL : OPIC_TOPIC_LABEL;
  const partLabel = (currentMode === 'opic' || currentMode === 'opic-jp')
    ? (recTopicMap[currentQuestion.part] || `Topic ${currentQuestion.part}`)
    : `Part ${currentQuestion.part}`;
  document.getElementById('rec-part-badge').textContent = partLabel;

  // Part 1: 이미지 표시 / 텍스트는 간략히
  const recPhoto    = document.getElementById('rec-photo');
  const recSpeakBtn = document.getElementById('rec-speak-btn');
  if (currentQuestion.part === 1 && currentImageSrc) {
    recPhoto.src = currentImageSrc;
    recPhoto.classList.remove('hidden');
    document.getElementById('rec-question').textContent = '사진을 보며 묘사하세요.';
    recSpeakBtn.classList.add('hidden');
  } else {
    recPhoto.classList.add('hidden');
    document.getElementById('rec-question').textContent = currentQuestion.question;
    recSpeakBtn.classList.remove('hidden');
  }

  document.getElementById('live-transcript').textContent = '말하기를 시작하세요...';
  document.getElementById('btn-stop-record').disabled    = false;

  const fallback = document.getElementById('text-input-fallback');
  const waveEl   = document.getElementById('waveform');
  const recLabel = document.getElementById('recording-label');

  if (SpeechRecognition) {
    fallback.classList.add('hidden');
    waveEl.classList.remove('hidden');
    recLabel.classList.remove('hidden');
  } else {
    fallback.classList.remove('hidden');
    waveEl.classList.add('hidden');
    recLabel.classList.add('hidden');
    document.getElementById('fallback-textarea').value = '';
  }

  showScreen('record');
  initWaveform();
  if (SpeechRecognition) startRecording();
  startRecordTimer(currentQuestion.answer_time);
}

function initWaveform() {
  clearWaveform();
  const waveform = document.getElementById('waveform');
  waveform.innerHTML = Array.from({ length: 24 }, () => '<div class="wave-bar"></div>').join('');
  const bars = waveform.querySelectorAll('.wave-bar');
  const animate = () => bars.forEach(b => { b.style.height = `${Math.random() * 36 + 4}px`; });
  animate();
  waveformInterval = setInterval(animate, 130);
}

function clearWaveform() {
  if (waveformInterval) { clearInterval(waveformInterval); waveformInterval = null; }
}

function startRecording() {
  if (recognition) { try { recognition.abort(); } catch {} }
  recognition = new SpeechRecognition();
  recognition.lang           = currentMode === 'opic-jp' ? 'ja-JP' : 'en-US';
  recognition.continuous     = true;
  recognition.interimResults = true;

  recognition.onresult = (e) => {
    finalTranscript = Array.from(e.results).map(r => r[0].transcript).join(' ');
    document.getElementById('live-transcript').textContent = finalTranscript || '말하기를 시작하세요...';
  };
  recognition.onerror = (e) => { if (e.error !== 'aborted') console.warn('STT:', e.error); };
  recognition.onend   = ()  => { if (isRecording) try { recognition.start(); } catch {} };

  isRecording = true;
  try { recognition.start(); } catch (e) { console.warn('STT start failed:', e); }
}

function stopRecording() {
  document.getElementById('btn-stop-record').disabled = true;
  isRecording = false;
  if (recognition) { try { recognition.stop(); } catch {} }
  clearWaveform();
  clearRecordTimer();
  if (!SpeechRecognition) {
    finalTranscript = document.getElementById('fallback-textarea').value.trim();
  }
  analyzeAnswer();
}

function clearRecordTimer() {
  if (recTimerInterval) { clearInterval(recTimerInterval); recTimerInterval = null; }
}

function startRecordTimer(seconds) {
  clearRecordTimer();
  recTimerTotal = seconds;
  let timeLeft  = seconds;
  const display = document.getElementById('rec-timer-display');
  const bar     = document.getElementById('rec-timer-bar');

  function tick() {
    display.textContent = String(timeLeft).padStart(2, '0');
    bar.style.width     = `${(timeLeft / recTimerTotal) * 100}%`;
    const cls = timeLeft <= 5 ? 'danger' : timeLeft <= Math.ceil(recTimerTotal * 0.3) ? 'warning' : 'answer';
    display.className = 'timer-display ' + cls;
    bar.className     = 'timer-bar '     + cls;
  }

  tick();
  recTimerInterval = setInterval(() => {
    timeLeft--;
    tick();
    if (timeLeft <= 0) { clearRecordTimer(); stopRecording(); }
  }, 1000);
}

// ══════════════════════════════════════════════════════════════
// STEP 2 — AI Analysis & Feedback
// ══════════════════════════════════════════════════════════════

function offlineFeedback() {
  if (currentMode === 'opic') {
    return {
      scores: { task_completion: 0, discourse: 0, vocabulary: 0, grammar: 0, fluency: 0 },
      total_score: null, grade: '--',
      feedback: {
        task_completion: 'AI 서버 미연결 — 직접 평가해보세요.',
        discourse:       'AI 서버 미연결 — 직접 평가해보세요.',
        vocabulary:      'AI 서버 미연결 — 직접 평가해보세요.',
        grammar:         'AI 서버 미연결 — 직접 평가해보세요.',
        fluency:         'AI 서버 미연결 — 직접 평가해보세요.'
      },
      sample_answer: '',
      overall_comment: 'AI 서버에 연결되지 않아 자동 채점을 할 수 없습니다. 답변을 저장하고 스스로 평가해보세요.'
    };
  }
  return {
    scores: { pronunciation: 0, intonation: 0, grammar: 0, content: 0, fluency: 0 },
    total_score: null,
    grade: '--',
    feedback: {
      pronunciation: 'AI 서버 미연결 — 직접 평가해보세요.',
      intonation:    'AI 서버 미연결 — 직접 평가해보세요.',
      grammar:       'AI 서버 미연결 — 직접 평가해보세요.',
      content:       'AI 서버 미연결 — 직접 평가해보세요.',
      fluency:       'AI 서버 미연결 — 직접 평가해보세요.'
    },
    sample_answer: '',
    overall_comment: 'AI 서버에 연결되지 않아 자동 채점을 할 수 없습니다. 답변을 저장하고 스스로 평가해보세요.'
  };
}

async function analyzeAnswer() {
  showScreen('analyzing');
  const endpoint = currentMode === 'opic-jp' ? '/api/analyze-opic-jp-answer'
    : currentMode === 'opic' ? '/api/analyze-opic-answer'
    : '/api/analyze-answer';
  try {
    const res  = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question: currentQuestion, userAnswer: finalTranscript })
    });
    const data = await res.json();
    if (!res.ok) {
      if (res.status === 429) { showError(data.error || 'API 요청 한도 초과. 잠시 후 다시 시도해주세요.'); showScreen('practice'); return; }
      // 503 등 — 오프라인 피드백으로 계속 진행
      currentFeedback = offlineFeedback();
      showFeedback(currentFeedback);
      return;
    }
    currentFeedback = data;
    showFeedback(data);
  } catch {
    // 네트워크 없음(file:// 포함) — 오프라인 피드백으로 계속 진행
    currentFeedback = offlineFeedback();
    showFeedback(currentFeedback);
  }
}

function showFeedback(data) {
  const gradeEl = document.getElementById('fb-grade');
  gradeEl.textContent       = data.grade || '--';
  gradeEl.style.background  = GRADE_COLORS[data.grade] || '#6B7280';
  const fbTopicMap = currentMode === 'opic-jp' ? OPIC_JP_TOPIC_LABEL : OPIC_TOPIC_LABEL;
  const fbPartLabel = (currentMode === 'opic' || currentMode === 'opic-jp')
    ? (fbTopicMap[currentQuestion.part] || `Topic ${currentQuestion.part}`)
    : `Part ${currentQuestion.part}`;
  document.getElementById('fb-part-badge').textContent     = fbPartLabel;
  document.getElementById('fb-total').textContent          = data.total_score ?? '---';
  document.getElementById('fb-score-max').textContent      = (currentMode === 'opic' || currentMode === 'opic-jp') ? '/ 10' : '/ 200';
  document.getElementById('fb-overall-comment').textContent = data.overall_comment || '';
  document.getElementById('fb-user-answer').textContent    = finalTranscript || '(답변 없음)';
  document.getElementById('fb-sample-answer').textContent  = data.sample_answer || '';

  const btnSave = document.getElementById('btn-save');
  btnSave.textContent      = '저장하기 →';
  btnSave.disabled         = false;
  btnSave.style.background = '';

  renderAccordion('feedback-accordion', data.scores, data.feedback);
  showScreen('feedback');
  requestAnimationFrame(() => renderRadarChart(data.scores));
}

function renderAccordion(containerId, scores, feedback) {
  const labels   = (currentMode === 'opic' || currentMode === 'opic-jp') ? OPIC_SCORE_LABELS : SCORE_LABELS;
  const maxScore = (currentMode === 'opic' || currentMode === 'opic-jp') ? 2 : 3;
  document.getElementById(containerId).innerHTML = Object.entries(labels).map(([key, label]) => {
    const score = scores?.[key] ?? 0;
    return `
      <div class="accordion-item">
        <button class="accordion-header" onclick="toggleAccordion(this)">
          <span class="acc-label">${label}</span>
          <span class="acc-score">${score} / ${maxScore}</span>
          <span class="acc-arrow">▼</span>
        </button>
        <div class="accordion-body">
          <div class="score-bar-container">
            <div class="score-bar" style="width:${Math.round((score/maxScore)*100)}%"></div>
          </div>
          <p>${feedback?.[key] || ''}</p>
        </div>
      </div>`;
  }).join('');
}

function renderRadarChart(scores) {
  const ctx = document.getElementById('radar-chart').getContext('2d');
  if (radarChart) radarChart.destroy();
  radarChart = makeRadarChart(ctx, scores);
}

function makeRadarChart(ctx, scores) {
  const isOpic   = currentMode === 'opic';
  const isOpicJp = currentMode === 'opic-jp';
  const labels = (isOpic || isOpicJp)
    ? ['課題達成', '談話構成', '語彙力', '文法', '流暢さ']
    : ['발음', '억양', '문법', '내용', '유창성'];
  const data = (isOpic || isOpicJp)
    ? [scores?.task_completion ?? 0, scores?.discourse ?? 0, scores?.vocabulary ?? 0, scores?.grammar ?? 0, scores?.fluency ?? 0]
    : [scores?.pronunciation ?? 0, scores?.intonation ?? 0, scores?.grammar ?? 0, scores?.content ?? 0, scores?.fluency ?? 0];
  const maxVal = (isOpic || isOpicJp) ? 2 : 3;
  const rgb    = isOpicJp ? '220,38,38' : isOpic ? '13,148,136' : '79,70,229';
  const point  = isOpicJp ? '#DC2626' : isOpic ? '#0D9488' : '#4F46E5';
  return new Chart(ctx, {
    type: 'radar',
    data: {
      labels,
      datasets: [{
        data,
        backgroundColor: `rgba(${rgb},0.15)`,
        borderColor:     `rgba(${rgb},0.85)`,
        pointBackgroundColor: point,
        pointRadius: 4,
        borderWidth: 2
      }]
    },
    options: {
      responsive: false,
      scales: {
        r: {
          min: 0, max: maxVal,
          ticks:       { stepSize: 1, font: { size: 10 }, color: '#9CA3AF' },
          pointLabels: { font: { size: 11 }, color: '#374151' },
          grid:        { color: 'rgba(0,0,0,0.07)' },
          angleLines:  { color: 'rgba(0,0,0,0.07)' }
        }
      },
      plugins: { legend: { display: false } }
    }
  });
}

function toggleAccordion(btn) {
  const body = btn.nextElementSibling;
  const arrow = btn.querySelector('.acc-arrow');
  const open  = body.classList.contains('open');
  document.querySelectorAll('.accordion-body').forEach(b => b.classList.remove('open'));
  document.querySelectorAll('.acc-arrow').forEach(a => a.textContent = '▼');
  if (!open) { body.classList.add('open'); arrow.textContent = '▲'; }
}

// ══════════════════════════════════════════════════════════════
// STEP 3 — LocalStorage
// ══════════════════════════════════════════════════════════════

function getHistoryKey() {
  if (currentMode === 'opic')    return OPIC_STORAGE_KEY;
  if (currentMode === 'opic-jp') return OPIC_JP_STORAGE_KEY;
  return STORAGE_KEY;
}

function getHistory() {
  try { return JSON.parse(localStorage.getItem(getHistoryKey()) || '[]'); } catch { return []; }
}

function saveRecord(record) {
  const history = getHistory();
  history.unshift({ id: crypto.randomUUID(), ...record });
  try {
    localStorage.setItem(getHistoryKey(), JSON.stringify(history));
  } catch (e) {
    if (e.name === 'QuotaExceededError' && history.length > 1) {
      history.pop();
      localStorage.setItem(getHistoryKey(), JSON.stringify(history));
      showError('저장 공간 부족으로 가장 오래된 기록 1건이 삭제되었습니다.');
    }
  }
}

function deleteRecord(id) {
  const updated = getHistory().filter(r => r.id !== id);
  localStorage.setItem(getHistoryKey(), JSON.stringify(updated));
}

function clearHistory() {
  localStorage.removeItem(getHistoryKey());
}

function exportHistory() {
  const data   = JSON.stringify(getHistory(), null, 2);
  const blob   = new Blob([data], { type: 'application/json' });
  const url    = URL.createObjectURL(blob);
  const a      = document.createElement('a');
  a.href       = url;
  const prefix = currentMode === 'opic' ? 'opic' : 'toeic';
  a.download   = `${prefix}_history_${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

// ── Save result (Step 2 → Step 3) ─────────────────────────────
function saveResult() {
  if (!currentFeedback) return;
  saveRecord({
    date:  new Date().toISOString(),
    part:  currentQuestion.part,
    question: {
      instruction: currentQuestion.instruction,
      content:     currentQuestion.question
    },
    user_answer:     finalTranscript,
    scores:          currentFeedback.scores,
    total_score:     currentFeedback.total_score,
    grade:           currentFeedback.grade,
    sample_answer:   currentFeedback.sample_answer,
    feedback:        currentFeedback.feedback,
    overall_comment: currentFeedback.overall_comment
  });

  const btn = document.getElementById('btn-save');
  btn.textContent      = '저장 완료 ✓';
  btn.disabled         = true;
  btn.style.background = 'var(--success)';
  showSuccess('학습 기록이 저장되었습니다');
}

// ══════════════════════════════════════════════════════════════
// STEP 3 — History Dashboard
// ══════════════════════════════════════════════════════════════

function updateHistoryFilterTabs() {
  const tabs      = document.getElementById('filter-tabs');
  const isOpicJp  = currentMode === 'opic-jp';
  const isOp      = currentMode === 'opic' || isOpicJp;
  const topicMap  = isOpicJp ? OPIC_JP_TOPIC_LABEL : OPIC_TOPIC_LABEL;
  const all       = `<button class="filter-tab active" data-filter="all">전체</button>`;
  const maxTopics = isOp ? 8 : 6;
  const items = Array.from({length: maxTopics}, (_, i) => i + 1).map(t =>
    `<button class="filter-tab" data-filter="${t}">${isOp ? (topicMap[t] || `Topic ${t}`) : `Part ${t}`}</button>`
  ).join('');
  tabs.innerHTML = all + items;
}

function showHistoryScreen() {
  const history = getHistory();
  currentFilter = 'all';
  updateHistoryFilterTabs();

  const titleEl = document.querySelector('.history-title');
  const histTitle = currentMode === 'opic-jp' ? 'OPIc 日本語 히스토리'
    : currentMode === 'opic' ? 'OPIc 히스토리' : '학습 히스토리';
  if (titleEl) titleEl.textContent = histTitle;

  // Summary stats
  document.getElementById('stat-count').textContent = history.length;
  if (history.length > 0) {
    document.getElementById('stat-recent').textContent = history[0].total_score ?? '--';
    const avg = Math.round(history.reduce((s, r) => s + (r.total_score || 0), 0) / history.length);
    document.getElementById('stat-avg').textContent = avg;
  } else {
    document.getElementById('stat-recent').textContent = '--';
    document.getElementById('stat-avg').textContent    = '--';
  }

  const empty   = document.getElementById('history-empty');
  const content = document.getElementById('history-content');

  if (history.length === 0) {
    empty.classList.remove('hidden');
    content.classList.add('hidden');
  } else {
    empty.classList.add('hidden');
    content.classList.remove('hidden');
    renderTrendChart(history);
    renderAvgRadarChart(history);
    renderWeakAnalysis(history);
    renderHistoryList(history, 'all');
  }

  showScreen('history');
}

function renderTrendChart(history) {
  const ctx = document.getElementById('trend-chart').getContext('2d');
  if (trendChart) trendChart.destroy();

  const isOpic       = currentMode === 'opic';
  const chronological = [...history].reverse();
  const labels = chronological.map(r =>
    new Date(r.date).toLocaleDateString('ko-KR', { month: 'numeric', day: 'numeric' })
  );
  const scores = chronological.map(r => r.total_score);
  const lineColor = isOpic ? '#0D9488' : '#4F46E5';
  const fillColor = isOpic ? 'rgba(13,148,136,0.08)' : 'rgba(79,70,229,0.08)';
  const yMax      = isOpic ? 12 : 210;
  const yMin      = isOpic ? 0  : 100;
  const yStep     = isOpic ? 2  : 20;

  trendChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        label: isOpic ? '점수' : '환산 점수',
        data:  scores,
        borderColor:     lineColor,
        backgroundColor: fillColor,
        tension:  0.35,
        fill:     true,
        pointRadius:          5,
        pointBackgroundColor: lineColor,
        pointBorderColor:     'white',
        pointBorderWidth:     2
      }]
    },
    options: {
      responsive:          true,
      maintainAspectRatio: false,
      scales: {
        y: { min: yMin, max: yMax, ticks: { stepSize: yStep }, grid: { color: 'rgba(0,0,0,0.05)' } },
        x: { grid: { display: false }, ticks: { font: { size: 11 } } }
      },
      plugins: { legend: { display: false } }
    }
  });
}

function renderAvgRadarChart(history) {
  const ctx = document.getElementById('avg-radar-chart').getContext('2d');
  if (avgRadarChart) avgRadarChart.destroy();

  const dims = ['pronunciation', 'intonation', 'grammar', 'content', 'fluency'];
  const avgScores = {};
  dims.forEach(d => {
    avgScores[d] = history.reduce((s, r) => s + (r.scores?.[d] ?? 0), 0) / history.length;
  });

  avgRadarChart = makeRadarChart(ctx, avgScores);
}

function renderWeakAnalysis(history) {
  if (history.length === 0) return;

  const isOpicJp2    = currentMode === 'opic-jp';
  const isOpic       = currentMode === 'opic' || isOpicJp2;
  const partNameMap  = isOpicJp2 ? OPIC_JP_PART_NAME_KO : isOpic ? OPIC_PART_NAME_KO : PART_NAME_KO;
  const scoreLabels  = isOpic ? OPIC_SCORE_LABELS : SCORE_LABELS;
  const maxDimScore  = isOpic ? 2 : 3;

  const partMap = {};
  history.forEach(r => {
    if (!partMap[r.part]) partMap[r.part] = [];
    partMap[r.part].push(r.total_score || 0);
  });
  const partEntries = Object.entries(partMap)
    .map(([p, scores]) => ({ part: parseInt(p), avg: scores.reduce((a, b) => a + b, 0) / scores.length }))
    .sort((a, b) => a.avg - b.avg);

  const weakPartBanner = document.getElementById('weak-part-banner');
  if (partEntries.length > 0) {
    const wp = partEntries[0];
    document.getElementById('weak-part-text').textContent = `${partNameMap[wp.part]} (평균 ${Math.round(wp.avg)}점)`;
    document.getElementById('btn-weak-challenge').onclick = () => generateQuestion(wp.part);
    weakPartBanner.classList.remove('hidden');
  } else {
    weakPartBanner.classList.add('hidden');
  }

  const dims    = Object.keys(scoreLabels);
  const dimAvgs = dims.map(d => ({
    name: d,
    avg:  history.reduce((s, r) => s + (r.scores?.[d] ?? 0), 0) / history.length
  })).sort((a, b) => a.avg - b.avg);

  const weakAreaBanner = document.getElementById('weak-area-banner');
  if (dimAvgs.length > 0) {
    const wd = dimAvgs[0];
    document.getElementById('weak-area-text').textContent =
      `${scoreLabels[wd.name]} (평균 ${wd.avg.toFixed(1)} / ${maxDimScore}점) — 집중 연습이 필요합니다`;
    weakAreaBanner.classList.remove('hidden');
  } else {
    weakAreaBanner.classList.add('hidden');
  }
}

function renderHistoryList(history, filter) {
  const filtered = filter === 'all' ? history : history.filter(r => r.part === parseInt(filter));
  const list = document.getElementById('history-list');

  if (filtered.length === 0) {
    list.innerHTML = '<p style="text-align:center;color:var(--muted);padding:24px">해당 파트의 기록이 없습니다.</p>';
    return;
  }

  list.innerHTML = filtered.map(r => {
    const isOpicJp   = currentMode === 'opic-jp';
    const isOpic     = currentMode === 'opic' || isOpicJp;
    const topicMapH  = isOpicJp ? OPIC_JP_TOPIC_LABEL : OPIC_TOPIC_LABEL;
    const date       = new Date(r.date).toLocaleString('ko-KR', { month: 'numeric', day: 'numeric', hour: 'numeric', minute: '2-digit' });
    const warn       = isOpic
      ? ((r.total_score || 0) <= 5 ? '<span class="warn-icon">⚠️</span>' : '')
      : ((r.total_score || 0) <= 140 ? '<span class="warn-icon">⚠️</span>' : '');
    const color      = GRADE_COLORS[r.grade] || '#6B7280';
    const badgeLabel = isOpic ? (topicMapH[r.part] || `Topic ${r.part}`) : `Part ${r.part}`;
    const scoreText  = isOpic ? `${r.total_score || '--'}/10` : `${r.total_score || '--'}점`;
    return `
      <div class="history-card">
        <div class="hc-main" onclick="showHistoryDetail('${r.id}')">
          <div class="hc-left">
            <span class="part-badge">${badgeLabel}</span>
            <span class="hc-date">${date}</span>
          </div>
          <div class="hc-right">
            ${warn}
            <span class="hc-grade" style="color:${color}">${r.grade || '--'}</span>
            <span class="hc-score">${scoreText}</span>
          </div>
        </div>
        <div class="hc-actions">
          <button class="hc-btn" onclick="showHistoryDetail('${r.id}')">상세 보기</button>
          <button class="hc-btn" onclick="retryFromHistory(${r.part}, event)">다시 풀기</button>
          <button class="hc-btn hc-btn-danger" onclick="confirmDeleteRecord('${r.id}', event)">삭제</button>
        </div>
      </div>`;
  }).join('');
}

// ── History detail view ────────────────────────────────────────
function showHistoryDetail(id) {
  const record = getHistory().find(r => r.id === id);
  if (!record) return;
  currentDetailId = id;

  const hdTopicMap = currentMode === 'opic-jp' ? OPIC_JP_TOPIC_LABEL : OPIC_TOPIC_LABEL;
  const partLabel = (currentMode === 'opic' || currentMode === 'opic-jp')
    ? (hdTopicMap[record.part] || `Topic ${record.part}`)
    : `Part ${record.part}`;
  document.getElementById('hd-part-badge').textContent    = partLabel;
  document.getElementById('hd-score-max').textContent     = (currentMode === 'opic' || currentMode === 'opic-jp') ? '/ 10' : '/ 200';
  document.getElementById('hd-date').textContent          =
    new Date(record.date).toLocaleString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit' });
  document.getElementById('hd-total').textContent         = record.total_score ?? '---';
  document.getElementById('hd-overall-comment').textContent = record.overall_comment || '';
  document.getElementById('hd-user-answer').textContent   = record.user_answer || '(답변 없음)';
  document.getElementById('hd-sample-answer').textContent = record.sample_answer || '';

  const gradeEl = document.getElementById('hd-grade');
  gradeEl.textContent      = record.grade || '--';
  gradeEl.style.background = GRADE_COLORS[record.grade] || '#6B7280';

  document.getElementById('btn-hd-retry').onclick = () => generateQuestion(record.part);

  renderAccordion('hd-feedback-accordion', record.scores, record.feedback);
  showScreen('history-detail');
  requestAnimationFrame(() => {
    const ctx = document.getElementById('hd-radar-chart').getContext('2d');
    if (hdRadarChart) hdRadarChart.destroy();
    hdRadarChart = makeRadarChart(ctx, record.scores);
  });
}

// ── Inline-called helpers ──────────────────────────────────────
function retryFromHistory(part, event) {
  event.stopPropagation();
  fullCleanup();
  generateQuestion(part);
}

function confirmDeleteRecord(id, event) {
  event.stopPropagation();
  if (!confirm('이 기록을 삭제하시겠습니까?')) return;
  deleteRecord(id);
  showHistoryScreen(); // refresh
}

// ── Cleanup ────────────────────────────────────────────────────
function fullCleanup() {
  clearTimer();
  clearRecordTimer();
  clearWaveform();
  if (recognition) { isRecording = false; try { recognition.stop(); } catch {} }
}

// ══════════════════════════════════════════════════════════════
// Toasts
// ══════════════════════════════════════════════════════════════

function showError(msg) {
  document.getElementById('error-message').textContent = msg;
  document.getElementById('error-toast').classList.remove('hidden');
  setTimeout(hideError, 5000);
}
function hideError() { document.getElementById('error-toast').classList.add('hidden'); }

function showSuccess(msg) {
  document.getElementById('success-message').textContent = msg;
  const el = document.getElementById('success-toast');
  el.classList.remove('hidden');
  setTimeout(() => el.classList.add('hidden'), 3000);
}

// ══════════════════════════════════════════════════════════════
// Event Listeners
// ══════════════════════════════════════════════════════════════

// TOEIC Practice screen
document.querySelectorAll('#screen-practice .part-card').forEach(card => {
  card.addEventListener('click', () => {
    setActiveTab('practice');
    generateQuestion(parseInt(card.dataset.part, 10));
  });
});
document.getElementById('btn-random').addEventListener('click', () => {
  setActiveTab('practice');
  generateQuestion(Math.ceil(Math.random() * 6));
});

// OPIc Practice screen
document.querySelectorAll('#screen-opic-practice .opic-topic-card').forEach(card => {
  card.addEventListener('click', () => {
    setActiveTab('practice');
    generateQuestion(parseInt(card.dataset.topic, 10));
  });
});
document.getElementById('btn-opic-random').addEventListener('click', () => {
  setActiveTab('practice');
  generateQuestion(Math.ceil(Math.random() * 8));
});

// OPIc JP Practice screen
document.querySelectorAll('#screen-opic-jp-practice .opic-jp-topic-card').forEach(card => {
  card.addEventListener('click', () => {
    setActiveTab('practice');
    generateQuestion(parseInt(card.dataset.topic, 10));
  });
});
document.getElementById('btn-opic-jp-random').addEventListener('click', () => {
  setActiveTab('practice');
  generateQuestion(Math.ceil(Math.random() * 8));
});

// Question screen
function getPracticeScreen() {
  if (currentMode === 'opic')    return 'opic-practice';
  if (currentMode === 'opic-jp') return 'opic-jp-practice';
  return 'practice';
}
document.getElementById('btn-back').addEventListener('click', () => {
  clearTimer();
  showScreen(getPracticeScreen());
});

// Recording screen
document.getElementById('btn-rec-back').addEventListener('click', () => {
  fullCleanup();
  showScreen(getPracticeScreen());
});
document.getElementById('btn-stop-record').addEventListener('click', stopRecording);

// Feedback screen
document.getElementById('btn-feedback-home').addEventListener('click', () => {
  fullCleanup();
  showScreen(getPracticeScreen());
});
document.getElementById('btn-save').addEventListener('click', saveResult);
document.getElementById('btn-retry-question').addEventListener('click', () => { fullCleanup(); showQuestion(currentQuestion); });

// History dashboard
document.getElementById('btn-export').addEventListener('click', exportHistory);
document.getElementById('btn-clear-all').addEventListener('click', () => {
  if (!confirm('모든 학습 기록을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.')) return;
  clearHistory();
  showHistoryScreen();
});
document.getElementById('btn-start-practice').addEventListener('click', () => navTo('practice'));

// Filter tabs
document.getElementById('filter-tabs').addEventListener('click', (e) => {
  const tab = e.target.closest('.filter-tab');
  if (!tab) return;
  currentFilter = tab.dataset.filter;
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.toggle('active', t === tab));
  renderHistoryList(getHistory(), currentFilter);
});

// History detail
document.getElementById('btn-detail-back').addEventListener('click', showHistoryScreen);

// Vocab back
document.getElementById('btn-vocab-back').addEventListener('click', showVocabHomeScreen);

// ══════════════════════════════════════════════════════════════
// STUDY — 학습 과정
// ══════════════════════════════════════════════════════════════

// ── 학습 홈 ──────────────────────────────────────────────────
function showStudyScreen() {
  const modules = currentMode === 'opic-jp' ? OPIC_JP_STUDY_MODULES
    : currentMode === 'opic' ? OPIC_STUDY_MODULES : STUDY_MODULES;
  const list    = document.getElementById('study-module-list');

  // 모드가 바뀌면 항상 재렌더링
  list.dataset.renderedMode = list.dataset.renderedMode || '';
  if (list.dataset.renderedMode !== currentMode) {
    let studyListHtml = modules.map(mod => `
      <div class="study-module-card" onclick="openModule('${mod.id}')">
        <div class="smc-body">
          <div class="smc-icon" style="background:${mod.color}22">${mod.icon}</div>
          <div class="smc-info">
            <div class="smc-title">${mod.title}</div>
            <div class="smc-subtitle">${mod.subtitle}</div>
          </div>
          <div class="smc-right"><span class="smc-arrow">›</span></div>
        </div>
      </div>`).join('');
    if (currentMode === 'opic-jp') studyListHtml = applyJpFurigana(studyListHtml);
    list.innerHTML = studyListHtml;
    list.dataset.renderedMode = currentMode;
  }

  // 섹션 헤더 텍스트 갱신
  const headerTitle = document.querySelector('.ssh-study .screen-section-title');
  const headerSub   = document.querySelector('.ssh-study .screen-section-sub');
  if (currentMode === 'opic-jp') {
    if (headerTitle) headerTitle.textContent = 'OPIc 日本語 学習課程';
    if (headerSub)   headerSub.textContent   = '시험 기초 · 주제별 일본어 표현 · 고득점 전략';
  } else if (currentMode === 'opic') {
    if (headerTitle) headerTitle.textContent = 'OPIc 학습 과정';
    if (headerSub)   headerSub.textContent   = '등급 전략 · 주제별 답변법 · 롤플레이';
  } else {
    if (headerTitle) headerTitle.textContent = '학습 과정';
    if (headerSub)   headerSub.textContent   = '파트별 이론 · 전략 · 표현 학습';
  }

  showScreen('study');
}

function openModule(moduleId) {
  const modules = currentMode === 'opic-jp' ? OPIC_JP_STUDY_MODULES
    : currentMode === 'opic' ? OPIC_STUDY_MODULES : STUDY_MODULES;
  const mod     = modules.find(m => m.id === moduleId);
  if (!mod) return;
  openLesson(mod.lessons[0].id);
}

function openGrammarModule(moduleId) {
  const mods = currentMode === 'opic-jp' ? OPIC_JP_GRAMMAR_MODULES : GRAMMAR_MODULES;
  const mod = mods.find(m => m.id === moduleId);
  if (!mod) return;
  openGrammarLesson(mod.lessons[0].id);
}

// ── 레슨 뷰어 ───────────────────────────────────────────────
let currentLessonId      = null;
let currentLessonContext = 'study'; // 'study' | 'opic-study' | 'opic-jp-study' | 'grammar'

function openLesson(lessonId) {
  currentLessonId = lessonId;
  if (currentMode === 'opic-jp') {
    currentLessonContext = 'opic-jp-study';
    _renderLessonView(lessonId, OPIC_JP_STUDY_MODULES, 'openLesson');
  } else if (currentMode === 'opic') {
    currentLessonContext = 'opic-study';
    _renderLessonView(lessonId, OPIC_STUDY_MODULES, 'openLesson');
  } else {
    currentLessonContext = 'study';
    _renderLessonView(lessonId, STUDY_MODULES, 'openLesson');
  }
}

function openGrammarLesson(lessonId) {
  currentLessonId      = lessonId;
  currentLessonContext = 'grammar';
  const mods = currentMode === 'opic-jp' ? OPIC_JP_GRAMMAR_MODULES : GRAMMAR_MODULES;
  _renderLessonView(lessonId, mods, 'openGrammarLesson');
}

function _renderLessonView(lessonId, modules, openFn) {
  let mod, lesson, lessonIdx;
  for (const m of modules) {
    const idx = m.lessons.findIndex(l => l.id === lessonId);
    if (idx !== -1) { mod = m; lesson = m.lessons[idx]; lessonIdx = idx; break; }
  }
  if (!mod) return;

  document.getElementById('lesson-module-name').textContent = mod.title;
  document.getElementById('lesson-title').textContent       = lesson.title;
  document.getElementById('lesson-duration').textContent    = '⏱ ' + lesson.duration;

  const dots = document.getElementById('lesson-dots');
  dots.innerHTML = mod.lessons.map((l, i) => {
    const cls = i === lessonIdx ? 'active' : '';
    return `<div class="lesson-dot ${cls}" onclick="${openFn}('${l.id}')"></div>`;
  }).join('');

  document.getElementById('btn-lesson-prev').disabled = (lessonIdx === 0 && modules.indexOf(mod) === 0);
  document.getElementById('btn-lesson-next').disabled = (lessonIdx === mod.lessons.length - 1 && modules.indexOf(mod) === modules.length - 1);

  let lessonHtml = lesson.content.map(renderBlock).join('');
  if (currentMode === 'opic-jp') lessonHtml = applyJpFurigana(lessonHtml);
  document.getElementById('lesson-content-area').innerHTML = lessonHtml;

  showScreen('study-lesson');
  document.getElementById('screen-study-lesson').scrollTop = 0;
}

function _getContextModules() {
  if (currentLessonContext === 'grammar')        return currentMode === 'opic-jp' ? OPIC_JP_GRAMMAR_MODULES : GRAMMAR_MODULES;
  if (currentLessonContext === 'opic-study')     return OPIC_STUDY_MODULES;
  if (currentLessonContext === 'opic-jp-study')  return OPIC_JP_STUDY_MODULES;
  return STUDY_MODULES;
}

function prevLesson() {
  const modules = _getContextModules();
  const openFn  = currentLessonContext === 'grammar' ? openGrammarLesson : openLesson;
  let prevId = null;
  for (let mi = 0; mi < modules.length; mi++) {
    const m = modules[mi];
    for (let li = 0; li < m.lessons.length; li++) {
      if (m.lessons[li].id === currentLessonId) {
        if (li > 0) prevId = m.lessons[li - 1].id;
        else if (mi > 0) { const pm = modules[mi - 1]; prevId = pm.lessons[pm.lessons.length - 1].id; }
        break;
      }
    }
  }
  if (prevId) openFn(prevId);
}

function nextLesson() {
  const modules = _getContextModules();
  const openFn  = currentLessonContext === 'grammar' ? openGrammarLesson : openLesson;
  let nextId = null;
  for (let mi = 0; mi < modules.length; mi++) {
    const m = modules[mi];
    for (let li = 0; li < m.lessons.length; li++) {
      if (m.lessons[li].id === currentLessonId) {
        if (li < m.lessons.length - 1) nextId = m.lessons[li + 1].id;
        else if (mi < modules.length - 1) nextId = modules[mi + 1].lessons[0].id;
        break;
      }
    }
  }
  if (nextId) openFn(nextId);
}

// ── 컨텐츠 블록 렌더러 ────────────────────────────────────────

// 텍스트에서 "..." 인용 중 일본어(히라가나/가타카나) 비중이 높은 부분만 추출
function _extractJpQuotes(text) {
  const parts = [];
  const re = /"([^"]+)"/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    const s = m[1];
    const jp = (s.match(/[ぁ-ゖ゠-ヿ]/g) || []).length;
    const ko = (s.match(/[가-힣]/g) || []).length;
    if (jp > 0 && jp >= ko) parts.push(s);
  }
  return parts.join(' ');
}

function _jpSpeakBtn(tText) {
  const t = tText.replace(/"/g, '&quot;');
  return `<button class="speak-btn speak-btn-sm speak-btn-inline" onclick="speak(this,this.dataset.t)" data-t="${t}" title="소리로 듣기">🔊</button>`;
}

// Render JP text with per-segment buttons — splits on ' / ' when present
function _jpCellBtns(text) {
  const btn = t => `<button class="speak-btn speak-btn-sm" onclick="event.stopPropagation();speak(this,this.dataset.t)" data-t="${t.replace(/"/g, '&quot;')}" title="소리로 듣기">🔊</button>`;
  if (!text.includes(' / ')) return text + btn(text);
  return text.split(' / ').map(seg => seg.trim() + btn(seg.trim())).join(' / ');
}

// Insert inline speak buttons right after each "QuotedJP" segment in mixed text
function _inlineJpSpeakBtns(text) {
  return text.replace(/"([^"]+)"/g, (match, s) => {
    const jp = (s.match(/[ぁ-ゖ゠-ヿ]/g) || []).length;
    const ko = (s.match(/[가-힣]/g) || []).length;
    if (jp === 0 || jp < ko) return match;
    const btn = t => `<button class="speak-btn speak-btn-sm speak-btn-inline" onclick="speak(this,this.dataset.t)" data-t="${t.replace(/"/g, '&quot;')}" title="소리로 듣기">🔊</button>`;
    if (s.includes(' / ')) {
      const parts = s.split(' / ').map(seg => { seg = seg.trim(); return seg + btn(seg); });
      return `"${parts.join(' / ')}"`;
    }
    return `"${s}"${btn(s)}`;
  });
}

function renderBlock(block) {
  switch (block.type) {
    case 'heading': {
      const jpRe = /[ぁ-ゖ゠-ヿ]/;
      if (jpRe.test(block.text)) {
        const extracted = _extractJpQuotes(block.text);
        const tText = extracted || block.text;
        return `<div class="cb-heading">${block.text} ${_jpSpeakBtn(tText)}</div>`;
      }
      return `<div class="cb-heading">${block.text}</div>`;
    }

    case 'text': {
      return `<p class="cb-text">${_inlineJpSpeakBtns(block.text)}</p>`;
    }

    case 'tip': {
      const cls = block.icon === '⚠️' ? 'tip-warn' : block.icon === '🎯' ? 'tip-success' : 'tip-info';
      return `<div class="cb-tip ${cls}"><span class="tip-icon">${block.icon || '💡'}</span>${_inlineJpSpeakBtns(block.text)}</div>`;
    }

    case 'list':
      return `<ul class="cb-list">${block.items.map(i => `<li>${i}</li>`).join('')}</ul>`;

    case 'numbered':
      return `<ol class="cb-numbered">${block.items.map(i => `<li>${i}</li>`).join('')}</ol>`;

    case 'table': {
      const _jpRe = /[ぁ-ゖ゠-ヿ]/;
      const ths = block.headers.map(h => `<th>${h}</th>`).join('');
      const trs = block.rows.map(r => `<tr>${r.map(c => {
        if (typeof c === 'object' && c !== null && c.jp) {
          return `<td><div class="td-jp-wrap">${_jpCellBtns(c.jp)}</div><div class="td-ko">${c.ko}</div></td>`;
        }
        if (typeof c === 'string' && _jpRe.test(c)) {
          return `<td><div class="td-jp-wrap">${_jpCellBtns(c)}</div></td>`;
        }
        return `<td>${c}</td>`;
      }).join('')}</tr>`).join('');
      return `<div class="cb-table-wrap"><table class="cb-table"><thead><tr>${ths}</tr></thead><tbody>${trs}</tbody></table></div>`;
    }

    case 'structure': {
      return `<div class="cb-structure">${block.steps.map(s => {
        const jpCount = (s.desc.match(/[ぁ-ゖ゠-ヿ]/g) || []).length;
        const koCount = (s.desc.match(/[가-힣]/g) || []).length;
        const isJpDominant = jpCount > 0 && jpCount >= koCount;
        const koDiv = s.desc_ko ? `<div class="step-desc-ko">${s.desc_ko}</div>` : '';
        let descWrap;
        if (isJpDominant) {
          if (s.desc.includes(' / ')) {
            const sBtn = t => `<button class="speak-btn speak-btn-sm speak-btn-inline" onclick="speak(this,this.dataset.t)" data-t="${t.replace(/"/g, '&quot;')}" title="소리로 듣기">🔊</button>`;
            const descHtml = s.desc.split(' / ').map(seg => seg.trim() + sBtn(seg.trim())).join(' / ');
            descWrap = `<div class="step-desc-wrap"><div class="step-desc">${descHtml}</div></div>`;
          } else {
            const descT = s.desc.replace(/\n/g, ' ').replace(/"/g, '&quot;');
            const speakBtn = `<button class="speak-btn speak-btn-sm" onclick="speak(this,this.dataset.t)" data-t="${descT}" title="소리로 듣기">🔊</button>`;
            descWrap = `<div class="step-desc-wrap"><div class="step-desc">${s.desc}</div>${speakBtn}</div>`;
          }
        } else {
          descWrap = `<div class="step-desc-wrap"><div class="step-desc">${s.desc}</div></div>`;
        }
        return `
        <div class="cb-step">
          <div class="step-num">${s.num}</div>
          <div class="step-body">
            <div class="step-title">${s.title}</div>
            ${descWrap}
            ${koDiv}
          </div>
        </div>`;
      }).join('')}</div>`;
    }

    case 'example': {
      const rows = block.items.map(i => `
        <div class="expr-item">
          <div class="expr-en-wrap">
            <div class="expr-en">${i.en}</div>
            <button class="speak-btn" onclick="speak(this, this.dataset.t)" data-t="${i.en.replace(/"/g, '&quot;')}" title="소리로 듣기">🔊</button>
          </div>
          <div class="expr-ko">${i.ko}</div>
        </div>`).join('');
      return `<div class="cb-expression"><div class="cb-expr-label">${block.label}</div>${rows}</div>`;
    }

    default:
      return '';
  }
}

// ── 학습 화면 이벤트 ─────────────────────────────────────────
document.getElementById('btn-lesson-back').addEventListener('click', () => {
  if (currentLessonContext === 'grammar') showGrammarScreen();
  else showStudyScreen();
});
document.getElementById('btn-lesson-prev').addEventListener('click', prevLesson);
document.getElementById('btn-lesson-next').addEventListener('click', nextLesson);

