import {getTranslations} from 'next-intl/server';
import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import ProductCard from '@/components/ProductCard';
import IndustryCard from '@/components/IndustryCard';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import FadeIn from '@/components/FadeIn';
import {Button} from '@/components/ui/button';
import {Card, CardContent} from '@/components/ui/card';
import Link from 'next/link';
import {productCategories} from '@/data/products';
import {industries} from '@/data/industries';
import {testimonials} from '@/data/testimonials';
import {CheckCircle, Award, Users, Truck, Package, DollarSign} from 'lucide-react';

export const dynamic = 'force-dynamic';

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const t = await getTranslations({locale});

  return {
    title: t('home.hero.title'),
    description: t('home.hero.subtitle'),
  };
}

export default async function HomePage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const t = await getTranslations('home');
  const tProducts = await getTranslations('products');

  const displayTestimonials = testimonials.map((testimonial) => ({
    ...testimonial,
    text: locale === 'ar' ? testimonial.textAr : testimonial.text,
  }));

  return (
    <>
      <Hero
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        ctaText={t('hero.cta')}
        ctaLink={`/${locale}/products`}
        video="/videos/hero-background.mp4"
      />

      {/* Company Intro */}
      <section className="py-20 bg-charcoal-900">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block mb-4">
                <div className="w-20 h-1 bg-primary-500 rounded-full"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-100">
                {t('intro.title')}
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                {t('intro.description')}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-charcoal-950">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Services"
            subtitle="Comprehensive industrial services backed by expertise"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Steel Fabrication',
              'Cross Country Pipeline Construction',
              'Above Ground Pipeline Services',
              'Steel Structural Work',
              'Painting and Blasting',
              'Shut Down & Maintenance',
              'Hydro Testing Services',
              'Project Management',
            ].slice(0, 8).map((service, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <Link href={`/${locale}/services`}>
                  <Card className="h-full group hover:shadow-lg transition-all duration-300 border border-charcoal-800 hover:border-primary-500/30 cursor-pointer overflow-hidden relative bg-charcoal-900">
                    <div className="relative h-40 w-full overflow-hidden rounded-t-lg bg-gradient-to-br from-charcoal-800 to-charcoal-900">
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-transparent to-transparent"></div>
                    </div>
                    <CardContent className="p-6 text-center relative z-10">
                      <div className="mb-4 flex justify-center">
                        <div className="w-12 h-12 rounded-full bg-charcoal-800 group-hover:bg-primary-600 flex items-center justify-center transition-all duration-300 transform group-hover:scale-110">
                          <div className="w-2 h-2 rounded-full bg-primary-500 group-hover:bg-white transition-colors duration-300"></div>
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-200 group-hover:text-primary-400 transition-colors duration-300">
                        {service}
                      </h3>
                    </CardContent>
                  </Card>
                </Link>
              </FadeIn>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href={`/${locale}/services`}>
              <Button size="lg">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <section className="py-20 bg-charcoal-900">
        <div className="container mx-auto px-4">
          <SectionHeader
            title={t('products.title')}
            subtitle={t('products.subtitle')}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.slice(0, 6).map((category, index) => (
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
          <div className="text-center mt-12">
            <Link href={`/${locale}/products`}>
              <Button size="lg">{tProducts('viewAll')}</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Overview */}
      <section className="py-20 bg-charcoal-950">
        <div className="container mx-auto px-4">
          <SectionHeader
            title={t('industries.title')}
            subtitle={t('industries.subtitle')}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.slice(0, 6).map((industry, index) => (
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

      {/* Why Choose Us */}
      <section className="py-20 bg-charcoal-900">
        <div className="container mx-auto px-4">
          <SectionHeader
            title={t('whyChoose.title')}
            subtitle={t('whyChoose.subtitle')}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FadeIn delay={0.1}>
              <div className="text-center p-6">
                <Package className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  {t('whyChoose.inventory.title')}
                </h3>
                <p className="text-gray-600">
                  {t('whyChoose.inventory.description')}
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="text-center p-6 group hover:bg-charcoal-800 rounded-xl transition-all duration-300 cursor-pointer hover:shadow-lg border border-transparent hover:border-primary-500/20">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-charcoal-800 group-hover:bg-primary-600 mb-4 transition-all duration-300 transform group-hover:scale-110">
                  <Award className="h-8 w-8 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-200 group-hover:text-primary-400 transition-colors duration-300">
                  {t('whyChoose.supply.title')}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {t('whyChoose.supply.description')}
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="text-center p-6 group hover:bg-charcoal-800 rounded-xl transition-all duration-300 cursor-pointer hover:shadow-lg border border-transparent hover:border-primary-500/20">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-charcoal-800 group-hover:bg-primary-600 mb-4 transition-all duration-300 transform group-hover:scale-110">
                  <Truck className="h-8 w-8 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-200 group-hover:text-primary-400 transition-colors duration-300">
                  {t('whyChoose.delivery.title')}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {t('whyChoose.delivery.description')}
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="text-center p-6 group hover:bg-charcoal-800 rounded-xl transition-all duration-300 cursor-pointer hover:shadow-lg border border-transparent hover:border-primary-500/20">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-charcoal-800 group-hover:bg-primary-600 mb-4 transition-all duration-300 transform group-hover:scale-110">
                  <Users className="h-8 w-8 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-200 group-hover:text-primary-400 transition-colors duration-300">
                  {t('whyChoose.expertise.title')}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {t('whyChoose.expertise.description')}
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.5}>
              <div className="text-center p-6 group hover:bg-charcoal-800 rounded-xl transition-all duration-300 cursor-pointer hover:shadow-lg border border-transparent hover:border-primary-500/20">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-charcoal-800 group-hover:bg-primary-600 mb-4 transition-all duration-300 transform group-hover:scale-110">
                  <CheckCircle className="h-8 w-8 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-200 group-hover:text-primary-400 transition-colors duration-300">
                  {t('whyChoose.quality.title')}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {t('whyChoose.quality.description')}
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.6}>
              <div className="text-center p-6 group hover:bg-charcoal-800 rounded-xl transition-all duration-300 cursor-pointer hover:shadow-lg border border-transparent hover:border-primary-500/20">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-charcoal-800 group-hover:bg-primary-600 mb-4 transition-all duration-300 transform group-hover:scale-110">
                  <DollarSign className="h-8 w-8 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-200 group-hover:text-primary-400 transition-colors duration-300">
                  {t('whyChoose.pricing.title')}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {t('whyChoose.pricing.description')}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-charcoal-950">
        <div className="container mx-auto px-4">
          <SectionHeader
            title={t('testimonials.title')}
            subtitle={t('testimonials.subtitle')}
          />
          <div className="max-w-4xl mx-auto">
            <TestimonialsCarousel testimonials={displayTestimonials} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-charcoal-900 via-charcoal-950 to-charcoal-900 text-white relative overflow-hidden border-t border-charcoal-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,125,255,0.05),transparent_70%)]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <FadeIn>
            <div className="inline-block mb-4">
              <div className="w-20 h-1 bg-primary-500 rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-100">
              {t('cta.title')}
            </h2>
            <p className="text-xl mb-10 text-gray-400">{t('cta.subtitle')}</p>
            <Link href={`/${locale}/contact`}>
              <Button size="lg" variant="secondary" className="transition-all duration-300">
                {t('cta.button')}
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

