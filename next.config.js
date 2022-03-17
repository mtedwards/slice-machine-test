/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: ['images.prismic.io'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
