import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Tech Portfolio — h4shk4t'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  const title = 'Tech Portfolio — h4shk4t'
  const subtitle = 'AI • Cybersecurity • CTF • Infrastructure'
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #000 0%, #0a0a0a 100%)',
          color: 'white',
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 800 }}>{title}</div>
        <div style={{ fontSize: 28, marginTop: 12, opacity: 0.8 }}>{subtitle}</div>
      </div>
    ),
    {
      ...size,
    }
  )
}



