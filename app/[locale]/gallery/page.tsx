import {getTranslations} from 'next-intl/server';
import SectionHeader from '@/components/SectionHeader';
import FadeIn from '@/components/FadeIn';
import Image from 'next/image';

export const dynamic = 'force-dynamic';

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const t = await getTranslations({locale});

  return {
    title: t('gallery.title'),
    description: t('gallery.subtitle'),
  };
}

export default async function GalleryPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const t = await getTranslations('gallery');

  const galleryImages = Array.from({length: 12}, (_, i) => ({
    id: i + 1,
    src: `/images/gallery/gallery-${i + 1}.jpg`,
    alt: `Gallery image ${i + 1}`,
  }));

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeader
          title={t('title')}
          subtitle={t('subtitle')}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <FadeIn key={image.id} delay={index * 0.05}>
              <div className="relative h-64 w-full overflow-hidden rounded-lg group cursor-pointer">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

