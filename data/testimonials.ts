export interface Testimonial {
  id: number;
  name: string;
  company: string;
  text: string;
  textAr: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Ahmed Al-Mansoori',
    company: 'ABC Construction',
    text: 'Gulf Pipes has been our trusted supplier for over 5 years. Their quality and service are exceptional.',
    textAr: 'كانت خليج الأنابيب موردنا الموثوق لأكثر من 5 سنوات. جودتها وخدمتها استثنائية.',
    rating: 5,
  },
  {
    id: 2,
    name: 'John Smith',
    company: 'XYZ Industries',
    text: 'The durability of their pipes has significantly reduced our maintenance costs. Highly recommended!',
    textAr: 'قللت متانة أنابيبهم بشكل كبير من تكاليف الصيانة لدينا. موصى به بشدة!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Fatima Hassan',
    company: 'Water Solutions Co.',
    text: 'Excellent customer service and fast delivery. Their products meet all our specifications.',
    textAr: 'خدمة عملاء ممتازة وتسليم سريع. منتجاتهم تلبي جميع مواصفاتنا.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Michael Johnson',
    company: 'Energy Corp',
    text: 'We rely on Gulf Pipes for all our major projects. Consistent quality and reliable delivery.',
    textAr: 'نعتمد على خليج الأنابيب لجميع مشاريعنا الكبرى. جودة متسقة وتسليم موثوق.',
    rating: 5,
  },
];

