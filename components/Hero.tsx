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
      {/* Background Shape: 
          Mobile: Full width, less rounded 
          Desktop: Partial width with large rounded corner
      */}
      <div className="absolute inset-y-0 left-0 lg:left-[-10%] w-full lg:w-[65%] bg-slate-900 rounded-b-[60px] lg:rounded-b-none lg:rounded-r-[120px]" />
      
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center">
          
          {/* Left content */}
          <div className="text-white text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="mb-6"
            >
              <p className="text-[10px] md:text-sm font-semibold tracking-[0.3em] uppercase text-cyan-400 mb-4">
                #ThePipingPeople
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-[1.1]">
                <span className="text-white">
                  {title}
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="text-sm md:text-xl mb-8 md:mb-10 max-w-xl mx-auto lg:mx-0 text-slate-200 leading-relaxed"
            >
              {subtitle}
            </motion.p>

            {ctaText && ctaLink && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              >
                <Link href={ctaLink} className="inline-block">
                  <Button 
                    size="lg" 
                    className="text-sm md:text-base px-8 md:px-10 py-5 md:py-6 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg transition-all duration-300 active:scale-95"
                  >
                    {ctaText}
                  </Button>
                </Link>
              </motion.div>
            )}
          </div>

          {/* Right visual */}
          <div className="relative h-[250px] sm:h-[350px] lg:h-[420px] order-1 lg:order-2">
            {/* Visual Container:
                Mobile: Centered, fits screen width
                Desktop: Overhanging slightly to the left (-left-10)
            */}
            <div className="absolute left-0 lg:-left-10 top-0 w-full lg:w-[115%] h-full rounded-[24px] md:rounded-[32px] overflow-hidden shadow-2xl border border-slate-200 bg-white">
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
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}