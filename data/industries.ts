export interface Industry {
  slug: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  image: string;
  overview: string;
  overviewAr: string;
  applications: string[];
  applicationsAr: string[];
  relatedProducts: string[];
  relatedServices?: string[];
}

export const industries: Industry[] = [
  {
    slug: 'oil-gas',
    name: 'Oil & Gas Industries',
    nameAr: 'صناعات النفط والغاز',
    description: 'Comprehensive piping solutions for oil and gas industry.',
    descriptionAr: 'حلول أنابيب شاملة لصناعة النفط والغاز.',
    image: '/images/industries/oil-gas.jpg',
    overview:
      'We provide specialized piping solutions for upstream, midstream, and downstream operations in the oil and gas sector.',
    overviewAr:
      'نقدم حلول أنابيب متخصصة لعمليات المنبع والوسط والمصب في قطاع النفط والغاز.',
    applications: [
      'Pipeline transportation',
      'Refinery operations',
      'Offshore platforms',
      'Petrochemical plants',
    ],
    applicationsAr: [
      'نقل خطوط الأنابيب',
      'عمليات التكرير',
      'المنصات البحرية',
      'مصانع البتروكيماويات',
    ],
    relatedProducts: ['carbon-steel', 'seamless-stainless'],
  },
  {
    slug: 'petrochemicals',
    name: 'Petrochemical Industries',
    nameAr: 'صناعات البتروكيماويات',
    description: 'Specialized solutions for petrochemical facilities.',
    descriptionAr: 'حلول متخصصة لمرافق البتروكيماويات.',
    image: '/images/industries/petrochemicals.jpg',
    overview:
      'We supply premium-quality pipes and fittings for petrochemical plants and facilities.',
    overviewAr:
      'نوفر أنابيب وملحقات عالية الجودة لمصانع ومرافق البتروكيماويات.',
    applications: [
      'Process piping',
      'Chemical transport',
      'Storage systems',
      'Plant operations',
    ],
    applicationsAr: [
      'أنابيب المعالجة',
      'نقل المواد الكيميائية',
      'أنظمة التخزين',
      'عمليات المصنع',
    ],
    relatedProducts: ['seamless-stainless', 'duplex', 'fittings'],
  },
  {
    slug: 'power',
    name: 'Power Industries',
    nameAr: 'صناعات الطاقة',
    description: 'Piping solutions for power plants.',
    descriptionAr: 'حلول الأنابيب لمحطات الطاقة.',
    image: '/images/industries/power.png',
    overview:
      'We provide pipes for thermal power plants, nuclear facilities, and renewable energy installations.',
    overviewAr:
      'نوفر الأنابيب لمحطات الطاقة الحرارية والمرافق النووية وتركيبات الطاقة المتجددة.',
    applications: [
      'Steam systems',
      'Cooling water',
      'Fuel transport',
      'Waste heat recovery',
    ],
    applicationsAr: [
      'أنظمة البخار',
      'مياه التبريد',
      'نقل الوقود',
      'استعادة الحرارة المفقودة',
    ],
    relatedProducts: ['carbon-steel', 'seamless-stainless'],
  },
  {
    slug: 'marine',
    name: 'Marine Industries',
    nameAr: 'الصناعات البحرية',
    description: 'Corrosion-resistant solutions for marine applications.',
    descriptionAr: 'حلول مقاومة للتآكل للتطبيقات البحرية.',
    image: '/images/industries/marine.png',
    overview:
      'Our marine-grade piping solutions are designed for harsh offshore environments and marine applications.',
    overviewAr:
      'حلول الأنابيب البحرية لدينا مصممة للبيئات البحرية القاسية والتطبيقات البحرية.',
    applications: [
      'Offshore platforms',
      'Shipbuilding',
      'Marine installations',
      'Desalination plants',
    ],
    applicationsAr: [
      'المنصات البحرية',
      'بناء السفن',
      'المنشآت البحرية',
      'محطات التحلية',
    ],
    relatedProducts: ['duplex', 'seamless-stainless', 'flanges-valves'],
  },
  {
    slug: 'water-treatment',
    name: 'Water Treatment',
    nameAr: 'معالجة المياه',
    description: 'Specialized pipes for water treatment facilities.',
    descriptionAr: 'أنابيب متخصصة لمرافق معالجة المياه.',
    image: '/images/industries/water-treatment.png',
    overview:
      'We supply pipes for water treatment plants, desalination facilities, and wastewater management systems.',
    overviewAr:
      'نوفر الأنابيب لمحطات معالجة المياه ومرافق تحلية المياه وأنظمة إدارة مياه الصرف الصحي.',
    applications: [
      'Water filtration',
      'Desalination',
      'Wastewater treatment',
      'Distribution networks',
    ],
    applicationsAr: [
      'ترشيح المياه',
      'تحلية المياه',
      'معالجة مياه الصرف الصحي',
      'شبكات التوزيع',
    ],
    relatedProducts: ['seamless-stainless', 'erw-welded'],
  },
  {
    slug: 'construction',
    name: 'Commercial',
    nameAr: 'التجارية',
    description: 'Reliable piping systems for construction and commercial projects.',
    descriptionAr: 'أنظمة أنابيب موثوقة لمشاريع البناء والتجارية.',
    image: '/images/industries/construction.png',
    overview:
      'Our pipes are widely used in residential, commercial, and infrastructure construction projects.',
    overviewAr:
      'تُستخدم أنابيبنا على نطاق واسع في مشاريع البناء السكنية والتجارية والبنية التحتية.',
    applications: [
      'Building plumbing',
      'HVAC systems',
      'Water supply',
      'Drainage systems',
    ],
    applicationsAr: [
      'سباكة المباني',
      'أنظمة التدفئة والتهوية',
      'إمدادات المياه',
      'أنظمة الصرف',
    ],
    relatedProducts: ['erw-welded', 'carbon-steel', 'fittings'],
  },
  {
    slug: 'electro-mechanical',
    name: 'Electro-Mechanical & Industrial Engineering',
    nameAr: 'الكهربائية والميكانيكية والهندسة الصناعية',
    description: 'Comprehensive solutions for electro-mechanical contractors.',
    descriptionAr: 'حلول شاملة لمقاولي الكهرباء والميكانيكا.',
    image: '/images/industries/electro-mechanical.jpg',
    overview:
      'We serve electro-mechanical contractors and engineering sectors with quality products and technical expertise.',
    overviewAr:
      'نخدم مقاولي الكهرباء والميكانيكا والقطاعات الهندسية بمنتجات عالية الجودة وخبرة تقنية.',
    applications: [
      'Industrial installations',
      'Mechanical systems',
      'Electrical conduits',
      'Engineering projects',
    ],
    applicationsAr: [
      'المنشآت الصناعية',
      'الأنظمة الميكانيكية',
      'قنوات الكهرباء',
      'المشاريع الهندسية',
    ],
    relatedProducts: ['tubes', 'fasteners', 'fittings'],
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}

