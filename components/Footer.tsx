import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Facebook, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  const footerLinks = [
    { href: `/${locale}/about`, label: 'About Us' },
    { href: `/${locale}/services`, label: 'Services' },
    { href: `/${locale}/products`, label: 'Products' },
    { href: `/${locale}/industries`, label: 'Industries' },
    { href: `/${locale}/experience`, label: 'Experience' },
    { href: `/${locale}/contact`, label: 'Contact' },
  ];

  return (
      <footer className="bg-charcoal-950 text-gray-400 mt-20 border-t border-charcoal-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Image
              src="/images/logo.svg"
              alt="Gulf Pipes Logo"
              width={200}
              height={70}
              className="w-[180px] h-auto mb-4"
            />
            <p className="text-gray-400 text-sm">{t('description')}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('quickLinks')}</h4>
            <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('contact')}</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start space-x-2">
                  <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary-400" />
                  <span>Madina Munawara Street
P.O Box 1213, Al Jubail - 31951.KSA</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 flex-shrink-0 text-primary-400" />
                  <span>+966 13 363 0061</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 flex-shrink-0 text-primary-400" />
                  <span>info@gulfpipesupply.com</span>
                </li>
              </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('follow')}</h4>
            <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="h-6 w-6" />
                </a>
            </div>
          </div>
        </div>

          <div className="border-t border-charcoal-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Gulf Pipe Supply & Services (GPSS). {t('rights')}</p>
        </div>
      </div>
    </footer>
  );
}

