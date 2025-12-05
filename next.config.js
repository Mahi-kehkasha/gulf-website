const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Netlify Next.js plugin handles optimization automatically
  images: {
    unoptimized: false,
    remotePatterns: [],
  },
};

module.exports = withNextIntl(nextConfig);

