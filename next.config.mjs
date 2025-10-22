/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages
  output: 'export',
  
  // Enable build checks for production quality
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Enable image optimization for better performance
  // Note: unoptimized must be true for static export
  images: {
    unoptimized: true,
  },
  // Performance optimizations (swcMinify is default in Next.js 15)
  compress: true,
}

export default nextConfig
