import { Guru, Ashram, AshramEvent, Product, BlogArticle, Testimonial } from './types';

export const GURUS: Guru[] = [
  {
    id: 'prabhupada',
    name: {
      en: 'A.C. Bhaktivedanta Swami Prabhupada',
      hi: 'ए.सी. भक्तिवेदांत स्वामी प्रभुपाद',
      gu: 'એ.સી. ભક્તિવેદાંત સ્વામી પ્રભુપાદ',
      bn: 'এ.সি. ভক্তিবেদান্ত স্বামী প্রভুপাদ'
    },
    era: 'Modern Era (1896 - 1977)',
    country: 'India / Global',
    lineage: {
      en: 'Brahma-Madhva-Gaudiya Sampradaya',
      hi: 'ब्रह्म-माध्व-गौड़ीय सम्प्रदाय',
      gu: 'બ્રહ્મ-માધ્વ-ગૌડીય સંપ્રદાય',
      bn: 'ব্রহ্ম-মাধ্ব-গৌড়ীয় সম্প্রদায়'
    },
    discipleOf: {
      en: 'Bhaktisiddhanta Sarasvati Thakura',
      hi: 'भक्तिसिद्धान्त सरस्वती ठाकुर',
      gu: 'ભક્તિસિદ્ધાંત સરસ્વતી ઠાકુર',
      bn: 'ভক্তিসিদ্ধান্ত সরস্বতী ঠাকুর'
    },
    photoUrl: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=600', // Represents devotional peaceful atmosphere
    summary: {
      en: 'Founder-Acarya of the International Society for Krishna Consciousness (ISKCON). He spread Gaudiya Vaishnavism globally.',
      hi: 'अंतर्राष्ट्रीय कृष्णभावनामृत संघ (ISKCON) के संस्थापक-आचार्य। उन्होंने विश्व स्तर पर गौड़ीय वैष्णव धर्म का प्रचार किया।',
      gu: 'ઇન્ટરનેશનલ સોસાયટી ફોર ક્રિષ્ના કોન્શિયસનેસ (ISKCON) ના સ્થાપક-આચાર્ય. તેમણે વૈશ્વિક સ્તરે ગૌડીય વૈષ્ણવ ધર્મ ફેલાવ્યો.',
      bn: 'ইন্টারন্যাশনাল সোসাইটি ফর কৃষ্ণ কনশাসনেস (ইস্কন)-এর প্রতিষ্ঠাতা-আচার্য। তিনি বিশ্বজুড়ে গৌড়ীয় বৈষ্ণবধর্মের প্রচার করেছিলেন।'
    },
    biography: {
      en: 'Srila Prabhupada was born Abhay Charan De in Calcutta. In 1922, he met his spiritual master, Bhaktisiddhanta Sarasvati Thakura, who requested him to present Vedic knowledge in English. In 1965, at age 69, he boarded a cargo ship to New York with just 40 rupees and a trunk of translations, eventually establishing ISKCON and translating dozens of foundational scriptures.',
      hi: 'श्रील प्रभुपाद का जन्म कलकत्ता में अभय चरण डे के रूप में हुआ था। 1922 में, वे अपने आध्यात्मिक गुरु भक्तिसिद्धान्त सरस्वती ठाकुर से मिले, जिन्होंने उनसे अंग्रेजी में वैदिक ज्ञान प्रस्तुत करने का अनुरोध किया। 1965 में, 69 वर्ष की आयु में, वे केवल 40 रुपये और अनुवादों के एक ट्रंक के साथ न्यूयॉर्क जाने वाले एक मालवाहक जहाज पर सवार हुए, अंततः इस्कॉन की स्थापना की और दर्जनों मौलिक ग्रंथों का अनुवाद किया।',
      gu: 'શ્રીલ પ્રભુપાદનો જન્મ કલકત્તામાં અભય ચરણ ડે તરીકે થયો હતો. ૧૯૨૨ માં, તેઓ તેમના આધ્યાત્મિક ગુરુ ભક્તિસિદ્ધાંત સરસ્વતી ઠાકુરને મળ્યા, જેમણે તેમને અંગ્રેજીમાં વૈદિક જ્ઞાન રજૂ કરવા વિનંતી કરી. ૧૯૬૫ માં, ૬૯ વર્ષની વયે, તેઓ માત્ર ૪૦ રૂપિયા અને ભાષાંતરોના ટ્રંક સાથે ન્યૂયોર્ક જનારા નૂર વહાણમાં સવાર થયા, આખરે ઇસ્કોનની સ્થાપના કરી અને ડઝનેક પાયાના ગ્રંથોનું ભાષાંતર કર્યું.',
      bn: 'শ্রীল প্রভুপাদ কলকাতায় অভয় চরণ দে নামে জন্মগ্রহণ করেন। ১৯২২ সালে তিনি তাঁর আধ্যাত্মিক গুরু ভক্তিসিদ্ধান্ত সরস্বতী ঠাকুরের সাথে সাক্ষাৎ করেন, যিনি তাঁকে ইংরেজিতে বৈদিক জ্ঞান প্রচার করতে অনুরোধ করেন। ১৯৬৫ সালে, ৬৯ বছর বয়সে, তিনি মাত্র ৪০ টাকা এবং অনুবাদের একটি ট্রাঙ্ক নিয়ে নিউইয়র্কগামী মালবাহী জাহাজে চড়ে বসেন। তিনি ইসকন প্রতিষ্ঠা করেন এবং বহু গুরুত্বপূর্ণ বৈদিক শাস্ত্রের অনুবাদ সম্পন্ন করেন।'
    },
    birthDate: 'September 1, 1896',
    deathDate: 'November 14, 1977',
    birthPlace: {
      en: 'Calcutta, Bengal Presidency, British India',
      hi: 'कलकत्ता, बंगाल प्रेसीडेंसी, ब्रिटिश भारत',
      gu: 'કલકત્તા, બંગાળ પ્રેસિડેન્સી, બ્રિટિશ ભારત',
      bn: 'কলকাতা, বেঙ্গল প্রেসিডেন্সি, ব্রিটিশ ভারত'
    },
    majorContributions: [
      {
        en: 'Translation and commentary on Bhagavad-gita As It Is, Srimad-Bhagavatam, and Caitanya-caritamrta.',
        hi: 'भगवद-गीता यथारूप, श्रीमद्-भागवतम्, और चैतन्य-चरितामृत पर अनुवाद और भाष्य।',
        gu: 'ભગવદ-ગીતા યથારૂપ, શ્રીમદ-ભાગવતમ અને ચૈતન્ય-ચરિત્રામૃત પર ભાષાંતર અને વિવેચન.',
        bn: 'ভগবদ্গীতা যথাযথ, শ্রীমদ্ভগবতম্ এবং চৈতন্যচরিতামৃত গ্রন্থের অনুবাদ ও ভাষ্য রচনা।'
      },
      {
        en: 'Establishing over 108 temples, farm communities, and ashrams worldwide.',
        hi: 'विश्वभर में 108 से अधिक मंदिरों, कृषि समुदायों और आश्रमों की स्थापना।',
        gu: 'વિશ્વભરમાં ૧૦૮ થી વધુ મંદિરો, કૃષિ સમુદાયો અને આશ્રમોની સ્થાપના.',
        bn: 'বিশ্বজুড়ে ১০৮টিরও বেশি মন্দির, কৃষি খামার এবং আশ্রমের প্রতিষ্ঠা।'
      },
      {
        en: 'Inaugurating the global Food for Life program for distributing sacred vegetarian food (Prasadam).',
        hi: 'पवित्र शाकाहारी भोजन (प्रसादम) बांटने के लिए वैश्विक "फूड फॉर लाइफ" कार्यक्रम का उद्घाटन।',
        gu: 'પવિત્ર શાકાહારી ભોજન (પ્રસાદમ) વિતરણ માટે વૈશ્વિક "ફૂડ ફોર લાઈફ" કાર્યક્રમ શરૂ કર્યો.',
        bn: 'পবিত্র নিরামিষ ভোজন (প্রসাদ) বিতরণের জন্য বিশ্বব্যাপী "ফুড ফর লাইফ" কর্মসূচির শুভ সূচনা।'
      }
    ],
    timeline: [
      {
        year: '1896',
        title: { en: 'Auspicious Birth', hi: 'शुभ जन्म', gu: 'શુભ જન્મ', bn: 'শুভ জন্ম' },
        description: {
          en: 'Born on Nandotsava day to a pious Vaishnava family in Calcutta.',
          hi: 'कलकत्ता में एक धर्मपरायण वैष्णव परिवार में नंदोत्सव के दिन जन्म।',
          gu: 'કલકત્તામાં ધર્મનિષ્ઠ વૈષ્ણવ પરિવારમાં નંદોત્સવના દિવસે જન્મ.',
          bn: 'কলকাতায় এক পরম বৈষ্ণব পরিবারে নন্দোৎসবের পুণ্য তিথিতে জন্মগ্রহণ করেন।'
        }
      },
      {
        year: '1922',
        title: { en: 'Meeting the Master', hi: 'गुरुदेव से भेंट', gu: 'ગુરુદેવ સાથે મુલાકાત', bn: 'শ্রীগুরু সাক্ষাৎ' },
        description: {
          en: 'Met Bhaktisiddhanta Sarasvati Thakura, who instructed him to teach localized wisdom in English.',
          hi: 'भक्तिसिद्धान्त सरस्वती ठाकुर से मुलाकात हुई, जिन्होंने उन्हें अंग्रेजी में ज्ञान प्रचार का आदेश दिया।',
          gu: 'ભક્તિસિદ્ધાંત સરસ્વતી ઠાકુરને મળ્યા, જેમણે તેમને અંગ્રેજીમાં વૈદિક જ્ઞાન ફેલાવવાનો આદેશ આપ્યો.',
          bn: 'ভক্তিসিদ্ধান্ত সরস্বতী ঠাকুরের সাক্ষাৎ লাভ, যিনি তাঁকে ইংরেজিতে বৈদিক দর্শন প্রচারের নির্দেশ দেন।'
        }
      },
      {
        year: '1965',
        title: { en: 'Journey on Jaladuta', hi: 'जलदूत जलयात्रा', gu: 'જલદૂત જલયાત્રા', bn: 'জলদূতে মহাসফর' },
        description: {
          en: 'Travelled to USA on cargo ship Jaladuta, surviving two heart attacks at sea.',
          hi: 'मालवाहक जहाज "जलदूत" पर अमेरिका की यात्रा की, समुद्र में दो दिल के दौरों से बचे।',
          gu: 'માલવાહક જહાજ "જલદૂત" પર અમેરિકા પ્રવાસ કર્યો, દરિયામાં બે વાર હાર્ટ એટેકથી બચ્યા.',
          bn: 'মালবাহী জাহাজ ‘জলদূত’-এ চড়ে মার্কিন মুলুকে যাত্রা, পথিমধ্যে দু’দুবার হৃদরোগের আক্রমণ সত্ত্বেও রক্ষা পান।'
        }
      },
      {
        year: '1966',
        title: { en: 'Incorporation of ISKCON', hi: 'इस्कॉन की स्थापना', gu: 'ઇસ્કોનની સ્થાપના', bn: 'ইস্কন প্রতিষ্ঠা' },
        description: {
          en: 'Registered ISKCON in New York City, initiating the worldwide Hare Krishna movement.',
          hi: 'न्यूयॉर्क शहर में इस्कॉन का पंजीकरण किया, जिससे दुनिया भर में हरे कृष्ण आंदोलन की शुरुआत हुई।',
          gu: 'ન્યૂયોર્ક શહેરમાં ઇસ્કોનની નોંધણી કરાવી વૈશ્વિક હરે કૃષ્ણ આંદોલનની શરૂઆત કરી.',
          bn: 'নিউ ইয়র্ক শহরে আনুষ্ঠানিকভাবে ইসকনের পত্তন করেন, যা বিশ্বজুড়ে হরে কৃষ্ণ আন্দোলন ছড়িয়ে দেয়।'
        }
      }
    ],
    teachings: [
      {
        id: 't-1',
        title: {
          en: 'Simple Living, High Thinking',
          hi: 'सादा जीवन, उच्च विचार',
          gu: 'સાદું જીવન, ઉચ્ચ વિચાર',
          bn: 'সরল জীবন, উন্নত চিন্তা'
        },
        type: 'quote',
        content: {
          en: '"Simple living and high thinking is the real solution to modern material anxieties. Human life is meant for self-realization, not artificial luxury."',
          hi: '"सादा जीवन और उच्च विचार आधुनिक भौतिक चिंताओं का वास्तविक समाधान है। मानव जीवन आत्म-साक्षात्कार के लिए है, कृत्रिम विलासिता के लिए नहीं।"',
          gu: '"સાદું જીવન અને ઉચ્ચ વિચાર એ આધુનિક ભૌતિક ચિંતાઓનો વાસ્તવિક ઉકેલ છે. માનવ જીવન આત્મ-સાક્ષાત્કાર માટે છે, કૃત્રિમ ભોગવિલાસ માટે નહીં."',
          bn: '"সরল জীবনযাপন ও উন্নত চিন্তাভাবনাই আধুনিক জাগতিক দুশ্চিন্তার সত্যিকারের সমাধান। মানব জীবন আত্মোপলব্ধির উদ্দেশ্যে নিবেদিত, কৃত্রিম বিলাসিতার জন্য নয়।"'
        }
      }
    ],
    relatedAshramIds: ['vrindavan-temple', 'mayapur-chandradoya'],
    relatedEventIds: ['ev-ratha-yatra', 'ev-janmashtami']
  },
  {
    id: 'chaitanya',
    name: {
      en: 'Sri Chaitanya Mahaprabhu',
      hi: 'श्री चैतन्य महाप्रभु',
      gu: 'શ્રી ચૈતન્ય મહાપ્રભુ',
      bn: 'শ্রী চৈতন্য মহাপ্রভু'
    },
    era: 'Medieval Era (1486 - 1534)',
    country: 'West Bengal, India',
    lineage: {
      en: 'Gaudiya Sampradaya Original Teacher',
      hi: 'गौड़ीय सम्प्रदाय के मूल प्रवर्तक',
      gu: 'ગૌડીય સંપ્રદાયના મૂળ પ્રવર્તક',
      bn: 'গৌড়ীয় বৈষ্ণবধর্মের পরম তত্ত্ব'
    },
    discipleOf: {
      en: 'Ishvara Puri',
      hi: 'ईश्वर पुरी',
      gu: 'ઈશ્વર પુરી',
      bn: 'ঈশ্বর পুরী'
    },
    photoUrl: 'https://images.unsplash.com/photo-1609137144814-7223e75e1cee?auto=format&fit=crop&q=80&w=600', // Beautiful meditative flower background representation
    summary: {
      en: 'The golden avatar of Sri Krishna who inaugurated the congregational chanting of the holy names (Sankirtana).',
      hi: 'श्री कृष्ण के स्वर्ण अवतार जिन्होंने भगवान के पवित्र नामों के सामूहिक संकीर्तन का शुभारंभ किया।',
      gu: 'શ્રી કૃષ્ણના સુવર્ણ અવતાર જેમણે પવિત્ર નામોના સામૂહિક સંકીર્તન (સંકિર્તન) ની શરૂઆત કરી.',
      bn: 'শ্রীকৃষ্ণের স্বর্ণাবতার যিনি হরিনাম সংকীর্তন আন্দোলনের সূচনা করেছিলেন।'
    },
    biography: {
      en: 'Born under a neem tree in Navadvip, Bengal, as Nimai Pandit, He was a brilliant scholar. After initiation from Ishvara Puri in Gaya, He exhibited overwhelming symptoms of love of God. He spent His life singing the Hare Krishna Mahamantra and dancing through India, establishing the theological framework of Acintya Bheda Abheda (inconceivable oneness and difference).',
      hi: 'बंगाल के नवद्वीप में नीम के पेड़ के नीचे निमाई पंडित के रूप में जन्मे, वे एक प्रखर विद्वान थे। गया में ईश्वर पुरी से दीक्षा लेने के बाद, उन्होंने भगवद्-प्रेम के दिव्य लक्षण प्रदर्शित किए। उन्होंने अपना जीवन हरे कृष्ण महामंत्र के संकीर्तन और संपूर्ण भारत में नृत्य करते हुए व्यतीत किया।',
      gu: 'બંગાળના નવદ્વીપમાં લીમડાના ઝાડ નીચે નિમાઈ પંડિત તરીકે જન્મેલા, તેઓ અત્યંત પ્રતિભાશાળી વિદ્વાન હતા. ગયામાં ઈશ્વર પુરી પાસેથી દીક્ષા લીધા પછી, તેમણે ભગવદ્-પ્રેમના દિવ્ય લક્ષણો પ્રગટ કર્યા. તેમણે આખું જીવન હરે કૃષ્ણ મહામંત્રના સંકીર્તનમાં વિતાવ્યું.',
      bn: 'বঙ্গদেশের নবদ্বীপে নিম গাছের নিচে নিমাই পণ্ডিত নামে জন্মগ্রহণকারী মহাপ্রভু ছিলেন এক অসাধারণ পণ্ডিত। গয়ায় শ্রীঈশ্বর পুরীর কাছে দীক্ষা গ্রহণের পর তাঁর অন্তরে দিব্য ভগবৎ-প্রেম জাগ্রত হয়। তিনি তাঁর জীবন কৃষ্ণনাম সংকীর্তন ও সমগ্র ভারতে ভক্তি প্রচারে উৎসর্গ করেছিলেন।'
    },
    birthDate: 'February 18, 1486',
    deathDate: 'June 14, 1534',
    birthPlace: {
      en: 'Sridham Mayapur, Bengal, India',
      hi: 'श्रीधाम मायापुर, बंगाल, भारत',
      gu: 'શ્રીધામ માયાપુર, બંગાળ, ભારત',
      bn: 'শ্রীধাম মায়াপুর, পশ্চিমবঙ্গ, ভারত'
    },
    majorContributions: [
      {
        en: 'Establishing the congregational chanting of the Holy Names (Sankirtana) as the prime processes of the age.',
        hi: 'पवित्र नामों के संकीर्तन को इस कलयुग का परम धर्म घोषित करना।',
        gu: 'પવિત્ર નામોના સંકીર્તનને આ કળિયુગનો મુખ્ય ધર્મ સ્થાપિત કરવો.',
        bn: 'যুগধর্ম হিসেবে হরিনাম সংকীর্তনকে সর্বত্র ছড়িয়ে দেওয়া।'
      },
      {
        en: 'Composing the Siksastakam, eight deep verses loaded with pure devotional philosophy.',
        hi: 'शिक्षाष्टकम् की रचना, जो शुद्ध भक्ति दर्शन से परिपूर्ण आठ श्लोक हैं।',
        gu: 'શિક્ષાષ્ટકમની રચના કરવી, જે શુદ્ધ ભક્તિ દર્શનથી ભરેલા આઠ શ્લોકો છે.',
        bn: 'শিক্ষাষ্টকম রচনা, যা পরম ভক্তি দর্শনে সংবলিত আটটি পবিত্র শ্লোক।'
      }
    ],
    timeline: [
      {
        year: '1486',
        title: { en: 'Appearance in Navadvip', hi: 'नवद्वीप में प्राकट्य', gu: 'નવદ્વીપમાં પ્રાકટ્ય', bn: 'শুভ আবির্ভাব' },
        description: {
          en: 'Appeared during a lunar eclipse in Mayapur while everyone chanted Hari.',
          hi: 'मायापुर में चंद्र ग्रहण के दौरान प्रकट हुए, जब सभी लोग हरि नाम का जाप कर रहे थे।',
          gu: 'માયાપુરમાં ચંદ્રગ્રહણ દરમિયાન પ્રગટ થયા, જ્યારે લોકો હરિ નામનું સંકીર્તન કરી રહ્યા હતા.',
          bn: 'চন্দ্রগ্রহণকালে শ্রীধাম মায়াপুরে আবির্भूत হন, যখন চারদিক হরিনামে মুখরিত ছিল।'
        }
      }
    ],
    teachings: [
      {
        id: 't-2',
        title: {
          en: 'Trnad api sunicena (Humility)',
          hi: 'तृणादपि सुनीचेन (विनम्रता)',
          gu: 'તૃણાદપિ સુનીચેન (નમ્રતા)',
          bn: 'তৃণাদপি সুনীচেন (নম্রতা)'
        },
        type: 'quote',
        content: {
          en: '"One should chant the holy name of the Lord in a humble state of mind, thinking oneself lower than the straw in the street; one should be more tolerant than a tree, devoid of all sense of false prestige, and should be ready to offer all respect to others."',
          hi: '"मनुष्य को स्वयं को मार्ग के तिनके से भी तुच्छ मानकर, अत्यंत नम्र भाव से निरंतर भगवान के पवित्र नाम का जाप करना चाहिए; उसे वृक्ष से भी अधिक सहनशील होना चाहिए, मिथ्या प्रतिष्ठा की भावना से रहित होना चाहिए और दूसरों को पूरा सम्मान देना चाहिए।"',
          gu: '"રોડ પરના તણખલા કરતાં પણ પોતાને વધારે વિનમ્ર માની ભગવાનના પવિત્ર નામનું સ્મરણ કરવું જોઈએ; વૃક્ષ કરતાં પણ વધુ સહનશીલ બનીને તમામ અહંકાર તજી અન્યોને આદર આપવો જોઈએ."',
          bn: '"তৃণ অপেক্ষাও নিজেকে ক্ষুদ্র মনে করে, বৃক্ষের ন্যায় সহিষ্ণু হয়ে, নিজে অমানী হয়ে অন্যকে মান দিয়ে সর্বদা হরিনাম কীর্তন করা কর্তব্য।"'
        }
      }
    ],
    relatedAshramIds: ['mayapur-chandradoya'],
    relatedEventIds: ['ev-gaura-purnima', 'ev-ratha-yatra']
  }
];

export const ASHRAMS: Ashram[] = [
  {
    id: 'vrindavan-temple',
    name: {
      en: 'Sri Sri Krishna Balaram Mandir (ISKCON Vrindavan)',
      hi: 'श्री श्री कृष्ण बलराम मंदिर (इस्कॉन वृंदावन)',
      gu: 'શ્રી શ્રી કૃષ્ણ બલરામ મંદિર (ઇસ્કોન વૃંદાવન)',
      bn: 'শ্রী শ্রী কৃষ্ণ বলরাম মন্দির (ইস্কন বৃন্দাবন)'
    },
    coverUrl: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&q=80&w=1200', // Beautiful temple complex dome proxy
    galleryUrls: [
      'https://images.unsplash.com/photo-1609137144814-7223e75e1cee?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=400'
    ],
    establishedDate: 'April 20, 1975',
    builtByGuruId: 'prabhupada',
    purpose: {
      en: 'Providing spiritual education, daily traditional worship, and feeding pure sacred vegetarian meals to pilgrims.',
      hi: 'आध्यात्मिक शिक्षा प्रदान करना, दैनिक पारंपरिक पूजा-अर्चना और तीर्थयात्रियों को शुद्ध प्रसादम भोजन कराना।',
      gu: 'આધ્યાત્મિક શિક્ષણ પૂરું પાડવું, દૈનિક પરંપરાગત પૂજા કરવી, અને તીર્થયાત્રીઓને શુદ્ધ શાકાહારી પ્રસાદ આપવો.',
      bn: 'আধ্যাত্মিক শিক্ষা প্রদান, নিত্য বৈদিক পূজা ও ভক্তবৃন্দের মাঝে মহাপ্রসাদ বিতরণ।'
    },
    description: {
      en: 'This temple was founded by Srila Prabhupada personally and contains the Samadhi Mausoleum of the founder. It is located in Raman Reti, Vrindavan, where Lord Krishna and Balaram performed their childhood pastimes under ancient banyan trees.',
      hi: 'इस मंदिर की स्थापना स्वयं श्रील प्रभुपाद ने की थी और इसमें संस्थापक का समाधि मंदिर स्थित है। यह वृंदावन के रमण रेती में स्थित है, जहाँ भगवान कृष्ण और बलराम ने प्राचीन बरगद के पेड़ों के नीचे अपनी बाल लीलाएँ की थीं।',
      gu: 'આ મંદિરની સ્થાપના ખુદ શ્રીલ પ્રભુપાદે કરી હતી અને અહીં તેમની પવિત્ર સમાધિ આવેલી છે. આ મંદિર વૃંદાવનના રમણ રેતીમાં આવેલું છે, જ્યાં ભગવાન કૃષ્ણ અને બલરામે તેમની બાળ લીલાઓ કરી હતી.',
      bn: 'এই মন্দিরটি শ্রীল প্রভুপাদ কর্তৃক স্বয়ং প্রতিষ্ঠিত হয়েছিল এবং এখানে তাঁর সমাধি মন্দির অবস্থিত। এটি বৃন্দাবনের রমণ রেতিতে অবস্থিত, যেখানে ভগবান শ্রীকৃষ্ণ ও বলরাম বাল্যলীলা বিলাস করেছিলেন।'
    },
    country: 'India',
    state: 'Uttar Pradesh',
    city: 'Vrindavan',
    latitude: 27.5714,
    longitude: 77.6743,
    dailySchedule: [
      { time: '04:30 AM', activity: { en: 'Mangala Arati', hi: 'मंगला आरती', gu: 'મંગલા આરતી', bn: 'মঙ্গল আরতি' } },
      { time: '05:15 AM', activity: { en: 'Tulsi Puja & Japa', hi: 'तुलसी पूजा एवं जप', gu: 'તુલસી પૂજા અને જપ', bn: 'তুলসী পূজা ও জপ' } },
      { time: '07:30 AM', activity: { en: 'Deity Greeting & Darshan', hi: 'दर्शन आरती', gu: 'દર્શન આરતી', bn: 'দেবদর্শন আরতি' } },
      { time: '08:00 AM', activity: { en: 'Srimad Bhagavatam Discourse', hi: 'श्रीमद्भागवतम् प्रवचन', gu: 'શ્રીમદ ભાગવતમ પ્રવચન', bn: 'শ্রীমদ্ভাগবত প্রবচন' } },
      { time: '12:30 PM', activity: { en: 'Raj Bhoga Offerings & Closing', hi: 'राजभोग आरती और पट बंद', gu: 'રાજભોગ આરતી અને મંદિર બંધ', bn: 'রাজভোগ আরতি ও পট বন্ধ' } },
      { time: '07:00 PM', activity: { en: 'Gaura Arati & Sandhya Kirtana', hi: 'गौर आरती एवं संध्या कीर्तन', gu: 'ગૌર આરતી અને સંધ્યા કીર્તન', bn: 'গৌর আরতি ও সন্ধ্যা কীর্তন' } }
    ],
    facilities: [
      { en: 'Spiritual Guest House accommodation', hi: 'आध्यात्मिक अतिथि गृह व्यवस्था', gu: 'આધ્યાત્મિક ગેસ્ટ હાઉસ સગવડ', bn: 'আধ্যাত্মিক অতিথি ভবন' },
      { en: 'Govindas Pure Vegetarian Restaurant', hi: 'गोविंदा का शुद्ध शाकाहारी भोजनालय', gu: 'ગોવિંદાસ શુદ્ધ શાકાહારી રેસ્ટોરન્ટ', bn: 'গোবিন্দাস্ নিরামিষ ভোজনালয়' },
      { en: 'Vedic Gurukul School & Library', hi: 'वैदिक गुरुकुल और पुस्तकालय', gu: 'વૈદિક ગુરુકુળ અને લાઈબ્રેરી', bn: 'বৈদিক গুরুকুল ও গ্রন্থাগার' },
      { en: 'Bhaktivedanta Hospice Care', hi: 'भक्तिवेदांत धर्मशाला एवं चिकित्सा सेवा', gu: 'ભક્તિવેદાંત હોસ્પાઇસ કેર', bn: 'ভক্তিবেদান্ত হস Hospice সেবাকেন্দ্র' }
    ],
    contactEmail: 'vrindavan@iskcon.org',
    contactPhone: '+91-565-2540021',
    upcomingEventIds: ['ev-janmashtami'],
    residentGuruIds: ['prabhupada']
  },
  {
    id: 'mayapur-chandradoya',
    name: {
      en: 'Temple of the Vedic Planetarium (ISKCON Mayapur)',
      hi: 'वैदिक तारामंडल मंदिर (इस्कॉन मायापुर)',
      gu: 'વૈદિક તારામંડળ મંદિર (ઇસ્કોન માયાપુર)',
      bn: 'শ্রী মায়াপুর চন্দ্রোদয় মন্দির (ইস্কন মায়াপুর)'
    },
    coverUrl: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&q=80&w=1200', // Beautiful grand architect dome visual
    galleryUrls: [],
    establishedDate: 'March 11, 1972',
    builtByGuruId: 'chaitanya',
    purpose: {
      en: 'World headquarters of Gaudiya Vaishnavism and landmark for Vedic wisdom cosmology teachings.',
      hi: 'गौड़ीय वैष्णव संप्रदाय का वैश्विक मुख्यालय और वैदिक ब्रह्मांड विज्ञान की शिक्षाओं का केंद्र।',
      gu: 'ગૌડીય વૈષ્ણવ સંપ્રદાયનું મુખ્ય મથક અને વૈદિક જ્ઞાન કોસ્મોલોજીનું મુખ્ય કેન્દ્ર.',
      bn: 'গৌড়ীয় বৈষ্ণবধর্মের বৈশ্বিক প্রধান কার্যালয় এবং পরম বৈদিক ব্রহ্মাণ্ডের অন্যতম নিদর্শন স্থান।'
    },
    description: {
      en: 'Set in Bengal, this coordinates the holy birthplace of Sri Chaitanya Mahaprabhu. It is a mega-religious township. Under construction here is the Temple of the Vedic Planetarium (TOVP), which will showcase the dynamic spiritual structure of the universe as detailed in Srimad Bhagavatam.',
      hi: 'यह पश्चिम बंगाल के पवित्र मायापुर धाम में स्थित है, जो श्री चैतन्य महाप्रभु की जन्मभूमि है। यहाँ वर्तमान में विशाल "वैदिक तारामंडल मंदिर" (TOVP) बन रहा है, जो ब्रह्मांड की आध्यात्मिक संरचना को प्रदर्शित करेगा।',
      gu: 'પશ્ચિમ બંગાળના પવિત્ર માયાપુરમાં આવેલું છે, જે શ્રી ચૈતન્ય મહાપ્રભુનું જન્મસ્થળ છે. અહીં વિશાળ "વૈદિક તારામંડળ મંદિર" (TOVP) નું નિર્માણ થઈ રહ્યું છે.',
      bn: 'পশ্চিমবঙ্গের নদীয়া জেলার অন্তর্গত শ্রীধাম মায়াপুরে অবস্থিত শ্রীচৈতন্য মহাপ্রভুর পুণ্য জন্মস্থান। এখানে নির্মাণাধীন রয়েছে সুবিশাল শ্রী বৈদিক তারামণ্ডল মন্দির (TOVP), যা সমগ্র বিশ্বের মানুষকে বৈদিক মহাবিশ্বের আধ্যাত্মিক পরিক্রমা প্রদর্শন করবে।'
    },
    country: 'India',
    state: 'West Bengal',
    city: 'Mayapur',
    latitude: 23.4222,
    longitude: 88.3904,
    dailySchedule: [
      { time: '04:30 AM', activity: { en: 'Mangala Arati & Kirtan', hi: 'मंगला आरती एवं कीर्तन', gu: 'મંગલા આરતી અને કીર્તન', bn: 'মঙ্গল আরতি ও সংকীর্তন' } },
      { time: '08:30 AM', activity: { en: 'Srimad-Bhagavatam Class', hi: 'श्रीमद्भागवतम् कक्षा', gu: 'શ્રીમદ-ભાગવતમ કલાસ', bn: 'শ্রীমদ্ভাগবত প্রবচন' } },
      { time: '01:00 PM', activity: { en: 'Feast Prasadam served', hi: 'महाप्रसाद वितरण', gu: 'મહાપ્રસાદ ભોજન', bn: 'মহাপ্রসাদ ভোজন' } }
    ],
    facilities: [
      { en: 'Comprehensive Pilgrimage Cottages', hi: 'तीर्थयात्री कुटीर और गेस्ट हाउस', gu: 'તીર્થયાત્રી કુટીર સગવડ', bn: 'মহাতীর্থ যাত্রী ভবন' },
      { en: 'Goshala with 500+ happy cows', hi: '500+ गायों की सेवा वाली अति भव्य गौशाला', gu: '૫૦૦+ ગાયો વાળી ગૌશાળા', bn: 'শ্রীসুরভি গোশালা (৫০০+ বৈদিক গাভী)' },
      { en: 'Caitanya Research Center & Library', hi: 'चैतन्य शोध संस्थान और पुस्तकालय', gu: 'ચૈતન્ય રિસર્ચ સેન્ટર અને લાઈબ્રેરી', bn: 'চৈতন্য মহাপ্রভু গবেষণা কেন্দ্র ও পাঠাগার' }
    ],
    contactEmail: 'mayapur@iskcon.org',
    contactPhone: '+91-3472-245239',
    upcomingEventIds: ['ev-gaura-purnima', 'ev-ratha-yatra'],
    residentGuruIds: ['chaitanya', 'prabhipada']
  }
];

export const EVENTS: AshramEvent[] = [
  {
    id: 'ev-janmashtami',
    name: {
      en: 'Sri Krishna Janmashtami Mahotsav 2026',
      hi: 'श्री कृष्ण जन्माष्टमी महोत्सव 2026',
      gu: 'શ્રી કૃષ્ણ જન્માષ્ટમી મહોત્સવ ૨૦૨૬',
      bn: 'শ্রী কৃষ্ণ জন্মাষ্টমী মহোৎসব ২০২৬'
    },
    description: {
      en: 'The celebration of the appearance of Lord Krishna. Featuring mega abhishekam (bathing ceremony of the deity), mystical midnight kirtan, Vedic dances, fire sacrifice, and continuous distribution of divine vegetarian feast.',
      hi: 'भगवान कृष्ण के अवतरण दिवस का भव्य आयोजन। भव्य देव स्नान (महा-अभिषेक), मध्यरात्री दिव्य संकीर्तन, सांस्कृतिक नाटक, यज्ञ और विशाल प्रसादम वितरण।',
      gu: 'ભગવાન શ્રીકૃષ્ણના પ્રાગટ્ય દિવસની અતિ ભવ્ય ઉજવણી. આખો દિવસ મહા-અભિષેક, રાત્રે સંગીતમય ભજન કીર્તન, સાંસ્કૃતિક ડ્રામા, હવન અને અન્નકૂટ ભંડારો.',
      bn: 'পরমেশ্বর ভগবান শ্রীকৃষ্ণের পরম পবিত্র মহিমাময় আবির্ভাব তিথি মহোৎসব। সারাদিনব্যাপী মহাযজ্ঞ, মহা-অভিষেক, মধ্যরাতের দিব্য সংকীর্তন ও লক্ষাধিক মানুষের মাঝে মহাপ্রসাদ বিতরণ।'
    },
    date: '2026-09-03',
    time: '04:30 AM - Midnight',
    location: {
      en: 'Vrindavan and globewide centers',
      hi: 'वृंदावन और विश्वव्यापी मंदिर केंद्र',
      gu: 'વૃંદાવન અને વૈશ્વિક ઇસ્કોન મંદિરો',
      bn: 'শ্রীধাম বৃন্দাবন ও বিশ্বজুড়ে সমস্ত শাখা কেন্দ্র'
    },
    imageUrl: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800',
    isActive: true,
    galleryUrls: [],
    ticketPrice: 0, // Free
    availableTickets: 5000,
    registrationsCount: 2450
  },
  {
    id: 'ev-ratha-yatra',
    name: {
      en: 'Jagannatha Ratha Yatra (Festival of Chariots)',
      hi: 'जगन्नाथ रथयात्रा (रथ सारथी उत्सव)',
      gu: 'જગન્નાથ રથયાત્રા (રથોત્સવ)',
      bn: 'জগন্নাথ রথযাত্রা মহোৎসব'
    },
    description: {
      en: 'Join thousands as we pull the beautiful chariot of Lord Jagannatha, Baladeva, and Subhadra through streets flooded with congregational chanting, flower showers, and traditional music, ending with a spiritual retreat.',
      hi: 'भगवान जगन्नाथ, बलदेव और सुभद्रा के भव्य रथ को पवित्र संकीर्तन, पुष्प वर्षा और झांकियों के साथ खींचते हुए लाखों भक्त सड़कों पर उतरेंगे, अंत में विशाल अमृतमयी भंडारा।',
      gu: 'ભગવાન જગન્નાથ, બલદેવ અને સુભદ્રાજીના ભવ્ય રથને ફૂલોની વર્ષા અને હરિનામ સંકીર્તન વચ્ચે ખેંચવાની સદભાગી સેવા, સાથે ભવ્ય પ્રસાદ.',
      bn: 'পরম দয়ালু পরমেশ্বর শ্রীজগন্নাথ, বলদেব ও সুভদ্রা দেবীর দিব্য রথ টেনে সংকীর্তন ও পুষ্পবৃষ্টির মাঝে পুরীধামের অনুসরণে রাজপথে নগর সংকীর্তন ও মহাসম্মিলন।'
    },
    date: '2026-07-16',
    time: '01:00 PM - 08:30 PM',
    location: {
      en: 'Mayapur & London Trafalgar Square',
      hi: 'मायापुर और लंदन ट्राफलगर स्क्वायर',
      gu: 'માયાપુર અને લંડન ટ્રાફાલ્ગર સ્ક્વેર',
      bn: 'শ্রীধাম মায়াপুর ও লণ্ডন ট্রাফালগার স্কয়ার'
    },
    imageUrl: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&q=80&w=800',
    isActive: true,
    galleryUrls: [],
    ticketPrice: 0,
    availableTickets: 10000,
    registrationsCount: 4890
  },
  {
    id: 'ev-gaura-purnima',
    name: {
      en: 'Gaura Purnima Festival 2026',
      hi: 'गौर पूर्णिमा महोत्सव 2026',
      gu: 'ગૌર પૂર્ણિમા મહોત્સવ ૨૦૨૬',
      bn: 'শ্রীগৌরপূর্ণিমা মহোৎসব ২০২৬'
    },
    description: {
      en: 'The divine appearance day of Sri Chaitanya Mahaprabhu. Features bathing of Deity in gold water, saffron, special sandhya arati, and ecstatic kirtan with 50 different ancient musical instruments.',
      hi: 'श्री चैतन्य महाप्रभु का पावन प्राकट्य उत्सव। सुवर्ण जल और पंचामृत से भगवान का दिव्य अभिषेक, विशेष संध्या आरती, और ५० अलग वैदिक वाद्य यंत्रों से महासंकीर्तन।',
      gu: 'શ્રી ચૈતન્ય મહાપ્રભુજીનો પ્રાગટ્ય દિન. સુવર્ણ જળ-પંચામૃતથી અભિષેક, વિશેષ સંધ્યા આરતી અને કીર્તન ઉત્સવ.',
      bn: 'যুগাবতার শ্রীকৃষ্ণচৈতন্য মহাপ্রভুর পরম পবিত্র আবির্ভাব দ্বাদশী পূর্ণিমা তিথি মহোৎসব। গঙ্গাজল, দুগ্ধ, পঞ্চামৃত ও স্বর্ণোদকে মহাপ্রভুর মহা-অভিষেক ও সংকীর্তন।'
    },
    date: '2026-03-03',
    time: '10:00 AM - 09:00 PM',
    location: {
      en: 'Sridham Mayapur Ashram',
      hi: 'श्रीधाम मायापुर आश्रम',
      gu: 'શ્રીધામ માયાપુર આશ્રમ',
      bn: 'শ্রীধাম মায়াপুর প্রধান কেন্দ্র'
    },
    imageUrl: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&q=80&w=800',
    isActive: true,
    galleryUrls: [],
    ticketPrice: 0,
    availableTickets: 8000,
    registrationsCount: 3120
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p-gita',
    name: {
      en: 'Bhagavad-gita As It Is (Hardbound Sanskrit Edition)',
      hi: 'भगवद-गीता यथारूप (सचित्र संस्कृत-हिंदी संस्करण)',
      gu: 'ભગવદ-ગીતા યથારૂપ (સચિત્ર સંસ્કૃત-ગુજરાતી)',
      bn: 'শ্রীমদ্ভাগবদ্গীতা যথাযথ (সচিত্র মূল সংস্করণ)'
    },
    description: {
      en: 'The largest selling edition of Bhagavad-gita in the world. Includes original Sanskrit, Roman transliterations, English synonyms, word-for-word translations, and elaborate purports by Srila Prabhupada.',
      hi: 'विश्व की सर्वाधिक बिकने वाली भगवद्गीता। इसमें मूल संस्कृत श्लोक, अंग्रेजी/हिंदी अनुवाद, शब्दार्थ और श्रील प्रभुपाद द्वारा रचित भव्य तात्पर्य शामिल है।',
      gu: 'વિશ્વની સૌથી વધુ વેચાતી ભગવદ ગીતા. જેમાં મૂળ સંસ્કૃત શ્લોકો, ગુજરાતી અનુવાદ, શબ્દાર્થ અને શ્રીલ પ્રભુપાદ દ્વારા વિગતવાર સરળ વિવેચન આપેલ છે.',
      bn: 'বিশ্বজুড়ে সর্বাধিক পঠিত ও সমাদৃত শ্রীমদ্ভগবদ্গীতা। মূল সংস্কৃত শ্লোক, বঙ্গানুবাদ, প্রতিশব্দ ও শ্রীল প্রভুপাদ কর্তৃক অত্যন্ত প্রাঞ্জল পরমার্থিক ভাষ্য সংবলিত।'
    },
    category: 'Books',
    price: 350,
    imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400', // Represents sacred brown/gold covered book proxy
    isAvailable: true,
    stock: 500,
    rating: 4.9,
    reviews: [
      { id: 'r1', userName: 'Anand Dev', rating: 5, comment: 'Changed my entire lifestyle! Clear explanation.', date: '2026-05-12' },
      { id: 'r2', userName: 'Krishna Das', rating: 5, comment: 'The best commentary on Earth.', date: '2026-05-20' }
    ]
  },
  {
    id: 'p-shrimad',
    name: {
      en: 'Srimad-Bhagavatam (Canto 1 - The Creation)',
      hi: 'श्रीमद्-भागवतम् (प्रथम स्कंध - सृष्टि संरचना)',
      gu: 'શ્રીમદ-ભાગવતમ (પ્રથમ સ્કંધ - સૃષ્ટિ સંરચના)',
      bn: 'শ্রীমদ্ভগবতম্ (প্রথম স্কন্ধ - সৃষ্টি)'
    },
    description: {
      en: 'A monumental text detailing Vedic histories, creation cosmologies, lineages, and avatars of the Supreme Lord with exhaustive explanation.',
      hi: 'वैदिक इतिहास, सृष्टि संरचना, अध्यात्म ज्ञान और सर्वोच्च भगवान के अवतारों का विस्तृत वर्णन करने वाला महान ग्रंथ।',
      gu: 'વૈદિક ઈતિહાસ, સૃષ્ટિની રચના, અવતારો અને પરમતત્વનું જ્ઞાન આપતો અતિ મહત્વનો મહાન ગ્રંથ.',
      bn: 'মহিমাময় বৈদিক ইতিহাস, মহাবিশ্বের সৃষ্টিতত্ত্ব এবং পরমেশ্বর ভগবানের লীলা ও অবতার সমূহের বিজ্ঞানসম্মত বিশ্লেষণ।'
    },
    category: 'Books',
    price: 650,
    imageUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400',
    isAvailable: true,
    stock: 200,
    rating: 5.0,
    reviews: [
      { id: 'r3', userName: 'Gauranga Mitra', rating: 5, comment: 'Pure spiritual science.', date: '2026-05-15' }
    ]
  },
  {
    id: 'p-dhoti',
    name: {
      en: 'Premium Saffron Cotton Dhoti & Uttariya Set',
      hi: 'प्रीमियम केसरिया सूती धोती और उत्तरीय सेट',
      gu: 'પ્રીમિયમ કેસરિયા કોટન ધોતી અને ખેસ સેટ',
      bn: 'প্রিমিয়াম গৈরিক সুতি ধুতি ও উত্তরীয় বস্ত্র'
    },
    description: {
      en: 'Handloomed Vedic attire crafted from 100% fine organic cotton. Highly breathable fabric ideal for daily prayers, meditation rituals, and temple visits.',
      hi: '100% शुद्ध जैविक कपास से निर्मित पारंपरिक केसरिया धोती सेट। दैनिक पूजा, साधना और मंदिर दर्शन के लिए अत्यंत आरामदायक हवादार वस्त्र।',
      gu: '૧૦૦% શુદ્ધ કપાસમાંથી હાથવણાટથી બનેલું કેસરિયા ધોતી અને ખેસ સેટ. ધ્યાન, સત્સંગ અને પૂજા પદ્ધતિમાં પહેરવા માટે ઉત્તમ.',
      bn: 'হস্তচালিত তাঁতে বোনা শতভাগ খাঁটি সুতি ও ভেষজ রঙে রঞ্জিত গৈরিক বস্ত্র। নিত্য জপ-ধ্যান ও মন্দিরে পরার পরম উপযোগী।'
    },
    category: 'Clothing',
    price: 750,
    imageUrl: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=400', // Saffron clothing orange textile proxy
    isAvailable: true,
    stock: 120,
    rating: 4.7,
    reviews: []
  },
  {
    id: 'p-mala',
    name: {
      en: 'Original Vrindavan Tulsi Japa Mala with Beadbag',
      hi: 'मूल वृंदावन तुलसी जप माला और कढ़ाईदार झोली',
      gu: 'શુદ્ધ વૃંદાવન તુલસી જપ માળા અને કચ્છી થેલી',
      bn: 'বৃন্দাবনের পবিত্র তুলসী জপমালা ও চিত্রিত ঝুলি'
    },
    description: {
      en: 'Authentic 108 hand-carved Tulsi beads carefully gathered from Vrindavan, strung securely alongside a traditional cotton embroidered bead bag for counting prayers.',
      hi: 'वृंदावन की पवित्र सूखी तुलसी लकड़ी से हस्तनिर्मित 108 मनकों की जप माला, जपा के लिए विशेष कढ़ाईयुक्त सुरक्षित गोमुखी झोली के साथ।',
      gu: 'વૃંદાવનની પવિત્ર તુલસીમાંથી બનેલી ૧૦૮ મણકાની જપ માળા, સાથે સપ્રમાણ દોરાવાળી સુંદર ભરતકામ કરેલી હરિનામ થેલી.',
      bn: 'বৃন্দাবনের শুষ্ক পবিত্র তুলসী কাষ্ঠ থেকে খোদাই করা ১০৮টি তুলসী দানার জপমালা এবং সাথে সুদৃশ্য কারুকার্যময় হরিনাম জপের ঝুলি।'
    },
    category: 'Accessories',
    price: 250,
    imageUrl: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&q=80&w=400', // Spiritual beads/woods jewelry proxy
    isAvailable: true,
    stock: 350,
    rating: 4.8,
    reviews: []
  },
  {
    id: 'p-incense',
    name: {
      en: 'Pure Organic Vrindavan Sandalwood Incense Sticks',
      hi: 'शुद्ध प्राकृतिक वृंदावन चंदन धूपबत्ती',
      gu: 'શુદ્ધ પ્રાકૃતિક વૃંદાવન ચંદન અગરબત્તી',
      bn: 'বৃন্দাবনের খাঁটি চন্দন কাঠ কয়লাহীন ধূপকাঠি'
    },
    description: {
      en: 'Charcoal-free incense hand-rolled in temple workshops using natural herbs, flower petals, and pure Mysore Sandalwood oil. Creates an immersive peaceful ambiance.',
      hi: 'कोयला रहित, पूरी तरह प्राकृतिक जड़ी-बूटियों, ताजे फूलों और मैसूर शुद्ध चंदन तेल से हाथ से बनाई गई सुगंधित अगरबत्ती। मंदिर जैसी पावन सुगंध उत्पन्न करती है।',
      gu: 'કોલસા મુક્ત, વનસ્પતિ જડીબુટ્ટી, સુકા ગુલાબ-તુલસી પાંદડા અને શુદ્ધ ચંદન તેલમાંથી બનાવેલ અગરબત્તી. પ્રફુલ્લિત સુગંધ ફેલાવે છે.',
      bn: 'কয়লাবিহীন, ভেষজ উপাদান, তুলসী পাতা ও মহীশুর চন্দন তেল মিশ্রিত হস্তনির্মিত অপূর্ব সুগন্ধযুক্ত ধূপ। শান্ত সমাহিত ভক্তিপূর্ণ পরিবেশ সৃষ্টি করে।'
    },
    category: 'Spiritual Items',
    price: 150,
    imageUrl: 'https://images.unsplash.com/photo-1602166549142-978079a372e8?auto=format&fit=crop&q=80&w=400', // Meditative incense sticks proxy
    isAvailable: true,
    stock: 800,
    rating: 4.9,
    reviews: []
  },
  {
    id: 'p-seva-1',
    name: {
      en: 'Prasadam Seva - Feed 100 Sadhu/Pilgrims',
      hi: 'प्रसादम सेवा - 100 साधुओं और तीर्थयात्रियों को भोजन',
      gu: 'પ્રસાદમ સેવા - ૧૦૦ સાધુઓ તેમજ શ્રદ્ધાળુઓને ભોજન',
      bn: 'প্রসাদ সেবা - ১০০ জন সাধু ও মহাতীর্থযাত্রী ভোজন'
    },
    description: {
      en: 'Honor the tradition of Annadan. Sponsor a wholesome sacred vegetarian meal consisting of rice, dal, subji, pure ghee rotis, and halwa sweet made for sadhus in holy Vrindavan.',
      hi: 'अन्नदान की पावन परंपरा। वृंदावन धाम में तपस्यारत संतों और गरीब तीर्थयात्रियों को शुद्ध देसी घी की रोटियां, हरी सब्जियां, दाल-चावल और हलवे का पवित्र प्रसाद प्रायोजित करें।',
      gu: 'અન્નદાનની પવિત્ર પરંપરા. શ્રીધામ વૃંદાવનના ૧૦૦ તપસ્વીઓ અને મહાત્માઓને ગરમ રોટલી, ઘી ધરાવેલી દાળ તથા હલવા પ્રસાદનું સદાવ્રત ભોજન આપો.',
      bn: 'মহাকল্যাণকর অন্নদান সেবা। পরমধাম বৃন্দাবন বা মায়াপুরে শতর সাধু-সন্ন্যাসী ও পুণ্যার্থীদের মাঝে পুষ্টিকর বৈদিক মহাপ্রসাদ (খাদ্যদ্রব্য) বিতরণ সেবা।'
    },
    category: 'Donations',
    price: 2500,
    imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=400', // Warm food/devotional feast plate proxy
    isAvailable: true,
    stock: 99999,
    rating: 5.0,
    reviews: []
  }
];

export const BLOGS: BlogArticle[] = [
  {
    id: 'b-1',
    title: {
      en: 'The Science of Mantra Meditation & Inner Peace',
      hi: 'मंत्र ध्यान का विज्ञान और आंतरिक शांति',
      gu: 'મંત્ર ધ્યાનનું વિજ્ઞાન અને આંતરિક શાંતિ',
      bn: 'মন্ত্র জপের বিজ্ঞান ও মানসিক প্রশান্তি'
    },
    summary: {
      en: 'Discover how chanting the Hare Krishna Mahamantra affects the brain, dissolves anxiety, and awakens pure consciousness.',
      hi: 'जानें कि हरे कृष्ण महामंत्र का जप मस्तिष्क को कैसे प्रभावित करता है, चिंता को मिटाता है और विशुद्ध चेतना जागृत करता है।',
      gu: 'જાણો કેવી રીતે હરે કૃષ્ણ મહામંત્રનો જાપ તણાવ દૂર કરી બુદ્ધિને તેજસ્વી બનાવે છે અને આધ્યાત્મિક જાગૃતિ લાવે છે.',
      bn: 'জানুন কিভাবে হরে কৃষ্ণ মহামন্ত্র জপ আমাদের মনকে উদ্বেগ মুক্ত করে এবং পারমার্থিক বিজ্ঞান চেতনা জাগ্রত করে।'
    },
    content: {
      en: 'Meditation in the Vedic system is centered on sounds. Sound vibrations hold power to clear mental debris. The Hare Krishna sermon acts as a deep cleansing method. In modern research, rhythmic chanting is confirmed to balance the sympathetic nervous system and reduce cortisol production. By giving 15 minutes to silent Japa daily, a practitioner can achieve stable mental health and a deep connection to the self.',
      hi: 'वैदिक पद्धति में ध्यान मुख्य रूप से ध्वनि तरंगों पर केंद्रित होता है। ध्वनि कंपनों में मन के विकारों को दूर करने की अमोघ शक्ति होती है। हरे कृष्ण महामंत्र मानसिक शुद्धि की परम औषधि है। आधुनिक वैज्ञानिक अध्ययनों से सिद्ध हुआ है कि लयबद्ध कण्ठ जप हमारे अंतः तंत्रिका तंत्र को संतुलित करता है और कोर्टिसोल यानी तनाव हार्मोन को काफी हद तक कम करता है। प्रतिदिन १५ मिनट तुलसी माला पर जप करने से मानसिक संतुलन और असीम शांति की अनुभूति होती है।',
      gu: 'વૈદિક પરંપરામાં ધ્યાન આધ્યાત્મિક ધ્વની તરંગો પર કેન્દ્રિત છે. હરિનામ સંકીર્તન મગજને શાંત કરી તમામ મનોવિકારો દૂર કરે છે. આધુનિક વિજ્ઞાન પણ સ્વીકારે છે કે સવારે વહેલા ઉઠીને પવિત્ર મંત્રોચ્ચાર કરવાથી માનસિક તાણ નહિવત થાય છે.',
      bn: 'বৈদিক জপ-ধ্যানের মূল ভিত্তি হলো চিন্ময় শব্দতরঙ্গ। পারমার্থিক শব্দের অপ্রাকৃত স্পন্দন মানসিক কলুষতা ও উদ্বেগ সহজেই নাশ করে। মহামন্ত্র শব্দের ধ্বনি আমাদের চৈতন্যকে পুনরুজ্জীবিত করে। আধুনিক বিজ্ঞানও প্রমাণ করেছে যে, নিয়মিত নামজপ স্নায়ুতন্ত্রকে শান্ত ও পরম মানসিক প্রশান্তি দান করে।'
    },
    author: 'Gargamuni Swami',
    publishDate: 'May 28, 2026',
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-user1',
    name: 'Michael Henderson',
    avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150',
    experience: {
      en: 'Visiting the Raman Reti Ashram changed my view of life. The chanting, the peacefulness, and the simple lifestyle brought me back my sanity.',
      hi: 'रमण रेती आश्रम की यात्रा ने मेरे जीवन के प्रति दृष्टिकोण को बदल दिया। दिव्य संकीर्तन, अद्भुत शांति और सादा जीवन प्रणाली ने मुझे फिर से ऊर्जा दी।',
      gu: 'જ્યારે હું પહેલીવાર વૃંદાવન આશ્રમ ગયો, ત્યાંનું વાતાવરણ, ભક્તિમય કીર્તનો અને પવિત્ર જમણવાર મોહિત કરી ગયા.',
      bn: 'রমণ রেতি আশ্রমে এসে আমার জীবনের দিশা বদলে গিয়েছে। নিত্য জপ ও ভক্তদের প্রেমময় সরল আচরণে আমি পরম ধন্য হয়েছি।'
    },
    rating: 5,
    country: 'United States'
  },
  {
    id: 't-user2',
    name: 'Priyanka Patel',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150',
    experience: {
      en: 'Highly satisfied with the Bhagavad Gita book quality and fast shipping of original incense sticks. The aroma fills my home temple with Vrindavan warmth.',
      hi: 'भगवद गीता पुस्तक की छपाई और शुद्ध धूपबत्ती की त्वरित डिलीवरी से बहुत प्रसन्न हूँ। इनकी दिव्य सुगंध मेरे गृह मंदिर को वृंदावन धाम जैसी ऊर्जा देती है।',
      gu: 'અહીંની પુસ્તકો ઓરિજિનલ ગીતા અને તુલસી માળાની નિત્ય પૂજા માટેની મટીરીયલ ક્વોલિટી ખૂબ જ સુંદર અને પરમ સંતોષકારક છે.',
      bn: 'গীতা শাস্ত্রের চমৎকার বাধাই এবং চন্দন ধূপের তীব্র সুগন্ধ আমার সমস্ত গৃহকোণকে দিব্য বৃন্দাবনের সুবাসে সুরভিত করে তোলে।'
    },
    rating: 5,
    country: 'India'
  }
];
