import { Heart, Award } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';

const timeline = [
  { year: '2012', event: 'The Ivory Table begins as a private chef service in Negombo, blending local spice heritage with French finesse.' },
  { year: '2015', event: 'Official opening of the boutique restaurant on Porutota Road, overlooking the Indian Ocean.' },
  { year: '2018', event: 'Named "Best Fine Dining in Sri Lanka" at the South Asian Travel Awards.' },
  { year: '2021', event: 'Launch of the "Ocean-to-Table" initiative, sourcing 90% of ingredients within a 50km radius.' },
  { year: '2024', event: 'Comprehensive redesign of our space and menu, celebrating a decade of culinary evolution.' },
];

const team = [
  { name: 'Chef Julian Vasseur', role: 'Executive Chef & Founder', img: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=600&q=80', desc: 'A visionary pioneer of modern gastronomy, Julian masterfully intertwines heritage techniques.' },
  { name: 'Isabelle Chen', role: 'Pastry Architect', img: 'https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?w=600&q=80', desc: 'Crafting delicate, artful desserts that celebrate the island\'s tropical fruits and precious spices.' },
  { name: 'Aruna Perera', role: 'Master Sommelier', img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&q=80', desc: 'Curating a world-class cellar that pairs perfectly with the bold, adventurous palate of our cuisine.' },
];

export default function About() {
  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh', backgroundColor: '#0D0D0D', color: '#F5EFE6' }}>
      {/* Premium Hero */}
      <section style={{ position: 'relative', height: '80vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1920&q=85" 
            alt="Dining Atmosphere" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, #0D0D0D)' }} />
        </div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <AnimatedSection direction="up">
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <span style={{ width: '48px', height: '1px', background: '#C9A84C' }} />
              <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '16px', letterSpacing: '0.4em', color: '#C9A84C', textTransform: 'uppercase' }}>Our Heritage</span>
            </div>
            <h1 style={{ 
              fontFamily: 'Playfair Display, serif', 
              fontSize: 'clamp(50px, 8vw, 100px)', 
              fontWeight: 700, 
              lineHeight: 1.1, 
              marginBottom: '32px' 
            }}>
              Where Art Meets <br />
              <span style={{ color: '#C9A84C', fontStyle: 'italic' }}>The Indian Ocean</span>
            </h1>
            <p style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '18px', 
              maxWidth: '600px', 
              lineHeight: 1.8, 
              color: 'rgba(245,239,230,0.7)' 
            }}>
              Born from a passion for perfection, The Ivory Table is more than a restaurant — it's a sanctuary for the senses in the heart of Negombo.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story & Image Section */}
      <section style={{ padding: '140px 0', backgroundColor: '#111111' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '100px', alignItems: 'center' }}>
          <AnimatedSection direction="left">
            <div className="reveal-img-wrap" style={{ borderRadius: '2px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.5)' }}>
              <img 
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1000&q=80" 
                alt="Chef at Work" 
                style={{ width: '100%', display: 'block' }}
              />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
              <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80" alt="Detail 1" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80" alt="Detail 2" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '48px', fontWeight: 700, marginBottom: '32px' }}>
              A Legacy of <span style={{ color: '#C9A84C' }}>Excellence</span>
            </h2>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: 1.9, color: 'rgba(245,239,230,0.6)' }}>
              <p style={{ marginBottom: '24px' }}>
                At The Ivory Table, we believe that fine dining is a conversation between the chef, the guest, and the environment. Our journey began over a decade ago with a simple mission: to elevate Sri Lanka's culinary landscape through precision, artistry, and a deep respect for local bounty.
              </p>
              <p style={{ marginBottom: '40px' }}>
                We work closely with Negombo's artisanal fishermen and hill-country spice farmers to ensure every ingredient on your plate tells an authentic story of our island home, refined through time-honored techniques.
              </p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
              <div>
                <Award size={32} style={{ color: '#C9A84C', marginBottom: '16px' }} />
                <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', marginBottom: '8px' }}>Award Winning</h4>
                <p style={{ fontSize: '14px', color: 'rgba(245,239,230,0.5)' }}>Recognized internationally for our commitment to quality.</p>
              </div>
              <div>
                <Heart size={32} style={{ color: '#C9A84C', marginBottom: '16px' }} />
                <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', marginBottom: '8px' }}>Crafted with Heart</h4>
                <p style={{ fontSize: '14px', color: 'rgba(245,239,230,0.5)' }}>Every dish is a testament to our team's shared passion.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline Section - More Attractive */}
      <section style={{ padding: '120px 0', background: 'linear-gradient(to bottom, #111, #0D0D0D)' }}>
        <div className="container">
          <AnimatedSection direction="up" style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '42px', fontWeight: 700 }}>Our Journey</h2>
          </AnimatedSection>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0', maxWidth: '900px', margin: '0 auto' }}>
            {timeline.map((item, i) => (
              <AnimatedSection key={i} direction={i % 2 === 0 ? "left" : "right"} delay={i * 0.1}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '40px', 
                  padding: '40px 0',
                  borderBottom: i < timeline.length - 1 ? '1px solid rgba(201,168,76,0.1)' : 'none'
                }}>
                  <div style={{ width: '80px', flexShrink: 0 }}>
                    <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', color: '#C9A84C', fontWeight: 700 }}>{item.year}</span>
                  </div>
                  <div style={{ height: '40px', width: '1px', background: '#C9A84C', opacity: 0.3 }} />
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: 'rgba(245,239,230,0.7)', lineHeight: 1.6 }}>{item.event}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Cards - Enhanced */}
      <section style={{ padding: '140px 0', backgroundColor: '#0D0D0D' }}>
        <div className="container">
          <AnimatedSection direction="up" style={{ textAlign: 'center', marginBottom: '80px' }}>
             <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '14px', letterSpacing: '0.4em', color: '#C9A84C', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>Masterminds</span>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '48px', fontWeight: 700 }}>Meet Our Team</h2>
          </AnimatedSection>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            {team.map((member, i) => (
              <AnimatedSection key={i} direction="up" delay={i * 0.15}>
                <div style={{ 
                  background: 'rgba(255,255,255,0.015)', 
                  border: '1px solid rgba(201,168,76,0.1)', 
                  padding: '40px 32px', 
                  textAlign: 'center',
                  transition: 'all 0.3s ease'
                }}
                className="team-card"
                >
                  <div style={{ 
                    width: '140px', height: '140px', 
                    margin: '0 auto 24px', 
                    borderRadius: '50%', 
                    overflow: 'hidden',
                    border: '3px solid rgba(201,168,76,0.2)' 
                  }}>
                    <img src={member.img} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 600, marginBottom: '8px' }}>{member.name}</h3>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '20px' }}>{member.role}</div>
                  <p style={{ fontSize: '14px', color: 'rgba(245,239,230,0.5)', lineHeight: 1.7 }}>{member.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .team-card:hover {
          background: rgba(255,255,255,0.03) !important;
          border-color: rgba(201,168,76,0.3) !important;
          transform: translateY(-10px);
        }
        .reveal-img-wrap img {
          transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        .reveal-img-wrap:hover img {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
}
