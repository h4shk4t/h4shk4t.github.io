import { NextResponse } from 'next/server'

export async function GET() {
  const manifest = {
    name: 'Tech Portfolio — h4shk4t',
    short_name: 'Portfolio',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/placeholder-logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }

  return NextResponse.json(manifest)
}



