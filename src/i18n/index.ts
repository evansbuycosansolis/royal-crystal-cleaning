export const locales = ['en', 'fr'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

const businessPhones = {
  en: [{ display: '263-788-8063', href: 'tel:2637888063' }],
  fr: [{ display: '514-814-9207', href: 'tel:5148149207' }],
} as const;

export const businessContact = {
  email: 'info@royalcrystalcleaning.com',
  emailHref: 'mailto:info@royalcrystalcleaning.com',
  url: 'https://royalcrystalcleaning.com',
  logoPng: '/royal-crystal-cleaning-logo.png',
  logoJpg: '/royal-crystal-cleaning-logo.jpg',
};

export const getBusinessPhones = (locale: Locale) => businessPhones[locale];

export const getPrimaryPhone = (locale: Locale) => businessPhones[locale][0];

export const getPhoneDisplay = (locale: Locale) =>
  businessPhones[locale].map((phone) => phone.display).join(' / ');

export const routes = {
  home: {
    en: '/',
    fr: '/fr/',
  },
  services: {
    en: '/services',
    fr: '/fr/services',
  },
  cleaning: {
    en: '/residential-commercial-cleaning',
    fr: '/fr/nettoyage-residentiel-commercial',
  },
  maintenance: {
    en: '/maintenance-services',
    fr: '/fr/services-de-maintenance',
  },
  lawnGarden: {
    en: '/lawn-garden-care',
    fr: '/fr/entretien-pelouse-jardin',
  },
  about: {
    en: '/about',
    fr: '/fr/a-propos',
  },
  contact: {
    en: '/contact',
    fr: '/fr/contact',
  },
} as const;

export type PageKey = keyof typeof routes;

export const getRoute = (locale: Locale, key: PageKey) => routes[key][locale];

export const getAbsoluteUrl = (locale: Locale, key: PageKey) =>
  new URL(getRoute(locale, key), businessContact.url).toString();

const sharedImages = {
  hero: '/images/hero-cleaning.webp',
  residential: '/images/residential-cleaning.webp',
  commercial: '/images/commercial-cleaning.webp',
  maintenance: '/images/maintenance-service.webp',
  lawnGarden: '/images/lawn-garden-care.webp',
  aboutTeam: '/images/about-team.webp',
  gallery1: '/images/gallery-1.webp',
  gallery2: '/images/gallery-2.webp',
  gallery3: '/images/gallery-3.webp',
};

export const content = {
  en: {
    languageName: 'English',
    htmlLang: 'en',
    business: {
      name: 'Royal Crystal Cleaning',
      tagline: 'Cleaning & maintenance by one trusted team.',
      catchphrase: 'Cleaning, maintenance, and lawn care you can trust.',
      description:
        'Residential and commercial cleaning, handyman maintenance, lawn care, and garden services.',
    },
    navLinks: [
      { label: 'Home', key: 'home' },
      { label: 'Services', key: 'services' },
      { label: 'About', key: 'about' },
      { label: 'Contact', key: 'contact' },
    ],
    labels: {
      skipToContent: 'Skip to content',
      openMenu: 'Open menu',
      menuToggle: 'Toggle mobile menu',
      homeLink: 'home',
      mainNavigation: 'Main navigation',
      mobileNavigation: 'Mobile navigation',
      serviceSpecialties: 'Service specialties',
      call: 'Call',
      callNow: 'Call Now',
      freeEstimate: 'Free Estimate',
      contactUs: 'Contact Us',
      learnMore: 'Learn More',
      learnMoreAbout: 'Learn more about',
      viewService: 'View Service',
      services: 'Services',
      explore: 'Explore',
      email: 'Email',
      language: 'Language',
      switchToEnglish: 'English',
      switchToFrench: 'Français',
      currentLanguage: 'Current language',
      contact: 'Contact',
      emailUs: 'Email Us',
      rights: 'All rights reserved.',
    },
    pages: {
      home: {
        title: 'Royal Crystal Cleaning | Professional Cleaning, Maintenance & Lawn Care',
        description:
          'Royal Crystal Cleaning offers professional residential and commercial cleaning, handyman maintenance, and lawn care services. Cleaning & maintenance by one trusted team.',
        heroText:
          'From crystal-clear indoor cleaning to beautiful outdoor spaces, we help keep your home, property, and business fresh, clean, healthy, and well maintained.',
        servicesEyebrow: 'Property care services',
        servicesTitle: 'A polished property, inside and out',
        servicesText:
          'Choose focused cleaning, reliable maintenance, lawn and garden care, or a custom mix that keeps your property fresh and welcoming.',
        viewAllServices: 'View All Services',
        aboutEyebrow: 'About Royal Crystal Cleaning',
        aboutTitle: 'Premium local service with practical care and a personal touch.',
        aboutParagraphs: [
          'Royal Crystal Cleaning has built a strong reputation for exceptional residential, commercial, specialized, and property maintenance services. Our team is committed to service excellence, attention to detail, and personalized solutions.',
          'We understand that a clean and beautiful environment is not only about appearance, it is also about comfort, health, safety, and peace of mind.',
        ],
        aboutHighlights: [
          'Fresh indoor spaces',
          'Dependable upkeep',
          'Beautiful outdoor areas',
          'Clear communication',
        ],
        aboutLink: 'Learn More About Us',
        whyEyebrow: 'Why choose us',
        whyTitle: 'Trustworthy service that is easy to see and easy to feel',
        whyText:
          'The work is practical, but the experience should still feel polished, organized, and reassuring.',
        galleryEyebrow: 'Visual showcase',
        galleryTitle: 'Spaces that feel cared for from the first glance',
        galleryText:
          'A quick look at the clean, welcoming, property-focused feel Royal Crystal Cleaning brings to every service.',
        testimonialsEyebrow: 'Customer words',
        testimonialsTitle: 'Friendly, reliable, detail-focused service',
        testimonialsText:
          'Sample reviews that reflect the trust, clarity, and care this site is designed to communicate.',
        ctaTitle: 'Ready for a cleaner, safer, and better-maintained property?',
        ctaText: 'Contact Royal Crystal Cleaning today for a free estimate.',
      },
      services: {
        title: 'Our Services | Royal Crystal Cleaning',
        description:
          "Explore Royal Crystal Cleaning's full range of services including cleaning, maintenance, and lawn care.",
        heroTitle: 'Our Services',
        heroText:
          'From spotless interiors to manicured lawns, Royal Crystal Cleaning offers complete property care solutions for homes and businesses.',
        introEyebrow: 'Complete property care',
        introTitle: 'Choose the service that fits your space',
        introText:
          'Each service is designed to be clear, practical, and easy to combine for ongoing property care.',
        steps: [
          ['Tell us what you need', 'Share your property type, timing, and the services you are considering.'],
          ['Get practical guidance', 'We help match cleaning, maintenance, or lawn care to your priorities.'],
          ['Enjoy a polished result', 'Your home, business, or outdoor space gets care that is easy to notice.'],
        ],
        multiTitle: 'Need more than one service?',
        multiText: 'Combine cleaning, maintenance, and outdoor care into one simple request.',
        ctaText: 'Not sure which service you need? Contact us and we will help you find the right solution.',
      },
      about: {
        title: 'About Us | Royal Crystal Cleaning',
        description:
          "Learn about Royal Crystal Cleaning's commitment to excellence in cleaning, maintenance, and lawn care services.",
        heroTitle: 'About Royal Crystal Cleaning',
        heroText: 'A property care company built around reliable service, polished details, and peace of mind.',
        introTitle: 'Clean, beautiful, well-maintained spaces change how people feel.',
        paragraphs: [
          'Royal Crystal Cleaning has built a strong reputation for exceptional residential, commercial, specialized, and property maintenance services.',
          'Our team is committed to service excellence, attention to detail, and personalized solutions. Whether you need routine cleaning, a one-time deep clean, reliable property maintenance, or a beautifully manicured lawn, we bring the same level of dedication and professionalism to every job.',
          'We proudly serve homeowners, apartment tenants, property managers, and commercial businesses with service designed to feel organized, respectful, and easy to trust.',
        ],
        imageAlt: 'Royal Crystal Cleaning team greeting a customer at a clean modern property',
        whyEyebrow: 'Why clients trust us',
        whyTitle: 'Service built around care, clarity, and consistency',
        whyText: 'We go beyond basic cleaning to provide comprehensive, trustworthy property care.',
        commitmentEyebrow: 'Our commitment',
        commitmentTitle: 'Every visit should feel professional, respectful, and reassuring',
        values: [
          ['Excellence', 'We hold ourselves to high standards on every project, big or small.', 'star'],
          ['Reliability', 'When we say we will be there, we mean it. Count on us to show up and deliver.', 'clock'],
          ['Care', 'We treat every property with the care and respect we would want in our own space.', 'shield'],
        ],
        ctaText: 'Ready to experience the Royal Crystal Cleaning difference? Get your free estimate today.',
      },
      contact: {
        title: 'Contact Us | Royal Crystal Cleaning',
        description:
          'Contact Royal Crystal Cleaning for a free estimate on cleaning, maintenance, or lawn care services.',
        heroTitle: 'Get a Free Estimate',
        heroText:
          'Reach out by phone or email and let us know how Royal Crystal Cleaning can help with your property.',
        introEyebrow: 'Contact',
        introTitle: 'Call or email for a clear, friendly next step',
        introText: 'No booking portal or complicated form. Just direct contact for a free estimate.',
        estimateEyebrow: 'Free estimate details',
        estimateTitle: 'Helpful details to include when you reach out',
        details: [
          'Property type: home, condo, apartment, office, business, or outdoor space',
          'Service needed: cleaning, maintenance, lawn and garden care, or multiple services',
          'Timing: one-time help, regular service, move-in/move-out, seasonal cleanup, or urgent support',
          'Contact preference: phone call or email reply',
        ],
        contactImageAlt: 'Professional cleaners wiping glass and a reception counter in a modern office',
        optionsEyebrow: 'Service options',
        optionsTitle: 'What can we help with?',
        optionsText: 'Tell us which area sounds closest to what you need. We can help narrow it down.',
      },
    },
    serviceDetail: {
      introEyebrow: 'Cleaning & maintenance by one trusted team.',
      introTitle: 'Professional care for properties that need to look and feel their best.',
      highlightsTitlePrefix: 'What is included in',
      highlightsText:
        'Choose one service or combine multiple property care needs into a simple, helpful plan.',
      relatedEyebrow: 'More ways we help',
      relatedTitle: 'Complete property care from one trusted team',
      relatedText:
        'Royal Crystal Cleaning can support the inside, outside, and ongoing upkeep of your property.',
      ctaText:
        'Contact Royal Crystal Cleaning today for a free estimate and a service plan that fits your property.',
      includedEyebrow: 'Services included',
    },
    services: [
      {
        slug: 'cleaning',
        pageKey: 'cleaning',
        title: 'Residential & Commercial Cleaning',
        shortTitle: 'Cleaning Services',
        navTitle: 'Residential & Commercial Cleaning',
        icon: 'sparkles',
        accent: 'blue',
        image: sharedImages.residential,
        imageAlt: 'Professional cleaner vacuuming a bright modern living room and kitchen',
        summary:
          'Crystal-clear cleaning for homes, apartments, condos, offices, and commercial properties.',
        description:
          'We provide reliable cleaning services for homes, apartments, condos, offices, businesses, and commercial properties. Whether you need regular cleaning, deep cleaning, move-in/move-out cleaning, or post-renovation cleanup, our team helps keep your space fresh, organized, and professionally maintained.',
        metaTitle: 'Residential & Commercial Cleaning | Royal Crystal Cleaning',
        metaDescription:
          'Professional residential and commercial cleaning for homes, offices, apartments, condos, shops, showrooms, restaurants, schools, and common areas.',
        highlights: ['Homes and condos', 'Office and retail spaces', 'Move-in and renovation cleanup'],
        included: [
          'Apartments',
          'Condos',
          'Family homes',
          'Kitchens and bathrooms',
          'Bedrooms and living areas',
          'Floor sweeping, mopping, vacuuming',
          'Dusting',
          'Interior window cleaning',
          'Move-in/move-out cleaning',
          'Spring cleaning',
          'After-party/event cleaning',
          'Post-renovation cleaning',
          'Corporate offices',
          'Small businesses',
          'Shops and showrooms',
          'Restaurants',
          'Medical offices',
          'Classrooms and schools',
          'Condo common areas',
          'Building entrances and hallways',
          'Garbage and recycling area cleaning',
          'Deep commercial cleaning',
        ],
      },
      {
        slug: 'maintenance',
        pageKey: 'maintenance',
        title: 'Handyman & Property Maintenance',
        shortTitle: 'Maintenance Services',
        navTitle: 'Maintenance Services',
        icon: 'wrench',
        accent: 'royal',
        image: sharedImages.maintenance,
        imageAlt: 'Handyman adjusting a door handle in a clean modern home entryway',
        summary: 'Reliable repairs, installations, and upkeep for homes, offices, and rental properties.',
        description:
          'We provide reliable maintenance and handyman support for residential and commercial properties. From small repairs to regular upkeep, our team helps keep your home, building, office, or rental property safe, clean, functional, and well maintained.',
        metaTitle: 'Maintenance Services | Royal Crystal Cleaning',
        metaDescription:
          'Reliable handyman and property maintenance services including repairs, fixture installation, drywall patching, pressure washing, and seasonal upkeep.',
        highlights: ['Small repairs', 'Fixture installation', 'Seasonal upkeep'],
        included: [
          'General repairs',
          'Window and door repairs',
          'Painting touch-ups',
          'Minor plumbing repairs',
          'Flooring repairs',
          'Furniture assembly',
          'Fixture installation',
          'Drywall patching',
          'Door and lock adjustments',
          'Shelf and curtain rod installation',
          'Fence repair',
          'Pressure washing',
          'Outdoor maintenance',
          'Common area upkeep',
          'Seasonal property maintenance',
        ],
      },
      {
        slug: 'lawn-garden',
        pageKey: 'lawnGarden',
        title: 'Lawn & Garden Care',
        shortTitle: 'Lawn & Garden',
        navTitle: 'Lawn & Garden Care',
        icon: 'leaf',
        accent: 'green',
        image: sharedImages.lawnGarden,
        imageAlt: 'Lawn care professional mowing a freshly maintained front yard garden',
        summary: 'Beautiful lawns, gardens, and outdoor spaces tailored to your property.',
        description:
          'We provide lawn and garden care services that help your outdoor spaces stay neat, healthy, seasonal, and welcoming.',
        metaTitle: 'Lawn & Garden Care | Royal Crystal Cleaning',
        metaDescription:
          'Professional lawn mowing, trimming, edging, garden maintenance, seasonal planting, hedge care, leaf removal, and yard cleanup.',
        highlights: ['Mowing and edging', 'Garden maintenance', 'Seasonal cleanup'],
        included: [
          'Garden design consultation',
          'Seasonal planting packages',
          'Garden maintenance',
          'Custom landscaping projects',
          'Lawn mowing',
          'Trimming and edging',
          'Weed control',
          'Garden bed cleaning',
          'Planting',
          'Hedge and shrub care',
          'Leaf removal',
          'Seasonal cleanup',
          'Yard cleanup',
        ],
      },
    ],
    whyChooseUs: [
      {
        title: 'Commitment to excellence',
        text: 'Every project is handled with care, consistency, and a high standard for the finished result.',
        icon: 'star',
      },
      {
        title: 'Personalized solutions for every client',
        text: 'Service plans are shaped around your property, your priorities, and the way you use your space.',
        icon: 'settings',
      },
      {
        title: 'Health, safety, and peace of mind focused',
        text: 'Clean, organized, well-maintained spaces support comfort, pride, and day-to-day confidence.',
        icon: 'shield',
      },
      {
        title: 'Eco-friendly and family-safe practices',
        text: 'Thoughtful methods and product choices help protect the people, pets, and spaces you care about.',
        icon: 'leaf',
      },
      {
        title: 'Reliable, high-quality results you can trust',
        text: 'From routine cleaning to seasonal care, the goal is dependable service and visible polish.',
        icon: 'checkCircle',
      },
    ],
    gallery: [
      {
        src: sharedImages.gallery1,
        alt: 'Spotless modern living room and kitchen after residential cleaning',
        title: 'Fresh interiors',
        text: 'Detailed cleaning for rooms that feel calm, healthy, and ready to enjoy.',
      },
      {
        src: sharedImages.gallery2,
        alt: 'Close-up of a professional cleaner wiping a glass surface with a microfiber cloth',
        title: 'Detailed care',
        text: 'Finishing touches that help homes and businesses look cared for.',
      },
      {
        src: sharedImages.gallery3,
        alt: 'Freshly edged front lawn with trimmed shrubs and garden beds',
        title: 'Outdoor polish',
        text: 'Lawn and garden support that makes the first impression count.',
      },
    ],
    testimonials: [
      {
        quote:
          'Royal Crystal Cleaning made our home feel fresh again. The team was professional, careful, and easy to communicate with.',
        name: 'Marissa K.',
        label: 'Residential cleaning client',
      },
      {
        quote:
          'They helped us with office cleaning and common area upkeep. Everything looked polished before our Monday opening.',
        name: 'Daniel R.',
        label: 'Commercial property client',
      },
      {
        quote:
          'Reliable, friendly, and detail-focused. It is a relief having one company that can help with cleaning and property care.',
        name: 'Priya S.',
        label: 'Property maintenance client',
      },
    ],
    contactCards: [
      {
        title: 'Call us',
        text: '263-788-8063',
        href: routes.contact.en,
        icon: 'phone',
      },
      {
        title: 'Email us',
        text: businessContact.email,
        href: businessContact.emailHref,
        icon: 'mail',
      },
      {
        title: 'Free estimates',
        text: 'Tell us what you need and we will help you choose the right service.',
        href: routes.contact.en,
        icon: 'clipboard',
      },
    ],
  },
  fr: {
    languageName: 'Français',
    htmlLang: 'fr-CA',
    business: {
      name: 'Nettoyage Cristal Royal',
      tagline: 'Nettoyage et entretien par une seule équipe de confiance.',
      catchphrase: 'Nettoyage, entretien et pelouse en toute confiance.',
      description:
        'Services de nettoyage résidentiel et commercial, maintenance, homme à tout faire, entretien de pelouse et jardin.',
    },
    navLinks: [
      { label: 'Accueil', key: 'home' },
      { label: 'Services', key: 'services' },
      { label: 'À propos', key: 'about' },
      { label: 'Contact', key: 'contact' },
    ],
    labels: {
      skipToContent: 'Aller au contenu',
      openMenu: 'Ouvrir le menu',
      menuToggle: 'Basculer le menu mobile',
      homeLink: 'accueil',
      mainNavigation: 'Navigation principale',
      mobileNavigation: 'Navigation mobile',
      serviceSpecialties: 'Services spécialisés',
      call: 'Appelez',
      callNow: 'Appelez maintenant',
      freeEstimate: 'Estimation gratuite',
      contactUs: 'Contactez-nous',
      learnMore: 'En savoir plus',
      learnMoreAbout: 'En savoir plus sur',
      viewService: 'Voir le service',
      services: 'Services',
      explore: 'Explorer',
      email: 'Courriel',
      language: 'Langue',
      switchToEnglish: 'English',
      switchToFrench: 'Français',
      currentLanguage: 'Langue actuelle',
      contact: 'Contact',
      emailUs: 'Envoyez-nous un courriel',
      rights: 'Tous droits réservés.',
    },
    pages: {
      home: {
        title: 'Nettoyage Cristal Royal | Nettoyage, maintenance et entretien de pelouse',
        description:
          'Nettoyage Cristal Royal offre des services de nettoyage résidentiel et commercial, de maintenance, homme à tout faire, pelouse et jardin.',
        heroText:
          'Des intérieurs éclatants aux espaces extérieurs bien entretenus, nous aidons à garder votre maison, votre propriété et votre entreprise propres, saines et accueillantes.',
        servicesEyebrow: 'Services de propriété',
        servicesTitle: 'Une propriété impeccable, à l’intérieur comme à l’extérieur',
        servicesText:
          'Choisissez un nettoyage soigné, une maintenance fiable, l’entretien de pelouse et jardin, ou une combinaison adaptée à votre propriété.',
        viewAllServices: 'Voir tous les services',
        aboutEyebrow: 'À propos de Nettoyage Cristal Royal',
        aboutTitle: 'Un service local haut de gamme, pratique et attentionné.',
        aboutParagraphs: [
          'Nettoyage Cristal Royal s’est bâti une solide réputation grâce à ses services résidentiels, commerciaux, spécialisés et d’entretien de propriété. Notre équipe s’engage à offrir un service de qualité, une attention aux détails et des solutions personnalisées adaptées aux besoins de chaque client.',
          'Nous comprenons qu’un environnement propre et bien entretenu n’est pas seulement une question d’apparence. C’est aussi une question de confort, de santé, de sécurité et de tranquillité d’esprit.',
        ],
        aboutHighlights: [
          'Espaces intérieurs frais',
          'Entretien fiable',
          'Beaux espaces extérieurs',
          'Communication claire',
        ],
        aboutLink: 'En savoir plus sur nous',
        whyEyebrow: 'Pourquoi nous choisir',
        whyTitle: 'Un service fiable qui se voit et se ressent',
        whyText:
          'Le travail est pratique, mais l’expérience doit aussi être professionnelle, organisée et rassurante.',
        galleryEyebrow: 'Aperçu visuel',
        galleryTitle: 'Des espaces soignés dès le premier regard',
        galleryText:
          'Un aperçu de l’ambiance propre, accueillante et professionnelle que Nettoyage Cristal Royal apporte à chaque service.',
        testimonialsEyebrow: 'Témoignages',
        testimonialsTitle: 'Un service amical, fiable et attentif aux détails',
        testimonialsText:
          'Quelques exemples d’avis qui reflètent la confiance, la clarté et le soin que ce site veut communiquer.',
        ctaTitle: 'Prêt pour une propriété plus propre, plus sûre et mieux entretenue?',
        ctaText: 'Demandez votre estimation gratuite dès aujourd’hui.',
      },
      services: {
        title: 'Nos services | Nettoyage Cristal Royal',
        description:
          'Découvrez les services de Nettoyage Cristal Royal : nettoyage résidentiel et commercial, maintenance, pelouse et jardin.',
        heroTitle: 'Nos services',
        heroText:
          'Des intérieurs impeccables aux pelouses bien entretenues, Nettoyage Cristal Royal offre des solutions complètes pour maisons et entreprises.',
        introEyebrow: 'Entretien complet de propriété',
        introTitle: 'Choisissez le service qui convient à votre espace',
        introText:
          'Chaque service est clair, pratique et facile à combiner pour un entretien régulier de votre propriété.',
        steps: [
          ['Dites-nous ce dont vous avez besoin', 'Indiquez votre type de propriété, vos délais et les services recherchés.'],
          ['Recevez des conseils pratiques', 'Nous vous aidons à choisir le nettoyage, la maintenance ou l’entretien extérieur approprié.'],
          ['Profitez d’un résultat soigné', 'Votre maison, commerce ou espace extérieur reçoit une attention visible et professionnelle.'],
        ],
        multiTitle: 'Besoin de plus d’un service?',
        multiText: 'Combinez nettoyage, maintenance et entretien extérieur dans une seule demande simple.',
        ctaText: 'Vous ne savez pas quel service choisir? Contactez-nous et nous vous aiderons à trouver la bonne solution.',
      },
      about: {
        title: 'À propos | Nettoyage Cristal Royal',
        description:
          'Découvrez l’engagement de Nettoyage Cristal Royal envers la qualité, le nettoyage, la maintenance et l’entretien de pelouse.',
        heroTitle: 'À propos de Nettoyage Cristal Royal',
        heroText:
          'Une entreprise d’entretien de propriété axée sur la fiabilité, les détails soignés et la tranquillité d’esprit.',
        introTitle: 'Des espaces propres, beaux et bien entretenus changent la façon dont on se sent.',
        paragraphs: [
          'Nettoyage Cristal Royal s’est bâti une solide réputation grâce à ses services résidentiels, commerciaux, spécialisés et d’entretien de propriété.',
          'Notre équipe s’engage à offrir un service de qualité, une attention aux détails et des solutions personnalisées adaptées aux besoins de chaque client.',
          'Nous comprenons qu’un environnement propre et bien entretenu n’est pas seulement une question d’apparence. C’est aussi une question de confort, de santé, de sécurité et de tranquillité d’esprit.',
        ],
        imageAlt: 'Équipe de Nettoyage Cristal Royal accueillant une cliente dans une propriété moderne et propre',
        whyEyebrow: 'Pourquoi les clients nous font confiance',
        whyTitle: 'Un service fondé sur le soin, la clarté et la constance',
        whyText:
          'Nous allons au-delà du nettoyage de base pour offrir un entretien de propriété complet et digne de confiance.',
        commitmentEyebrow: 'Notre engagement',
        commitmentTitle: 'Chaque visite doit être professionnelle, respectueuse et rassurante',
        values: [
          ['Excellence', 'Nous maintenons des standards élevés pour chaque projet, petit ou grand.', 'star'],
          ['Fiabilité', 'Quand nous disons que nous serons là, nous le faisons. Vous pouvez compter sur nous.', 'clock'],
          ['Soin', 'Nous traitons chaque propriété avec le respect que nous souhaiterions pour la nôtre.', 'shield'],
        ],
        ctaText: 'Demandez votre estimation gratuite dès aujourd’hui.',
      },
      contact: {
        title: 'Contact | Nettoyage Cristal Royal',
        description:
          'Contactez Nettoyage Cristal Royal pour une estimation gratuite en nettoyage, maintenance, pelouse ou jardin.',
        heroTitle: 'Demandez une estimation gratuite',
        heroText:
          'Appelez-nous ou écrivez-nous pour nous dire comment Nettoyage Cristal Royal peut vous aider avec votre propriété.',
        introEyebrow: 'Contact',
        introTitle: 'Appelez ou écrivez pour une prochaine étape claire et simple',
        introText: 'Aucun portail compliqué. Contact direct pour une estimation gratuite.',
        estimateEyebrow: 'Détails utiles pour l’estimation',
        estimateTitle: 'Informations à inclure lorsque vous nous contactez',
        details: [
          'Type de propriété : maison, condo, appartement, bureau, commerce ou espace extérieur',
          'Service recherché : nettoyage, maintenance, pelouse et jardin, ou plusieurs services',
          'Moment souhaité : aide ponctuelle, service régulier, déménagement, nettoyage saisonnier ou besoin urgent',
          'Préférence de contact : appel téléphonique ou réponse par courriel',
        ],
        contactImageAlt: 'Professionnels du nettoyage dans un bureau moderne avec surfaces vitrées et comptoir de réception',
        optionsEyebrow: 'Options de services',
        optionsTitle: 'Comment pouvons-nous vous aider?',
        optionsText: 'Dites-nous quel service correspond le mieux à vos besoins. Nous pouvons vous guider.',
      },
    },
    serviceDetail: {
      introEyebrow: 'Nettoyage et entretien par une seule équipe de confiance.',
      introTitle: 'Un service professionnel pour des propriétés propres, fonctionnelles et accueillantes.',
      highlightsTitlePrefix: 'Ce qui est inclus dans',
      highlightsText:
        'Choisissez un service ou combinez plusieurs besoins d’entretien de propriété dans une solution simple.',
      relatedEyebrow: 'Autres façons de vous aider',
      relatedTitle: 'Un entretien complet par une seule équipe de confiance',
      relatedText:
        'Nettoyage Cristal Royal peut soutenir l’intérieur, l’extérieur et l’entretien régulier de votre propriété.',
      ctaText: 'Demandez votre estimation gratuite dès aujourd’hui.',
      includedEyebrow: 'Services inclus',
    },
    services: [
      {
        slug: 'cleaning',
        pageKey: 'cleaning',
        title: 'Nettoyage résidentiel et commercial',
        shortTitle: 'Nettoyage résidentiel et commercial',
        navTitle: 'Nettoyage résidentiel et commercial',
        icon: 'sparkles',
        accent: 'blue',
        image: sharedImages.residential,
        imageAlt: 'Professionnelle du nettoyage passant l’aspirateur dans un salon et une cuisine modernes',
        summary:
          'Nettoyage fiable pour maisons, appartements, condos, bureaux, commerces et propriétés commerciales.',
        description:
          'Nous offrons des services de nettoyage fiables pour les maisons, appartements, condos, bureaux, commerces et propriétés commerciales. Que vous ayez besoin d’un entretien régulier, d’un grand ménage, d’un nettoyage avant ou après déménagement, d’un nettoyage après événement ou d’un nettoyage après rénovation, notre équipe aide à garder votre espace frais, organisé et professionnel.',
        metaTitle: 'Nettoyage résidentiel et commercial | Nettoyage Cristal Royal',
        metaDescription:
          'Services de nettoyage pour maisons, appartements, condos, bureaux, commerces, cuisines, salles de bain, planchers, fenêtres et nettoyage commercial en profondeur.',
        highlights: ['Maisons, condos et appartements', 'Bureaux et commerces', 'Grand ménage et déménagement'],
        included: [
          'Maisons',
          'Appartements',
          'Condos',
          'Bureaux',
          'Commerces',
          'Cuisines et salles de bain',
          'Entretien des planchers',
          'Balayage, lavage et aspirateur',
          'Époussetage',
          'Nettoyage intérieur des fenêtres',
          'Nettoyage avant ou après déménagement',
          'Grand ménage',
          'Nettoyage après événement',
          'Nettoyage après rénovation',
          'Nettoyage commercial en profondeur',
        ],
      },
      {
        slug: 'maintenance',
        pageKey: 'maintenance',
        title: 'Services de maintenance et homme à tout faire',
        shortTitle: 'Services de maintenance',
        navTitle: 'Services de maintenance',
        icon: 'wrench',
        accent: 'royal',
        image: sharedImages.maintenance,
        imageAlt: 'Homme à tout faire ajustant une poignée de porte dans une entrée moderne',
        summary:
          'Réparations, installations et entretien fiable pour maisons, bureaux et propriétés locatives.',
        description:
          'Nous offrons des services de maintenance et d’homme à tout faire pour les propriétés résidentielles et commerciales. Des petites réparations à l’entretien régulier, notre équipe aide à garder votre maison, immeuble, bureau ou propriété locative sécuritaire, propre, fonctionnelle et bien entretenue.',
        metaTitle: 'Services de maintenance | Nettoyage Cristal Royal',
        metaDescription:
          'Services de maintenance et homme à tout faire : réparations, retouches, plomberie mineure, installation, cloisons sèches, lavage à pression et entretien saisonnier.',
        highlights: ['Réparations générales', 'Installations et ajustements', 'Entretien saisonnier'],
        included: [
          'Réparations générales',
          'Réparation de fenêtres et portes',
          'Retouches de peinture',
          'Petites réparations de plomberie',
          'Réparations de planchers',
          'Assemblage de meubles',
          'Installation de luminaires et accessoires',
          'Réparation de cloisons sèches',
          'Ajustement de portes et serrures',
          'Installation de tablettes et tringles à rideaux',
          'Réparation de clôtures',
          'Lavage à pression',
          'Entretien extérieur',
          'Entretien des aires communes',
          'Entretien saisonnier de propriété',
        ],
      },
      {
        slug: 'lawn-garden',
        pageKey: 'lawnGarden',
        title: 'Entretien de pelouse et jardin',
        shortTitle: 'Pelouse et jardin',
        navTitle: 'Pelouse et jardin',
        icon: 'leaf',
        accent: 'green',
        image: sharedImages.lawnGarden,
        imageAlt: 'Professionnel de l’entretien de pelouse tondant une cour avant bien entretenue',
        summary:
          'Pelouses, jardins et espaces extérieurs soignés pour une propriété accueillante.',
        description:
          'Nous offrons des services d’entretien de pelouse et jardin pour garder vos espaces extérieurs propres, sains, saisonniers et accueillants. De la tonte aux projets paysagers personnalisés, notre équipe aide à améliorer l’apparence et le confort de votre propriété.',
        metaTitle: 'Entretien de pelouse et jardin | Nettoyage Cristal Royal',
        metaDescription:
          'Entretien de pelouse et jardin : tonte, coupe, bordures, mauvaises herbes, plates-bandes, plantation, haies, feuilles, nettoyage saisonnier et projets paysagers.',
        highlights: ['Tonte et bordures', 'Entretien de jardin', 'Nettoyage saisonnier'],
        included: [
          'Tonte de pelouse',
          'Coupe et bordures',
          'Contrôle des mauvaises herbes',
          'Nettoyage des plates-bandes',
          'Plantation',
          'Entretien de jardin',
          'Taille de haies et arbustes',
          'Ramassage des feuilles',
          'Nettoyage saisonnier',
          'Nettoyage de cour',
          'Projets paysagers personnalisés',
          'Consultation pour aménagement de jardin',
        ],
      },
    ],
    whyChooseUs: [
      {
        title: 'Engagement envers l’excellence',
        text: 'Chaque projet est réalisé avec soin, constance et un haut niveau d’exigence.',
        icon: 'star',
      },
      {
        title: 'Solutions personnalisées pour chaque client',
        text: 'Les services sont adaptés à votre propriété, vos priorités et votre façon d’utiliser l’espace.',
        icon: 'settings',
      },
      {
        title: 'Confort, santé, sécurité et tranquillité d’esprit',
        text: 'Des espaces propres et bien entretenus soutiennent le bien-être et la confiance au quotidien.',
        icon: 'shield',
      },
      {
        title: 'Pratiques écoresponsables et sécuritaires pour la famille',
        text: 'Des méthodes réfléchies aident à protéger les personnes, les animaux et les espaces qui comptent.',
        icon: 'leaf',
      },
      {
        title: 'Résultats fiables et de qualité',
        text: 'Du nettoyage régulier à l’entretien saisonnier, l’objectif est un résultat visible et durable.',
        icon: 'checkCircle',
      },
    ],
    gallery: [
      {
        src: sharedImages.gallery1,
        alt: 'Salon et cuisine modernes impeccables après un nettoyage résidentiel',
        title: 'Intérieurs frais',
        text: 'Un nettoyage détaillé pour des pièces calmes, saines et agréables à utiliser.',
      },
      {
        src: sharedImages.gallery2,
        alt: 'Gros plan d’un professionnel nettoyant une surface vitrée avec un chiffon en microfibre',
        title: 'Soin des détails',
        text: 'Des touches de finition qui donnent aux maisons et commerces une apparence soignée.',
      },
      {
        src: sharedImages.gallery3,
        alt: 'Pelouse fraîchement bordée avec arbustes taillés et plates-bandes propres',
        title: 'Extérieurs soignés',
        text: 'Un entretien de pelouse et jardin qui améliore la première impression.',
      },
    ],
    testimonials: [
      {
        quote:
          'Nettoyage Cristal Royal a rendu notre maison vraiment fraîche. L’équipe était professionnelle, minutieuse et facile à joindre.',
        name: 'Marissa K.',
        label: 'Cliente en nettoyage résidentiel',
      },
      {
        quote:
          'Ils nous ont aidés avec le nettoyage de bureau et l’entretien des aires communes. Tout était impeccable avant l’ouverture du lundi.',
        name: 'Daniel R.',
        label: 'Client commercial',
      },
      {
        quote:
          'Fiables, sympathiques et attentifs aux détails. C’est rassurant d’avoir une seule entreprise pour le nettoyage et l’entretien.',
        name: 'Priya S.',
        label: 'Cliente en entretien de propriété',
      },
    ],
    contactCards: [
      {
        title: 'Appelez-nous',
        text: '514-814-9207',
        href: routes.contact.fr,
        icon: 'phone',
      },
      {
        title: 'Écrivez-nous',
        text: businessContact.email,
        href: businessContact.emailHref,
        icon: 'mail',
      },
      {
        title: 'Estimations gratuites',
        text: 'Dites-nous ce dont vous avez besoin et nous vous aiderons à choisir le bon service.',
        href: routes.contact.fr,
        icon: 'clipboard',
      },
    ],
  },
} as const;

export type SiteContent = (typeof content)[Locale];
export type SiteService = SiteContent['services'][number];

export const getContent = (locale: Locale) => content[locale];

export const getServiceByKey = (locale: Locale, key: Extract<PageKey, 'cleaning' | 'maintenance' | 'lawnGarden'>) => {
  const service = content[locale].services.find((item) => item.pageKey === key);
  if (!service) {
    throw new Error(`Missing ${locale} service content for ${key}`);
  }

  return service;
};

export const getOppositeLocale = (locale: Locale): Locale => (locale === 'en' ? 'fr' : 'en');
