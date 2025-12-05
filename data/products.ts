export interface Product {
  id: string;
  slug: string;
  name: string;
  nameAr: string;
  category: string;
  categorySlug: string;
  description: string;
  descriptionAr: string;
  image: string;
  items?: ProductItem[];
}

export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  image: string;
  specifications?: Record<string, string>;
}

export const productCategories = [
  {
    slug: 'seamless-stainless',
    name: 'Seamless Stainless Steel Pipes',
    nameAr: 'أنابيب الفولاذ المقاوم للصدأ بدون لحام',
    image: '/images/products/seamless-stainless.jpg',
  },
  {
    slug: 'erw-welded',
    name: 'ERW / Welded Pipes',
    nameAr: 'أنابيب ERW / الملحومة',
    image: '/images/products/erw-welded.jpg',
  },
  {
    slug: 'duplex',
    name: 'Duplex & Super Duplex Pipes',
    nameAr: 'أنابيب دوبلكس وسوبر دوبلكس',
    image: '/images/products/duplex.jpg',
  },
  {
    slug: 'carbon-steel',
    name: 'Carbon Steel Pipes',
    nameAr: 'أنابيب الفولاذ الكربوني',
    image: '/images/products/carbon-steel.jpg',
  },
  {
    slug: 'fittings',
    name: 'Pipe Fittings',
    nameAr: 'ملحقات الأنابيب',
    image: '/images/products/fittings.jpg',
    description: 'Elbows, Tees, Reducers',
    descriptionAr: 'المنحنيات، التوصيلات، المخفضات',
  },
  {
    slug: 'flanges-valves',
    name: 'Flanges & Valves',
    nameAr: 'الفلنجات والصمامات',
    image: '/images/products/flanges-valves.jpg',
  },
  {
    slug: 'fasteners',
    name: 'Fasteners & Gaskets',
    nameAr: 'المثبتات والجوانات',
    image: '/images/products/fasteners.jpg',
  },
  {
    slug: 'tubes',
    name: 'Industrial Tubes & Accessories',
    nameAr: 'الأنابيب الصناعية والملحقات',
    image: '/images/products/tubes.jpg',
  },
];

export const products: Product[] = [
  {
    id: '1',
    slug: 'steel-standard',
    name: 'Standard Steel Pipes',
    nameAr: 'الأنابيب الفولاذية القياسية',
    category: 'Steel Pipes',
    categorySlug: 'steel',
    description: 'High-quality standard steel pipes for industrial applications.',
    descriptionAr: 'أنابيب فولاذية قياسية عالية الجودة للتطبيقات الصناعية.',
    image: '/images/products/steel-standard.jpg',
    items: [
      {
        id: '1-1',
        slug: 'steel-standard-grade-a',
        name: 'Grade A Steel Pipe',
        nameAr: 'أنبوب فولاذي درجة أ',
        description: 'Premium grade A steel pipe with excellent durability.',
        descriptionAr: 'أنبوب فولاذي درجة أ متميز بمتانة ممتازة.',
        image: '/images/products/steel-grade-a.jpg',
        specifications: {
          'Diameter': '2-24 inches',
          'Thickness': '0.5-2 inches',
          'Material': 'Carbon Steel',
          'Standard': 'ASTM A53',
        },
      },
    ],
  },
  {
    id: '2',
    slug: 'plastic-hdpe',
    name: 'HDPE Pipes',
    nameAr: 'أنابيب HDPE',
    category: 'Plastic Pipes',
    categorySlug: 'plastic',
    description: 'High-density polyethylene pipes for water and gas distribution.',
    descriptionAr: 'أنابيب البولي إيثيلين عالية الكثافة لتوزيع المياه والغاز.',
    image: '/images/products/hdpe.jpg',
  },
  {
    id: '3',
    slug: 'copper-standard',
    name: 'Standard Copper Pipes',
    nameAr: 'الأنابيب النحاسية القياسية',
    category: 'Copper Pipes',
    categorySlug: 'copper',
    description: 'Premium copper pipes for plumbing and HVAC systems.',
    descriptionAr: 'أنابيب نحاسية متميزة لأنظمة السباكة والتدفئة والتهوية.',
    image: '/images/products/copper-standard.jpg',
  },
];

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductItem(
  categorySlug: string,
  itemSlug: string
): ProductItem | undefined {
  const product = products.find((p) => p.categorySlug === categorySlug);
  return product?.items?.find((item) => item.slug === itemSlug);
}

