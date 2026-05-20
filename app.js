// Kismet — Vedic Astrology

const genericSigns = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];

const signTraits = {
  Aries: { strength: "courage and leadership", focus: "new beginnings and competition", advice: "act quickly but consider others", zh_strength: "勇气与领导力", zh_focus: "新开始与竞争", zh_advice: "快速行动但考虑他人" },
  Taurus: { strength: "stability and persistence", focus: "value and resources", advice: "be patient and trust the process", zh_strength: "稳定与坚持", zh_focus: "价值与资源", zh_advice: "耐心并相信过程" },
  Gemini: { strength: "adaptability and communication", focus: "information and connections", advice: "stay curious and share ideas", zh_strength: "适应力与沟通", zh_focus: "信息与联系", zh_advice: "保持好奇心并分享想法" },
  Cancer: { strength: "intuition and emotional intelligence", focus: "home and security", advice: "trust your feelings and nurture relationships", zh_strength: "直觉与情商", zh_focus: "家庭与安全", zh_advice: "相信你的感觉并培育关系" },
  Leo: { strength: "confidence and creativity", focus: "self-expression and recognition", advice: "lead with warmth and generosity", zh_strength: "自信与创造力", zh_focus: "自我表达与认可", zh_advice: "带着温暖和慷慨来领导" },
  Virgo: { strength: "analytical precision and service", focus: "health and work", advice: "focus on details but see the bigger picture", zh_strength: "分析精准与服务", zh_focus: "健康与工作", zh_advice: "关注细节但看到全局" },
  Libra: { strength: "diplomacy and balance", focus: "relationships and harmony", advice: "seek fairness and avoid indecision", zh_strength: "外交与平衡", zh_focus: "关系与和谐", zh_advice: "寻求公平并避免优柔寡断" },
  Scorpio: { strength: "intensity and transformation", focus: "depth and secrets", advice: "channel your passion into meaningful change", zh_strength: "强度与转化", zh_focus: "深度与秘密", zh_advice: "将你的热情转化为有意义的改变" },
  Sagittarius: { strength: "optimism and adventure", focus: "truth and exploration", advice: "embrace adventure while staying grounded", zh_strength: "乐观与冒险", zh_focus: "真理与探索", zh_advice: "拥抱冒险同时保持脚踏实地" },
  Capricorn: { strength: "discipline and ambition", focus: "career and responsibility", advice: "work hard and be patient for success", zh_strength: "纪律与雄心", zh_focus: "事业与责任", zh_advice: "努力工作并耐心等待成功" },
  Aquarius: { strength: "innovation and independence", focus: "future and community", advice: "embrace your uniqueness and inspire others", zh_strength: "创新与独立", zh_focus: "未来与社区", zh_advice: "拥抱你的独特并激励他人" },
  Pisces: { strength: "empathy and intuition", focus: "dreams and spirituality", advice: "trust your intuition and set healthy boundaries", zh_strength: "同理心与直觉", zh_focus: "梦想与灵性", zh_advice: "相信你的直觉并设定健康的界限" }
};

const houseThemes = {
  1: "identity", 2: "resources", 3: "communication", 4: "home", 5: "creativity", 6: "service",
  7: "partnerships", 8: "transformation", 9: "adventure", 10: "career", 11: "community", 12: "spirituality"
};

const houseThemesZh = {
  1: "自我", 2: "资源", 3: "沟通", 4: "家庭", 5: "创造力", 6: "服务",
  7: "伙伴关系", 8: "转化", 9: "冒险", 10: "事业", 11: "社群", 12: "灵性"
};

const cityCoords = [
  { key: "new york", lat: 40.7128, lon: -74.006 },
  { key: "los angeles", lat: 34.0522, lon: -118.2437 },
  { key: "san francisco", lat: 37.7749, lon: -122.4194 },
  { key: "chicago", lat: 41.8781, lon: -87.6298 },
  { key: "houston", lat: 29.7604, lon: -95.3698 },
  { key: "london", lat: 51.5074, lon: -0.1278 },
  { key: "paris", lat: 48.8566, lon: 2.3522 },
  { key: "berlin", lat: 52.5200, lon: 13.4050 },
  { key: "tokyo", lat: 35.6762, lon: 139.6503 },
  { key: "shanghai", lat: 31.2304, lon: 121.4737 },
  { key: "beijing", lat: 39.9042, lon: 116.4074 },
  { key: "hong kong", lat: 22.3193, lon: 114.1694 },
  { key: "singapore", lat: 1.3521, lon: 103.8198 },
  { key: "sydney", lat: -33.8688, lon: 151.2093 },
  { key: "mumbai", lat: 19.0760, lon: 72.8777 },
  { key: "delhi", lat: 28.7041, lon: 77.1025 },
  { key: "chengdu", lat: 30.5728, lon: 104.0668 },
  { key: "seoul", lat: 37.5665, lon: 126.9780 },
  { key: "bangkok", lat: 13.7563, lon: 100.5018 }
];

function getCoords(place) {
  const normalized = place.toLowerCase();
  for (const city of cityCoords) {
    if (normalized.includes(city.key)) {
      return { latitude: city.lat, longitude: city.lon };
    }
  }
  return { latitude: 40.7128, longitude: -74.006 };
}

const translations = {
  en: {
    greeting: "Hello, {name}",
    seeker: "Seeker",
    tabDaily: "Daily",
    tabWeekly: "Weekly",
    tabMonthly: "Monthly",
    tabCareer: "Career",
    tabLove: "Love",
    tabWellness: "Wellness",
    noReadings: "No readings yet. Complete your profile to get personalized readings.",
    onboardingTitle: "Your Journey Begins",
    onboardingDesc: "Enter your birth details to receive personalized astrological guidance.",
    continue: "Continue",
    profileTitle: "Your Profile",
    fullNameLabel: "Full Name",
    dobLabel: "Date of Birth",
    tobLabel: "Time of Birth",
    placeLabel: "Birth Place",
    saveProfile: "Save Profile",
    langTitle: "Language",
    navDashboard: "Fortune",
    navProfile: "Profile",
    heroEyebrow: "Your cosmic blueprint",
    heroDesc: "Discover your unique astrological profile based on your birth chart.",
    formTitle: "Enter Your Birth Details",
    formSubtitle: "Enter your birth details for a personalized reading.",
    formDesc: "We'll calculate your personalized reading based on the exact moment you were born.",
    labelName: "Your Name",
    labelDate: "Date of Birth",
    labelTime: "Time of Birth",
    labelPlace: "Place of Birth",
    btnCalculate: "Reveal My Fortune",
    dailyLabel: "Daily",
    cardSummary: "Your Cosmic Summary",
    cardSummaryDesc: "A snapshot of your core astrological influences.",
    cardYearly: "2026 Year Ahead",
    cardYearlyDesc: "Major themes and opportunities for the year.",
    cardMonthly: "Monthly Forecast",
    cardMonthlyDesc: "This month's key themes and advice.",
    cardDaily: "Daily Guidance",
    cardDailyDesc: "Today's energy and recommendations.",
    readingEyebrow: "Reading",
    titleSummary: "Cosmic Summary",
    titleYearly: "Year Ahead",
    titleMonthly: "Monthly Forecast",
    titleDaily: "Daily Guidance",
    matrixTitle: "Your Birth Matrix",
    birthProfileTitle: "Birth Profile",
    btnClear: "Clear Profile",
    profileName: "Name",
    profileDate: "Date",
    profileTime: "Time",
    profilePlace: "Place",
    coords: "Coordinates"
  },
  zh: {
    greeting: "你好，{name}",
    seeker: "探索者",
    tabDaily: "每日",
    tabWeekly: "每周",
    tabMonthly: "每月",
    tabCareer: "事业",
    tabLove: "爱情",
    tabWellness: "健康",
    noReadings: "还没有解读。完成您的个人资料以获取个性化解读。",
    onboardingTitle: "您的旅程开始",
    onboardingDesc: "输入您的出生详细信息以获取个性化占星指导。",
    continue: "继续",
    profileTitle: "您的个人资料",
    fullNameLabel: "姓名",
    dobLabel: "出生日期",
    tobLabel: "出生时间",
    placeLabel: "出生地点",
    saveProfile: "保存个人资料",
    langTitle: "语言",
    navDashboard: "运势",
    navProfile: "个人资料",
    heroEyebrow: "你的宇宙蓝图",
    heroDesc: "根据你的出生图表发现独特的占星档案。",
    formTitle: "输入你的出生详细信息",
    formSubtitle: "输入你的出生详细信息以获取个性化解读。",
    formDesc: "我们将根据你出生的精确时刻计算你的个性化解读。",
    labelName: "你的名字",
    labelDate: "出生日期",
    labelTime: "出生时间",
    labelPlace: "出生地点",
    btnCalculate: "揭示我的运势",
    dailyLabel: "每日",
    cardSummary: "你的宇宙概要",
    cardSummaryDesc: "你核心占星影响的快照。",
    cardYearly: "2026年展望",
    cardYearlyDesc: "今年的主要主题和机遇。",
    cardMonthly: "月度预测",
    cardMonthlyDesc: "本月的主题和建议。",
    cardDaily: "每日指引",
    cardDailyDesc: "今天的能量和建议。",
    readingEyebrow: "解读",
    titleSummary: "宇宙概要",
    titleYearly: "年度展望",
    titleMonthly: "月度预测",
    titleDaily: "每日指引",
    matrixTitle: "你的出生矩阵",
    birthProfileTitle: "出生档案",
    btnClear: "清除资料",
    profileName: "姓名",
    profileDate: "日期",
    profileTime: "时间",
    profilePlace: "地点",
    coords: "坐标"
  }
};

let currentLanguage = localStorage.getItem('kismet-language') || 'en';
let profile = JSON.parse(localStorage.getItem('kismet-profile') || 'null');

function t(key) {
  return translations[currentLanguage][key] || key;
}

function hashProfile(text) {
  return Array.from(text).reduce((sum, char) => sum + char.charCodeAt(0), 0);
}

function getPositions(profile, dateFactor = '') {
  const seed = hashProfile(`${profile.fullName}${profile.dateOfBirth}${profile.timeOfBirth}${profile.birthPlace}${dateFactor}`);
  const names = ["sun", "moon", "mercury", "venus", "saturn", "jupiter", "rahu"];
  return names.map((key, index) => {
    const signIndex = (seed + index * 7) % genericSigns.length;
    const house = ((seed + index * 3) % 12) + 1;
    const degree = `${String((seed + index * 11) % 30).padStart(2, "0")}°${String((seed + index * 13) % 60).padStart(2, "0")}'`;
    const dignity = index === 2 ? "strained" : index % 3 === 0 ? "strong" : "mixed";
    return {
      key,
      name: key.charAt(0).toUpperCase() + key.slice(1),
      sign: genericSigns[signIndex],
      house,
      degree,
      dignity
    };
  });
}

function getDateFactors() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  return {
    daily: `${year}-${month}-${day}`,
    monthly: `${year}-${month}`,
    yearly: `${year}`
  };
}

function getSignTrait(sign) {
  return signTraits[sign] || signTraits["Aries"];
}

function computeAlignment(profile) {
  const dateFactors = getDateFactors();
  const basePositions = getPositions(profile);
  const dailyPositions = getPositions(profile, dateFactors.daily);
  const monthlyPositions = getPositions(profile, dateFactors.monthly);
  const yearlyPositions = getPositions(profile, dateFactors.yearly);
  const isZh = currentLanguage === 'zh';
  
  const name = profile.fullName.split(" ")[0] || t('seeker');

  // Helper to extract traits from positions
  const getTraits = (positions) => {
    const sun = positions.find(p => p.key === "sun");
    const moon = positions.find(p => p.key === "moon");
    const mercury = positions.find(p => p.key === "mercury");
    const venus = positions.find(p => p.key === "venus");
    const saturn = positions.find(p => p.key === "saturn");
    const jupiter = positions.find(p => p.key === "jupiter");

    return {
      sun, moon, mercury, venus, saturn, jupiter,
      sunTrait: sun ? getSignTrait(sun.sign) : getSignTrait("Aries"),
      mercuryTrait: mercury ? getSignTrait(mercury.sign) : getSignTrait("Gemini"),
      venusTrait: venus ? getSignTrait(venus.sign) : getSignTrait("Libra"),
      saturnTrait: saturn ? getSignTrait(saturn.sign) : getSignTrait("Capricorn"),
      jupiterTrait: jupiter ? getSignTrait(jupiter.sign) : getSignTrait("Sagittarius"),
      sunHouse: sun ? (isZh ? houseThemesZh[sun.house] : houseThemes[sun.house]) : (isZh ? "事业" : "career"),
      moonHouse: moon ? (isZh ? houseThemesZh[moon.house] : houseThemes[moon.house]) : (isZh ? "情感" : "emotions"),
      venusHouse: venus ? (isZh ? houseThemesZh[venus.house] : houseThemes[venus.house]) : (isZh ? "爱情" : "love"),
      jupiterHouse: jupiter ? (isZh ? houseThemesZh[jupiter.house] : houseThemes[jupiter.house]) : (isZh ? "成长" : "growth"),
      saturnHouse: saturn ? (isZh ? houseThemesZh[saturn.house] : houseThemes[saturn.house]) : (isZh ? "结构" : "structure")
    };
  };

  const summary = getTraits(basePositions);
  const daily = getTraits(dailyPositions);
  const monthly = getTraits(monthlyPositions);
  const yearly = getTraits(yearlyPositions);

  if (isZh) {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    const today = new Date().toLocaleDateString('zh-CN');

    return {
      summary: `${name}，欢迎来到你的星盘解读。这是一个关于你生命蓝图的深度分析，帮助你理解自己的核心特质、情感模式、以及人生各领域的发展方向。\n\n【核心身份——太阳星座】\n\n你的太阳星座是${summary.sun?.sign || "白羊座"}，位于${summary.sunHouse}宫。这是星盘中最核心的能量源，代表着你的人生方向、自我表达方式、以及你希望在世界上留下的印记。\n\n太阳赋予你${summary.sunTrait.zh_strength}。这意味着你天然倾向于${summary.sunTrait.zh_focus}。在日常生活中，这体现为你${summary.sunTrait.zh_advice}。这是你与生俱来的天赋，也是你需要持续发展的方向。\n\n【情感本质——月亮星座】\n\n你的月亮星座是${summary.moon?.sign || "巨蟹座"}，位于${summary.moonHouse}宫。月亮代表着你最真实的情感需求、内在安全感、以及你如何处理情绪的方式。\n\n在情感层面，你倾向于${summary.moonHouse}的体验方式。你需要在这个领域感受到安全和被理解。月亮在${summary.moonHouse}宫意味着你的情绪安全感与${summary.moonHouse}紧密相连——当这部分得到满足时，你会感到内心平静；当这部分受到挑战时，你可能会变得敏感或情绪化。\n\n【沟通与思维——水星】\n\n水星代表着你的思维方式、沟通风格、以及你处理信息的方式。虽然本次解读使用的是推算位置，但你的水星能量会影响你如何表达想法、如何学习新事物、以及如何与他人交流。\n\n【爱情与关系——金星】\n\n你的金星位于${summary.venus?.sign || "天秤座"}在${summary.venusHouse}宫。金星代表着你对美的追求、爱情和关系的模式、以及你在亲密关系中看重什么。\n\n在感情中，你在${summary.venusHouse}领域寻求和谐与承诺。你倾向于通过${summary.venusTrait.zh_focus || "优雅的方式"}来吸引伴侣。金星的星座也揭示了你对浪漫的期待——你可能更看重智力交流、审美契合，或者是实际的稳定性。\n\n【事业与成就——土星】\n\n土星在${summary.saturn?.sign || "摩羯座"}位于${summary.saturnHouse}宫。土星代表着责任、结构和长期目标。它在你星盘中的位置揭示了你需要通过努力和坚持来获得成就的领域。\n\n土星在${summary.saturnHouse}宫意味着你在这个领域会面临考验和责任。但这并非坏事——土星的考验是建立持久基础的过程。你需要${summary.saturnTrait.zh_advice}。这个过程可能充满挑战，但最终的成就将是非常稳固的。\n\n【成长与扩张——木星】\n\n木星位于${summary.jupiter?.sign || "射手座"}在${summary.jupiterHouse}宫。木星代表着扩张、成长、智慧和机遇。它揭示了你人生中可能获得额外支持的领域。\n\n木星在你的${summary.jupiterHouse}宫带来扩张和成长的机会。这个领域有望得到木星的祝福，使你在这个方向上获得更多机遇和发展空间。你在${summary.jupiterHouse}方面的视野会变得开阔，可能接触到新的思想、文化或机遇。\n\n【总结】\n\n你的星盘揭示了一个独特而复杂的个体。你的太阳星座定义了你的核心身份，月亮星座揭示了你的情感需求，金星展示了你对爱情的期待，土星指出需要通过努力获得成就的领域，而木星则标示了可能获得额外祝福的地方。\n\n了解这些能量并不是要你完全按照星盘生活，而是帮助你更好地理解自己、接纳自己的特质，并在人生的各个领域做出更符合本性的选择。当你顺应自己星盘中的天然能量时，你会发现生活变得更加顺畅和满足。`,

      yearly: `${currentYear}年度运势深度解析\n\n欢迎来到你${currentYear}年的运势报告。这一年将是你人生中重要的成长和转变之年，星盘中的能量组合为你带来了独特的发展机遇和挑战。\n\n【整体能量格局】\n\n${currentYear}年，木星和土星的互动构成了全年能量的主旋律。木星代表着扩张和机遇，而土星代表着结构和限制。当这两种能量相互作用时，你有机会在梦想与现实之间找到平衡——既要设定大胆的目标，又要以务实的步伐前进。\n\n【事业发展】\n\n木星位于${yearly.jupiter?.sign || "射手座"}${yearly.jupiterHouse}宫，这为你的职业发展带来了扩张的能量。在${yearly.jupiterHouse}领域，你可能会经历显著的成长和进步。这可能表现为：\n\n1. 职业机会的增加——新的项目、晋升机会或者创业的可能性\n2. 人脉的拓展——遇到能够帮助你成长的重要人物\n3. 视野的开阔——接触到新的行业知识或海外机会\n4. 自信的提升——对自己的能力有更深的认识和信心\n\n然而，土星在${yearly.saturn?.sign || "摩羯座"}${yearly.saturnHouse}宫提醒我们，成长需要坚实的基础。在${yearly.saturnHouse}领域，你需要：\n\n1. 保持耐心——成功不会一蹴而就，需要持续的努力\n2. 承担责任——面对困难时勇于承担，而不是逃避\n3. 建立结构——制定清晰的计划和目标，按部就班执行\n4. 接受考验——土星带来挑战，但这些挑战是为了让你更强壮\n\n土星的教诲是${yearly.saturnTrait.zh_advice}。虽然这个过程可能感觉艰难，但请记住：每一次挑战都是成长的机会。当你克服了这些障碍，你会发现自己的能力和信心都达到了新的高度。\n\n【事业发展建议】\n\n1. 把握木星带来的机会，但要做好充分准备\n2. 在扩张的同时保持务实——不要过度承诺\n3. 利用这段时间建立长期的职业基础\n4. 与有经验的人建立联系，他们可以为你提供指导\n5. 对新想法保持开放，但做出决定时要谨慎\n\n【感情运势】\n\n${currentYear}年对你的感情生活来说可能是充满机遇的一年。木星的位置显示你在感情上有扩张和成长的可能性。这可能体现在：\n\n1. 遇到新的、有意义的伴侣\n2. 与现有伴侣关系的深化\n3. 对爱情和关系的理解更加成熟\n4. 社交圈扩大，可能通过朋友或活动认识新人\n\n月亮在${yearly.moon?.sign || "巨蟹座"}${yearly.moonHouse}宫运行，这意味着你的情感需求与${yearly.moonHouse}紧密相关。你在寻找一个能够给你带来情感安全的伴侣。在关系中，你需要感受到被理解和被接纳。\n\n金星的能量也值得关注。它可能带来新的社交机会，或者让现有关系更加和谐。但同时，也要注意不要过度理想化伴侣——真实的亲密关系需要双方的努力和妥协。\n\n【感情发展建议】\n\n1. 对新的可能性保持开放，但不要急于进入一段关系\n2. 在现有关系中投入更多情感陪伴\n3. 诚实地表达自己的情感需求\n4. 学会在独立和亲密之间找到平衡\n5. 注意沟通——很多感情问题源于沟通不畅\n\n【健康状况】\n\n土星在${yearly.saturnHouse}宫暗示你需要关注${yearly.saturnHouse}方面的健康。这意味着你可能需要特别留意：\n\n1. 身体的某个特定系统或器官\n2. 长期健康习惯的建立\n3. 工作与休息的平衡\n4. 压力管理技巧\n\n太阳在${yearly.sun?.sign || "白羊座"}${yearly.sunHouse}宫也与你的活力和整体健康状况相关。注意${yearly.sunHouse}领域的身体信号——这可能是你健康状况的指示器。\n\n【健康建议】\n\n1. 建立规律的作息时间——这比任何补品都重要\n2. 注意饮食平衡——避免过度放纵\n3. 适度运动——选择适合自己的运动方式\n4. 给自己足够的休息时间——不要过度消耗\n5. 定期体检——预防总是胜于治疗\n\n【总结与展望】\n\n${currentYear}年对你来说是充满可能性的一年。木星的扩张能量为你带来了机遇，而土星的限制能量则帮助你建立坚实的基础。这两种看似矛盾的力 量实际上可以完美互补——让你既能梦想远大，又能脚踏实地。\n\n这一年的主题是「在扩张中建立」。无论是事业、感情还是健康，你都需要在尝试新事物和保持稳定之间找到平衡。记住：成功不是一蹴而就的，而是日复一日积累的结果。\n\n祝愿你在${currentYear}年收获成长、实现目标、找到幸福。`,

      monthly: `${currentMonth}月运势深度解析\n\n欢迎来到你${currentMonth}月的运势报告。本月的能量聚焦于沟通、学习、日常交流以及人际关系的动态变化。\n\n【本月整体能量】\n\n本月的水星能量特别活跃，它位于${monthly.mercury?.sign || "双子座"}${monthly.mercury?.house || 3}宫，影响着你的思考方式和日常交流。水星鼓励${monthly.mercuryTrait.zh_focus}，这为你的沟通、学习和短期旅行带来活力。\n\n然而，土星继续在${monthly.saturnHouse}宫施压，要求你${monthly.saturnTrait.zh_advice}。这种能量可能会让你感觉受到限制或挑战，但请记住：土星的阻力实际上是在帮助你建立更稳固的基础。\n\n【事业发展】\n\n本月在事业方面，沟通和信息的流动变得尤为重要。水星的能量提升了你的沟通能力、思维敏捷度和学习效率。这是一个：\n\n1. 签署重要协议或合同的好时机\n2. 与同事或客户进行关键对话的时机\n3. 学习新技能或知识的黄金期\n4. 短途出差或旅行可能带来意外收获\n\n但要注意：土星的能量提醒你，在追求速度的同时不要忽视质量。在做重要决定之前，确保你有足够的信息和充分的考虑。\n\n【事业发展建议】\n\n1. 抓住本月水星带来的沟通优势\n2. 但在重要决定前给自己留出思考时间\n3. 与同事保持良好的信息流通\n4. 记录重要决策的理由，以备后查\n5. 避免在这个月做出过于冲动的承诺\n\n【感情关系】\n\n本月月亮在${monthly.moonHouse}宫运行，这意味着你的情感需求和情绪状态与${monthly.moonHouse}紧密相关。你可能会：\n\n1. 对情感联系有更强烈的需求\n2. 更敏感于他人的情绪和态度\n3. 渴望深入的心理交流\n4. 在关系中寻求更多的安全感\n\n这是与伴侣或潜在伴侣深入交流的好时机。但也要注意：敏感期可能容易产生误解或情绪化的反应。保持清晰的沟通很重要。\n\n【感情建议】\n\n1. 主动与伴侣分享你的感受和需求\n2. 倾听对方的需求，而不是假设\n3. 避免在情绪激动时做出重要决定\n4. 用建设性的方式处理分歧\n5. 给自己独处的时间来整理情绪\n\n【健康与活力】\n\n本月需要特别关注${monthly.saturnHouse}领域的健康。这可能涉及你的身体健康、工作环境或者日常习惯。\n\n水星的能量适合运动和身体活动——${monthly.mercuryTrait.zh_focus}的特质让你更适合需要思考和协调的运动。但要注意不要过度劳累。\n\n【健康建议】\n\n1. 建立稳定的睡眠和作息时间\n2. 选择适度强度的运动方式\n3. 注意工作环境的舒适度\n4. 给自己足够的恢复时间\n5. 如果有任何健康疑虑，及时咨询专业人士\n\n【总结】\n\n${currentMonth}月是整理和巩固的月份。虽然不是大规模扩张的时机，但却是深化现有项目、巩固人际关系、准备下一步行动的好时间。\n\n水星的能量让这个月充满信息和交流的机会，而土星的能量则提醒你稳扎稳打。两者结合，意味着这是一个「边做边学」的月份——在行动中学习，在学习中调整。\n\n好好利用这个月的能量，为接下来的发展奠定基础。`,

      daily: `今日运势——${today}\n\n欢迎来到你今天的运势报告。今天的星象能量聚焦于日常沟通、思维活动以及情感需求的满足。\n\n【今日整体能量】\n\n今天的能量非常适合思考、交流和短途出行。水星在${daily.mercury?.sign || "双子座"}的位置推动了你的思维活跃度，鼓励${daily.mercuryTrait.zh_focus}。这是沟通、学习和短期出行的好时机。\n\n太阳在${daily.sun?.sign || "白羊座"}的能量提醒你，在采取行动之前${daily.sunTrait.zh_advice.split(" ").slice(-2).join(" ")}。这天的能量适合启动新项目，但建议你先完成必要的规划。\n\n【事业发展】\n\n今天在工作中，沟通和信息的处理将成为重点。你可能会：\n\n1. 收到重要的邮件或消息\n2. 进行关键的对话或会议\n3. 解决一些之前困扰你的问题\n4. 产生新的想法或创意\n\n水星的能量让今天特别适合头脑风暴和信息整理。把你脑海中的想法写下来——这些可能会成为明天的重要资产。\n\n然而，太阳的能量也提醒你：在行动之前要三思。今天不是仓促做决定的日子。把行动留到明天，让今天成为计划和准备的一天。\n\n【人际关系】\n\n月亮在${daily.moonHouse}宫运行，这使得今天的情感能量特别强烈。你可能会：\n\n1. 更深刻地感受到与他人的情感联系\n2. 渴望与亲密的人深入交流\n3. 对关系中的细微变化更加敏感\n4. 想要花更多时间与重要的人在一起\n\n今天非常适合与家人、伴侣或亲密朋友共度时光。分享你的想法和感受——你会发现，真正的连接来自于敞开心扉的交流。\n\n【健康提示】\n\n注意${daily.sunHouse}领域的身体信号。这个区域可能对今天的能量变化比较敏感。\n\n今天适合进行轻度运动，如散步、瑜伽或轻松的伸展。这些活动不仅对身体有益，还能帮助整理思绪。\n\n避免在这个日子过度消耗能量——给自己留出休息的空间。\n\n【行动建议】\n\n1. 抓住今天沟通交流的能量——联系那些你想念的人\n2. 做一个思维导图或清单，整理你的想法\n3. 不要急于做决定——今天更适合规划和准备\n4. 与重要的人共度时光——情感连接是今天的主题\n5. 给自己足够的休息——能量需要平衡\n\n【今日小结】\n\n今天是一个「思考日」——不是行动的日子，而是整理和规划的日子。让你的思绪自由流动，但不要急于将它们转化为行动。把今天当作播种的日子，明天才是收获的季节。\n\n保持行动与反思的平衡。你的直觉今天特别敏锐，可以信赖内心的指引。在做决定时，听从你内心的声音——它知道你真正需要什么。`,

      positions: dailyPositions
    };
  }

  // English expanded versions
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return {
    summary: `${name}, welcome to your comprehensive astrological profile. This is a detailed analysis of your core identity, emotional patterns, and life direction across all major areas.\n\n【Your Core Identity - The Sun】\n\nYour Sun sign is ${summary.sun?.sign || "Aries"} located in the ${summary.sunHouse} house. This is the most fundamental energy in your chart, representing your life purpose, how you express yourself, and the legacy you wish to leave in the world.\n\nThe Sun grants you ${summary.sunTrait.strength}, which naturally expresses through ${summary.sunTrait.focus}. In your daily life, this manifests as ${summary.sunTrait.advice}. This is your innate gift and the direction of your personal growth.\n\n【Your Emotional Nature - The Moon】\n\nYour Moon sign is ${summary.moon?.sign || "Cancer"} in the ${summary.moonHouse} house. The Moon represents your emotional needs, inner sense of security, and how you process feelings.\n\nEmotionally, you tend to seek experiences related to ${summary.moonHouse}. You need to feel secure and understood in this area to maintain emotional balance. When this need is met, you feel content and at peace; when challenged, you may become sensitive or emotionally volatile.\n\n【Communication and Mind - Mercury】\n\nMercury represents your thinking style, communication patterns, and how you process information. Your Mercury energy influences how you express ideas, learn new things, and interact with others.\n\n【Love and Relationships - Venus】\n\nYour Venus is in ${summary.venus?.sign || "Libra"} in the ${summary.venusHouse} house. Venus governs your aesthetic sense, approach to love, and what you value in intimate relationships.\n\nIn love, you seek harmony and commitment in the ${summary.venusHouse} area. You tend to attract partners through ${summary.venusTrait.focus || "grace and charm"}. Your Venus sign also reveals your romantic expectations—you may value intellectual connection, aesthetic compatibility, or practical stability in a partner.\n\n【Career and Achievement - Saturn】\n\nSaturn is in ${summary.saturn?.sign || "Capricorn"} in the ${summary.saturnHouse} house. Saturn represents responsibility, structure, and long-term goals. It reveals the area where you must work hard and persist to achieve success.\n\nSaturn in ${summary.saturnHouse} means you face tests and responsibilities in this area. This is not a punishment—Saturn's challenges are the necessary process of building lasting foundations. You need to ${summary.saturnTrait.advice}. Though the journey may feel demanding, the eventual achievements will be stable and enduring.\n\n【Growth and Expansion - Jupiter】\n\nJupiter is in ${summary.jupiter?.sign || "Sagittarius"} in the ${summary.jupiterHouse} house. Jupiter represents expansion, growth, wisdom, and opportunity. It reveals areas where you may receive additional blessings and development.\n\nJupiter in your ${summary.jupiterHouse} brings expansion and growth opportunities. This area may receive Jupiter's blessing, providing you with greater prospects and development. Your perspective in ${summary.jupiterHouse} matters will broaden, potentially exposing you to new ideas, cultures, or opportunities.\n\n【Summary】\n\nYour chart reveals a unique and complex individual. Your Sun defines your core identity, Moon reveals your emotional needs, Venus shows your approach to love, Saturn indicates areas requiring effort for achievement, and Jupiter marks areas of potential blessing.\n\nUnderstanding these energies isn't about following your chart blindly—it's about better understanding yourself, embracing your traits, and making choices aligned with your nature. When you align with your chart's natural energy, life feels more顺畅 and fulfilling.`,

    yearly: `${currentYear} Yearly Forecast - A Year of Growth and Transformation\n\nWelcome to your ${currentYear} yearly horoscope. This year brings significant growth and transformation, with unique opportunities and challenges shaped by the planetary alignments in your chart.\n\n【Overall Energy Pattern】\n\n${currentYear} features the main interaction between Jupiter and Saturn, which shapes the year's overall energy. Jupiter represents expansion and opportunity, while Saturn represents structure and limitation. When these two energies interact, you have the chance to balance dreams with reality—setting ambitious goals while taking practical steps toward achievement.\n\n【Career Development】\n\nJupiter in ${yearly.jupiter?.sign || "Sagittarius"} in the ${yearly.jupiterHouse} brings expansion energy to your career. In the ${yearly.jupiterHouse} area, you may experience significant growth and progress. This could manifest as:\n\n1. Increased career opportunities—new projects, promotions, or entrepreneurial possibilities\n2. Network expansion—meeting key people who can aid your growth\n3. Broader horizons—exposure to new industry knowledge or overseas opportunities\n4. Increased confidence—deeper understanding and belief in your abilities\n\nHowever, Saturn in ${yearly.saturn?.sign || "Capricorn"} in the ${yearly.saturnHouse} reminds us that growth requires solid foundations. In the ${yearly.saturnHouse} area, you need to:\n\n1. Exercise patience—success won't come overnight; consistent effort is required\n2. Take responsibility—face difficulties courageously rather than avoiding them\n3. Build structure—create clear plans and goals, executing methodically\n4. Embrace challenges—Saturn's tests are designed to make you stronger\n\nSaturn's lesson is ${yearly.saturnTrait.zh_advice || yearly.saturnTrait.advice}. Though this process may feel difficult, remember: every challenge is an opportunity for growth. When you overcome these obstacles, you'll find your能力和信心都达到了新的高度。\n\n【Career Recommendations】\n\n1. Seize the opportunities Jupiter brings, but be well-prepared\n2. Remain practical while expanding—avoid overcommitting\n3. Use this time to build long-term career foundations\n4. Connect with experienced individuals who can provide guidance\n5. Stay open to new ideas, but be deliberate in making decisions\n\n【Romantic Relationships】\n\n${currentYear} may be a year of romantic opportunities. Jupiter's position indicates potential for expansion and growth in matters of the heart. This may manifest as:\n\n1. Meeting new, meaningful partners\n2. Deepening of existing relationships\n3. More mature understanding of love and relationships\n4. Social circle expansion—potentially meeting someone through friends or activities\n\nThe Moon in ${yearly.moon?.sign || "Cancer"} in the ${yearly.moonHouse} means your emotional needs are tied to ${yearly.moonHouse}. You're seeking emotional security with a partner. In relationships, you need to feel understood and accepted.\n\n【Relationship Recommendations】\n\n1. Stay open to new possibilities, but don't rush into relationships\n2. Invest more emotional companionship in existing relationships\n3. Express your emotional needs honestly\n4. Find balance between independence and intimacy\n5. Pay attention to communication—many relationship issues stem from miscommunication\n\n【Health and Vitality】\n\nSaturn in ${yearly.saturnHouse} suggests you need to pay attention to health in this area. This may involve:\n\n1. A specific body system or organ\n2. Establishing long-term healthy habits\n3. Balancing work and rest\n4. Stress management techniques\n\nThe Sun in ${yearly.sun?.sign || "Aries"} in the ${yearly.sunHouse} also relates to your vitality and overall health. Pay attention to signals from the ${yearly.sunHouse} area—they may indicate your health status.\n\n【Health Recommendations】\n\n1. Establish regular sleep schedules—more important than any supplement\n2. Maintain balanced diet—avoid overindulgence\n3. Moderate exercise—choose forms that suit you\n4. Allow sufficient rest—avoid overtaxing yourself\n5. Regular checkups—prevention is always better than cure\n\n【Summary and Outlook】\n\n${currentYear} is a year of great potential for you. Jupiter's expansive energy brings opportunities, while Saturn's restrictive energy helps build solid foundations. These seemingly contradictory forces actually complement perfectly—allowing you to dream big while staying grounded.\n\nThis year's theme is "building while expanding." Whether in career, love, or health, you need to balance trying new things with maintaining stability. Remember: success isn't achieved overnight—it's the result of daily accumulation.\n\nMay you achieve growth, accomplish goals, and find happiness in ${currentYear}.`,

    monthly: `${currentMonth}/${currentYear} Monthly Forecast\n\nWelcome to your monthly horoscope for ${currentMonth}/${currentYear}. This month's energy focuses on communication, learning, daily interactions, and relationship dynamics.\n\n【Monthly Overview】\n\nThis month's Mercury energy is particularly active, influencing your thinking style and daily communications. Mercury encourages ${monthly.mercuryTrait.zh_focus || monthly.mercuryTrait.focus}, bringing energy to your communication, learning, and short travels.\n\nHowever, Saturn continues its pressure in the ${monthly.saturnHouse} house, requiring ${monthly.saturnTrait.zh_advice || monthly.saturnTrait.advice}. This energy might make you feel restricted or challenged, but remember: Saturn's resistance actually helps build more solid foundations.\n\n【Career and Work】\n\nThis month, communication and information flow become especially important in your career. Mercury's energy enhances your communication abilities, mental agility, and learning efficiency. This is:\n\n1. A good time for signing important agreements or contracts\n2. Timing for key conversations with colleagues or clients\n3. A golden period for learning new skills or knowledge\n4. Possible short trips or business travels that may bring unexpected gains\n\nBut note: Saturn's energy reminds you to not sacrifice quality while pursuing speed. Before making important decisions, ensure you have sufficient information and thorough consideration.\n\n【Career Recommendations】\n\n1. Seize the communication advantages Mercury brings this month\n2. But give yourself time to think before making important decisions\n3. Maintain good information flow with colleagues\n4. Keep records of important decision rationale for future reference\n5. Avoid making overly impulsive commitments this month\n\n【Romantic Relationships】\n\nThe Moon in the ${monthly.moonHouse} house this month means your emotional needs and state are closely tied to ${monthly.moonHouse}. You may:\n\n1. Have stronger needs for emotional connection\n2. Be more sensitive to others' emotions and attitudes\n3. Crave deeper psychological exchange\n4. Seek more security in relationships\n\nThis is a good time for deep communication with partners or potential partners. However, be aware: the sensitive period may easily lead to misunderstandings or emotional reactions. Clear communication is essential.\n\n【Relationship Recommendations】\n\n1. Proactively share your feelings and needs with partners\n2. Listen to partner's needs rather than assuming\n3. Avoid making important decisions when emotionally charged\n4. Handle differences constructively\n5. Give yourself alone time to process emotions\n\n【Health and Wellness】\n\nThis month requires special attention to health in the ${monthly.saturnHouse} area. This may involve your physical health, work environment, or daily habits.\n\nMercury's energy is suitable for exercise and physical activity—${monthly.mercuryTrait.zh_focus || monthly.mercuryTrait.focus} makes you more suited for sports requiring thinking and coordination. But be careful not to overwork yourself.\n\n【Health Recommendations】\n\n1. Establish stable sleep and wake schedules\n2. Choose moderate-intensity exercise methods\n3. Pay attention to workspace comfort\n4. Give yourself sufficient recovery time\n5. If you have any health concerns, consult professionals promptly\n\n【Summary】\n\n${currentMonth}/${currentYear} is a month of consolidation and organization. While not a time for massive expansion, it's a good time to deepen existing projects, solidify relationships, and prepare for next steps.\n\nMercury's energy makes this month full of information and communication opportunities, while Saturn's energy reminds you to work steadily. Together, this means a month of "learning while doing"—learning through action, adjusting through learning.\n\nMake good use of this month's energy to lay foundations for future development.`,

    daily: `Today's Horoscope - ${today}\n\nWelcome to your daily horoscope. Today's energy focuses on daily communication, mental activities, and fulfilling emotional needs.\n\n【Today's Overview】\n\nToday's energy is highly favorable for thinking, communication, and short trips. Mercury's position in ${daily.mercury?.sign || "Gemini"} drives your mental activity, encouraging ${daily.mercuryTrait.zh_focus || daily.mercuryTrait.focus}. This is a good time for communication, learning, and short travels.\n\nThe Sun's energy in ${daily.sun?.sign || "Aries"} reminds you to ${daily.sunTrait.advice.split(" ").slice(-2).join(" ")} before taking action. The energy today is suitable for launching new projects, but it's recommended you complete necessary planning first.\n\n【Career and Work】\n\nToday at work, communication and information processing become the focus. You may:\n\n1. Receive important emails or messages\n2. Have key conversations or meetings\n3. Solve some problems that have been bothering you\n4. Generate new ideas or creativity\n\nMercury's energy makes today especially suitable for brainstorming and information organization. Write down your ideas—they may become important assets tomorrow.\n\nHowever, the Sun's energy also reminds you to think before acting. Today is not a day for hasty decisions. Save action for tomorrow—let today be a day of planning and preparation.\n\n【Relationships】\n\nThe Moon in the ${daily.moonHouse} house makes today's emotional energy particularly strong. You may:\n\n1. Feel deeper emotional connections with others\n2. Crave deep exchange with close people\n3. Be more sensitive to subtle changes in relationships\n4. Want to spend more time with important people\n\nToday is perfect for spending time with family, partners, or close friends. Share your thoughts and feelings—you'll find that true connection comes from open-hearted communication.\n\n【Health Notes】\n\nPay attention to signals from the ${daily.sunHouse} area. This region may be more sensitive to today's energy changes.\n\nToday is suitable for light exercise—walking, yoga, or gentle stretching. These activities are beneficial not only for the body but also for organizing thoughts.\n\nAvoid overtaxing your energy today—give yourself space for rest.\n\n【Action Recommendations】\n\n1. Seize today's communication energy—contact people you've been missing\n2. Create a mind map or checklist to organize your thoughts\n3. Don't rush to make decisions—today is better for planning and preparation\n4. Spend quality time with important people—emotional connection is today's theme\n5. Give yourself sufficient rest—energy needs balance\n\n【Today's Summary】\n\nToday is a "thinking day"—not a day for action, but for organization and planning. Let your thoughts flow freely, but don't rush to transform them into actions. Consider today as a day of planting—tomorrow is the day for harvest.\n\nMaintain balance between action and reflection. Your intuition is especially sharp today—trust your inner guidance. When making decisions, listen to your heart—it knows what you truly need.`,
    positions: dailyPositions
  };
}

function updateUI() {
  // Update language buttons - both nav and profile (with fallback for missing elements)
  const langEn = document.getElementById('lang-en');
  const langZh = document.getElementById('lang-zh');
  const navLangEn = document.getElementById('nav-lang-en');
  const navLangZh = document.getElementById('nav-lang-zh');
  
  if (langEn) langEn.className = currentLanguage === 'en' ? 'active' : '';
  if (langZh) langZh.className = currentLanguage === 'zh' ? 'active' : '';
  if (navLangEn) navLangEn.className = currentLanguage === 'en' ? 'active' : '';
  if (navLangZh) navLangZh.className = currentLanguage === 'zh' ? 'active' : '';
  
  // Update nav links
  document.getElementById('nav-dashboard').textContent = t('navDashboard');
  document.getElementById('nav-profile').textContent = t('navProfile');
  
  // Update all text
  document.getElementById('hero-eyebrow').textContent = t('heroEyebrow');
  document.getElementById('hero-desc').textContent = t('heroDesc');
  document.getElementById('form-title').textContent = t('formTitle');
  document.getElementById('form-subtitle').textContent = t('formSubtitle');
  document.getElementById('label-name').textContent = t('labelName');
  document.getElementById('label-date').textContent = t('labelDate');
  document.getElementById('label-time').textContent = t('labelTime');
  document.getElementById('label-place').textContent = t('labelPlace');
  document.getElementById('btn-calculate').textContent = t('btnCalculate');
  document.getElementById('card-summary').textContent = t('cardSummary');
  document.getElementById('card-summary-desc').textContent = t('cardSummaryDesc');
  document.getElementById('card-yearly').textContent = t('cardYearly');
  document.getElementById('card-yearly-desc').textContent = t('cardYearlyDesc');
  document.getElementById('card-monthly').textContent = t('cardMonthly');
  document.getElementById('card-monthly-desc').textContent = t('cardMonthlyDesc');
  document.getElementById('card-daily').textContent = t('cardDaily');
  document.getElementById('card-daily-desc').textContent = t('cardDailyDesc');
  document.getElementById('reading-eyebrow').textContent = t('readingEyebrow');
  document.getElementById('matrix-title').textContent = t('matrixTitle');
  document.getElementById('profile-title').textContent = t('profileTitle');
  document.getElementById('birth-profile-title').textContent = t('birthProfileTitle');
  document.getElementById('btn-clear').textContent = t('btnClear');

  if (profile) {
const name = profile?.fullName ? profile.fullName.split(" ")[0] : t('seeker');
    document.getElementById('greeting').textContent = t('greeting').replace('{name}', name);
    document.getElementById('onboarding').classList.add('hidden');
    document.getElementById('readings').classList.remove('hidden');
  } else {
    document.getElementById('greeting').textContent = t('greeting').replace('{name}', t('seeker'));
    document.getElementById('onboarding').classList.remove('hidden');
    document.getElementById('readings').classList.add('hidden');
  }
}

function saveProfile() {
  const fullName = document.getElementById('fullName').value || "John";
  const dateOfBirth = document.getElementById('dateOfBirth').value || "1990-01-01";
  const timeOfBirth = document.getElementById('timeOfBirth').value || "20:00";
  const birthPlace = document.getElementById('birthPlace').value || "New York, NY, USA";
  
  profile = { fullName, dateOfBirth, timeOfBirth, birthPlace, language: currentLanguage };
  localStorage.setItem('kismet-profile', JSON.stringify(profile));
  
  updateUI();
}

function clearProfile() {
  profile = null;
  localStorage.removeItem('kismet-profile');
  updateUI();
  showDashboard();
}

function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('kismet-language', lang);
  if (profile) {
    profile.language = lang;
    localStorage.setItem('kismet-profile', JSON.stringify(profile));
  }
  updateUI();
  showDashboard();
}

function handleLanguageChange(lang) {
  setLanguage(lang);
}

function showDashboard() {
  document.getElementById('dashboard').classList.remove('hidden');
  document.getElementById('readingDetail').classList.add('hidden');
  document.getElementById('profile').classList.add('hidden');
  document.getElementById('nav-dashboard').classList.add('active');
  document.getElementById('nav-profile').classList.remove('active');
  updateUI();
}

function showReading(kind) {
  if (!profile) return;
  
  const alignment = computeAlignment(profile);
  const titles = {
    summary: t('titleSummary'),
    yearly: t('titleYearly'),
    monthly: t('titleMonthly'),
    daily: t('titleDaily')
  };
  
  document.getElementById('readingTitle').textContent = titles[kind];
  document.getElementById('readingBody').textContent = alignment[kind];
  
  const planetList = document.getElementById('planetList');
  planetList.innerHTML = alignment.positions.map(p => `
    <div class="planet-item">
      <p class="planet-name">${p.name}</p>
      <p class="planet-meta">${p.sign} · H${p.house}</p>
    </div>
  `).join('');
  
  document.getElementById('dashboard').classList.add('hidden');
  document.getElementById('profile').classList.add('hidden');
  document.getElementById('readingDetail').classList.remove('hidden');
}

function showProfile() {
  document.getElementById('dashboard').classList.add('hidden');
  document.getElementById('readingDetail').classList.add('hidden');
  document.getElementById('profile').classList.remove('hidden');
  document.getElementById('nav-dashboard').classList.remove('active');
  document.getElementById('nav-profile').classList.add('active');
  
  if (profile) {
    document.getElementById('profileData').innerHTML = `
      <div class="data-list">
        <div class="data-row"><span class="data-label">${t('profileName')}</span><span class="data-value">${profile.fullName}</span></div>
        <div class="data-row"><span class="data-label">${t('profileDate')}</span><span class="data-value">${profile.dateOfBirth}</span></div>
        <div class="data-row"><span class="data-label">${t('profileTime')}</span><span class="data-value">${profile.timeOfBirth}</span></div>
        <div class="data-row"><span class="data-label">${t('profilePlace')}</span><span class="data-value">${profile.birthPlace}</span></div>
      </div>
    `;
  } else {
    document.getElementById('profileData').innerHTML = '<div class="data-list"><p style="text-align: center; color: #86868B; padding: 20px;">No profile saved</p></div>';
  }
}

// Initialize
updateUI();
showDashboard();