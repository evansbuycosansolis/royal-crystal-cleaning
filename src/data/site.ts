export const business = {
  name: 'Royal Crystal Cleaning',
  tagline: 'The King of Crystal Clear Cleaning',
  catchphrase: 'Cleaning, maintenance, and lawn care you can trust.',
  phone: '263-788-8063',
  phoneHref: 'tel:2637888063',
  email: 'info@royalcrystalcleaning.com',
  emailHref: 'mailto:info@royalcrystalcleaning.com',
  url: 'https://royalcrystalcleaning.com',
  description:
    'Residential and commercial cleaning, handyman maintenance, lawn care, and garden services.',
};

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const services = [
  {
    slug: 'cleaning',
    title: 'Residential & Commercial Cleaning',
    shortTitle: 'Cleaning Services',
    navTitle: 'Residential & Commercial Cleaning',
    href: '/services/cleaning',
    icon: 'sparkles',
    accent: 'blue',
    image: '/images/residential-cleaning.webp',
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
    title: 'Handyman & Property Maintenance',
    shortTitle: 'Maintenance Services',
    navTitle: 'Maintenance Services',
    href: '/services/maintenance',
    icon: 'wrench',
    accent: 'royal',
    image: '/images/maintenance-service.webp',
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
    title: 'Lawn & Garden Care',
    shortTitle: 'Lawn & Garden',
    navTitle: 'Lawn & Garden Care',
    href: '/services/lawn-garden',
    icon: 'leaf',
    accent: 'green',
    image: '/images/lawn-garden-care.webp',
    imageAlt: 'Lawn care professional mowing a freshly maintained front yard garden',
    summary: 'Beautiful lawns, gardens, and outdoor spaces tailored to your property.',
    description: 'We provide lawn and garden care services that help your outdoor spaces stay neat, healthy, seasonal, and welcoming.',
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
] as const;

export const whyChooseUs = [
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
];

export const gallery = [
  {
    src: '/images/gallery-1.webp',
    alt: 'Spotless modern living room and kitchen after residential cleaning',
    title: 'Fresh interiors',
    text: 'Detailed cleaning for rooms that feel calm, healthy, and ready to enjoy.',
  },
  {
    src: '/images/gallery-2.webp',
    alt: 'Close-up of a professional cleaner wiping a glass surface with a microfiber cloth',
    title: 'Detailed care',
    text: 'Finishing touches that help homes and businesses look cared for.',
  },
  {
    src: '/images/gallery-3.webp',
    alt: 'Freshly edged front lawn with trimmed shrubs and garden beds',
    title: 'Outdoor polish',
    text: 'Lawn and garden support that makes the first impression count.',
  },
];

export const testimonials = [
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
];

export const contactCards = [
  {
    title: 'Call us',
    text: business.phone,
    href: business.phoneHref,
    icon: 'phone',
  },
  {
    title: 'Email us',
    text: business.email,
    href: business.emailHref,
    icon: 'mail',
  },
  {
    title: 'Free estimates',
    text: 'Tell us what you need and we will help you choose the right service.',
    href: '/contact',
    icon: 'clipboard',
  },
];
