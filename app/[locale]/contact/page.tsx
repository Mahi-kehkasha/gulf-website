import {getTranslations} from 'next-intl/server';
import SectionHeader from '@/components/SectionHeader';
import ContactForm from '@/components/ContactForm';
import FadeIn from '@/components/FadeIn';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {MapPin, Phone, Mail, Clock} from 'lucide-react';

export const dynamic = 'force-dynamic';

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const t = await getTranslations({locale});

  return {
    title: t('contact.title'),
    description: t('contact.subtitle'),
  };
}

export default async function ContactPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const t = await getTranslations('contact');

  return (
    <section className="py-20 bg-charcoal-900">
      <div className="container mx-auto px-4">
        <SectionHeader
          title={t('title')}
          subtitle={t('subtitle')}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <FadeIn>
            <ContactForm />
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="space-y-6">
              <Card className="border-charcoal-800 hover:border-primary-500/20 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-gray-100">{t('info.title')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1 text-gray-200">{t('info.address')}</p>
                      <p className="text-gray-400">
                        Madina Munawara Street
P.O Box 1213, Al Jubail - 31951, KSA
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-primary-400 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1 text-gray-200">{t('info.phone')}</p>
                      <p className="text-gray-400">+966 13 363 0061</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-primary-400 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1 text-gray-200">{t('info.email')}</p>
                      <p className="text-gray-400">info@gulfpipesupply.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-primary-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1 text-gray-200">{t('info.hours')}</p>
                      <p className="text-gray-400">
                        Monday - Friday: 8:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-charcoal-800 hover:border-primary-500/20 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-gray-100">{t('map')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-charcoal-800 rounded-lg flex items-center justify-center border border-charcoal-700">
                    <p className="text-gray-500">Google Maps Placeholder</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

