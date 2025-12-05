'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'ar', name: 'العربية' },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: string) => {
    // Replace the locale in the pathname
    const segments = pathname.split('/');
    if (segments[1] === locale) {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }
    const newPath = segments.join('/');
    router.push(newPath);
    router.refresh();
  };

  const currentLanguage = languages.find((lang) => lang.code === locale);

  return (
    <Select value={locale} onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-[140px] border border-charcoal-800 bg-charcoal-900 hover:bg-charcoal-800 text-gray-200 hover:text-primary-400 transition-colors">
        <Globe className={`h-4 w-4 text-primary-400 ${locale === 'ar' ? 'ml-2' : 'mr-2'}`} />
        <SelectValue>{currentLanguage?.name}</SelectValue>
      </SelectTrigger>
      <SelectContent className="bg-charcoal-900 border-charcoal-800">
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code} className="text-gray-200 hover:text-primary-400 hover:bg-charcoal-800">
            {lang.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

