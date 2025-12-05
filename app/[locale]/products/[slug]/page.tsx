import {getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';
import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import ProductCard from '@/components/ProductCard';
import FadeIn from '@/components/FadeIn';
import {productCategories, getProductsByCategory} from '@/data/products';

export async function generateStaticParams() {
  return productCategories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{slug: string; locale: string}>;
}) {
  const {slug, locale} = await params;
  const category = productCategories.find((c) => c.slug === slug);
  
  if (!category) {
    return {
      title: 'Product Category Not Found',
    };
  }

  return {
    title: locale === 'ar' ? category.nameAr : category.name,
  };
}

export default async function ProductCategoryPage({
  params
}: {
  params: Promise<{slug: string; locale: string}>;
}) {
  const {slug, locale} = await params;
  const t = await getTranslations('products');
  const category = productCategories.find((c) => c.slug === slug);
  const products = getProductsByCategory(slug);

  if (!category) {
    notFound();
  }

  return (
    <>
      <Hero
        title={locale === 'ar' ? category.nameAr : category.name}
        subtitle="Comprehensive range of high-quality pipes"
        image={`/images/products/category-${slug}.jpg`}
      />

      <section className="py-20 bg-charcoal-900">
        <div className="container mx-auto px-4">
          {products.length > 0 ? (
            <>
              <SectionHeader
                title={`${locale === 'ar' ? category.nameAr : category.name} - Products`}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    title={locale === 'ar' ? product.nameAr : product.name}
                    description={
                      locale === 'ar'
                        ? product.descriptionAr
                        : product.description
                    }
                    image={product.image}
                    slug={product.slug}
                    index={index}
                  />
                ))}
              </div>
            </>
          ) : (
            <FadeIn>
              <div className="text-center py-12">
                <p className="text-lg text-gray-400">
                  Products in this category coming soon.
                </p>
              </div>
            </FadeIn>
          )}
        </div>
      </section>
    </>
  );
}

