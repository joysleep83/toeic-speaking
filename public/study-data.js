// ── TOEIC Speaking 학습 과정 데이터 ───────────────────────────
// 8개 모듈 · 21개 레슨

const STUDY_MODULES = [

  // ══════════════════════════════════════════════════════════
  // Module 1 — 시험 기초 이해
  // ══════════════════════════════════════════════════════════
  {
    id: 'm1', icon: '📋',
    title: '시험 기초 이해',
    subtitle: '시험 구조·채점 기준·학습 전략',
    color: '#4F46E5',
    lessons: [
      {
        id: 'm1l1', title: 'TOEIC Speaking 시험 구조', duration: '5분',
        content: [
          { type: 'text', text: 'TOEIC Speaking은 6개 파트, 총 7문항으로 구성된 약 20분짜리 영어 말하기 시험입니다. 각 파트마다 준비 시간과 답변 시간이 다르므로 구조를 완벽히 파악하는 것이 첫 번째 준비입니다.' },
          { type: 'table',
            headers: ['파트', '유형', '준비', '답변', '문항'],
            rows: [
              ['Part 1', '사진 묘사', '30초', '45초', '1'],
              ['Part 2', '질문에 답하기', '3초', '30초', '2'],
              ['Part 3', '정보 활용 답변', '30초', '30초', '1'],
              ['Part 4', '제안/해결책 제시', '45초', '60초', '1'],
              ['Part 5', '의견 제시', '45초', '60초', '1'],
              ['Part 6', '추상적 주제 의견', '45초', '60초', '1']
            ]
          },
          { type: 'heading', text: '시험 당일 진행 순서' },
          { type: 'numbered', items: [
            '헤드셋 착용 후 마이크 음량 테스트 진행',
            '화면에 지시문과 문제가 표시되면 준비 시간 시작',
            '준비 시간 종료 후 자동으로 녹음이 시작됨',
            '답변 시간이 끝나면 자동으로 다음 문제로 이동',
            '답변은 1회만 가능 — 재녹음 불가'
          ]},
          { type: 'tip', icon: '⚠️', text: 'Part 2 준비 시간은 단 3초입니다. 질문을 듣는 동시에 답변을 머릿속으로 구성하는 연습이 필수입니다.' },
          { type: 'tip', icon: '💡', text: '총 시험 시간은 약 20분이지만, 실제 말하는 시간을 합치면 7~8분에 불과합니다. 짧은 시간에 최대한 좋은 인상을 남겨야 합니다.' }
        ]
      },
      {
        id: 'm1l2', title: '채점 기준과 등급 이해', duration: '5분',
        content: [
          { type: 'text', text: 'TOEIC Speaking은 5가지 영역을 종합 평가해 0~200점으로 환산합니다. 어느 한 영역이 특히 낮으면 전체 등급에 큰 영향을 줍니다.' },
          { type: 'heading', text: '5가지 채점 영역' },
          { type: 'structure', steps: [
            { num: '①', title: '발음 (Pronunciation)', desc: '개별 단어의 발음 정확도. 자음·모음 구분, 연음 처리가 핵심입니다.' },
            { num: '②', title: '억양·강세 (Intonation & Stress)', desc: '문장 내 강세 위치와 억양 패턴의 자연스러움. 단조로운 로봇 발화는 감점입니다.' },
            { num: '③', title: '문법 (Grammar)', desc: '시제, 수일치, 관사, 전치사 등 문법 구조의 정확성.' },
            { num: '④', title: '내용 (Content)', desc: '질문에 적합하고 충분한 답변 제공 여부. 너무 짧거나 엉뚱한 내용은 감점입니다.' },
            { num: '⑤', title: '유창성 (Fluency)', desc: '말이 자연스럽게 이어지는 정도. 긴 침묵이나 과도한 "um, uh"는 감점 요소입니다.' }
          ]},
          { type: 'heading', text: '등급 체계' },
          { type: 'table',
            headers: ['등급', '점수', '수준'],
            rows: [
              ['AL', '190–200', '원어민에 가까운 유창성, 복잡한 내용도 정확히 전달'],
              ['IH', '160–180', '대부분 상황에서 자연스럽게 소통 가능'],
              ['IM', '130–150', '기본 소통 가능, 간헐적 오류 있음 (취업 최소 목표)'],
              ['IL', '110–120', '제한적 소통, 짧고 단순한 표현 위주'],
              ['NH', '~100', '단편적 표현만 가능']
            ]
          },
          { type: 'tip', icon: '🎯', text: '대기업·공기업 취업 시 IM 이상이 기본 요건이며, IH 이상이면 어학 능력을 강점으로 내세울 수 있습니다.' }
        ]
      },
      {
        id: 'm1l3', title: '효과적인 학습 전략', duration: '4분',
        content: [
          { type: 'heading', text: '3단계 학습 로드맵' },
          { type: 'structure', steps: [
            { num: '1단계', title: '구조 파악 (1주)', desc: '각 파트의 형식과 요구 사항을 완벽히 이해합니다. 이 학습 과정을 순서대로 읽으며 모범 답변의 특징을 파악하세요.' },
            { num: '2단계', title: '표현 암기 (2~3주)', desc: '파트별 핵심 표현을 외웁니다. 표현을 미리 알면 답변이 빨라지고 유창성이 올라갑니다.' },
            { num: '3단계', title: '매일 실전 연습 (지속)', desc: '하루 1~2문제씩 실제로 말하고 녹음합니다. 자신의 답변을 들으며 발음·내용·유창성을 스스로 점검하세요.' }
          ]},
          { type: 'heading', text: '초보자가 자주 하는 실수' },
          { type: 'list', items: [
            '❌ 너무 짧게 답변 → 준비 시간을 다 써서 최대한 길게 말하는 연습 필요',
            '❌ 침묵이 너무 김 → 모르는 내용은 아는 내용으로 연결해 계속 말하기',
            '❌ 같은 단어만 반복 → 다양한 어휘를 파트별로 미리 준비해두기',
            '❌ 준비 시간에 아무것도 안 함 → 항상 답변 구조를 머릿속으로 미리 짜기',
            '❌ 문어체 표현 사용 → 자연스러운 구어체가 더 높은 점수'
          ]},
          { type: 'tip', icon: '💡', text: '매일 10분 영어 발화 연습이 주 1회 1시간 공부보다 훨씬 효과적입니다. 꾸준함이 가장 중요합니다.' }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // Module 2 — 발음과 발화
  // ══════════════════════════════════════════════════════════
  {
    id: 'm2', icon: '🗣️',
    title: '발음과 발화',
    subtitle: '한국인 취약 발음 · 강세 · 억양',
    color: '#10B981',
    lessons: [
      {
        id: 'm2l1', title: '한국인 취약 발음 교정', duration: '8분',
        content: [
          { type: 'text', text: '한국어와 영어는 발음 체계가 달라서 특정 소리가 어렵습니다. 아래 포인트를 집중 연습하면 발음 점수가 크게 올라갑니다.' },
          { type: 'heading', text: '① /r/ vs /l/ — 가장 흔한 오류' },
          { type: 'text', text: '/r/은 혀를 입천장에 닿지 않게 안쪽으로 말면서 발음합니다. /l/은 혀끝을 윗 앞니 뒤에 가볍게 댑니다.' },
          { type: 'example', label: '연습 단어', items: [
            { en: 'right / light', ko: '오른쪽 / 빛' },
            { en: 'river / liver', ko: '강 / 간' },
            { en: 'arrive / alive', ko: '도착하다 / 살아있는' },
            { en: 'really / rely', ko: '정말로 / 의지하다' }
          ]},
          { type: 'heading', text: '② /f/ vs /p/ · /v/ vs /b/' },
          { type: 'text', text: '/f/와 /v/는 윗니를 아랫입술에 살짝 대고 공기를 내보내며 발음합니다. 한국어에는 없는 소리입니다.' },
          { type: 'example', label: '연습 단어', items: [
            { en: 'fast / past', ko: '빠른 / 과거의' },
            { en: 'file / pile', ko: '파일 / 더미' },
            { en: 'very / berry', ko: '매우 / 베리' },
            { en: 'vest / best', ko: '조끼 / 최고의' }
          ]},
          { type: 'heading', text: '③ /θ/ (th) 발음' },
          { type: 'text', text: '혀끝을 윗니와 아랫니 사이에 살짝 넣고 공기를 내보냅니다. think, three, thanks 등에서 자주 나옵니다.' },
          { type: 'example', label: '연습 문장', items: [
            { en: 'I think that this is a great idea.', ko: '이것이 좋은 아이디어라고 생각합니다.' },
            { en: 'Thank you for giving me this opportunity.', ko: '이 기회를 주셔서 감사합니다.' },
            { en: 'There are three things I want to mention.', ko: '언급하고 싶은 것이 세 가지 있습니다.' }
          ]},
          { type: 'heading', text: '④ 단어 끝 자음 발음' },
          { type: 'text', text: '영어는 단어 끝 자음을 명확하게 발음합니다. 한국어 습관으로 끝 자음을 생략하면 감점입니다.' },
          { type: 'example', label: '주의 단어', items: [
            { en: 'important [ɪmˈpɔːrtənt]', ko: '끝의 -t를 짧게라도 발음' },
            { en: 'asked [æskt]', ko: '-ed 발음 생략 금지' },
            { en: 'clothes [kloʊðz]', ko: '-s 발음 필요' },
            { en: 'months [mʌnθs]', ko: '-ths 발음 주의' }
          ]},
          { type: 'tip', icon: '💡', text: '연습 방법: 핸드폰으로 녹음 후 들어보기. 내 발음에서 흐릿하거나 빠진 소리를 찾아 반복 연습하세요.' }
        ]
      },
      {
        id: 'm2l2', title: '강세와 리듬', duration: '7분',
        content: [
          { type: 'text', text: '영어는 "강세 박자 언어(stress-timed language)"입니다. 중요한 단어에 강세를 주고, 나머지는 빠르게 처리하는 리듬이 자연스럽게 들립니다.' },
          { type: 'heading', text: '단어 강세 규칙' },
          { type: 'list', items: [
            '명사·형용사·동사는 보통 첫 번째 음절에 강세: PEO-ple, TA-ble, HEL-lo',
            '동사 + 명사가 같은 형태일 때: REcord (명) vs reCORD (동)',
            '접미사 -tion, -sion 앞 음절에 강세: proNUNci-A-tion, con-VER-sa-tion',
            '3음절 이상: 규칙보다는 사전에서 강세 위치를 확인'
          ]},
          { type: 'heading', text: '문장 강세 — 내용어 vs 기능어' },
          { type: 'text', text: '내용어(명사·동사·형용사·부사)는 강하게, 기능어(관사·전치사·조동사·접속사)는 약하게 발음합니다.' },
          { type: 'example', label: '예문 (강세 단어는 대문자)', items: [
            { en: 'I WANT to GO to the STORE.', ko: '나는 가게에 가고 싶다.' },
            { en: 'She WORKS in a BIG COMPANY.', ko: '그녀는 큰 회사에서 일한다.' },
            { en: 'The BEST way to LEARN is to PRACTICE EVERY DAY.', ko: '배우는 최선의 방법은 매일 연습하는 것이다.' }
          ]},
          { type: 'heading', text: '연음(Connected Speech)' },
          { type: 'text', text: '자연스러운 영어에서는 단어들이 연결되어 발음됩니다. 이를 무시하면 딱딱하게 들립니다.' },
          { type: 'example', label: '연음 예시', items: [
            { en: 'want to → "wanna"', ko: '구어체에서 자연스럽게 연결' },
            { en: 'going to → "gonna"', ko: '격식 없는 상황에서 사용' },
            { en: 'did you → "dijya"', ko: '"Did you eat?" → "Dijya eat?"' },
            { en: 'could have → "could\'ve"', ko: '"could have done" 빠르게 읽기' }
          ]},
          { type: 'tip', icon: '💡', text: '매일 영어 팟캐스트나 드라마를 5~10분씩 따라 말하는 "쉐도잉"이 강세와 리듬을 익히는 가장 빠른 방법입니다.' }
        ]
      },
      {
        id: 'm2l3', title: '억양 패턴 마스터', duration: '6분',
        content: [
          { type: 'text', text: '억양(intonation)은 문장의 끝이 올라가는지 내려가는지에 관한 것입니다. 잘못된 억양은 의미를 잘못 전달하거나 자연스럽지 않게 들릴 수 있습니다.' },
          { type: 'heading', text: '기본 억양 패턴' },
          { type: 'structure', steps: [
            { num: '↘', title: '내려가는 억양 (Falling)', desc: '평서문, 명령문, wh-의문문 끝에서 사용합니다.\n예: "I work in a large company." / "What do you think about this?"' },
            { num: '↗', title: '올라가는 억양 (Rising)', desc: 'Yes/No 의문문 끝에서 사용합니다.\n예: "Are you ready?" / "Do you agree?"' },
            { num: '↗↘', title: '리스트 억양', desc: '항목을 나열할 때: 마지막 항목 전까지 올리고, 마지막에 내립니다.\n예: "I like reading↗, traveling↗, and cooking↘."' }
          ]},
          { type: 'heading', text: 'TOEIC Speaking에서 억양 활용' },
          { type: 'list', items: [
            '의견을 제시할 때: 핵심 단어에서 강세를 주어 자신감 있게 들리도록',
            '예시를 들 때: "For EXAMPLE↗..." 처럼 새로운 정보 도입 시 살짝 올림',
            '결론을 말할 때: "THEREFORE, I BELIEVE..." 앞에서 살짝 낮추고 결론에서 강조',
            '감정 표현: 공감할 때 "That\'s a GREAT question." 처럼 핵심 단어 강조'
          ]},
          { type: 'example', label: 'Part 5/6 도입부 억양 예시', items: [
            { en: 'I STRONGLY believe that...↘', ko: '강한 의견 제시' },
            { en: 'From my perspective↗, working remotely...↘', ko: '관점 제시 후 내용' },
            { en: 'There are TWO main reasons↘.', ko: '이유 개수 강조' }
          ]},
          { type: 'tip', icon: '⚠️', text: '한국어 억양을 그대로 영어에 적용하면 단조롭게 들립니다. 의식적으로 영어 억양 패턴을 과장해 연습하는 것이 도움됩니다.' }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // Module 3 — Part 1: 사진 묘사
  // ══════════════════════════════════════════════════════════
  {
    id: 'm3', icon: '🖼️',
    title: 'Part 1 — 사진 묘사',
    subtitle: 'Describe a Photo (준비 30초 · 답변 45초)',
    color: '#F59E0B',
    lessons: [
      {
        id: 'm3l1', title: '사진 묘사 전략과 구조', duration: '8분',
        content: [
          { type: 'text', text: 'Part 1은 화면에 표시된 사진을 45초 동안 묘사하는 파트입니다. 준비 시간 30초에 사진을 분석하고 말할 순서를 정해야 합니다.' },
          { type: 'heading', text: '3단계 묘사 구조' },
          { type: 'structure', steps: [
            { num: '①', title: '전체 장면 소개 (5초)', desc: '사진에 어떤 장면인지 한 문장으로 전체를 묘사합니다.\n예: "This photo shows a busy office environment."' },
            { num: '②', title: '주요 인물/사물 묘사 (25초)', desc: '중심 인물이나 사물을 위치, 동작, 외모와 함께 묘사합니다.\n예: "A woman in a blue shirt is sitting at a desk, typing on a computer."' },
            { num: '③', title: '배경/분위기 묘사 (15초)', desc: '배경, 날씨, 조명, 전체 분위기를 덧붙입니다.\n예: "In the background, there are several bookshelves and large windows letting in natural light."' }
          ]},
          { type: 'heading', text: '준비 시간(30초) 활용법' },
          { type: 'numbered', items: [
            '사진 전체를 빠르게 스캔 — 장소, 인물 수, 주요 행동 파악',
            '말할 핵심 3~4가지를 마음속으로 정리',
            '시작 문장 한 개를 완성해서 암기',
            '모르는 단어가 있으면 유사 표현으로 대체 준비'
          ]},
          { type: 'tip', icon: '💡', text: '모르는 사물이나 사람이 나와도 당황하지 마세요. "what appears to be a..." 나 "some kind of..."로 우회할 수 있습니다.' },
          { type: 'heading', text: '고득점 vs 저득점 답변 차이' },
          { type: 'table',
            headers: ['항목', '저득점 답변', '고득점 답변'],
            rows: [
              ['길이', '15~20초 (너무 짧음)', '40~45초 (시간 꽉 채움)'],
              ['구조', '눈에 보이는 것 나열', '전체→핵심→배경 순서'],
              ['어휘', '단순 단어 반복', '다양한 형용사·부사 활용'],
              ['자세한 묘사', '"A woman is there."', '"A woman in her 30s is standing near the window, holding a cup of coffee."']
            ]
          }
        ]
      },
      {
        id: 'm3l2', title: 'Part 1 핵심 표현 & 모범 답안', duration: '8분',
        content: [
          { type: 'heading', text: '위치·장소 표현' },
          { type: 'example', label: '위치 표현', items: [
            { en: 'in the foreground / background', ko: '전경에 / 배경에' },
            { en: 'on the left / right side', ko: '왼쪽 / 오른쪽에' },
            { en: 'in the center of the photo', ko: '사진 중앙에' },
            { en: 'next to / beside', ko: '옆에' },
            { en: 'in front of / behind', ko: '앞에 / 뒤에' },
            { en: 'across from', ko: '맞은편에' }
          ]},
          { type: 'heading', text: '동작·상태 표현' },
          { type: 'example', label: '현재진행형 활용', items: [
            { en: 'is walking toward / away from', ko: '~을 향해 / ~에서 멀어지며 걷고 있다' },
            { en: 'appears to be looking at', ko: '~을 보고 있는 것 같다' },
            { en: 'seems to be working on', ko: '~을 하고 있는 것처럼 보인다' },
            { en: 'is engaged in a conversation', ko: '대화를 나누고 있다' },
            { en: 'is surrounded by', ko: '~에 둘러싸여 있다' }
          ]},
          { type: 'heading', text: '배경/분위기 표현' },
          { type: 'example', label: '배경 묘사', items: [
            { en: 'The setting appears to be...', ko: '배경은 ~인 것 같습니다' },
            { en: 'Natural light is coming through the windows.', ko: '창문으로 자연광이 들어오고 있습니다.' },
            { en: 'The atmosphere seems busy / relaxed / formal.', ko: '분위기가 바쁜/여유로운/격식 있는 것 같습니다.' },
            { en: 'There are several people in the background.', ko: '배경에 여러 사람이 있습니다.' }
          ]},
          { type: 'heading', text: '모범 답안 (사무실 사진)' },
          { type: 'example', label: '45초 모범 답안', items: [
            { en: 'This photo shows an indoor office setting. In the center of the photo, a man in a white dress shirt is sitting at a large desk, focused on his computer screen. He appears to be reviewing some documents. On his desk, there is a coffee mug, some papers, and a notebook. In the background, there are several bookshelves filled with books and files. Large windows on the right let in plenty of natural light, making the room look bright and professional. The overall atmosphere of the photo seems calm and productive.', ko: '[전체 소개 → 중심 인물 → 주변 사물 → 배경 → 분위기 순서]' }
          ]},
          { type: 'tip', icon: '🎯', text: '45초를 다 채우지 못하면 감점됩니다. 준비한 내용을 모두 말한 뒤에도 시간이 남으면 "Overall, the photo gives a sense of..." 로 분위기 묘사를 추가하세요.' }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // Module 4 — Part 2: 질문에 답하기
  // ══════════════════════════════════════════════════════════
  {
    id: 'm4', icon: '💬',
    title: 'Part 2 — 질문에 답하기',
    subtitle: 'Respond to Questions (준비 3초 · 답변 30초)',
    color: '#EF4444',
    lessons: [
      {
        id: 'm4l1', title: '즉흥 답변 전략', duration: '7분',
        content: [
          { type: 'text', text: 'Part 2는 준비 시간이 단 3초인 파트입니다. 보통 가상의 설문 조사 상황에서 2~3개의 질문에 답하게 됩니다. 핵심은 질문 유형을 빠르게 파악하고 즉시 말하는 것입니다.' },
          { type: 'heading', text: '자주 나오는 질문 유형' },
          { type: 'table',
            headers: ['질문 유형', '예시', '답변 전략'],
            rows: [
              ['선호도', 'Do you prefer A or B?', '명확히 선택 후 이유 1~2가지'],
              ['의견', 'What do you think about X?', '의견 + 이유 + 예시'],
              ['경험', 'Have you ever...?', 'Yes/No + 경험 구체 설명'],
              ['빈도', 'How often do you...?', '빈도 표현 + 이유'],
              ['방법', 'How do you usually...?', '방법 순서대로 설명']
            ]
          },
          { type: 'heading', text: '3초 준비 전략' },
          { type: 'numbered', items: [
            '질문의 핵심 키워드 파악 (무엇을 묻는가?)',
            '답변 방향 결정 (Yes/No 또는 A/B 선택)',
            '이유 1가지를 머릿속으로 준비',
            '시작 문장 암기 (I personally prefer... / In my opinion...)'
          ]},
          { type: 'heading', text: '30초 답변 구조' },
          { type: 'structure', steps: [
            { num: '①', title: '직접 답변 (5초)', desc: '질문에 바로 답합니다. Yes/No, A/B 등 명확하게.\n예: "I personally prefer working independently."' },
            { num: '②', title: '이유/설명 (15초)', desc: '이유를 한두 가지 제시합니다.\n예: "This is because I can focus better without distractions and set my own schedule."' },
            { num: '③', title: '예시/경험 (10초)', desc: '구체적인 예나 경험을 덧붙입니다.\n예: "For example, when I work alone, I can finish tasks much more quickly."' }
          ]},
          { type: 'tip', icon: '⚠️', text: '"I don\'t know" 또는 침묵은 절대 금물입니다. 질문을 잘 못 들었어도 비슷한 주제로 계속 말하면 부분 점수를 받을 수 있습니다.' }
        ]
      },
      {
        id: 'm4l2', title: 'Part 2 핵심 표현 & 모범 답안', duration: '7분',
        content: [
          { type: 'heading', text: '즉각 답변 시작 표현' },
          { type: 'example', label: '도입 표현', items: [
            { en: 'Personally, I prefer...', ko: '개인적으로 저는 ~을 선호합니다' },
            { en: 'In my opinion, ...', ko: '제 생각에는...' },
            { en: 'I would have to say that...', ko: '저는 ~라고 말해야 할 것 같습니다' },
            { en: 'To be honest, ...', ko: '솔직히 말하면...' },
            { en: 'From my experience, ...', ko: '제 경험상...' }
          ]},
          { type: 'heading', text: '이유 제시 표현' },
          { type: 'example', label: '이유 표현', items: [
            { en: 'This is because...', ko: '그 이유는...' },
            { en: 'The main reason is that...', ko: '주된 이유는...' },
            { en: 'I feel this way because...', ko: '제가 이렇게 생각하는 이유는...' },
            { en: 'One of the biggest advantages is...', ko: '가장 큰 장점 중 하나는...' }
          ]},
          { type: 'heading', text: '예시·경험 연결 표현' },
          { type: 'example', label: '예시 표현', items: [
            { en: 'For example, ...', ko: '예를 들어...' },
            { en: 'For instance, ...', ko: '예를 들면...' },
            { en: 'In fact, ...', ko: '사실...' },
            { en: 'Based on my experience, ...', ko: '제 경험을 바탕으로 하면...' }
          ]},
          { type: 'heading', text: '모범 답안' },
          { type: 'example', label: '질문: "Do you prefer shopping online or in stores?"', items: [
            { en: 'Personally, I prefer shopping online. The main reason is that it saves me a lot of time and effort. I don\'t have to travel to a store or wait in long lines. For example, last week I ordered some books online and they were delivered to my door the next day. Also, it\'s much easier to compare prices and find the best deals. So, for me, online shopping is definitely more convenient.', ko: '[직접 답변 → 이유 → 구체 예시 → 추가 이유 → 결론]' }
          ]},
          { type: 'tip', icon: '💡', text: '30초는 생각보다 짧습니다. 미리 "Personally, I prefer..." "This is because..." "For example..." 세 문장 패턴을 자동으로 나올 수 있을 때까지 연습하세요.' }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // Module 5 — Part 3: 정보 활용 답변
  // ══════════════════════════════════════════════════════════
  {
    id: 'm5', icon: '📄',
    title: 'Part 3 — 정보 활용 답변',
    subtitle: 'Respond to Questions Using Information (준비 30초 · 답변 30초)',
    color: '#8B5CF6',
    lessons: [
      {
        id: 'm5l1', title: '정보 활용 답변 전략', duration: '8분',
        content: [
          { type: 'text', text: 'Part 3은 화면에 표시된 일정표, 안내문, 이메일 등을 읽고 그에 관한 질문에 답하는 파트입니다. 정보를 빠르게 찾아 정확하게 전달하는 능력이 핵심입니다.' },
          { type: 'heading', text: '자주 나오는 정보 유형' },
          { type: 'list', items: [
            '📅 일정표 (schedule) — 날짜, 시간, 장소, 비용',
            '📋 안내문 (notice/flyer) — 행사 정보, 규정, 절차',
            '📧 이메일 (email) — 요청 사항, 중요 내용',
            '🏪 메뉴/가격표 — 품목, 가격, 조건',
            '🗺️ 안내도/지도 — 위치, 방향'
          ]},
          { type: 'heading', text: '준비 시간(30초) 스캔 전략' },
          { type: 'numbered', items: [
            '제목과 소제목을 먼저 읽어 자료 유형 파악',
            '숫자(날짜·시간·가격)와 고유명사(장소·인물명) 위치 확인',
            '자료 전체를 처음부터 끝까지 읽지 말고 키워드만 스캔',
            '질문을 읽기 전에 정보 위치를 파악해두면 답변이 빠름'
          ]},
          { type: 'heading', text: '답변 구조 (30초)' },
          { type: 'structure', steps: [
            { num: '①', title: '정보 출처 언급 (5초)', desc: '자료를 참조한다는 것을 밝힙니다.\n예: "According to the schedule, ..." / "Based on the information provided, ..."' },
            { num: '②', title: '핵심 정보 전달 (20초)', desc: '질문에 정확히 답하는 정보를 말합니다.\n예: "The yoga class is held on Tuesdays and Thursdays from 6 to 7:30 PM."' },
            { num: '③', title: '추가 관련 정보 (5초)', desc: '질문과 연관된 유용한 추가 정보를 덧붙입니다.\n예: "Each session costs $30."' }
          ]},
          { type: 'tip', icon: '⚠️', text: '자료에 없는 정보를 만들어내면 감점입니다. 정보가 없으면 "The information provided doesn\'t mention..." 라고 말하는 것이 더 좋습니다.' }
        ]
      },
      {
        id: 'm5l2', title: 'Part 3 핵심 표현 & 모범 답안', duration: '8분',
        content: [
          { type: 'heading', text: '정보 인용 표현' },
          { type: 'example', label: '자료 참조 표현', items: [
            { en: 'According to the schedule, ...', ko: '일정표에 따르면...' },
            { en: 'Based on the information provided, ...', ko: '제공된 정보에 따르면...' },
            { en: 'The notice states that ...', ko: '안내문에 ~라고 나와 있습니다' },
            { en: 'As shown in the table, ...', ko: '표에 나타난 것처럼...' },
            { en: 'The document indicates that ...', ko: '문서에는 ~라고 나와 있습니다' }
          ]},
          { type: 'heading', text: '날짜·시간·가격 전달 표현' },
          { type: 'example', label: '정보 전달 표현', items: [
            { en: 'It takes place on... / It is scheduled for...', ko: '~에 열립니다 / ~로 예정되어 있습니다' },
            { en: 'The cost is $... per session / person', ko: '비용은 세션/인당 $...입니다' },
            { en: 'It runs from ... to ...', ko: '~부터 ~까지 진행됩니다' },
            { en: 'Registration is required by...', ko: '~까지 등록이 필요합니다' },
            { en: 'It is available / offered every...', ko: '매 ~마다 이용 가능합니다' }
          ]},
          { type: 'heading', text: '정보 없을 때 표현' },
          { type: 'example', label: '정보 부재 표현', items: [
            { en: 'The information provided doesn\'t mention that.', ko: '제공된 정보에는 그 내용이 없습니다.' },
            { en: 'I\'m afraid that detail isn\'t included in the document.', ko: '그 세부 정보는 문서에 포함되어 있지 않습니다.' }
          ]},
          { type: 'heading', text: '모범 답안' },
          { type: 'example', label: '질문: "I want to sign up for yoga. When are the classes and how much?"', items: [
            { en: 'According to the schedule, yoga classes are offered on Tuesdays and Thursdays, from 6:00 PM to 7:30 PM. Each session costs $30. So if you want to attend both sessions per week, that would be $60 per week total.', ko: '[정보 출처 → 날짜/시간 → 비용 → 계산 추가 정보]' }
          ]},
          { type: 'tip', icon: '💡', text: '30초 내에 핵심 정보를 모두 전달하기 위해 준비 시간에 정확히 어디에 필요한 정보가 있는지 위치를 파악해두세요.' }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // Module 6 — Part 4: 제안/해결책
  // ══════════════════════════════════════════════════════════
  {
    id: 'm6', icon: '💡',
    title: 'Part 4 — 제안/해결책',
    subtitle: 'Propose a Solution (준비 45초 · 답변 60초)',
    color: '#06B6D4',
    lessons: [
      {
        id: 'm6l1', title: '제안·해결책 답변 전략', duration: '9분',
        content: [
          { type: 'text', text: 'Part 4는 음성 메시지를 듣고 그 문제나 요청에 대한 해결책을 제안하는 파트입니다. 문제를 인식하고, 공감을 표현하고, 구체적인 해결책을 제시하는 능력이 핵심입니다.' },
          { type: 'heading', text: '메시지 유형' },
          { type: 'list', items: [
            '📞 불만 전화 (고객이 문제를 호소하는 상황)',
            '📧 업무 요청 (동료나 상사가 해결책을 구하는 상황)',
            '🏠 일상 문제 (예약, 배송, 시설 문제 등)',
            '🏢 직장 상황 (일정 충돌, 자원 부족, 의사소통 문제 등)'
          ]},
          { type: 'heading', text: '3단계 답변 구조 (황금 공식)' },
          { type: 'structure', steps: [
            { num: '①', title: '공감·인정 (10초)', desc: '상대방의 상황을 이해한다는 것을 먼저 표현합니다. 이것이 없으면 답변이 차갑게 들립니다.\n예: "I understand this is a very urgent situation for you."' },
            { num: '②', title: '구체적 해결책 제시 (35초)', desc: '명확하고 실행 가능한 해결책을 최소 1~2가지 제시합니다.\n예: "I suggest you... / One option would be to... / You could also consider..."' },
            { num: '③', title: '대안 또는 마무리 (15초)', desc: '첫 번째 해결책이 효과 없을 경우의 대안을 언급하고, 도움이 되길 바란다고 마무리합니다.\n예: "If that doesn\'t work, another option would be... I hope this helps."' }
          ]},
          { type: 'heading', text: '준비 시간(45초) 활용법' },
          { type: 'numbered', items: [
            '메시지의 핵심 문제 1가지 파악 (무엇이 문제인가?)',
            '해결책 2가지 생각하기 (주요 해결책 + 대안)',
            '공감 표현 문장 1개 준비',
            '시작 문장: "I understand that..." 형태로 준비'
          ]},
          { type: 'tip', icon: '💡', text: '해결책이 완벽할 필요는 없습니다. 중요한 것은 상황에 적절한 제안을 자신 있게 전달하는 것입니다.' }
        ]
      },
      {
        id: 'm6l2', title: 'Part 4 핵심 표현 & 모범 답안', duration: '8분',
        content: [
          { type: 'heading', text: '공감·이해 표현' },
          { type: 'example', label: '공감 표현', items: [
            { en: 'I understand how frustrating this must be for you.', ko: '얼마나 답답하실지 이해합니다.' },
            { en: 'I completely understand your concern.', ko: '걱정이 충분히 이해됩니다.' },
            { en: 'I\'m sorry to hear that you\'re experiencing this issue.', ko: '이런 문제를 겪고 계시다니 죄송합니다.' },
            { en: 'I can see why this is urgent for you.', ko: '이것이 왜 급한지 이해할 수 있습니다.' }
          ]},
          { type: 'heading', text: '해결책 제시 표현' },
          { type: 'example', label: '제안 표현', items: [
            { en: 'I would suggest that you...', ko: '제 제안은 ~하시는 것입니다' },
            { en: 'One option would be to...', ko: '한 가지 방법은 ~하는 것입니다' },
            { en: 'Why don\'t you try...?', ko: '~을 시도해 보시는 건 어떨까요?' },
            { en: 'I recommend that you...', ko: '~하시기를 권합니다' },
            { en: 'You could also consider...', ko: '~도 고려해 볼 수 있습니다' }
          ]},
          { type: 'heading', text: '대안·마무리 표현' },
          { type: 'example', label: '대안 표현', items: [
            { en: 'If that doesn\'t work, another option would be...', ko: '그것이 효과 없다면, 또 다른 방법은...' },
            { en: 'Alternatively, you might want to...', ko: '또는 ~하시는 것도 좋습니다' },
            { en: 'I hope this helps resolve the situation.', ko: '이것이 상황 해결에 도움이 되길 바랍니다.' },
            { en: 'Please let me know if you need further assistance.', ko: '추가 도움이 필요하시면 알려주세요.' }
          ]},
          { type: 'heading', text: '모범 답안' },
          { type: 'example', label: '상황: 예약된 회의실이 없어서 곤란한 상황', items: [
            { en: 'I understand how stressful this must be, especially with such an important client presentation coming up. Here\'s what I suggest: First, you could check with the reception team to see if any other meeting rooms, even smaller ones, are available for that time. If there are none, another option would be to use a collaborative space or even a private office temporarily. You might also want to consider reaching out to the facilities team — they sometimes have emergency room arrangements. I hope one of these options works for you. Please let me know how it goes, and good luck with the presentation.', ko: '[공감 → 첫 번째 해결책 → 두 번째 해결책 → 세 번째 대안 → 마무리]' }
          ]},
          { type: 'tip', icon: '🎯', text: '해결책을 제시할 때 "You should do X." 보다 "You could consider X." 처럼 부드러운 표현을 쓰면 더 자연스럽고 높은 점수를 받습니다.' }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // Module 7 — Part 5 & 6: 의견 제시
  // ══════════════════════════════════════════════════════════
  {
    id: 'm7', icon: '🎯',
    title: 'Part 5 & 6 — 의견 제시',
    subtitle: 'Express an Opinion (준비 45초 · 답변 60초)',
    color: '#F97316',
    lessons: [
      {
        id: 'm7l1', title: '의견 제시 구조 (서론-본론-결론)', duration: '9분',
        content: [
          { type: 'text', text: 'Part 5와 6는 주어진 주제에 대한 자신의 의견을 60초 동안 논리적으로 말하는 파트입니다. 즉흥적으로 말하는 것처럼 느껴지지 않으려면 반드시 구조화된 답변이 필요합니다.' },
          { type: 'heading', text: '기본 3단 구조' },
          { type: 'structure', steps: [
            { num: '①', title: '서론 — 입장 표명 (10초)', desc: '주제에 대한 자신의 의견을 한 문장으로 명확히 밝힙니다.\n예: "I strongly believe that working from home is more beneficial for employees."' },
            { num: '②', title: '본론 — 이유·근거 2가지 (40초)', desc: '이유를 2가지 제시하고 각각 설명하거나 예시를 덧붙입니다.\n예: "First, working remotely allows people to save commuting time... Also, many studies show that..."' },
            { num: '③', title: '결론 — 재강조 (10초)', desc: '처음 입장을 다른 표현으로 다시 강조하며 마무리합니다.\n예: "For these reasons, I am convinced that remote work is the better option."' }
          ]},
          { type: 'heading', text: '준비 시간(45초) 완벽 활용' },
          { type: 'numbered', items: [
            '주제 파악: 무엇에 대해 의견을 말해야 하는가?',
            '입장 결정: 찬성/반대 또는 A/B 중 더 말하기 쉬운 쪽 선택',
            '이유 2가지 생각: 각각 10~15초짜리 설명 준비',
            '시작 문장 암기: "I strongly believe that..." 또는 "In my opinion..."',
            '결론 문장 준비: "For these reasons, I think that..."'
          ]},
          { type: 'heading', text: 'Part 5 vs Part 6 차이' },
          { type: 'table',
            headers: ['구분', 'Part 5', 'Part 6'],
            rows: [
              ['주제 유형', '직장·일상 관련 구체적 상황', '추상적·사회적 주제 (기술, 교육, 환경 등)'],
              ['예시 주제', '"재택근무 vs 사무실 근무"', '"기술이 인간 관계를 망쳤는가?"'],
              ['난이도', '상대적으로 쉬움', '추상적 논거가 필요해 더 어려움'],
              ['전략', '개인 경험 활용 유리', '사회적 사례·통계 활용 유리']
            ]
          },
          { type: 'tip', icon: '💡', text: '어느 쪽 의견이 "맞는지"는 중요하지 않습니다. 더 말하기 쉬운 입장을 선택해서 논리적으로 설명하는 것이 고득점 비결입니다.' }
        ]
      },
      {
        id: 'm7l2', title: '이유·예시 제시 방법', duration: '8분',
        content: [
          { type: 'text', text: '단순히 "I think X is better" 라고만 말하면 낮은 점수를 받습니다. 구체적인 이유와 예시가 내용 점수를 결정합니다.' },
          { type: 'heading', text: '이유 제시 패턴' },
          { type: 'example', label: '이유 연결 표현', items: [
            { en: 'First of all, ... / To begin with, ...', ko: '우선... / 먼저...' },
            { en: 'In addition, ... / Furthermore, ...', ko: '또한... / 게다가...' },
            { en: 'The main reason is that...', ko: '주된 이유는...' },
            { en: 'This is particularly important because...', ko: '이것은 특히 ~때문에 중요합니다' }
          ]},
          { type: 'heading', text: '예시 제시 패턴' },
          { type: 'example', label: '예시 표현', items: [
            { en: 'For example, consider...', ko: '예를 들어 ~을 생각해 보면...' },
            { en: 'A good example of this is...', ko: '이것의 좋은 예는...' },
            { en: 'From my personal experience, ...', ko: '제 개인적인 경험으로는...' },
            { en: 'Take, for instance, the case of...', ko: '예를 들어 ~의 경우를 보면...' },
            { en: 'Research shows that...', ko: '연구에 따르면...' }
          ]},
          { type: 'heading', text: '양보·반론 처리 (고득점 전략)' },
          { type: 'text', text: '반대 의견을 인정하면서도 내 주장을 강화하는 양보 구문을 사용하면 논리적으로 보여서 고득점에 유리합니다.' },
          { type: 'example', label: '양보 표현', items: [
            { en: 'Although some people argue that... , I believe...', ko: '어떤 사람들은 ~라고 주장하지만, 저는...' },
            { en: 'While it is true that..., the fact remains that...', ko: '~가 사실이지만, ~라는 사실이 남습니다' },
            { en: 'I can see the other side of the argument, but...', ko: '반대 의견도 이해하지만...' }
          ]},
          { type: 'heading', text: '결론 마무리 표현' },
          { type: 'example', label: '결론 표현', items: [
            { en: 'For these reasons, I firmly believe that...', ko: '이러한 이유로 저는 ~라고 굳게 믿습니다' },
            { en: 'In conclusion, it is clear that...', ko: '결론적으로 ~가 분명합니다' },
            { en: 'Taking everything into account, ...', ko: '모든 것을 고려하면...' },
            { en: 'Therefore, I would say that...', ko: '따라서 저는 ~라고 말하겠습니다' }
          ]},
          { type: 'tip', icon: '🎯', text: '이유 2개 + 예시 1개 구조가 60초를 채우기에 가장 적합합니다. 이유 3개를 나열하면 각각이 너무 짧아집니다.' }
        ]
      },
      {
        id: 'm7l3', title: '고득점 모범 답안 분석', duration: '10분',
        content: [
          { type: 'heading', text: '모범 답안 ①: Part 5 (직장 관련)' },
          { type: 'example', label: '주제: "재택근무 vs 사무실 근무"', items: [
            { en: 'I strongly believe that allowing employees to work remotely is better for overall productivity. [① 입장] First of all, working from home eliminates long commute times, which means employees can start their day more energized and focused. For instance, I know many people who spend two or more hours commuting daily — that\'s valuable time that could be spent working or resting. [② 이유 1 + 예시] Furthermore, remote work allows people to create their own comfortable environment, which can significantly reduce stress and boost creativity. Many large technology companies have reported increased output after implementing flexible work policies. [② 이유 2 + 예시] For these reasons, I am convinced that remote work leads to better results for both employees and companies. [③ 결론]', ko: '[구조 분석: 서론(1문장) → 이유1+예시(2문장) → 이유2+예시(2문장) → 결론(1문장)]' }
          ]},
          { type: 'heading', text: '모범 답안 ②: Part 6 (추상적 주제)' },
          { type: 'example', label: '주제: "실패가 최고의 선생이다 — 동의/반대"', items: [
            { en: 'I completely agree with the idea that failure is the best teacher. [① 입장] To begin with, failure forces us to reflect deeply on our actions and identify specific areas for improvement, which success rarely does. A perfect outcome doesn\'t tell us much, but a failure reveals exactly what went wrong. [② 이유 1] In addition, facing and overcoming failure builds resilience — one of the most important qualities for long-term success. From my own experience, the skills I learned from my biggest mistakes have been far more valuable than anything I learned from easy wins. [② 이유 2 + 경험] Taking everything into account, I firmly believe that failure, though painful, is an essential and irreplaceable part of growth. [③ 결론]', ko: '[구조 분석: 입장 명확 → 이유1(실패의 교훈) → 이유2(회복탄력성)+경험 → 결론]' }
          ]},
          { type: 'heading', text: '고득점 답변의 공통 특징' },
          { type: 'list', items: [
            '✅ 첫 문장에서 입장이 100% 명확함',
            '✅ 이유 2개가 서로 다른 관점에서 제시됨',
            '✅ 적어도 1개의 구체적 예시 또는 경험 포함',
            '✅ 연결어(First, Furthermore, In conclusion)가 자연스럽게 사용됨',
            '✅ 60초를 거의 다 채움 (45~60초)',
            '✅ 결론이 단순 반복이 아닌 다른 표현으로 강화됨'
          ]},
          { type: 'tip', icon: '⚠️', text: '"I think... because... For example... Therefore..." 이 4단 공식만 완벽히 익혀도 IM 이상은 안정적으로 받을 수 있습니다.' }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // Module 8 — 실전 고득점 전략
  // ══════════════════════════════════════════════════════════
  {
    id: 'm8', icon: '🏆',
    title: '실전 고득점 전략',
    subtitle: '시간 관리 · 등급별 체크리스트',
    color: '#6B7280',
    lessons: [
      {
        id: 'm8l1', title: '파트별 시간 관리 전략', duration: '6분',
        content: [
          { type: 'text', text: '말하기 시험에서 시간 관리는 점수에 직결됩니다. 너무 짧으면 내용 점수가 낮아지고, 말이 끊기면 유창성 점수가 낮아집니다. 파트별 최적 배분을 익혀두세요.' },
          { type: 'heading', text: '파트별 시간 배분 전략' },
          { type: 'table',
            headers: ['파트', '답변 시간', '권장 배분', '핵심 포인트'],
            rows: [
              ['Part 1', '45초', '전체-핵심-배경: 5-25-15초', '마지막 5초엔 분위기 묘사로 채우기'],
              ['Part 2', '30초', '답변-이유-예시: 5-15-10초', '도입 표현으로 즉시 시작'],
              ['Part 3', '30초', '출처-정보-추가: 5-20-5초', '자료 위치 미리 파악'],
              ['Part 4', '60초', '공감-해결책-대안: 10-35-15초', '해결책 2개 준비 필수'],
              ['Part 5/6', '60초', '입장-이유1-이유2-결론: 10-20-20-10초', '이유 2개가 핵심']
            ]
          },
          { type: 'heading', text: '시간 초과/부족 대처법' },
          { type: 'list', items: [
            '⏰ 시간이 남을 때: "Overall, I believe that..." 또는 "In summary, ..." 로 내용 요약 추가',
            '⏰ 시간이 부족할 때: 예시를 짧게 줄이고 결론으로 바로 이동',
            '⏰ 말이 막힐 때: "Let me put it this way..." 또는 "What I mean is..." 로 재시작',
            '⏰ 단어를 모를 때: "something like..." 또는 "a kind of..." 로 우회'
          ]},
          { type: 'heading', text: '침묵을 피하는 필러 표현' },
          { type: 'example', label: '자연스러운 필러', items: [
            { en: 'Well, ...', ko: '글쎄요... (생각할 때)' },
            { en: 'Let me think about that...', ko: '잠시 생각해 볼게요...' },
            { en: 'That\'s a great question. ...', ko: '좋은 질문이네요...' },
            { en: 'What I mean to say is...', ko: '제가 말하려는 것은...' },
            { en: 'In other words, ...', ko: '다시 말하면...' }
          ]},
          { type: 'tip', icon: '⚠️', text: '필러를 너무 많이 사용하면 오히려 유창성 점수가 떨어집니다. 3초 이상의 침묵을 피하는 용도로만 사용하세요.' }
        ]
      },
      {
        id: 'm8l2', title: '등급별 고득점 체크리스트', duration: '7분',
        content: [
          { type: 'text', text: '지금 내 수준을 파악하고, 다음 등급으로 올라가기 위해 무엇을 해야 하는지 확인하세요.' },
          { type: 'heading', text: 'NH → IL 올리기' },
          { type: 'list', items: [
            '✅ 각 파트의 기본 답변 구조 암기 (서론-본론-결론)',
            '✅ 파트별 필수 도입 표현 5개 이상 암기',
            '✅ 침묵 없이 시간을 채우는 연습 (내용보다 유창성 먼저)',
            '✅ 기본 문장 (주어+동사+목적어) 오류 없이 말하기',
            '✅ 발음: /r/ /l/ /f/ /v/ /th/ 기본 교정'
          ]},
          { type: 'heading', text: 'IL → IM 올리기' },
          { type: 'list', items: [
            '✅ 답변 시간을 80% 이상 채우기 (Part 1: 36초, Part 5/6: 48초)',
            '✅ 이유 2가지 + 예시 1가지 구조 정착',
            '✅ 연결어 자연스럽게 사용 (First, In addition, Therefore)',
            '✅ 문법 오류 수 줄이기 (특히 시제, 수일치)',
            '✅ 억양·강세를 의식해서 단조로움 개선'
          ]},
          { type: 'heading', text: 'IM → IH 올리기' },
          { type: 'list', items: [
            '✅ 다양한 어휘 사용 (같은 단어 반복 최소화)',
            '✅ 양보 구문으로 논리 강화 ("Although... I believe...")',
            '✅ 구체적이고 설득력 있는 예시 사용',
            '✅ 자연스러운 연음과 리듬 구현',
            '✅ Part 4에서 해결책 2개 이상 자신감 있게 제시'
          ]},
          { type: 'heading', text: 'IH → AL 올리기' },
          { type: 'list', items: [
            '✅ 복잡한 문장 구조 자유롭게 사용 (관계절, 조건절)',
            '✅ 고급 어휘와 관용 표현 적절히 활용',
            '✅ 원어민에 가까운 발음과 억양',
            '✅ 답변이 막힘 없이 자연스럽게 이어짐',
            '✅ 주제에 깊이 있는 통찰을 논리적으로 전달'
          ]},
          { type: 'tip', icon: '🏆', text: '지금 당장 모든 것을 잘하려 하지 마세요. 한 번에 한 파트씩, 한 번에 한 가지 기술씩 집중하는 것이 가장 빠른 길입니다. 이 앱으로 매일 1문제씩 연습하세요!' }
        ]
      }
    ]
  }

];
