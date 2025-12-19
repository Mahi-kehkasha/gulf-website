'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import MegaMenu from './MegaMenu';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'framer-motion';

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

  const navItems = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/about`, label: t('about') },
    { href: `/${locale}/contact`, label: t('contact') },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white shadow-md border-b border-slate-200'
          : 'bg-white border-b border-slate-200'
        }`}
    >
      {/* Top info bar */}
      <div className="hidden lg:block bg-cyan-50 border-b border-slate-200">
        <div className="container mx-auto px-4 h-10 flex items-center justify-between text-xs font-medium text-slate-700">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-500" />
              <span className="tracking-wide uppercase">
                {/* Ensure 'support' exists in en.json */}
                {t('support')}
              </span>
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <Link href="#" className="hover:text-cyan-600 transition-colors">E-Brochure</Link>
            <Link href="#" className="hover:text-cyan-600 transition-colors">LinkedIn</Link>
            <Link href="#" className="hover:text-cyan-600 transition-colors">Google Map</Link>
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
                alt="GPSS Logo"
                width={180}   // This is the base width for optimization
                height={50}  // This is the base height for optimization
                className="w-auto h-12 lg:h-14" // Add 'w-auto' here
                style={{ width: 'auto' }}     // ADD THIS LINE
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
                className="text-sm font-semibold text-slate-800 hover:text-cyan-700 transition-all relative group px-3 py-2"
              >
                {item.label}
                <span className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            <MegaMenu />

            <Link
              href={navItems[2].href}
              className="text-sm font-semibold text-slate-800 hover:text-cyan-700 transition-all relative group px-3 py-2"
            >
              {navItems[2].label}
              <span className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full" />
            </Link>

            <LanguageSwitcher />

            <Link href={`/${locale}/contact`}>
              <Button className="ml-4 rounded-full bg-slate-900 hover:bg-black text-white px-7 py-2 text-sm font-semibold shadow-md">
                {/* Ensure 'contactNow' exists in en.json */}
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
              className="text-slate-800"
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
            className="lg:hidden border-t border-slate-100 bg-white"
          >
            <div className="container mx-auto px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-3 px-3 text-base font-semibold text-slate-800 hover:text-cyan-600 hover:bg-slate-50 rounded-lg transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-slate-100 mt-4 space-y-2">
                {['services', 'products', 'industries'].map((key) => (
                  <Link
                    key={key}
                    href={`/${locale}/${key}`}
                    className="block py-3 px-3 text-base font-semibold text-slate-800 hover:text-cyan-600 hover:bg-slate-50 rounded-lg transition-all"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t(key)}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}