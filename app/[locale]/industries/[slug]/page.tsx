import {getTranslations, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import FadeIn from '@/components/FadeIn';
import {Card, CardContent} from '@/components/ui/card';
import ProductCard from '@/components/ProductCard';
import {getIndustryBySlug, industries} from '@/data/industries';
import {getProductsByCategory} from '@/data/products';

export const dynamic = 'force-dynamic';

export async function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{slug: string; locale: string}>;
}) {
  const {slug, locale} = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return {
      title: 'Industry Not Found',
    };
  }

  return {
    title: locale === 'ar' ? industry.nameAr : industry.name,
  };
}

export default async function IndustryDetailPage({
  params
}: {
  params: Promise<{slug: string; locale: string}>;
}) {
  const {slug, locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations('industries.detail');
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  const relatedProducts = industry.relatedProducts
    .map((catSlug) => getProductsByCategory(catSlug))
    .flat();

  return (
    <>
      <Hero
        title={locale === 'ar' ? industry.nameAr : industry.name}
        subtitle={
          locale === 'ar'
            ? industry.descriptionAr
            : industry.description
        }
        image={`/images/industries/hero-${slug}.jpg`}
      />

      <section className="py-20 bg-charcoal-900">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-100">{t('overview')}</h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                {locale === 'ar' ? industry.overviewAr : industry.overview}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Card className="mb-12 border-charcoal-800 hover:border-primary-500/20 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-gray-100">{t('applications')}</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {(locale === 'ar'
                    ? industry.applicationsAr
                    : industry.applications
                  ).map((app, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <span className="text-primary-500">•</span>
                      <span className="text-gray-300">{app}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </FadeIn>

          {relatedProducts.length > 0 && (
            <FadeIn delay={0.3}>
              <SectionHeader title={t('products')} />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.slice(0, 6).map((product, index) => (
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
            </FadeIn>
          )}
        </div>
      </section>
    </>
  );
}

