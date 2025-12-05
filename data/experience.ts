export interface Project {
  id: number;
  client: string;
  jobDescription: string;
  jobDescriptionAr: string;
  from: string;
  to: string;
}

export const projects: Project[] = [
  {
    id: 1,
    client: 'Ex Works Shop',
    jobDescription: 'Fabrication - Cutting, bending & Rolling',
    jobDescriptionAr: 'التصنيع - القطع والثني والدرفلة',
    from: 'Sep-07',
    to: 'Nov-07',
  },
  {
    id: 2,
    client: 'Ex Works Shop',
    jobDescription: 'Pipe Section Rolling',
    jobDescriptionAr: 'درفلة قسم الأنابيب',
    from: 'Oct-07',
    to: 'Dec-07',
  },
  {
    id: 3,
    client: 'Hadeed Color Coating Project',
    jobDescription: 'Fabrication & Supply of HDG Steel Crating',
    jobDescriptionAr: 'التصنيع وتوريد صناديق الفولاذ المجلفن',
    from: 'Nov-07',
    to: 'Dec-07',
  },
  {
    id: 4,
    client: 'Saudi Pan Gulf',
    jobDescription: 'Filter Aid Mix Tank Hooper',
    jobDescriptionAr: 'خزان خلط مساعد التصفية',
    from: 'Dec-07',
    to: 'Jan-08',
  },
  {
    id: 5,
    client: 'Ex Works Shop',
    jobDescription: 'Fabrication & Supply of Trailers',
    jobDescriptionAr: 'التصنيع وتوريد المقطورات',
    from: 'Jan-08',
    to: 'Jan-08',
  },
  {
    id: 6,
    client: 'APC Projects',
    jobDescription: 'Machining of baffle Plate',
    jobDescriptionAr: 'تشغيل لوحة الحاجز',
    from: 'Jan-08',
    to: 'Feb-08',
  },
  {
    id: 7,
    client: 'Ex Works Shop',
    jobDescription: 'Misc Machining Works',
    jobDescriptionAr: 'أعمال تشغيل متنوعة',
    from: 'Apr-08',
    to: 'Apr-08',
  },
  {
    id: 8,
    client: 'Ex Works Shop',
    jobDescription: 'Machining Works',
    jobDescriptionAr: 'أعمال التشغيل',
    from: 'May-08',
    to: 'May-08',
  },
  {
    id: 9,
    client: 'APC Project',
    jobDescription: 'Hydro Testing',
    jobDescriptionAr: 'الاختبار الهيدروليكي',
    from: 'Jul-08',
    to: 'Jul-08',
  },
  {
    id: 10,
    client: 'Kisco (Murafiq Site)',
    jobDescription: 'Fabrication of Platform',
    jobDescriptionAr: 'تصنيع المنصة',
    from: 'Jan-09',
    to: 'May-09',
  },
  {
    id: 11,
    client: 'Olayan Descon',
    jobDescription: 'Shutdown Job',
    jobDescriptionAr: 'عمل الإغلاق',
    from: 'Jan-09',
    to: 'Jul-09',
  },
  {
    id: 12,
    client: 'MCE (JUPC)',
    jobDescription: 'Fabrication of Scrubbers',
    jobDescriptionAr: 'تصنيع المنظفات',
    from: 'Feb-09',
    to: 'Mar-09',
  },
  {
    id: 13,
    client: 'Inma Steel',
    jobDescription: 'Maintenance Job',
    jobDescriptionAr: 'عمل الصيانة',
    from: 'Feb-09',
    to: 'May-09',
  },
  {
    id: 14,
    client: 'Risal',
    jobDescription: 'Maintenance Job',
    jobDescriptionAr: 'عمل الصيانة',
    from: 'Apr-09',
    to: 'Jun-09',
  },
  {
    id: 15,
    client: 'Sidem Saudi Ltd.',
    jobDescription: 'Fabrication of Ladders',
    jobDescriptionAr: 'تصنيع السلالم',
    from: 'May-09',
    to: 'Jul-09',
  },
  {
    id: 16,
    client: 'Azmeel (RC Project)',
    jobDescription: 'Fabrication of Tank',
    jobDescriptionAr: 'تصنيع الخزان',
    from: 'Aug-09',
    to: 'Oct-09',
  },
  {
    id: 17,
    client: 'Mountain Air Cap (beha)',
    jobDescription: 'Maintenance Job',
    jobDescriptionAr: 'عمل الصيانة',
    from: 'Aug-09',
    to: 'Oct-09',
  },
  {
    id: 18,
    client: 'Sulzer',
    jobDescription: 'Fabrication of Scrubbers',
    jobDescriptionAr: 'تصنيع المنظفات',
    from: 'Oct-09',
    to: 'Dec-09',
  },
  {
    id: 19,
    client: 'Arabian Gulf Company',
    jobDescription: 'Supply, Fabrication & Erection of Shed',
    jobDescriptionAr: 'توريد وتصنيع وتركيب السقيفة',
    from: 'Mar-10',
    to: 'Jul-10',
  },
  {
    id: 20,
    client: 'Globe Marine Service',
    jobDescription: 'Supply, Fabrication of Hopper',
    jobDescriptionAr: 'توريد وتصنيع القادوس',
    from: 'Apr-10',
    to: 'Dec-10',
  },
  {
    id: 21,
    client: 'Rotary Engineering',
    jobDescription: 'Misc brass Works',
    jobDescriptionAr: 'أعمال النحاس المتنوعة',
    from: 'Feb-11',
    to: 'Jun-11',
  },
  {
    id: 22,
    client: 'Samsung E&C',
    jobDescription: 'JERP Fabrication Works',
    jobDescriptionAr: 'أعمال تصنيع JERP',
    from: 'Feb-11',
    to: 'Jun-11',
  },
  {
    id: 23,
    client: 'Cusat Construction Co. Ltd',
    jobDescription:
      'Supply, Fabrication, blasting & Painting of Pad Supports at QIPP Power Point',
    jobDescriptionAr:
      'توريد وتصنيع وتفجير وطلاء دعامات الوسادة في نقطة الطاقة QIPP',
    from: 'Jan-13',
    to: 'Mar-13',
  },
  {
    id: 24,
    client: 'PSA Five Solios',
    jobDescription: 'Supply, Fabrication of structure for Madan Plant',
    jobDescriptionAr: 'توريد وتصنيع الهيكل لمصنع مدان',
    from: 'Mar-13',
    to: 'Dec-14',
  },
  {
    id: 25,
    client: 'Hyundai Eng.',
    jobDescription:
      'Supply, Fabrication & HDC of Platform Structure at Maaden Site',
    jobDescriptionAr:
      'توريد وتصنيع و HDC لهيكل المنصة في موقع معادن',
    from: 'Jun-13',
    to: 'Nov-14',
  },
  {
    id: 26,
    client: 'China Chemical',
    jobDescription:
      'Fabrication, Erection, blasting & Painting Engineering CC7 of 20 mtr dia tanks at Maaden Labor Accommodation Project',
    jobDescriptionAr:
      'التصنيع والتركيب والتفجير والطلاء الهندسي CC7 لخزانات قطر 20 متر في مشروع إسكان عمال معادن',
    from: 'Jan-13',
    to: 'May-15',
  },
  {
    id: 27,
    client: 'Tamimi Global Co.',
    jobDescription:
      'Supply, Fabrication, Painting of Pad Supports & Hand Rails',
    jobDescriptionAr: 'توريد وتصنيع وطلاء دعامات الوسادة والدرابزين',
    from: 'May-13',
    to: 'Mar-15',
  },
  {
    id: 28,
    client: 'Wapstech Co.',
    jobDescription: 'Sandblasting of boiler Tubes at QIPP site',
    jobDescriptionAr: 'الرمال التفجير لأنابيب الغلاية في موقع QIPP',
    from: 'Nov-14',
    to: 'Feb-15',
  },
  {
    id: 29,
    client: 'Sungbo Contracting Co.',
    jobDescription:
      'Supply, Fabrication & HDC of Platform Structure at Yanbu Phase Ill',
    jobDescriptionAr:
      'توريد وتصنيع و HDC لهيكل المنصة في ينبع المرحلة الثالثة',
    from: 'Mar-15',
    to: 'Jun-16',
  },
  {
    id: 30,
    client: 'CNCEC',
    jobDescription: 'Blasting & Painting of Pipe In Wasit Gas Plant',
    jobDescriptionAr: 'التفجير والطلاء للأنابيب في مصنع غاز واسط',
    from: 'Jan-16',
    to: 'Jun-16',
  },
  {
    id: 31,
    client: 'Posco E&C',
    jobDescription:
      'Pipe rack and support fabrication for 21 KM Sulfur Pipeline Project',
    jobDescriptionAr:
      'تصنيع رف الأنابيب والدعم لمشروع خط أنابيب الكبريت 21 كم',
    from: 'Mar-15',
    to: 'Jun-16',
  },
  {
    id: 32,
    client: 'Posco E&C',
    jobDescription: 'Blasting and Painting for Pipeline',
    jobDescriptionAr: 'التفجير والطلاء لخط الأنابيب',
    from: 'Jan-16',
    to: 'Jul-16',
  },
  {
    id: 33,
    client: 'MYSCO Contracting',
    jobDescription:
      '42 KM Utility Water RTR Pipeline Civil Earth Work, Right of Way, Excavation and burming',
    jobDescriptionAr:
      '42 كم خط أنابيب المياه RTR أعمال الأرض المدنية وحق الطريق والحفر والحرق',
    from: 'Dec-17',
    to: 'Jun-18',
  },
  {
    id: 34,
    client: 'Arkad E&C',
    jobDescription:
      '42 KM Utility Water RTR Pipeline Construction, Pump and Foundation Installation, Core Drilling, Manual Excavation',
    jobDescriptionAr:
      '42 كم بناء خط أنابيب المياه RTR وتركيب المضخات والأساسات والحفر الأساسي والحفر اليدوي',
    from: 'Dec-17',
    to: 'Ongoing',
  },
  {
    id: 35,
    client: 'Technicas Reunidas TR',
    jobDescription:
      'Fadhili Gas Plant Pipe Rack & Supports Fabrication & installation',
    jobDescriptionAr:
      'تصنيع وتركيب رف الأنابيب والدعامات لمصنع غاز فاضلي',
    from: 'Aug-18',
    to: 'Ongoing',
  },
  {
    id: 36,
    client: 'Sungchang E&C',
    jobDescription:
      'Fadhili Gas Plant Pipe & Support Fabrication & Installation',
    jobDescriptionAr:
      'تصنيع وتركيب الأنابيب والدعامات لمصنع غاز فاضلي',
    from: 'Mar-18',
    to: 'Ongoing',
  },
];

