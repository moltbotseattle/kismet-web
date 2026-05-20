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
    const buildReading = (t) => {
      const zhCareer = `【事业】你的太阳位于${t.sun?.sign || "白羊座"}${t.sunHouse}宫，这是你职业野心和公共形象的核心。${t.sunTrait.zh_focus}是你在职场展现自我的方式，而${t.sunTrait.zh_advice}是你需要关注的发展方向。土星在${t.saturn?.sign || "摩羯座"}${t.saturnHouse}宫意味着你在${t.saturnHouse}领域面临考验和责任。土星的教诲是${t.saturnTrait.zh_advice}——这是建立职业权威的必要过程。`;
      const zhRelation = `【情感】你的金星位于${t.venus?.sign || "天秤座"}${t.venusHouse}宫，这代表了你对爱情和美的追求。你在${t.venusHouse}领域寻求和谐与承诺。月亮在${t.moon?.sign || "巨蟹座"}${t.moonHouse}宫揭示了你的情感需求和安全感来源。`;
      const zhHealth = `【健康】你的太阳位于${t.sun?.sign || "白羊座"}${t.sunHouse}宫，这与你活力和整体健康状况相关。注意${t.sunHouse}领域的身体反应。月亮在${t.moon?.sign || "巨蟹座"}${t.moonHouse}宫影响你的情绪健康。`;
      return { zhCareer, zhRelation, zhHealth };
    };

    const s = buildReading(summary);
    const d = buildReading(daily);
    const m = buildReading(monthly);
    const y = buildReading(yearly);
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;

    return {
      summary: `${name}，你的太阳位于${summary.sun?.sign || "白羊座"}${summary.sunHouse}宫，赋予你${summary.sunTrait.zh_strength}。这塑造了你展现自我的核心方式——${summary.sunTrait.zh_focus}。你的太阳鼓励你${summary.sunTrait.zh_advice}。\n\n月亮位于${summary.moon?.sign || "巨蟹座"}${summary.moonHouse}宫，揭示了你的情感本质。\n\n${s.zhCareer}\n\n${s.zhRelation}\n\n${s.zhHealth}\n\n上升点和水星共同构成了你独特的星盘图谱。`,
      yearly: `${currentYear}年对你来说是重要的发展年份。\n\n【事业】木星位于${yearly.jupiter?.sign || "射手座"}${yearly.jupiterHouse}宫，带来扩张和成长的机会。这一年，你需要${yearly.jupiterTrait.zh_advice}，同时关注${yearly.jupiterHouse}领域的深入发展。土星在${yearly.saturn?.sign || "摩羯座"}${yearly.saturnHouse}宫运行，考验你的耐心。土星的教诲是${yearly.saturnTrait.zh_advice}。\n\n【情感】木星的位置显示你在感情上有扩张和成长的机会。${currentYear}年可能带来重要的感情发展。\n\n【健康】土星在${yearly.saturnHouse}宫暗示你需要关注${yearly.saturnHouse}方面的健康。建立规律的作息时间。\n\n当木星与土星相互作用时，你有机会在梦想与现实之间找到平衡。`,
      monthly: `本月能量分析（${currentMonth}月）：\n\n【事业】水星位于${monthly.mercury?.sign || "双子座"}${monthly.mercury?.house || 3}宫，影响着你的思考方式和交流。${monthly.mercuryTrait.zh_focus}为你的沟通带来活力。土星继续在${monthly.saturnHouse}宫施压，要求${monthly.saturnTrait.zh_advice}。\n\n【情感】本月月亮在${monthly.moonHouse}宫运行，情绪能量较强。注意在关系中保持沟通顺畅。\n\n【健康】本月重点关注${monthly.saturnHouse}领域。${monthly.mercuryTrait.zh_focus}的能量适合运动。\n\n整体能量：这个月是整理和巩固的好时机。`,
      daily: `今日星象：\n\n【事业】${daily.mercury?.name || "水星"}${daily.mercury?.sign || "双子座"}正在推动你的思维活跃度。${daily.mercuryTrait.zh_focus}。太阳${daily.sun?.sign || "白羊座"}的能量提醒你${daily.sunTrait.zh_advice.split(" ").slice(-2).join(" ")}后再行动。\n\n【情感】月亮在${daily.moonHouse}宫运行，情感需求更强烈。适合深入交流。\n\n【健康】注意${daily.sunHouse}领域的身体信号。今天适合轻度运动。\n\n整体能量：保持行动与反思的平衡，直觉今天特别敏锐。`,
      positions: dailyPositions
    };
  }

  // English versions
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;

  const buildReadingEn = (t) => ({
    career: `[Career] Sun in ${t.sun?.sign || "Aries"} in ${t.sunHouse}: ${t.sunTrait.focus}. Saturn in ${t.saturn?.sign || "Capricorn"} in ${t.saturnHouse}: ${t.saturnTrait.advice}.`,
    relation: `[Relationship] Venus in ${t.venus?.sign || "Libra"} in ${t.venusHouse}. Moon in ${t.moon?.sign || "Cancer"} in ${t.moonHouse}: emotional needs.`,
    health: `[Health] Sun in ${t.sunHouse} relates to vitality. Moon in ${t.moonHouse} affects emotional well-being.`
  });

  const s = buildReadingEn(summary);
  const d = buildReadingEn(daily);
  const m = buildReadingEn(monthly);
  const y = buildReadingEn(yearly);

  return {
    summary: `${name}, your Sun in ${summary.sun?.sign || "Aries"} in the ${summary.sunHouse} gives you ${summary.sunTrait.strength}. ${summary.sunTrait.focus}. Your Sun pushes you to ${summary.sunTrait.advice}.\n\nMoon in ${summary.moon?.sign || "Cancer"} in ${summary.moonHouse} reveals emotional nature.\n\n${s.career}\n\n${s.relation}\n\n${s.health}\n\nThe Ascendant and Mercury complete your blueprint.`,
    yearly: `${currentYear} — An Important Year of Growth:\n\n[Career] Jupiter in ${yearly.jupiter?.sign || "Sagittarius"} in ${yearly.jupiterHouse}: ${yearly.jupiterTrait.advice}. Saturn in ${yearly.saturn?.sign || "Capricorn"} in ${yearly.saturnHouse}: ${yearly.saturnTrait.advice}.\n\n[Relationship] Jupiter indicates romantic growth this year.\n\n[Health] Saturn in ${yearly.saturnHouse} suggests attention to this area.`,
    monthly: `This Month's Energy (${currentMonth}/${currentYear}):\n\n[Career] Mercury in ${monthly.mercury?.sign || "Gemini"} in house ${monthly.mercury?.house || 3}: ${monthly.mercuryTrait.focus}. Saturn in ${monthly.saturnHouse}: ${monthly.saturnTrait.advice}.\n\n[Relationship] Moon in ${monthly.moonHouse} heightens emotional sensitivity.\n\n[Health] ${monthly.mercuryTrait.focus} supports physical activity.`,
    daily: `Today's Cosmic Weather:\n\n[Career] ${daily.mercury?.name || "Mercury"} in ${daily.mercury?.sign || "Gemini"} drives mental activity. ${daily.mercuryTrait.focus}. Sun in ${daily.sun?.sign || "Aries"}: ${daily.sunTrait.advice.split(" ").slice(-2).join(" ")} before acting.\n\n[Relationship] Moon in ${daily.moonHouse} intensifies emotional needs.\n\n[Health] Watch ${daily.sunHouse} signals.`,
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