/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'ui.aceternity.com'],
  },
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
