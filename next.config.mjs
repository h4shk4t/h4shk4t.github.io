/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable build checks for production quality
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Enable image optimization for better performance
  images: {
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Performance optimizations (swcMinify is default in Next.js 15)
  compress: true,
}

export default nextConfig
