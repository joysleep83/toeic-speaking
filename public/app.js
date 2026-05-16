// ── Constants ──────────────────────────────────────────────────
const STORAGE_KEY = 'toeic_speaking_history';

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

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// ── State ──────────────────────────────────────────────────────
let currentQuestion   = null;
let currentPart       = null;
let currentFeedback   = null;
let currentDetailId   = null;
let currentFilter     = 'all';

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
function speak(btn, text) {
  if (!text || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  if (btn.classList.contains('speaking')) {
    btn.classList.remove('speaking');
    return;
  }
  document.querySelectorAll('.speak-btn.speaking').forEach(b => b.classList.remove('speaking'));
  const utt = new SpeechSynthesisUtterance(text.trim());
  utt.lang = 'en-US';
  utt.rate = 0.9;
  btn.classList.add('speaking');
  utt.onend   = () => btn.classList.remove('speaking');
  utt.onerror = () => btn.classList.remove('speaking');
  window.speechSynthesis.speak(utt);
}

function speakEl(btn, id) {
  const el = document.getElementById(id);
  if (el) speak(btn, el.textContent);
}

// ── Screen management ──────────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(`screen-${id}`).classList.add('active');
}

function togglePracticeFolder() {
  const content = document.getElementById('practice-folder-content');
  const arrow   = document.getElementById('pf-arrow');
  const isOpen  = !content.classList.contains('hidden');
  content.classList.toggle('hidden', isOpen);
  arrow.classList.toggle('open', !isOpen);
}

function toggleExerciseFolder() {
  const content = document.getElementById('exercise-folder-content');
  const arrow   = document.getElementById('ef-arrow');
  const isOpen  = !content.classList.contains('hidden');
  content.classList.toggle('hidden', isOpen);
  arrow.classList.toggle('open', !isOpen);
}

function toggleStudyFolder() {
  const content = document.getElementById('study-folder-content');
  const arrow   = document.getElementById('sf-arrow');
  const isOpen  = !content.classList.contains('hidden');
  if (!isOpen && !content.hasChildNodes()) renderStudyFolderContent();
  content.classList.toggle('hidden', isOpen);
  arrow.classList.toggle('open', !isOpen);
}

function renderStudyFolderContent() {
  document.getElementById('study-folder-content').innerHTML =
    `<div class="study-folder-module-list">${
      STUDY_MODULES.map(mod => `
        <div class="study-module-card" onclick="openModule('${mod.id}')">
          <div class="smc-body">
            <div class="smc-icon" style="background:${mod.color}22">${mod.icon}</div>
            <div class="smc-info">
              <div class="smc-title">${mod.title}</div>
              <div class="smc-subtitle">${mod.subtitle}</div>
            </div>
            <div class="smc-right"><span class="smc-arrow">›</span></div>
          </div>
        </div>`).join('')
    }</div>`;
}

function toggleGrammarFolder() {
  const content = document.getElementById('grammar-folder-content');
  const arrow   = document.getElementById('gf-arrow');
  const isOpen  = !content.classList.contains('hidden');
  if (!isOpen && !content.hasChildNodes()) renderGrammarFolderContent();
  content.classList.toggle('hidden', isOpen);
  arrow.classList.toggle('open', !isOpen);
}

function renderGrammarFolderContent() {
  document.getElementById('grammar-folder-content').innerHTML =
    `<div class="study-folder-module-list">${
      GRAMMAR_MODULES.map(mod => `
        <div class="study-module-card" onclick="openGrammarModule('${mod.id}')">
          <div class="smc-body">
            <div class="smc-icon" style="background:${mod.color}22">${mod.icon}</div>
            <div class="smc-info">
              <div class="smc-title">${mod.title}</div>
              <div class="smc-subtitle">${mod.subtitle}</div>
            </div>
            <div class="smc-right"><span class="smc-arrow">›</span></div>
          </div>
        </div>`).join('')
    }</div>`;
}

// ── 연습 문제 목록 화면 ────────────────────────────────────────
function showPracticeList(part) {
  document.getElementById('pl-part-badge').textContent = `Part ${part}`;
  document.getElementById('pl-type').textContent       = PART_TYPE_LABEL[part] || '';

  const items = PRACTICE_DATA[part] || [];
  document.getElementById('practice-item-list').innerHTML = items.map((item, idx) => {
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

document.getElementById('btn-practice-back').addEventListener('click', () => showScreen('select'));

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
  document.getElementById('q-part-badge').textContent = `Part ${question.part}`;
  document.getElementById('q-type').textContent        = PART_TYPE_LABEL[question.part] || '';
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
  try {
    const res  = await fetch('/api/generate-question', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ part })
    });
    const data = await res.json();
    if (!res.ok) {
      if (res.status === 429) { showError(data.error || 'API 요청 한도 초과. 잠시 후 다시 시도해주세요.'); showScreen('select'); return; }
      // 서버 오류 — 로컬 샘플로 계속 진행
      showQuestion(pickLocalQuestion(part));
      return;
    }
    showQuestion(data);
  } catch {
    // 네트워크 완전 불가 — 로컬 샘플로 계속 진행
    showQuestion(pickLocalQuestion(part));
  }
}

// ══════════════════════════════════════════════════════════════
// STEP 2 — Recording
// ══════════════════════════════════════════════════════════════

function showRecordScreen() {
  finalTranscript = '';
  document.getElementById('rec-part-badge').textContent  = `Part ${currentQuestion.part}`;

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
  recognition.lang           = 'en-US';
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
  try {
    const res  = await fetch('/api/analyze-answer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question: currentQuestion, userAnswer: finalTranscript })
    });
    const data = await res.json();
    if (!res.ok) {
      if (res.status === 429) { showError(data.error || 'API 요청 한도 초과. 잠시 후 다시 시도해주세요.'); showScreen('record'); return; }
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
  document.getElementById('fb-part-badge').textContent     = `Part ${currentQuestion.part}`;
  document.getElementById('fb-total').textContent          = data.total_score ?? '---';
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
  document.getElementById(containerId).innerHTML = Object.entries(SCORE_LABELS).map(([key, label]) => {
    const score = scores?.[key] ?? 0;
    return `
      <div class="accordion-item">
        <button class="accordion-header" onclick="toggleAccordion(this)">
          <span class="acc-label">${label}</span>
          <span class="acc-score">${score} / 3</span>
          <span class="acc-arrow">▼</span>
        </button>
        <div class="accordion-body">
          <div class="score-bar-container">
            <div class="score-bar" style="width:${Math.round((score/3)*100)}%"></div>
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
  return new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['발음', '억양', '문법', '내용', '유창성'],
      datasets: [{
        data: [scores?.pronunciation ?? 0, scores?.intonation ?? 0, scores?.grammar ?? 0, scores?.content ?? 0, scores?.fluency ?? 0],
        backgroundColor: 'rgba(79,70,229,0.15)',
        borderColor:     'rgba(79,70,229,0.85)',
        pointBackgroundColor: '#4F46E5',
        pointRadius: 4,
        borderWidth: 2
      }]
    },
    options: {
      responsive: false,
      scales: {
        r: {
          min: 0, max: 3,
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

function getHistory() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); } catch { return []; }
}

function saveRecord(record) {
  const history = getHistory();
  history.unshift({ id: crypto.randomUUID(), ...record });
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  } catch (e) {
    if (e.name === 'QuotaExceededError' && history.length > 1) {
      history.pop();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
      showError('저장 공간 부족으로 가장 오래된 기록 1건이 삭제되었습니다.');
    }
  }
}

function deleteRecord(id) {
  const updated = getHistory().filter(r => r.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}

function clearHistory() {
  localStorage.removeItem(STORAGE_KEY);
}

function exportHistory() {
  const data = JSON.stringify(getHistory(), null, 2);
  const blob = new Blob([data], { type: 'application/json' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = `toeic_history_${new Date().toISOString().slice(0, 10)}.json`;
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

function showHistoryScreen() {
  const history = getHistory();
  currentFilter = 'all';

  // Reset filter tab UI
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.toggle('active', t.dataset.filter === 'all'));

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

  const chronological = [...history].reverse(); // oldest first
  const labels = chronological.map((r, i) =>
    new Date(r.date).toLocaleDateString('ko-KR', { month: 'numeric', day: 'numeric' })
  );
  const scores = chronological.map(r => r.total_score);

  trendChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        label: '환산 점수',
        data:  scores,
        borderColor:     '#4F46E5',
        backgroundColor: 'rgba(79,70,229,0.08)',
        tension:  0.35,
        fill:     true,
        pointRadius:          5,
        pointBackgroundColor: '#4F46E5',
        pointBorderColor:     'white',
        pointBorderWidth:     2
      }]
    },
    options: {
      responsive:          true,
      maintainAspectRatio: false,
      scales: {
        y: { min: 100, max: 210, ticks: { stepSize: 20 }, grid: { color: 'rgba(0,0,0,0.05)' } },
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

  // Part averages
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
    document.getElementById('weak-part-text').textContent = `${PART_NAME_KO[wp.part]} (평균 ${Math.round(wp.avg)}점)`;
    document.getElementById('btn-weak-challenge').onclick = () => generateQuestion(wp.part);
    weakPartBanner.classList.remove('hidden');
  } else {
    weakPartBanner.classList.add('hidden');
  }

  // Dimension averages
  const dims = ['pronunciation', 'intonation', 'grammar', 'content', 'fluency'];
  const dimAvgs = dims.map(d => ({
    name: d,
    avg:  history.reduce((s, r) => s + (r.scores?.[d] ?? 0), 0) / history.length
  })).sort((a, b) => a.avg - b.avg);

  const weakAreaBanner = document.getElementById('weak-area-banner');
  if (dimAvgs.length > 0) {
    const wd = dimAvgs[0];
    document.getElementById('weak-area-text').textContent =
      `${SCORE_LABELS[wd.name]} (평균 ${wd.avg.toFixed(1)} / 3점) — 집중 연습이 필요합니다`;
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
    const date  = new Date(r.date).toLocaleString('ko-KR', { month: 'numeric', day: 'numeric', hour: 'numeric', minute: '2-digit' });
    const warn  = (r.total_score || 0) <= 140 ? '<span class="warn-icon">⚠️</span>' : '';
    const color = GRADE_COLORS[r.grade] || '#6B7280';
    return `
      <div class="history-card">
        <div class="hc-main" onclick="showHistoryDetail('${r.id}')">
          <div class="hc-left">
            <span class="part-badge">Part ${r.part}</span>
            <span class="hc-date">${date}</span>
          </div>
          <div class="hc-right">
            ${warn}
            <span class="hc-grade" style="color:${color}">${r.grade || '--'}</span>
            <span class="hc-score">${r.total_score || '--'}점</span>
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

  document.getElementById('hd-part-badge').textContent    = `Part ${record.part}`;
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

// Select screen
document.querySelectorAll('.part-card').forEach(card => {
  card.addEventListener('click', () => generateQuestion(parseInt(card.dataset.part, 10)));
});
document.getElementById('btn-random').addEventListener('click', () => generateQuestion(Math.ceil(Math.random() * 6)));
document.getElementById('btn-go-history').addEventListener('click', showHistoryScreen);

// Question screen
document.getElementById('btn-back').addEventListener('click', () => { clearTimer(); showScreen('select'); });

// Recording screen
document.getElementById('btn-rec-back').addEventListener('click', () => { fullCleanup(); showScreen('select'); });
document.getElementById('btn-stop-record').addEventListener('click', stopRecording);

// Feedback screen
document.getElementById('btn-feedback-home').addEventListener('click', () => { fullCleanup(); showScreen('select'); });
document.getElementById('btn-save').addEventListener('click', saveResult);
document.getElementById('btn-retry-question').addEventListener('click', () => { fullCleanup(); showQuestion(currentQuestion); });

// History dashboard
document.getElementById('btn-history-home').addEventListener('click', () => showScreen('select'));
document.getElementById('btn-export').addEventListener('click', exportHistory);
document.getElementById('btn-clear-all').addEventListener('click', () => {
  if (!confirm('모든 학습 기록을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.')) return;
  clearHistory();
  showHistoryScreen();
});
document.getElementById('btn-start-practice').addEventListener('click', () => showScreen('select'));

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

// Study (btn-go-study 제거 — 폴더로 전환)

// ══════════════════════════════════════════════════════════════
// STUDY — 학습 과정
// ══════════════════════════════════════════════════════════════

// ── 학습 홈 ──────────────────────────────────────────────────
function showStudyScreen() {
  const list = document.getElementById('study-module-list');
  list.innerHTML = STUDY_MODULES.map(mod => `
      <div class="study-module-card" onclick="openModule('${mod.id}')">
        <div class="smc-body">
          <div class="smc-icon" style="background:${mod.color}22">${mod.icon}</div>
          <div class="smc-info">
            <div class="smc-title">${mod.title}</div>
            <div class="smc-subtitle">${mod.subtitle}</div>
          </div>
          <div class="smc-right">
            <span class="smc-arrow">›</span>
          </div>
        </div>
      </div>`).join('');

  showScreen('study');
}

function openModule(moduleId) {
  const mod = STUDY_MODULES.find(m => m.id === moduleId);
  if (!mod) return;
  openLesson(mod.lessons[0].id);
}

function openGrammarModule(moduleId) {
  const mod = GRAMMAR_MODULES.find(m => m.id === moduleId);
  if (!mod) return;
  openGrammarLesson(mod.lessons[0].id);
}

// ── 레슨 뷰어 ───────────────────────────────────────────────
let currentLessonId      = null;
let currentLessonContext = 'study'; // 'study' | 'grammar'

function openLesson(lessonId) {
  currentLessonId      = lessonId;
  currentLessonContext = 'study';
  _renderLessonView(lessonId, STUDY_MODULES, 'openLesson');
}

function openGrammarLesson(lessonId) {
  currentLessonId      = lessonId;
  currentLessonContext = 'grammar';
  _renderLessonView(lessonId, GRAMMAR_MODULES, 'openGrammarLesson');
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

  document.getElementById('lesson-content-area').innerHTML = lesson.content.map(renderBlock).join('');

  showScreen('study-lesson');
  document.getElementById('screen-study-lesson').scrollTop = 0;
}

function prevLesson() {
  const modules = currentLessonContext === 'grammar' ? GRAMMAR_MODULES : STUDY_MODULES;
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
  const modules = currentLessonContext === 'grammar' ? GRAMMAR_MODULES : STUDY_MODULES;
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
function renderBlock(block) {
  switch (block.type) {
    case 'heading':
      return `<div class="cb-heading">${block.text}</div>`;

    case 'text':
      return `<p class="cb-text">${block.text}</p>`;

    case 'tip': {
      const cls = block.icon === '⚠️' ? 'tip-warn' : block.icon === '🎯' ? 'tip-success' : 'tip-info';
      return `<div class="cb-tip ${cls}"><span class="tip-icon">${block.icon || '💡'}</span>${block.text}</div>`;
    }

    case 'list':
      return `<ul class="cb-list">${block.items.map(i => `<li>${i}</li>`).join('')}</ul>`;

    case 'numbered':
      return `<ol class="cb-numbered">${block.items.map(i => `<li>${i}</li>`).join('')}</ol>`;

    case 'table': {
      const ths = block.headers.map(h => `<th>${h}</th>`).join('');
      const trs = block.rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('');
      return `<div class="cb-table-wrap"><table class="cb-table"><thead><tr>${ths}</tr></thead><tbody>${trs}</tbody></table></div>`;
    }

    case 'structure':
      return `<div class="cb-structure">${block.steps.map(s => `
        <div class="cb-step">
          <div class="step-num">${s.num}</div>
          <div class="step-body">
            <div class="step-title">${s.title}</div>
            <div class="step-desc">${s.desc}</div>
          </div>
        </div>`).join('')}</div>`;

    case 'example': {
      const rows = block.items.map(i => `
        <div class="expr-item">
          <div class="expr-en">${i.en}</div>
          <div class="expr-ko">${i.ko}</div>
        </div>`).join('');
      return `<div class="cb-expression"><div class="cb-expr-label">${block.label}</div>${rows}</div>`;
    }

    default:
      return '';
  }
}

// ── 학습 화면 이벤트 ─────────────────────────────────────────
document.getElementById('btn-study-home').addEventListener('click', () => showScreen('select'));
document.getElementById('btn-lesson-back').addEventListener('click', () => showScreen('select'));
document.getElementById('btn-lesson-prev').addEventListener('click', prevLesson);
document.getElementById('btn-lesson-next').addEventListener('click', nextLesson);

