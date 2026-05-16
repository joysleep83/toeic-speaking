// 연습 문제 Part 1 이미지 사전 생성 스크립트
// 실행: node scripts/generate-practice-images.js

import { writeFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import 'dotenv/config';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = join(__dirname, '..', 'public', 'practice-images');

mkdirSync(OUTPUT_DIR, { recursive: true });

const ITEMS = [
  { file: 'part1-1.png', desc: 'A woman in a business suit presenting in front of a whiteboard in a conference room, colleagues seated around a table with laptops and coffee cups, professional business meeting' },
  { file: 'part1-2.png', desc: 'A busy outdoor farmers market on a sunny day, vendors selling fresh vegetables fruits and flowers at colorful stalls, shoppers walking through aisles carrying bags' },
  { file: 'part1-3.png', desc: 'A man checking in at an airport counter, uniformed airline staff member standing behind the counter, two suitcases beside the man, handing over passport, busy airport terminal' },
  { file: 'part1-4.png', desc: 'Two people sitting at a cozy cafe table near a large window, one person using a laptop computer, the other drinking coffee and reading a newspaper, warm sunlight streaming through the window' },
  { file: 'part1-5.png', desc: 'A group of hikers walking on a scenic forest trail, wearing backpacks and hiking boots, tall trees surrounding the path, clear blue sky visible above, outdoor nature adventure' }
];

const IMAGE_MODELS = [
  'black-forest-labs/flux.2-klein-4b',
  'black-forest-labs/flux-schnell:free'
];

async function generateImage(prompt) {
  for (const model of IMAGE_MODELS) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 60000);
    try {
      const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model,
          messages: [{ role: 'user', content: `${prompt}, realistic photograph, high quality, natural lighting` }],
          modalities: ['image']
        }),
        signal: controller.signal
      });
      clearTimeout(timeoutId);
      if (!res.ok) {
        console.log(`  skip [${model}]: HTTP ${res.status}`);
        continue;
      }
      const data = await res.json();
      const dataUrl = data.choices?.[0]?.message?.images?.[0]?.image_url?.url;
      if (dataUrl) { console.log(`  model: ${model}`); return dataUrl; }
      console.log(`  skip [${model}]: no image in response`);
    } catch (err) {
      clearTimeout(timeoutId);
      console.log(`  skip [${model}]: ${err.message}`);
    }
  }
  throw new Error('모든 모델 실패');
}

const results = [];

for (let i = 0; i < ITEMS.length; i++) {
  const { file, desc } = ITEMS[i];
  console.log(`\n[${i + 1}/${ITEMS.length}] ${desc.slice(0, 65)}...`);

  try {
    const dataUrl = await generateImage(desc);
    // data:image/png;base64,<data> 형식에서 base64 부분만 추출
    const base64 = dataUrl.replace(/^data:image\/\w+;base64,/, '');
    const outPath = join(OUTPUT_DIR, file);
    writeFileSync(outPath, Buffer.from(base64, 'base64'));
    console.log(`  saved: ${file}`);
    results.push(`/practice-images/${file}`);
  } catch (err) {
    console.error(`  FAILED: ${err.message}`);
    results.push(null);
  }

  if (i < ITEMS.length - 1) await new Promise(r => setTimeout(r, 1500));
}

console.log('\n==============================');
results.forEach((r, i) => console.log(`  [${i + 1}] ${r ?? 'null (실패)'}`));
console.log('==============================');
