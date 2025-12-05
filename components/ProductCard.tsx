'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
  index?: number;
}

export default function ProductCard({
  title,
  description,
  image,
  slug,
  index = 0,
}: ProductCardProps) {
  const t = useTranslations('common');
  const locale = useLocale();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full flex flex-col group hover:shadow-lg transition-all duration-300 border border-charcoal-800 hover:border-primary-500/30 overflow-hidden bg-charcoal-900">
        <div className="relative h-48 w-full overflow-hidden rounded-t-lg bg-gradient-to-br from-charcoal-800 to-charcoal-900">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <div className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
              View
            </div>
          </div>
        </div>
        <CardHeader className="pb-3">
          <h3 className="text-xl font-semibold text-gray-200 group-hover:text-primary-400 transition-colors duration-300">
            {title}
          </h3>
        </CardHeader>
        <CardContent className="flex-grow pb-4">
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">{description}</p>
        </CardContent>
        <CardFooter className="pt-0">
          <Link href={`/${locale}/products/${slug}`} className="w-full">
            <Button 
              variant="outline" 
              className="w-full group/btn border-primary-500/30 hover:border-primary-500 hover:bg-primary-500/10 text-gray-200 hover:text-primary-400 transition-all duration-300"
            >
              <span className="flex items-center justify-center gap-2">
                {t('viewDetails')}
                <motion.span
                  className="inline-block"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  →
                </motion.span>
              </span>
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

