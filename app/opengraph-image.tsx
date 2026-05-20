import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Links Air & Electrical — Brisbane Air Conditioning & Electrical Services';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    <div
      style={{
        background: 'linear-gradient(135deg, #0B3D6B 0%, #1B6EAA 100%)',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '60px 80px',
        fontFamily: 'sans-serif',
        color: 'white',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '10px',
        }}
      >
        <div
          style={{
            background: '#7AC943',
            borderRadius: '12px',
            width: '56px',
            height: '56px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '28px',
            fontWeight: 700,
          }}
        >
          LA
        </div>
        <span style={{ fontSize: '28px', fontWeight: 700 }}>Links Air & Electrical</span>
      </div>
      <div
        style={{
          fontSize: '14px',
          fontWeight: 700,
          letterSpacing: '0.15em',
          color: '#7AC943',
          textTransform: 'uppercase' as const,
          marginBottom: '16px',
        }}
      >
        Trusted Local Sparkies · A/C Specialists
      </div>
      <div
        style={{
          fontSize: '52px',
          fontWeight: 700,
          lineHeight: 1.15,
          marginBottom: '20px',
          maxWidth: '900px',
        }}
      >
        Electrical & air, <span style={{ color: '#7AC943' }}>done right.</span>
      </div>
      <div
        style={{
          fontSize: '22px',
          opacity: 0.85,
          marginBottom: '32px',
        }}
      >
        Brisbane · Gold Coast · Logan · Ipswich · Redlands · Moreton Bay
      </div>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <div
          style={{
            background: '#ED1C24',
            borderRadius: '40px',
            padding: '12px 32px',
            fontSize: '20px',
            fontWeight: 700,
            color: 'white',
          }}
        >
          Call 0468 432 538
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '18px' }}>
          <span style={{ color: '#fbbf24' }}>★★★★★</span>
          <span>5.0 — 200+ Google Reviews</span>
        </div>
        <div
          style={{
            fontSize: '14px',
            opacity: 0.6,
          }}
        >
          Lic. 312045C · ARC AU45821
        </div>
      </div>
    </div>,
    { ...size },
  );
}
