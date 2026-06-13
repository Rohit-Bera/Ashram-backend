import { Router } from 'express';
import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data/translations.json');

const DEFAULT_TRANSLATIONS: Record<string, Record<string, string>> = {
  appName: { en: 'Sri Divine Heritage', hi: 'श्री दिव्य विरासत', gu: 'શ્રી દિવ્ય વિરાસત', bn: 'শ্রী দিব্য ঐতিহ্য' },
  ashramSlogan: { en: 'Spiritual Community & Wisdom Portal', hi: 'आध्यात्मिक समुदाय और ज्ञान पोर्टल', gu: 'આધ્યાત્મિક સમુદાય અને જ્ઞાન પોર્ટલ', bn: 'আধ্যাত্মিক সম্প্রদায় ও পরম জ্ঞান প্রচার কেন্দ্র' },
  navGurus: { en: 'Gurus', hi: 'आचार्यगण', gu: 'ગુરુઓ', bn: 'শ্রীগুরুকুল' },
  navAshrams: { en: 'Ashrams', hi: 'आश्रम', gu: 'આશ્રમો', bn: 'শ্রীধাম ও আশ্রম' },
  navEvents: { en: 'Events', hi: 'कार्यक्रम', gu: 'કાર્યક્રমો', bn: 'সব অনুষ্ঠান' },
  navStore: { en: 'Spiritual Store', hi: 'आध्यात्मिक भंडार', gu: 'આધ્યાત્મિક ભંડાર', bn: 'আধ্যাত্মিক বিপনী' },
  navBlogs: { en: 'Blogs', hi: 'ब्लॉग्स', gu: 'બ્લોગ્સ', bn: 'সাধু বাণী ব্লগ' },
  navAdmin: { en: 'Admin Panel', hi: 'एडमिन पैनल', gu: 'એડમિन પеनλ', bn: 'নিয়ন্ত্রণ কক্ষ' },
  navDashboard: { en: 'My Profile', hi: 'मेरी प्रोफाइल', gu: 'મારી પ્રોફાઇλ', bn: 'আমার তথ্য' },
  btnExploreGurus: { en: 'Explore Gurus', hi: 'आचार्यों को जानें', gu: 'ગुरुओ વिशे जाणो', bn: 'শ্রীগুরুকুল দর্শন' },
  btnFindAshrams: { en: 'Find Ashrams', hi: 'आश्रम खोजें', gu: 'આশ્રमो शोधो', bn: 'আশ্রম পরিক্রমা' },
  btnUpcomingEvents: { en: 'Upcoming Events', hi: 'आगामी कार्यक्रम', gu: 'આगामी कार्यक्रमो', bn: 'আসন্ন উৎসব' },
  btnVisitStore: { en: 'Visit Spiritual Store', hi: 'भंडार पर जाएँ', gu: 'ભंडारनी मुलाकात लो', bn: 'বিপনী পরিক্রমা' },
  lblAddToCart: { en: 'Add to Cart', hi: 'झोली में डालें', gu: 'थेलीमां उमेरो', bn: 'ঝুলিতে যুক্ত করুন' },
  lblBuyNow: { en: 'Buy Now', hi: 'अभी खरीदें', gu: 'अत्यारे खरीदो', bn: 'সরাসরি কিনুন' },
  lblWishlist: { en: 'Wishlist', hi: 'इच्छा सूची', gu: 'ईच्छा सूचि', bn: 'প্রিয় তালিকা' },
  lblInStock: { en: 'In Stock', hi: 'उपलब्ध', gu: 'उपलब्ध', bn: 'মজুদ আছে' },
  lblOutOfStock: { en: 'Out of Stock', hi: 'अप्राप्य', gu: 'अप्राप्य', bn: 'মজুদ শেষ' }
};

function readTranslations() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const saved = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
      return { ...DEFAULT_TRANSLATIONS, ...saved };
    }
  } catch (_e) {}
  return DEFAULT_TRANSLATIONS;
}

function writeTranslations(data: unknown) {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

const router = Router();

router.get('/', (_req, res) => {
  res.json({ success: true, data: readTranslations() });
});

router.put('/', (req, res) => {
  writeTranslations(req.body);
  res.json({ success: true, data: req.body });
});

export default router;
