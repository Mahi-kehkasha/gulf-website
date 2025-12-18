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
    <section className="relative overflow-hidden bg-sky-50">
      <div className="absolute inset-y-0 left-[-10%] w-[65%] bg-slate-900 rounded-r-[120px]" />
      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left content - dark panel */}
          <div className="text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="mb-6"
            >
              <p className="text-xs md:text-sm font-semibold tracking-[0.3em] uppercase text-cyan-400 mb-4">
                #ThePipingPeople
              </p>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                <span className="text-white">
                  {title}
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="text-base md:text-xl mb-10 max-w-xl text-slate-200 leading-relaxed"
            >
              {subtitle}
            </motion.p>

            {ctaText && ctaLink && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link href={ctaLink} className="inline-block">
                  <Button 
                    size="lg" 
                    className="text-sm md:text-base px-10 py-6 rounded-full bg-slate-900 hover:bg-black text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {ctaText}
                  </Button>
                </Link>
              </motion.div>
            )}
          </div>

          {/* Right visual - building image / video */}
          <div className="relative h-64 sm:h-80 lg:h-[420px]">
            <div className="absolute -left-10 top-6 w-[120%] h-[110%] rounded-[32px] overflow-hidden shadow-2xl border border-slate-200 bg-white">
              {useVideo ? (
                <video
                  ref={videoRef}
                  src={useVideo}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <Image
                  src={image || '/images/Oil & Gas Industries.png'}
                  alt="Hero visual"
                  fill
                  className="object-cover"
                  priority
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

