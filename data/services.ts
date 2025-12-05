export interface Service {
  id: string;
  slug: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  image: string;
  details: string[];
  detailsAr: string[];
  equipment?: string[];
  equipmentAr?: string[];
}

export const services: Service[] = [
  {
    id: '1',
    slug: 'steel-fabrication',
    name: 'Steel Fabrication',
    nameAr: 'تصنيع الفولاذ',
    description:
      'Most modern workshop facility available for fabrication/manufacturing, including fabrication of piping spools, pipe supports, ladders, steel structural supports, storage tanks, and process equipment including separators, scrubbers and heat exchangers.',
    descriptionAr:
      'أحدث مرافق الورش المتاحة للتصنيع/التصنيع، بما في ذلك تصنيع لفائف الأنابيب ودعامات الأنابيب والسلالم ودعامات الهياكل الفولاذية وخزانات التخزين ومعدات المعالجة بما في ذلك الفواصل والمنظفات ومبادلات الحرارة.',
    image: '/images/services/steel-fabrication.jpg',
    details: [
      'Fabrication of piping spools',
      'Pipe supports fabrication',
      'Ladders and steel structural supports',
      'Storage tanks',
      'Process equipment (Separators, Scrubbers, Heat Exchangers)',
      'Saudi Aramco Approved Fabrication Facility',
    ],
    detailsAr: [
      'تصنيع لفائف الأنابيب',
      'تصنيع دعامات الأنابيب',
      'السلالم ودعامات الهياكل الفولاذية',
      'خزانات التخزين',
      'معدات المعالجة (الفواصل، المنظفات، مبادلات الحرارة)',
      'منشأة تصنيع معتمدة من أرامكو السعودية',
    ],
    equipment: [
      'Column and Boom SAW Welding Machines',
      'Rolling machines',
      'CNC Profile Cutting Machinery for Carbon Steel cutting',
      'Plasma Cutting Machines for SS cutting',
      'Welding Rotators and Positioners',
      'Milling & Surface Grinding',
      'Drilling',
      'Pipe Threading',
    ],
    equipmentAr: [
      'آلات لحام SAW العمودية والرافعة',
      'آلات الدرفلة',
      'آلات قطع الملف الشخصي CNC لقطع الفولاذ الكربوني',
      'آلات القطع بالبلازما لقطع الفولاذ المقاوم للصدأ',
      'الدوارات والمواضع للحام',
      'الطحن والطحن السطحي',
      'الحفر',
      'خيوط الأنابيب',
    ],
  },
  {
    id: '2',
    slug: 'cross-country-pipeline',
    name: 'Cross Country Pipeline Construction',
    nameAr: 'بناء خطوط الأنابيب عبر البلاد',
    description:
      'Expert mechanical services in pipeline construction, from main line welding to valve stations, civil earth work, right of way construction, excavation, bedding & padding, backfilling and up to burming work completion.',
    descriptionAr:
      'خدمات ميكانيكية خبيرة في بناء خطوط الأنابيب، من لحام الخط الرئيسي إلى محطات الصمامات، أعمال الأرض المدنية، بناء حق الطريق، الحفر، الفراش والوسادة، الردم وحتى إكمال أعمال الحرق.',
    image: '/images/services/pipeline-construction.jpg',
    details: [
      'Main line Welding',
      'Valve stations',
      'Civil Earth Work',
      'Right of Way construction',
      'Excavation, Bedding & Padding',
      'Backfilling',
      'Burming work',
      'RTR Pipeline Construction',
      'Manual Excavation In Plant',
      'Fence Installation',
      'Scraper & Valve Installation',
      'Pipe Lowering',
      'Pump Installation',
    ],
    detailsAr: [
      'لحام الخط الرئيسي',
      'محطات الصمامات',
      'أعمال الأرض المدنية',
      'بناء حق الطريق',
      'الحفر، الفراش والوسادة',
      'الردم',
      'أعمال الحرق',
      'بناء خطوط الأنابيب RTR',
      'الحفر اليدوي في المصنع',
      'تركيب السياج',
      'تركيب الكاشطة والصمامات',
      'خفض الأنابيب',
      'تركيب المضخات',
    ],
  },
  {
    id: '3',
    slug: 'above-ground-pipeline',
    name: 'Above Ground Pipeline Fabrication and Erection Services',
    nameAr: 'خدمات تصنيع وتركيب خطوط الأنابيب فوق الأرض',
    description:
      'Complete pipe installation services including pipe material selection, pipe routing design and implementation, pipe support design and installation, valve selection, P&ID development, pipe testing, painting, labeling, insulation and heat tracing.',
    descriptionAr:
      'خدمات تركيب الأنابيب الكاملة بما في ذلك اختيار مواد الأنابيب وتصميم وتنفيذ توجيه الأنابيب وتصميم وتركيب دعامات الأنابيب واختيار الصمامات وتطوير P&ID واختبار الأنابيب والطلاء والتسمية والعزل وتتبع الحرارة.',
    image: '/images/services/above-ground-pipeline.jpg',
    details: [
      'Pipe & Valve installation',
      'Pipe Erection & Welding ISBL',
      'Pipe material selection',
      'Pipe routing design and implementation',
      'Pipe support design and installation',
      'Valve selection (manual and control)',
      'P&ID development and implementation',
      'Pipe testing',
      'Pipe painting and labeling',
      'Pipe insulation and heat tracing',
    ],
    detailsAr: [
      'تركيب الأنابيب والصمامات',
      'تركيب ولحام الأنابيب ISBL',
      'اختيار مواد الأنابيب',
      'تصميم وتنفيذ توجيه الأنابيب',
      'تصميم وتركيب دعامات الأنابيب',
      'اختيار الصمامات (يدوية ومراقبة)',
      'تطوير وتنفيذ P&ID',
      'اختبار الأنابيب',
      'طلاء وتسمية الأنابيب',
      'عزل الأنابيب وتتبع الحرارة',
    ],
  },
  {
    id: '4',
    slug: 'steel-structural',
    name: 'Steel Structural Fabrication and Erection Work',
    nameAr: 'أعمال تصنيع وتركيب الهياكل الفولاذية',
    description:
      'Full service installation on site and fabrication of all kind of structure types - Medium, Low and High structures.',
    descriptionAr:
      'خدمة تركيب كاملة في الموقع وتصنيع جميع أنواع الهياكل - هياكل متوسطة ومنخفضة وعالية.',
    image: '/images/services/steel-structural.jpg',
    details: [
      'Medium structures',
      'Low structures',
      'High structures',
      'On-site installation',
      'Full fabrication service',
    ],
    detailsAr: [
      'هياكل متوسطة',
      'هياكل منخفضة',
      'هياكل عالية',
      'التركيب في الموقع',
      'خدمة تصنيع كاملة',
    ],
  },
  {
    id: '5',
    slug: 'painting-blasting',
    name: 'Painting and Blasting Services',
    nameAr: 'خدمات الطلاء والتفجير',
    description:
      'Painting and blasting services both onshore and offshore. Epoxy Coating (APCS 113A, APCS113C) services widely preferred in petrochemical refinery and Oil & Gas industries. Coating Crew services for Pipeline painting repair, Holiday Testing and paint touch up.',
    descriptionAr:
      'خدمات الطلاء والتفجير على اليابسة والبحر. خدمات طلاء الإيبوكسي (APCS 113A، APCS113C) مفضلة على نطاق واسع في مصافي البتروكيماويات وصناعات النفط والغاز. خدمات طاقم الطلاء لإصلاح طلاء خطوط الأنابيب واختبار العطلات ولمس الطلاء.',
    image: '/images/services/painting-blasting.jpg',
    details: [
      'Sand Blasting',
      'Pipeline Coating APCS 113C',
      'Coating Repair APCS 113A',
      'Onshore and offshore services',
      'Holiday Testing',
      'Paint touch up',
      'Saudi Aramco Approved painting Facility',
    ],
    detailsAr: [
      'الرمال التفجير',
      'طلاء خطوط الأنابيب APCS 113C',
      'إصلاح الطلاء APCS 113A',
      'خدمات على اليابسة والبحر',
      'اختبار العطلات',
      'لمس الطلاء',
      'منشأة طلاء معتمدة من أرامكو السعودية',
    ],
  },
  {
    id: '6',
    slug: 'shutdown-maintenance',
    name: 'Shut Down & Maintenance Services',
    nameAr: 'خدمات الإغلاق والصيانة',
    description:
      'Complete shutdown & overhaul works in very safe, efficient, well in advance & to entire satisfaction of our clients. Services for Petrochemicals, Chemicals, Fertilizers, Oil & Gas industries, Power sector etc.',
    descriptionAr:
      'أعمال الإغلاق والإصلاح الكاملة بأمان وكفاءة عالية ومسبقاً وإلى رضا عملائنا بالكامل. خدمات للبتروكيماويات والكيماويات والأسمدة وصناعات النفط والغاز وقطاع الطاقة وغيرها.',
    image: '/images/services/shutdown-maintenance.jpg',
    details: [
      'Mechanical Maintenance (Rotating and Stationery Equipment)',
      'Industrial Cleaning Services',
      'Valve Maintenance Services',
      'PSV Removal and Reinstallation Services',
      'Insulation/Refractory Repair Services',
      'Plant Shutdown Team',
    ],
    detailsAr: [
      'الصيانة الميكانيكية (المعدات الدوارة والثابتة)',
      'خدمات التنظيف الصناعي',
      'خدمات صيانة الصمامات',
      'خدمات إزالة وإعادة تركيب PSV',
      'خدمات إصلاح العزل/المواد المقاومة للحرارة',
      'فريق إغلاق المصنع',
    ],
  },
  {
    id: '7',
    slug: 'hydro-testing',
    name: 'Hydro Testing and Pre Commissioning Services',
    nameAr: 'خدمات الاختبار الهيدروليكي والتشغيل المسبق',
    description:
      'Full range of pre-commissioning services for pipeline construction companies looking for reliability, safety and quality.',
    descriptionAr:
      'مجموعة كاملة من خدمات ما قبل التشغيل لشركات بناء خطوط الأنابيب التي تبحث عن الموثوقية والسلامة والجودة.',
    image: '/images/services/hydro-testing.jpg',
    details: [
      'Hydro Testing',
      'Cleaning',
      'Air Blowing',
      'Drying',
      'Purging',
      'Bolt Torqueing',
      'Pigging & Testing',
    ],
    detailsAr: [
      'الاختبار الهيدروليكي',
      'التنظيف',
      'النفخ بالهواء',
      'التجفيف',
      'التنظيف',
      'عزم البراغي',
      'الخنزير والاختبار',
    ],
  },
  {
    id: '8',
    slug: 'project-management',
    name: 'Project Management Services',
    nameAr: 'خدمات إدارة المشاريع',
    description:
      'Deliver construction projects to cost and on program, minimizing risk whilst maintaining safety, achieving quality and maximizing investment.',
    descriptionAr:
      'تسليم مشاريع البناء بالتكلفة والبرنامج، وتقليل المخاطر مع الحفاظ على السلامة وتحقيق الجودة وتعظيم الاستثمار.',
    image: '/images/services/project-management.jpg',
    details: [
      'Estimating',
      'Resource Planning',
      'Pre-Construction Services',
      'Budget Control and Management',
      'Scheduling',
      'General Project Oversight',
      'Jobsite Supervision',
      'Subcontractor Coordination',
    ],
    detailsAr: [
      'التقدير',
      'تخطيط الموارد',
      'خدمات ما قبل البناء',
      'التحكم في الميزانية والإدارة',
      'الجدولة',
      'الإشراف العام على المشروع',
      'إشراف موقع العمل',
      'تنسيق المقاولين من الباطن',
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

