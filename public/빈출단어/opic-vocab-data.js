// ── OPIc 주제별 핵심 어휘 ────────────────────────────────────
// 9개 모듈 · 주제별 30~38개 단어

const OPIC_VOCAB_MODULES = [

  // ══════════════════════════════════════════════════════════
  // Module 1 — 자기소개
  // ══════════════════════════════════════════════════════════
  {
    id: 'ov1',
    moduleTitle: '자기소개',
    icon: '🙋',
    color: '#0D9488',
    words: [
      { word: 'outgoing', meaning: '외향적인', pos: '형용사', example: "I'd say I'm a pretty outgoing person who enjoys meeting new people.", exampleKo: '저는 새로운 사람 만나는 것을 즐기는 꽤 외향적인 사람이라고 할 수 있어요.', tip: '자기소개 단골 표현 — "I\'d describe myself as outgoing"' },
      { word: 'introverted', meaning: '내성적인', pos: '형용사', example: "I'm somewhat introverted, so I prefer small gatherings over big parties.", exampleKo: '저는 다소 내성적이라 큰 파티보다는 소규모 모임을 선호해요.', tip: '반대어: outgoing, extroverted' },
      { word: 'passionate', meaning: '열정적인', pos: '형용사', example: "I'm really passionate about music — it's been a huge part of my life.", exampleKo: '음악에 정말 열정적이에요. 제 삶의 큰 부분을 차지하고 있어요.', tip: '"be passionate about + 명사" 형태로 OPIc에서 빈출' },
      { word: 'currently', meaning: '현재, 지금', pos: '부사', example: "I'm currently working as a graphic designer at a small agency.", exampleKo: '현재 작은 에이전시에서 그래픽 디자이너로 일하고 있어요.', tip: '자기소개 첫 문장에 자연스럽게 사용' },
      { word: 'based in', meaning: '~에 거주하다, ~에 본사를 두다', pos: '구동사', example: "I'm based in Seoul but originally from Daejeon.", exampleKo: '현재 서울에 살고 있지만 원래는 대전 출신이에요.', tip: '"I live in"보다 세련된 표현' },
      { word: 'background', meaning: '배경, 출신', pos: '명사', example: "I have a background in economics, which led me to finance.", exampleKo: '경제학 배경이 있어서 금융 쪽으로 가게 됐어요.', tip: '"I have a background in + 분야" — 전공·경력 설명에 필수' },
      { word: 'overall', meaning: '전반적으로', pos: '부사', example: "Overall, I think I lead a pretty balanced and fulfilling life.", exampleKo: '전반적으로 꽤 균형 잡히고 보람 있는 삶을 살고 있다고 생각해요.', tip: '답변 마무리 문장에 자연스럽게 사용' },
      { word: 'genuine', meaning: '진심 어린, 진짜의', pos: '형용사', example: "I genuinely enjoy cooking — it's not just a hobby, it's a passion.", exampleKo: '정말 진심으로 요리를 즐겨요 — 단순한 취미가 아니라 열정이에요.', tip: '"genuinely" 부사형이 대화체에서 더 자주 사용' },
      { word: 'in terms of', meaning: '~의 측면에서, ~에 관해서', pos: '구', example: "In terms of my personality, I'd say I'm actually a bit introverted.", exampleKo: '성격 면에서는, 저는 사실 다소 내성적이라고 할 수 있어요.', tip: '화제를 부드럽게 전환할 때 쓰는 표현 — "In terms of + 명사"로 새로운 주제를 자연스럽게 도입' },
      { word: "I'd say", meaning: '~라고 할 수 있어요, ~인 편이에요', pos: '관용구', example: "I'd say I'm someone who values honesty above almost everything else.", exampleKo: '저는 거의 무엇보다 정직함을 중요하게 여기는 사람이라고 할 수 있어요.', tip: '"I am ~"이라고 단정하기보다 겸손하고 부드럽게 의견을 제시하는 표현 (= I would say)' },
      { word: 'try out', meaning: '(한번) 시도해보다, 경험해보다', pos: '구동사', example: "Whenever I visit a new city, I like to try out the local restaurants.", exampleKo: '새로운 도시를 방문할 때마다 현지 식당을 한번 가보는 것을 좋아해요.', tip: '단순히 "먹어보다"를 넘어 새로운 것을 경험해보고 알아간다는 뉘앙스' },
      { word: 'be into', meaning: '~에 푹 빠져 있다, ~를 좋아하다', pos: '구동사', example: "I'm really into photography these days.", exampleKo: '요즘 사진 찍는 것에 푹 빠져 있어요.', tip: 'like/love 대신 자주 쓰는 생생한 표현 — "really into"로 강조 가능' },
      { word: "have ~ under one's belt", meaning: '(경험·기술을) 쌓다, 보유하다', pos: '관용구', example: "I've been in this field for about twelve years now, so I have quite a bit of experience under my belt.", exampleKo: '이 분야에서 일한 지 약 12년이 되어서, 꽤 많은 경험을 쌓았어요.', tip: '벨트 아래를 채웠다는 이미지에서 유래 — 경험·지식·성과를 "내 것으로 축적했다"는 의미' },
      { word: 'quite a bit of', meaning: '꽤 많은, 상당한', pos: '구', example: "I have quite a bit of experience under my belt.", exampleKo: '저는 꽤 많은 경험을 갖고 있어요.', tip: '= a lot of / a lot of보다 세련되고 원어민들이 자주 쓰는 표현' },
      { word: 'for everyday life', meaning: '일상생활에, 일상적인 삶에', pos: '구', example: "There are several nice cafes nearby, so it's really convenient for everyday life.", exampleKo: '근처에 괜찮은 카페가 여러 개 있어서 일상생활에 정말 편리해요.', tip: 'everyday(붙여쓰기)는 "일상적인, 매일의"라는 뜻의 형용사' },
      { word: 'at first glance', meaning: '언뜻 보기에, 첫눈에', pos: '관용구', example: "I'm much more curious than people might expect at first glance.", exampleKo: '저는 사람들이 언뜻 보기에 예상하는 것보다 훨씬 호기심이 많아요.', tip: '사람·사물의 첫인상을 말할 때 자주 쓰는 표현' },
      { word: 'come across', meaning: '우연히 마주치다, 발견하다', pos: '구동사', example: "I enjoy digging into new topics — whether it's something related to my work or just something random I came across online.", exampleKo: '일과 관련된 것이든 온라인에서 우연히 발견한 무작위 주제든, 새로운 주제를 파고드는 것을 즐겨요.', tip: '"우연히 마주치다/발견하다"라는 뜻의 중요 숙어 — came across는 과거형' },
      { word: 'on the surface', meaning: '겉보기에는, 표면적으로는', pos: '구', example: "I think of myself as someone who's quiet on the surface but always exploring something new underneath.", exampleKo: '저는 겉보기에는 조용하지만 내면에서는 항상 새로운 것을 탐구하는 사람이라고 생각해요.', tip: '반대말: underneath (내면에는, 마음속 깊은 곳에서는) — 겉과 속의 대조를 표현할 때 자주 사용' },
      { word: 'think of A as B', meaning: 'A를 B라고 생각하다', pos: '패턴', example: "Overall, I think of myself as someone who's quiet on the surface but always exploring something new underneath.", exampleKo: '전반적으로, 저는 스스로를 겉보기엔 조용하지만 항상 새로운 것을 탐구하는 사람이라고 생각해요.', tip: '자기소개 마무리 문장에 유용한 핵심 패턴 — A자리에 myself를 넣으면 "스스로를 ~라 여기다"' },
      { word: 'What I really like about ~', meaning: '~에 대해 내가 정말 좋아하는 점은', pos: '패턴', example: "What I really like about my job is the flexibility it offers.", exampleKo: '제 직업에 대해 정말 좋아하는 점은 그것이 제공하는 유연성이에요.', tip: "What은 의문사가 아니라 '~하는 것'이라는 뜻의 관계대명사로 쓰인 표현 — 좋아하는 점을 강조해서 소개할 때 유용" },
      { word: 'get comfortable', meaning: '편안해지다', pos: '구동사', example: "It took a while, but I eventually got comfortable speaking in front of others.", exampleKo: '시간이 좀 걸렸지만, 결국 다른 사람들 앞에서 말하는 것이 편안해졌어요.', tip: "be comfortable(이미 편안한 상태)과 달리 get comfortable은 '편안해지는 변화 과정'을 강조" },
      { word: 'whether A or B', meaning: 'A이든 B이든 (상관없이)', pos: '패턴', example: "I enjoy trying new things, whether it's a new recipe or a new hobby.", exampleKo: '새로운 레시피든 새로운 취미든, 저는 새로운 것을 시도하는 것을 즐겨요.', tip: '두 가지 이상의 가능성을 모두 아우를 때 쓰는 필수 표현' },
      { word: 'something related to ~', meaning: '~와 관련된 어떤 것', pos: '구', example: "I like reading something related to psychology in my free time.", exampleKo: '여가 시간에는 심리학과 관련된 것을 읽는 것을 좋아해요.', tip: '-thing으로 끝나는 명사(something, anything 등)는 수식어가 뒤에서 앞으로 꾸며줌' }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // Module 2 — 일상 & 루틴
  // ══════════════════════════════════════════════════════════
  {
    id: 'ov2',
    moduleTitle: '일상 & 루틴',
    icon: '⏰',
    color: '#0EA5E9',
    words: [
      { word: 'routine', meaning: '일상, 루틴', pos: '명사', example: "My morning routine usually takes about an hour from start to finish.", exampleKo: '저의 아침 루틴은 처음부터 끝까지 보통 한 시간 정도 걸려요.', tip: '"daily routine", "morning routine" 형태로 OPIc 빈출' },
      { word: 'commute', meaning: '통근하다 / 통근', pos: '동사·명사', example: "My commute to work takes about 40 minutes by subway.", exampleKo: '지하철로 출근하는 데 약 40분 걸려요.', tip: '"commute to work/school"로 일상 묘사에 자주 사용' },
      { word: 'typically', meaning: '보통, 일반적으로', pos: '부사', example: "I typically wake up around 7 and have breakfast before heading out.", exampleKo: '저는 보통 7시쯤 일어나서 외출 전에 아침을 먹어요.', tip: '= usually, generally / 일과 묘사 필수 부사' },
      { word: 'schedule', meaning: '일정, 스케줄 / 계획하다', pos: '명사·동사', example: "My schedule on weekdays is pretty packed from morning to evening.", exampleKo: '평일 스케줄은 아침부터 저녁까지 꽤 빡빡해요.', tip: '"packed schedule" = 바쁜 일정 / "busy schedule"보다 자연스러운 표현' },
      { word: 'set aside', meaning: '따로 마련하다, 시간을 내다', pos: '구동사', example: "I try to set aside at least 30 minutes a day for reading.", exampleKo: '하루에 최소 30분은 독서를 위해 시간을 내려고 해요.', tip: '"set aside time for" = ~을 위해 시간을 내다' },
      { word: 'tend to', meaning: '~하는 경향이 있다', pos: '구동사', example: "I tend to stay up late on weekends and sleep in on Sunday.", exampleKo: '주말에는 늦게까지 깨어 있다가 일요일에 늦잠을 자는 편이에요.', tip: 'OPIc 고득점자들이 자주 쓰는 자연스러운 습관 표현' },
      { word: 'wind down', meaning: '긴장을 풀다, 마무리하다', pos: '구동사', example: "In the evening, I like to wind down by watching a show or reading.", exampleKo: '저녁에는 드라마를 보거나 책을 읽으며 긴장을 푸는 것을 좋아해요.', tip: '"unwind"와 같은 의미 — 하루 마무리 묘사에 사용' },
      { word: 'primarily', meaning: '주로', pos: '부사', example: "I primarily spend my free time outdoors — hiking or cycling.", exampleKo: '주로 야외에서 여가 시간을 보내요 — 하이킹이나 자전거 타기를 해요.', tip: '= mainly, mostly / 조금 더 격식 있는 표현' },
      { word: 'revolve around', meaning: '~를 중심으로 돌아가다', pos: '구동사', example: "My daily life revolves around work and spending time with family.", exampleKo: '제 일상은 일과 가족과의 시간을 중심으로 돌아가요.', tip: 'OPIc 일상 묘사에서 자주 쓰이는 고급 표현' },
      { word: 'maintain', meaning: '유지하다', pos: '동사', example: "I try to maintain a healthy work-life balance as much as possible.", exampleKo: '가능한 한 건강한 일-생활 균형을 유지하려고 노력해요.', tip: '"maintain a balance/routine/habit" 형태로 빈출' },
      { word: 'head out', meaning: '(집을) 나서다, 출발하다', pos: '구동사', example: "I just get ready and head out of the house by around 6:20.", exampleKo: '준비를 마치고 6시 20분쯤 집을 나서요.', tip: '출근·등교 시 집을 나설 때 자주 쓰는 구어체 표현' },
      { word: 'catch up on', meaning: '(밀린 것을) 따라잡다, 알아보다', pos: '구동사', example: "I usually listen to a podcast or the news on the radio to catch up on what's happening before the day starts.", exampleKo: '보통 팟캐스트나 라디오 뉴스를 들으며 하루가 시작되기 전에 소식을 따라잡아요.', tip: '밀린 대화·소식을 "따라잡다"는 뜻 — "catch up on the news/sleep" 형태로 빈출' },
      { word: 'weekday', meaning: '평일', pos: '명사', example: "On a typical weekday, I wake up around 6 AM.", exampleKo: '평범한 평일에는 아침 6시쯤 일어나요.', tip: '주말(weekend)과 대비되는 "평일" — "on weekdays" 형태로 자주 사용' },
      { word: 'out of habit', meaning: '습관적으로, 습관에서 비롯되어', pos: '구', example: "The first thing I do — out of habit, honestly — is check my phone right after I open my eyes.", exampleKo: '제가 가장 먼저 하는 일은 — 솔직히 습관적으로 — 눈을 뜨자마자 휴대폰을 확인하는 거예요.', tip: '무의식적으로 반복하는 행동을 솔직하게 인정할 때 사용하는 자연스러운 삽입구' },
      { word: 'right after', meaning: '~한 직후에, ~하자마자', pos: '부사구', example: "I check my phone right after I open my eyes.", exampleKo: '눈을 뜨자마자 휴대폰을 확인해요.', tip: '시간적으로 바로 이어지는 타이밍을 강조하는 표현' },
      { word: 'second nature', meaning: '완전히 몸에 밴 습관, 제2의 천성', pos: '관용구', example: "I know it's not the healthiest habit, but it's become second nature at this point.", exampleKo: '건강한 습관은 아니라는 걸 알지만, 지금은 완전히 몸에 뱄어요.', tip: '오랜 반복으로 저절로 나오는 행동을 표현 — "unwind"와 함께 하루 마무리 묘사에도 활용 가능' },
      { word: 'before the day starts', meaning: '하루가 시작되기 전에', pos: '구', example: "I like to catch up on what's happening before the day starts.", exampleKo: '하루가 시작되기 전에 소식을 따라잡는 것을 좋아해요.', tip: '아침 루틴을 마무리하며 하루 일과로 넘어가는 시점을 나타낼 때 사용' },
      { word: 'so (that) + 주어 + can', meaning: '~가 ~할 수 있도록 (목적)', pos: '패턴', example: "I try to get to bed at a reasonable hour so I can do it all again the next day.", exampleKo: '다음 날 다시 그 모든 걸 할 수 있도록 적당한 시간에 자려고 해요.', tip: '원래 so that이지만 구어체에서는 that을 생략 — 목적을 나타내는 필수 접속 구조' },
      { word: 'get home', meaning: '집에 도착하다', pos: '구동사', example: "By the time I get home in the evening, I try to relax a bit before getting to bed.", exampleKo: '저녁에 집에 도착할 때쯤이면, 자기 전에 좀 쉬려고 해요.', tip: 'home은 부사이므로 전치사 없이 사용 — "get to home"이 아니라 "get home"' }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // Module 3 — 거주지 & 동네
  // ══════════════════════════════════════════════════════════
  {
    id: 'ov3',
    moduleTitle: '거주지 & 동네',
    icon: '🏠',
    color: '#059669',
    words: [
      { word: 'spacious', meaning: '넓은, 공간이 충분한', pos: '형용사', example: "The living room is quite spacious and gets a lot of natural light.", exampleKo: '거실은 꽤 넓고 자연광이 많이 들어와요.', tip: '= roomy / 반대: cramped (좁은) — 집 묘사 필수 형용사' },
      { word: 'cozy', meaning: '아늑한, 편안한', pos: '형용사', example: "It's a small but cozy apartment that feels very much like home.", exampleKo: '작지만 아늑한 아파트로 집처럼 편안하게 느껴져요.', tip: '집 묘사에서 spacious와 함께 가장 자주 등장' },
      { word: 'vibrant', meaning: '활기찬, 생동감 넘치는', pos: '형용사', example: "I live in a really vibrant neighborhood full of cafes and shops.", exampleKo: '카페와 가게들로 가득한 정말 활기찬 동네에 살고 있어요.', tip: '= lively / 동네 묘사에 자주 사용' },
      { word: 'residential', meaning: '주거의, 주거용', pos: '형용사', example: "It's mostly a residential area, so it's very quiet at night.", exampleKo: '주로 주거 지역이라 밤에는 매우 조용해요.', tip: '반대: commercial (상업) / 동네 특성 묘사에 사용' },
      { word: 'located', meaning: '위치한', pos: '형용사', example: "My apartment is conveniently located near the subway station.", exampleKo: '제 아파트는 지하철역 근처에 편리하게 위치해 있어요.', tip: '"conveniently / centrally located" 형태로 빈출' },
      { word: 'within walking distance', meaning: '걸어서 갈 수 있는 거리에', pos: '구', example: "There are several supermarkets within walking distance of my home.", exampleKo: '집에서 걸어갈 수 있는 거리에 슈퍼마켓이 여러 개 있어요.', tip: 'OPIc 동네 묘사 단골 표현' },
      { word: 'neighborhood', meaning: '동네, 이웃', pos: '명사', example: "My neighborhood has a really friendly and welcoming atmosphere.", exampleKo: '우리 동네는 정말 친근하고 따뜻한 분위기예요.', tip: '= area, district / 동네 묘사 핵심 명사' },
      { word: 'surroundings', meaning: '주변 환경', pos: '명사 (복수)', example: "I really love the green surroundings — there's a park just nearby.", exampleKo: '초록빛 주변 환경이 정말 좋아요 — 바로 근처에 공원이 있거든요.', tip: '= environment / 집 주변 묘사에 사용' },
      { word: 'atmosphere', meaning: '분위기', pos: '명사', example: "The café has a calm atmosphere perfect for studying.", exampleKo: '그 카페는 공부하기에 딱 좋은 차분한 분위기예요.', tip: '"a lively/cozy/peaceful atmosphere" 형태로 자주 등장' },
      { word: 'renovated', meaning: '리모델링된', pos: '형용사', example: "The apartment was renovated last year, so everything looks brand new.", exampleKo: '작년에 리모델링되어서 모든 것이 새것처럼 보여요.', tip: 'renovation (n.) / "newly renovated" 형태로 자주 사용' },
      { word: 'compact', meaning: '작고 효율적인', pos: '형용사', example: "It's a compact studio, but the layout is very well designed.", exampleKo: '작은 원룸이지만 레이아웃이 매우 잘 설계되어 있어요.', tip: '작은 집을 긍정적으로 묘사할 때 사용 — "small"보다 세련된 표현' },
      { word: 'commute-friendly', meaning: '통근하기 편한', pos: '형용사', example: "One reason I chose this apartment is that it's commute-friendly.", exampleKo: '이 아파트를 선택한 이유 중 하나는 통근하기 편리하기 때문이에요.', tip: '집 선택 이유를 설명할 때 유용' },
      { word: 'downside', meaning: '단점', pos: '명사', example: "The only downside is that the area gets a bit noisy on weekends.", exampleKo: '유일한 단점은 주말에 그 지역이 다소 시끄러워진다는 것이에요.', tip: '= drawback / "the upside" (장점)와 대비해서 사용' },
      { word: 'make up for', meaning: '보완하다, 벌충하다', pos: '구동사', example: "The convenience of the location more than makes up for the noise.", exampleKo: '위치의 편리함이 소음을 충분히 보완하고도 남아요.', tip: '"more than make up for" = 남고도 충분히 보완하다' },
      { word: 'feature', meaning: '특징, 기능', pos: '명사', example: "My favorite feature of the apartment is the large balcony.", exampleKo: '아파트에서 가장 마음에 드는 특징은 넓은 발코니예요.', tip: '"my favorite feature of" — 장점 묘사에 자주 사용' },
      { word: 'natural light', meaning: '자연광', pos: '명사', example: "The room gets a lot of natural light in the afternoon, which I love.", exampleKo: '오후에 자연광이 많이 들어오는데, 그게 정말 마음에 들어요.', tip: '집 내부 묘사에서 자주 등장하는 표현' },
      { word: 'accessible', meaning: '접근하기 쉬운', pos: '형용사', example: "The area is very accessible by public transportation.", exampleKo: '이 지역은 대중교통으로 접근하기 매우 쉬워요.', tip: '"easily accessible" 형태로 자주 사용' }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // Module 4 — 취미 & 여가
  // ══════════════════════════════════════════════════════════
  {
    id: 'ov4',
    moduleTitle: '취미 & 여가',
    icon: '🎯',
    color: '#D97706',
    words: [
      { word: 'enthusiastic', meaning: '열정적인', pos: '형용사', example: "I'm really enthusiastic about photography — I take my camera everywhere.", exampleKo: '사진에 정말 열정적이에요 — 어디든 카메라를 들고 다녀요.', tip: '"be enthusiastic about + 명사" 형태 — passionate와 바꿔 쓰기 가능' },
      { word: 'therapeutic', meaning: '치유적인, 기분 전환이 되는', pos: '형용사', example: "I find cooking really therapeutic after a stressful day at work.", exampleKo: '힘든 업무 후에 요리가 정말 치유적이라고 생각해요.', tip: '취미의 심리적 효과를 설명할 때 OPIc 고득점 어휘' },
      { word: 'unwind', meaning: '긴장을 풀다', pos: '동사', example: "Listening to music is my favorite way to unwind after a long day.", exampleKo: '음악 듣는 것이 긴 하루를 보낸 후 긴장을 푸는 제가 가장 좋아하는 방법이에요.', tip: '= relax, decompress / wind down과 같은 의미' },
      { word: 'get into', meaning: '~에 빠지다, 시작하다', pos: '구동사', example: "I got into running about two years ago and never looked back.", exampleKo: '약 2년 전에 달리기를 시작하고 나서 돌이켜본 적이 없어요.', tip: '"get into + 취미" — OPIc에서 가장 자주 나오는 취미 표현' },
      { word: 'hooked on', meaning: '~에 빠져있는', pos: '구', example: "Once I started painting, I was completely hooked on it.", exampleKo: '그림을 시작하자마자 완전히 빠져버렸어요.', tip: '= addicted to (긍정적 의미) / "ever since, I\'ve been hooked"' },
      { word: 'rewarding', meaning: '보람 있는', pos: '형용사', example: "Playing an instrument is really rewarding once you improve.", exampleKo: '악기 연주는 실력이 늘수록 정말 보람이 있어요.', tip: '= fulfilling, satisfying / 취미의 장점 설명에 자주 등장' },
      { word: 'recreational', meaning: '오락적인, 취미 활동의', pos: '형용사', example: "I play tennis recreationally on weekends — nothing too serious.", exampleKo: '주말에 취미로 테니스를 쳐요 — 너무 진지하게 하지는 않아요.', tip: 'recreationally (부사) 형태도 자주 사용' },
      { word: 'pick up', meaning: '~을 시작하다 (취미)', pos: '구동사', example: "I picked up guitar during the pandemic and still play it now.", exampleKo: '팬데믹 때 기타를 시작했는데 지금도 치고 있어요.', tip: '"pick up a hobby/skill" — 새 취미 시작을 표현하는 자연스러운 구어체' },
      { word: 'occasionally', meaning: '가끔', pos: '부사', example: "I occasionally go hiking on weekends when the weather is nice.", exampleKo: '날씨가 좋을 때 가끔 주말에 하이킹을 가요.', tip: '= sometimes / 빈도 표현: always > usually > often > occasionally > rarely' },
      { word: 'dedicate time to', meaning: '~에 시간을 바치다', pos: '구동사', example: "I try to dedicate at least two hours a week to drawing.", exampleKo: '일주일에 최소 두 시간은 그림 그리기에 시간을 바치려고 해요.', tip: '"dedicate time to + 명사/동명사" 형태로 사용' },
      { word: 'stimulating', meaning: '자극적인, 활기를 주는', pos: '형용사', example: "I love reading because it's both relaxing and mentally stimulating.", exampleKo: '독서는 편안하면서도 정신적으로 자극적이라서 좋아요.', tip: '= engaging / 취미의 지적 효과 설명에 사용' },
      { word: 'go-to', meaning: '즐겨 찾는, 주로 하는', pos: '형용사', example: "Listening to podcasts during my commute is my go-to activity.", exampleKo: '통근 중에 팟캐스트 듣는 게 제가 즐겨 하는 활동이에요.', tip: '"my go-to + 명사" — OPIc에서 자연스러운 구어체 표현' },
      { word: 'pastime', meaning: '취미, 소일거리', pos: '명사', example: "Baking has become one of my favorite pastimes recently.", exampleKo: '최근에 베이킹이 제가 가장 좋아하는 취미 중 하나가 됐어요.', tip: '= hobby / "a popular pastime" 형태로도 자주 사용' },
      { word: 'immerse oneself in', meaning: '~에 몰두하다', pos: '구동사', example: "When I paint, I completely immerse myself in the process.", exampleKo: '그림을 그릴 때 완전히 그 과정에 몰입해요.', tip: '"get immersed in"으로도 사용 — 몰입 경험 표현에 최적' },
      { word: 'recharge', meaning: '재충전하다', pos: '동사', example: "Hiking in the mountains helps me recharge for the week ahead.", exampleKo: '산 하이킹이 앞으로의 한 주를 위해 재충전하는 데 도움이 돼요.', tip: 'recharge (one\'s batteries) = 에너지를 회복하다' },
      { word: 'balance', meaning: '균형 / 균형을 유지하다', pos: '명사·동사', example: "I try to balance active hobbies like running with quieter ones like reading.", exampleKo: '달리기 같은 활동적인 취미와 독서 같은 조용한 취미의 균형을 맞추려 해요.', tip: '"strike a balance between A and B" — 취미 다양성 설명에 활용' },
      { word: 'Out of all of them,', meaning: '그 모든 것들 중에서', pos: '구', example: "Out of all of them, cooking is the hobby I'm most passionate about.", exampleKo: '그 모든 것들 중에서, 요리가 제가 가장 열정을 느끼는 취미예요.', tip: "Out of는 여기서 '~중에서(among)'라는 범위를 나타내며, 여러 선택지 중 하나를 특히 좁혀줄 때 사용" },
      { word: 'I try to + 동사원형', meaning: '~하려고 노력하다', pos: '패턴', example: "I try to work out at least three times a week.", exampleKo: '저는 적어도 일주일에 세 번은 운동하려고 노력해요.', tip: '단순히 한번 해보는 것(try + -ing)이 아니라, 목표를 가지고 의지를 내어 실천한다는 뉘앙스' },
      { word: 'work out', meaning: '운동하다', pos: '구동사', example: "I usually work out at the gym after work.", exampleKo: '저는 보통 퇴근 후 헬스장에서 운동해요.', tip: '헬스·요가·달리기 등 몸을 움직여 운동할 때 가장 일상적으로 쓰는 구동사' },
      { word: 'Besides', meaning: '~외에도, ~뿐만 아니라', pos: '전치사', example: "Besides going to the gym, I also enjoy hiking on weekends.", exampleKo: '헬스장에 가는 것 외에도, 주말에 하이킹하는 것도 즐겨요.', tip: "이미 언급한 내용을 포함하면서 새로운 내용을 추가할 때 사용 — s가 빠진 beside(~옆에)와 혼동 주의" },
      { word: 'dishes', meaning: '요리, 음식 (dish의 복수형)', pos: '명사', example: "I love trying to make new dishes from scratch on weekends.", exampleKo: '주말에 새로운 요리를 처음부터 만들어보는 것을 좋아해요.', tip: "food와 달리 조리가 완료되어 접시에 담겨 나오는 '특정 요리 개별 품목'을 지칭" },
      { word: 'it ~ to (가목적어·진목적어)', meaning: '가짜 목적어 it + 진짜 목적어 to부정사', pos: '패턴', example: "I find it very satisfying to make dishes from scratch.", exampleKo: '저는 재료부터 직접 요리를 만드는 것이 매우 만족스럽다고 느껴요.', tip: '진짜 목적어(to make ~)가 길어서 그 자리에 가짜 목적어 it을 임시로 세운 구조 — it은 따로 해석하지 않음' },
      { word: 'find + 목적어 + 형용사', meaning: '~가 …하다고 느끼다/생각하다', pos: '패턴', example: "I find cooking very relaxing after a long day.", exampleKo: '긴 하루를 보낸 후 요리하는 것이 매우 편안하게 느껴져요.', tip: "여기서 find는 '찾다'가 아니라 '~가 …하다고 생각하다'라는 뜻으로 쓰인 5형식 동사" },
      { word: 'from scratch', meaning: '아무것도 없는 상태에서, 처음부터', pos: '숙어', example: "I enjoy making pasta sauce from scratch instead of buying it.", exampleKo: '사서 먹기보다 파스타 소스를 처음부터 직접 만드는 것을 즐겨요.', tip: '★원어민이 자주 쓰는 고급 숙어 — 반조리 식품 등을 쓰지 않고 날것의 재료부터 직접 만든다는 뜻' },
      { word: 'experimenting', meaning: '실험하다, 새로운 시도를 하다 (experiment의 동명사)', pos: '동명사', example: "I spend a lot of time experimenting with different spices when I cook.", exampleKo: '요리할 때 여러 향신료를 넣어보며 시도해보는 데 많은 시간을 보내요.', tip: "'spend + 시간 + -ing' 구조에 자주 걸리는 동명사 — 새로운 재료·향신료를 넣어보며 시도한다는 뉘앙스" },
      { word: "It's become", meaning: '~이 되었다 (It has become의 축약)', pos: '패턴', example: "It's become a nice habit to read before bed every night.", exampleKo: '매일 밤 자기 전에 책을 읽는 것이 좋은 습관이 되었어요.', tip: 'It has become의 축약형 — 과거부터 시작된 일이 현재 어떤 상태가 된 것을 나타내는 현재완료 시제' }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // Module 5 — 여행
  // ══════════════════════════════════════════════════════════
  {
    id: 'ov5',
    moduleTitle: '여행',
    icon: '✈️',
    color: '#0284C7',
    words: [
      { word: 'memorable', meaning: '기억에 남는', pos: '형용사', example: "It was one of the most memorable trips I've ever taken.", exampleKo: '제가 해본 것 중 가장 기억에 남는 여행 중 하나였어요.', tip: '"a memorable experience/trip/moment" — OPIc 여행 묘사 필수 어휘' },
      { word: 'breathtaking', meaning: '숨막히게 아름다운', pos: '형용사', example: "The scenery along the coast was absolutely breathtaking.", exampleKo: '해안을 따라 펼쳐진 풍경이 정말 숨막히게 아름다웠어요.', tip: '= stunning, spectacular / 경치 묘사의 최고 표현' },
      { word: 'spontaneous', meaning: '즉흥적인', pos: '형용사', example: "We made a spontaneous decision to take a detour and visit a small village.", exampleKo: '즉흥적으로 돌아가서 작은 마을을 방문하기로 결정했어요.', tip: '"spontaneous trip/decision" — 계획 없이 떠난 여행 묘사에 사용' },
      { word: 'itinerary', meaning: '여행 일정', pos: '명사', example: "I planned a detailed itinerary but ended up going off-script most of the time.", exampleKo: '상세한 여행 일정을 짰는데 대부분의 시간을 즉흥적으로 보냈어요.', tip: '= travel plan / "follow an itinerary"' },
      { word: 'immerse', meaning: '몰입하다, 빠져들다', pos: '동사', example: "I love to immerse myself in local culture wherever I travel.", exampleKo: '여행하는 곳마다 현지 문화에 몰입하는 것을 좋아해요.', tip: '"immerse oneself in local culture/food/life" — OPIc 고득점 여행 표현' },
      { word: 'authentic', meaning: '진정성 있는, 현지 그대로의', pos: '형용사', example: "I prefer staying at local guesthouses for a more authentic experience.", exampleKo: '더 진정성 있는 경험을 위해 현지 게스트하우스에 머무는 것을 선호해요.', tip: '"authentic local food/experience" — 여행의 깊이를 표현' },
      { word: 'navigate', meaning: '길을 찾다, 항해하다', pos: '동사', example: "It was my first time traveling solo, so I had to navigate everything on my own.", exampleKo: '처음 혼자 여행하는 거라 모든 것을 스스로 해결해야 했어요.', tip: '"navigate" = 길 찾기 + 상황 헤쳐나가기 (비유적 의미도 포함)' },
      { word: 'highlight', meaning: '하이라이트, 가장 인상적인 순간', pos: '명사', example: "The highlight of the trip was watching the sunrise from the mountain top.", exampleKo: '여행의 하이라이트는 산 정상에서 일출을 보는 것이었어요.', tip: '"the highlight of the trip was when..." — OPIc 여행 단골 표현' },
      { word: 'off the beaten path', meaning: '관광지가 아닌 곳, 남들이 잘 안 가는 곳', pos: '구', example: "I prefer going off the beaten path rather than visiting tourist traps.", exampleKo: '관광 함정보다 남들이 잘 안 가는 곳을 가는 걸 선호해요.', tip: 'IH/AL 목표라면 꼭 알아야 할 고급 여행 표현' },
      { word: 'broaden one\'s perspective', meaning: '시야를 넓히다', pos: '구동사', example: "Traveling to different countries has really broadened my perspective.", exampleKo: '다른 나라로 여행하는 것이 시야를 정말 넓혀줬어요.', tip: '여행 경험의 가치를 설명하는 OPIc 고득점 표현' },
      { word: 'accommodation', meaning: '숙박, 숙소', pos: '명사', example: "I booked our accommodation in advance to avoid any last-minute problems.", exampleKo: '마지막 순간의 문제를 피하기 위해 미리 숙박을 예약했어요.', tip: '= lodging, stay / 롤플레이 상황에서도 자주 등장' },
      { word: 'local cuisine', meaning: '현지 음식', pos: '명사', example: "Trying local cuisine is always the first thing I do when I arrive somewhere.", exampleKo: '어딘가에 도착하면 현지 음식을 먹어보는 게 항상 제가 제일 먼저 하는 일이에요.', tip: '"try local cuisine" — 여행 묘사 단골 표현' },
      { word: 'travel light', meaning: '짐을 최소화해서 여행하다', pos: '구동사', example: "I always try to travel light — just a carry-on and a small backpack.", exampleKo: '항상 짐을 최소화해서 여행하려고 해요 — 기내용 가방과 작은 배낭만요.', tip: '여행 스타일 묘사에 사용' },
      { word: 'blend in', meaning: '자연스럽게 어울리다', pos: '구동사', example: "I try to blend in with the locals rather than act like a typical tourist.", exampleKo: '전형적인 관광객처럼 행동하기보다 현지인들과 자연스럽게 어울리려 해요.', tip: '= fit in / 여행 철학을 설명할 때 사용' },
      { word: 'itchy feet', meaning: '여행하고 싶은 충동', pos: '명사 (관용구)', example: "Whenever I stay home for too long, I get itchy feet and plan a trip.", exampleKo: '집에 너무 오래 있으면 여행하고 싶은 충동이 생기고 여행을 계획해요.', tip: '영어권에서 널리 쓰이는 여행 욕구 표현 — IH 이상 목표라면 필수' },
      { word: 'seasoned traveler', meaning: '경험 많은 여행자', pos: '명사', example: "After years of solo travel, I'd say I'm a pretty seasoned traveler now.", exampleKo: '몇 년간 혼자 여행한 후 이제 꽤 경험 많은 여행자가 됐다고 할 수 있어요.', tip: '"seasoned" = 경험 많은 (음식의 "양념" 아님)' },
      { word: 'take a trip (took)', meaning: '여행을 가다/하다 (과거형: took)', pos: '동사', example: "This is a trip I took to Japan with a junior colleague about ten years ago.", exampleKo: '이건 약 10년 전 회사 후배와 함께 갔던 일본 여행이에요.', tip: '동사 take를 사용 — 과거의 여행이므로 took' },
      { word: 'stick out', meaning: '도드라지다, 눈에 띄다', pos: '구동사', example: "The trip that sticks out most in my memory is a trip I took to Japan.", exampleKo: '제 기억에 가장 뚜렷이 남는 여행은 일본으로 갔던 여행이에요.', tip: '"sticks out in my memory" — 강렬하게 기억에 남는 경험을 표현할 때 사용' },
      { word: 'felt', meaning: '~하게 느껴졌다 (feel의 과거형)', pos: '동사', example: "Looking up at Tokyo Tower lit up in the dark felt almost magical.", exampleKo: '어둠 속에서 환하게 빛나는 도쿄 타워를 올려다보는 것이 거의 마법 같았어요.', tip: '뒤에 상태를 나타내는 형용사가 보어로 옴' },
      { word: 'spend + 시간 + -ing', meaning: '~하는 데 시간을 보내다', pos: '패턴', example: "We spent about a week traveling between Tokyo and Osaka.", exampleKo: '저희는 도쿄와 오사카를 오가며 약 일주일을 보냈어요.', tip: '매우 유용한 필수 패턴' },
      { word: 'spent', meaning: '보냈다 (spend의 과거형)', pos: '동사', example: "In Osaka, we spent most of our time eating our way through the city.", exampleKo: '오사카에서는 시간을 대부분 이것저것 먹으러 다니며 보냈어요.', tip: '시간이나 돈을 쓰다/보내다' },
      { word: 'we spotted', meaning: '우리는 발견했다/눈에 띄었다', pos: '동사', example: "We spotted Tokyo Tower far off in the distance.", exampleKo: '저희는 저 멀리 도쿄 타워를 발견했어요.', tip: 'saw보다 더 명확하게 "포착했다"는 느낌' },
      { word: 'far off', meaning: '저 멀리', pos: '부사구', example: "We spotted Tokyo Tower far off in the distance.", exampleKo: '저희는 저 멀리 도쿄 타워를 발견했어요.', tip: '' },
      { word: 'in the distance', meaning: '먼 거리에', pos: '부사구', example: "We spotted Tokyo Tower far off in the distance.", exampleKo: '저희는 저 멀리 도쿄 타워를 발견했어요.', tip: 'far off와 함께 쓰여 "아주 멀리"라는 공간적 느낌 강조' },
      { word: 'think through (thinking it through)', meaning: '깊이 고민하다, 끝까지 생각하다, 신중히 따져보다', pos: '구동사', example: "We decided to walk toward it, without really thinking it through.", exampleKo: '별생각 없이 그쪽으로 걸어가기로 했어요.', tip: '구동사(Phrasal Verb)' },
      { word: 'barely', meaning: '거의 ~않다, 간신히 ~하다', pos: '부사', example: "We barely checked a map — we just kept walking.", exampleKo: '지도도 거의 안 보고 그냥 계속 걸었어요.', tip: '부정의 의미를 가진 부사' },
      { word: 'keep + -ing (kept walking)', meaning: '계속해서 ~하다 (계속 걸어갔다)', pos: '패턴', example: "We just kept walking in that general direction.", exampleKo: '그냥 그 방향으로 계속 걸어갔어요.', tip: '과거의 지속적인 행동을 나타냄' },
      { word: 'get to (got there)', meaning: '~에 도착하다', pos: '구동사', example: "By the time we finally got there, it was late at night.", exampleKo: '마침내 도착했을 때는 이미 밤늦은 시간이었어요.', tip: 'there가 오면 전치사 to 없이 got there' },
      { word: 'late at night', meaning: '밤늦게, 늦은 밤', pos: '부사구', example: "By the time we finally got there, it was late at night.", exampleKo: '마침내 도착했을 때는 이미 밤늦은 시간이었어요.', tip: '' },
      { word: 'lit up', meaning: '불이 켜진, 환하게 빛나는', pos: '형용사', example: "Looking up at Tokyo Tower lit up in the dark felt almost magical.", exampleKo: '어둠 속에서 환하게 빛나는 도쿄 타워를 올려다보는 것이 거의 마법 같았어요.', tip: 'light up의 과거분사, 수동의 의미' },
      { word: 'in the dark', meaning: '어둠 속에서', pos: '부사구', example: "Tokyo Tower lit up in the dark felt almost magical.", exampleKo: '어둠 속에서 환하게 빛나는 도쿄 타워는 거의 마법 같았어요.', tip: '주위의 캄캄한 배경을 나타냄' },
      { word: "eat one's way through", meaning: '돌아다니며 이것저것 맛있는 것을 잔뜩 먹다', pos: '구동사', example: "We spent most of our time eating our way through the city.", exampleKo: '저희는 시간을 대부분 그 도시를 돌아다니며 이것저것 먹는 데 보냈어요.', tip: '직역: 먹으면서 길을 뚫고 지나가다' },
      { word: 'everything under the sun', meaning: '세상만사 온갖 것들, 하늘 아래 모든 것', pos: '관용구', example: "My colleague and I talked about everything under the sun during that trip.", exampleKo: '그 여행 동안 동료와 저는 세상만사에 대해 이야기했어요.', tip: '★★★★★ 핵심 관용 표현' },
      { word: 'whenever', meaning: '~할 때마다', pos: '접속사', example: "Whenever I think back on it now, that walk still stands out.", exampleKo: '지금도 그때를 돌이켜볼 때마다 그 산책이 여전히 특별하게 느껴져요.', tip: '때를 나타내는 접속사' },
      { word: 'think back on', meaning: '~을 돌이켜보다, 추억하다', pos: '구동사', example: "Whenever I think back on it now, that reckless walk stands out.", exampleKo: '지금 그때를 돌이켜볼 때마다 그 무모했던 산책이 유독 기억에 남아요.', tip: '과거의 일을 다시 생각할 때 쓰는 구동사' },
      { word: 'reckless', meaning: '무모한, 앞뒤 가리지 않는', pos: '형용사', example: "That reckless walk toward Tokyo Tower somehow stands out as a special memory.", exampleKo: '도쿄 타워를 향한 그 무모한 산책이 왠지 특별한 기억으로 남아 있어요.', tip: '' },
      { word: 'somehow', meaning: '왠지 모르게, 어쩐지', pos: '부사', example: "That reckless walk somehow stands out as one of those memories.", exampleKo: '그 무모한 산책이 왠지 특별한 기억 중 하나로 남아 있어요.', tip: '이유를 콕 집어 말할 수 없는 느낌의 부사' },
      { word: 'what it feels(felt) like to ~', meaning: '~하는 것은 어떤 느낌인가', pos: '패턴', example: "That memory captures what it felt like to be young.", exampleKo: '그 기억은 젊었을 때 어떤 느낌이었는지를 그대로 담고 있어요.', tip: '통째로 외우면 좋은 중요 패턴' },
      { word: 'with + 명사 + 형용사', meaning: '~가 ~한 상태로', pos: '패턴', example: "I felt a bit anxious with the event so close.", exampleKo: '행사가 코앞으로 다가온 상태라 조금 긴장됐어요.', tip: '상황이나 이유를 덧붙일 때 자주 쓰는 구조 (예: with the event so close)' }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // Module 6 — 직장 & 학교
  // ══════════════════════════════════════════════════════════
  {
    id: 'ov6',
    moduleTitle: '직장 & 학교',
    icon: '💼',
    color: '#7C3AED',
    words: [
      { word: 'demanding', meaning: '힘든, 요구가 많은', pos: '형용사', example: "My job is quite demanding, but I find it very rewarding.", exampleKo: '제 일은 꽤 힘들지만 매우 보람 있다고 생각해요.', tip: 'difficult보다 자연스러운 업무 묘사 단어 — "mentally/physically demanding"' },
      { word: 'collaborate', meaning: '협력하다', pos: '동사', example: "I collaborate closely with the design team on most projects.", exampleKo: '대부분의 프로젝트에서 디자인팀과 긴밀하게 협력해요.', tip: 'collaboration (n.), collaborative (adj.) — 팀워크 묘사에 필수' },
      { word: 'deadline', meaning: '마감 기한', pos: '명사', example: "Tight deadlines can be stressful, but they keep me focused.", exampleKo: '촉박한 마감 기한은 스트레스가 될 수 있지만 집중력을 유지시켜 줘요.', tip: '"meet a deadline" = 마감을 맞추다 / "tight deadline" = 촉박한 마감' },
      { word: 'priorities', meaning: '우선순위', pos: '명사 (복수)', example: "Managing competing priorities is one of the biggest challenges in my job.", exampleKo: '여러 우선순위를 관리하는 것이 제 일의 가장 큰 도전 중 하나예요.', tip: '"prioritize" (v.) / "top priority" — 업무 관리 표현에 필수' },
      { word: 'flexible', meaning: '유연한', pos: '형용사', example: "Our company has a flexible work culture, which I really appreciate.", exampleKo: '우리 회사는 유연한 업무 문화를 갖고 있는데, 정말 감사히 여겨요.', tip: '"flexible hours/schedule" — 근무 환경 묘사에 자주 사용' },
      { word: 'rewarding', meaning: '보람 있는', pos: '형용사', example: "Working with clients directly makes the job especially rewarding.", exampleKo: '클라이언트와 직접 일하는 것이 일을 특히 보람 있게 만들어요.', tip: '= fulfilling / 직업 만족도를 표현하는 핵심 단어' },
      { word: 'contribute', meaning: '기여하다', pos: '동사', example: "I feel like I'm really contributing to something meaningful.", exampleKo: '뭔가 의미 있는 일에 정말 기여하고 있다는 느낌이 들어요.', tip: '"contribute to + 명사" — 직업적 보람 표현에 사용' },
      { word: 'workload', meaning: '업무량', pos: '명사', example: "The workload can be heavy at times, especially near deadlines.", exampleKo: '특히 마감 가까이에는 업무량이 가끔 많아질 수 있어요.', tip: '"heavy/manageable workload" — 업무 환경 묘사에 자주 등장' },
      { word: 'productive', meaning: '생산적인', pos: '형용사', example: "I'm most productive in the morning, so I try to tackle hard tasks first.", exampleKo: '오전에 가장 생산적이라서 어려운 과제를 먼저 처리하려고 해요.', tip: 'productivity (n.) — 업무 효율성 묘사에 사용' },
      { word: 'back-and-forth', meaning: '주고받는, 오고 가는 / 의견 주고받기, 왔다 갔다 하는 소통', pos: '형용사·명사', example: "Since I work so closely with the design engineers, there's always a lot of back-and-forth.", exampleKo: '설계 엔지니어들과 워낙 긴밀하게 일하다 보니 항상 의견을 주고받는 일이 많아요.', tip: '★★★★★ 핵심 명사 — 협업 과정에서 피드백이 양측 간 여러 번 오가는 것을 자연스럽게 묘사' },
      { word: 'internship', meaning: '인턴십', pos: '명사', example: "I did a marketing internship before landing my current job.", exampleKo: '현재 직장을 구하기 전에 마케팅 인턴십을 했어요.', tip: '"land a job" = 직장을 구하다 / 취업 과정 설명에 유용' },
      { word: 'field', meaning: '분야', pos: '명사', example: "I work in the field of environmental engineering.", exampleKo: '환경 공학 분야에서 일해요.', tip: '"work in the field of" = ~분야에서 일하다 — "area" 대신 사용' },
      { word: 'minor in', meaning: '부전공하다', pos: '구동사', example: "I majored in business and minored in marketing.", exampleKo: '경영학을 전공하고 마케팅을 부전공했어요.', tip: '"major in" (전공) / "minor in" (부전공) — 학교 소개 필수 표현' },
      { word: 'hands-on', meaning: '직접 해보는, 실무적인', pos: '형용사', example: "I prefer hands-on learning over reading from a textbook.", exampleKo: '교과서를 읽는 것보다 직접 해보는 학습을 선호해요.', tip: '"hands-on experience/approach" — 실무 경험 표현에 자주 사용' },
      { word: 'stepping stone', meaning: '발판', pos: '명사', example: "This job is a great stepping stone toward my long-term career goals.", exampleKo: '이 직업은 장기적인 커리어 목표를 향한 훌륭한 발판이에요.', tip: 'IH 이상 목표라면 꼭 알아야 할 커리어 묘사 표현' },
      { word: 'and to be honest', meaning: '그리고 솔직히 말해서', pos: '관용구', example: "I work as an FEA engineer, and to be honest, it's a job I genuinely enjoy.", exampleKo: '저는 FEA 엔지니어로 일하고 있는데, 솔직히 말해서 정말 즐기면서 하고 있어요.', tip: '속마음을 털어놓을 때 쓰는 회화 표현 (줄여서 TBH)' },
      { word: 'work as / at / in', meaning: '~로 일하다 (직무/회사/지역)', pos: '패턴', example: "I work as an FEA engineer at a plant equipment company in Pyeongtaek.", exampleKo: '저는 평택에 있는 플랜트 설비 회사에서 FEA 엔지니어로 일하고 있어요.', tip: 'as+직무, at+회사, in+지역 전치사 세트' },
      { word: 'start with + -ing', meaning: '~하는 것으로 시작하다', pos: '패턴', example: "A typical day usually starts with checking my emails.", exampleKo: '보통 하루는 이메일을 확인하는 것으로 시작해요.', tip: '' },
      { word: 'the bulk of', meaning: '~의 대부분, 가장 큰 부분', pos: '구', example: "The bulk of my day involves performing structural and thermal analyses.", exampleKo: '제 하루의 대부분은 구조 및 열 해석을 수행하는 데 쓰여요.', tip: 'most of보다 더 묵직하고 양이 많은 뉘앙스' },
      { word: 'set up (setting up)', meaning: '설정하다, 세팅하다', pos: '구동사', example: "I spend hours creating simulation models and setting up boundary conditions.", exampleKo: '시뮬레이션 모델을 만들고 경계 조건을 설정하는 데 여러 시간을 보내요.', tip: '동명사구로 앞의 표현과 병렬 구조를 이룸' },
      { word: 'rounds of', meaning: '여러 차례의, 몇 라운드의', pos: '구', example: "I do rounds of stress evaluation and optimization.", exampleKo: '응력 평가와 최적화를 여러 차례 반복해서 진행해요.', tip: '만족스러운 결과가 나올 때까지 반복 수행한다는 뉘앙스' },
      { word: 'really energizing', meaning: '정말 활력을 주는, 신나는', pos: '형용사', example: "There's always a lot of back-and-forth, and sometimes that's really energizing.", exampleKo: '항상 의견을 주고받는 일이 많은데, 그게 정말 활력을 줄 때도 있어요.', tip: '생산적이고 재미있게 느껴질 때를 묘사' },
      { word: 'draining', meaning: '진을 빼는, 기진맥진하게 하는', pos: '형용사', example: "When we have conflicting design changes, it can be a bit draining.", exampleKo: '설계 변경 사항이 서로 충돌할 때는 조금 진이 빠지기도 해요.', tip: 'energizing과 정반대의 대조를 이루는 표현' },
      { word: 'as for ~', meaning: '~에 대해 말하자면, ~의 경우에는', pos: '관용구', example: "As for my work schedule, it's pretty fixed from 8 AM to 5 PM.", exampleKo: '제 근무 시간표로 말하자면, 오전 8시부터 오후 5시까지 꽤 고정되어 있어요.', tip: '새로운 화제로 자연스럽게 전환할 때 쓰는 표현' },
      { word: 'a team dinner', meaning: '팀 저녁 식사, 팀 회식', pos: '명사', example: "Once a quarter, we usually have a team dinner together.", exampleKo: '분기에 한 번씩 보통 팀 회식을 함께 해요.', tip: '점심 회식은 a team lunch' },
      { word: 'wind down', meaning: '긴장을 풀다, 휴식을 취하다', pos: '구동사', example: "A team dinner is a great way to wind down and catch up with everyone.", exampleKo: '팀 회식은 긴장을 풀고 다 같이 근황을 나누기에 좋은 방법이에요.', tip: '발음은 [와인드 다운], 시계 태엽을 풀듯 긴장을 늦추는 것' },
      { word: 'catch up with', meaning: '밀린 이야기를 나누다, 근황을 알아가다', pos: '구동사', example: "It's a great way to wind down and just catch up with everyone.", exampleKo: '다 같이 근황을 나누기에 좋은 방법이에요.', tip: '★★★★★ 핵심 구동사' },
      { word: 'A typical day', meaning: '보통의 평범한 하루', pos: '구', example: "A typical day for me starts with checking my emails.", exampleKo: '저에게 있어 보통의 하루는 이메일을 확인하는 것으로 시작해요.', tip: '하루 일과를 소개하는 답변의 도입부에 자주 사용' },
      { word: 'After that,', meaning: '그다음에는, 그 이후에는', pos: '접속부사구', example: "After that, I usually attend a couple of meetings before lunch.", exampleKo: '그다음에는, 보통 점심 전에 회의를 몇 개 참석해요.', tip: '앞 순서의 행동이 끝난 뒤 시간상으로 그다음에 일어날 일을 매끄럽게 연결' },
      { word: 'This means', meaning: '이것은 ~을 의미합니다, 즉 ~라는 뜻입니다', pos: '패턴', example: "This means I have to double-check every report before submitting it.", exampleKo: '즉, 제출하기 전에 모든 보고서를 다시 확인해야 한다는 뜻이에요.', tip: 'means 뒤에 접속사 that이 생략되어 [주어+동사]가 바로 따라옴 — 앞서 말한 내용을 구체적으로 풀어서 설명할 때 사용' },
      { word: 'work closely with', meaning: '~와 긴밀하게 일하다, 밀접하게 협력하다', pos: '숙어', example: "Since I work so closely with the marketing team, we communicate every day.", exampleKo: '마케팅팀과 아주 긴밀하게 일하기 때문에, 저희는 매일 소통해요.', tip: "Since는 '~이후로'뿐 아니라 '~이기 때문에'라는 이유의 접속사로도 자주 쓰임 — so를 붙이면 '아주 긴밀하게'로 강조" },
      { word: 'other times', meaning: '다른 때는, 또 어떤 때는', pos: '구', example: "Sometimes the meetings are quick, but other times they run over an hour.", exampleKo: '가끔은 회의가 짧게 끝나지만, 또 어떤 때는 한 시간 넘게 이어지기도 해요.', tip: '앞의 Sometimes와 대조를 이루며 "항상 좋은 것만은 아니다"라는 뉘앙스를 풍김' }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // Module 7 — 롤플레이
  // ══════════════════════════════════════════════════════════
  {
    id: 'ov7',
    moduleTitle: '롤플레이',
    icon: '🎭',
    color: '#BE185D',
    words: [
      { word: 'I was wondering if', meaning: '혹시 ~인지 여쭤봐도 될까요', pos: '관용구', example: "I was wondering if you have any availability this Saturday evening.", exampleKo: '혹시 이번 토요일 저녁에 자리가 있는지 여쭤봐도 될까요?', tip: '"I want..."보다 훨씬 자연스럽고 정중한 요청 표현 — OPIc 롤플레이 필수' },
      { word: 'Would it be possible to', meaning: '~이 가능할까요', pos: '관용구', example: "Would it be possible to change my reservation to a different date?", exampleKo: '예약을 다른 날짜로 변경하는 것이 가능할까요?', tip: 'Can I...보다 격식 있고 자연스러운 요청 표현' },
      { word: 'reservation', meaning: '예약', pos: '명사', example: "I'd like to make a reservation for two people at 7 PM, please.", exampleKo: '7시에 2인 예약을 하고 싶어요.', tip: '"make/change/cancel a reservation" 형태로 사용 — 롤플레이 필수 명사' },
      { word: 'availability', meaning: '이용 가능 여부', pos: '명사', example: "Could you check what availability you have for next Friday evening?", exampleKo: '다음 금요일 저녁에 어떤 자리가 있는지 확인해 주시겠어요?', tip: '"check availability" — 예약 롤플레이에서 핵심 표현' },
      { word: 'confirmation', meaning: '확인, 확인서', pos: '명사', example: "Could you send me a confirmation email for the booking?", exampleKo: '예약에 대한 확인 이메일을 보내주시겠어요?', tip: '"confirm" (v.) / "a booking confirmation" — 예약 마무리에 사용' },
      { word: 'inconvenience', meaning: '불편', pos: '명사', example: "I apologize for any inconvenience this may cause.", exampleKo: '이로 인해 생기는 불편함에 대해 사과드려요.', tip: '"We apologize for the inconvenience." — 고객 서비스 상황 단골 표현' },
      { word: 'unfortunately', meaning: '안타깝게도', pos: '부사', example: "Unfortunately, the item you ordered is no longer in stock.", exampleKo: '안타깝게도 주문하신 물건이 더 이상 재고에 없어요.', tip: '문제 상황을 정중하게 전달할 때 시작 부사로 사용' },
      { word: 'alternative', meaning: '대안', pos: '명사·형용사', example: "Could you offer me an alternative solution to this problem?", exampleKo: '이 문제에 대한 대안적 해결책을 제시해 주실 수 있나요?', tip: '"offer an alternative" / "any alternatives?" — 문제 해결 상황 필수 어휘' },
      { word: 'resolve', meaning: '해결하다', pos: '동사', example: "I'd like to resolve this issue as quickly as possible.", exampleKo: '이 문제를 가능한 한 빨리 해결하고 싶어요.', tip: '= solve / "resolve an issue/complaint" — 고객 서비스 맥락에서 빈출' },
      { word: 'refund', meaning: '환불 / 환불하다', pos: '명사·동사', example: "If you can't send a replacement, I'd like a full refund, please.", exampleKo: '교체품을 보내드릴 수 없다면 전액 환불을 원해요.', tip: '"request/issue a refund" / "full refund" — 불만 상황 필수 어휘' },
      { word: 'I\'d really appreciate it if', meaning: '~해주신다면 정말 감사하겠습니다', pos: '관용구', example: "I'd really appreciate it if you could process this as soon as possible.", exampleKo: '가능한 한 빨리 처리해 주신다면 정말 감사하겠어요.', tip: '"I want..."의 고급 표현 — 정중한 강조 요청 시 사용' },
      { word: 'accommodate', meaning: '수용하다, 편의를 봐주다', pos: '동사', example: "Is there any way you could accommodate my request for a room change?", exampleKo: '방 변경 요청을 수용해 주실 방법이 있을까요?', tip: '"accommodate a request/need" — 서비스 상황의 핵심 동사' },
      { word: 'under the name of', meaning: '~의 이름으로', pos: '구', example: "The reservation is under the name of Kim Jisoo, K-I-M.", exampleKo: '예약은 김지수라는 이름으로 되어 있어요, K-I-M이요.', tip: '"under the name of" — 예약 확인 상황에서 필수 표현' },
      { word: 'go ahead', meaning: '진행하다, 해주세요', pos: '구동사', example: "Please go ahead and process the refund at your earliest convenience.", exampleKo: '편하신 시간에 환불을 처리해 주세요.', tip: '"go ahead and + 동사" — 상대방에게 진행을 승인하는 자연스러운 표현' },
      { word: 'track', meaning: '추적하다, 확인하다', pos: '동사', example: "I've been tracking my order online, but the status hasn't changed.", exampleKo: '온라인으로 주문을 추적하고 있는데 상태가 바뀌지 않았어요.', tip: '"track a package/order" — 배송 문제 상황에서 빈출' },
      { word: 'speak with', meaning: '~와 이야기하다, 통화하다', pos: '구동사', example: "Could I speak with the manager, please?", exampleKo: '매니저분과 통화할 수 있을까요?', tip: "'talk to'보다 격식 있고 정중한 느낌 — 전화·상담 상황에서 자주 사용" },
      { word: 'I was hoping to ~', meaning: '~하고 싶습니다만, ~하기를 바랐어요', pos: '관용구', example: "I was hoping to extend my stay by one more night.", exampleKo: '혹시 하루 더 묵을 수 있을까 해서요.', tip: 'I hope to보다 훨씬 부드럽고 조심스러운 부탁 표현 — 롤플레이 요청 상황 필수' },
      { word: 'by one more night', meaning: '하루(1박) 더', pos: '구', example: "Would it be possible to extend my reservation by one more night?", exampleKo: '제 예약을 하루 더 연장하는 게 가능할까요?', tip: "by: 차이·범위를 나타내는 전치사 '~만큼' + one more night: '1박 더' — 구체적인 연장 범위 표현" },
      { word: 'Would ~ ?', meaning: '혹시 ~일까요? (정중한 질문)', pos: '패턴', example: "Would you happen to have any rooms available tonight?", exampleKo: '혹시 오늘 밤 이용 가능한 방이 있을까요?', tip: 'will 대신 과거형 would로 질문하면 훨씬 정중하고 부드러운 뉘앙스가 됨' },
      { word: 'would be', meaning: '~일 것이다, ~겠네요 (정중한 추측)', pos: '패턴', example: "A higher floor room would be much quieter.", exampleKo: '고층 방이 훨씬 조용할 거예요.', tip: "would(부드러운 추측) + be + 형용사 — '~한 상태일 것이다'를 완성하는 구조" },
      { word: 'slightly', meaning: '약간, 조금', pos: '부사', example: "The room is slightly smaller than I expected, but it's still comfortable.", exampleKo: '방이 제가 예상했던 것보다 약간 작지만 여전히 편안해요.', tip: '정도를 부드럽게 낮춰 말할 때 쓰는 부사' },
      { word: "That's fine. (승낙 표현)", meaning: '괜찮아요, 좋아요 (승낙)', pos: '관용구', example: "That's fine. I'm happy to pay the extra fee.", exampleKo: '괜찮아요. 추가 요금은 기꺼이 낼게요.', tip: "Okay보다 자연스럽고 세련된 승낙 표현 — That's perfect./That works for me.(매우 만족), No problem.(양해에 쿨하게 답할 때)도 함께 알아두기" },
      { word: 'higher / lower floor room', meaning: '고층 객실 / 저층 객실', pos: '명사', example: "I'd prefer a higher floor room with a nice view, if possible.", exampleKo: '가능하다면 전망 좋은 고층 객실을 원해요.', tip: '뷰가 좋고 조용한 방은 higher floor room, 저층 방은 lower floor room' },
      { word: 'assigned', meaning: '배정된 (assign의 과거분사)', pos: '형용사', example: "I noticed the room I was assigned doesn't have the view I requested.", exampleKo: '제가 배정받은 방에 제가 요청했던 전망이 없다는 걸 알게 됐어요.', tip: "be assigned = '배정받다'라는 수동태 의미" },
      { word: 'on file', meaning: '기록(보관)되어 있는, 시스템에 등록된', pos: '구', example: "Could you double-check the address on file for my account?", exampleKo: '제 계정에 등록된 주소를 다시 한번 확인해 주시겠어요?', tip: "명사를 뒤에서 꾸며주는 표현 — 'the address on file'처럼 사용" }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // Module 8 — 경험 & 비교
  // ══════════════════════════════════════════════════════════
  {
    id: 'ov8',
    moduleTitle: '경험 & 비교',
    icon: '💬',
    color: '#0891B2',
    words: [
      { word: 'overwhelming', meaning: '압도적인', pos: '형용사', example: "The kindness of the local people was completely overwhelming.", exampleKo: '현지 사람들의 친절함이 완전히 압도적이었어요.', tip: '긍정/부정 모두 사용 가능 — "overwhelmed" (감정 형태)도 자주 사용' },
      { word: 'rewarding', meaning: '보람 있는', pos: '형용사', example: "Finishing the marathon was the most rewarding experience of my life.", exampleKo: '마라톤을 완주하는 것이 제 인생에서 가장 보람 있는 경험이었어요.', tip: '= fulfilling / 도전 극복 후 감정 표현의 핵심 단어' },
      { word: 'turning point', meaning: '전환점', pos: '명사', example: "That trip was a real turning point — it changed how I see the world.", exampleKo: '그 여행은 진짜 전환점이었어요 — 세상을 바라보는 방식이 바뀌었어요.', tip: 'OPIc 경험 묘사에서 IH 이상 목표라면 필수 표현' },
      { word: 'empowered', meaning: '자신감을 얻은, 힘이 생긴', pos: '형용사', example: "Traveling alone for the first time left me feeling really empowered.", exampleKo: '처음으로 혼자 여행하고 나니 정말 자신감이 생겼어요.', tip: 'empowerment (n.) — 도전 경험 이후 긍정적 결과 표현' },
      { word: 'perspective', meaning: '관점, 시각', pos: '명사', example: "That experience completely changed my perspective on work-life balance.", exampleKo: '그 경험이 일-생활 균형에 대한 제 관점을 완전히 바꿔놓았어요.', tip: '"broaden/change/gain perspective" — 경험의 의미를 설명하는 핵심 표현' },
      { word: 'catch off guard', meaning: '불시에 당하다, 놀라게 하다', pos: '관용구', example: "The news caught me completely off guard — I wasn't expecting it at all.", exampleKo: '그 소식이 저를 완전히 놀라게 했어요 — 전혀 예상하지 못했어요.', tip: '"be caught off guard" / "catch someone off guard" — 예상치 못한 상황 표현에 완벽' },
      { word: 'in retrospect', meaning: '돌이켜 생각해보면', pos: '부사구', example: "In retrospect, I think that challenge was the best thing that happened to me.", exampleKo: '돌이켜 생각해보면 그 도전이 저에게 일어난 최고의 일이었던 것 같아요.', tip: '= looking back / IH·AL 목표 필수 표현 — 경험의 의미 성찰에 사용' },
      { word: 'cope with', meaning: '~을 극복하다, 잘 처리하다', pos: '구동사', example: "Learning how to cope with failure is an important life skill.", exampleKo: '실패에 대처하는 법을 배우는 것은 중요한 삶의 기술이에요.', tip: '= deal with, handle / "cope with stress/pressure/difficulties"' },
      { word: 'gradually', meaning: '점차, 서서히', pos: '부사', example: "Over time, I gradually became more comfortable with public speaking.", exampleKo: '시간이 지나면서 점차 대중 앞에서 말하는 것이 편안해졌어요.', tip: '변화 과정을 자연스럽게 표현 — "gradually shifted/improved/changed"' },
      { word: 'resilience', meaning: '회복력, 탄력성', pos: '명사', example: "That difficult period actually helped me build a lot of resilience.", exampleKo: '그 힘든 시기가 사실 회복력을 많이 키우는 데 도움이 됐어요.', tip: 'resilient (adj.) — IH·AL 고득점 목표 어휘' },
      { word: 'take for granted', meaning: '당연하게 여기다', pos: '관용구', example: "Before getting sick, I took my health completely for granted.", exampleKo: '아프기 전에는 건강을 완전히 당연하게 여겼어요.', tip: '"I used to take X for granted, but now..." — 경험 후 변화 표현에 자주 사용' },
      { word: 'out of my comfort zone', meaning: '편안한 영역을 벗어나', pos: '구', example: "Joining an improv class was way out of my comfort zone at first.", exampleKo: '즉흥 연기 수업에 참여하는 건 처음엔 완전히 편안한 영역을 벗어난 것이었어요.', tip: '"push oneself out of one\'s comfort zone" — 도전 경험 묘사 필수 표현' },
      { word: 'on a whim', meaning: '즉흥적으로, 충동적으로', pos: '부사구', example: "I signed up for the class on a whim, not expecting much from it.", exampleKo: '그 수업을 즉흥적으로 신청했는데 기대가 크지 않았어요.', tip: '= spontaneously / 즉흥적인 결정을 자연스럽게 표현' },
      { word: 'reflection', meaning: '성찰, 반성', pos: '명사', example: "After that experience, I did a lot of self-reflection about my priorities.", exampleKo: '그 경험 후 제 우선순위에 대해 많은 자기 성찰을 했어요.', tip: '"self-reflection" = 자기 성찰 / "reflect on" (v.) — 경험 마무리에 사용' },
      { word: 'setback', meaning: '좌절, 후퇴', pos: '명사', example: "The project failed at first, but I treated it as a setback, not a failure.", exampleKo: '프로젝트가 처음에 실패했지만 실패가 아닌 좌절로 받아들였어요.', tip: '"overcome a setback" — 어려움 극복 경험 표현에 사용' },
      { word: 'one time', meaning: '한 번은, 어떤 한 때', pos: '부사구', example: "One time, I got completely lost in a city I'd never visited before.", exampleKo: '한 번은 한 번도 가본 적 없는 도시에서 완전히 길을 잃은 적이 있어요.', tip: '과거의 구체적인 일화를 소개할 때 문장 맨 앞에 자주 사용' },
      { word: 'come to mind', meaning: '머릿속에 떠오르다, 생각나다', pos: '구동사', example: "When I think about my best trip, one moment immediately comes to mind.", exampleKo: '최고의 여행을 떠올리면 한 순간이 바로 머릿속에 떠올라요.', tip: "직역은 '마음에 찾아오다' — 문득 떠오르는 순간을 표현" },
      { word: 'physical ID', meaning: '실물 신분증', pos: '명사', example: "I had to show a physical ID since my phone had died.", exampleKo: '휴대폰 배터리가 나가서 실물 신분증을 보여줘야 했어요.', tip: '모바일 신분증과 대비되는, 손으로 만질 수 있는 카드형 신분증' },
      { word: 'even', meaning: '~조차도, ~마저도', pos: '부사', example: "I was so nervous that even a short domestic trip felt overwhelming.", exampleKo: '너무 긴장해서 짧은 국내 여행조차도 부담스럽게 느껴졌어요.', tip: '예상외의 상황을 강조할 때 사용' },
      { word: 'domestic travel', meaning: '국내 여행', pos: '명사', example: "Even domestic travel can teach you a lot about your own country.", exampleKo: '국내 여행조차도 자기 나라에 대해 많은 것을 알려줄 수 있어요.', tip: '반의어: international travel (해외여행)' },
      { word: 'be about to + 동사원형', meaning: '막 ~하려는 참이다', pos: '패턴', example: "I was about to board the plane when I realized I'd left my passport at home.", exampleKo: '비행기에 막 탑승하려던 참에 여권을 집에 두고 온 걸 깨달았어요.', tip: '과거형 was about to는 "하려던 참이었다"' },
      { word: 'guess what?', meaning: '있잖아, 근데 뭔지 알아?', pos: '관용구', example: "Guess what? I actually missed my flight because of that mistake.", exampleKo: '있잖아, 사실 그 실수 때문에 비행기를 놓쳤어요.', tip: '놀랍고 새로운 사실을 말하기 전 상대의 관심을 끄는 표현' },
      { word: 'brought', meaning: '가져왔다 (bring의 과거분사)', pos: '동사', example: "I hadn't brought a printed copy of my boarding pass.", exampleKo: '탑승권 출력본을 가져오지 않았었어요.', tip: '동사 bring(가져오다)의 과거분사형' },
      { word: 'a terrifying feeling', meaning: '겁먹게 되는 느낌, 소름 끼치는 기분', pos: '명사', example: "Realizing I might miss my flight was a terrifying feeling.", exampleKo: '비행기를 놓칠지도 모른다는 걸 깨달은 건 정말 소름 끼치는 기분이었어요.', tip: 'terrifying: 겁먹게 만드는, 소름 끼치는 — 극심한 공포·절망감을 표현' },
      { word: 'would not', meaning: '~하지 못할 것이다 (강한 부정 추측)', pos: '패턴', example: "I realized I would not make it to the gate in time.", exampleKo: '제시간에 게이트에 도착하지 못할 거라는 걸 깨달았어요.', tip: 'will not 대신 과거형 would not을 써서 강한 부정의 추측을 나타냄' },
      { word: "I wouldn't be able to board my flight.", meaning: '비행기에 탑승하지 못할 것이다', pos: '문장', example: "I suddenly realized I wouldn't be able to board my flight without ID.", exampleKo: '신분증 없이는 비행기에 탑승하지 못할 거라는 걸 갑자기 깨달았어요.', tip: 'wouldn\'t: 과거 시점에서 바라본 미래 / be able to: would 뒤에서는 can 대신 사용' },
      { word: 'rushed', meaning: '급히 서둘렀다 (rush의 과거형)', pos: '동사', example: "I rushed to the check-in counter as fast as I could.", exampleKo: '가능한 한 빨리 체크인 카운터로 급히 달려갔어요.', tip: '시간이 촉박해 다급하게 움직이는 모습을 표현하는 동사' },
      { word: 'manage to + 동사원형', meaning: '가까스로, 용케 ~해내다', pos: '패턴', example: "Somehow, I managed to make it to the gate just in time.", exampleKo: '어떻게든 가까스로 제시간에 게이트에 도착했어요.', tip: '단순히 "했다"가 아니라 힘든 상황 속에서 기적적으로 성공했음을 보여주는 뉘앙스' },
      { word: 'print out', meaning: '(종이로) 출력하다, 프린트하다', pos: '구동사', example: "I forgot to print out my boarding pass before leaving home.", exampleKo: '집을 나서기 전에 탑승권을 출력하는 걸 잊어버렸어요.', tip: '컴퓨터·기기에서 종이로 출력한다는 뜻의 구동사(phrasal verb)' },
      { word: 'as it turned out', meaning: '나중에 알고 보니, 결과적으로 드러났듯이', pos: '관용구', example: "As it turned out, I still had plenty of time before boarding closed.", exampleKo: '나중에 알고 보니 탑승 마감까지 시간이 충분히 남아 있었어요.', tip: '지나고 나서 깨달은 사실을 전할 때 쓰는 삽입구' },
      { word: 'necessary for ~', meaning: '~에 필요한', pos: '구', example: "A valid ID is necessary for identity verification at the airport.", exampleKo: '공항에서 신원 확인을 위해서는 유효한 신분증이 필요해요.', tip: '필요조건을 설명하는 형용사구' },
      { word: 'identity verification', meaning: '신원 확인', pos: '명사', example: "The airline staff asked for identity verification before printing my ticket.", exampleKo: '항공사 직원이 티켓을 출력하기 전에 신원 확인을 요청했어요.', tip: '공항·은행 등에서 본인이 맞는지 확인하는 공식 행정 용어' },
      { word: 'boarding pass', meaning: '탑승권', pos: '명사', example: "I couldn't find my boarding pass anywhere in my bag.", exampleKo: '가방 어디에서도 탑승권을 찾을 수 없었어요.', tip: '동사 board(탑승하다)의 명사형이 쓰인 표현' },
      { word: 'caught', meaning: '(교통수단을) 탔다, 잡아탔다 (catch의 과거형)', pos: '동사', example: "I barely caught my connecting flight after all that rushing.", exampleKo: '그렇게 서두른 끝에 겨우 환승 비행기를 탈 수 있었어요.', tip: '시간에 맞춰 딱 잡아탔다는 생동감을 표현하는 catch의 과거형' },
      { word: 'window of time', meaning: '특정 일을 할 수 있는 짧은 기회·시간대, 틈새', pos: '명사', example: "I only had a small window of time to get through security.", exampleKo: '보안 검색대를 통과할 수 있는 짧은 시간밖에 없었어요.', tip: "직역은 '시간의 창문'이지만 짧은 기회의 시간대를 뜻함" },
      { word: 'ruined', meaning: '망쳤다, 엉망으로 만들었다 (ruin의 과거형)', pos: '동사', example: "That mistake almost ruined the entire trip before it even started.", exampleKo: '그 실수가 여행이 시작되기도 전에 여행 전체를 거의 망칠 뻔했어요.', tip: '동사 ruin(망치다)의 과거형' },
      { word: 'before it even started!', meaning: '그것이 시작되기도 전에!', pos: '구', example: "I almost missed my flight before the trip even started!", exampleKo: '여행이 시작되기도 전에 비행기를 놓칠 뻔했어요!', tip: 'even: 심지어 ~조차도, ~하기도 전에 — 첫 단추부터 잘못 끼워질 뻔했다는 뉘앙스' },
      { word: 'Looking back,', meaning: '돌이켜보면', pos: '분사구문', example: "Looking back, that stressful morning actually makes for a funny story now.", exampleKo: '돌이켜보면 그 스트레스 받았던 아침이 지금은 재미있는 이야기가 됐어요.', tip: 'When I look back에서 주어와 접속사를 생략하고 -ing를 붙인 분사구문' },
      { word: 'taught', meaning: '가르쳤다 (teach의 과거형)', pos: '동사', example: "That experience taught me to always double-check my documents.", exampleKo: '그 경험은 항상 서류를 다시 확인하도록 저를 가르쳐줬어요.', tip: '동사 teach(가르치다)의 과거형' },
      { word: 'make sure to + 동사원형', meaning: '반드시 ~하다, 꼭 ~하도록 확실히 해두다', pos: '패턴', example: "Now I always make sure to print my boarding pass the night before.", exampleKo: '이제는 항상 전날 밤에 탑승권을 미리 출력해두도록 확실히 해요.', tip: '어떤 일을 빠뜨리지 않고 확실히 챙길 때 쓰는 표현' },
      { word: 'stand out', meaning: '도드라지다, 눈에 띄다, 특별하다', pos: '구동사', example: "What made that place stand out was the incredible view from the rooftop.", exampleKo: '그 장소를 특별하게 만든 것은 옥상에서 보이는 놀라운 전망이었어요.', tip: '사역동사(made)의 목적격 보어로 동사원형이 쓰인 구조 — "무엇이 ~을 특별하게 만들었나요?"라는 경험 묘사에 자주 사용' }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // Module 9 — 고득점 담화 연결 표현
  // ══════════════════════════════════════════════════════════
  {
    id: 'ov9',
    moduleTitle: '고득점 담화 연결 표현',
    icon: '⭐',
    color: '#4F46E5',
    words: [
      { word: 'come to think of it', meaning: '생각해보니', pos: '관용구', example: "Come to think of it, that was probably the best decision I've ever made.", exampleKo: '생각해보니 그게 아마 제가 내린 최고의 결정이었을 것 같아요.', tip: '= now that I think about it / IH·AL 발화를 자연스럽게 만드는 전환 표현' },
      { word: 'having said that', meaning: '그렇긴 하지만', pos: '관용구', example: "I love living in Seoul. Having said that, it can get overwhelming at times.", exampleKo: '서울에 사는 것을 좋아해요. 그렇긴 하지만 가끔은 압도적일 수 있어요.', tip: '= that said / 앞서 말한 내용을 인정하면서 반대 의견 제시' },
      { word: 'what I love most about', meaning: '~에서 가장 좋아하는 것은', pos: '관용구', example: "What I love most about my neighborhood is how walkable it is.", exampleKo: '동네에서 가장 좋아하는 것은 걸어 다니기 얼마나 좋은지예요.', tip: '"What I love/hate/miss most about..." — OPIc 답변 구조화 필수 표현' },
      { word: 'on top of that', meaning: '게다가', pos: '부사구', example: "The job pays well. On top of that, I get to work from home twice a week.", exampleKo: '직업 보수가 좋아요. 게다가 일주일에 두 번은 재택근무도 할 수 있어요.', tip: '= furthermore, in addition to that / 장점을 추가할 때 사용' },
      { word: 'to be honest', meaning: '솔직히 말하면', pos: '부사구', example: "To be honest, I wasn't sure I'd enjoy solo travel, but I loved it.", exampleKo: '솔직히 말하면 혼자 여행을 즐길 수 있을지 확신하지 못했는데, 정말 좋았어요.', tip: '= frankly, honestly / 자연스럽게 개인적 의견을 도입하는 표현' },
      { word: 'as far as I\'m concerned', meaning: '제 입장에서는', pos: '관용구', example: "As far as I'm concerned, work-life balance is the most important factor.", exampleKo: '제 입장에서는 일-생활 균형이 가장 중요한 요소예요.', tip: '= in my opinion / 자신의 의견을 강조할 때 사용' },
      { word: 'needless to say', meaning: '말할 것도 없이', pos: '관용구', example: "Needless to say, getting that job offer was the highlight of my year.", exampleKo: '말할 것도 없이, 그 취업 제안을 받은 것이 올해의 하이라이트였어요.', tip: '= obviously, of course / 자명한 사실을 강조할 때 사용' },
      { word: 'not to mention', meaning: '말할 것도 없고, ~은 물론이고', pos: '관용구', example: "The neighborhood has great restaurants, not to mention the beautiful parks.", exampleKo: '동네에 훌륭한 식당들이 있어요, 아름다운 공원은 말할 것도 없고요.', tip: '= on top of that / 추가 정보를 자연스럽게 덧붙일 때 사용' },
      { word: 'at the end of the day', meaning: '결국은, 따지고 보면', pos: '관용구', example: "At the end of the day, what matters most is that you're happy.", exampleKo: '결국은 가장 중요한 것은 당신이 행복한 것이에요.', tip: '= ultimately / 답변 마무리나 결론 제시 시 자연스러운 표현' },
      { word: 'for what it\'s worth', meaning: '도움이 될지 모르겠지만', pos: '관용구', example: "For what it's worth, I think taking risks is essential to growth.", exampleKo: '도움이 될지 모르겠지만, 위험을 감수하는 것이 성장에 필수적이라고 생각해요.', tip: '의견을 겸손하게 제시할 때 사용 — AL 수준 표현' },
      { word: 'in contrast', meaning: '반면에, 대조적으로', pos: '부사구', example: "My sister loves cities. In contrast, I prefer quieter, smaller towns.", exampleKo: '제 언니는 도시를 좋아해요. 반면에 저는 더 조용하고 작은 마을을 선호해요.', tip: '= on the other hand / 비교·대조 답변에서 필수 전환 표현' },
      { word: 'interestingly', meaning: '흥미롭게도', pos: '부사', example: "Interestingly, the hobby I hated at first became my biggest passion.", exampleKo: '흥미롭게도 처음에 싫어했던 취미가 제 가장 큰 열정이 됐어요.', tip: '= surprisingly / 예상 밖의 결과를 도입할 때 사용' },
      { word: 'regardless', meaning: '그럼에도 불구하고, 상관없이', pos: '부사', example: "Regardless of the challenges, I'm glad I took on that project.", exampleKo: '어려움에도 불구하고 그 프로젝트를 맡아서 기뻐요.', tip: '= despite that, nevertheless / 반론을 인정하며 입장 유지할 때' },
      { word: 'come a long way', meaning: '많이 발전하다', pos: '관용구', example: "Looking back, I think I've come a long way since I started this job.", exampleKo: '돌아보면 이 일을 시작한 이후 많이 발전했다고 생각해요.', tip: '개인적 성장 표현의 핵심 관용구 — IH·AL 필수' },
      { word: 'in the grand scheme of things', meaning: '큰 그림에서 보면, 전체적으로 보면', pos: '관용구', example: "In the grand scheme of things, that setback wasn't so bad after all.", exampleKo: '전체적으로 보면 그 좌절이 결국 그렇게 나쁜 것은 아니었어요.', tip: '= overall, in the big picture / AL 수준의 성찰 표현' },
      { word: 'shed light on', meaning: '~을 밝혀주다, 명확하게 하다', pos: '구동사', example: "That experience shed light on how important communication really is.", exampleKo: '그 경험이 의사소통이 얼마나 중요한지 밝혀줬어요.', tip: 'IH·AL 목표 필수 표현 — 경험에서 교훈을 도출할 때 사용' }
    ]
  }

];
