import {getTranslations} from 'next-intl/server';
import SectionHeader from '@/components/SectionHeader';
import ProductCard from '@/components/ProductCard';
import {productCategories} from '@/data/products';

export const dynamic = 'force-dynamic';

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const t = await getTranslations({locale});

  return {
    title: t('products.title'),
    description: t('products.subtitle'),
  };
}

export default async function ProductsPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const t = await getTranslations('products');

  return (
    <section className="py-20 bg-charcoal-900">
      <div className="container mx-auto px-4">
        <SectionHeader
          title={t('title')}
          subtitle={t('subtitle')}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productCategories.map((category, index) => (
            <ProductCard
              key={category.slug}
              title={locale === 'ar' ? category.nameAr : category.name}
              description="High-quality industrial pipes for various applications"
              image={category.image}
              slug={category.slug}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

