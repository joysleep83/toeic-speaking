import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import 'dotenv/config';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.json());

// ── Practice images — explicit route so large PNGs always deliver ──
app.get('/practice-images/:file', (req, res) => {
  const file = req.params.file;
  if (!/^[\w.-]+$/.test(file)) return res.status(400).end();
  const filePath = join(__dirname, 'public', 'practice-images', file);
  res.setHeader('Cache-Control', 'no-store');
  res.sendFile(filePath, err => { if (err && !res.headersSent) res.status(404).end(); });
});

// ── Static: root index.html + public/ for assets ───────────────
app.use(express.static(join(__dirname, 'public')));
app.get('/', (_req, res) => res.sendFile(join(__dirname, 'public', 'index.html')));

// ── 문제 생성 모델 (JSON 구조화 출력 우수, 2026-05 기준 무료) ──
const QUESTION_MODELS = [
  'openai/gpt-oss-20b:free',                       // OpenAI OSS 20B — 빠른 JSON
  'google/gemma-4-31b-it:free',                    // Google Gemma 4 31B
  'meta-llama/llama-3.3-70b-instruct:free',        // Meta Llama 3.3 70B
  'google/gemma-4-26b-a4b-it:free'                 // Google Gemma 4 26B — 폴백
];

// ── AI 채점 모델 (추론·평가·한국어 강점, 2026-05 기준 무료) ───
const ANALYSIS_MODELS = [
  'openai/gpt-oss-120b:free',               // OpenAI OSS 120B — 구조화 출력·tool-use 특화
  'nvidia/nemotron-3-super-120b-a12b:free', // NVIDIA Nemotron Super 120B — 1M ctx 추론
  'qwen/qwen3-next-80b-a3b-instruct:free',  // Qwen3 80B — 한국어·영어 혼용 강점
  'meta-llama/llama-3.3-70b-instruct:free'  // Llama 3.3 70B — 안정적 폴백
];

const PART_CONFIG = {
  1: { type: 'Describe a Photo',                     prep_time: 30, answer_time: 45 },
  2: { type: 'Respond to Questions',                 prep_time: 3,  answer_time: 30 },
  3: { type: 'Respond to Questions Using Info',      prep_time: 30, answer_time: 30 },
  4: { type: 'Propose a Solution',                   prep_time: 45, answer_time: 60 },
  5: { type: 'Express an Opinion',                   prep_time: 45, answer_time: 60 },
  6: { type: 'Express an Opinion (Abstract Topic)',  prep_time: 45, answer_time: 60 }
};

// ── Sample question bank (AI 전체 실패 시 사용) ─────────────────
const SAMPLE_QUESTIONS = {
  1: [
    { part: 1, instruction: '사진을 보고 45초 동안 묘사하세요. 준비 시간 30초.', question: '[Photo: A woman is standing at a coffee shop counter, ordering from a barista. Pastries are displayed in a glass case, and other customers are seated at tables in the background.]', prep_time: 30, answer_time: 45 },
    { part: 1, instruction: '사진을 보고 45초 동안 묘사하세요. 준비 시간 30초.', question: '[Photo: Two colleagues are having a meeting in a modern office. One person is pointing at a laptop screen while the other takes notes. Plants and a whiteboard are visible in the background.]', prep_time: 30, answer_time: 45 },
    { part: 1, instruction: '사진을 보고 45초 동안 묘사하세요. 준비 시간 30초.', question: '[Photo: A busy farmer\'s market on a sunny day. Vendors are selling fresh vegetables and fruits at their stalls. Shoppers are walking through the aisles with bags and baskets.]', prep_time: 30, answer_time: 45 }
  ],
  2: [
    { part: 2, instruction: '친구가 직장 생활에 대한 설문을 하고 있습니다. 준비 없이 30초 안에 답하세요.', question: 'Imagine a friend is surveying you about work habits.\n\nQuestion: Do you prefer working independently or as part of a team, and why?', prep_time: 3, answer_time: 30 },
    { part: 2, instruction: '동료가 여행 습관에 대한 설문을 하고 있습니다. 준비 없이 30초 안에 답하세요.', question: 'Imagine a colleague is surveying you about travel preferences.\n\nQuestion: How do you usually prepare before going on a trip?', prep_time: 3, answer_time: 30 },
    { part: 2, instruction: '친구가 독서 습관에 대한 설문을 하고 있습니다. 준비 없이 30초 안에 답하세요.', question: 'Imagine a friend is surveying you about reading habits.\n\nQuestion: Do you prefer reading physical books or e-books, and why?', prep_time: 3, answer_time: 30 }
  ],
  3: [
    { part: 3, instruction: '다음 일정표를 보고 질문에 답하세요. 준비 시간 30초.', question: 'Community Center Summer Schedule\n• Swimming lessons: Mon/Wed, 9–11 AM, $45/session\n• Yoga class: Tue/Thu, 6–7:30 PM, $30/session\n• Art workshop: Saturday, 10 AM–2 PM, $60/session\n• Tennis court: Daily, 7 AM–9 PM, $15/hour\n\nQuestion: I want to take yoga classes. What days and times are they offered, and how much does each session cost?', prep_time: 30, answer_time: 30 },
    { part: 3, instruction: '다음 반품 정책을 보고 질문에 답하세요. 준비 시간 30초.', question: 'Online Store Return Policy\n• Return window: 30 days from delivery date\n• Items must be unused and in original packaging\n• Free return shipping on orders over $50\n• Refunds processed within 5–7 business days\n• Sale items: store credit only, no cash refund\n\nQuestion: I bought a sale item but want to return it for a cash refund. Is that possible?', prep_time: 30, answer_time: 30 },
    { part: 3, instruction: '다음 교육 일정표를 보고 질문에 답하세요. 준비 시간 30초.', question: 'New Employee Orientation Schedule\n• Day 1 (Mon): Company overview & HR policies, 9 AM–12 PM\n• Day 2 (Tue): Department introduction & team lunch, 10 AM–3 PM\n• Day 3 (Wed): Systems training (IT), 9 AM–5 PM\n• Day 4 (Thu): Job-specific training with manager, 9 AM–5 PM\n• Day 5 (Fri): Q&A session & evaluation, 2–4 PM\n\nQuestion: On which day does the new employee receive job-specific training with their manager?', prep_time: 30, answer_time: 30 }
  ],
  4: [
    { part: 4, instruction: '음성 메시지를 듣고 문제를 해결하는 답변을 제안하세요. 준비 시간 45초.', question: 'Hi, this is Alex from Marketing. I\'m trying to book a conference room for tomorrow\'s client presentation at 2 PM, but Room A is already reserved and there are no other rooms available in the system. The client is very important and we really need a proper meeting space. Could you help me figure out what to do?', prep_time: 45, answer_time: 60 },
    { part: 4, instruction: '음성 메시지를 듣고 문제를 해결하는 답변을 제안하세요. 준비 시간 45초.', question: 'Hello, I\'m a customer calling about an order I placed two weeks ago. The tracking shows it was delivered, but I never received the package. I\'ve already checked with my neighbors and the building manager. This was a birthday gift for my daughter and her birthday is this weekend. What can you do for me?', prep_time: 45, answer_time: 60 },
    { part: 4, instruction: '음성 메시지를 듣고 문제를 해결하는 답변을 제안하세요. 준비 시간 45초.', question: 'Hi, this is Jamie from IT. The software update scheduled for tonight requires all computers to restart. However, I just learned that the finance team needs their systems running through midnight for end-of-month reporting. If we delay the update, a security vulnerability remains open. What would you recommend we do?', prep_time: 45, answer_time: 60 }
  ],
  5: [
    { part: 5, instruction: '설문 질문에 대해 의견을 제시하세요. 구체적인 이유와 예시를 들어 답하세요. 준비 시간 45초.', question: 'Some companies require employees to work from the office every day, while others allow remote work. Which arrangement do you think is better for employee productivity? Give specific reasons and examples to support your answer.', prep_time: 45, answer_time: 60 },
    { part: 5, instruction: '설문 질문에 대해 의견을 제시하세요. 구체적인 이유와 예시를 들어 답하세요. 준비 시간 45초.', question: 'Some people believe that companies should provide free meals and snacks to employees at work, while others think this is unnecessary. What is your opinion? Use specific reasons and details in your response.', prep_time: 45, answer_time: 60 },
    { part: 5, instruction: '설문 질문에 대해 의견을 제시하세요. 구체적인 이유와 예시를 들어 답하세요. 준비 시간 45초.', question: 'Some people think that younger employees should prioritize gaining work experience even if the salary is low, while others believe salary is the most important factor when choosing a job. What is your opinion? Give specific reasons to support your answer.', prep_time: 45, answer_time: 60 }
  ],
  6: [
    { part: 6, instruction: '다음 추상적 주제에 대해 자신의 의견을 제시하세요. 준비 시간 45초.', question: 'Some people believe that technology has made communication between people less meaningful and personal. Do you agree or disagree? Use specific reasons and examples to support your opinion.', prep_time: 45, answer_time: 60 },
    { part: 6, instruction: '다음 추상적 주제에 대해 자신의 의견을 제시하세요. 준비 시간 45초.', question: 'It is often said that "failure is the best teacher." Do you agree or disagree with this statement? Support your answer with specific reasons and examples from your own experience.', prep_time: 45, answer_time: 60 },
    { part: 6, instruction: '다음 추상적 주제에 대해 자신의 의견을 제시하세요. 준비 시간 45초.', question: 'Some people believe that reading books is more beneficial than watching videos or movies for personal development. Others think visual media can be equally educational. What is your view? Use specific reasons and examples.', prep_time: 45, answer_time: 60 }
  ]
};

function randomSample(part) {
  const bank = SAMPLE_QUESTIONS[part];
  return { ...bank[Math.floor(Math.random() * bank.length)], ai_generated: false };
}

// ── Prompt builders ────────────────────────────────────────────
function buildPrompt(part) {
  const { type, prep_time, answer_time } = PART_CONFIG[part];
  return `Generate a realistic TOEIC Speaking Part ${part} (${type}) practice question.
Respond with ONLY valid JSON — no markdown, no explanation, no code block:
{"part":${part},"instruction":"한국어로 무엇을 해야 하는지 설명하는 지시문","question":"The actual English question or scenario text","prep_time":${prep_time},"answer_time":${answer_time}}`;
}

function buildAnalysisPrompt(question, userAnswer) {
  return `You are a certified TOEIC Speaking examiner. Evaluate strictly and output ONLY valid JSON — no markdown, no explanation.

[Part ${question.part}] ${question.instruction}
Question: ${question.question}
User Answer: "${userAnswer || '(no answer — score 0 on all dimensions)'}"

Score each dimension 0–3:
  0 = very poor  1 = below average  2 = acceptable  3 = strong
• pronunciation — accuracy of individual sounds and word stress
• intonation    — natural pitch variation and sentence rhythm
• grammar       — correct tense, agreement, and sentence structure
• content       — relevance, completeness, and supporting detail
• fluency       — smooth delivery without excessive pauses or fillers

Grade scale (based on sum of 5 scores):
  15 → 200 AL   12–14 → 160–180 IH   8–11 → 130–150 IM   4–7 → 110–120 IL   0–3 → 100 NH

Output ONLY this JSON with real evaluated values (all feedback fields MUST be written in Korean):
{"scores":{"pronunciation":N,"intonation":N,"grammar":N,"content":N,"fluency":N},"total_score":N,"grade":"XX","feedback":{"pronunciation":"한국어 피드백","intonation":"한국어 피드백","grammar":"한국어 피드백","content":"한국어 피드백","fluency":"한국어 피드백"},"sample_answer":"Full high-scoring English model answer","overall_comment":"2–3문장 한국어 종합 평가"}`;
}

// ── Generic OpenRouter call ────────────────────────────────────
async function callOpenRouter(model, messages, timeoutMs) {
  const controller = new AbortController();
  const timeoutId  = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ model, messages }),
      signal: controller.signal
    });
    clearTimeout(timeoutId);
    if (res.status === 429) { const e = new Error('rate_limit'); e.status = 429; throw e; }
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    return data.choices?.[0]?.message?.content ?? '';
  } catch (err) {
    clearTimeout(timeoutId);
    throw err;
  }
}

// 4개 모델을 순서대로 시도 — 429는 즉시 전파, 나머지는 다음 모델로
async function tryModels(models, messages, timeoutMs, parse) {
  let lastErr;
  for (const model of models) {
    try {
      const content = await callOpenRouter(model, messages, timeoutMs);
      return parse(content, model);
    } catch (err) {
      if (err.status === 429) throw err;
      console.log(`[skip] ${model}: ${err.message}`);
      lastErr = err;
    }
  }
  throw lastErr;
}

// ── Step 1: Question generation ────────────────────────────────
app.post('/api/generate-question', async (req, res) => {
  const part = parseInt(req.body?.part, 10);
  if (!part || part < 1 || part > 6)
    return res.status(400).json({ error: '유효하지 않은 파트입니다.' });

  try {
    const result = await tryModels(
      QUESTION_MODELS,
      [{ role: 'user', content: buildPrompt(part) }],
      6000,
      (content, model) => {
        const match = content.match(/\{[\s\S]*?\}/s) || content.match(/\{[\s\S]*\}/);
        if (!match) throw new Error('No JSON');
        return { ...JSON.parse(match[0]), ai_generated: true, model };
      }
    );
    return res.json(result);
  } catch (err) {
    if (err.status === 429)
      return res.status(429).json({ error: 'API 요청 한도 초과. 잠시 후 다시 시도해주세요.' });
    console.warn('[q-all-failed] 샘플 문제로 대체:', err.message);
    return res.json(randomSample(part));
  }
});

// ── Step 2: Answer analysis ────────────────────────────────────
app.post('/api/analyze-answer', async (req, res) => {
  const { question, userAnswer } = req.body ?? {};
  if (!question?.part)
    return res.status(400).json({ error: '문제 데이터가 없습니다.' });

  try {
    const result = await tryModels(
      ANALYSIS_MODELS,
      [{ role: 'user', content: buildAnalysisPrompt(question, userAnswer) }],
      30000,
      (content) => {
        const match = content.match(/\{[\s\S]*\}/);
        if (!match) throw new Error('No JSON');
        return JSON.parse(match[0]);
      }
    );
    return res.json(result);
  } catch (err) {
    if (err.status === 429)
      return res.status(429).json({ error: 'API 요청 한도 초과. 잠시 후 다시 시도해주세요.' });
    console.error('[a-all-failed]', err.message);
    return res.status(503).json({ error: '분석에 실패했습니다. 잠시 후 다시 시도해주세요.' });
  }
});

// ── Part 1: Image generation ──────────────────────────────────
// 중국 모델 제외 — Black Forest Labs(독일) 모델 우선/폴백
const IMAGE_MODELS = [
  'black-forest-labs/flux-schnell:free',  // 무료 — 먼저 시도
  'black-forest-labs/flux.2-klein-4b'     // 최저가 유료 폴백 ($0.014/MP)
];

async function tryImageGeneration(prompt) {
  for (const model of IMAGE_MODELS) {
    const controller = new AbortController();
    const timeoutId  = setTimeout(() => controller.abort(), 30000);
    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model,
          messages: [{ role: 'user', content: prompt }],
          modalities: ['image']
        }),
        signal: controller.signal
      });
      clearTimeout(timeoutId);
      if (response.status === 429) { const e = new Error('rate_limit'); e.status = 429; throw e; }
      if (!response.ok) { console.log(`[img-skip] ${model}: HTTP ${response.status}`); continue; }
      const data = await response.json();
      const dataUrl = data.choices?.[0]?.message?.images?.[0]?.image_url?.url;
      if (dataUrl) return { dataUrl };
      console.log(`[img-skip] ${model}: no image in response`);
    } catch (err) {
      clearTimeout(timeoutId);
      if (err.status === 429) throw err;
      console.log(`[img-skip] ${model}: ${err.message}`);
    }
  }
  throw new Error('all image models failed');
}

app.post('/api/generate-image', async (req, res) => {
  const { prompt } = req.body ?? {};
  if (!prompt) return res.status(400).json({ error: '프롬프트가 없습니다.' });

  try {
    const { dataUrl } = await tryImageGeneration(prompt);
    return res.json({ url: dataUrl });
  } catch (err) {
    if (err.status === 429) return res.status(429).json({ error: 'API 요청 한도 초과.' });
    console.error('[img-all-failed]', err.message);
    return res.status(503).json({ error: '이미지 생성 실패' });
  }
});

// ── Global error handler ───────────────────────────────────────
app.use((err, _req, res, _next) => {
  console.error('[express-error]', err);
  res.status(500).json({ error: '서버 오류가 발생했습니다.' });
});

process.on('unhandledRejection', (reason) => {
  console.error('[unhandledRejection]', reason);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
