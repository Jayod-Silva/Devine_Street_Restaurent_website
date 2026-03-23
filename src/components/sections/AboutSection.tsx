import { Link } from 'react-router-dom';
import AnimatedSection from '../ui/AnimatedSection';

export default function AboutSection() {
  return (
    <section style={{ padding: '160px 0', backgroundColor: '#0D0D0D', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '100px', alignItems: 'center' }}>
          
          {/* Left Column: Image with Overlapping Box */}
          <div style={{ position: 'relative' }}>
            <AnimatedSection direction="left">
              <div style={{ 
                position: 'relative',
                borderRadius: '2px',
                overflow: 'hidden',
                boxShadow: '0 30px 100px rgba(0,0,0,0.6)'
              }}>
                <img
                  src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2070&auto=format&fit=crop"
                  alt="Our Atmosphere"
                  style={{ 
                    width: '100%', 
                    height: '600px', 
                    objectFit: 'cover', 
                    display: 'block',
                    filter: 'grayscale(1)',
                    transition: 'all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)'
                  }}
                  className="story-img"
                />
              </div>

              {/* Overlapping Years Box */}
              <div className="overlapping-box" style={{
                position: 'absolute',
                bottom: '-30px',
                right: '-30px',
                background: '#111111',
                padding: '40px',
                border: '1px solid rgba(201,168,76,0.15)',
                zIndex: 2,
                textAlign: 'left',
              }}>
                <div style={{ 
                  fontFamily: 'Playfair Display, serif', 
                  fontSize: '48px', 
                  color: '#C9A84C', 
                  lineHeight: 1,
                  fontWeight: 700,
                  marginBottom: '8px'
                }}>
                  15+
                </div>
                <div style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '11px', 
                  letterSpacing: '0.2em', 
                  textTransform: 'uppercase', 
                  color: 'rgba(245,239,230,0.6)' 
                }}>
                  Years of Excellence
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column: Refined Typography */}
          <div>
            <AnimatedSection direction="right" delay={0.2}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '40px' }}>
                <span className="decorative-line" style={{ width: '32px', height: '1px', background: '#C9A84C', display: 'inline-block', verticalAlign: 'middle', marginRight: '12px' }} />
                <span style={{ 
                  fontFamily: 'Cormorant Garamond, serif', 
                  fontSize: '14px', 
                  letterSpacing: '0.4em', 
                  color: '#C9A84C', 
                  textTransform: 'uppercase',
                  display: 'inline-block',
                  verticalAlign: 'middle'
                }}>
                  Our Story
                </span>
                
                <div style={{ position: 'relative' }}>
                  <h2 style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: 'clamp(48px, 6vw, 68px)',
                    fontWeight: 700,
                    lineHeight: 1.1,
                    color: '#F5EFE6',
                    marginBottom: '0',
                    letterSpacing: '-0.02em'
                  }}>
                    A Symphony of
                  </h2>
                  <h2 style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: 'clamp(48px, 6vw, 68px)',
                    fontWeight: 400,
                    fontStyle: 'italic',
                    lineHeight: 1.1,
                    color: '#C9A84C',
                    marginTop: '4px'
                  }}>
                    Flavors & Aesthetics
                  </h2>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', marginBottom: '56px' }}>
                <p style={{
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '17px',
                  lineHeight: '1.9', 
                  color: 'rgba(245,239,230,0.7)',
                  fontWeight: 400
                }}>
                  Founded in the heart of Negombo, The Ivory Table was born from a passion for exceptional culinary artistry and exquisite design. We believe that dining is not just about sustenance, but an experience that engages all the senses.
                </p>
                <p style={{
                  fontFamily: 'Inter, sans-serif', 
                  fontSize: '17px',
                  lineHeight: '1.9', 
                  color: 'rgba(245,239,230,0.5)',
                  fontWeight: 400
                }}>
                  Our chefs meticulously source the finest tropical ingredients, crafting each dish with precision and artistry. Step into our world, where the ambiance is as rich as our flavors and every meal is a celebration.
                </p>
              </div>

              <Link to="/about" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#C9A84C',
                textDecoration: 'none',
                fontWeight: 600,
                transition: 'all 0.3s ease'
              }}
              className="discover-link"
              >
                Discover More
                <span style={{ fontSize: '18px' }}>›</span>
              </Link>
            </AnimatedSection>
          </div>

        </div>
      </div>

      <style>{`
        .discover-link:hover {
          color: #F5EFE6;
          gap: 20px;
        }
        .story-img:hover {
          transform: scale(1.04);
          filter: grayscale(0) !important;
        }
        @media (max-width: 991px) {
          .story-img {
            height: 450px !important;
          }
          .about-grid { gap: 60px !important; }
        }
        @media (max-width: 768px) {
          .overlapping-box {
            position: relative !important;
            bottom: 0 !important;
            right: 0 !important;
            margin: 20px 0 0 0 !important;
            width: 100% !important;
            padding: 30px !important;
          }
          .about-grid { gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
