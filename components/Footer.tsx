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
<footer className="relative z-10 bg-gradient-to-b from-[#0b1220] to-[#020617] text-gray-300 mt-20 border-t border-white/10">
<div className="bg-transparent"></div>
      <div className="container mx-auto px-4 py-14">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company Info */}
          <div>
            <Image
              src="/images/logo.svg"
              alt="Gulf Pipe Supply & Services"
              width={220}
              height={80}
              className="mb-5 brightness-110"
              priority
            />
            <p className="text-sm leading-relaxed text-gray-400">
              {t('description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              {t('quickLinks')}
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-primary-400 transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              {t('contact')}
            </h4>

            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary-400 mt-0.5" />
                <span>
                  Madina Munawara Street<br />
                  P.O Box 1213, Al Jubail – 31951, KSA
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary-400" />
                <span>+966 13 363 0061</span>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary-400" />
                <span>info@gulfpipesupply.com</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              {t('follow')}
            </h4>

            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="p-2 rounded-full bg-white/5 hover:bg-primary-500 transition"
              >
                <Facebook className="h-5 w-5 text-white" />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="p-2 rounded-full bg-white/5 hover:bg-primary-500 transition"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="p-2 rounded-full bg-white/5 hover:bg-primary-500 transition"
              >
                <Twitter className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Gulf Pipe Supply & Services (GPSS). {t('rights')}
        </div>

      </div>
    </footer>
  );
}
