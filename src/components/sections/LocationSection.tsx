import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import { RESTAURANT } from '../../data/siteData';

export default function LocationSection() {
  const now = new Date();
  const hour = now.getHours();
  const isOpen = hour >= 17 && hour < 23; // rough open hours check

  return (
    <section style={{ padding: '120px 0', backgroundColor: '#111111' }}>
      <div className="container">
        <AnimatedSection direction="up" style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '16px' }}>
            <span className="decorative-line" style={{ width: '32px', height: '1px', background: '#C9A84C' }} />
            <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '14px', letterSpacing: '0.35em', color: '#C9A84C', textTransform: 'uppercase' }}>
              Visit Us
            </span>
            <span className="decorative-line" style={{ width: '32px', height: '1px', background: '#C9A84C' }} />
          </div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 700, color: '#F5EFE6' }}>
            Location & Hours
          </h2>
        </AnimatedSection>

        <div className="location-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0', border: '1px solid rgba(201,168,76,0.12)', borderRadius: '4px', overflow: 'hidden' }}>
          {/* Map embed */}
          <AnimatedSection direction="left" style={{ height: '500px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15830.4!2d79.84!3d7.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2ee9c!2sPorutota+Rd%2C+Negombo%2C+Sri+Lanka!5e0!3m2!1sen!2slk!4v1"
              width="100%"
              height="100%"
              style={{ border: 'none', display: 'block', filter: 'invert(90%) hue-rotate(180deg) brightness(0.8)' }}
              loading="lazy"
              title="The Ivory Table Location"
            />
          </AnimatedSection>

          {/* Info panel */}
          <AnimatedSection direction="right" delay={0.1} className="location-info-panel" style={{ backgroundColor: '#0D0D0D', padding: '48px' }}>
            {/* Open/Closed */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '6px 14px',
              borderRadius: '2px',
              background: isOpen ? 'rgba(76,175,80,0.1)' : 'rgba(244,67,54,0.1)',
              border: `1px solid ${isOpen ? 'rgba(76,175,80,0.3)' : 'rgba(244,67,54,0.3)'}`,
              marginBottom: '32px',
            }}>
              <span style={{
                width: '8px', height: '8px', borderRadius: '50%',
                backgroundColor: isOpen ? '#4CAF50' : '#F44336',
                display: 'inline-block',
              }} />
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', letterSpacing: '0.1em', color: isOpen ? '#4CAF50' : '#F44336' }}>
                {isOpen ? 'Open Now' : 'Currently Closed'}
              </span>
            </div>

            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '26px', color: '#F5EFE6', marginBottom: '8px' }}>
              The Ivory Table
            </h3>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(245,239,230,0.4)', marginBottom: '32px' }}>
              Porutota Road, Negombo, Sri Lanka
            </p>

            {/* Hours table */}
            <div style={{ marginBottom: '32px' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'Inter, sans-serif', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '16px' }}>
                <Clock size={14} /> Hours
              </h4>
              {[
                { day: 'Monday – Thursday', hours: RESTAURANT.hours.monThu },
                { day: 'Friday – Saturday', hours: RESTAURANT.hours.friSat },
                { day: 'Sunday', hours: RESTAURANT.hours.sun },
                { day: 'Weekend Brunch', hours: RESTAURANT.hours.brunch },
              ].map(({ day, hours }) => (
                <div key={day} className="hours-row" style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid rgba(201,168,76,0.07)' }}>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: 'rgba(245,239,230,0.55)' }}>{day}</span>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#F5EFE6' }}>{hours}</span>
                </div>
              ))}
            </div>

            {/* Contact */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <MapPin size={16} style={{ color: '#C9A84C', flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: 'rgba(245,239,230,0.6)', lineHeight: 1.6 }}>
                  {RESTAURANT.address}
                </span>
              </div>
              <a href={`tel:${RESTAURANT.phone}`} style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
                <Phone size={16} style={{ color: '#C9A84C', flexShrink: 0 }} />
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: 'rgba(245,239,230,0.6)' }}>{RESTAURANT.phone}</span>
              </a>
              <a href={`mailto:${RESTAURANT.email}`} style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
                <Mail size={16} style={{ color: '#C9A84C', flexShrink: 0 }} />
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: 'rgba(245,239,230,0.6)' }}>{RESTAURANT.email}</span>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
      <style>{`
        @media (max-width: 991px) {
          .location-grid { grid-template-columns: 1fr !important; }
          .location-info-panel { padding: 40px 24px !important; }
        }
        @media (max-width: 480px) {
          .hours-row { flex-direction: column; align-items: flex-start !important; gap: 4px; }
        }
      `}</style>
    </section>
  );
}
