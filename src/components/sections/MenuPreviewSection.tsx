import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import { MENU_ITEMS } from '../../data/siteData';

const TABS = ['starters', 'mains', 'desserts', 'cocktails'] as const;
const TAB_LABELS: Record<typeof TABS[number], string> = {
  starters: 'Starters',
  mains: 'Main Courses',
  desserts: 'Desserts',
  cocktails: 'Cocktails',
};

type Tab = typeof TABS[number];

export default function MenuPreviewSection() {
  const [activeTab, setActiveTab] = useState<Tab>('mains');

  const items = MENU_ITEMS[activeTab];

  return (
    <section style={{ padding: '120px 0', backgroundColor: '#111111', position: 'relative' }}>
      {/* Background pattern */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(201,168,76,0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(107,26,42,0.05) 0%, transparent 50%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative' }}>
        {/* Header */}
        <AnimatedSection direction="up" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '16px' }}>
            <span className="decorative-line" style={{ width: '32px', height: '1px', background: '#C9A84C' }} />
            <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '14px', letterSpacing: '0.35em', color: '#C9A84C', textTransform: 'uppercase' }}>
              Culinary Journey
            </span>
            <span className="decorative-line" style={{ width: '32px', height: '1px', background: '#C9A84C' }} />
          </div>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 700,
            color: '#F5EFE6', marginBottom: '16px', lineHeight: 1.2,
          }}>
            Our Menu
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: 'rgba(245,239,230,0.5)', maxWidth: '520px', margin: '0 auto' }}>
            Crafted from the finest seasonal ingredients, each dish is a masterwork of flavor, texture, and artistry.
          </p>
        </AnimatedSection>

        {/* Tabs */}
        <AnimatedSection direction="up" delay={0.1} style={{ display: 'flex', justifyContent: 'center', marginBottom: '56px' }}>
          <div className="menu-tabs-container" style={{
            display: 'flex', justifyContent: 'center', gap: '8px', 
            flexWrap: 'wrap', width: '100%', maxWidth: '900px'
          }}>
            {TABS.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="menu-tab-btn"
                style={{
                  padding: '12px 28px',
                  borderRadius: '2px',
                  border: '1px solid',
                  borderColor: activeTab === tab ? '#C9A84C' : 'rgba(201,168,76,0.2)',
                  background: activeTab === tab ? '#C9A84C' : 'transparent',
                  color: activeTab === tab ? '#0D0D0D' : 'rgba(245,239,230,0.6)',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '12px', letterSpacing: '0.12em',
                  textTransform: 'uppercase', fontWeight: activeTab === tab ? 600 : 400,
                  cursor: 'pointer', transition: 'all 0.3s',
                }}
              >
                {TAB_LABELS[tab]}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Menu items grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '60px' }}>
          {items.map((item, idx) => (
            <AnimatedSection key={item.id} direction="up" delay={idx * 0.08}>
              <div
                style={{
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(201,168,76,0.1)',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderColor = 'rgba(201,168,76,0.35)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.4)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(201,168,76,0.1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Image */}
                <div className="img-zoom-wrap" style={{ position: 'relative', height: '200px' }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    loading="lazy"
                  />
                  {/* Overlay */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(13,13,13,0.7) 0%, transparent 60%)',
                  }} />
                  {/* Badge */}
                  {'badge' in item && item.badge && (
                    <div style={{
                      position: 'absolute', top: '12px', left: '12px',
                      padding: '4px 10px',
                      backgroundColor: '#C9A84C',
                      borderRadius: '2px',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '10px', fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: '#0D0D0D',
                    }}>
                      {item.badge}
                    </div>
                  )}
                  {/* Dietary tags */}
                  {item.tags && item.tags.length > 0 && (
                    <div style={{ position: 'absolute', bottom: '10px', left: '10px', display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                      {item.tags.map(tag => (
                        <span key={tag} style={{
                          padding: '3px 8px',
                          background: 'rgba(13,13,13,0.75)',
                          border: '1px solid rgba(201,168,76,0.3)',
                          borderRadius: '2px',
                          fontSize: '10px', letterSpacing: '0.05em',
                          color: '#C9A84C',
                          fontFamily: 'Inter, sans-serif',
                          backdropFilter: 'blur(4px)',
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div style={{ padding: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                    <h3 style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '19px', fontWeight: 600,
                      color: '#F5EFE6', lineHeight: 1.3,
                      flex: 1, paddingRight: '12px',
                    }}>
                      {item.name}
                    </h3>
                    <span style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '22px', fontWeight: 600,
                      color: '#C9A84C', whiteSpace: 'nowrap',
                    }}>
                      LKR {item.price.toLocaleString()}
                    </span>
                  </div>
                  <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '13px', lineHeight: 1.7,
                    color: 'rgba(245,239,230,0.5)',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}>
                    {item.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection direction="up" delay={0.3} style={{ textAlign: 'center' }}>
          <Link
            to="/menu"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              padding: '16px 40px',
              border: '1px solid rgba(201,168,76,0.4)',
              borderRadius: '2px',
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px', fontWeight: 500,
              letterSpacing: '0.15em', textTransform: 'uppercase',
              color: '#F5EFE6', textDecoration: 'none',
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#C9A84C';
              e.currentTarget.style.color = '#C9A84C';
              e.currentTarget.style.background = 'rgba(201,168,76,0.05)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)';
              e.currentTarget.style.color = '#F5EFE6';
              e.currentTarget.style.background = 'transparent';
            }}
          >
            Explore Full Menu <ArrowRight size={16} />
          </Link>
        </AnimatedSection>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .menu-tab-btn { padding: 8px 16px !important; font-size: 11px !important; flex: 1 1 40% !important; }
          .menu-tabs-container { gap: 8px !important; }
        }
      `}</style>
    </section>
  );
}
