'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from './ui/card';
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';

interface IndustryCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
  index?: number;
}

export default function IndustryCard({
  title,
  description,
  image,
  slug,
  index = 0,
}: IndustryCardProps) {
  const locale = useLocale();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/${locale}/industries/${slug}`}>
        <Card className="h-full group hover:shadow-lg transition-all duration-300 border border-charcoal-800 hover:border-primary-500/30 cursor-pointer overflow-hidden bg-charcoal-900">
          <div className="relative h-64 w-full overflow-hidden rounded-t-lg bg-gradient-to-br from-charcoal-800 to-charcoal-900">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 via-charcoal-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/5 transition-all duration-300"></div>
            <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <div className="bg-charcoal-900/95 backdrop-blur-sm px-4 py-2 rounded-lg border border-primary-500/30">
                <p className="text-sm text-primary-400 font-medium">Learn More →</p>
              </div>
            </div>
          </div>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-200 group-hover:text-primary-400 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">{description}</p>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}

