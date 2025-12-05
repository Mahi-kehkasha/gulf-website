import {getTranslations} from 'next-intl/server';
import SectionHeader from '@/components/SectionHeader';
import FadeIn from '@/components/FadeIn';
import Image from 'next/image';

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const t = await getTranslations({locale});

  return {
    title: t('certificates.title'),
    description: t('certificates.subtitle'),
  };
}

export default async function CertificatesPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const t = await getTranslations('certificates');

  const certificates = Array.from({length: 8}, (_, i) => ({
    id: i + 1,
    src: `/images/certificates/certificate-${i + 1}.jpg`,
    alt: `Certificate ${i + 1}`,
  }));

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeader
          title={t('title')}
          subtitle={t('subtitle')}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <FadeIn key={cert.id} delay={index * 0.1}>
              <div className="relative h-64 w-full overflow-hidden rounded-lg">
                <Image
                  src={cert.src}
                  alt={cert.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

