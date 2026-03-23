import { Link } from 'react-router-dom';
import { ChevronDown, Star, Award } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: '700px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: 'scale(1.05)',
          transition: 'transform 0.1s ease-out',
        }}
      />
      {/* Gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, rgba(13,13,13,0.85) 0%, rgba(13,13,13,0.6) 50%, rgba(13,13,13,0.75) 100%)',
      }} />
      {/* Bottom fade */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '200px',
        background: 'linear-gradient(to top, #0D0D0D, transparent)',
      }} />

      {/* Decorative ring */}
      <div className="hidden-mobile" style={{
        position: 'absolute',
        width: '600px', height: '600px',
        border: '1px solid rgba(201,168,76,0.08)',
        borderRadius: '50%',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
      }} />
      <div className="hidden-mobile" style={{
        position: 'absolute',
        width: '400px', height: '400px',
        border: '1px solid rgba(201,168,76,0.12)',
        borderRadius: '50%',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
      }} />

      {/* Award badge */}
      <div style={{
        position: 'absolute', top: '120px', right: '60px',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        gap: '4px',
        animation: 'float 4s ease-in-out infinite',
      }} className="hidden-mobile">
        <div style={{
          width: '90px', height: '90px', borderRadius: '50%',
          border: '2px solid rgba(201,168,76,0.4)',
          background: 'rgba(13,13,13,0.7)',
          backdropFilter: 'blur(8px)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          gap: '2px',
        }}>
          <Award size={20} style={{ color: '#C9A84C' }} />
          <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '10px', color: '#C9A84C', textAlign: 'center', lineHeight: 1.3 }}>MICHELIN<br/>2024</span>
        </div>
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '900px', padding: '0 24px' }}>
        {/* Pre-heading */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '12px',
          marginBottom: '28px',
          animation: 'fadeInUp 0.7s ease 0.1s both',
        }}>
          <span className="decorative-line" style={{ width: '32px', height: '1px', background: '#C9A84C', display: 'inline-block' }} />
          <span style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '14px', letterSpacing: '0.4em',
            color: '#C9A84C', textTransform: 'uppercase',
          }}>Fine Dining · New York City</span>
          <span className="decorative-line" style={{ width: '32px', height: '1px', background: '#C9A84C', display: 'inline-block' }} />
        </div>

        {/* Main heading */}
        <h1 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(50px, 8vw, 96px)',
          fontWeight: 700,
          lineHeight: 1.05,
          color: '#F5EFE6',
          marginBottom: '24px',
          animation: 'fadeInUp 0.7s ease 0.25s both',
        }}>
          An Exquisite<br />
          <span style={{
            background: 'linear-gradient(135deg, #C9A84C, #E2C97E, #A07830)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Fine Dining
          </span>
          <br />
          Experience
        </h1>

        {/* Tagline */}
        <p style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(18px, 2.5vw, 26px)',
          fontStyle: 'italic',
          color: 'rgba(245,239,230,0.75)',
          marginBottom: '48px',
          animation: 'fadeInUp 0.7s ease 0.4s both',
        }}>
          Where culinary artistry meets timeless elegance in the heart of Manhattan
        </p>

        {/* Stars */}
        <div style={{
          display: 'flex', justifyContent: 'center', gap: '4px',
          marginBottom: '48px',
          animation: 'fadeInUp 0.7s ease 0.5s both',
        }}>
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} fill="#C9A84C" color="#C9A84C" />
          ))}
          <span style={{ color: 'rgba(245,239,230,0.5)', fontSize: '13px', fontFamily: 'Inter, sans-serif', marginLeft: '10px' }}>
            Michelin Starred · James Beard Award Nominated
          </span>
        </div>

        {/* CTAs */}
        <div style={{
          display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap',
          animation: 'fadeInUp 0.7s ease 0.6s both',
        }}>
          <Link
            to="/reservations"
            className="shimmer-btn"
            style={{
              padding: '16px 40px',
              borderRadius: '2px',
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#0D0D0D',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            Reserve a Table
          </Link>
          <Link
            to="/menu"
            style={{
              padding: '16px 40px',
              borderRadius: '2px',
              border: '1px solid rgba(201,168,76,0.5)',
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#F5EFE6',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#C9A84C';
              e.currentTarget.style.color = '#C9A84C';
              e.currentTarget.style.background = 'rgba(201,168,76,0.08)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(201,168,76,0.5)';
              e.currentTarget.style.color = '#F5EFE6';
              e.currentTarget.style.background = 'transparent';
            }}
          >
            View Menu
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '40px', left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
        animation: 'bounce-slow 2s ease-in-out infinite',
        zIndex: 10,
      }}>
        <span style={{ fontSize: '11px', letterSpacing: '0.2em', color: 'rgba(245,239,230,0.4)', textTransform: 'uppercase', fontFamily: 'Inter, sans-serif' }}>Scroll</span>
        <ChevronDown size={18} style={{ color: '#C9A84C' }} />
      </div>

      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        @keyframes bounce-slow { 0%, 100% { transform: translateX(-50%) translateY(0); } 50% { transform: translateX(-50%) translateY(8px); } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @media (max-width: 768px) { 
          .hidden-mobile { display: none !important; }
          .decorative-line { display: none !important; }
        }
      `}</style>
    </section>
  );
}
