// Smart Krishi-Jal 3.0 Enterprise Core Logic with Complete Seasonal Crop Database

// --- Comprehensive Indian Crop Database (Rabi, Kharif, Zaid, Annual) ---
const CROPS_DATABASE = [
  // --- RABI CROPS (रबी - सर्दियों की फसलें) ---
  {
    id: "wheat",
    name_en: "Wheat",
    name_hi: "गेहूँ",
    season_category: "Rabi",
    season_en: "Rabi (Winter)",
    season_hi: "रबी (सर्दियों की फसल)",
    duration_days: 135,
    total_water_mm: "450 - 600 mm",
    total_irrigations_en: "5 - 6 Times",
    total_irrigations_hi: "5 - 6 बार",
    ideal_temp: "15°C - 25°C",
    kc_factor: 1.15,
    soil_type_en: "Sandy Loam to Clay Loam",
    soil_type_hi: "बलुई दोमट या चिकनी दोमट मिट्टी",
    description_en: "Watering at Crown Root Initiation (CRI) and heading stages is most crucial for grain yield.",
    description_hi: "गेहूँ में ताज जड़ (CRI) और बालियां निकलते समय पानी देना सबसे ज्यादा महत्वपूर्ण है।",
    mandi_data: {
      market_hi: "जयपुर मंडी (राजस्थान)",
      market_en: "Jaipur Mandi (Rajasthan)",
      price: 2440,
      change: "+₹35",
      min_max: "₹2,320 - ₹2,510",
      arrival_hi: "1,850 बोरी",
      arrival_en: "1,850 Bags"
    },
    leaf_doctor: {
      disease_hi: "पीला रतुआ (Yellow Rust)",
      disease_en: "Yellow Rust (Puccinia striiformis)",
      confidence: "94.6%",
      treatment_hi: "1. रासायनिक: प्रोपिकोनाज़ोल 25% EC 1 ml प्रति लीटर पानी में मिलाकर छिड़कें।<br>2. जैविक: खट्टी छाछ और नीम तेल का स्प्रे करें।",
      treatment_en: "1. Chemical: Spray Propiconazole 25% EC @ 1 ml/Litre.<br>2. Organic: Spray fermented buttermilk solution mixed with Neem oil."
    },
    disease_risks: [
      {
        name_en: "Yellow Rust",
        name_hi: "पीला रतुआ (Yellow Rust)",
        min_temp: 10,
        max_temp: 20,
        min_humidity: 75,
        warning_en: "Cold weather and high humidity (75%+) elevate Yellow Rust risk. Inspect for yellow leaf stripes; apply Propiconazole.",
        warning_hi: "ठंडी व अत्यधिक नमी (75%+) के कारण पीले रतुए का खतरा बढ़ गया है। पत्तियों पर पीले धब्बे देखें और प्रोपिकोनाज़ोल का छिड़काव करें।"
      }
    ],
    stages: [
      {
        stage_name_en: "Crown Root Initiation (CRI)",
        stage_name_hi: "ताज जड़ निकलना (CRI स्टेज)",
        start_day: 1,
        end_day: 25,
        min_moisture: 45,
        max_moisture: 75,
        critical_stage: true,
        water_need_level: "Critical",
        advice_en: "Crown roots emerge 20-25 days after sowing. Water stress now severely restricts tillering. Irrigate immediately.",
        advice_hi: "बुवाई के 20-25 दिन बाद ताज जड़ें निकलती हैं। इस समय पानी नहीं मिला तो कल्ले कम बनेंगे। तुरंत सिंचाई करें।"
      },
      {
        stage_name_en: "Tillering & Jointing",
        stage_name_hi: "कल्ले फूटना और तना बढ़ना",
        start_day: 26,
        end_day: 55,
        min_moisture: 40,
        max_moisture: 70,
        critical_stage: false,
        water_need_level: "Medium",
        advice_en: "Tillers are actively strengthening. Irrigate lightly only when moisture dips below 40%.",
        advice_hi: "कल्ले मजबूत हो रहे हैं। मिट्टी में 40% से नीचे नमी जाने पर ही हल्की सिंचाई करें।"
      },
      {
        stage_name_en: "Flowering & Heading",
        stage_name_hi: "गाभा व बालियां निकलना (फूल अवस्था)",
        start_day: 56,
        end_day: 85,
        min_moisture: 50,
        max_moisture: 75,
        critical_stage: true,
        water_need_level: "Critical",
        advice_en: "Earheads are emerging. Water deficit at this stage reduces grain count. Maintain moisture above 50%.",
        advice_hi: "बालियां निकल रही हैं। इस समय नमी की कमी से दाने छोटे रह जाएंगे। नमी 50% से ऊपर रखें।"
      },
      {
        stage_name_en: "Milking & Grain Filling",
        stage_name_hi: "दूधिया अवस्था व दाना भराव",
        start_day: 86,
        end_day: 115,
        min_moisture: 45,
        max_moisture: 70,
        critical_stage: true,
        water_need_level: "High",
        advice_en: "Grains are filling with starch. Avoid heavy irrigation during high winds to prevent lodging.",
        advice_hi: "दाने में दूध भर रहा है। तेज हवा के समय पानी न दें, हल्की सिंचाई करें।"
      },
      {
        stage_name_en: "Maturity & Ripening",
        stage_name_hi: "पकाव अवस्था",
        start_day: 116,
        end_day: 140,
        min_moisture: 25,
        max_moisture: 45,
        critical_stage: false,
        water_need_level: "Low",
        advice_en: "Crop is ripening. Stop irrigation completely to allow uniform field drying before harvest.",
        advice_hi: "फसल पक रही है, अब पानी देना बंद कर दें ताकि कटाई आसानी से हो सके।"
      }
    ]
  },
  {
    id: "mustard",
    name_en: "Mustard",
    name_hi: "सरसों",
    season_category: "Rabi",
    season_en: "Rabi (Winter)",
    season_hi: "रबी (सर्दियों की फसल)",
    duration_days: 115,
    total_water_mm: "250 - 350 mm",
    total_irrigations_en: "2 - 3 Times",
    total_irrigations_hi: "2 - 3 बार",
    ideal_temp: "15°C - 22°C",
    kc_factor: 0.85,
    soil_type_en: "Sandy Loam",
    soil_type_hi: "बलुई दोमट",
    description_en: "Mustard requires low water. Over-irrigation promotes root rot and fungal wilt.",
    description_hi: "सरसों कम पानी की फसल है। ज्यादा पानी देने से जड़ गलन और फंगस की समस्या हो जाती है।",
    mandi_data: {
      market_hi: "भरतपुर मंडी (राजस्थान)",
      market_en: "Bharatpur Mandi (Rajasthan)",
      price: 5740,
      change: "+₹65",
      min_max: "₹5,550 - ₹5,890",
      arrival_hi: "2,400 बोरी",
      arrival_en: "2,400 Bags"
    },
    leaf_doctor: {
      disease_hi: "सफेद रोली (White Rust)",
      disease_en: "White Rust (Albugo candida)",
      confidence: "92.1%",
      treatment_hi: "1. रासायनिक: रिडोमिल एमजेड 2 ग्राम प्रति लीटर पानी में मिलाकर छिड़कें।<br>2. सावधानी: खेत में जलभराव बिल्कुल न होने दें।",
      treatment_en: "1. Chemical: Spray Ridomil MZ @ 2g per Litre of water.<br>2. Drainage: Ensure zero stagnant water in the field."
    },
    disease_risks: [
      {
        name_en: "White Rust",
        name_hi: "सफेद रोली (White Rust)",
        min_temp: 12,
        max_temp: 20,
        min_humidity: 75,
        warning_en: "White pustules appear under leaves in high moisture. Prevent water stagnation.",
        warning_hi: "पत्तियों के नीचे सफेद फफोले दिख सकते हैं। अत्यधिक पानी न दें, जल निकास सुनिश्चित करें।"
      }
    ],
    stages: [
      {
        stage_name_en: "Vegetative",
        stage_name_hi: "अंकुरण व बढ़वार",
        start_day: 1,
        end_day: 30,
        min_moisture: 30,
        max_moisture: 55,
        critical_stage: false,
        water_need_level: "Low",
        advice_en: "Apply first irrigation around 30-35 days when lateral branches emerge.",
        advice_hi: "सरसों में पहली सिंचाई बुवाई के 30-35 दिन बाद ही करें।"
      },
      {
        stage_name_en: "Flowering Stage",
        stage_name_hi: "फूल आने की अवस्था",
        start_day: 31,
        end_day: 65,
        min_moisture: 38,
        max_moisture: 65,
        critical_stage: true,
        water_need_level: "High",
        advice_en: "Light irrigation during peak flowering boosts pod formation. Ensure no standing water.",
        advice_hi: "फूल खिलते समय सिंचाई करें, पर ध्यान रहे खेत में पानी ठहरना नहीं चाहिए।"
      },
      {
        stage_name_en: "Pod Formation (Siliqua)",
        stage_name_hi: "फलियां बनने की अवस्था",
        start_day: 66,
        end_day: 95,
        min_moisture: 35,
        max_moisture: 60,
        critical_stage: true,
        water_need_level: "Medium",
        advice_en: "Apply final light irrigation as seed development begins in pods.",
        advice_hi: "फलियों में दाने बनते समय दूसरी हल्की सिंचाई करें।"
      },
      {
        stage_name_en: "Maturity",
        stage_name_hi: "पकाव अवस्था",
        start_day: 96,
        end_day: 120,
        min_moisture: 20,
        max_moisture: 40,
        critical_stage: false,
        water_need_level: "Low",
        advice_en: "Pods turning golden brown. Stop irrigation.",
        advice_hi: "फलियां पीली पड़ने लगी हैं, पानी बिल्कुल बंद कर दें।"
      }
    ]
  },
  {
    id: "gram",
    name_en: "Gram / Chickpea",
    name_hi: "चना",
    season_category: "Rabi",
    season_en: "Rabi (Winter)",
    season_hi: "रबी (सर्दियों की फसल)",
    duration_days: 120,
    total_water_mm: "200 - 300 mm",
    total_irrigations_en: "1 - 2 Times",
    total_irrigations_hi: "1 - 2 बार",
    ideal_temp: "18°C - 26°C",
    kc_factor: 0.80,
    soil_type_en: "Medium Loam to Black Soil",
    soil_type_hi: "मध्यम दोमट या भारी काली मिट्टी",
    description_en: "Chickpea requires minimal water. Never irrigate during flowering to prevent flower drop.",
    description_hi: "चने को बहुत कम पानी चाहिए। फूल खिलते समय पानी देने से फूल गिर जाते हैं।",
    mandi_data: {
      market_hi: "इंदौर मंडी (मध्य प्रदेश)",
      market_en: "Indore Mandi (Madhya Pradesh)",
      price: 6150,
      change: "+₹40",
      min_max: "₹5,900 - ₹6,300",
      arrival_hi: "3,100 बोरी",
      arrival_en: "3,100 Bags"
    },
    leaf_doctor: {
      disease_hi: "उकठा रोग (Fusarium Wilt)",
      disease_en: "Fusarium Wilt (Fusarium oxysporum)",
      confidence: "93.4%",
      treatment_hi: "ट्राइकोडर्मा विरिडी 4 ग्राम प्रति किलो बीज दर से उपचारित करें।",
      treatment_en: "Seed treat with Trichoderma viride @ 4g/kg seed."
    },
    stages: [
      {
        stage_name_en: "Branching",
        stage_name_hi: "शाखाएं निकलना",
        start_day: 1,
        end_day: 45,
        min_moisture: 30,
        max_moisture: 55,
        critical_stage: true,
        water_need_level: "Medium",
        advice_en: "Apply first light irrigation 40-45 days after sowing if soil is parched.",
        advice_hi: "बुवाई के 40-45 दिन बाद पहली हल्की सिंचाई करें यदि मिट्टी में नमी कम हो।"
      },
      {
        stage_name_en: "Flowering (No Water!)",
        stage_name_hi: "फूल अवस्था (पानी न दें!)",
        start_day: 46,
        end_day: 75,
        min_moisture: 20,
        max_moisture: 45,
        critical_stage: false,
        water_need_level: "Low",
        advice_en: "Warning: Irrigation during flowering triggers excessive vegetative growth and flower shedding.",
        advice_hi: "सावधानी: फूल खिलने के दौरान पानी देने से फसल ज्यादा बढ़ जाती है और फूल गिर जाते हैं।"
      },
      {
        stage_name_en: "Pod Filling",
        stage_name_hi: "घेंटी में दाना भराव",
        start_day: 76,
        end_day: 105,
        min_moisture: 35,
        max_moisture: 60,
        critical_stage: true,
        water_need_level: "Medium",
        advice_en: "A light irrigation at pod filling stage substantially improves grain weight.",
        advice_hi: "घेंटी में दाना बनते समय एक हल्की सिंचाई काफी फायदेमंद रहती है।"
      },
      {
        stage_name_en: "Maturity",
        stage_name_hi: "पकाव",
        start_day: 106,
        end_day: 125,
        min_moisture: 15,
        max_moisture: 35,
        critical_stage: false,
        water_need_level: "Low",
        advice_en: "Crop turning brown. Withhold all water.",
        advice_hi: "पौधे भूरे हो रहे हैं, पानी की आवश्यकता नहीं है।"
      }
    ]
  },
  {
    id: "potato",
    name_en: "Potato",
    name_hi: "आलू",
    season_category: "Rabi",
    season_en: "Rabi (Winter)",
    season_hi: "रबी (सर्दियों की फसल)",
    duration_days: 105,
    total_water_mm: "450 - 550 mm",
    total_irrigations_en: "6 - 8 Times",
    total_irrigations_hi: "6 - 8 बार (हल्की सिंचाई)",
    ideal_temp: "15°C - 20°C",
    kc_factor: 1.10,
    soil_type_en: "Friable Sandy Loam",
    soil_type_hi: "भुरभुरी बलुई दोमट",
    description_en: "Potato has shallow roots; it demands uniform, frequent light irrigation to prevent knobby tubers.",
    description_hi: "आलू की जड़ें उथली होती हैं, इसलिए इसे बार-बार हल्की सिंचाई की आवश्यकता होती है।",
    mandi_data: {
      market_hi: "आगरा मंडी (उत्तर प्रदेश)",
      market_en: "Agra Mandi (Uttar Pradesh)",
      price: 1320,
      change: "-₹20",
      min_max: "₹1,180 - ₹1,420",
      arrival_hi: "4,200 कट्टे",
      arrival_en: "4,200 Sacks"
    },
    leaf_doctor: {
      disease_hi: "पिछेता झुलसा (Late Blight)",
      disease_en: "Late Blight (Phytophthora infestans)",
      confidence: "96.4%",
      treatment_hi: "मैन्कोजेब 75% WP 2.5 ग्राम प्रति लीटर पानी में मिलाकर स्प्रे करें।",
      treatment_en: "Spray Mancozeb 75% WP @ 2.5g/Litre immediately."
    },
    stages: [
      {
        stage_name_en: "Sprouting",
        stage_name_hi: "अंकुरण व वृद्धि",
        start_day: 1,
        end_day: 25,
        min_moisture: 45,
        max_moisture: 70,
        critical_stage: false,
        water_need_level: "Medium",
        advice_en: "Shoots emerging. Provide first light irrigation to ensure steady emergence.",
        advice_hi: "आलू के पौधे बाहर आ रहे हैं। पहली हल्की सिंचाई करें।"
      },
      {
        stage_name_en: "Tuber Initiation",
        stage_name_hi: "कंद बनने की शुरुआत",
        start_day: 26,
        end_day: 50,
        min_moisture: 55,
        max_moisture: 80,
        critical_stage: true,
        water_need_level: "Critical",
        advice_en: "Critical stage! Stolons are hooking into tubers. Keep moisture above 55%.",
        advice_hi: "अति महत्वपूर्ण अवस्था! कंद बनना शुरू हो गए हैं, खेत में 55% से ज्यादा नमी रखें।"
      },
      {
        stage_name_en: "Tuber Bulking",
        stage_name_hi: "कंद का आकार बढ़ना",
        start_day: 51,
        end_day: 85,
        min_moisture: 50,
        max_moisture: 75,
        critical_stage: true,
        water_need_level: "High",
        advice_en: "Tubers expanding rapidly. Irrigate every 7-8 days depending on soil type.",
        advice_hi: "आलू तेजी से मोटा हो रहा है। नियमित 7-8 दिन के अंतर पर पानी दें।"
      },
      {
        stage_name_en: "Maturity",
        stage_name_hi: "पकाव व छिलका सख्त होना",
        start_day: 86,
        end_day: 110,
        min_moisture: 25,
        max_moisture: 45,
        critical_stage: false,
        water_need_level: "Low",
        advice_en: "Withhold watering 10-12 days before harvest to harden the tuber skin.",
        advice_hi: "खुदाई से 12 दिन पहले सिंचाई बंद कर दें ताकि आलू का छिलका कड़ा हो जाए।"
      }
    ]
  },
  {
    id: "garlic",
    name_en: "Garlic",
    name_hi: "लहसुन",
    season_category: "Rabi",
    season_en: "Rabi (Winter)",
    season_hi: "रबी (सर्दियों की फसल)",
    duration_days: 135,
    total_water_mm: "350 - 450 mm",
    total_irrigations_en: "8 - 10 Times",
    total_irrigations_hi: "8 - 10 बार (हल्की सिंचाई)",
    ideal_temp: "15°C - 24°C",
    kc_factor: 1.00,
    soil_type_en: "Rich Loam Soil",
    soil_type_hi: "जीवांश युक्त उपजाऊ दोमट",
    description_en: "Garlic needs shallow, frequent watering. Bulb development stage requires strict moisture maintenance.",
    description_hi: "लहसुन की गांठें बनते समय पर्याप्त नमी बहुत जरूरी है, कटाई से 15 दिन पहले पानी बंद करें।",
    mandi_data: {
      market_hi: "नीमच मंडी (मध्य प्रदेश)",
      market_en: "Neemuch Mandi (MP)",
      price: 12500,
      change: "+₹150",
      min_max: "₹11,000 - ₹14,200",
      arrival_hi: "1,600 बोरी",
      arrival_en: "1,600 Bags"
    },
    stages: [
      {
        stage_name_en: "Establishment",
        stage_name_hi: "अंकुरण व जमाव",
        start_day: 1,
        end_day: 30,
        min_moisture: 45,
        max_moisture: 70,
        critical_stage: false,
        water_need_level: "Medium",
        advice_en: "Ensure even moisture for uniform clove sprouting.",
        advice_hi: "कलियों के अच्छे जमाव के लिए हल्की नमी बनाए रखें।"
      },
      {
        stage_name_en: "Bulb Formation",
        stage_name_hi: "गांठ बनना व विकास",
        start_day: 31,
        end_day: 100,
        min_moisture: 50,
        max_moisture: 75,
        critical_stage: true,
        water_need_level: "Critical",
        advice_en: "Bulbs expanding underground. Regular 7-10 day watering is vital.",
        advice_hi: "लहसुन की गांठें बन रही हैं, हर 8-10 दिन में हल्की सिंचाई करें।"
      },
      {
        stage_name_en: "Maturity",
        stage_name_hi: "पकाव व कटाई",
        start_day: 101,
        end_day: 140,
        min_moisture: 20,
        max_moisture: 40,
        critical_stage: false,
        water_need_level: "Low",
        advice_en: "Tops drying. Cease watering to prevent bulb rot.",
        advice_hi: "पत्तियां सूखने लगी हैं, पानी पूरी तरह बंद कर दें।"
      }
    ]
  },

  // --- KHARIF CROPS (खरीफ - मानसून की फसलें) ---
  {
    id: "rice",
    name_en: "Rice / Paddy",
    name_hi: "धान (चावल)",
    season_category: "Kharif",
    season_en: "Kharif (Monsoon)",
    season_hi: "खरीफ (मानसून की फसल)",
    duration_days: 130,
    total_water_mm: "1100 - 1500 mm",
    total_irrigations_en: "Continuous / 10 - 12 Times",
    total_irrigations_hi: "निरंतर नमी / 10 - 12 बार",
    ideal_temp: "22°C - 32°C",
    kc_factor: 1.25,
    soil_type_en: "Clayey Loam / Heavy Soil",
    soil_type_hi: "चिकनी मटियारी मिट्टी",
    description_en: "Rice has the highest water requirement. Panicle initiation and flowering cannot endure moisture stress.",
    description_hi: "धान को सबसे अधिक पानी की जरूरत होती है। कल्ले फूटते और बालियां निकलते समय खेत में पानी कम नहीं होना चाहिए।",
    mandi_data: {
      market_hi: "करनाल मंडी (हरियाणा)",
      market_en: "Karnal Mandi (Haryana)",
      price: 3850,
      change: "+₹45",
      min_max: "₹3,600 - ₹4,100",
      arrival_hi: "5,200 बोरी",
      arrival_en: "5,200 Bags"
    },
    stages: [
      {
        stage_name_en: "Transplanting",
        stage_name_hi: "रोपाई व स्थापना",
        start_day: 1,
        end_day: 20,
        min_moisture: 70,
        max_moisture: 95,
        critical_stage: true,
        water_need_level: "Critical",
        advice_en: "Maintain standing water of 2-3 cm after transplanting.",
        advice_hi: "रोपाई के समय खेत में पानी भरा होना जरूरी है ताकि पौधे सूखें नहीं।"
      },
      {
        stage_name_en: "Tillering Stage",
        stage_name_hi: "कल्ले निकलने की अवस्था",
        start_day: 21,
        end_day: 50,
        min_moisture: 65,
        max_moisture: 90,
        critical_stage: true,
        water_need_level: "High",
        advice_en: "Active tillering. Keep saturated soil conditions.",
        advice_hi: "पौधे में कल्ले फूट रहे हैं। पर्याप्त नमी (65%+) बनाए रखें।"
      },
      {
        stage_name_en: "Flowering & Heading",
        stage_name_hi: "बालियां व फूल निकलना",
        start_day: 51,
        end_day: 90,
        min_moisture: 70,
        max_moisture: 95,
        critical_stage: true,
        water_need_level: "Critical",
        advice_en: "Extremely critical! Even 1 day moisture stress slashes yield by 30%.",
        advice_hi: "अति संवेदनशील अवस्था! 1 दिन भी पानी की कमी से पैदावार 30% गिर सकती है।"
      },
      {
        stage_name_en: "Maturity",
        stage_name_hi: "पकाव",
        start_day: 91,
        end_day: 135,
        min_moisture: 25,
        max_moisture: 50,
        critical_stage: false,
        water_need_level: "Low",
        advice_en: "Drain standing water 10-12 days before harvest.",
        advice_hi: "कटाई से 10-12 दिन पहले खेत से सारा पानी निकाल दें।"
      }
    ]
  },
  {
    id: "cotton",
    name_en: "Cotton",
    name_hi: "कपास",
    season_category: "Kharif",
    season_en: "Kharif (Monsoon)",
    season_hi: "खरीफ (मानसून की फसल)",
    duration_days: 160,
    total_water_mm: "650 - 850 mm",
    total_irrigations_en: "5 - 7 Times",
    total_irrigations_hi: "5 - 7 बार",
    ideal_temp: "25°C - 35°C",
    kc_factor: 1.15,
    soil_type_en: "Deep Black Cotton Soil",
    soil_type_hi: "गहरी काली कपासी मिट्टी",
    description_en: "Critical water periods are flowering and boll development. Stagnant water induces root rot.",
    description_hi: "कपास में फूल और गूलर (Boll) बनते समय पानी की कमी नहीं होनी चाहिए।",
    mandi_data: {
      market_hi: "राजकोट मंडी (गुजरात)",
      market_en: "Rajkot Mandi (Gujarat)",
      price: 7250,
      change: "+₹110",
      min_max: "₹6,900 - ₹7,550",
      arrival_hi: "3,400 गांठ",
      arrival_en: "3,400 Bales"
    },
    stages: [
      {
        stage_name_en: "Seedling",
        stage_name_hi: "अंकुरण व बढ़वार",
        start_day: 1,
        end_day: 35,
        min_moisture: 35,
        max_moisture: 60,
        critical_stage: false,
        water_need_level: "Low",
        advice_en: "Controlled watering encourages deep taproot penetration.",
        advice_hi: "शुरुआत में कम पानी दें ताकि जड़ें गहराई तक जाएं।"
      },
      {
        stage_name_en: "Flowering & Boll Formation",
        stage_name_hi: "फूल व गूलर बनना",
        start_day: 36,
        end_day: 120,
        min_moisture: 50,
        max_moisture: 75,
        critical_stage: true,
        water_need_level: "Critical",
        advice_en: "Critical stage! Water deficit causes premature boll shedding.",
        advice_hi: "फूल और गूलर बनते समय पानी की कमी से गूलर झड़ जाते हैं।"
      },
      {
        stage_name_en: "Boll Bursting",
        stage_name_hi: "गूलर का फटना व चुगाई",
        start_day: 121,
        end_day: 165,
        min_moisture: 25,
        max_moisture: 45,
        critical_stage: false,
        water_need_level: "Low",
        advice_en: "Stop irrigation to prevent fiber staining and rot.",
        advice_hi: "कपास खिल रही है, पानी बंद रखें ताकि रुई खराब न हो।"
      }
    ]
  },
  {
    id: "maize",
    name_en: "Maize / Corn",
    name_hi: "मक्का",
    season_category: "Kharif",
    season_en: "Kharif (Monsoon)",
    season_hi: "खरीफ (मानसून की फसल)",
    duration_days: 100,
    total_water_mm: "500 - 650 mm",
    total_irrigations_en: "4 - 5 Times",
    total_irrigations_hi: "4 - 5 बार",
    ideal_temp: "20°C - 30°C",
    kc_factor: 1.15,
    soil_type_en: "Well-Drained Loam",
    soil_type_hi: "अच्छे जल निकास वाली दोमट",
    description_en: "Tasseling and silking are the most critical water stress stages in corn.",
    description_hi: "मक्के में मंजरी और भुट्टे में बाल आते समय पानी की कमी से दाने नहीं बनते।",
    mandi_data: {
      market_hi: "दाहोद मंडी (गुजरात)",
      market_en: "Dahod Mandi (Gujarat)",
      price: 2180,
      change: "+₹25",
      min_max: "₹2,050 - ₹2,280",
      arrival_hi: "1,900 बोरी",
      arrival_en: "1,900 Bags"
    },
    stages: [
      {
        stage_name_en: "Knee-high Stage",
        stage_name_hi: "घुटने तक की ऊंचाई",
        start_day: 1,
        end_day: 35,
        min_moisture: 40,
        max_moisture: 70,
        critical_stage: false,
        water_need_level: "Medium",
        advice_en: "Plants growing rapidly. Provide adequate moisture.",
        advice_hi: "पौधे घुटने के बराबर हो रहे हैं। आवश्यकतानुसार सिंचाई करें।"
      },
      {
        stage_name_en: "Tasseling & Silking",
        stage_name_hi: "मंजरी व भुट्टे में बाल",
        start_day: 36,
        end_day: 65,
        min_moisture: 55,
        max_moisture: 80,
        critical_stage: true,
        water_need_level: "Critical",
        advice_en: "Moisture deficit now leads to poor pollination and barren ears.",
        advice_hi: "अति संवेदनशील अवस्था! इस समय पानी की कमी से भुट्टे में दाने नहीं बनेंगे।"
      },
      {
        stage_name_en: "Maturity",
        stage_name_hi: "पकाव",
        start_day: 66,
        end_day: 105,
        min_moisture: 25,
        max_moisture: 45,
        critical_stage: false,
        water_need_level: "Low",
        advice_en: "Husk dry. Withhold irrigation.",
        advice_hi: "भुट्टे का छिलका सूख गया है, पानी बंद करें।"
      }
    ]
  },
  {
    id: "bajra",
    name_en: "Bajra / Pearl Millet",
    name_hi: "बाजरा",
    season_category: "Kharif",
    season_en: "Kharif (Monsoon)",
    season_hi: "खरीफ (मानसून की फसल)",
    duration_days: 85,
    total_water_mm: "250 - 350 mm",
    total_irrigations_en: "1 - 2 Times",
    total_irrigations_hi: "1 - 2 बार (सूखा सहने वाली)",
    ideal_temp: "25°C - 35°C",
    kc_factor: 0.85,
    soil_type_en: "Sandy to Sandy Loam",
    soil_type_hi: "रेतीली या बलुई दोमट",
    description_en: "Drought-hardy crop. Needs irrigation only if dry spell exceeds 25 days during flowering.",
    description_hi: "बाजरा सूखा सहन करने वाली फसल है। बालियां निकलते समय ही पानी की जरूरत होती है।",
    mandi_data: {
      market_hi: "जोधपुर मंडी (राजस्थान)",
      market_en: "Jodhpur Mandi (Rajasthan)",
      price: 2350,
      change: "+₹15",
      min_max: "₹2,200 - ₹2,420",
      arrival_hi: "1,400 बोरी",
      arrival_en: "1,400 Bags"
    },
    stages: [
      {
        stage_name_en: "Vegetative",
        stage_name_hi: "वानस्पतिक बढ़वार",
        start_day: 1,
        end_day: 30,
        min_moisture: 25,
        max_moisture: 50,
        critical_stage: false,
        water_need_level: "Low",
        advice_en: "Rainfed conditions usually suffice.",
        advice_hi: "मानसून की बारिश काफी होती है, पानी तभी दें जब जमीन सूखने लगे।"
      },
      {
        stage_name_en: "Flowering & Grain Set",
        stage_name_hi: "सिट्टा (बाली) निकलना व दाना",
        start_day: 31,
        end_day: 65,
        min_moisture: 35,
        max_moisture: 65,
        critical_stage: true,
        water_need_level: "Medium",
        advice_en: "If rain fails, apply a protective irrigation during earhead emergence.",
        advice_hi: "यदि बारिश न हो, तो सिट्टा निकलते समय एक सिंचाई अवश्य करें।"
      },
      {
        stage_name_en: "Maturity",
        stage_name_hi: "पकाव",
        start_day: 66,
        end_day: 90,
        min_moisture: 20,
        max_moisture: 40,
        critical_stage: false,
        water_need_level: "Low",
        advice_en: "Grain hardened. Stop water.",
        advice_hi: "दाना सख्त हो चुका है, पानी बंद करें।"
      }
    ]
  },
  {
    id: "soybean",
    name_en: "Soybean",
    name_hi: "सोयाबीन",
    season_category: "Kharif",
    season_en: "Kharif (Monsoon)",
    season_hi: "खरीफ (मानसून की फसल)",
    duration_days: 95,
    total_water_mm: "450 - 600 mm",
    total_irrigations_en: "2 - 3 Times",
    total_irrigations_hi: "2 - 3 बार (बारिश न होने पर)",
    ideal_temp: "22°C - 32°C",
    kc_factor: 1.10,
    soil_type_en: "Medium to Deep Black Soil",
    soil_type_hi: "मध्यम से गहरी काली मिट्टी",
    description_en: "Water stress during pod filling severely diminishes seed size and oil content.",
    description_hi: "सोयाबीन में फूल और फली भरते समय यदि बारिश न हो तो तुरंत सिंचाई जरूरी है।",
    mandi_data: {
      market_hi: "उज्जैन मंडी (मध्य प्रदेश)",
      market_en: "Ujjain Mandi (Madhya Pradesh)",
      price: 4680,
      change: "+₹30",
      min_max: "₹4,450 - ₹4,850",
      arrival_hi: "3,800 बोरी",
      arrival_en: "3,800 Bags"
    },
    stages: [
      {
        stage_name_en: "Vegetative",
        stage_name_hi: "प्रारंभिक बढ़वार",
        start_day: 1,
        end_day: 30,
        min_moisture: 40,
        max_moisture: 70,
        critical_stage: false,
        water_need_level: "Medium",
        advice_en: "Healthy vegetative branching. Ensure no waterlogging.",
        advice_hi: "पौधे बढ़ रहे हैं। खेत में पानी रुकना नहीं चाहिए।"
      },
      {
        stage_name_en: "Flowering & Pod Filling",
        stage_name_hi: "फूल व फली दाना भराव",
        start_day: 31,
        end_day: 75,
        min_moisture: 50,
        max_moisture: 75,
        critical_stage: true,
        water_need_level: "Critical",
        advice_en: "Pod filling requires stable moisture. Irrigate if dry spell occurs.",
        advice_hi: "फलियों में दाना भर रहा है। सूखा पड़ने पर तुरंत पानी दें।"
      },
      {
        stage_name_en: "Maturity",
        stage_name_hi: "पकाव व पत्तियां गिरना",
        start_day: 76,
        end_day: 100,
        min_moisture: 20,
        max_moisture: 40,
        critical_stage: false,
        water_need_level: "Low",
        advice_en: "Leaves yellowing. Withhold watering.",
        advice_hi: "पत्तियां पीली होकर गिरने लगी हैं, सिंचाई बंद करें।"
      }
    ]
  },

  // --- ZAID CROPS (जायद - गर्मी की फसलें) ---
  {
    id: "watermelon",
    name_en: "Watermelon",
    name_hi: "तरबूज",
    season_category: "Zaid",
    season_en: "Zaid (Summer)",
    season_hi: "जायद (गर्मी की फसल)",
    duration_days: 85,
    total_water_mm: "400 - 550 mm",
    total_irrigations_en: "Every 4 - 6 Days",
    total_irrigations_hi: "हर 4 - 6 दिन में (नियमित)",
    ideal_temp: "25°C - 35°C",
    kc_factor: 1.05,
    soil_type_en: "Riverbed Sandy Loam",
    soil_type_hi: "नदी कछार की रेतीली दोमट",
    description_en: "Summer crop with high water needs. Reduce water before harvesting to boost sweetness.",
    description_hi: "गर्मी की फसल है। फल पकते समय पानी कम करने से तरबूज में मिठास बढ़ती है।",
    mandi_data: {
      market_hi: "आजादपुर मंडी (दिल्ली)",
      market_en: "Azadpur Mandi (Delhi)",
      price: 1400,
      change: "+₹50",
      min_max: "₹1,200 - ₹1,650",
      arrival_hi: "85 ट्रक",
      arrival_en: "85 Trucks"
    },
    stages: [
      {
        stage_name_en: "Vine Growth",
        stage_name_hi: "बेल फैलना",
        start_day: 1,
        end_day: 30,
        min_moisture: 45,
        max_moisture: 70,
        critical_stage: false,
        water_need_level: "Medium",
        advice_en: "Keep soil moist around the basin for rapid vine expansion.",
        advice_hi: "बेल तेजी से बढ़ रही है, थालों में नियमित हल्की नमी रखें।"
      },
      {
        stage_name_en: "Fruit Development",
        stage_name_hi: "फल का आकार बढ़ना",
        start_day: 31,
        end_day: 65,
        min_moisture: 55,
        max_moisture: 80,
        critical_stage: true,
        water_need_level: "Critical",
        advice_en: "Fruits enlarging rapidly. Regular watering prevents hollow hearts.",
        advice_hi: "तरबूज तेजी से बढ़ रहे हैं, हर 4-5 दिन में पानी दें।"
      },
      {
        stage_name_en: "Ripening & Sugar Accumulation",
        stage_name_hi: "पकाव व मिठास संचय",
        start_day: 66,
        end_day: 90,
        min_moisture: 25,
        max_moisture: 45,
        critical_stage: false,
        water_need_level: "Low",
        advice_en: "Cut irrigation 7-10 days prior to harvest to concentrate sugar.",
        advice_hi: "तुड़ाई से 8-10 दिन पहले पानी कम कर दें ताकि मिठास बढ़ सके।"
      }
    ]
  },
  {
    id: "cucumber",
    name_en: "Cucumber",
    name_hi: "खीरा / ककड़ी",
    season_category: "Zaid",
    season_en: "Zaid (Summer)",
    season_hi: "जायद (गर्मी की फसल)",
    duration_days: 65,
    total_water_mm: "350 - 450 mm",
    total_irrigations_en: "Every 3 - 4 Days",
    total_irrigations_hi: "हर 3 - 4 दिन में",
    ideal_temp: "24°C - 32°C",
    kc_factor: 1.00,
    soil_type_en: "Organic Sandy Loam",
    soil_type_hi: "उपजाऊ बलुई दोमट",
    description_en: "Cucumber requires continuous moisture. Moisture fluctuations produce bitter cucumbers.",
    description_hi: "खीरे में पानी की कमी से फल कड़वा हो जाता है और टेढ़ा बनता है।",
    mandi_data: {
      market_hi: "गाजीपुर मंडी (दिल्ली)",
      market_en: "Ghazipur Mandi (Delhi)",
      price: 1650,
      change: "+₹60",
      min_max: "₹1,400 - ₹1,900",
      arrival_hi: "2,200 क्रेट",
      arrival_en: "2,200 Crates"
    },
    stages: [
      {
        stage_name_en: "Vegetative",
        stage_name_hi: "बेल की बढ़वार",
        start_day: 1,
        end_day: 20,
        min_moisture: 45,
        max_moisture: 70,
        critical_stage: false,
        water_need_level: "Medium",
        advice_en: "Regular light watering ensures tender vine growth.",
        advice_hi: "बेल फैल रही है, हल्की और नियमित नमी रखें।"
      },
      {
        stage_name_en: "Flowering & Fruiting",
        stage_name_hi: "फूल व फल लगना",
        start_day: 21,
        end_day: 55,
        min_moisture: 55,
        max_moisture: 75,
        critical_stage: true,
        water_need_level: "Critical",
        advice_en: "Fruit picking stage. Daily or alternate-day drip irrigation required.",
        advice_hi: "फल बन रहे हैं। नियमित पानी दें ताकि खीरा कड़वा न हो।"
      },
      {
        stage_name_en: "Harvesting End",
        stage_name_hi: "तुड़ाई समाप्ति",
        start_day: 56,
        end_day: 70,
        min_moisture: 30,
        max_moisture: 50,
        critical_stage: false,
        water_need_level: "Low",
        advice_en: "Vines declining. Wind down irrigation.",
        advice_hi: "फसल समाप्त हो रही है।"
      }
    ]
  },
  {
    id: "okra",
    name_en: "Okra / Ladyfinger",
    name_hi: "भिंडी",
    season_category: "Zaid",
    season_en: "Zaid / Summer",
    season_hi: "जायद व गर्मी",
    duration_days: 85,
    total_water_mm: "400 - 550 mm",
    total_irrigations_en: "Every 4 - 5 Days in Summer",
    total_irrigations_hi: "गर्मियों में हर 4-5 दिन",
    ideal_temp: "24°C - 35°C",
    kc_factor: 1.00,
    soil_type_en: "Sandy Loam to Clay Loam",
    soil_type_hi: "बलुई दोमट",
    description_en: "Summer okra needs frequent irrigation. Inadequate moisture yields woody, fibrous pods.",
    description_hi: "गर्मियों में भिंडी को हर 4-5 दिन में पानी चाहिए, वरना भिंडी सख्त और रेशेदार हो जाती है।",
    mandi_data: {
      market_hi: "वाशी मंडी (मुंबई)",
      market_en: "Vashi Mandi (Mumbai)",
      price: 2800,
      change: "-₹50",
      min_max: "₹2,500 - ₹3,100",
      arrival_hi: "1,950 टोकरी",
      arrival_en: "1,950 Baskets"
    },
    stages: [
      {
        stage_name_en: "Germination",
        stage_name_hi: "अंकुरण व बढ़वार",
        start_day: 1,
        end_day: 25,
        min_moisture: 45,
        max_moisture: 70,
        critical_stage: false,
        water_need_level: "Medium",
        advice_en: "Maintain moist beds for vigorous shoot development.",
        advice_hi: "पौधे बढ़ रहे हैं, क्यारियों में हल्की नमी रखें।"
      },
      {
        stage_name_en: "Flowering & Pod Picking",
        stage_name_hi: "फूल आना व भिंडी तुड़ाई",
        start_day: 26,
        end_day: 75,
        min_moisture: 50,
        max_moisture: 75,
        critical_stage: true,
        water_need_level: "Critical",
        advice_en: "Continuous picking. Irrigate after every alternate picking.",
        advice_hi: "तुड़ाई के दौरान पानी की कमी से भिंडी कड़ी हो जाती है। नमी 50%+ रखें।"
      },
      {
        stage_name_en: "Crop End",
        stage_name_hi: "समाप्ति",
        start_day: 76,
        end_day: 95,
        min_moisture: 25,
        max_moisture: 45,
        critical_stage: false,
        water_need_level: "Low",
        advice_en: "Final harvest.",
        advice_hi: "अंतिम तुड़ाई।"
      }
    ]
  },

  // --- ANNUAL / CASH CROPS (सालाना / नकदी फसलें) ---
  {
    id: "sugarcane",
    name_en: "Sugarcane",
    name_hi: "गन्ना",
    season_category: "Annual",
    season_en: "Annual Cash Crop",
    season_hi: "सालाना नकदी फसल",
    duration_days: 360,
    total_water_mm: "1500 - 2500 mm",
    total_irrigations_en: "15 - 20 Times",
    total_irrigations_hi: "15 - 20 बार (भारी जल आवश्यकता)",
    ideal_temp: "25°C - 38°C",
    kc_factor: 1.25,
    soil_type_en: "Deep Fertile Loam",
    soil_type_hi: "गहरी उपजाऊ दोमट या भारी काली मिट्टी",
    description_en: "Heavy water consumer. Formative and grand elongation stages require abundant irrigation.",
    description_hi: "गन्ना भारी पानी की फसल है। गर्मियों में हर 7 से 10 दिन में सिंचाई जरूरी है।",
    mandi_data: {
      market_hi: "मुजफ्फरनगर मंडी (UP)",
      market_en: "Muzaffarnagar (UP)",
      price: 375,
      change: "+₹15",
      min_max: "₹360 - ₹395",
      arrival_hi: "12,000 क्विंटल",
      arrival_en: "12,000 Quintals"
    },
    stages: [
      {
        stage_name_en: "Tillering & Formative",
        stage_name_hi: "अंकुरण व कल्ले फूटना",
        start_day: 1,
        end_day: 100,
        min_moisture: 55,
        max_moisture: 80,
        critical_stage: true,
        water_need_level: "High",
        advice_en: "Keep soil well moistened to encourage maximum tiller survival.",
        advice_hi: "कल्ले बनते समय नमी 55% से ऊपर रखें।"
      },
      {
        stage_name_en: "Grand Growth",
        stage_name_hi: "तीव्र बढ़वार (गन्ना बनना)",
        start_day: 101,
        end_day: 270,
        min_moisture: 60,
        max_moisture: 85,
        critical_stage: true,
        water_need_level: "Critical",
        advice_en: "Cane elongation period. Highest water consumption phase.",
        advice_hi: "इस समय गन्ने की लंबाई और मोटाई बनती है। पर्याप्त पानी मिलना सबसे महत्वपूर्ण है।"
      },
      {
        stage_name_en: "Ripening & Sugar Synthesis",
        stage_name_hi: "पकाव व मिठास संचय",
        start_day: 271,
        end_day: 360,
        min_moisture: 35,
        max_moisture: 60,
        critical_stage: false,
        water_need_level: "Low",
        advice_en: "Gradually reduce water 30 days before cutting to concentrate sucrose.",
        advice_hi: "कटाई से 1 महीना पहले पानी कम करें ताकि मिठास बढ़ सके।"
      }
    ]
  }
];

// Active Season Filter for Encyclopedia
let activeSeasonFilter = "all";

// --- Multi-Language Translation Engine (Loaded via translations.js) ---
// Note: TRANSLATIONS, SUPPORTED_LANGUAGES, SEASON_TRANSLATIONS, CROP_REGIONAL_NAMES are loaded from translations.js

function getCropDisplayName(crop, lang) {
  if (typeof CROP_REGIONAL_NAMES !== 'undefined' && CROP_REGIONAL_NAMES[crop.id] && CROP_REGIONAL_NAMES[crop.id][lang]) {
    return CROP_REGIONAL_NAMES[crop.id][lang];
  }
  if (lang === 'en') return crop.name_en;
  return crop.name_hi || crop.name_en;
}

function getSeasonDisplayName(seasonKey, lang) {
  if (typeof SEASON_TRANSLATIONS !== 'undefined' && SEASON_TRANSLATIONS[seasonKey] && SEASON_TRANSLATIONS[seasonKey][lang]) {
    return SEASON_TRANSLATIONS[seasonKey][lang];
  }
  return seasonKey;
}

// --- Application State ---
let appState = {
  currentLang: "hi",
  isSimulator: true,
  voiceEnabled: true,
  espIp: "192.168.4.1",
  
  // Crop & Lifecycle
  selectedCropId: "wheat",
  sowingDate: new Date(Date.now() - (42 * 24 * 60 * 60 * 1000)).toISOString().split('T')[0],
  
  // Telemetry
  soilMoisture: 52.0,
  temperature: 26.8,
  humidity: 64.0,
  motorRunning: false,
  autoMode: true,
  minThreshold: 40,
  maxThreshold: 70,
  
  // Flow, Grid & Safety
  gridPowerAvailable: true,
  dryRunAlarm: false,
  flowRateLpm: 0.0,
  totalLitersDelivered: 320.0,
  totalLitersSaved: 460.0,
  powerKwh: 0.12,
  
  // Weather
  rainProb: 12,
  windSpeed: 11,
  weatherTemp: 27,
  weatherCondition_hi: "धूप खिली है (Clear Sky)",
  weatherCondition_en: "Clear Sunny Sky",
  
  // Timed Burst
  burstTimeRemaining: 0,
  burstIntervalId: null
};

// Historical Data for Chart
const chartLabels = ["12:00", "03:00", "06:00", "09:00", "12:00", "15:00", "18:00", "Live"];
const chartMoistureData = [62, 58, 54, 49, 42, 68, 56, 52];
const chartTempData = [21, 19, 18, 23, 28, 29, 26, 26.8];
let telemetryChartInstance = null;

// --- Canvas Digital Twin Variables ---
let canvas, ctx;
let waterParticles = [];

// --- DOM References ---
const langToggleBtn = document.getElementById('langToggleBtn');
const langLabel = document.getElementById('langLabel');
const appHeaderTitle = document.getElementById('appHeaderTitle');
const appHeaderSubtitle = document.getElementById('appHeaderSubtitle');

const gridPowerPill = document.getElementById('gridPowerPill');
const gridPowerText = document.getElementById('gridPowerText');
const voiceToggleBtn = document.getElementById('voiceToggleBtn');
const dryRunAlarmBanner = document.getElementById('dryRunAlarmBanner');
const dryRunTitle = document.getElementById('dryRunTitle');
const dryRunDesc = document.getElementById('dryRunDesc');
const resetAlarmsBtn = document.getElementById('resetAlarmsBtn');

// Multi-Language Modal Elements
const languageModal = document.getElementById('languageModal');
const closeLangModalBtn = document.getElementById('closeLangModalBtn');
const languageGrid = document.getElementById('languageGrid');
const selectLangTitle = document.getElementById('selectLangTitle');
const selectLangSub = document.getElementById('selectLangSub');
const voiceNoticeText = document.getElementById('voiceNoticeText');

const twinTitleLabel = document.getElementById('twinTitleLabel');
const twinStatusTag = document.getElementById('twinStatusTag');
const rootMoistureLabel = document.getElementById('rootMoistureLabel');
const flowRateLabel = document.getElementById('flowRateLabel');
const topsoilLabel = document.getElementById('topsoilLabel');
const rootDepthLabel = document.getElementById('rootDepthLabel');
const saturationLabel = document.getElementById('saturationLabel');
const rootMoistureText = document.getElementById('rootMoistureText');
const waterFlowText = document.getElementById('waterFlowText');
const topsoilStatus = document.getElementById('topsoilStatus');
const saturationLevelText = document.getElementById('saturationLevelText');

// Leaf Doctor & WhatsApp
const openLeafDoctorBtn = document.getElementById('openLeafDoctorBtn');
const leafDoctorBtnTitle = document.getElementById('leafDoctorBtnTitle');
const leafDoctorBtnSub = document.getElementById('leafDoctorBtnSub');
const shareWhatsAppBtn = document.getElementById('shareWhatsAppBtn');
const whatsappReportTitle = document.getElementById('whatsappReportTitle');
const whatsappReportSub = document.getElementById('whatsappReportSub');

// Mandi Bhav
const mandiBhavHeading = document.getElementById('mandiBhavHeading');
const mandiNameLabel = document.getElementById('mandiNameLabel');
const mandiPriceVal = document.getElementById('mandiPriceVal');
const mandiMinMaxLabel = document.getElementById('mandiMinMaxLabel');
const mandiMinMaxVal = document.getElementById('mandiMinMaxVal');
const mandiArrivalLabel = document.getElementById('mandiArrivalLabel');
const mandiArrivalVal = document.getElementById('mandiArrivalVal');

// AI Advisory & Disease
const aiAdvisoryTitle = document.getElementById('aiAdvisoryTitle');
const optimalTimeAdvice = document.getElementById('optimalTimeAdvice');
const diseaseWarningCard = document.getElementById('diseaseWarningCard');
const diseaseRiskHeading = document.getElementById('diseaseRiskHeading');
const diseaseRiskBadge = document.getElementById('diseaseRiskBadge');
const diseaseWarningDesc = document.getElementById('diseaseWarningDesc');

// Weather
const weatherForecastHeading = document.getElementById('weatherForecastHeading');
const weatherTemp = document.getElementById('weatherTemp');
const weatherCondition = document.getElementById('weatherCondition');
const rainProbLabel = document.getElementById('rainProbLabel');
const rainProb = document.getElementById('rainProb');
const windSpeedLabel = document.getElementById('windSpeedLabel');
const windSpeed = document.getElementById('windSpeed');
const weatherAdvisoryText = document.getElementById('weatherAdvisoryText');

// Active Crop
const activeCropPrefix = document.getElementById('activeCropPrefix');
const activeCropTitle = document.getElementById('activeCropTitle');
const sowingDateLabel = document.getElementById('sowingDateLabel');
const changeCropBtn = document.getElementById('changeCropBtn');
const changeCropBtnText = document.getElementById('changeCropBtnText');
const cropAgeTitle = document.getElementById('cropAgeTitle');
const cropAgeBadge = document.getElementById('cropAgeBadge');
const cropProgressBar = document.getElementById('cropProgressBar');
const currentStagePrefix = document.getElementById('currentStagePrefix');
const currentStageName = document.getElementById('currentStageName');
const waterNeedPill = document.getElementById('waterNeedPill');
const stageAdviceText = document.getElementById('stageAdviceText');

// Gauges & Motor
const soilMoistureHeading = document.getElementById('soilMoistureHeading');
const moistureStatusBadge = document.getElementById('moistureStatusBadge');
const moistureCircle = document.getElementById('moistureCircle');
const moisturePercentVal = document.getElementById('moisturePercentVal');
const currentMoistureSub = document.getElementById('currentMoistureSub');
const motorOnThresholdLabel = document.getElementById('motorOnThresholdLabel');
const motorOffThresholdLabel = document.getElementById('motorOffThresholdLabel');
const minThreshDisplay = document.getElementById('minThreshDisplay');
const maxThreshDisplay = document.getElementById('maxThreshDisplay');

const tempHeadingLabel = document.getElementById('tempHeadingLabel');
const tempVal = document.getElementById('tempVal');
const humidityHeadingLabel = document.getElementById('humidityHeadingLabel');
const humidityVal = document.getElementById('humidityVal');

const motorHeadingLabel = document.getElementById('motorHeadingLabel');
const modeAutoBtn = document.getElementById('modeAutoBtn');
const modeManualBtn = document.getElementById('modeManualBtn');
const motorPulseIndicator = document.getElementById('motorPulseIndicator');
const pumpIconContainer = document.getElementById('pumpIconContainer');
const motorStateText = document.getElementById('motorStateText');
const motorSubtext = document.getElementById('motorSubtext');
const motorToggleBtn = document.getElementById('motorToggleBtn');
const timedBurstLabel = document.getElementById('timedBurstLabel');

// Savings & Chart
const savingsHeadingLabel = document.getElementById('savingsHeadingLabel');
const savingsBadge = document.getElementById('savingsBadge');
const totalWaterDeliveredLabel = document.getElementById('totalWaterDeliveredLabel');
const waterSavedLabel = document.getElementById('waterSavedLabel');
const powerConsumedLabel = document.getElementById('powerConsumedLabel');
const waterDeliveredVal = document.getElementById('waterDeliveredVal');
const waterSavedVal = document.getElementById('waterSavedVal');
const powerConsumedVal = document.getElementById('powerConsumedVal');

const chartHeadingLabel = document.getElementById('chartHeadingLabel');
const liveChartBadge = document.getElementById('liveChartBadge');

const openCropLibBtn = document.getElementById('openCropLibBtn');
const cropLibCardTitle = document.getElementById('cropLibCardTitle');
const cropLibCardSubtitle = document.getElementById('cropLibCardSubtitle');

// Leaf Doctor Modal
const leafDoctorModal = document.getElementById('leafDoctorModal');
const leafModalTitle = document.getElementById('leafModalTitle');
const closeLeafDoctorBtn = document.getElementById('closeLeafDoctorBtn');
const scanLaserBar = document.getElementById('scanLaserBar');
const scanPromptText = document.getElementById('scanPromptText');
const triggerScanActionBtn = document.getElementById('triggerScanActionBtn');
const startScanBtnText = document.getElementById('startScanBtnText');
const diagnosisResultBox = document.getElementById('diagnosisResultBox');
const diagDiseaseName = document.getElementById('diagDiseaseName');
const diagConfidence = document.getElementById('diagConfidence');
const diagTreatmentTitle = document.getElementById('diagTreatmentTitle');
const diagTreatmentText = document.getElementById('diagTreatmentText');

// Modals
const cropConfigModal = document.getElementById('cropConfigModal');
const modalSelectCropHeading = document.getElementById('modalSelectCropHeading');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalChooseCropLabel = document.getElementById('modalChooseCropLabel');
const cropSelectDropdown = document.getElementById('cropSelectDropdown');
const modalSowingDateLabel = document.getElementById('modalSowingDateLabel');
const sowingDateInput = document.getElementById('sowingDateInput');
const modalSowingDateHint = document.getElementById('modalSowingDateHint');
const modalCropSummaryTitle = document.getElementById('modalCropSummaryTitle');
const modalDurationLabel = document.getElementById('modalDurationLabel');
const modalCropDuration = document.getElementById('modalCropDuration');
const modalWaterLabel = document.getElementById('modalWaterLabel');
const modalCropWater = document.getElementById('modalCropWater');
const modalIrrigLabel = document.getElementById('modalIrrigLabel');
const modalCropIrrigations = document.getElementById('modalCropIrrigations');
const saveCropConfigBtn = document.getElementById('saveCropConfigBtn');

const cropEncyclopediaModal = document.getElementById('cropEncyclopediaModal');
const encyclopediaModalHeading = document.getElementById('encyclopediaModalHeading');
const closeEncycBtn = document.getElementById('closeEncycBtn');
const cropSearchInput = document.getElementById('cropSearchInput');
const encyclopediaList = document.getElementById('encyclopediaList');

const simToggleBtn = document.getElementById('simToggleBtn');
const simBtnLabel = document.getElementById('simBtnLabel');

// --- Voice Synthesis ---
function speakAlert(textPrimary, fallbackEn) {
  if (!appState.voiceEnabled || !('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  
  const lang = appState.currentLang;
  const langMeta = (typeof SUPPORTED_LANGUAGES !== 'undefined' ? SUPPORTED_LANGUAGES.find(l => l.code === lang) : null) || { voiceLocale: 'hi-IN' };
  
  let text = textPrimary;
  if (lang === 'en' && fallbackEn) {
    text = fallbackEn;
  }
  
  if (!text) return;

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = langMeta.voiceLocale || 'hi-IN';
  utterance.rate = 0.95;
  utterance.pitch = 1.0;
  
  try {
    const voices = window.speechSynthesis.getVoices();
    const match = voices.find(v => v.lang === langMeta.voiceLocale || v.lang.startsWith(lang));
    if (match) utterance.voice = match;
  } catch(e) {}

  window.speechSynthesis.speak(utterance);
}

// Multi-Language Selector Modal Handlers
function renderLanguageCards() {
  if (!languageGrid || typeof SUPPORTED_LANGUAGES === 'undefined') return;
  languageGrid.innerHTML = SUPPORTED_LANGUAGES.map(langItem => {
    const isActive = appState.currentLang === langItem.code;
    return `
      <button onclick="selectLanguage('${langItem.code}')" class="glass-capsule p-3 text-left flex items-center justify-between border transition-all duration-200 cursor-pointer ${
        isActive 
          ? 'bg-emerald-500/25 border-emerald-400 text-white shadow-lg ring-1 ring-emerald-400/50' 
          : 'bg-white/5 border-white/10 hover:border-emerald-400/40 text-slate-200 hover:bg-white/10'
      }">
        <div class="flex items-center gap-3">
          <span class="text-2xl">${langItem.flag}</span>
          <div>
            <div class="font-bold text-sm text-white flex items-center gap-1.5">
              ${langItem.name}
              <span class="text-[10px] text-slate-400 font-normal">(${langItem.englishName})</span>
            </div>
            <div class="text-[10px] text-emerald-400/80 font-mono">${langItem.region} • ${langItem.script}</div>
          </div>
        </div>
        ${isActive ? `
          <div class="w-6 h-6 rounded-full bg-emerald-400 text-slate-950 flex items-center justify-center font-bold text-xs shadow-md">
            ✓
          </div>
        ` : `
          <div class="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-slate-500 text-xs">
            ○
          </div>
        `}
      </button>
    `;
  }).join('');
}

function openLanguageModal() {
  renderLanguageCards();
  if (languageModal) languageModal.classList.remove('hidden');
}

function closeLanguageModal() {
  if (languageModal) languageModal.classList.add('hidden');
}

function selectLanguage(langCode) {
  setLanguage(langCode);
  closeLanguageModal();
  
  // Voice confirmation in the newly selected language
  const voiceWelcome = {
    hi: "नमस्ते किसान भाई! स्मार्ट कृषि-जल हिन्दी में सक्रिय है।",
    en: "Welcome! Smart Krishi-Jal is now active in English.",
    pa: "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਕਿਸਾਨ ਵੀਰੋ! ਸਮਾਰਟ ਕ੍ਰਿਸ਼ੀ-ਜਲ ਪੰਜਾਬੀ ਵਿੱਚ ਚਾਲੂ ਹੈ।",
    mr: "नमस्कार शेतकरी बंधूंनो! स्मार्ट कृषी-जल आता मराठीत सक्रिय आहे.",
    gu: "નમસ્તે ખેડૂત મિત્રો! સ્માર્ટ કૃષિ-જળ હવે ગુજરાતીમાં સક્રિય છે.",
    te: "నమస్కారం రైతు సోదరులారా! స్మార్ట్ కృషి-జల్ తెలుగులో సక్రియమైంది.",
    ta: "வணக்கம் விவசாய பெருமக்களே! ஸ்மார்ட் கிருஷி-ஜல் தமிழில் செயல்படுகிறது.",
    kn: "ನಮಸ್ಕಾರ ರೈತ ಬಾಂಧವರೇ! ಸ್ಮಾರ್ಟ್ ಕೃಷಿ-ಜಲ್ ಕನ್ನಡದಲ್ಲಿ ಸಕ್ರಿಯವಾಗಿದೆ.",
    bn: "নমস্কার কৃষক বন্ধুরা! স্মার্ট কৃষি-জল এখন বাংলায় প্রস্তুত।"
  };
  speakAlert(voiceWelcome[langCode] || voiceWelcome['hi']);
}

// Update Seasonal Filter Buttons text dynamically across 9 languages
function updateSeasonFilterButtons() {
  const lang = appState.currentLang;
  if (typeof SEASON_TRANSLATIONS === 'undefined') return;
  const filterBtns = document.querySelectorAll('.seasonFilterBtn');
  filterBtns.forEach(btn => {
    const season = btn.getAttribute('data-season');
    if (season === 'all' && SEASON_TRANSLATIONS.All && SEASON_TRANSLATIONS.All[lang]) {
      btn.textContent = SEASON_TRANSLATIONS.All[lang];
    } else if (season === 'Rabi' && SEASON_TRANSLATIONS.Rabi && SEASON_TRANSLATIONS.Rabi[lang]) {
      btn.textContent = SEASON_TRANSLATIONS.Rabi[lang];
    } else if (season === 'Kharif' && SEASON_TRANSLATIONS.Kharif && SEASON_TRANSLATIONS.Kharif[lang]) {
      btn.textContent = SEASON_TRANSLATIONS.Kharif[lang];
    } else if (season === 'Zaid' && SEASON_TRANSLATIONS.Zaid && SEASON_TRANSLATIONS.Zaid[lang]) {
      btn.textContent = SEASON_TRANSLATIONS.Zaid[lang];
    } else if (season === 'Annual' && SEASON_TRANSLATIONS.Annual && SEASON_TRANSLATIONS.Annual[lang]) {
      btn.textContent = SEASON_TRANSLATIONS.Annual[lang];
    }
  });
}

// --- Universal Multi-Language Engine ---
function setLanguage(lang) {
  if (typeof TRANSLATIONS === 'undefined' || !TRANSLATIONS[lang]) lang = 'hi';
  appState.currentLang = lang;
  try { localStorage.setItem('smart_kisan_lang', lang); } catch(e) {}
  
  const t = TRANSLATIONS[lang] || TRANSLATIONS['hi'];
  const isHi = lang === 'hi';
  const isEn = lang === 'en';

  const langMeta = (typeof SUPPORTED_LANGUAGES !== 'undefined' ? SUPPORTED_LANGUAGES.find(l => l.code === lang) : null) || { name: 'हिन्दी' };
  langLabel.textContent = langMeta.name;
  appHeaderTitle.innerHTML = `${t.appTitle} <span class="text-[9px] px-1.5 py-0.2 rounded-full bg-emerald-400/20 text-emerald-300 border border-emerald-400/40 font-mono font-bold">17.0</span>`;
  appHeaderSubtitle.textContent = t.appSubtitle;

  updateGridPowerUI();

  dryRunTitle.textContent = t.dryRunTitle;
  dryRunDesc.textContent = t.dryRunDesc;
  resetAlarmsBtn.textContent = t.resetBtn;

  leafDoctorBtnTitle.textContent = t.leafBtnTitle;
  leafDoctorBtnSub.textContent = t.leafBtnSub;
  whatsappReportTitle.textContent = t.whatsappBtnTitle;
  whatsappReportSub.textContent = t.whatsappBtnSub;

  mandiBhavHeading.textContent = t.mandiHeading;
  mandiMinMaxLabel.textContent = t.mandiMinMax;
  mandiArrivalLabel.textContent = t.mandiArrival;
  updateMandiBhavUI();

  twinTitleLabel.innerHTML = `<i data-lucide="activity" class="w-4 h-4"></i> ${t.twinTitle}`;
  twinStatusTag.textContent = t.twinZone;
  rootMoistureLabel.textContent = t.rootMoisture;
  flowRateLabel.textContent = t.flowRate;
  topsoilLabel.textContent = t.topsoil;
  rootDepthLabel.textContent = t.rootDepth;
  saturationLabel.textContent = t.saturation;

  aiAdvisoryTitle.innerHTML = `<i data-lucide="sparkles" class="w-3.5 h-3.5"></i> ${t.aiAdvisoryTitle}`;
  
  // Localized AI irrigation advice
  const adviceMap = {
    hi: `<strong>सिंचाई का सबसे उत्तम समय:</strong> <span class="text-emerald-400 font-bold">आज शाम 05:45 बजे</span>। दोपहर में तेज धूप के कारण 38% पानी वाष्प बनकर उड़ जाता है।`,
    en: `<strong>Optimal Irrigation Window:</strong> <span class="text-emerald-400 font-bold">Today at 05:45 PM</span>. Midday irrigation causes ~38% evaporative water loss.`,
    pa: `<strong>ਸਿੰਚਾਈ ਦਾ ਸਭ ਤੋਂ ਉੱਤਮ ਸਮਾਂ:</strong> <span class="text-emerald-400 font-bold">ਅੱਜ ਸ਼ਾਮ 05:45 ਵਜੇ</span>। ਦੁਪਹਿਰੇ ਪਾਣੀ ਦੇਣ ਨਾਲ 38% ਪਾਣੀ ਭਾਫ਼ ਬਣ ਕੇ ਉੱਡ ਜਾਂਦਾ ਹੈ।`,
    mr: `<strong>पाणी देण्याची सर्वोत्तम वेळ:</strong> <span class="text-emerald-400 font-bold">आज संध्याकाळी 05:45 वाजता</span>। दुपारच्या उन्हात 38% पाणी वाया जाते.`,
    gu: `<strong>પિયત માટેનો શ્રેષ્ઠ સમય:</strong> <span class="text-emerald-400 font-bold">આજે સાંજે 05:45 વાગ્યે</span>। બપોરે પાણી આપવાથી 38% પાણી વરાળ બની જાય છે.`,
    te: `<strong>నీరు పెట్టడానికి ఉత్తమ సమయం:</strong> <span class="text-emerald-400 font-bold">ఈరోజు సాయంత్రం 05:45 గంటలకు</span>। మధ్యాహ్నం వేళ 38% నీరు ఆవిరైపోతుంది.`,
    ta: `<strong>பாசனம் செய்ய சிறந்த நேரம்:</strong> <span class="text-emerald-400 font-bold">இன்று மாலை 05:45 மணிக்கு</span>। வெயிலில் பாசனம் செய்தால் 38% நீர் வீணாகும்.`,
    kn: `<strong>ನೀರಾವರಿಗೆ ಸೂಕ್ತ ಸಮಯ:</strong> <span class="text-emerald-400 font-bold">ಇಂದು ಸಂಜೆ 05:45 ಗಂಟೆಗೆ</span>। ಬಿಸಿಲಿನಲ್ಲಿ ನೀರುಣಿಸಿದರೆ 38% ನೀರು ಆವಿಯಾಗುತ್ತದೆ.`,
    bn: `<strong>সেচের সেরা সময়:</strong> <span class="text-emerald-400 font-bold">আজ সন্ধ্যা ০৫:৪৫ টায়</span>। কড়া রোদে সেচ দিলে ৩৮% জল বাষ্পীভূত হয়।`
  };
  optimalTimeAdvice.innerHTML = adviceMap[lang] || adviceMap['hi'];

  diseaseRiskHeading.textContent = t.diseaseHeading;
  diseaseRiskBadge.textContent = t.highRisk;

  weatherForecastHeading.innerHTML = `<i data-lucide="cloud-sun" class="w-4 h-4"></i> ${t.weatherHeading}`;
  weatherCondition.textContent = isEn ? appState.weatherCondition_en : appState.weatherCondition_hi;
  rainProbLabel.textContent = t.rainProb;
  windSpeedLabel.textContent = t.wind;

  activeCropPrefix.textContent = t.activeCropPrefix;
  changeCropBtnText.textContent = t.changeCropBtn;
  cropAgeTitle.textContent = t.cropAgeTitle;
  currentStagePrefix.textContent = t.currentStagePrefix;

  soilMoistureHeading.innerHTML = `<i data-lucide="waves" class="w-4 h-4 text-emerald-400"></i> ${t.soilMoistureHeading}`;
  currentMoistureSub.textContent = t.currentMoistSub;
  motorOnThresholdLabel.textContent = t.motorOnThresh;
  motorOffThresholdLabel.textContent = t.motorOffThresh;

  tempHeadingLabel.textContent = t.tempHeading;
  humidityHeadingLabel.textContent = t.humidityHeading;

  motorHeadingLabel.textContent = t.motorHeading;
  modeAutoBtn.textContent = t.autoBtn;
  modeManualBtn.textContent = t.manualBtn;
  timedBurstLabel.innerHTML = `<i data-lucide="timer" class="w-3.5 h-3.5 text-emerald-400"></i> ${t.timedBurstLabel}`;

  savingsHeadingLabel.innerHTML = `<i data-lucide="badge-dollar-sign" class="w-4 h-4 text-emerald-400"></i> ${t.savingsHeading}`;
  savingsBadge.textContent = t.savingsBadge;
  totalWaterDeliveredLabel.textContent = t.totalWaterLabel;
  waterSavedLabel.textContent = t.waterSavedLabel;
  powerConsumedLabel.textContent = t.powerLabel;

  chartHeadingLabel.innerHTML = `<i data-lucide="line-chart" class="w-4 h-4 text-emerald-400"></i> ${t.chartHeading}`;
  liveChartBadge.textContent = t.liveChartBadge;
  if (telemetryChartInstance) {
    telemetryChartInstance.data.datasets[0].label = isEn ? 'Moisture (%)' : (t.soilMoistureHeading || 'नमी (Moisture %)');
    telemetryChartInstance.data.datasets[1].label = isEn ? 'Temperature (°C)' : (t.tempHeading || 'तापमान (Temp °C)');
    telemetryChartInstance.update();
  }

  cropLibCardTitle.textContent = t.cropLibTitle;
  cropLibCardSubtitle.textContent = t.cropLibSub;

  leafModalTitle.innerHTML = `<i data-lucide="scan" class="w-5 h-5 text-emerald-400"></i> ${t.leafModalTitle}`;
  scanPromptText.textContent = t.scanPrompt;
  startScanBtnText.textContent = t.startScanBtn;
  diagTreatmentTitle.textContent = t.treatmentTitle;
  updateLeafDoctorPreview();

  modalSelectCropHeading.innerHTML = `<i data-lucide="calendar" class="w-5 h-5 text-emerald-400"></i> ${t.modalSelectTitle}`;
  modalChooseCropLabel.textContent = t.modalCropLabel;
  modalSowingDateLabel.textContent = t.modalSowingLabel;
  modalSowingDateHint.textContent = t.modalSowingHint;
  modalCropSummaryTitle.textContent = t.modalSummaryTitle;
  modalDurationLabel.textContent = t.modalDuration;
  modalWaterLabel.textContent = t.modalWaterReq;
  modalIrrigLabel.textContent = t.modalIrrigCount;
  saveCropConfigBtn.textContent = t.modalApplyBtn;

  encyclopediaModalHeading.textContent = t.encycHeading;
  cropSearchInput.placeholder = t.encycSearchPlaceholder;
  simBtnLabel.textContent = t.simBtnText;

  // Update season filter button text
  updateSeasonFilterButtons();

  // Update language modal header if present
  if (selectLangTitle && t.selectLangTitle) selectLangTitle.textContent = t.selectLangTitle;
  if (selectLangSub && t.selectLangSub) selectLangSub.textContent = t.selectLangSub;
  if (voiceNoticeText && t.voiceNotice) voiceNoticeText.textContent = t.voiceNotice;

  populateCropDropdown();
  updateCropLifecycle();
  filterAndRenderEncyclopedia();
  updateUI();
  lucide.createIcons();
}

function updateGridPowerUI() {
  const t = TRANSLATIONS[appState.currentLang];
  if (appState.gridPowerAvailable) {
    gridPowerPill.className = "glass-capsule flex items-center gap-1 px-2.5 py-1 text-[11px] text-emerald-300 bg-emerald-500/15 border border-emerald-400/30 cursor-pointer";
    gridPowerPill.innerHTML = `<i data-lucide="zap" class="w-3.5 h-3.5 fill-emerald-400"></i> <span id="gridPowerText" class="hidden sm:inline font-semibold">${t.gridOn}</span>`;
  } else {
    gridPowerPill.className = "glass-capsule flex items-center gap-1 px-2.5 py-1 text-[11px] text-red-400 bg-red-500/20 border border-red-500/40 cursor-pointer animate-pulse";
    gridPowerPill.innerHTML = `<i data-lucide="zap-off" class="w-3.5 h-3.5"></i> <span id="gridPowerText" class="hidden sm:inline font-semibold">${t.gridOff}</span>`;
  }
  lucide.createIcons();
}

function updateMandiBhavUI() {
  const crop = CROPS_DATABASE.find(c => c.id === appState.selectedCropId) || CROPS_DATABASE[0];
  const isHi = appState.currentLang === 'hi';
  const m = crop.mandi_data;
  if (!m) return;

  mandiNameLabel.textContent = isHi ? m.market_hi : m.market_en;
  mandiPriceVal.textContent = `₹${m.price}`;
  mandiMinMaxVal.textContent = m.min_max;
  mandiArrivalVal.textContent = isHi ? m.arrival_hi : m.arrival_en;
}

function updateLeafDoctorPreview() {
  const crop = CROPS_DATABASE.find(c => c.id === appState.selectedCropId) || CROPS_DATABASE[0];
  const isHi = appState.currentLang === 'hi';
  const doc = crop.leaf_doctor;
  if (!doc) return;

  diagDiseaseName.textContent = isHi ? `पहचान: ${doc.disease_hi}` : `Diagnosis: ${doc.disease_en}`;
  diagConfidence.textContent = isHi ? `सटीकता: ${doc.confidence} Confidence` : `Accuracy: ${doc.confidence} Confidence`;
  diagTreatmentText.innerHTML = isHi ? doc.treatment_hi : doc.treatment_en;
}

// --- WhatsApp Report Generator ---
function shareWhatsAppReport() {
  const crop = CROPS_DATABASE.find(c => c.id === appState.selectedCropId) || CROPS_DATABASE[0];
  const isHi = appState.currentLang === 'hi';
  const sowing = new Date(appState.sowingDate);
  const diffDays = Math.max(1, Math.floor((new Date() - sowing) / (1000 * 60 * 60 * 24)));

  let report = "";
  if (isHi) {
    report = `🌾 *स्मार्ट कृषि-जल 3.0 Pro: खेत दैनिक रिपोर्ट* 🌾\n` +
      `📅 दिनांक: ${new Date().toLocaleDateString('hi-IN')}\n\n` +
      `🌱 *फसल:* ${crop.name_hi} (${crop.season_hi})\n` +
      `⏳ *फसल उम्र:* दिन ${diffDays}/${crop.duration_days}\n` +
      `💧 *मिट्टी नमी:* ${Math.round(appState.soilMoisture)}% (लक्ष्य: ${appState.minThreshold}% - ${appState.maxThreshold}%)\n` +
      `🌡 *तापमान / आर्द्रता:* ${appState.temperature.toFixed(1)}°C | ${Math.round(appState.humidity)}%\n` +
      `⚡ *खेत बिजली स्थिति:* ${appState.gridPowerAvailable ? "उपलब्ध (चालू)" : "कटी हुई"}\n` +
      `🚿 *12V वाटर मोटर:* ${appState.motorRunning ? "चालू (ON)" : "बंद (OFF)"}\n` +
      `🌊 *कुल सिंचित जल:* ${Math.round(appState.totalLitersDelivered)} L (बचत: ~${Math.round(appState.totalLitersSaved)} L)\n` +
      `☀️ *मौसम:* ${appState.weatherCondition_hi} (वर्षा संभावना: ${appState.rainProb}%)\n\n` +
      `_रिपोर्ट स्वचालित रूप से स्मार्ट कृषि-जल AI 3.0 Pro द्वारा जनरेट की गई_`;
  } else {
    report = `🌾 *Smart Krishi-Jal 3.0 Pro: Daily Farm Digest* 🌾\n` +
      `📅 Date: ${new Date().toLocaleDateString('en-IN')}\n\n` +
      `🌱 *Crop:* ${crop.name_en} (${crop.season_en})\n` +
      `⏳ *Crop Age:* Day ${diffDays}/${crop.duration_days}\n` +
      `💧 *Soil Moisture:* ${Math.round(appState.soilMoisture)}% (Target: ${appState.minThreshold}% - ${appState.maxThreshold}%)\n` +
      `🌡 *Temp / Humidity:* ${appState.temperature.toFixed(1)}°C | ${Math.round(appState.humidity)}%\n` +
      `⚡ *Grid Power:* ${appState.gridPowerAvailable ? "Online (Active)" : "Power Cut"}\n` +
      `🚿 *12V Water Pump:* ${appState.motorRunning ? "RUNNING (ON)" : "IDLE (OFF)"}\n` +
      `🌊 *Total Water Pumped:* ${Math.round(appState.totalLitersDelivered)} L (Saved: ~${Math.round(appState.totalLitersSaved)} L)\n` +
      `☀️ *Weather Forecast:* ${appState.weatherCondition_en} (Rain Prob: ${appState.rainProb}%)\n\n` +
      `_Automated report generated by Smart Krishi-Jal AI 3.0 Pro_`;
  }

  const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(report)}`;
  window.open(url, '_blank');
}

// --- Digital Twin Animation Loop ---
function initDigitalTwin() {
  canvas = document.getElementById('fieldTwinCanvas');
  if (!canvas) return;
  ctx = canvas.getContext('2d');
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  requestAnimationFrame(animateDigitalTwin);
}

function resizeCanvas() {
  if (!canvas) return;
  canvas.width = canvas.parentElement.clientWidth;
  canvas.height = canvas.parentElement.clientHeight;
}

function animateDigitalTwin() {
  if (!ctx) return;
  const w = canvas.width;
  const h = canvas.height;

  ctx.clearRect(0, 0, w, h);

  // 1. Sky & Sun
  const skyGrad = ctx.createLinearGradient(0, 0, 0, h * 0.45);
  skyGrad.addColorStop(0, '#0c4a6e');
  skyGrad.addColorStop(1, '#0284c7');
  ctx.fillStyle = skyGrad;
  ctx.fillRect(0, 0, w, h * 0.45);

  ctx.fillStyle = '#f59e0b';
  ctx.beginPath();
  ctx.arc(w - 40, 30, 16, 0, Math.PI * 2);
  ctx.fill();

  // 2. Soil Layers
  const m = appState.soilMoisture;
  let soilHue = Math.max(15, 30 - (m * 0.15));
  let soilLight = Math.max(12, 38 - (m * 0.25));

  const soilGrad = ctx.createLinearGradient(0, h * 0.45, 0, h);
  soilGrad.addColorStop(0, `hsl(${soilHue}, 45%, ${soilLight}%)`);
  soilGrad.addColorStop(1, `hsl(${soilHue}, 60%, ${soilLight - 5}%)`);
  ctx.fillStyle = soilGrad;
  ctx.fillRect(0, h * 0.45, w, h * 0.55);

  ctx.strokeStyle = '#15803d';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(0, h * 0.45);
  ctx.lineTo(w, h * 0.45);
  ctx.stroke();

  // 3. Plant & Root Network
  const centerX = w * 0.5;
  const groundY = h * 0.45;

  ctx.strokeStyle = '#22c55e';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(centerX, groundY);
  ctx.lineTo(centerX, groundY - 45);
  ctx.stroke();

  ctx.fillStyle = '#16a34a';
  ctx.beginPath();
  ctx.ellipse(centerX - 14, groundY - 32, 14, 6, -0.4, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(centerX + 14, groundY - 36, 14, 6, 0.4, 0, Math.PI * 2);
  ctx.fill();

  const rootColor = m > 45 ? '#38bdf8' : '#a3a3a3';
  ctx.strokeStyle = rootColor;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(centerX, groundY);
  ctx.lineTo(centerX, groundY + 45);
  ctx.moveTo(centerX, groundY + 12);
  ctx.lineTo(centerX - 24, groundY + 28);
  ctx.moveTo(centerX, groundY + 24);
  ctx.lineTo(centerX + 26, groundY + 38);
  ctx.moveTo(centerX, groundY + 34);
  ctx.lineTo(centerX - 18, groundY + 50);
  ctx.stroke();

  // 4. Irrigation Spray Animation
  if (appState.motorRunning && !appState.dryRunAlarm) {
    ctx.fillStyle = '#475569';
    ctx.fillRect(10, groundY - 14, 25, 8);

    if (Math.random() < 0.8) {
      waterParticles.push({
        x: 35,
        y: groundY - 10,
        vx: 2.5 + Math.random() * 3,
        vy: -1.5 - Math.random() * 2,
        life: 1.0
      });
    }
  }

  for (let i = waterParticles.length - 1; i >= 0; i--) {
    let p = waterParticles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.15;
    p.life -= 0.02;

    ctx.fillStyle = `rgba(56, 189, 248, ${p.life})`;
    ctx.beginPath();
    ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
    ctx.fill();

    if (p.life <= 0 || p.y > h) {
      waterParticles.splice(i, 1);
    }
  }

  requestAnimationFrame(animateDigitalTwin);
}

// --- Historical Chart ---
function initTelemetryChart() {
  const chartCanvas = document.getElementById('telemetryChart');
  if (!chartCanvas) return;

  const isHi = appState.currentLang === 'hi';
  telemetryChartInstance = new Chart(chartCanvas, {
    type: 'line',
    data: {
      labels: chartLabels,
      datasets: [
        {
          label: isHi ? 'नमी (Moisture %)' : 'Moisture (%)',
          data: chartMoistureData,
          borderColor: '#10b981',
          backgroundColor: 'rgba(16, 185, 129, 0.12)',
          fill: true,
          tension: 0.35,
          borderWidth: 2.5,
          pointRadius: 3
        },
        {
          label: isHi ? 'तापमान (Temp °C)' : 'Temperature (°C)',
          data: chartTempData,
          borderColor: '#f59e0b',
          backgroundColor: 'transparent',
          borderDash: [4, 4],
          tension: 0.35,
          borderWidth: 2,
          pointRadius: 2
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { labels: { color: '#94a3b8', font: { size: 10 } } }
      },
      scales: {
        x: {
          ticks: { color: '#64748b', font: { size: 10 } },
          grid: { color: 'rgba(51, 65, 85, 0.2)' }
        },
        y: {
          min: 0,
          max: 100,
          ticks: { color: '#64748b', font: { size: 10 } },
          grid: { color: 'rgba(51, 65, 85, 0.2)' }
        }
      }
    }
  });
}

// --- Crop Lifecycle Calculations ---
function updateCropLifecycle() {
  const crop = CROPS_DATABASE.find(c => c.id === appState.selectedCropId) || CROPS_DATABASE[0];
  const sowing = new Date(appState.sowingDate);
  const today = new Date();
  
  const diffTime = Math.max(0, today - sowing);
  const daysElapsed = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;

  let activeStage = crop.stages[0];
  for (let s of crop.stages) {
    if (daysElapsed >= s.start_day && daysElapsed <= s.end_day) {
      activeStage = s;
      break;
    }
  }
  if (daysElapsed > crop.duration_days) {
    activeStage = crop.stages[crop.stages.length - 1];
  }

  appState.minThreshold = activeStage.min_moisture;
  appState.maxThreshold = activeStage.max_moisture;

  const lang = appState.currentLang;
  const isEn = lang === 'en';
  const t = TRANSLATIONS[lang] || TRANSLATIONS['hi'];

  activeCropTitle.textContent = `${getCropDisplayName(crop, lang)} (${crop.name_en})`;
  sowingDateLabel.textContent = `${isEn ? 'Sowing' : (t.sowingPrefix || 'बुवाई')}: ${appState.sowingDate}`;
  cropAgeBadge.textContent = `${t.dayWord || 'दिन'} ${daysElapsed} / ${crop.duration_days}`;
  
  const pctDuration = Math.min(100, Math.round((daysElapsed / crop.duration_days) * 100));
  cropProgressBar.style.width = `${pctDuration}%`;

  currentStageName.textContent = isEn ? activeStage.stage_name_en : activeStage.stage_name_hi;
  
  waterNeedPill.textContent = activeStage.water_need_level === "Critical" ? t.criticalNeed :
                             activeStage.water_need_level === "High" ? t.highNeed :
                             activeStage.water_need_level === "Medium" ? t.mediumNeed : t.lowNeed;
  
  if (activeStage.water_need_level === "Critical") {
    waterNeedPill.className = "px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-red-500/20 text-red-400 border border-red-500/30";
  } else if (activeStage.water_need_level === "High") {
    waterNeedPill.className = "px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-amber-500/20 text-amber-400 border border-amber-500/30";
  } else {
    waterNeedPill.className = "px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-emerald-500/20 text-emerald-400 border border-emerald-500/30";
  }

  stageAdviceText.textContent = isEn ? activeStage.advice_en : activeStage.advice_hi;
  minThreshDisplay.textContent = `< ${appState.minThreshold}%`;
  maxThreshDisplay.textContent = `> ${appState.maxThreshold}%`;

  updateMandiBhavUI();
  updateLeafDoctorPreview();
  checkDiseaseAlerts(crop);
}

function checkDiseaseAlerts(crop) {
  if (!crop.disease_risks || crop.disease_risks.length === 0) {
    diseaseWarningCard.classList.add('hidden');
    return;
  }

  let matchedRisk = null;
  for (let r of crop.disease_risks) {
    if (appState.temperature >= r.min_temp && appState.temperature <= r.max_temp && appState.humidity >= r.min_humidity) {
      matchedRisk = r;
      break;
    }
  }

  if (matchedRisk) {
    const isHi = appState.currentLang === 'hi';
    diseaseWarningCard.classList.remove('hidden');
    const dName = isHi ? matchedRisk.name_hi : matchedRisk.name_en;
    const dWarn = isHi ? matchedRisk.warning_hi : matchedRisk.warning_en;
    diseaseWarningDesc.innerHTML = `<strong>${dName}:</strong> ${dWarn}`;
  } else {
    diseaseWarningCard.classList.add('hidden');
  }
}

// --- UI Updates ---
function updateUI() {
  const t = TRANSLATIONS[appState.currentLang];
  const isHi = appState.currentLang === 'hi';

  const circumference = 264;
  const offset = circumference - (appState.soilMoisture / 100) * circumference;
  moistureCircle.style.strokeDashoffset = offset;
  moisturePercentVal.textContent = `${Math.round(appState.soilMoisture)}%`;

  if (appState.soilMoisture < appState.minThreshold) {
    moistureCircle.setAttribute('class', 'text-amber-500 fill-none transition-all duration-700');
    moistureStatusBadge.textContent = t.dryBadge;
    moistureStatusBadge.className = "text-[11px] px-2.5 py-0.5 rounded-full font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30";
    topsoilStatus.textContent = t.drySoil;
    saturationLevelText.textContent = t.lowSat;
    saturationLevelText.className = "text-amber-400 font-bold";
  } else if (appState.soilMoisture > appState.maxThreshold) {
    moistureCircle.setAttribute('class', 'text-cyan-400 fill-none transition-all duration-700');
    moistureStatusBadge.textContent = t.satBadge;
    moistureStatusBadge.className = "text-[11px] px-2.5 py-0.5 rounded-full font-bold bg-blue-500/20 text-cyan-300 border border-blue-500/30";
    topsoilStatus.textContent = t.wetSoil;
    saturationLevelText.textContent = t.highSat;
    saturationLevelText.className = "text-cyan-400 font-bold";
  } else {
    moistureCircle.setAttribute('class', 'text-emerald-400 fill-none transition-all duration-700');
    moistureStatusBadge.textContent = t.optBadge;
    moistureStatusBadge.className = "text-[11px] px-2.5 py-0.5 rounded-full font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30";
    topsoilStatus.textContent = t.optimalMoist;
    saturationLevelText.textContent = t.normalSat;
    saturationLevelText.className = "text-emerald-400 font-bold";
  }

  rootMoistureText.textContent = `${Math.round(appState.soilMoisture)}%`;
  waterFlowText.textContent = (appState.motorRunning && !appState.dryRunAlarm) ? "5.0 L/min" : "0.0 L/min";

  tempVal.textContent = `${appState.temperature.toFixed(1)}°C`;
  humidityVal.textContent = `${Math.round(appState.humidity)}%`;

  waterDeliveredVal.textContent = `${Math.round(appState.totalLitersDelivered)} L`;
  waterSavedVal.textContent = `${Math.round(appState.totalLitersSaved)} L`;
  powerConsumedVal.textContent = `${appState.powerKwh.toFixed(2)} kWh`;

  if (appState.dryRunAlarm) {
    dryRunAlarmBanner.classList.remove('hidden');
  } else {
    dryRunAlarmBanner.classList.add('hidden');
  }

  if (appState.motorRunning) {
    motorPulseIndicator.className = "w-3.5 h-3.5 rounded-full bg-emerald-400 pulse-active";
    motorStateText.textContent = t.motorOnTitle;
    motorStateText.className = "text-sm font-extrabold text-emerald-400";
    motorSubtext.textContent = appState.autoMode ? 
      (isHi ? `ऑटो-सिंचाई जारी (लक्ष्य: ${appState.maxThreshold}% तक)` : `Auto irrigation running (target: ${appState.maxThreshold}%)`) : 
      (isHi ? "मैनुअल मोड में चालू की गई" : "Started manually by farmer");
    
    pumpIconContainer.className = "w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center animate-pulse";
    
    motorToggleBtn.textContent = t.stopMotor;
    motorToggleBtn.className = "glass-capsule px-4 py-2.5 font-bold text-xs uppercase tracking-wide bg-red-600 hover:bg-red-500 text-white border-red-500 shadow-lg shadow-red-900/30 cursor-pointer";
  } else {
    motorPulseIndicator.className = "w-3.5 h-3.5 rounded-full bg-slate-600";
    motorStateText.textContent = t.motorOffTitle;
    motorStateText.className = "text-sm font-extrabold text-slate-300";
    motorSubtext.textContent = appState.autoMode ? t.motorSubAuto : t.motorSubManual;
    
    pumpIconContainer.className = "w-12 h-12 rounded-2xl bg-slate-800/80 text-slate-400 flex items-center justify-center";
    
    motorToggleBtn.textContent = t.startMotor;
    motorToggleBtn.className = "glass-capsule px-4 py-2.5 font-bold text-xs uppercase tracking-wide bg-emerald-600 hover:bg-emerald-500 text-white border-emerald-500 shadow-lg shadow-emerald-900/30 cursor-pointer";
  }

  if (appState.autoMode) {
    modeAutoBtn.className = "px-3 py-1 rounded-full font-bold transition bg-emerald-500 text-slate-950 shadow-md";
    modeManualBtn.className = "px-3 py-1 rounded-full font-medium text-slate-400 hover:text-white transition";
    motorToggleBtn.disabled = true;
    motorToggleBtn.classList.add('opacity-40', 'cursor-not-allowed');
  } else {
    modeManualBtn.className = "px-3 py-1 rounded-full font-bold transition bg-amber-500 text-slate-950 shadow-md";
    modeAutoBtn.className = "px-3 py-1 rounded-full font-medium text-slate-400 hover:text-white transition";
    motorToggleBtn.disabled = false;
    motorToggleBtn.classList.remove('opacity-40', 'cursor-not-allowed');
  }
}

// --- System Loop (Simulation vs Hardware) ---
function tickSystem() {
  const t = TRANSLATIONS[appState.currentLang];
  if (appState.isSimulator) {
    if (appState.motorRunning && !appState.dryRunAlarm) {
      appState.soilMoisture += 3.2;
      appState.totalLitersDelivered += 0.21;
      appState.totalLitersSaved += 0.28;
      appState.powerKwh += 0.0001;

      if (appState.soilMoisture >= appState.maxThreshold && appState.autoMode) {
        appState.motorRunning = false;
        speakAlert(t.vMotorOffAuto, TRANSLATIONS.en.vMotorOffAuto);
      }
      if (appState.soilMoisture > 100) appState.soilMoisture = 100;
    } else {
      appState.soilMoisture -= 0.55;
      if (appState.soilMoisture < 15) appState.soilMoisture = 15;

      if (appState.autoMode && appState.soilMoisture < appState.minThreshold && appState.rainProb < 60 && !appState.dryRunAlarm) {
        appState.motorRunning = true;
        speakAlert(t.vMotorOnAuto, TRANSLATIONS.en.vMotorOnAuto);
      }
    }

    appState.temperature += (Math.random() - 0.5) * 0.15;
    appState.humidity += (Math.random() - 0.5) * 0.3;

    updateUI();

    if (telemetryChartInstance && Math.random() < 0.2) {
      const d = new Date();
      const timeStr = `${d.getHours()}:${String(d.getMinutes()).padStart(2, '0')}`;
      chartLabels.shift();
      chartLabels.push(timeStr);
      chartMoistureData.shift();
      chartMoistureData.push(Math.round(appState.soilMoisture));
      chartTempData.shift();
      chartTempData.push(Math.round(appState.temperature * 10) / 10);
      telemetryChartInstance.update('none');
    }
  } else {
    fetch(`http://${appState.espIp}/api/status`, { signal: AbortSignal.timeout(2000) })
      .then(res => res.json())
      .then(data => {
        appState.soilMoisture = data.soil_moisture;
        appState.temperature = data.temperature;
        appState.humidity = data.humidity;
        appState.motorRunning = data.motor_running;
        appState.autoMode = data.auto_mode;
        appState.gridPowerAvailable = data.grid_power;
        appState.dryRunAlarm = data.dry_run_alarm;
        appState.flowRateLpm = data.flow_rate_lpm;
        appState.totalLitersDelivered = data.liters_delivered;

        updateGridPowerUI();
        updateUI();
      })
      .catch(() => {
        updateUI();
      });
  }
}

function sendHardwareCommand(payload) {
  const t = TRANSLATIONS[appState.currentLang];
  if (appState.isSimulator) {
    if (payload.auto_mode !== undefined) appState.autoMode = payload.auto_mode;
    if (payload.motor !== undefined) {
      appState.motorRunning = payload.motor;
      if (appState.motorRunning) {
        speakAlert(t.vMotorOnManual, TRANSLATIONS.en.vMotorOnManual);
      } else {
        speakAlert(t.vMotorOffManual, TRANSLATIONS.en.vMotorOffManual);
      }
    }
    if (payload.reset_alarms) {
      appState.dryRunAlarm = false;
    }
    updateUI();
    return;
  }

  fetch(`http://${appState.espIp}/api/control`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  }).catch(err => console.warn("Failed sending command to ESP32:", err));
}

function triggerTimedBurst(minutes) {
  appState.autoMode = false;
  appState.motorRunning = true;
  appState.burstTimeRemaining = minutes * 60;
  speakAlert(`टाइमर सक्रिय: मोटर ${minutes} मिनट के लिए चालू की गई है।`, `Timer active: Motor running for ${minutes} minutes.`);
  updateUI();

  if (appState.burstIntervalId) clearInterval(appState.burstIntervalId);
  appState.burstIntervalId = setInterval(() => {
    appState.burstTimeRemaining--;
    if (appState.burstTimeRemaining <= 0) {
      clearInterval(appState.burstIntervalId);
      appState.motorRunning = false;
      appState.autoMode = true;
      speakAlert("टाइमर समाप्त: मोटर बंद कर दी गई है।", "Timer expired: Motor stopped.");
      updateUI();
    }
  }, 1000);
}

// --- Event Listeners ---
function setupEventListeners() {
  langToggleBtn.addEventListener('click', () => {
    openLanguageModal();
  });
  if (closeLangModalBtn) {
    closeLangModalBtn.addEventListener('click', () => {
      closeLanguageModal();
    });
  }
  if (languageModal) {
    languageModal.addEventListener('click', (e) => {
      if (e.target === languageModal) closeLanguageModal();
    });
  }

  gridPowerPill.addEventListener('click', () => {
    if (appState.isSimulator) {
      appState.gridPowerAvailable = !appState.gridPowerAvailable;
      if (!appState.gridPowerAvailable && appState.motorRunning) {
        appState.motorRunning = false;
        speakAlert(TRANSLATIONS.hi.vGridCut, TRANSLATIONS.en.vGridCut);
      } else if (appState.gridPowerAvailable) {
        speakAlert(TRANSLATIONS.hi.vGridRestore, TRANSLATIONS.en.vGridRestore);
      }
      updateGridPowerUI();
      updateUI();
    }
  });

  resetAlarmsBtn.addEventListener('click', () => {
    appState.dryRunAlarm = false;
    sendHardwareCommand({ reset_alarms: true });
    updateUI();
  });

  voiceToggleBtn.addEventListener('click', () => {
    appState.voiceEnabled = !appState.voiceEnabled;
    const t = TRANSLATIONS[appState.currentLang];
    if (appState.voiceEnabled) {
      voiceToggleBtn.className = "glass-capsule p-1.5 text-emerald-400 hover:text-white hover:bg-emerald-500/20 cursor-pointer";
      speakAlert("किसान-वाणी आवाज़ सहायता सक्रिय है।", "Kisan-Vani voice assistant enabled.");
    } else {
      voiceToggleBtn.className = "glass-capsule p-1.5 text-slate-500 hover:text-slate-300 cursor-pointer";
    }
  });

  openLeafDoctorBtn.addEventListener('click', () => {
    updateLeafDoctorPreview();
    leafDoctorModal.classList.remove('hidden');
  });

  closeLeafDoctorBtn.addEventListener('click', () => leafDoctorModal.classList.add('hidden'));

  triggerScanActionBtn.addEventListener('click', () => {
    const t = TRANSLATIONS[appState.currentLang];
    scanLaserBar.classList.remove('hidden');
    scanPromptText.textContent = t.scanningText;
    triggerScanActionBtn.disabled = true;

    setTimeout(() => {
      scanLaserBar.classList.add('hidden');
      scanPromptText.textContent = t.scanPrompt;
      triggerScanActionBtn.disabled = false;
      diagnosisResultBox.classList.remove('hidden');
      speakAlert(t.vScanComplete, TRANSLATIONS.en.vScanComplete);
    }, 1500);
  });

  shareWhatsAppBtn.addEventListener('click', shareWhatsAppReport);

  modeAutoBtn.addEventListener('click', () => {
    appState.autoMode = true;
    sendHardwareCommand({ auto_mode: true });
    const t = TRANSLATIONS[appState.currentLang];
    speakAlert(t.vAutoMode, TRANSLATIONS.en.vAutoMode);
    updateUI();
  });

  modeManualBtn.addEventListener('click', () => {
    appState.autoMode = false;
    sendHardwareCommand({ auto_mode: false });
    const t = TRANSLATIONS[appState.currentLang];
    speakAlert(t.vManualMode, TRANSLATIONS.en.vManualMode);
    updateUI();
  });

  motorToggleBtn.addEventListener('click', () => {
    if (!appState.autoMode) {
      appState.motorRunning = !appState.motorRunning;
      sendHardwareCommand({ motor: appState.motorRunning });
      updateUI();
    }
  });

  document.querySelectorAll('.burstTimerBtn').forEach(btn => {
    btn.addEventListener('click', () => {
      const mins = parseInt(btn.getAttribute('data-burst'), 10);
      triggerTimedBurst(mins);
    });
  });

  // Season Filter Pills in Encyclopedia
  document.querySelectorAll('.seasonFilterBtn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.seasonFilterBtn').forEach(b => {
        b.className = "seasonFilterBtn glass-capsule px-3 py-1 text-slate-300 hover:text-white cursor-pointer";
      });
      btn.className = "seasonFilterBtn glass-capsule px-3 py-1 bg-emerald-500/20 text-emerald-300 border-emerald-400/40 font-semibold cursor-pointer";
      activeSeasonFilter = btn.getAttribute('data-season');
      filterAndRenderEncyclopedia();
    });
  });

  simToggleBtn.addEventListener('click', () => {
    appState.isSimulator = !appState.isSimulator;
  });

  changeCropBtn.addEventListener('click', () => {
    cropSelectDropdown.value = appState.selectedCropId;
    sowingDateInput.value = appState.sowingDate;
    updateModalCropPreview();
    cropConfigModal.classList.remove('hidden');
  });

  closeModalBtn.addEventListener('click', () => cropConfigModal.classList.add('hidden'));

  cropSelectDropdown.addEventListener('change', updateModalCropPreview);

  saveCropConfigBtn.addEventListener('click', () => {
    appState.selectedCropId = cropSelectDropdown.value;
    if (sowingDateInput.value) {
      appState.sowingDate = sowingDateInput.value;
    }
    updateCropLifecycle();
    updateUI();
    cropConfigModal.classList.add('hidden');
    
    sendHardwareCommand({
      crop: appState.selectedCropId,
      min_threshold: appState.minThreshold,
      max_threshold: appState.maxThreshold
    });
  });

  openCropLibBtn.addEventListener('click', () => {
    filterAndRenderEncyclopedia();
    cropEncyclopediaModal.classList.remove('hidden');
  });

  closeEncycBtn.addEventListener('click', () => cropEncyclopediaModal.classList.add('hidden'));

  cropSearchInput.addEventListener('input', () => {
    filterAndRenderEncyclopedia();
  });
}

// Populate Dropdown Grouped by Season (Rabi, Kharif, Zaid, Annual)
function populateCropDropdown() {
  const lang = appState.currentLang;
  const isEn = lang === 'en';
  const rabi = CROPS_DATABASE.filter(c => c.season_category === 'Rabi');
  const kharif = CROPS_DATABASE.filter(c => c.season_category === 'Kharif');
  const zaid = CROPS_DATABASE.filter(c => c.season_category === 'Zaid');
  const annual = CROPS_DATABASE.filter(c => c.season_category === 'Annual');

  const makeOptions = (list) => list.map(c => {
    const regionalName = getCropDisplayName(c, lang);
    const seasonLabel = getSeasonDisplayName(c.season_category, lang);
    return `<option value="${c.id}">${regionalName} (${c.name_en}) - ${seasonLabel}</option>`;
  }).join('');

  cropSelectDropdown.innerHTML = `
    <optgroup label="${getSeasonDisplayName('Rabi', lang)}">
      ${makeOptions(rabi)}
    </optgroup>
    <optgroup label="${getSeasonDisplayName('Kharif', lang)}">
      ${makeOptions(kharif)}
    </optgroup>
    <optgroup label="${getSeasonDisplayName('Zaid', lang)}">
      ${makeOptions(zaid)}
    </optgroup>
    <optgroup label="${getSeasonDisplayName('Annual', lang)}">
      ${makeOptions(annual)}
    </optgroup>
  `;
}

function updateModalCropPreview() {
  const c = CROPS_DATABASE.find(x => x.id === cropSelectDropdown.value) || CROPS_DATABASE[0];
  const isHi = appState.currentLang === 'hi';
  modalCropDuration.textContent = `${c.duration_days} ${isHi ? 'दिन' : 'Days'}`;
  modalCropWater.textContent = c.total_water_mm;
  modalCropIrrigations.textContent = isHi ? c.total_irrigations_hi : c.total_irrigations_en;
}

// Filter Encyclopedia by Season & Search Query
function filterAndRenderEncyclopedia() {
  const q = cropSearchInput.value.toLowerCase().trim();
  let filtered = CROPS_DATABASE;

  if (activeSeasonFilter !== 'all') {
    filtered = filtered.filter(c => c.season_category.toLowerCase() === activeSeasonFilter.toLowerCase());
  }

  if (q) {
    filtered = filtered.filter(c => 
      c.name_hi.toLowerCase().includes(q) || 
      c.name_en.toLowerCase().includes(q) ||
      c.season_hi.toLowerCase().includes(q) ||
      c.season_en.toLowerCase().includes(q)
    );
  }

  renderEncyclopedia(filtered);
}

function renderEncyclopedia(crops) {
  const lang = appState.currentLang;
  const isHi = lang === 'hi';
  const isEn = lang === 'en';
  
  encyclopediaList.innerHTML = crops.map(c => {
    const displayName = getCropDisplayName(c, lang);
    const seasonLabel = getSeasonDisplayName(c.season_category, lang);
    return `
    <div class="p-4 bg-slate-900/60 rounded-[22px] border border-white/10 space-y-2 shadow-inner">
      <div class="flex items-start justify-between">
        <div>
          <h4 class="text-sm font-bold text-white">${displayName} <span class="text-xs font-normal text-slate-400">(${c.name_en})</span></h4>
          <span class="inline-block text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 mt-1">${seasonLabel}</span>
        </div>
        <div class="text-right text-xs">
          <span class="text-slate-400 block text-[10px]">${isEn ? 'Total Water Need' : 'कुल जल आवश्यकता'}</span>
          <strong class="text-cyan-400 font-bold">${c.total_water_mm}</strong>
        </div>
      </div>

      <p class="text-xs text-slate-300 font-hindi leading-relaxed">${isEn ? c.description_en : c.description_hi}</p>

      <div class="grid grid-cols-2 gap-2 text-[11px] pt-1.5 border-t border-white/10 text-slate-400 font-hindi">
        <div>${isEn ? 'Irrigations:' : 'सिंचाई:'} <strong class="text-slate-200">${isEn ? c.total_irrigations_en : c.total_irrigations_hi}</strong></div>
        <div>${isEn ? 'Duration:' : 'अवधि:'} <strong class="text-slate-200">${c.duration_days} ${isEn ? 'Days' : 'दिन'}</strong></div>
        <div class="col-span-2">${isEn ? 'Soil:' : 'मिट्टी:'} <span class="text-slate-300">${isEn ? c.soil_type_en : c.soil_type_hi}</span></div>
      </div>

      <!-- Growth Stages details -->
      <details class="text-[11px] pt-2 text-slate-300">
        <summary class="cursor-pointer text-emerald-400 font-semibold hover:underline flex items-center justify-between">
          <span>${isEn ? `Key Irrigation Stages (${c.stages.length} Stages)` : `सिंचाई की मुख्य अवस्थाएं (${c.stages.length} स्टेज)`}</span>
          <span class="text-xs">▾</span>
        </summary>
        <div class="mt-2 space-y-2 pl-2 border-l border-emerald-500/30 text-[10px]">
          ${c.stages.map((s, idx) => `
            <div class="p-2 rounded-xl bg-white/5 border border-white/5 space-y-1">
              <div class="flex items-center justify-between">
                <strong class="text-white">${isEn ? s.stage_name_en : s.stage_name_hi} (${isEn ? 'Day' : 'दिन'} ${s.start_day}-${s.end_day})</strong>
                <span class="px-1.5 py-0.2 rounded text-[9px] font-bold ${s.critical_stage ? 'bg-red-500/20 text-red-400' : 'bg-emerald-500/20 text-emerald-300'}">
                  ${s.critical_stage ? (isEn ? '★ Critical' : '★ अति-महत्वपूर्ण') : (isEn ? 'Normal' : 'सामान्य')}
                </span>
              </div>
              <div class="text-slate-400 text-[10px]">${isEn ? 'Optimal Moisture:' : 'आदर्श नमी:'} <strong>${s.min_moisture}% - ${s.max_moisture}%</strong></div>
              <p class="text-slate-300 font-hindi text-[10px] leading-relaxed">${isEn ? s.advice_en : s.advice_hi}</p>
            </div>
          `).join('')}
        </div>
      </details>
    </div>
  `;}).join('');
  lucide.createIcons();
}

// --- App Bootstrap ---
function initApp() {
  lucide.createIcons();
  const savedLang = localStorage.getItem('smart_kisan_lang') || 'hi';
  renderLanguageCards();
  setLanguage(savedLang);
  initDigitalTwin();
  initTelemetryChart();

  setInterval(tickSystem, 2500);
  setupEventListeners();
}

document.addEventListener('DOMContentLoaded', initApp);
