import {notFound} from 'next/navigation';
import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import FadeIn from '@/components/FadeIn';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {getServiceBySlug, services} from '@/data/services';

export const dynamic = 'force-dynamic';

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{slug: string; locale: string}>;
}) {
  const {slug, locale} = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: locale === 'ar' ? service.nameAr : service.name,
  };
}

export default async function ServiceDetailPage({
  params
}: {
  params: Promise<{slug: string; locale: string}>;
}) {
  const {slug, locale} = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Hero
        title={locale === 'ar' ? service.nameAr : service.name}
        subtitle={
          locale === 'ar'
            ? service.descriptionAr
            : service.description
        }
        image={service.image}
      />

      <section className="py-20 bg-charcoal-900">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                {locale === 'ar'
                  ? service.descriptionAr
                  : service.description}
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <FadeIn delay={0.2}>
              <Card className="border-charcoal-800 hover:border-primary-500/20 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-gray-100">Capabilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary-500 mr-2 mt-1">•</span>
                        <span className="text-gray-300">
                          {locale === 'ar'
                            ? service.detailsAr[index]
                            : detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </FadeIn>

            {service.equipment && service.equipment.length > 0 && (
              <FadeIn delay={0.3}>
                <Card className="border-charcoal-800 hover:border-primary-500/20 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-gray-100">Equipment & Facilities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.equipment.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary-500 mr-2 mt-1">•</span>
                          <span className="text-gray-300">
                            {locale === 'ar'
                              ? service.equipmentAr?.[index]
                              : item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </FadeIn>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

