import {getTranslations} from 'next-intl/server';
import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import FadeIn from '@/components/FadeIn';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import Image from 'next/image';
import {Target, Eye, Heart, Award as AwardIcon} from 'lucide-react';

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const t = await getTranslations({locale});

  return {
    title: t('about.hero.title'),
    description: t('about.description.text'),
  };
}

export default async function AboutPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const t = await getTranslations('about');

  return (
    <>
      <Hero
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        image="/images/about/about-hero.jpg"
      />

      {/* Company Description */}
      <section className="py-20 bg-charcoal-900">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-gray-100">{t('description.title')}</h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                {t('description.text')}
              </p>
              
              {/* Founder's Message */}
              <div className="mt-12 p-8 bg-charcoal-950 rounded-lg border-l-4 border-primary-500">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                      <div className="relative w-48 h-48 rounded-lg overflow-hidden bg-charcoal-800 border-2 border-primary-500/20">
                        <Image
                          src="/images/Ceo.jpeg"
                          alt="Founder"
                          fill
                          className="object-cover"
                        />
                      </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold mb-4 text-gray-100">{t('founder.title')}</h3>
                    <p className="text-lg text-gray-300 leading-relaxed italic">
                      &ldquo;{t('founder.text')}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-charcoal-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <FadeIn>
              <Card className="border-charcoal-800 hover:border-primary-500/20 transition-all duration-300">
                <CardHeader>
                  <Target className="h-10 w-10 text-primary-500 mb-4" />
                  <CardTitle className="text-2xl text-gray-100">{t('mission.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{t('mission.text')}</p>
                </CardContent>
              </Card>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Card className="border-charcoal-800 hover:border-primary-500/20 transition-all duration-300">
                <CardHeader>
                  <Eye className="h-10 w-10 text-primary-500 mb-4" />
                  <CardTitle className="text-2xl text-gray-100">{t('vision.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{t('vision.text')}</p>
                </CardContent>
              </Card>
            </FadeIn>
          </div>

          <SectionHeader title={t('values.title')} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FadeIn delay={0.1}>
              <Card className="text-center border-charcoal-800 hover:border-neon-500/30 transition-all duration-300 group">
                <CardContent className="pt-6">
                  <Heart className="h-12 w-12 text-primary-500 mx-auto mb-4 transition-all duration-300" />
                  <h3 className="text-xl font-semibold mb-2 text-gray-100 group-hover:text-primary-400 transition-colors">{t('values.integrity')}</h3>
                  <p className="text-sm text-gray-400">Honest, ethical business practices</p>
                </CardContent>
              </Card>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Card className="text-center border-charcoal-800 hover:border-neon-500/30 transition-all duration-300 group">
                <CardContent className="pt-6">
                  <AwardIcon className="h-12 w-12 text-primary-500 mx-auto mb-4 transition-all duration-300" />
                  <h3 className="text-xl font-semibold mb-2 text-gray-100 group-hover:text-primary-400 transition-colors">{t('values.quality')}</h3>
                  <p className="text-sm text-gray-400">Products meeting global standards</p>
                </CardContent>
              </Card>
            </FadeIn>
            <FadeIn delay={0.3}>
              <Card className="text-center border-charcoal-800 hover:border-neon-500/30 transition-all duration-300 group">
                <CardContent className="pt-6">
                  <Target className="h-12 w-12 text-primary-500 mx-auto mb-4 transition-all duration-300" />
                  <h3 className="text-xl font-semibold mb-2 text-gray-100 group-hover:text-primary-400 transition-colors">{t('values.commitment')}</h3>
                  <p className="text-sm text-gray-400">Dedicated to excellence</p>
                </CardContent>
              </Card>
            </FadeIn>
            <FadeIn delay={0.4}>
              <Card className="text-center border-charcoal-800 hover:border-neon-500/30 transition-all duration-300 group">
                <CardContent className="pt-6">
                  <Eye className="h-12 w-12 text-primary-500 mx-auto mb-4 transition-all duration-300" />
                  <h3 className="text-xl font-semibold mb-2 text-gray-100 group-hover:text-primary-400 transition-colors">{t('values.customer')}</h3>
                  <p className="text-sm text-gray-400">Solutions around client needs</p>
                </CardContent>
              </Card>
            </FadeIn>
            <FadeIn delay={0.5}>
              <Card className="text-center border-charcoal-800 hover:border-neon-500/30 transition-all duration-300 group">
                <CardContent className="pt-6">
                  <Target className="h-12 w-12 text-primary-500 mx-auto mb-4 transition-all duration-300" />
                  <h3 className="text-xl font-semibold mb-2 text-gray-100 group-hover:text-primary-400 transition-colors">{t('values.innovation')}</h3>
                  <p className="text-sm text-gray-400">Modern technologies & best practices</p>
                </CardContent>
              </Card>
            </FadeIn>
            <FadeIn delay={0.6}>
              <Card className="text-center border-charcoal-800 hover:border-neon-500/30 transition-all duration-300 group">
                <CardContent className="pt-6">
                  <AwardIcon className="h-12 w-12 text-primary-500 mx-auto mb-4 transition-all duration-300" />
                  <h3 className="text-xl font-semibold mb-2 text-gray-100 group-hover:text-primary-400 transition-colors">{t('values.safety')}</h3>
                  <p className="text-sm text-gray-400">Prioritizing safe operations</p>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-charcoal-900">
        <div className="container mx-auto px-4">
          <SectionHeader title={t('timeline.title')} />
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <FadeIn>
                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold transition-all duration-300">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-100 group-hover:text-primary-400 transition-colors">{t('timeline.founded')}</h3>
                    <p className="text-gray-400">1990</p>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.1}>
                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold transition-all duration-300">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-100 group-hover:text-primary-400 transition-colors">{t('timeline.expansion')}</h3>
                    <p className="text-gray-400">2000</p>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold transition-all duration-300">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-100 group-hover:text-neon-400 transition-colors">{t('timeline.certification')}</h3>
                    <p className="text-gray-400">2010</p>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold transition-all duration-300">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-100 group-hover:text-neon-400 transition-colors">{t('timeline.innovation')}</h3>
                    <p className="text-gray-400">2020</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Placeholder */}
      <section className="py-20 bg-charcoal-950">
        <div className="container mx-auto px-4">
          <SectionHeader title={t('certificates.title')} />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="relative h-48 w-full">
                  <Image
                    src={`/images/certificates/certificate-${i}.jpg`}
                    alt={`Certificate ${i}`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

