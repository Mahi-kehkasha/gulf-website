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
    { href: `/${locale}/contact`, label: 'Contact' }
  ];

  return (
    // Changed: Background to white/blue gradient, text to black, and border color
    <footer className="relative z-10 bg-gradient-to-b from-white to-blue-50 text-slate-900 mt-20 border-t border-blue-100">
      <div className="container mx-auto px-4 py-14">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company Info */}
          <div>
            <Image
              src="/images/logo.svg"
              alt="Gulf Pipe Supply & Services"
              width={220}
              height={80}
              className="mb-5" // Removed brightness-110 for better visibility on light background
              priority
            />
            <p className="text-sm leading-relaxed text-slate-600">
              {t('description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-4">
              {t('quickLinks')}
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-blue-600 font-medium transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-4">
              {t('contact')}
            </h4>

            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
                <span>
                  Madina Munawara Street<br />
                  P.O Box 1213, Al Jubail – 31951, KSA
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-600" />
                <span>+966 13 363 0061</span>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-600" />
                <span>info@gulfpipesupply.com</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-4">
              {t('follow')}
            </h4>

            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="p-2 rounded-full bg-blue-100 hover:bg-blue-600 hover:text-white transition group"
              >
                <Facebook className="h-5 w-5 text-blue-600 group-hover:text-white" />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="p-2 rounded-full bg-blue-100 hover:bg-blue-600 hover:text-white transition group"
              >
                <Linkedin className="h-5 w-5 text-blue-600 group-hover:text-white" />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="p-2 rounded-full bg-blue-100 hover:bg-blue-600 hover:text-white transition group"
              >
                <Twitter className="h-5 w-5 text-blue-600 group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-200 mt-10 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Gulf Pipe Supply & Services (GPSS). {t('rights')}
        </div>

      </div>
    </footer>
  );
}