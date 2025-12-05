import {getTranslations} from 'next-intl/server';
import SectionHeader from '@/components/SectionHeader';
import FadeIn from '@/components/FadeIn';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import Link from 'next/link';
import {Button} from '@/components/ui/button';
import Image from 'next/image';
import {services} from '@/data/services';

export const dynamic = 'force-dynamic';

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const t = await getTranslations({locale});

  return {
    title: 'Our Services - GPSS',
    description: 'Comprehensive industrial services including steel fabrication, pipeline construction, and more.',
  };
}

export default async function ServicesPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const t = await getTranslations('common');

  return (
    <section className="py-20 bg-charcoal-900">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Our Services"
          subtitle="Comprehensive industrial services backed by expertise and quality"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.1}>
              <Card className="h-full flex flex-col group hover:shadow-lg transition-all duration-300 border-charcoal-800 hover:border-primary-500/30">
                <div className="relative h-48 w-full overflow-hidden rounded-t-lg bg-charcoal-800">
                  <Image
                    src={service.image}
                    alt={locale === 'ar' ? service.nameAr : service.name}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-200 group-hover:text-primary-400 transition-colors">
                    {locale === 'ar' ? service.nameAr : service.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {locale === 'ar'
                      ? service.descriptionAr
                      : service.description}
                  </p>
                  <ul className="space-y-1 text-sm text-gray-400">
                    {service.details.slice(0, 3).map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary-500 mr-2">•</span>
                        <span className="line-clamp-1">
                          {locale === 'ar'
                            ? service.detailsAr[i]
                            : detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <div className="p-6 pt-0">
                  <Link href={`/${locale}/services/${service.slug}`}>
                    <Button variant="outline" className="w-full">
                      {t('viewDetails')}
                    </Button>
                  </Link>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

