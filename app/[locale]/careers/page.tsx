import {getTranslations} from 'next-intl/server';
import SectionHeader from '@/components/SectionHeader';
import FadeIn from '@/components/FadeIn';
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from '@/components/ui/card';
import {Button} from '@/components/ui/button';

export const dynamic = 'force-dynamic';

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const t = await getTranslations({locale});

  return {
    title: t('careers.title'),
    description: t('careers.subtitle'),
  };
}

export default async function CareersPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const t = await getTranslations('careers');

  const jobPositions = [
    {
      id: 1,
      title: 'Senior Sales Engineer',
      titleAr: 'مهندس مبيعات أول',
      department: 'Sales',
      departmentAr: 'المبيعات',
      location: 'Dubai, UAE',
      locationAr: 'دبي، الإمارات',
    },
    {
      id: 2,
      title: 'Quality Control Manager',
      titleAr: 'مدير مراقبة الجودة',
      department: 'Quality',
      departmentAr: 'الجودة',
      location: 'Riyadh, Saudi Arabia',
      locationAr: 'الرياض، المملكة العربية السعودية',
    },
    {
      id: 3,
      title: 'Production Supervisor',
      titleAr: 'مشرف الإنتاج',
      department: 'Production',
      departmentAr: 'الإنتاج',
      location: 'Doha, Qatar',
      locationAr: 'الدوحة، قطر',
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeader
          title={t('title')}
          subtitle={t('subtitle')}
        />

        <FadeIn>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-600 text-center">
              {t('intro')}
            </p>
          </div>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">{t('positions.title')}</h3>
          {jobPositions.length > 0 ? (
            <div className="space-y-4">
              {jobPositions.map((job, index) => (
                <FadeIn key={job.id} delay={index * 0.1}>
                  <Card>
                    <CardHeader>
                      <CardTitle>
                        {locale === 'ar' ? job.titleAr : job.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <p className="text-gray-600">
                          <span className="font-semibold">Department:</span>{' '}
                          {locale === 'ar' ? job.departmentAr : job.department}
                        </p>
                        <p className="text-gray-600">
                          <span className="font-semibold">Location:</span>{' '}
                          {locale === 'ar' ? job.locationAr : job.location}
                        </p>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button>{t('positions.apply')}</Button>
                    </CardFooter>
                  </Card>
                </FadeIn>
              ))}
            </div>
          ) : (
            <FadeIn>
              <Card>
                <CardContent className="py-12 text-center">
                  <p className="text-gray-600">{t('positions.noPositions')}</p>
                </CardContent>
              </Card>
            </FadeIn>
          )}
        </div>
      </div>
    </section>
  );
}

