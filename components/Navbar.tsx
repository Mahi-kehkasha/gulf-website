'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Menu, X, ChevronDown } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import MegaMenu from './MegaMenu';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { services } from '@/data/services';
import { productCategories } from '@/data/products';
import { industries } from '@/data/industries';

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hidden pages: Gallery, Careers, Certificates
  const navItems = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/about`, label: t('about') },
    { href: `/${locale}/experience`, label: t('experience') },
    { href: `/${locale}/faq`, label: t('faq') },
    { href: `/${locale}/contact`, label: t('contact') },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md border-b border-slate-200'
          : 'bg-white border-b border-slate-200'
      }`}
    >
      {/* Top info bar (visual only, no behavior change) */}
      <div className="hidden lg:block bg-cyan-50 border-b border-slate-200">
        <div className="container mx-auto px-4 h-10 flex items-center justify-between text-xs font-medium text-slate-700">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-500" />
              <span className="tracking-wide uppercase">
                {/* Retain existing meaning by keeping this generic helper text */}
                {t('support')}
              </span>
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <button className="underline-offset-4 hover:underline text-slate-800">
              E-Brochure
            </button>
            <button className="underline-offset-4 hover:underline text-slate-800">
              LinkedIn
            </button>
            <button className="underline-offset-4 hover:underline text-slate-800">
              Google Map
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <Link 
            href={`/${locale}`} 
            className="flex items-center space-x-3 group transition-transform duration-300 hover:scale-105"
          >
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.svg"
                alt="Gulf Pipes Logo"
                width={200}
                height={64}
                className="h-12 lg:h-16 w-auto transition-all duration-300 group-hover:brightness-110"
                priority
              />
              <div className="hidden sm:flex flex-col leading-tight">
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-slate-500">
                  The Piping People
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.slice(0, 2).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-slate-800 hover:text-cyan-700 transition-all duration-300 relative group px-3 py-2 rounded-md"
              >
                {item.label}
                <span className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <MegaMenu />
            {navItems.slice(2).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-slate-800 hover:text-cyan-700 transition-all duration-300 relative group px-3 py-2 rounded-md"
              >
                {item.label}
                <span className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <LanguageSwitcher />
            <Link href={`/${locale}/contact`}>
              <Button className="ml-4 rounded-full bg-slate-900 hover:bg-black text-white px-7 py-2 text-sm font-semibold shadow-md">
                {t('contactNow')}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-charcoal-800 bg-charcoal-900"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-3 px-3 text-sm font-semibold text-gray-200 hover:text-primary-400 hover:bg-charcoal-800 rounded-lg transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-charcoal-800 mt-4">
                <Link
                  href={`/${locale}/services`}
                  className="block py-3 px-3 text-sm font-semibold text-gray-200 hover:text-primary-400 hover:bg-charcoal-800 rounded-lg transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('services')}
                </Link>
                <Link
                  href={`/${locale}/products`}
                  className="block py-3 px-3 text-sm font-semibold text-gray-200 hover:text-primary-400 hover:bg-charcoal-800 rounded-lg transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('products')}
                </Link>
                <Link
                  href={`/${locale}/industries`}
                  className="block py-3 px-3 text-sm font-semibold text-gray-200 hover:text-primary-400 hover:bg-charcoal-800 rounded-lg transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('industries')}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

