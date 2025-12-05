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
          ? 'bg-charcoal-900/98 backdrop-blur-md shadow-dark border-b border-charcoal-800'
          : 'bg-charcoal-900/95'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          <Link 
            href={`/${locale}`} 
            className="flex items-center space-x-3 group transition-transform duration-300 hover:scale-105"
          >
            <Image
              src="/images/logo.svg"
              alt="Gulf Pipes Logo"
              width={250}
              height={80}
              className="h-20 w-auto transition-all duration-300 group-hover:brightness-110"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.slice(0, 2).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-gray-200 hover:text-primary-400 transition-all duration-300 relative group px-3 py-2 rounded-lg hover:bg-charcoal-800"
              >
                {item.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-[calc(100%-0.75rem)]"></span>
              </Link>
            ))}
            <MegaMenu />
            {navItems.slice(2).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-gray-200 hover:text-primary-400 transition-all duration-300 relative group px-3 py-2 rounded-lg hover:bg-charcoal-800"
              >
                {item.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-[calc(100%-0.75rem)]"></span>
              </Link>
            ))}
            <LanguageSwitcher />
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

