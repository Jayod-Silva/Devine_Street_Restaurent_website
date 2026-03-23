import { Star, Quote } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import { TESTIMONIALS } from '../../data/siteData';

export default function TestimonialsSection() {
  // Take first 3 for the grid
  const displayedTestimonials = TESTIMONIALS.slice(0, 3);

  return (
    <section style={{ padding: '120px 0', backgroundColor: '#0D0D0D', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative */}
      <div style={{
        position: 'absolute', top: '-100px', left: '-100px',
        width: '400px', height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,168,76,0.03) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        <AnimatedSection direction="up" style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '16px' }}>
            <span className="decorative-line" style={{ width: '32px', height: '1px', background: '#C9A84C' }} />
            <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '14px', letterSpacing: '0.35em', color: '#C9A84C', textTransform: 'uppercase' }}>
              Guest Stories
            </span>
            <span className="decorative-line" style={{ width: '32px', height: '1px', background: '#C9A84C' }} />
          </div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 700, color: '#F5EFE6' }}>
            What Our Guests Say
          </h2>
        </AnimatedSection>

        {/* Testimonials Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
          {displayedTestimonials.map((t, i) => (
            <AnimatedSection key={t.id} direction="up" delay={i * 0.1}>
              <div style={{
                height: '100%',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(201,168,76,0.1)',
                borderRadius: '4px',
                padding: '48px 32px',
                position: 'relative',
                transition: 'all 0.4s ease',
                display: 'flex',
                flexDirection: 'column',
              }}
              className="testimonial-card"
              >
                <Quote size={32} style={{ color: 'rgba(201,168,76,0.2)', marginBottom: '24px' }} />
                
                <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="#C9A84C" color="#C9A84C" />
                  ))}
                </div>

                <p style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '20px',
                  fontStyle: 'italic',
                  lineHeight: 1.6,
                  color: 'rgba(245,239,230,0.8)',
                  marginBottom: '32px',
                  flex: 1,
                }}>
                  "{t.text}"
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: 'auto' }}>
                  <img
                    src={t.image}
                    alt={t.name}
                    style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(201,168,76,0.2)' }}
                  />
                  <div>
                    <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '15px', color: '#F5EFE6', fontWeight: 600 }}>{t.name}</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: 'rgba(245,239,230,0.4)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      {t.location}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Press logos */}
        <AnimatedSection direction="up" delay={0.4} style={{ textAlign: 'center', marginTop: '100px' }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(245,239,230,0.3)', marginBottom: '32px' }}>
            As Featured In
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '60px', flexWrap: 'wrap', alignItems: 'center', opacity: 0.5 }}>
            {['Sri Lanka Daily', 'Luxe Travel', 'Condé Nast', 'Food & Wine', 'Tatler'].map(pub => (
              <span key={pub} style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '18px',
                color: '#F5EFE6',
                fontStyle: 'italic',
                letterSpacing: '0.05em',
              }}>
                {pub}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>

      <style>{`
        .testimonial-card:hover {
          background: rgba(255,255,255,0.04) !important;
          border-color: rgba(201,168,76,0.3) !important;
          transform: translateY(-8px);
        }
      `}</style>
    </section>
  );
}
