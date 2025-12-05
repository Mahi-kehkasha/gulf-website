import {getTranslations} from 'next-intl/server';
import SectionHeader from '@/components/SectionHeader';
import IndustryCard from '@/components/IndustryCard';
import {industries} from '@/data/industries';

export const dynamic = 'force-dynamic';

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const t = await getTranslations({locale});

  return {
    title: t('industries.title'),
    description: t('industries.subtitle'),
  };
}

export default async function IndustriesPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const t = await getTranslations('industries');

  return (
    <section className="py-20 bg-charcoal-900">
      <div className="container mx-auto px-4">
        <SectionHeader
          title={t('title')}
          subtitle={t('subtitle')}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <IndustryCard
              key={industry.slug}
              title={locale === 'ar' ? industry.nameAr : industry.name}
              description={
                locale === 'ar'
                  ? industry.descriptionAr
                  : industry.description
              }
              image={industry.image}
              slug={industry.slug}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

