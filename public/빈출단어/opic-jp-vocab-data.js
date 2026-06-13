// ── OPIc 日本語 주제별 핵심 표현 ─────────────────────────────
// 12개 모듈 · 가나 일람표 + 주제별 핵심 일본어 표현

const OPIC_JP_VOCAB_MODULES = [

  // ══════════════════════════════════════════════════════════
  // Module 0a — ひらがな一覧表 (테이블 형식)
  // ══════════════════════════════════════════════════════════
  {
    id: 'ojv_hira', moduleTitle: 'ひらがな一覧表', icon: 'あ', color: '#0369A1',
    type: 'kana-table', kanaType: 'hiragana', words: []
  },

  // ══════════════════════════════════════════════════════════
  // Module 0b — カタカナ一覧表 (테이블 형식)
  // ══════════════════════════════════════════════════════════
  {
    id: 'ojv_kata', moduleTitle: 'カタカナ一覧表', icon: 'ア', color: '#7C3AED',
    type: 'kana-table', kanaType: 'katakana', words: []
  },

  // ══════════════════════════════════════════════════════════
  // Module 1 — 自己紹介・基本表現
  // ══════════════════════════════════════════════════════════
  {
    id: 'ojv1', moduleTitle: '自己紹介・基本表現', icon: '🙋', color: '#DC2626',
    words: [
      { word: '〜と申します', meaning: '~라고 합니다 (정중한 자기소개)', pos: '표현', example: 'はじめまして、キムと申します。', exampleKo: '처음 뵙겠습니다, 김이라고 합니다.', tip: '"〜と言います"보다 정중 — OPIc 자기소개 필수', imageUrl: 'https://images.pexels.com/photos/7318961/pexels-photo-7318961.jpeg?auto=compress&cs=tinysrgb&h=350', imageAlt: '명함을 들고 환하게 웃는 여성' },
      { word: '〜に住んでいます', meaning: '~에 살고 있습니다', pos: '표현', example: 'ソウルの麻浦区に住んでいます。', exampleKo: '서울 마포구에 살고 있습니다.', tip: '현재 거주지 표현의 기본 패턴', imageUrl: 'https://images.pexels.com/photos/36110470/pexels-photo-36110470.jpeg?auto=compress&cs=tinysrgb&h=350', imageAlt: '발코니가 있는 현대식 아파트 건물' },
      { word: '〜に勤めています', meaning: '~에 다니고 있습니다', pos: '표현', example: 'IT関連の会社に勤めています。', exampleKo: 'IT 관련 회사에 다니고 있습니다.', tip: '"〜で働いています"와 함께 사용 — 직업 소개 필수', imageUrl: 'https://images.pexels.com/photos/37551480/pexels-photo-37551480.jpeg?auto=compress&cs=tinysrgb&h=350', imageAlt: '도심 골목을 걷는 직장인' },
      { word: '〜として働いています', meaning: '~로서 일하고 있습니다', pos: '표현', example: 'デザイナーとして働いています。', exampleKo: '디자이너로 일하고 있습니다.', tip: '"〜の仕事をしています"와 함께 사용', imageUrl: 'https://images.pexels.com/photos/16313507/pexels-photo-16313507.jpeg?auto=compress&cs=tinysrgb&h=350', imageAlt: '태블릿과 노트북으로 작업 중인 디자이너' },
      { word: '〜を専攻しています', meaning: '~를 전공하고 있습니다', pos: '표현', example: '経済学を専攻しています。', exampleKo: '경제학을 전공하고 있습니다.', tip: '"〜を専攻" — 학생 자기소개 필수 표현', imageUrl: 'https://images.pexels.com/photos/37811260/pexels-photo-37811260.jpeg?auto=compress&cs=tinysrgb&h=350', imageAlt: '대학 강의실에서 필기 중인 학생' },
      { word: '〜大学の〜学部に在学しています', meaning: '~대학 ~학부에 재학 중입니다', pos: '표현', example: '○○大学の経営学部に在学しています。', exampleKo: '○○대학교 경영학부에 재학 중입니다.', tip: '학교·학부 정보를 한 문장으로 전달하는 패턴', imageUrl: 'https://images.pexels.com/photos/19554793/pexels-photo-19554793.jpeg?auto=compress&cs=tinysrgb&h=350', imageAlt: '단풍으로 둘러싸인 역사적인 대학 건물' },
      { word: '趣味は〜です', meaning: '취미는 ~입니다', pos: '표현', example: '趣味は料理と旅行です。', exampleKo: '취미는 요리와 여행입니다.', tip: '"〜が趣味です"와 교체 가능', imageUrl: 'https://images.pexels.com/photos/3769718/pexels-photo-3769718.jpeg?auto=compress&cs=tinysrgb&h=350', imageAlt: '창가에서 반죽을 치대는 여성' },
      { word: '〜が好きで、よく〜します', meaning: '~를 좋아해서 자주 ~합니다', pos: '표현', example: '音楽が好きで、よくライブに行きます。', exampleKo: '음악을 좋아해서 자주 라이브 공연에 갑니다.', tip: '취미를 이유와 함께 자연스럽게 연결', imageUrl: 'https://images.pexels.com/photos/4218027/pexels-photo-4218027.jpeg?auto=compress&cs=tinysrgb&h=350', imageAlt: '화려한 무대의 라이브 콘서트' },
      { word: 'もともと〜出身です', meaning: '원래 ~ 출신입니다', pos: '표현', example: 'もともと釜山出身ですが、今はソウルに住んでいます。', exampleKo: '원래 부산 출신이지만, 지금은 서울에 살고 있습니다.', tip: '출신지 소개 시 현재 거주지와 자연스럽게 연결', imageUrl: 'https://images.pexels.com/photos/346820/pexels-photo-346820.jpeg?auto=compress&cs=tinysrgb&h=350', imageAlt: '지도를 살펴보는 여행자' },
      { word: '〜人家族です', meaning: '~인 가족입니다', pos: '표현', example: '私は4人家族で、両親と妹と一緒に住んでいます。', exampleKo: '저는 4인 가족으로, 부모님과 여동생과 함께 살고 있습니다.', tip: '가족 구성 소개의 기본 패턴', imageUrl: 'https://images.pexels.com/photos/6388343/pexels-photo-6388343.jpeg?auto=compress&cs=tinysrgb&h=350', imageAlt: '크리스마스 거실에서 함께 포즈를 취하는 행복한 가족' },
      { word: '一人暮らしをしています', meaning: '혼자 살고 있습니다 (자취)', pos: '표현', example: '大学の近くで一人暮らしをしています。', exampleKo: '대학교 근처에서 자취하고 있습니다.', tip: '"家族と一緒に住んでいます"의 반대 표현 — 상황에 맞게 선택', imageUrl: 'https://images.pexels.com/photos/6716218/pexels-photo-6716218.jpeg?auto=compress&cs=tinysrgb&h=350', imageAlt: '혼자 침대에 앉아 담요를 두른 여성' },
      { word: '〜年になります', meaning: '~년이 됩니다', pos: '표현', example: 'この会社に勤めて3年になります。', exampleKo: '이 회사에 다닌 지 3년이 됩니다.', tip: '경력·기간을 표현하는 패턴 — 시작 시점도 함께 말하면 더욱 자연스러움', imageUrl: 'https://images.pexels.com/photos/32417515/pexels-photo-32417515.jpeg?auto=compress&cs=tinysrgb&h=350', imageAlt: '2025 숫자를 나타내는 나무 블록' },
      { word: '将来は〜したいと思っています', meaning: '장래에는 ~하고 싶다고 생각하고 있습니다', pos: '표현', example: '将来は海外で働きたいと思っています。', exampleKo: '장래에는 해외에서 일하고 싶다고 생각하고 있습니다.', tip: '미래 목표·희망을 자연스럽게 추가해 답변 풍부하게', imageUrl: 'https://images.pexels.com/photos/6185466/pexels-photo-6185466.jpeg?auto=compress&cs=tinysrgb&h=350', imageAlt: 'My Dream My Future 글자 블록' },
      { word: 'こんな感じです', meaning: '이런 식입니다 (마무리)', pos: '표현', example: '毎日こんな感じで過ごしています。', exampleKo: '매일 이런 식으로 보내고 있습니다.', tip: '자연스러운 구어체 마무리 표현', imageUrl: 'https://images.pexels.com/photos/6340713/pexels-photo-6340713.jpeg?auto=compress&cs=tinysrgb&h=350', imageAlt: '카페 창가에서 대화하는 세 친구' },
      { word: 'どうぞよろしくお願いします', meaning: '잘 부탁드립니다', pos: '표현', example: 'はじめまして。どうぞよろしくお願いします。', exampleKo: '처음 뵙겠습니다. 잘 부탁드립니다.', tip: '자기소개의 정석 마무리 표현', imageUrl: 'https://images.pexels.com/photos/7045558/pexels-photo-7045558.jpeg?auto=compress&cs=tinysrgb&h=350', imageAlt: '도장에서 서로 인사하는 아이와 사범님' }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // Module 2 — 日課・ルーティン表現
  // ══════════════════════════════════════════════════════════
  {
    id: 'ojv2', moduleTitle: '日課・ルーティン表現', icon: '📅', color: '#7C3AED',
    words: [
      { word: '〜頃に起きます', meaning: '~쯤에 일어납니다', pos: '표현', example: '毎朝7時頃に起きます。', exampleKo: '매일 아침 7시쯤에 일어납니다.', tip: '"ごろ"는 어림잡은 시간 — "大体"와 함께 자주 사용', imageUrl: 'https://images.pexels.com/photos/1028741/pexels-photo-1028741.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: 'まず〜、それから〜', meaning: '우선 ~, 그러고 나서 ~', pos: '연결 표현', example: 'まずシャワーを浴びて、それから朝ごはんを食べます。', exampleKo: '우선 샤워를 하고, 그러고 나서 아침을 먹습니다.', tip: '하루 일과를 순서대로 설명하는 기본 연결 패턴', imageUrl: 'https://images.pexels.com/photos/13335440/pexels-photo-13335440.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '〜で通勤しています', meaning: '~로 통근하고 있습니다', pos: '표현', example: '地下鉄で会社まで40分かけて通勤しています。', exampleKo: '지하철로 회사까지 40분 걸려서 통근하고 있습니다.', tip: '"〜で"는 교통 수단의 조사 — 버스, 電車, 徒歩도 가능', imageUrl: 'https://images.pexels.com/photos/19585349/pexels-photo-19585349.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '〜を済ませてから', meaning: '~를 끝마치고 나서', pos: '표현', example: '家事を済ませてから、仕事に取り掛かります。', exampleKo: '집안일을 끝마치고 나서 일을 시작합니다.', tip: '일과의 순서를 자연스럽게 나타내는 표현', imageUrl: 'https://images.pexels.com/photos/5591838/pexels-photo-5591838.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '帰りに〜に寄ります', meaning: '돌아오는 길에 ~에 들릅니다', pos: '표현', example: '帰りにスーパーに寄って食材を買います。', exampleKo: '돌아오는 길에 슈퍼에 들러 식재료를 삽니다.', tip: '출퇴근 루틴을 구체적으로 묘사할 때 유용', imageUrl: 'https://images.pexels.com/photos/4124939/pexels-photo-4124939.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '週に〜回', meaning: '일주일에 ~번', pos: '표현', example: '週に3回ジムに行きます。', exampleKo: '일주일에 3번 헬스장에 갑니다.', tip: '빈도 표현 필수 패턴 — 취미 묘사에도 자주 사용', imageUrl: 'https://images.pexels.com/photos/6690930/pexels-photo-6690930.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '〜ようにしています', meaning: '~하도록 하고 있습니다', pos: '표현', example: '毎日11時には寝るようにしています。', exampleKo: '매일 11시에는 자도록 하고 있습니다.', tip: '의식적인 노력·습관을 나타내는 필수 표현', imageUrl: 'https://images.pexels.com/photos/6668919/pexels-photo-6668919.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '〜たり〜たりしています', meaning: '~하거나 ~하거나 하고 있습니다', pos: '표현', example: '夜は本を読んだり、動画を見たりしています。', exampleKo: '밤에는 책을 읽거나 동영상을 보거나 하고 있습니다.', tip: '여러 활동을 자연스럽게 나열하는 핵심 패턴', imageUrl: 'https://images.pexels.com/photos/27175965/pexels-photo-27175965.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '休日は主に〜で過ごします', meaning: '휴일에는 주로 ~에서 보냅니다', pos: '표현', example: '休日は主に家でゆっくり過ごします。', exampleKo: '휴일에는 주로 집에서 느긋하게 보냅니다.', tip: '주말·휴일 루틴 표현에 꼭 등장하는 패턴', imageUrl: 'https://images.pexels.com/photos/36730540/pexels-photo-36730540.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '規則正しい生活を心がけています', meaning: '규칙 바른 생활을 하려고 노력합니다', pos: '표현', example: '健康のために、規則正しい生活を心がけています。', exampleKo: '건강을 위해 규칙 바른 생활을 하려고 노력합니다.', tip: '생활 습관을 말할 때 고급스럽게 표현하는 방법', imageUrl: 'https://images.pexels.com/photos/34395918/pexels-photo-34395918.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '気分転換になります', meaning: '기분 전환이 됩니다', pos: '표현', example: '散歩すると気分転換になって、すっきりします。', exampleKo: '산책하면 기분 전환이 되어서 개운해집니다.', tip: '취미·여가의 효과를 설명하는 자연스러운 표현', imageUrl: 'https://images.pexels.com/photos/38078982/pexels-photo-38078982.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: 'すっきりします', meaning: '개운해집니다, 상쾌해집니다', pos: '표현', example: 'お風呂に入るとすっきりします。', exampleKo: '목욕을 하면 개운해집니다.', tip: '몸·정신이 상쾌해지는 느낌 표현 — OPIc 단골', imageUrl: 'https://images.pexels.com/photos/5269515/pexels-photo-5269515.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: 'えーと / そうですね', meaning: '음 / 글쎄요 (생각할 때)', pos: '필러', example: 'えーと、趣味はですね…料理です。', exampleKo: '음, 취미는요… 요리입니다.', tip: '침묵 대신 사용 — 자연스러운 일본어 필러', imageUrl: 'https://images.pexels.com/photos/12740344/pexels-photo-12740344.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '〜の楽しみです', meaning: '~의 즐거움입니다', pos: '표현', example: 'コーヒーを飲みながら新聞を読むのが朝の楽しみです。', exampleKo: '커피를 마시며 신문을 읽는 것이 아침의 즐거움입니다.', tip: '일상의 소소한 기쁨을 표현하는 감성적인 표현', imageUrl: 'https://images.pexels.com/photos/8002524/pexels-photo-8002524.png?auto=compress&cs=tinysrgb&h=350' },
      { word: '〜時間ほどかかります', meaning: '~시간 정도 걸립니다', pos: '표현', example: '通勤に1時間ほどかかります。', exampleKo: '통근에 1시간 정도 걸립니다.', tip: '"〜分かかります"도 동일하게 사용 — 이동 시간 표현 필수', imageUrl: 'https://images.pexels.com/photos/13211183/pexels-photo-13211183.jpeg?auto=compress&cs=tinysrgb&h=350' }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // Module 3 — 住まい・場所の表現
  // ══════════════════════════════════════════════════════════
  {
    id: 'ojv3', moduleTitle: '住まい・場所の表現', icon: '🏠', color: '#059669',
    words: [
      { word: '〜LDKのマンション', meaning: '~LDK 아파트/맨션', pos: '표현', example: '2LDKのマンションに住んでいます。', exampleKo: '2LDK 아파트에 살고 있습니다.', tip: 'LDK = 거실(L)+식당(D)+주방(K) — 일본식 간표기', imageUrl: 'https://images.pexels.com/photos/8146330/pexels-photo-8146330.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '日当たりがいい', meaning: '햇볕이 잘 든다', pos: '표현', example: 'リビングは日当たりがよくて、明るいです。', exampleKo: '거실은 햇볕이 잘 들어서 밝습니다.', tip: '집 내부 묘사의 단골 표현 — 매우 자주 등장', imageUrl: 'https://images.pexels.com/photos/3284980/pexels-photo-3284980.png?auto=compress&cs=tinysrgb&h=350' },
      { word: '家族と一緒に住んでいます', meaning: '가족과 함께 살고 있습니다', pos: '표현', example: '両親と姉の4人で一緒に住んでいます。', exampleKo: '부모님과 언니, 네 명이서 함께 살고 있습니다.', tip: '거주 형태를 설명하는 기본 표현', imageUrl: 'https://images.pexels.com/photos/3875141/pexels-photo-3875141.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '徒歩〜分のところに', meaning: '걸어서 ~분 거리에', pos: '표현', example: '駅まで徒歩5分のところに住んでいます。', exampleKo: '역까지 걸어서 5분 거리에 살고 있습니다.', tip: '동네 편의성 표현 핵심 패턴', imageUrl: 'https://images.pexels.com/photos/13092666/pexels-photo-13092666.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '交通の便がいい', meaning: '교통이 편리하다', pos: '표현', example: 'この辺は交通の便がとてもいいです。', exampleKo: '이 근처는 교통이 매우 편리합니다.', tip: '동네 장점 설명에 가장 자주 쓰이는 표현', imageUrl: 'https://images.pexels.com/photos/17248713/pexels-photo-17248713.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '住みやすい', meaning: '살기 좋다', pos: '표현', example: '静かで住みやすいところだと思います。', exampleKo: '조용하고 살기 좋은 곳이라고 생각합니다.', tip: '거주지 묘사의 마무리 표현으로 자주 사용', imageUrl: 'https://images.pexels.com/photos/35005693/pexels-photo-35005693.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '一番気に入っているのは〜', meaning: '가장 마음에 드는 것은 ~', pos: '표현', example: '一番気に入っているのはベランダです。', exampleKo: '가장 마음에 드는 것은 발코니입니다.', tip: '집에서 가장 좋아하는 공간·특징을 말할 때 사용', imageUrl: 'https://images.pexels.com/photos/12276832/pexels-photo-12276832.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '〜が充実しています', meaning: '~이 잘 갖춰져 있습니다', pos: '표현', example: '近くにスーパーや病院など生活施設が充実しています。', exampleKo: '근처에 슈퍼나 병원 등 생활 편의시설이 잘 갖춰져 있습니다.', tip: '동네 편의시설을 설명하는 고급 표현', imageUrl: 'https://images.pexels.com/photos/3129802/pexels-photo-3129802.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: 'ちょっと不便なのは〜', meaning: '조금 불편한 것은 ~', pos: '표현', example: 'ちょっと不便なのは駐車場が少ないことです。', exampleKo: '조금 불편한 것은 주차장이 적다는 것입니다.', tip: '단점을 정중하게 언급하는 표현 — 답변에 균형감 부여', imageUrl: 'https://images.pexels.com/photos/5231181/pexels-photo-5231181.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '賑やか / 静か', meaning: '번화하다 / 조용하다', pos: '형용사', example: 'この辺はとても賑やかで、いつも人が多いです。', exampleKo: '이 근처는 매우 번화하고 항상 사람이 많습니다.', tip: '동네 분위기 묘사의 기본 대조 어휘', imageUrl: 'https://images.pexels.com/photos/3029940/pexels-photo-3029940.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '治安がいいところです', meaning: '치안이 좋은 곳입니다', pos: '표현', example: '子供も安心して遊べるぐらい治安がいいです。', exampleKo: '아이들도 안심하고 놀 수 있을 만큼 치안이 좋습니다.', tip: '동네 안전성을 언급하면 묘사가 더 풍부해짐', imageUrl: 'https://images.pexels.com/photos/33711126/pexels-photo-33711126.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '築〜年のマンション', meaning: '지은 지 ~년 된 아파트', pos: '표현', example: '築5年の比較的新しいマンションです。', exampleKo: '지은 지 5년 된 비교적 새로운 아파트입니다.', tip: '"築〜年"(지은 연수) — 건물 상태를 설명하는 자연스러운 표현', imageUrl: 'https://images.pexels.com/photos/5674684/pexels-photo-5674684.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '緑が多いところです', meaning: '녹지가 많은 곳입니다', pos: '표현', example: '公園や木が多くて、緑が豊かなところです。', exampleKo: '공원이나 나무가 많아서 녹지가 풍부한 곳입니다.', tip: '자연 환경을 설명하는 표현 — 동네 묘사 포인트 추가', imageUrl: 'https://images.pexels.com/photos/12695321/pexels-photo-12695321.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '近所に〜があります', meaning: '근처에 ~가 있습니다', pos: '표현', example: '近所に大きな公園とスーパーがあって便利です。', exampleKo: '근처에 큰 공원과 슈퍼가 있어서 편리합니다.', tip: '주변 편의시설을 나열하는 패턴', imageUrl: 'https://images.pexels.com/photos/33810489/pexels-photo-33810489.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '新しく建てられた', meaning: '새로 지어진', pos: '표현', example: 'マンションは比較的新しく建てられたほうです。', exampleKo: '아파트는 비교적 새로 지어진 편입니다.', tip: '건물 상태를 설명하는 자연스러운 표현', imageUrl: 'https://images.pexels.com/photos/12843084/pexels-photo-12843084.jpeg?auto=compress&cs=tinysrgb&h=350' }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // Module 4 — 趣味・余暇表現
  // ══════════════════════════════════════════════════════════
  {
    id: 'ojv4', moduleTitle: '趣味・余暇表現', icon: '🎯', color: '#D97706',
    words: [
      { word: '〜にはまっています', meaning: '~에 빠져 있습니다', pos: '표현', example: '最近、写真にはまっています。', exampleKo: '최근에 사진에 빠져 있습니다.', tip: '= 〜に夢中です — 최근 빠진 취미를 말할 때 자연스러운 표현', imageUrl: 'https://images.pexels.com/photos/30548783/pexels-photo-30548783.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '〜のが好きです', meaning: '~하는 것을 좋아합니다', pos: '표현', example: '料理するのが好きです。', exampleKo: '요리하는 것을 좋아합니다.', tip: '동사+のが好き — OPIc 취미 표현 가장 기본 패턴', imageUrl: 'https://images.pexels.com/photos/3770002/pexels-photo-3770002.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '〜に興味があります', meaning: '~에 흥미가 있습니다', pos: '표현', example: '最近、日本の伝統文化に興味があります。', exampleKo: '최근에 일본 전통 문화에 흥미가 있습니다.', tip: '"〜にはまっています"보다 가벼운 관심 표현', imageUrl: 'https://images.pexels.com/photos/37252660/pexels-photo-37252660.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '始めて〜になります', meaning: '시작한 지 ~가 됩니다', pos: '표현', example: 'ランニングを始めて2年になります。', exampleKo: '달리기를 시작한 지 2년이 됩니다.', tip: '취미 시작 시점을 표현하는 패턴', imageUrl: 'https://images.pexels.com/photos/4853112/pexels-photo-4853112.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: 'きっかけは〜でした', meaning: '계기는 ~이었습니다', pos: '표현', example: 'きっかけは友達に誘われたことでした。', exampleKo: '계기는 친구가 권해서였습니다.', tip: '취미를 시작한 계기를 설명하는 핵심 표현', imageUrl: 'https://images.pexels.com/photos/5506091/pexels-photo-5506091.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: 'リラックスできます', meaning: '긴장이 풀립니다', pos: '표현', example: '音楽を聴くとリラックスできます。', exampleKo: '음악을 들으면 긴장이 풀립니다.', tip: '취미의 효과를 설명하는 필수 표현', imageUrl: 'https://images.pexels.com/photos/8001285/pexels-photo-8001285.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: 'ストレス解消になります', meaning: '스트레스 해소가 됩니다', pos: '표현', example: 'スポーツはストレス解消になるのでよくやっています。', exampleKo: '스포츠는 스트레스 해소가 되어서 자주 하고 있습니다.', tip: '취미를 계속하는 이유 설명에 빈출', imageUrl: 'https://images.pexels.com/photos/9545914/pexels-photo-9545914.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '上達してきました', meaning: '실력이 늘어왔습니다', pos: '표현', example: '練習を続けるうちに、だんだん上達してきました。', exampleKo: '연습을 계속하는 사이에 점점 실력이 늘어왔습니다.', tip: '성장·발전 과정을 나타내는 표현', imageUrl: 'https://images.pexels.com/photos/6540725/pexels-photo-6540725.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '腕を磨いています', meaning: '실력을 갈고 닦고 있습니다', pos: '표현', example: '週末に料理教室に通って腕を磨いています。', exampleKo: '주말에 요리 교실에 다니면서 실력을 갈고 닦고 있습니다.', tip: '적극적으로 실력 향상에 노력하는 모습을 표현', imageUrl: 'https://images.pexels.com/photos/37138035/pexels-photo-37138035.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '〜を通じて〜ようになりました', meaning: '~를 통해 ~하게 됐습니다', pos: '표현', example: 'この趣味を通じて、視野が広がるようになりました。', exampleKo: '이 취미를 통해 시야가 넓어지게 됐습니다.', tip: '취미의 성장·변화를 표현하는 고급 패턴', imageUrl: 'https://images.pexels.com/photos/9707946/pexels-photo-9707946.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '気に入っています', meaning: '마음에 들고 있습니다', pos: '표현', example: 'この趣味がとても気に入っています。', exampleKo: '이 취미가 매우 마음에 들고 있습니다.', tip: '= 好きです의 다른 표현 — 약간 더 고급스러운 어감', imageUrl: 'https://images.pexels.com/photos/3772535/pexels-photo-3772535.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: 'これからも続けていきたい', meaning: '앞으로도 계속해 나가고 싶다', pos: '표현', example: 'この趣味はこれからも続けていきたいと思います。', exampleKo: '이 취미는 앞으로도 계속해 나가고 싶다고 생각합니다.', tip: '취미 답변 마무리 표현', imageUrl: 'https://images.pexels.com/photos/684363/pexels-photo-684363.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '〜を楽しんでいます', meaning: '~를 즐기고 있습니다', pos: '표현', example: '休日はカメラを持って街歩きを楽しんでいます。', exampleKo: '휴일에는 카메라를 들고 거리 탐방을 즐기고 있습니다.', tip: '현재 취미를 진행 중인 형태로 묘사하는 표현', imageUrl: 'https://images.pexels.com/photos/37715147/pexels-photo-37715147.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: 'うまくなりたいと思っています', meaning: '잘하고 싶다고 생각하고 있습니다', pos: '표현', example: 'もっとギターがうまくなりたいと思っています。', exampleKo: '기타를 더 잘하고 싶다고 생각하고 있습니다.', tip: '취미에 대한 열의와 목표를 표현', imageUrl: 'https://images.pexels.com/photos/7521075/pexels-photo-7521075.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '〜を見るだけでも楽しいです', meaning: '~를 보는 것만으로도 즐겁습니다', pos: '표현', example: '試合に出なくても、サッカーを見るだけでも楽しいです。', exampleKo: '경기에 출전하지 않더라도, 축구를 보는 것만으로도 즐겁습니다.', tip: '취미를 한층 더 생생하게 표현하는 패턴', imageUrl: 'https://images.pexels.com/photos/38024550/pexels-photo-38024550.jpeg?auto=compress&cs=tinysrgb&h=350' }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // Module 5 — 旅行表現
  // ══════════════════════════════════════════════════════════
  {
    id: 'ojv5', moduleTitle: '旅行表現', icon: '✈️', color: '#0284C7',
    words: [
      { word: '〜に行ったことがあります', meaning: '~에 간 적이 있습니다', pos: '표현', example: '京都に行ったことがあります。', exampleKo: '교토에 간 적이 있습니다.', tip: '경험을 나타내는 〜たことがある — 여행 경험 표현 기본', imageUrl: 'https://images.pexels.com/photos/23848586/pexels-photo-23848586.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '〜で有名な場所です', meaning: '~으로 유명한 곳입니다', pos: '표현', example: '京都は歴史と文化で有名な場所です。', exampleKo: '교토는 역사와 문화로 유명한 곳입니다.', tip: '여행지 소개의 기본 패턴', imageUrl: 'https://images.pexels.com/photos/16977467/pexels-photo-16977467.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '〜に感動しました', meaning: '~에 감동했습니다', pos: '표현', example: '絶景に感動して、思わず涙が出ました。', exampleKo: '절경에 감동해서 나도 모르게 눈물이 났습니다.', tip: '여행에서 받은 감동을 구체적으로 표현', imageUrl: 'https://images.pexels.com/photos/32496226/pexels-photo-32496226.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '現地の食べ物が美味しかった', meaning: '현지 음식이 맛있었다', pos: '표현', example: '現地の食べ物が美味しくて、毎食楽しみました。', exampleKo: '현지 음식이 맛있어서 매 끼니가 즐거웠습니다.', tip: '여행 묘사에서 음식 언급은 자연스러운 추가 포인트', imageUrl: 'https://images.pexels.com/photos/13752942/pexels-photo-13752942.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '旅行の計画を立てます', meaning: '여행 계획을 세웁니다', pos: '표현', example: '行く前に必ず旅行の計画を立てるようにしています。', exampleKo: '가기 전에 반드시 여행 계획을 세우도록 하고 있습니다.', tip: '여행 준비 습관을 묘사하는 표현', imageUrl: 'https://images.pexels.com/photos/7368308/pexels-photo-7368308.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: 'あらかじめ〜を調べておきました', meaning: '미리 ~를 조사해두었습니다', pos: '표현', example: 'あらかじめ名所や食事処を調べておきました。', exampleKo: '미리 명소와 식당을 조사해두었습니다.', tip: '사전 준비를 표현 — "〜ておく"는 미리 해두는 동작', imageUrl: 'https://images.pexels.com/photos/10182684/pexels-photo-10182684.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '印象に残っています', meaning: '인상에 남아 있습니다', pos: '표현', example: '景色がとても美しくて、今でも印象に残っています。', exampleKo: '경치가 매우 아름다워서, 지금도 인상에 남아 있습니다.', tip: '기억에 남는 경험을 표현하는 핵심 표현', imageUrl: 'https://images.pexels.com/photos/20368160/pexels-photo-20368160.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '文化に触れることができます', meaning: '문화를 접할 수 있습니다', pos: '표현', example: '旅行すると、その国の文化に触れることができます。', exampleKo: '여행하면 그 나라의 문화를 접할 수 있습니다.', tip: '여행의 가치를 설명하는 고급 표현', imageUrl: 'https://images.pexels.com/photos/34735512/pexels-photo-34735512.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: 'また行きたいと思っています', meaning: '또 가고 싶다고 생각하고 있습니다', pos: '표현', example: 'とても良かったので、また行きたいと思っています。', exampleKo: '매우 좋았기 때문에 또 가고 싶다고 생각하고 있습니다.', tip: '여행 마무리 표현의 기본 패턴', imageUrl: 'https://images.pexels.com/photos/3927483/pexels-photo-3927483.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '視野が広がります', meaning: '시야가 넓어집니다', pos: '표현', example: '旅行をすると、視野が広がると思います。', exampleKo: '여행을 하면 시야가 넓어진다고 생각합니다.', tip: '여행의 가치를 설명하는 고급 표현 — IH 목표 필수', imageUrl: 'https://images.pexels.com/photos/10741760/pexels-photo-10741760.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '思い出に残る旅でした', meaning: '추억에 남는 여행이었습니다', pos: '표현', example: 'とても楽しくて、思い出に残る旅になりました。', exampleKo: '매우 즐거워서 추억에 남는 여행이 됐습니다.', tip: '여행 경험 마무리의 정석 표현', imageUrl: 'https://images.pexels.com/photos/2874998/pexels-photo-2874998.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '〜泊〜日の旅行でした', meaning: '~박 ~일 여행이었습니다', pos: '표현', example: '友達と3泊4日の旅行をしました。', exampleKo: '친구와 3박 4일 여행을 했습니다.', tip: '"〜泊〜日" 형식으로 여행 기간을 자연스럽게 표현', imageUrl: 'https://images.pexels.com/photos/7787413/pexels-photo-7787413.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: 'どちらかというと', meaning: '굳이 따지자면', pos: '표현', example: 'どちらかというと、一人旅の方が好きです。', exampleKo: '굳이 따지자면, 혼자 여행하는 쪽이 좋습니다.', tip: '선호를 말할 때 어느 한쪽을 단정하지 않는 자연스러운 표현', imageUrl: 'https://images.pexels.com/photos/9594950/pexels-photo-9594950.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '〜に行ってきました', meaning: '~에 다녀왔습니다', pos: '표현', example: '先月、家族と済州島に行ってきました。', exampleKo: '지난달에 가족과 제주도에 다녀왔습니다.', tip: '"行ってきた" = 갔다가 돌아온 것 — "行った"보다 더 자연스러운 표현', imageUrl: 'https://images.pexels.com/photos/7010180/pexels-photo-7010180.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: 'ガイドブックに載っていない場所', meaning: '가이드북에 나오지 않는 장소', pos: '표현', example: 'ガイドブックに載っていない隠れた名所を見つけました。', exampleKo: '가이드북에 나오지 않는 숨겨진 명소를 찾았습니다.', tip: 'IH·AL 목표라면 알아야 할 고급 여행 표현', imageUrl: 'https://images.pexels.com/photos/31223133/pexels-photo-31223133.jpeg?auto=compress&cs=tinysrgb&h=350' }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // Module 6 — 職場・学校表現
  // ══════════════════════════════════════════════════════════
  {
    id: 'ojv6', moduleTitle: '職場・学校表現', icon: '💼', color: '#5B21B6',
    words: [
      { word: 'やりがいがあります', meaning: '보람이 있습니다', pos: '표현', example: '大変ですが、とてもやりがいのある仕事です。', exampleKo: '힘들지만 매우 보람 있는 일입니다.', tip: '직업 만족도를 표현하는 핵심 어휘 — OPIc 단골', imageUrl: 'https://images.pexels.com/photos/5717831/pexels-photo-5717831.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '〜を担当しています', meaning: '~를 담당하고 있습니다', pos: '표현', example: '主にSNSマーケティングを担当しています。', exampleKo: '주로 SNS 마케팅을 담당하고 있습니다.', tip: '업무 내용을 간결하게 전달하는 핵심 표현', imageUrl: 'https://images.pexels.com/photos/7581006/pexels-photo-7581006.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '主に〜をしています', meaning: '주로 ~을 하고 있습니다', pos: '표현', example: '主にパソコンでデザインの作業をしています。', exampleKo: '주로 컴퓨터로 디자인 작업을 하고 있습니다.', tip: '주요 업무를 설명하는 기본 패턴', imageUrl: 'https://images.pexels.com/photos/7658310/pexels-photo-7658310.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: 'チームで協力して', meaning: '팀으로 협력해서', pos: '표현', example: 'チームで協力してプロジェクトを進めています。', exampleKo: '팀으로 협력해서 프로젝트를 진행하고 있습니다.', tip: '업무 협력 방식을 설명하는 표현', imageUrl: 'https://images.pexels.com/photos/30688593/pexels-photo-30688593.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '残業することもあります', meaning: '야근하는 경우도 있습니다', pos: '표현', example: '繁忙期には残業することもありますが、やりがいを感じます。', exampleKo: '성수기에는 야근하는 경우도 있지만, 보람을 느낍니다.', tip: '힘든 점을 솔직하게 말하면서 긍정적으로 마무리하는 IH 패턴', imageUrl: 'https://images.pexels.com/photos/36713438/pexels-photo-36713438.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '締め切りに追われる', meaning: '마감에 쫓기다', pos: '표현', example: '締め切りに追われることが多くて大変です。', exampleKo: '마감에 쫓기는 일이 많아서 힘듭니다.', tip: '업무 어려움을 자연스럽게 표현하는 관용구', imageUrl: 'https://images.pexels.com/photos/8386717/pexels-photo-8386717.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '〜に慣れてきました', meaning: '~에 익숙해졌습니다', pos: '표현', example: '最初は大変でしたが、だんだん仕事に慣れてきました。', exampleKo: '처음에는 힘들었지만 점점 일에 익숙해졌습니다.', tip: '성장·적응 과정을 나타내는 표현', imageUrl: 'https://images.pexels.com/photos/8279206/pexels-photo-8279206.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '達成感があります', meaning: '성취감이 있습니다', pos: '표현', example: '仕事が完成した時に達成感があります。', exampleKo: '일이 완성됐을 때 성취감이 있습니다.', tip: '업무의 보람을 표현하는 어휘', imageUrl: 'https://images.pexels.com/photos/33802245/pexels-photo-33802245.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '職場の雰囲気は〜です', meaning: '직장 분위기는 ~입니다', pos: '표현', example: '職場の雰囲気はとてもフレンドリーで、働きやすいです。', exampleKo: '직장 분위기는 매우 친근하고 일하기 좋습니다.', tip: '직장 환경을 설명하는 기본 패턴', imageUrl: 'https://images.pexels.com/photos/36356065/pexels-photo-36356065.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: 'スキルを磨いています', meaning: '스킬을 갈고 닦고 있습니다', pos: '표현', example: '資格取得のために毎日スキルを磨いています。', exampleKo: '자격증 취득을 위해 매일 스킬을 갈고 닦고 있습니다.', tip: '자기계발 노력을 표현하는 어휘', imageUrl: 'https://images.pexels.com/photos/31864442/pexels-photo-31864442.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '〜を身につけました', meaning: '~를 익혔습니다', pos: '표현', example: 'この仕事を通じて、コミュニケーション力を身につけました。', exampleKo: '이 업무를 통해 소통 능력을 익혔습니다.', tip: '업무를 통한 성장을 표현하는 패턴', imageUrl: 'https://images.pexels.com/photos/3059654/pexels-photo-3059654.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '成長できる環境です', meaning: '성장할 수 있는 환경입니다', pos: '표현', example: '先輩がサポートしてくれる、成長できる環境だと思います。', exampleKo: '선배들이 지원해주는 성장할 수 있는 환경이라고 생각합니다.', tip: '직장의 장점을 표현하는 고급 어휘', imageUrl: 'https://images.pexels.com/photos/14527417/pexels-photo-14527417.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '〜を専攻しています', meaning: '~를 전공하고 있습니다', pos: '표현', example: 'コンピューターサイエンスを専攻しています。', exampleKo: '컴퓨터 사이언스를 전공하고 있습니다.', tip: '학교 소개의 기본 패턴', imageUrl: 'https://images.pexels.com/photos/8199558/pexels-photo-8199558.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: 'アドバイスをもらっています', meaning: '조언을 받고 있습니다', pos: '표현', example: '先輩や上司にアドバイスをもらいながら成長しています。', exampleKo: '선배나 상사에게 조언을 받으면서 성장하고 있습니다.', tip: '직장 내 성장 과정을 자연스럽게 표현', imageUrl: 'https://images.pexels.com/photos/9065264/pexels-photo-9065264.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '乗り越えました', meaning: '극복했습니다', pos: '표현', example: '困難はありましたが、なんとか乗り越えました。', exampleKo: '어려움이 있었지만 어떻게든 극복했습니다.', tip: '어려움 극복을 표현하는 핵심 동사', imageUrl: 'https://images.pexels.com/photos/32417527/pexels-photo-32417527.jpeg?auto=compress&cs=tinysrgb&h=350' }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // Module 7 — ロールプレイ表現
  // ══════════════════════════════════════════════════════════
  {
    id: 'ojv7', moduleTitle: 'ロールプレイ表現', icon: '🎭', color: '#BE185D',
    words: [
      { word: 'もしもし', meaning: '여보세요 (전화 시작)', pos: '표현', example: 'もしもし、予約の件でお電話したんですが。', exampleKo: '여보세요, 예약 건으로 전화했는데요.', tip: '전화 롤플레이 반드시 이 한 마디로 시작 — 빠뜨리면 감점', imageUrl: 'https://images.pexels.com/photos/3063/person-woman-smartphone-calling.jpg?auto=compress&cs=tinysrgb&h=350' },
      { word: '〜の予約をしたいのですが', meaning: '~를 예약하고 싶은데요', pos: '표현', example: '来週の土曜日に4名で予約をしたいのですが。', exampleKo: '다음 주 토요일에 4명으로 예약하고 싶은데요.', tip: '예약 롤플레이의 핵심 시작 표현', imageUrl: 'https://images.pexels.com/photos/7820326/pexels-photo-7820326.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: 'すみません、〜についてお聞きしたいのですが', meaning: '실례합니다, ~에 대해 여쭤보고 싶은데요', pos: '표현', example: 'すみません、料金についてお聞きしたいのですが。', exampleKo: '실례합니다, 요금에 대해 여쭤보고 싶은데요.', tip: '롤플레이 문의 시작 필수 표현', imageUrl: 'https://images.pexels.com/photos/221164/pexels-photo-221164.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '空きはありますか？', meaning: '자리가 있나요?', pos: '표현', example: '7時に4名でご利用できますか？空きはありますか？', exampleKo: '7시에 4명으로 이용할 수 있나요? 자리가 있나요?', tip: '예약 가능 여부를 확인하는 기본 표현', imageUrl: 'https://images.pexels.com/photos/425240/pexels-photo-425240.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '実は〜という問題がありまして', meaning: '실은 ~라는 문제가 있어서요', pos: '표현', example: '実は注文した商品がまだ届いていないという問題がありまして。', exampleKo: '실은 주문한 상품이 아직 도착하지 않았다는 문제가 있어서요.', tip: '불만 상황을 정중하게 시작하는 표현', imageUrl: 'https://images.pexels.com/photos/12357522/pexels-photo-12357522.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: 'ご不便をおかけして申し訳ありません', meaning: '불편을 드려서 죄송합니다', pos: '표현', example: 'お手数をおかけして、ご不便をおかけして申し訳ありません。', exampleKo: '수고를 끼쳐드리고, 불편을 드려서 죄송합니다.', tip: '사과 표현 중 가장 정중한 형태 — 불만 제기 후 협상 시 사용', imageUrl: 'https://images.pexels.com/photos/6633006/pexels-photo-6633006.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '〜していただくことはできますか？', meaning: '~해 주실 수 있을까요?', pos: '표현', example: '1泊延長していただくことはできますか？', exampleKo: '1박 연장해 주실 수 있을까요?', tip: '정중한 요청의 최고급 표현 — OPIc 롤플레이 필수', imageUrl: 'https://images.pexels.com/photos/34221300/pexels-photo-34221300.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '〜に変えていただけますか？', meaning: '~로 바꿔 주실 수 있을까요?', pos: '표현', example: '部屋を高層階に変えていただけますか？', exampleKo: '방을 고층으로 바꿔 주실 수 있을까요?', tip: '변경 요청 시 사용하는 정중한 표현', imageUrl: 'https://images.pexels.com/photos/17800465/pexels-photo-17800465.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: 'もし〜が難しければ、〜はいかがでしょうか', meaning: '만약 ~가 어렵다면, ~는 어떠십니까?', pos: '표현', example: 'もし日曜日が難しければ、月曜日はいかがでしょうか。', exampleKo: '만약 일요일이 어렵다면, 월요일은 어떠십니까?', tip: '대안을 제안할 때 사용하는 고급 롤플레이 표현 — IH 필수', imageUrl: 'https://images.pexels.com/photos/5697261/pexels-photo-5697261.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: 'できるだけ早急に対応していただけると', meaning: '가능한 한 신속하게 대응해 주시면', pos: '표현', example: 'できるだけ早急に対応していただけると助かります。', exampleKo: '가능한 한 신속하게 대응해 주시면 감사하겠습니다.', tip: '문제 해결 촉구 표현 — "早急に"(가능한 한 빨리)는 격식 어휘', imageUrl: 'https://images.pexels.com/photos/36615924/pexels-photo-36615924.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: 'ご確認いただけますか？', meaning: '확인해 주실 수 있을까요?', pos: '표현', example: '予約内容をご確認いただけますか？', exampleKo: '예약 내용을 확인해 주실 수 있을까요?', tip: '확인 요청 시 사용하는 정중한 표현', imageUrl: 'https://images.pexels.com/photos/7820689/pexels-photo-7820689.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '承知しました', meaning: '알겠습니다 (정중)', pos: '표현', example: 'はい、承知しました。ありがとうございます。', exampleKo: '네, 알겠습니다. 감사합니다.', tip: '"わかりました"보다 정중한 표현 — 비즈니스 상황 필수', imageUrl: 'https://images.pexels.com/photos/7267582/pexels-photo-7267582.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '少々お待ちいただけますか', meaning: '잠시 기다려 주시겠어요?', pos: '표현', example: '少々お待ちいただけますか。すぐに確認いたします。', exampleKo: '잠시 기다려 주시겠어요? 바로 확인하겠습니다.', tip: '상황 확인 시간을 벌 때 사용하는 정중한 표현', imageUrl: 'https://images.pexels.com/photos/7346141/pexels-photo-7346141.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: 'どのくらいかかりますか？', meaning: '얼마나 걸립니까?', pos: '표현', example: '修理にどのくらいかかりますか？', exampleKo: '수리에 얼마나 걸립니까?', tip: '시간이나 비용을 확인하는 기본 표현', imageUrl: 'https://images.pexels.com/photos/8573370/pexels-photo-8573370.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: 'ありがとうございました。失礼します。', meaning: '감사했습니다. 실례합니다. (통화 종료)', pos: '표현', example: 'お手数おかけしました。ありがとうございました。失礼します。', exampleKo: '번거롭게 해드렸습니다. 감사했습니다. 실례합니다.', tip: '전화 마무리 필수 표현 쌍 — 반드시 세트로 사용', imageUrl: 'https://images.pexels.com/photos/1887992/pexels-photo-1887992.jpeg?auto=compress&cs=tinysrgb&h=350' }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // Module 8 — 고득점 담화 연결 표현
  // ══════════════════════════════════════════════════════════
  {
    id: 'ojv8', moduleTitle: '고득점 담화 연결 표현', icon: '⭐', color: '#DC2626',
    words: [
      { word: 'それに加えて', meaning: '그것에 더해 (게다가)', pos: '접속사', example: '便利なだけでなく、それに加えて家賃も安いです。', exampleKo: '편리할 뿐만 아니라, 그것에 더해 집세도 쌉니다.', tip: '장점을 추가할 때 사용하는 고급 접속사', imageUrl: 'https://images.pexels.com/photos/6623796/pexels-photo-6623796.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '〜だけでなく〜も', meaning: '~뿐만 아니라 ~도', pos: '표현', example: '便利なだけでなく、雰囲気もとてもいいです。', exampleKo: '편리할 뿐만 아니라, 분위기도 매우 좋습니다.', tip: '"それに加えて"와 같이 장점을 쌓는 IH 필수 복문 패턴', imageUrl: 'https://images.pexels.com/photos/36008169/pexels-photo-36008169.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '一方で', meaning: '반면에', pos: '접속사', example: '楽しい仕事ですが、一方で責任も大きいです。', exampleKo: '즐거운 일이지만, 반면에 책임도 큽니다.', tip: '= でも / しかし — 대조를 명확히 하는 표현', imageUrl: 'https://images.pexels.com/photos/7953419/pexels-photo-7953419.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '確かに〜ですが', meaning: '확실히 ~이지만', pos: '표현', example: '確かに大変ですが、やりがいを感じています。', exampleKo: '확실히 힘들지만, 보람을 느끼고 있습니다.', tip: '상대 입장을 인정하면서 자신의 의견을 말하는 IH 핵심 패턴', imageUrl: 'https://images.pexels.com/photos/17054486/pexels-photo-17054486.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '正直に言うと', meaning: '솔직히 말하면', pos: '접속사', example: '正直に言うと、最初はあまり好きではありませんでした。', exampleKo: '솔직히 말하면 처음에는 그다지 좋아하지 않았습니다.', tip: '개인 의견을 자연스럽게 도입하는 표현', imageUrl: 'https://images.pexels.com/photos/8107287/pexels-photo-8107287.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '今思えば', meaning: '지금 생각해보면', pos: '접속사', example: '今思えば、あの経験がとても大切だったと思います。', exampleKo: '지금 생각해보면, 그 경험이 매우 소중했다고 생각합니다.', tip: '= 今振り返ってみると / 과거를 회상할 때 사용', imageUrl: 'https://images.pexels.com/photos/16500017/pexels-photo-16500017.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '〜おかげで', meaning: '~덕분에', pos: '표현', example: '上司のサポートのおかげで乗り越えることができました。', exampleKo: '상사의 지원 덕분에 극복할 수 있었습니다.', tip: '긍정적인 원인·이유를 표현 — "〜のために"(부정 포함)와 구별', imageUrl: 'https://images.pexels.com/photos/5697257/pexels-photo-5697257.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: 'なんといっても', meaning: '뭐니뭐니 해도, 역시', pos: '부사', example: 'なんといっても、一番大切なのは健康です。', exampleKo: '뭐니뭐니 해도 가장 중요한 것은 건강입니다.', tip: '가장 중요한 것을 강조하는 표현 — IH 이상 목표 어휘', imageUrl: 'https://images.pexels.com/photos/36496969/pexels-photo-36496969.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '〜とともに', meaning: '~와 함께, ~하면서 (변화)', pos: '표현', example: '経験を積むとともに、自信がついてきました。', exampleKo: '경험을 쌓으면서, 자신감이 생겼습니다.', tip: '시간·성장에 따른 변화를 표현할 때 사용하는 고급 어휘', imageUrl: 'https://images.pexels.com/photos/1327739/pexels-photo-1327739.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: 'だんだん〜てきました', meaning: '점점 ~하게 됐습니다', pos: '표현', example: 'だんだん仕事に慣れてきました。', exampleKo: '점점 일에 익숙해졌습니다.', tip: '점진적 변화를 자연스럽게 표현하는 패턴', imageUrl: 'https://images.pexels.com/photos/13350075/pexels-photo-13350075.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: 'というわけではありませんが', meaning: '그렇다고 ~는 아니지만', pos: '표현', example: '完璧というわけではありませんが、満足しています。', exampleKo: '완벽하다고 할 수는 없지만, 만족하고 있습니다.', tip: '과도한 단정을 피하는 세련된 표현', imageUrl: 'https://images.pexels.com/photos/6077365/pexels-photo-6077365.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '〜ことに気づきました', meaning: '~라는 것을 깨달았습니다', pos: '표현', example: 'その経験から、コミュニケーションの大切さに気づきました。', exampleKo: '그 경험에서 소통의 중요성을 깨달았습니다.', tip: '경험에서 배운 교훈을 표현하는 고급 패턴', imageUrl: 'https://images.pexels.com/photos/19802197/pexels-photo-19802197.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: 'つまり〜ということです', meaning: '즉 ~라는 것입니다 (결론)', pos: '표현', example: 'つまり、私はどちらかというと自然が好きということです。', exampleKo: '즉, 저는 굳이 따지자면 자연을 좋아한다는 것입니다.', tip: '말한 내용을 요약·결론 지을 때 — AL 수준 답변에 자연스럽게 등장', imageUrl: 'https://images.pexels.com/photos/1888005/pexels-photo-1888005.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '〜ものだと思います', meaning: '~이라는 것이라고 생각합니다', pos: '표현', example: '旅行は視野を広げてくれるものだと思います。', exampleKo: '여행은 시야를 넓혀주는 것이라고 생각합니다.', tip: '보편적인 진리나 생각을 부드럽게 표현 — AL 수준 표현', imageUrl: 'https://images.pexels.com/photos/12081504/pexels-photo-12081504.png?auto=compress&cs=tinysrgb&h=350' },
      { word: '〜に違いありません', meaning: '~임이 틀림없습니다', pos: '표현', example: '努力すれば、必ずうまくなれるに違いありません。', exampleKo: '노력하면 반드시 잘할 수 있음이 틀림없습니다.', tip: '강한 확신을 표현 — IH~AL 목표 어휘', imageUrl: 'https://images.pexels.com/photos/9740937/pexels-photo-9740937.jpeg?auto=compress&cs=tinysrgb&h=350' }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // Module 9 — 感情・反応・経験表現 (NEW)
  // ══════════════════════════════════════════════════════════
  {
    id: 'ojv9', moduleTitle: '感情・反応・経験表現', icon: '💫', color: '#0891B2',
    words: [
      { word: '感動しました / 〜に感動しました', meaning: '감동했습니다 / ~에 감동했습니다', pos: '표현', example: '景色の美しさに本当に感動しました。', exampleKo: '경치의 아름다움에 정말 감동했습니다.', tip: '여행·경험 묘사에서 가장 많이 쓰이는 감정 표현', imageUrl: 'https://images.pexels.com/photos/32381207/pexels-photo-32381207.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: 'びっくりしました / 驚きました', meaning: '깜짝 놀랐습니다', pos: '표현', example: '予想以上に素晴らしくて、本当にびっくりしました。', exampleKo: '예상 이상으로 훌륭해서 정말 깜짝 놀랐습니다.', tip: '강한 놀라움 표현 — "驚きました"는 약간 더 격식체', imageUrl: 'https://images.pexels.com/photos/3812731/pexels-photo-3812731.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '嬉しかったです', meaning: '기뻤습니다', pos: '표현', example: '褒めていただいて、とても嬉しかったです。', exampleKo: '칭찬해주셔서 정말 기뻤습니다.', tip: '긍정적 감정 표현의 기본 — "とても"와 함께 강조', imageUrl: 'https://images.pexels.com/photos/33041091/pexels-photo-33041091.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '大変でしたが、なんとか〜できました', meaning: '힘들었지만 어떻게든 ~할 수 있었습니다', pos: '표현', example: '大変でしたが、なんとか乗り越えることができました。', exampleKo: '힘들었지만 어떻게든 극복할 수 있었습니다.', tip: '어려움 + 극복을 한 문장에 담는 IH 핵심 패턴', imageUrl: 'https://images.pexels.com/photos/461593/pexels-photo-461593.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: 'とても充実していました', meaning: '매우 알찼습니다', pos: '표현', example: '短い旅でしたが、とても充実していました。', exampleKo: '짧은 여행이었지만 매우 알찼습니다.', tip: '"楽しかった"보다 고급스러운 감상 표현', imageUrl: 'https://images.pexels.com/photos/31112242/pexels-photo-31112242.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '〜てよかったと思っています', meaning: '~해서 좋았다고 생각하고 있습니다', pos: '표현', example: 'チャレンジしてよかったと思っています。', exampleKo: '도전해서 좋았다고 생각하고 있습니다.', tip: '경험·결정에 대한 긍정적 회고 표현 — 마무리에 자주 사용', imageUrl: 'https://images.pexels.com/photos/4116670/pexels-photo-4116670.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '今でも忘れられません', meaning: '지금도 잊을 수 없습니다', pos: '표현', example: '初めて海外に行った時のことは、今でも忘れられません。', exampleKo: '처음 해외에 갔을 때의 일은 지금도 잊을 수 없습니다.', tip: '강렬한 기억을 표현 — "印象に残っています"와 함께 사용', imageUrl: 'https://images.pexels.com/photos/6429525/pexels-photo-6429525.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '〜てしまいました', meaning: '~해버렸습니다 (의도치 않은 결과)', pos: '표현', example: '緊張して、準備したことを忘れてしまいました。', exampleKo: '긴장해서 준비했던 것을 잊어버렸습니다.', tip: '"〜てしまう" = 의도치 않게 일어난 결과 표현 — 스토리에 현실감 부여', imageUrl: 'https://images.pexels.com/photos/15223238/pexels-photo-15223238.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: 'なんとかなりました', meaning: '어떻게든 됐습니다', pos: '표현', example: '最初はパニックになりましたが、なんとかなりました。', exampleKo: '처음에는 당황했지만 어떻게든 됐습니다.', tip: '위기 상황 극복을 가볍게 마무리하는 자연스러운 표현', imageUrl: 'https://images.pexels.com/photos/14000752/pexels-photo-14000752.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '〜に胸が熱くなりました', meaning: '~에 가슴이 뜨거워졌습니다', pos: '표현', example: 'その瞬間、思わず胸が熱くなりました。', exampleKo: '그 순간 나도 모르게 가슴이 뜨거워졌습니다.', tip: '깊은 감동을 표현하는 고급 어휘 — IH 이상 목표', imageUrl: 'https://images.pexels.com/photos/922269/pexels-photo-922269.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: 'この経験から学びました', meaning: '이 경험에서 배웠습니다', pos: '표현', example: 'この経験から、諦めないことの大切さを学びました。', exampleKo: '이 경험에서 포기하지 않는 것의 중요성을 배웠습니다.', tip: 'STAR 구조 결론부 핵심 표현 — 경험 묘사 마무리에 필수', imageUrl: 'https://images.pexels.com/photos/8617774/pexels-photo-8617774.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '今振り返ってみると', meaning: '지금 돌이켜보면', pos: '접속사', example: '今振り返ってみると、あの時の判断は正しかったと思います。', exampleKo: '지금 돌이켜보면 그때의 판단이 옳았다고 생각합니다.', tip: '= 今思えば — 과거 경험에 대한 성찰을 도입하는 표현', imageUrl: 'https://images.pexels.com/photos/14069233/pexels-photo-14069233.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '〜のおかげで救われました', meaning: '~덕분에 구제됐습니다 / 도움이 됐습니다', pos: '표현', example: '友達の一言のおかげで救われました。', exampleKo: '친구의 한 마디 덕분에 도움이 됐습니다.', tip: '누군가의 도움에 감사를 표현하는 자연스러운 방법', imageUrl: 'https://images.pexels.com/photos/8942730/pexels-photo-8942730.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: 'もっと早くやればよかった', meaning: '더 일찍 했으면 좋았을 텐데', pos: '표현', example: '日本語の勉強を、もっと早くやればよかったと思います。', exampleKo: '일본어 공부를 더 일찍 했으면 좋았을 텐데 생각합니다.', tip: '후회·반성을 자연스럽게 표현하는 패턴 — 경험 답변에 깊이 부여', imageUrl: 'https://images.pexels.com/photos/32078958/pexels-photo-32078958.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '自信がつきました', meaning: '자신감이 생겼습니다', pos: '표현', example: 'その経験を経て、少し自信がつきました。', exampleKo: '그 경험을 거쳐, 조금 자신감이 생겼습니다.', tip: '성장 결과를 표현하는 긍정적 어휘', imageUrl: 'https://images.pexels.com/photos/8051953/pexels-photo-8051953.jpeg?auto=compress&cs=tinysrgb&h=350' }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // Module 10 — 理由・意見・比較表現 (NEW)
  // ══════════════════════════════════════════════════════════
  {
    id: 'ojv10', moduleTitle: '理由・意見・比較表現', icon: '💬', color: '#7C3AED',
    words: [
      { word: 'なぜなら〜からです', meaning: '왜냐하면 ~이기 때문입니다', pos: '표현', example: '好きです。なぜなら、達成感があるからです。', exampleKo: '좋아합니다. 왜냐하면 성취감이 있기 때문입니다.', tip: '이유를 문장 뒤에 강조할 때 사용 — IM→IH 변환 핵심 패턴', imageUrl: 'https://images.pexels.com/photos/11022633/pexels-photo-11022633.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '〜ので〜しています', meaning: '~이기 때문에 ~하고 있습니다', pos: '표현', example: 'ストレス解消になるので、毎日運動しています。', exampleKo: '스트레스 해소가 되기 때문에 매일 운동하고 있습니다.', tip: '이유와 결과를 연결하는 가장 자연스러운 패턴', imageUrl: 'https://images.pexels.com/photos/30945513/pexels-photo-30945513.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '〜と思います / 〜と感じています', meaning: '~라고 생각합니다 / ~라고 느끼고 있습니다', pos: '표현', example: '旅行は人生を豊かにしてくれると思います。', exampleKo: '여행은 인생을 풍요롭게 해준다고 생각합니다.', tip: '"と思います"는 의견, "と感じています"는 감각적 느낌 강조 — 번갈아 쓰면 자연스러움', imageUrl: 'https://images.pexels.com/photos/6185632/pexels-photo-6185632.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '個人的には', meaning: '개인적으로는', pos: '부사', example: '個人的には、都会よりも自然が多い場所の方が好きです。', exampleKo: '개인적으로는 도시보다 자연이 많은 곳이 더 좋습니다.', tip: '개인 의견임을 명확히 하는 표현 — IH 이상 답변에 자연스럽게 삽입', imageUrl: 'https://images.pexels.com/photos/5622675/pexels-photo-5622675.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '確かに〜ですが、〜と思います', meaning: '확실히 ~이지만, ~라고 생각합니다', pos: '표현', example: '確かに大変ですが、やりがいがあると思います。', exampleKo: '확실히 힘들지만, 보람이 있다고 생각합니다.', tip: '상대방 의견을 인정하면서 자신의 주장을 이어가는 양보·역접 패턴 — IH 필수', imageUrl: 'https://images.pexels.com/photos/4439422/pexels-photo-4439422.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: 'どちらかというと', meaning: '굳이 따지자면', pos: '표현', example: 'どちらかというと、チームより一人で作業する方が好きです。', exampleKo: '굳이 따지자면 팀보다 혼자 작업하는 쪽이 좋습니다.', tip: '완전한 단정을 피하면서 선호를 표현하는 자연스러운 방법', imageUrl: 'https://images.pexels.com/photos/8965138/pexels-photo-8965138.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '〜より〜の方が〜', meaning: '~보다 ~쪽이 ~합니다', pos: '표현', example: '国内旅行より海外旅行の方が好きです。', exampleKo: '국내 여행보다 해외 여행 쪽이 좋습니다.', tip: '비교 표현의 기본 문형 — 선호도 질문에 필수', imageUrl: 'https://images.pexels.com/photos/8844389/pexels-photo-8844389.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '〜に比べて', meaning: '~에 비해', pos: '표현', example: '以前に比べて、生活がずいぶん変わりました。', exampleKo: '이전에 비해, 생활이 꽤 바뀌었습니다.', tip: '변화나 대조를 나타내는 비교 표현 — 昔と今の비교 질문에 활용', imageUrl: 'https://images.pexels.com/photos/16690918/pexels-photo-16690918.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '〜というメリット / デメリットがあります', meaning: '~라는 장점 / 단점이 있습니다', pos: '표현', example: '都会には便利というメリットがありますが、物価が高いというデメリットもあります。', exampleKo: '도시에는 편리하다는 장점이 있지만, 물가가 비싸다는 단점도 있습니다.', tip: '장단점을 균형 있게 말하는 IH 패턴 — 비교 질문에 직결', imageUrl: 'https://images.pexels.com/photos/6345328/pexels-photo-6345328.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '〜ようになりました', meaning: '~하게 됐습니다 (변화)', pos: '표현', example: '毎日練習するうちに、自然に話せるようになりました。', exampleKo: '매일 연습하는 사이에 자연스럽게 말할 수 있게 됐습니다.', tip: '변화·성장을 표현하는 핵심 패턴 — 경험·취미 답변에 필수', imageUrl: 'https://images.pexels.com/photos/33705551/pexels-photo-33705551.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '〜のではないでしょうか', meaning: '~가 아닐까요? (부드러운 의견)', pos: '표현', example: 'これは多くの人に共通する悩みなのではないでしょうか。', exampleKo: '이것은 많은 사람들에게 공통된 고민이 아닐까요?', tip: '강한 단정을 피하고 의견을 부드럽게 제시 — IH 이상 수준의 세련된 표현', imageUrl: 'https://images.pexels.com/photos/18512803/pexels-photo-18512803.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '〜ということが大切だと思います', meaning: '~라는 것이 중요하다고 생각합니다', pos: '표현', example: '何事も継続するということが大切だと思います。', exampleKo: '무슨 일이든 계속하는 것이 중요하다고 생각합니다.', tip: '의견 표현의 마무리·결론 패턴으로 자주 사용', imageUrl: 'https://images.pexels.com/photos/5930/wood-top-keys-lock.jpg?auto=compress&cs=tinysrgb&h=350' },
      { word: '〜に越したことはありません', meaning: '~에 넘는 것은 없습니다 (最善)', pos: '표현', example: '健康に越したことはないと思います。', exampleKo: '건강이 최고라고 생각합니다.', tip: '"~보다 좋은 것은 없다"는 의미의 관용적 표현 — AL 수준', imageUrl: 'https://images.pexels.com/photos/8110784/pexels-photo-8110784.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: 'どう考えても〜と思います', meaning: '아무리 생각해도 ~라고 생각합니다', pos: '표현', example: 'どう考えても、継続が一番大切だと思います。', exampleKo: '아무리 생각해도, 꾸준함이 가장 중요하다고 생각합니다.', tip: '자신의 견해에 확신을 더하는 표현', imageUrl: 'https://images.pexels.com/photos/36763351/pexels-photo-36763351.jpeg?auto=compress&cs=tinysrgb&h=350' },
      { word: '一概には言えませんが', meaning: '일률적으로는 말할 수 없지만', pos: '표현', example: '一概には言えませんが、個人的には〜の方が良いと思います。', exampleKo: '일률적으로는 말할 수 없지만, 개인적으로는 ~쪽이 좋다고 생각합니다.', tip: '다양한 상황을 인정하면서 개인 의견을 말하는 고급 표현 — IH~AL 수준', imageUrl: 'https://images.pexels.com/photos/5140459/pexels-photo-5140459.png?auto=compress&cs=tinysrgb&h=350' }
    ]
  }

];
