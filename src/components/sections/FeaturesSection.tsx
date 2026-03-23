import { 
  Utensils, 
  Waves, 
  ChefHat, 
  Wine, 
  Leaf, 
  Zap, 
  Star, 
  GlassWater 
} from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import { RESTAURANT_FEATURES } from '../../data/siteData';

const ICON_MAP: Record<string, any> = {
  Utensils,
  Waves,
  ChefHat,
  Wine,
  Leaf,
  Zap,
  Star,
  GlassWater,
};

export default function FeaturesSection() {
  const doubledFeatures = [...RESTAURANT_FEATURES, ...RESTAURANT_FEATURES];

  return (
    <section style={{ padding: '80px 0', backgroundColor: '#0A0A0A', overflow: 'hidden', borderTop: '1px solid rgba(201,168,76,0.08)', borderBottom: '1px solid rgba(201,168,76,0.08)' }}>
      <AnimatedSection direction="up" style={{ textAlign: 'center', marginBottom: '48px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
          <span className="decorative-line" style={{ width: '32px', height: '1px', background: '#C9A84C' }} />
          <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '14px', letterSpacing: '0.35em', color: '#C9A84C', textTransform: 'uppercase' }}>
            Exquisite Highlights
          </span>
          <span className="decorative-line" style={{ width: '32px', height: '1px', background: '#C9A84C' }} />
        </div>
      </AnimatedSection>

      {/* Scrolling ticker */}
      <div style={{ overflow: 'hidden', position: 'relative' }}>
        {/* Fade edges */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: '120px', zIndex: 2,
          background: 'linear-gradient(to right, #0A0A0A, transparent)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: '120px', zIndex: 2,
          background: 'linear-gradient(to left, #0A0A0A, transparent)',
          pointerEvents: 'none',
        }} />

        <div className="ticker-track" style={{
          display: 'flex', gap: '60px', width: 'max-content',
          animation: 'ticker 35s linear infinite',
          willChange: 'transform',
        }}>
          {doubledFeatures.map((feature, i) => {
            const IconComponent = ICON_MAP[feature.icon] || Star;
            return (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: '16px',
                whiteSpace: 'nowrap',
              }}>
                <IconComponent size={20} style={{ color: '#C9A84C', opacity: 0.8 }} />
                <span style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '20px',
                  color: 'rgba(245,239,230,0.8)',
                  letterSpacing: '0.04em',
                  fontWeight: 500,
                }}>
                  {feature.text}
                </span>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(201,168,76,0.3)', flexShrink: 0 }} />
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (max-width: 640px) {
          .decorative-line { display: none !important; }
        }
      `}</style>
    </section>
  );
}
