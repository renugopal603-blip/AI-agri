import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sprout, Wind, Droplets, MapPin, AlertCircle } from 'lucide-react';

const ChatbotTab = ({ activeFarm }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [language, setLanguage] = useState('English');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  const languages = ['English', 'Tamil (தமிழ்)', 'Telugu (తెలుగు)', 'Hindi (हिन्दी)', 'Malayalam (മലയാളം)', 'Kannada (ಕನ್ನಡ)'];

  const translations = {
    'English': {
      greeting: "Hello! I am AgriAI, your intelligent Smart Agriculture Assistant. How can I help you with your farm today?",
      placeholder: "Ask AgriAI anything in English...",
      assistant: "AgriAI Assistant",
      partner: "Your intelligent farming partner",
      lang: "Language:"
    },
    'Tamil (தமிழ்)': {
      greeting: "வணக்கம்! நான் AgriAI, உங்கள் அறிவார்ந்த வேளாண்மை உதவியாளர். இன்று உங்கள் பண்ணைக்கு நான் எவ்வாறு உதவ முடியும்?",
      placeholder: "AgriAI இடம் எதையும் கேளுங்கள்...",
      assistant: "AgriAI உதவியாளர்",
      partner: "உங்கள் அறிவார்ந்த விவசாய பங்குதாரர்",
      lang: "மொழி:"
    },
    'Telugu (తెలుగు)': {
      greeting: "నమస్కారం! నేను AgriAI, మీ వ్యవసాయ సహాయకుడిని. ఈ రోజు నేను మీకు ఎలా సహాయపడగలను?",
      placeholder: "AgriAI ని ఏదైనా అడగండి...",
      assistant: "AgriAI సహాయకుడు",
      partner: "మీ వ్యవసాయ భాగస్వామి",
      lang: "భాష:"
    },
    'Hindi (हिन्दी)': {
      greeting: "नमस्ते! मैं एग्रीएआई (AgriAI) हूँ, आपका कृषि सहायक। मैं आज आपकी कैसे मदद कर सकता हूँ?",
      placeholder: "AgriAI से कुछ भी पूछें...",
      assistant: "AgriAI सहायक",
      partner: "आपका कृषि भागीदार",
      lang: "भाषा:"
    },
    'Malayalam (മലയാളം)': {
      greeting: "നമസ്കാരം! ഞാൻ AgriAI, നിങ്ങളുടെ കാർഷിക സഹായിയാണ്. എനിക്ക് നിങ്ങളെ എങ്ങനെ സഹായിക്കാനാകും?",
      placeholder: "AgriAI യോട് എന്തെങ്കിലും ചോദിക്കുക...",
      assistant: "AgriAI സഹായി",
      partner: "നിങ്ങളുടെ കാർഷിക പങ്കാളി",
      lang: "ഭാഷ:"
    },
    'Kannada (ಕನ್ನಡ)': {
      greeting: "ನಮಸ್ಕಾರ! ನಾನು ಅಗ್ರಿಎಐ (AgriAI), ನಿಮ್ಮ ಕೃಷಿ ಸಹಾಯಕ. ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?",
      placeholder: "AgriAI ಅನ್ನು ಏನಾದರೂ ಕೇಳಿ...",
      assistant: "AgriAI ಸಹಾಯಕ",
      partner: "ನಿಮ್ಮ ಕೃಷಿ ಪಾಲುದಾರ",
      lang: "ಭಾಷೆ:"
    }
  };

  // When language changes, append a localized greeting
  useEffect(() => {
    setMessages([{
      sender: 'ai',
      text: translations[language].greeting,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }]);
  }, [language]);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = {
      sender: 'user',
      text: input,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response based on the prompt
    setTimeout(() => {
      const aiResponse = {
        sender: 'ai',
        text: generateSimulatedResponse(userMsg.text, language, activeFarm),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const generateSimulatedResponse = (query, lang, farm) => {
    const q = query.toLowerCase();
    
    // Topic Detection using Regex
    const isWeather = /(temperature|weather|rain|climate|hot|cold|forecast|degree)/i.test(q);
    const isDisease = /(disease|spot|blight|yellow|wilt|fungus|rot|infection)/i.test(q);
    const isPest = /(pest|insect|bug|worm|aphid|whitefly|caterpillar|borer)/i.test(q);
    const isFertilizer = /(fertilizer|npk|urea|compost|nutrient|manure|grow|yield)/i.test(q);
    const isIrrigation = /(water|irrigation|dry|moisture|drought)/i.test(q);
    const isCrop = /(crop|plant|seed|recommend|suitable)/i.test(q);

    // Dynamic Farm Context Variables
    const district = farm?.district || 'your region';
    const temp = '32°C'; // Simulated live temp
    const humidity = '65%';
    
    let enResponse = "";

    if (isWeather) {
      enResponse = `**Short Answer:** The current temperature in ${district} is ${temp} with ${humidity} humidity.\n\n**Explanation:** Based on your farm's GPS coordinates, the micro-climate is currently warm and moderately humid. There is no rainfall expected in the next 48 hours.\n\n**Recommended Action:** Since it's warm and dry, ensure your crops receive adequate water today, preferably during the cooler evening hours.\n\n**Precautions:** Avoid spraying chemical fertilizers or pesticides during peak sunlight hours (12 PM - 3 PM) to prevent leaf burn.`;
    } else if (isDisease) {
      enResponse = `**Short Answer:** Your crop is likely suffering from a fungal infection like Leaf Spot or Blight.\n\n**Explanation:** Symptoms like yellowing leaves or spots are typically caused by high humidity and poor air circulation, which allow fungal spores to multiply rapidly on the leaf surface.\n\n**Recommended Action:** Immediately apply a copper-based fungicide or a strong Neem oil extract (10,000 PPM) to stop the spread. Prune heavily infected leaves.\n\n**Precautions:** Do not water the plants from above (avoid wetting the leaves). If the disease spreads to the stems, consult your local agricultural extension officer immediately.`;
    } else if (isPest) {
      enResponse = `**Short Answer:** You are likely dealing with a pest infestation (such as Aphids, Borers, or Whiteflies).\n\n**Explanation:** Pests sap nutrients from the plant, causing stunted growth, curled leaves, and reduced yield. They multiply quickly in warm climates.\n\n**Recommended Action:** Spray an organic insecticide like Neem oil mixed with mild soap, or introduce beneficial insects like Ladybugs. For severe cases, use a targeted chemical pesticide like Imidacloprid.\n\n**Precautions:** Always wear protective gear (mask, gloves) when spraying pesticides. Ensure you observe the pre-harvest interval (PHI) before picking any crops.`;
    } else if (isFertilizer) {
      enResponse = `**Short Answer:** You should apply a balanced NPK fertilizer and organic compost.\n\n**Explanation:** Crops need a steady supply of Nitrogen (for leaves), Phosphorus (for roots), and Potassium (for flowering/fruiting). Given your ${farm?.soil || 'soil type'}, it may lack organic matter.\n\n**Recommended Action:** Apply Vermicompost mixed with farmyard manure as a base. Follow up with NPK 10:20:20 chemical fertilizer during the active growth stage.\n\n**Precautions:** Do not over-fertilize, especially with Nitrogen, as it can burn the roots and attract pests. Always irrigate the field immediately after applying dry fertilizers.`;
    } else if (isIrrigation) {
      enResponse = `**Short Answer:** Your field requires consistent watering, approximately every 3-5 days.\n\n**Explanation:** Since your water availability is marked as ${farm?.water || 'Medium'}, maintaining optimal soil moisture is critical. Under-watering stunts growth, while over-watering causes root rot.\n\n**Recommended Action:** Implement Drip Irrigation to save water and deliver moisture directly to the root zone. Mulch the soil surface with straw to reduce evaporation.\n\n**Precautions:** Check soil moisture at a depth of 2-3 inches before watering. Never allow water to stagnate in the field for more than 24 hours.`;
    } else if (isCrop) {
      enResponse = `**Short Answer:** I recommend planting Groundnut, Millets, or Cotton.\n\n**Explanation:** Based on your location (${district}), soil type (${farm?.soil || 'Red Soil'}), and the upcoming ${farm?.season || 'Summer'} season, these crops have the highest suitability scores and market demand.\n\n**Recommended Action:** Prepare the land with deep ploughing. Procure certified, disease-resistant seeds from a trusted supplier before the season begins.\n\n**Precautions:** Perform a quick soil test to check pH levels before sowing. Ensure your irrigation system is fully functional before planting.`;
    } else {
      enResponse = `**Short Answer:** I am analyzing your specific request regarding "${query}".\n\n**Explanation:** As AgriAI, I process your farm's weather (${temp}), soil (${farm?.soil || 'Unknown'}), and location (${district}) data to provide tailored advice. However, your question doesn't match my primary agricultural categories (weather, pests, disease, fertilizers, irrigation, crops).\n\n**Recommended Action:** Could you please rephrase or provide more specific details? For example, ask "What is the temperature?", "How to cure yellow spots?", or "Best fertilizer for my farm".\n\n**Precautions:** Always verify severe agricultural issues with a local expert.`;
    }

    // Translation overrides for the exact output (Simplified mapping for foreign languages based on the detected intent)
    if (lang === 'Tamil (தமிழ்)') {
      if (isWeather) return `**குறுகிய பதில்:** ${district} இல் தற்போதைய வெப்பநிலை ${temp} மற்றும் ஈரப்பதம் ${humidity} ஆக உள்ளது.\n\n**விளக்கம்:** உங்கள் பண்ணையின் வானிலை மிதமான வெப்பத்துடன் உள்ளது. மழைக்கு வாய்ப்பில்லை.\n\n**பரிந்துரைக்கப்படும் செயல்:** மாலையில் பயிர்களுக்கு போதிய நீர் பாய்ச்சவும்.\n\n**முன்னெச்சரிக்கைகள்:** மதிய வெயிலில் உரங்கள் தெளிப்பதைத் தவிர்க்கவும்.`;
      if (isDisease) return "**குறுகிய பதில்:** இது இலை புள்ளி நோயாக இருக்கலாம்.\n\n**விளக்கம்:** அதிக ஈரப்பதம் காரணமாக பூஞ்சை தொற்று ஏற்படுகிறது.\n\n**பரிந்துரைக்கப்படும் செயல்:** உடனடியாக வேப்ப எண்ணெய் அல்லது பூஞ்சைக் கொல்லியைக் தெளிக்கவும்.\n\n**முன்னெச்சரிக்கைகள்:** செடிகளுக்கு இடையே நல்ல இடைவெளியை பராமரிக்கவும். தேவைப்பட்டால் விவசாய அதிகாரியை அணுகவும்.";
      if (isPest) return "**குறுகிய பதில்:** இது பூச்சி தாக்குதலாக இருக்கலாம்.\n\n**விளக்கம்:** பூச்சிகள் செடியின் சத்துக்களை உறிஞ்சி வளர்ச்சியை பாதிக்கின்றன.\n\n**பரிந்துரைக்கப்படும் செயல்:** வேப்ப எண்ணெய் அல்லது இயற்கை பூச்சிக்கொல்லிகளை பயன்படுத்தவும்.\n\n**முன்னெச்சரிக்கைகள்:** பூச்சிக்கொல்லி தெளிக்கும் போது பாதுகாப்பு உபகரணங்களை அணியவும்.";
      if (isFertilizer) return "**குறுகிய பதில்:** NPK உரம் அல்லது இயற்கை உரங்களை இடவும்.\n\n**விளக்கம்:** பயிர்களின் வளர்ச்சிக்கு தழை, மணி, சாம்பல் சத்துக்கள் மிகவும் அவசியம்.\n\n**பரிந்துரைக்கப்படும் செயல்:** மண்புழு உரம் மற்றும் NPK 10:20:20 உரத்தை பயன்படுத்தவும்.\n\n**முன்னெச்சரிக்கைகள்:** அளவுக்கு அதிகமாக உரம் இடுவதை தவிர்க்கவும். உரம் இட்ட பின் நீர் பாய்ச்சவும்.";
      return "**குறுகிய பதில்:** உங்கள் கேள்வியை நான் ஆராய்ந்து வருகிறேன்.\n\n**விளக்கம்:** உங்கள் பண்ணை தரவுகளின் அடிப்படையில் சிறந்த ஆலோசனை வழங்க, தயவுசெய்து உங்கள் கேள்வியை இன்னும் தெளிவாக கேட்கவும் (உதாரணமாக: உரம், பூச்சி, நோய் பற்றி).\n\n**பரிந்துரைக்கப்படும் செயல்:** விரிவான தகவல்களை உள்ளிடவும்.\n\n**முன்னெச்சரிக்கைகள்:** தீவிர பிரச்சனைகளுக்கு உள்ளூர் அதிகாரியை அணுகவும்.";
    }
    
    if (lang === 'Telugu (తెలుగు)') {
      if (isWeather) return `**చిన్న సమాధానం:** ${district} లో ప్రస్తుత ఉష్ణోగ్రత ${temp}, తేమ ${humidity} గా ఉంది.\n\n**వివరణ:** మీ వ్యవసాయ క్షేత్రంలో వాతావరణం వెచ్చగా ఉంది. వర్షం పడే అవకాశం లేదు.\n\n**సిఫార్సు చేయబడిన చర్య:** సాయంత్రం వేళల్లో పంటలకు తగినంత నీరు అందించండి.\n\n**జాగ్రత్తలు:** మధ్యాహ్నం ఎండలో ఎరువులు పిచికారీ చేయవద్దు.`;
      if (isDisease) return "**చిన్న సమాధానం:** ఇది ఆకు మచ్చ వ్యాధి కావచ్చు.\n\n**వివరణ:** అధిక తేమ కారణంగా ఫంగస్ ఇన్ఫెక్షన్ వస్తుంది.\n\n**సిఫార్సు చేయబడిన చర్య:** వేప నూనె లేదా శిలీంద్ర సంహారిణిని వెంటనే పిచికారీ చేయండి.\n\n**జాగ్రత్తలు:** మొక్కల మధ్య సరైన అంతరం ఉంచండి. అవసరమైతే వ్యవసాయ అధికారిని సంప్రదించండి.";
      return "**చిన్న సమాధానం:** మీ ప్రశ్నను నేను విశ్లేషిస్తున్నాను.\n\n**వివరణ:** ఖచ్చితమైన సలహా ఇవ్వడానికి దయచేసి మరింత వివరంగా అడగండి (ఉదాహరణకు: ఎరువులు, తెగుళ్లు గురించి).\n\n**సిఫార్సు చేయబడిన చర్య:** దయచేసి మళ్లీ అడగండి.\n\n**జాగ్రత్తలు:** తీవ్రమైన సమస్యల కోసం స్థానిక నిపుణులను సంప్రదించండి.";
    }

    if (lang === 'Hindi (हिन्दी)') {
      if (isWeather) return `**संक्षिप्त उत्तर:** ${district} में वर्तमान तापमान ${temp} और आर्द्रता ${humidity} है।\n\n**व्याख्या:** आपके खेत का मौसम गर्म है। बारिश की कोई संभावना नहीं है।\n\n**अनुशंसित कार्रवाई:** शाम के समय फसलों को पर्याप्त पानी दें।\n\n**सावधानियां:** दोपहर की धूप में उर्वरकों का छिड़काव करने से बचें।`;
      if (isDisease) return "**संक्षिप्त उत्तर:** यह लीफ स्पॉट बीमारी हो सकती है।\n\n**व्याख्या:** उच्च आर्द्रता के कारण फंगल संक्रमण होता है।\n\n**अनुशंसित कार्रवाई:** तुरंत नीम के तेल या कवकनाशी का छिड़काव करें।\n\n**सावधानियां:** पौधों के बीच उचित दूरी बनाए रखें। यदि आवश्यक हो तो कृषि अधिकारी से परामर्श लें।";
      return "**संक्षिप्त उत्तर:** मैं आपके प्रश्न का विश्लेषण कर रहा हूँ।\n\n**व्याख्या:** सटीक सलाह के लिए कृपया अधिक विस्तार से पूछें (उदाहरण: उर्वरक, कीट, बीमारी के बारे में)।\n\n**अनुशंसित कार्रवाई:** कृपया अपना प्रश्न स्पष्ट करें।\n\n**सावधानियां:** गंभीर समस्याओं के लिए स्थानीय कृषि अधिकारी से संपर्क करें।";
    }

    // Default to English if language matching misses
    return enResponse;
  };

  const t = translations[language];

  return (
    <div className="h-[calc(100vh-120px)] flex flex-col space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-10">
      
      {/* Header & Settings */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white dark:bg-agri-bg-darkSurface p-4 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm shrink-0">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-agri-green text-white rounded-lg"><Bot className="w-6 h-6" /></div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{t.assistant}</h3>
            <p className="text-sm text-gray-500">{t.partner}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4 text-sm w-full md:w-auto">
          <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 w-full md:w-auto">
            <span className="text-gray-500 font-medium">{t.lang}</span>
            <select 
              value={language} 
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-transparent font-bold text-agri-green outline-none cursor-pointer"
            >
              {languages.map(l => <option key={l} value={l}>{l}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* Context Bar */}
      {activeFarm && (
        <div className="flex flex-wrap items-center gap-4 px-4 py-2 bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800 rounded-lg shrink-0 text-xs text-blue-800 dark:text-blue-300">
          <span className="font-bold flex items-center gap-1"><MapPin className="w-3.5 h-3.5"/> {activeFarm.name} ({activeFarm.district || 'Unknown'})</span>
          <span className="flex items-center gap-1"><Sprout className="w-3.5 h-3.5"/> {activeFarm.soil || 'N/A Soil'}</span>
          <span className="flex items-center gap-1"><Wind className="w-3.5 h-3.5"/> {activeFarm.season || 'N/A Season'}</span>
          <span className="flex items-center gap-1"><Droplets className="w-3.5 h-3.5"/> {activeFarm.water || 'N/A Water'}</span>
        </div>
      )}

      {/* Chat Area */}
      <div className="flex-1 bg-white dark:bg-agri-bg-darkSurface rounded-xl border border-gray-100 dark:border-gray-800 shadow-inner p-4 overflow-y-auto flex flex-col gap-4 relative">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex max-w-[85%] ${msg.sender === 'user' ? 'ml-auto flex-row-reverse' : 'mr-auto'}`}>
            <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${msg.sender === 'user' ? 'bg-gray-200 dark:bg-gray-700 ml-3' : 'bg-agri-green text-white mr-3'}`}>
              {msg.sender === 'user' ? <User className="w-4 h-4 text-gray-600 dark:text-gray-300"/> : <Bot className="w-5 h-5"/>}
            </div>
            <div>
              <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                msg.sender === 'user' 
                  ? 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-tr-sm' 
                  : 'bg-agri-green/10 text-gray-800 dark:text-gray-200 border border-agri-green/20 rounded-tl-sm'
              }`}>
                {msg.text.split('\\n').map((line, i) => {
                  if (line.includes('**')) {
                    const parts = line.split('**');
                    return (
                      <p key={i} className="mb-2 last:mb-0">
                        {parts.map((part, j) => j % 2 === 1 ? <strong key={j} className="text-gray-900 dark:text-white">{part}</strong> : part)}
                      </p>
                    )
                  }
                  return <p key={i} className="mb-2 last:mb-0">{line}</p>
                })}
              </div>
              <p className={`text-xs text-gray-400 mt-1 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>{msg.time}</p>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex max-w-[85%] mr-auto">
            <div className="shrink-0 w-8 h-8 rounded-full bg-agri-green text-white mr-3 flex items-center justify-center">
              <Bot className="w-5 h-5"/>
            </div>
            <div className="p-4 rounded-2xl bg-agri-green/10 border border-agri-green/20 rounded-tl-sm flex gap-1 items-center">
              <span className="w-2 h-2 bg-agri-green rounded-full animate-bounce"></span>
              <span className="w-2 h-2 bg-agri-green rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
              <span className="w-2 h-2 bg-agri-green rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      {/* Input Area */}
      <form onSubmit={handleSend} className="shrink-0 bg-white dark:bg-agri-bg-darkSurface p-3 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm flex items-center gap-3">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t.placeholder}
          className="flex-1 bg-gray-50 dark:bg-gray-900 border-none outline-none px-4 py-3 rounded-lg text-sm dark:text-white"
        />
        <button 
          type="submit" 
          disabled={!input.trim() || isTyping}
          className="bg-agri-green hover:bg-agri-green-deep text-white p-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

export default ChatbotTab;
