import {getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';
import Image from 'next/image';
import FadeIn from '@/components/FadeIn';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {getProductItem} from '@/data/products';
import {Download} from 'lucide-react';

export const dynamic = 'force-dynamic';

export async function generateMetadata({
  params
}: {
  params: Promise<{slug: string; item: string; locale: string}>;
}) {
  const {slug, item, locale} = await params;
  const productItem = getProductItem(slug, item);

  if (!productItem) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: locale === 'ar' ? productItem.nameAr : productItem.name,
  };
}

export default async function ProductDetailPage({
  params
}: {
  params: Promise<{slug: string; item: string; locale: string}>;
}) {
  const {slug, item, locale} = await params;
  const t = await getTranslations('products.detail');
  const productItem = getProductItem(slug, item);

  if (!productItem) {
    notFound();
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <FadeIn>
            <div className="relative h-[500px] w-full">
              <Image
                src={productItem.image}
                alt={locale === 'ar' ? productItem.nameAr : productItem.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div>
              <h1 className="text-4xl font-bold mb-4">
                {locale === 'ar' ? productItem.nameAr : productItem.name}
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                {locale === 'ar'
                  ? productItem.descriptionAr
                  : productItem.description}
              </p>

              {productItem.specifications && (
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>{t('specifications')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {Object.entries(productItem.specifications).map(
                        ([key, value]) => (
                          <div
                            key={key}
                            className="flex justify-between py-2 border-b"
                          >
                            <span className="font-medium">{key}:</span>
                            <span className="text-gray-600">{value}</span>
                          </div>
                        )
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}

              <Button size="lg" className="w-full">
                <Download className="h-4 w-4 mr-2" />
                {t('download')}
              </Button>
            </div>
          </FadeIn>
        </div>

        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle>{t('description')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                {locale === 'ar'
                  ? productItem.descriptionAr
                  : productItem.description}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

