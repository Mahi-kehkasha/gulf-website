'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  image?: string;
  video?: string;
}

export default function Hero({
  title,
  subtitle,
  ctaText,
  ctaLink,
  image,
  video,
}: HeroProps) {
  const t = useTranslations('common');
  const videoRef = useRef<HTMLVideoElement>(null);

  // Default video for homepage, use image for other pages if provided
  const defaultVideo = '/videos/hero-background.mp4';
  const useVideo = video !== undefined ? video : (!image ? defaultVideo : null);

  useEffect(() => {
    if (videoRef.current && useVideo) {
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, [useVideo]);

  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden bg-charcoal-900">
      <div className="absolute inset-0 z-0">
        {useVideo ? (
          <video
            ref={videoRef}
            src={useVideo}
            className="absolute inset-0 w-full h-full object-cover opacity-40"
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          image && (
            <Image
              src={image}
              alt="Hero background"
              fill
              className="object-cover opacity-30"
              priority
            />
          )
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/80 via-charcoal-900/90 to-charcoal-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,125,255,0.05),transparent_70%)]"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-white via-primary-200 to-primary-400 bg-clip-text text-transparent">
              {title}
            </span>
          </h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-300 leading-relaxed"
        >
          {subtitle}
        </motion.p>
        {ctaText && ctaLink && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href={ctaLink} className="inline-block">
              <Button 
                size="lg" 
                className="text-lg px-10 py-7 rounded-full bg-primary-600 hover:bg-primary-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {ctaText}
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                    className="inline-block"
                  >
                    →
                  </motion.span>
                </span>
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}

