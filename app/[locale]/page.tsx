import { getTranslations } from 'next-intl/server';
import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import ProductCard from '@/components/ProductCard';
import IndustryCard from '@/components/IndustryCard';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import FadeIn from '@/components/FadeIn';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import { productCategories } from '@/data/products';
import { industries } from '@/data/industries';
import { testimonials } from '@/data/testimonials';
import {
  CheckCircle,
  Award,
  Users,
  Truck,
  Package,
  DollarSign
} from 'lucide-react';

export const dynamic = 'force-dynamic';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return {
    title: t('home.hero.title'),
    description: t('home.hero.subtitle')
  };
}

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('home');
  const tProducts = await getTranslations('products');

  const displayTestimonials = testimonials.map((testimonial) => ({
    ...testimonial,
    text: locale === 'ar' ? testimonial.textAr : testimonial.text
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

      {/* ================= OUR CLIENTS ================= */}
      <section className="py-20 bg-charcoal-950">
        <div className="container mx-auto px-4">
          <div className="rounded-3xl bg-charcoal-900/95 border border-charcoal-800 px-6 py-12 md:px-10 md:py-14 lg:px-16 lg:py-16 overflow-hidden relative">
            <div className="pointer-events-none absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,rgba(15,118,178,0.35),transparent_55%),radial-gradient(circle_at_bottom,rgba(15,23,42,0.9),transparent_60%)]" />

            <div className="relative z-10 text-center mb-10 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Our Clients <span className="text-cyan-400">.</span>
              </h2>
              <p className="mt-4 text-sm md:text-base text-gray-400 max-w-3xl mx-auto">
                Brands we stock are approved by major end-users across the globe.
              </p>
            </div>

            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {Array.from({ length: 9 }).map((_, index) => (
                <div
                  key={index}
                  className="h-20 md:h-24 rounded-xl bg-white flex items-center justify-center shadow-md"
                >
                  <div className="w-20 h-10 md:w-24 md:h-12 flex items-center justify-center">
                    <Image
                      src={`/images/brand/${index + 1}.png`}
                      alt={`Brand ${index + 1}`}
                      width={96}
                      height={48}
                      className="object-contain"
                      priority={index < 5}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* =============== END BRANDS ================== */}

      {/* Services */}
      <section className="py-20 bg-charcoal-900">
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
              'Project Management'
            ].map((service, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <Link href={`/${locale}/services`}>
                  <Card className="h-full bg-charcoal-900 border border-charcoal-800 hover:border-primary-500/30 transition">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-lg font-semibold text-gray-200">
                        {service}
                      </h3>
                    </CardContent>
                  </Card>
                </Link>
              </FadeIn>
            ))}
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
    </>
  );
}
