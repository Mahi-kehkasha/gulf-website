import { getTranslations } from 'next-intl/server';
import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import FadeIn from '@/components/FadeIn';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import Image from 'next/image';
import { Target, Eye, Heart, Award as AwardIcon } from 'lucide-react';
import { projects } from '@/data/experience';

export const dynamic = 'force-dynamic';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return {
    title: t('about.hero.title'),
    description: t('about.description.text')
  };
}

export default async function AboutPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('about');

  return (
    <>
      {/* Hero Section */}
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
              <h2 className="text-3xl font-bold mb-6 text-gray-100">
                {t('description.title')}
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                {t('description.text')}
              </p>

              {/* Founder Message */}
              <div className="mt-12 p-8 bg-charcoal-950 rounded-lg border-l-4 border-primary-500">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="relative w-48 h-48 rounded-lg overflow-hidden bg-charcoal-800 border-2 border-primary-500/20">
                      <Image
                        src="/images/Ceo.jpeg"
                        alt="Founder"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold mb-4 text-gray-100">
                      {t('founder.title')}
                    </h3>
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

      {/* Mission & Vision */}
      <section className="py-20 bg-charcoal-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <FadeIn>
              <Card className="border-charcoal-800 hover:border-primary-500/20 transition-all">
                <CardHeader>
                  <Target className="h-10 w-10 text-primary-500 mb-4" />
                  <CardTitle className="text-2xl text-gray-100">
                    {t('mission.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{t('mission.text')}</p>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card className="border-charcoal-800 hover:border-primary-500/20 transition-all">
                <CardHeader>
                  <Eye className="h-10 w-10 text-primary-500 mb-4" />
                  <CardTitle className="text-2xl text-gray-100">
                    {t('vision.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{t('vision.text')}</p>
                </CardContent>
              </Card>
            </FadeIn>
          </div>

          {/* Values */}
          <SectionHeader title={t('values.title')} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FadeIn>
              <Card className="text-center border-charcoal-800 group">
                <CardContent className="pt-6">
                  <Heart className="h-12 w-12 text-primary-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-100">
                    {t('values.integrity')}
                  </h3>
                  <p className="text-sm text-gray-400">
                    Honest, ethical business practices
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.1}>
              <Card className="text-center border-charcoal-800 group">
                <CardContent className="pt-6">
                  <AwardIcon className="h-12 w-12 text-primary-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-100">
                    {t('values.quality')}
                  </h3>
                  <p className="text-sm text-gray-400">
                    Products meeting global standards
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card className="text-center border-charcoal-800 group">
                <CardContent className="pt-6">
                  <Target className="h-12 w-12 text-primary-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-100">
                    {t('values.commitment')}
                  </h3>
                  <p className="text-sm text-gray-400">
                    Dedicated to excellence
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE SECTION ================= */}
      <section className="py-20 bg-charcoal-900">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Experience"
            subtitle="Successful projects delivered across various industries"
          />

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-charcoal-800 border-b-2 border-primary-500/20">
                  <th className="p-4 text-left font-semibold text-gray-100">
                    #
                  </th>
                  <th className="p-4 text-left font-semibold text-gray-100">
                    Client
                  </th>
                  <th className="p-4 text-left font-semibold text-gray-100">
                    Job Description
                  </th>
                  <th className="p-4 text-left font-semibold text-gray-100">
                    Period
                  </th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr
                    key={project.id}
                    className="border-b border-charcoal-800 hover:bg-charcoal-800 transition-all duration-300"
                  >
                    <td className="p-4 font-medium text-primary-400">
                      {project.id}
                    </td>
                    <td className="p-4 text-gray-300">{project.client}</td>
                    <td className="p-4 text-gray-400">
                      {locale === 'ar'
                        ? project.jobDescriptionAr
                        : project.jobDescription}
                    </td>
                    <td className="p-4 text-gray-500">
                      {project.from} - {project.to}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* =============== END EXPERIENCE ================= */}
    </>
  );
}
