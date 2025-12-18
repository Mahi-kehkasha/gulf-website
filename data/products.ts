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
    image: '/images/products/seamless-stainless.png',
  },
  {
    slug: 'erw-welded',
    name: 'ERW / Welded Pipes',
    nameAr: 'أنابيب ERW / الملحومة',
    image: '/images/products/erw-welded.png',
  },
  {
    slug: 'duplex',
    name: 'Duplex & Super Duplex Pipes',
    nameAr: 'أنابيب دوبلكس وسوبر دوبلكس',
    image: '/images/products/duplex.png',
  },
  {
    slug: 'carbon-steel',
    name: 'Carbon Steel Pipes',
    nameAr: 'أنابيب الفولاذ الكربوني',
    image: '/images/products/carbon-steel.png',
  },
  {
    slug: 'fittings',
    name: 'Pipe Fittings',
    nameAr: 'ملحقات الأنابيب',
    image: '/images/products/fittings.png',
    description: 'Elbows, Tees, Reducers',
    descriptionAr: 'المنحنيات، التوصيلات، المخفضات',
  },
  {
    slug: 'flanges-valves',
    name: 'Flanges & Valves',
    nameAr: 'الفلنجات والصمامات',
    image: '/images/products/flanges-valves.png',
  },
  {
    slug: 'fasteners',
    name: 'Fasteners & Gaskets',
    nameAr: 'المثبتات والجوانات',
    image: '/images/products/fittings.png',
  },
  {
    slug: 'tubes',
    name: 'Industrial Tubes & Accessories',
    nameAr: 'الأنابيب الصناعية والملحقات',
    image: '/images/products/erw-welded.png',
  },
];

export const products: Product[] = [
  {
    id: '1',
    slug: 'carbon-steel-standard',
    name: 'Standard Carbon Steel Pipes',
    nameAr: 'الأنابيب الفولاذية الكربونية القياسية',
    category: 'Carbon Steel Pipes',
    categorySlug: 'carbon-steel',
    description: 'High-quality carbon steel pipes for industrial applications.',
    descriptionAr: 'أنابيب فولاذية كربونية عالية الجودة للتطبيقات الصناعية.',
    image: '/images/products/carbon-steel.png',
    items: [
      {
        id: '1-1',
        slug: 'carbon-steel-grade-a',
        name: 'Grade A Carbon Steel Pipe',
        nameAr: 'أنبوب فولاذي كربوني درجة أ',
        description: 'Premium grade A carbon steel pipe with excellent durability.',
        descriptionAr: 'أنبوب فولاذي كربوني درجة أ متميز بمتانة ممتازة.',
        image: '/images/products/carbon-steel.png',
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
    slug: 'seamless-stainless-standard',
    name: 'Standard Seamless Stainless Steel Pipes',
    nameAr: 'أنابيب الفولاذ المقاوم للصدأ بدون لحام القياسية',
    category: 'Seamless Stainless Steel Pipes',
    categorySlug: 'seamless-stainless',
    description: 'Premium seamless stainless steel pipes for high-pressure applications.',
    descriptionAr: 'أنابيب فولاذية مقاومة للصدأ بدون لحام متميزة للتطبيقات عالية الضغط.',
    image: '/images/products/seamless-stainless.png',
  },
  {
    id: '3',
    slug: 'erw-welded-standard',
    name: 'Standard ERW Welded Pipes',
    nameAr: 'أنابيب ERW الملحومة القياسية',
    category: 'ERW / Welded Pipes',
    categorySlug: 'erw-welded',
    description: 'High-quality ERW welded pipes for various industrial applications.',
    descriptionAr: 'أنابيب ERW ملحومة عالية الجودة لتطبيقات صناعية متنوعة.',
    image: '/images/products/erw-welded.png',
  },
  {
    id: '4',
    slug: 'duplex-standard',
    name: 'Duplex Stainless Steel Pipes',
    nameAr: 'أنابيب الفولاذ المقاوم للصدأ دوبلكس',
    category: 'Duplex & Super Duplex Pipes',
    categorySlug: 'duplex',
    description: 'Premium duplex and super duplex pipes for corrosive environments.',
    descriptionAr: 'أنابيب دوبلكس وسوبر دوبلكس متميزة للبيئات المسببة للتآكل.',
    image: '/images/products/duplex.png',
  },
  {
    id: '5',
    slug: 'fittings-elbows',
    name: 'Pipe Fittings - Elbows',
    nameAr: 'ملحقات الأنابيب - المنحنيات',
    category: 'Pipe Fittings',
    categorySlug: 'fittings',
    description: 'High-quality pipe elbows in various angles and sizes.',
    descriptionAr: 'منحنيات أنابيب عالية الجودة بزوايا وأحجام متنوعة.',
    image: '/images/products/fittings.png',
  },
  {
    id: '6',
    slug: 'flanges-standard',
    name: 'Standard Flanges',
    nameAr: 'الفلنجات القياسية',
    category: 'Flanges & Valves',
    categorySlug: 'flanges-valves',
    description: 'Premium flanges for pipe connections and installations.',
    descriptionAr: 'فلنجات متميزة لاتصالات وتركيبات الأنابيب.',
    image: '/images/products/flanges-valves.png',
  },
  {
    id: '7',
    slug: 'fasteners-bolts',
    name: 'Industrial Fasteners & Bolts',
    nameAr: 'المثبتات والبراغي الصناعية',
    category: 'Fasteners & Gaskets',
    categorySlug: 'fasteners',
    description: 'High-quality fasteners, bolts, and gaskets for industrial applications.',
    descriptionAr: 'مثبتات وبراغي وجوانات عالية الجودة للتطبيقات الصناعية.',
    image: '/images/products/fittings.png',
  },
  {
    id: '8',
    slug: 'tubes-industrial',
    name: 'Industrial Tubes',
    nameAr: 'الأنابيب الصناعية',
    category: 'Industrial Tubes & Accessories',
    categorySlug: 'tubes',
    description: 'Premium industrial tubes and accessories for various applications.',
    descriptionAr: 'أنابيب وملحقات صناعية متميزة لتطبيقات متنوعة.',
    image: '/images/products/erw-welded.png',
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

