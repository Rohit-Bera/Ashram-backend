import 'dotenv/config';
import bcrypt from 'bcryptjs';
import { prisma } from '../src/db/prisma.js';
import { Prisma } from '../src/generated/prisma/index.js';
import { GURUS, ASHRAMS, EVENTS, PRODUCTS, BLOGS, TESTIMONIALS } from '../src/data.js';

async function main() {
  console.log('Seeding database...');


  for (const g of GURUS) {
    await prisma.guru.upsert({
      where: { id: g.id },
      update: {},
      create: {
        id: g.id,
        name: g.name,
        era: g.era,
        country: g.country,
        lineage: g.lineage,
        discipleOf: g.discipleOf,
        photoUrl: g.photoUrl,
        summary: g.summary,
        biography: g.biography,
        birthDate: g.birthDate,
        deathDate: g.deathDate,
        birthPlace: g.birthPlace,
        majorContributions: g.majorContributions,
        timeline: g.timeline,
        teachings: g.teachings,
        relatedAshramIds: g.relatedAshramIds,
        relatedEventIds: g.relatedEventIds,
      },
    });
  }
  console.log(`Seeded ${GURUS.length} gurus`);

  for (const a of ASHRAMS) {
    await prisma.ashram.upsert({
      where: { id: a.id },
      update: {},
      create: {
        id: a.id,
        name: a.name,
        coverUrl: a.coverUrl,
        galleryUrls: a.galleryUrls,
        establishedDate: a.establishedDate,
        builtByGuruId: a.builtByGuruId,
        purpose: a.purpose,
        description: a.description,
        country: a.country,
        state: a.state,
        city: a.city,
        latitude: a.latitude,
        longitude: a.longitude,
        dailySchedule: a.dailySchedule,
        facilities: a.facilities,
        contactEmail: a.contactEmail,
        contactPhone: a.contactPhone,
        upcomingEventIds: a.upcomingEventIds,
        residentGuruIds: a.residentGuruIds,
      },
    });
  }
  console.log(`Seeded ${ASHRAMS.length} ashrams`);

  for (const e of EVENTS) {
    await prisma.event.upsert({
      where: { id: e.id },
      update: {},
      create: {
        id: e.id,
        name: e.name,
        description: e.description,
        date: e.date,
        time: e.time,
        location: e.location,
        imageUrl: e.imageUrl,
        isActive: e.isActive,
        galleryUrls: e.galleryUrls,
        ticketPrice: e.ticketPrice,
        availableTickets: e.availableTickets,
        registrationsCount: e.registrationsCount,
      },
    });
  }
  console.log(`Seeded ${EVENTS.length} events`);

  for (const p of PRODUCTS) {
    await prisma.product.upsert({
      where: { id: p.id },
      update: {},
      create: {
        id: p.id,
        name: p.name,
        description: p.description,
        category: p.category,
        price: p.price,
        imageUrl: p.imageUrl,
        isAvailable: p.isAvailable,
        stock: p.stock,
        rating: p.rating,
      },
    });
    for (const r of p.reviews) {
      await prisma.productReview.upsert({
        where: { id: r.id },
        update: {},
        create: {
          id: r.id,
          productId: p.id,
          userName: r.userName,
          rating: r.rating,
          comment: r.comment,
          date: r.date,
        },
      });
    }
  }
  console.log(`Seeded ${PRODUCTS.length} products`);

  for (const b of BLOGS) {
    await prisma.blog.upsert({
      where: { id: b.id },
      update: {},
      create: {
        id: b.id,
        title: b.title,
        summary: b.summary,
        content: b.content,
        author: b.author,
        publishDate: b.publishDate,
        readTime: b.readTime,
        imageUrl: b.imageUrl,
      },
    });
  }
  console.log(`Seeded ${BLOGS.length} blogs`);

  for (const t of TESTIMONIALS) {
    await prisma.testimonial.upsert({
      where: { id: t.id },
      update: {},
      create: {
        id: t.id,
        name: t.name,
        avatarUrl: t.avatarUrl,
        experience: t.experience,
        rating: t.rating,
        country: t.country,
      },
    });
  }
  console.log(`Seeded ${TESTIMONIALS.length} testimonials`);

  const adminPassword = await bcrypt.hash('Admin@123', 10);

  const seedUsers = [
    {
      id: 'usr-default',
      name: 'Admin',
      email: 'admin@ashram.org',
      phone: null,
      role: 'Super Admin',
      passwordHash: adminPassword,
      savedEventIds: [],
      wishlistProductIds: [],
      shippingAddress: null,
    },
    {
      id: 'usr-content',
      name: 'Vrindavan Das',
      email: 'content@ashram.org',
      phone: null,
      role: 'Content Manager',
      passwordHash: await bcrypt.hash('Content@123', 10),
      savedEventIds: [],
      wishlistProductIds: [],
      shippingAddress: null,
    },
    {
      id: 'usr-store',
      name: 'Govinda Das',
      email: 'store@ashram.org',
      phone: null,
      role: 'Store Manager',
      passwordHash: await bcrypt.hash('Store@123', 10),
      savedEventIds: [],
      wishlistProductIds: [],
      shippingAddress: null,
    },
  ];

  for (const u of seedUsers) {
    await prisma.user.upsert({
      where: { id: u.id },
      update: {
        name: u.name,
        email: u.email,
        phone: u.phone,
        role: u.role,
        passwordHash: u.passwordHash,
        savedEventIds: u.savedEventIds,
        wishlistProductIds: u.wishlistProductIds,
        shippingAddress: u.shippingAddress ?? Prisma.DbNull,
      },
      create: {
        id: u.id,
        name: u.name,
        email: u.email,
        phone: u.phone ?? undefined,
        role: u.role,
        passwordHash: u.passwordHash,
        savedEventIds: u.savedEventIds,
        wishlistProductIds: u.wishlistProductIds,
        shippingAddress: u.shippingAddress ?? undefined,
      },
    });
  }
  console.log(`Seeded ${seedUsers.length} users`);

  await prisma.order.upsert({
    where: { id: 'ord-1001' },
    update: {},
    create: {
      id: 'ord-1001',
      userId: 'usr-default',
      items: [
        {
          productId: 'p-gita',
          productName: {
            en: 'Bhagavad-gita As It Is (Hardbound Sanskrit Edition)',
            hi: 'भगवद-गीता यथारूप (सचित्र संस्कृत-हिंदी संस्करण)',
            gu: 'ભગવદ-ગીતા યથારૂપ (સચિત્ર સંસ્કૃત-ગુજરાતી)',
            bn: 'শ্রীমদ্ভাগবদ্গীতা যথাযথ (সচিত্র মূল সংস্করণ)',
          },
          quantity: 1,
          price: 350,
        },
      ],
      subtotal: 350,
      couponCode: 'KRISHNA10',
      discount: 35,
      total: 315,
      shippingAddress: {
        fullName: 'Admin',
        addressLines: 'Sri Divine Heritage Ashram',
        city: 'Vrindavan',
        state: 'Uttar Pradesh',
        postalCode: '281121',
        country: 'India',
      },
      paymentStatus: 'Paid',
      orderStatus: 'Processing',
      trackingNumber: 'TRK-VRN-887163',
      orderDate: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    },
  });
  console.log('Seeded 1 order');

  await prisma.homepageData.upsert({
    where: { id: 'singleton' },
    update: {},
    create: {
      id: 'singleton',
      appName: { en: 'Sri Divine Heritage', hi: 'श्री दिव्य विरासत', gu: 'શ્રી દિવ્ય વિરાસત', bn: 'শ্রী দিব্য ঐতিহ্য' },
      ashramSlogan: {
        en: 'Spiritual Community & Wisdom Portal',
        hi: 'आध्यात्मिक समुदाय और ज्ञान पोर्टल',
        gu: 'આધ્યાત્મિક સમુદાય અને જ્ઞાન પોર્ટલ',
        bn: 'আধ্যাত্মিক সম্প্রদায় ও পরম জ্ঞান প্রচার কেন্দ্র',
      },
      heroSlides: [
        {
          title: { en: 'Welcome to Sri Divine Heritage', hi: 'श्री दिव्य विरासत में आपका स्वागत है', gu: 'શ્રી દિવ્ય વિરાસતમાં તમારું સ્વાગત છે', bn: 'শ্রী দিব্য ঐতিহ্যে আপনাকে স্বাগত' },
          sub: { en: 'Connecting souls to ancient Gaudiya Vaishnava lineage teachings, world ashrams, and sacred scriptures.', hi: 'प्राचीन गौड़ीय वैष्णव संप्रदाय, विश्व के पावन धामों और पवित्र ग्रंथों से आत्माओं का दिव्य जुड़ाव।', gu: 'પ્રાચીન ગૌડીય વૈષ્ણવ સંપ્રદાય, વિશ્વના પવિત્ર આશ્રમો અને વૈદિક ગ્રંથો સાથે જોડાણ.', bn: 'সুপ্রাচীন গৌড়ীয় বৈষ্ণবীয় সাধন-ভজন, বিশ্বব্যাপী বিস্তৃত পবিত্র মন্দির এবং শাস্ত্র গ্রন্থাবলীর সার্থক মেলবন্ধন।' },
          action: 'Gurus',
          bg: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&q=80&w=1200',
        },
        {
          title: { en: 'Discover Auspicious Sacred Spaces', hi: 'पावन भारतीय मंदिरों का दर्शन करें', gu: 'પવિત્ર ભારતીય મંદિરોના દર્શન કરો', bn: 'জগতের পরম পবিত্র ধাম পরিক্রমা' },
          sub: { en: 'Explore ISKCON Vrindavan, Mayapur Dham, and active communities around the globe through our rotating cosmic globe.', hi: 'घूमते हुए ब्रह्मांडीय ग्लोब के माध्यम से इस्कॉन वृंदावन, मायापुर धाम और वैश्विक आध्यात्मिक केंद्रों के दर्शन करें।', gu: 'ગ્લોબલ ફરતા મેપ દ્વારા ઇસ્કોન વૃંદાવન, માયાપુર ધામ અને વૈશ્વિક કેન્દ્રોની મુલાકાત લો.', bn: 'আমাদের ঘূর্ণায়মান গ্লোবের সাহায্যে মায়াপুর চন্দ্রোদয় মন্দির, শ্রীধাম বৃন্দাবন সহ শাখা মন্দিরসমূহ পরিক্রমা করুন।' },
          action: 'Ashrams',
          bg: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&q=80&w=1200',
        },
      ],
    },
  });
  console.log('Seeded homepage singleton');

  await prisma.aboutUsData.upsert({
    where: { id: 'singleton' },
    update: {},
    create: {
      id: 'singleton',
      aboutUsTitle: { en: 'An Oasis of Devotion & Vedic Wisdom', hi: 'भक्ति और वैदिक ज्ञान का एक दिव्य केंद्र', gu: 'ભક્તિ અને વૈદિક જ્ઞાનનું દિવ્ય કેન્દ્ર', bn: 'ভক্তি ও বৈদিক জ্ঞানের এক পরম পীঠস্থান' },
      aboutUsSub: { en: 'Our Sacred Purpose & Ashram Heritage', hi: 'हमारा पवित्र उद्देश्य और आश्रम विरासत', gu: 'અમારો પવિત્ર ઉદ્દેશ અને આશ્રમ વિરાસત', bn: 'আমাদের পবিত্র উদ্দেশ্য ও আশ্রমের পুণ্য ঐতিহ্য' },
      aboutUsDescription: { en: 'Welcome to Sri Divine Heritage Ashram, a sacred sanctuary dedicated to keeping the flame of ancient Gaudiya Vaishnava teachings alive.', hi: 'श्री दिव्य विरासत आश्रम में आपका स्वागत है, एक ऐसा पवित्र स्थल जो प्राचीन गौड़ीय वैष्णव संप्रदाय की शिक्षाओं की लौ को प्रज्वलित रखने के लिए समर्पित है।', gu: 'શ્રી દિવ્ય વિરાસત આશ્રમમાં આપનું સ્વાગત છે, જે પ્રાચીન ગૌડીય વૈષ્ણવ સંપ્રદાયની શિક્ષાઓને જીવંત રાખવા માટે સમર્પિત છે.', bn: 'অনন্ত করুণাময় শ্রী মহাপ্রভুর পুণ্য ধাম ও ঐতিহ্যবাহী শ্রী দিব্য ঐতিহ্য আশ্রমে আপনাকে জানাই সশ্রদ্ধ প্রণাম।' },
      aboutUsBgUrl: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1200',
    },
  });
  console.log('Seeded about singleton');

  console.log('Seeding complete.');
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
