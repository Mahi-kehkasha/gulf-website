'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { services } from '@/data/services';
import { productCategories } from '@/data/products';
import { industries } from '@/data/industries';

interface MegaMenuProps {
  label: string;
  items: Array<{
    slug: string;
    name: string;
    nameAr: string;
    description?: string;
    descriptionAr?: string;
  }>;
  basePath: string;
}

function MegaMenuDropdown({ label, items, basePath }: MegaMenuProps) {
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  return (
    <div
      ref={menuRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        className="flex items-center space-x-1 text-sm font-semibold text-slate-800 hover:text-blue-600 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-slate-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{label}</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[800px] bg-white shadow-2xl border border-slate-200 rounded-xl p-8 z-50"
          >
            <div className="grid grid-cols-3 gap-4">
              {items.slice(0, 6).map((item) => (
                <Link
                  key={item.slug}
                  href={`/${locale}${basePath}/${item.slug}`}
                  className="group p-4 rounded-lg hover:bg-blue-50/50 transition-all duration-300 border border-transparent hover:border-blue-100"
                  onClick={() => setIsOpen(false)}
                >
                  <h3 className="font-bold text-slate-900 group-hover:text-blue-600 mb-1 text-base transition-colors">
                    {locale === 'ar' ? item.nameAr : item.name}
                  </h3>
                  {item.description && (
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {locale === 'ar' && item.descriptionAr
                        ? item.descriptionAr
                        : item.description}
                    </p>
                  )}
                </Link>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-slate-100 flex justify-between items-center">
              <Link
                href={`/${locale}${basePath}`}
                className="text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-2 group"
                onClick={() => setIsOpen(false)}
              >
                {locale === 'ar' ? 'عرض الكل' : 'View All'}
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function MegaMenu() {
  const locale = useLocale();
  const t = useTranslations('nav');

  return (
    <div className="hidden lg:flex items-center space-x-2">
      <MegaMenuDropdown
        label={t('services')}
        items={services.map((s) => ({
          slug: s.slug,
          name: s.name,
          nameAr: s.nameAr,
          description: s.description,
          descriptionAr: s.descriptionAr,
        }))}
        basePath="/services"
      />
      <MegaMenuDropdown
        label={t('products')}
        items={productCategories.map((p) => ({
          slug: p.slug,
          name: p.name,
          nameAr: p.nameAr,
          description: p.description || '',
          descriptionAr: p.descriptionAr || '',
        }))}
        basePath="/products"
      />
      <MegaMenuDropdown
        label={t('industries')}
        items={industries.map((i) => ({
          slug: i.slug,
          name: i.name,
          nameAr: i.nameAr,
          description: i.description,
          descriptionAr: i.descriptionAr,
        }))}
        basePath="/industries"
      />
    </div>
  );
}