import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, Star } from 'lucide-react';
import { RESTAURANT, NAV_LINKS } from '../../data/siteData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#080808', borderTop: '1px solid rgba(201,168,76,0.15)', fontFamily: 'Inter, sans-serif' }}>
      {/* Top section */}
      <div className="container footer-top" style={{ padding: '80px 24px 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '48px' }}>
          {/* Brand */}
          <div className="footer-brand" style={{ gridColumn: 'span 1' }}>
            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: 700, color: '#C9A84C' }}>The Ivory Table</div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '12px', letterSpacing: '0.5em', color: '#F5EFE6', textTransform: 'uppercase' }}>Fine Dining</div>
            </div>
            <p style={{ color: 'rgba(245,239,230,0.5)', fontSize: '14px', lineHeight: '1.8', marginBottom: '24px', maxWidth: '260px' }}>
              {RESTAURANT.description}
            </p>
            {/* Stars */}
            <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="#C9A84C" color="#C9A84C" />
              ))}
              <span style={{ color: 'rgba(245,239,230,0.5)', fontSize: '12px', marginLeft: '8px' }}>Michelin Star 2024</span>
            </div>
            {/* Social */}
            <div className="footer-social" style={{ display: 'flex', gap: '16px' }}>
              {[
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Twitter, href: '#', label: 'Twitter' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{
                    width: '38px', height: '38px',
                    borderRadius: '50%',
                    border: '1px solid rgba(201,168,76,0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'rgba(245,239,230,0.6)',
                    transition: 'all 0.3s',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget;
                    el.style.borderColor = '#C9A84C';
                    el.style.backgroundColor = 'rgba(201,168,76,0.1)';
                    el.style.color = '#C9A84C';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget;
                    el.style.borderColor = 'rgba(201,168,76,0.3)';
                    el.style.backgroundColor = 'transparent';
                    el.style.color = 'rgba(245,239,230,0.6)';
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '16px', color: '#C9A84C', marginBottom: '24px', letterSpacing: '0.05em' }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {NAV_LINKS.map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    style={{
                      color: 'rgba(245,239,230,0.55)',
                      textDecoration: 'none',
                      fontSize: '14px',
                      display: 'flex', alignItems: 'center', gap: '8px',
                      transition: 'color 0.3s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#C9A84C')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,239,230,0.55)')}
                  >
                    <span style={{ width: '16px', height: '1px', background: '#C9A84C', display: 'inline-block' }} />
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/reservations" style={{ color: 'rgba(245,239,230,0.55)', textDecoration: 'none', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'color 0.3s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#C9A84C')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,239,230,0.55)')}>
                  <span style={{ width: '16px', height: '1px', background: '#C9A84C', display: 'inline-block' }} />
                  Reservations
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '16px', color: '#C9A84C', marginBottom: '24px', letterSpacing: '0.05em' }}>
              Hours
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { days: 'Mon – Thu', hours: RESTAURANT.hours.monThu },
                { days: 'Fri – Sat', hours: RESTAURANT.hours.friSat },
                { days: 'Sunday', hours: RESTAURANT.hours.sun },
                { days: 'Weekend Brunch', hours: RESTAURANT.hours.brunch },
              ].map(({ days, hours }) => (
                <div key={days}>
                  <div style={{ fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(245,239,230,0.4)', marginBottom: '3px' }}>{days}</div>
                  <div style={{ fontSize: '14px', color: 'rgba(245,239,230,0.75)' }}>{hours}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '16px', color: '#C9A84C', marginBottom: '24px', letterSpacing: '0.05em' }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <a href={`tel:${RESTAURANT.phone}`} style={{ display: 'flex', gap: '12px', textDecoration: 'none', alignItems: 'flex-start' }}>
                <Phone size={16} style={{ color: '#C9A84C', marginTop: '2px', flexShrink: 0 }} />
                <span style={{ color: 'rgba(245,239,230,0.6)', fontSize: '14px', lineHeight: '1.5' }}>{RESTAURANT.phone}</span>
              </a>
              <a href={`mailto:${RESTAURANT.email}`} style={{ display: 'flex', gap: '12px', textDecoration: 'none', alignItems: 'flex-start' }}>
                <Mail size={16} style={{ color: '#C9A84C', marginTop: '2px', flexShrink: 0 }} />
                <span style={{ color: 'rgba(245,239,230,0.6)', fontSize: '14px', lineHeight: '1.5' }}>{RESTAURANT.email}</span>
              </a>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <MapPin size={16} style={{ color: '#C9A84C', marginTop: '2px', flexShrink: 0 }} />
                <span style={{ color: 'rgba(245,239,230,0.6)', fontSize: '14px', lineHeight: '1.6' }}>{RESTAURANT.address}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div style={{ borderTop: '1px solid rgba(201,168,76,0.1)', borderBottom: '1px solid rgba(201,168,76,0.1)', padding: '40px 0' }}>
        <div className="container footer-newsletter" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '24px' }}>
          <div>
            <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', color: '#F5EFE6', marginBottom: '6px' }}>Stay in the know</h4>
            <p style={{ color: 'rgba(245,239,230,0.45)', fontSize: '14px' }}>Events, seasonal menus, and exclusive offers.</p>
          </div>
          <form
            onSubmit={e => e.preventDefault()}
            className="footer-newsletter-form"
            style={{ display: 'flex', gap: '0' }}
          >
            <input
              type="email"
              placeholder="your@email.com"
              style={{
                padding: '12px 20px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(201,168,76,0.25)',
                borderRight: 'none',
                borderRadius: '2px 0 0 2px',
                color: '#F5EFE6',
                fontSize: '14px',
                fontFamily: 'Inter, sans-serif',
                outline: 'none',
                minWidth: '260px',
              }}
              className="footer-newsletter-input"
            />
            <button
              type="submit"
              className="shimmer-btn footer-newsletter-btn"
              style={{
                padding: '12px 24px',
                border: 'none',
                borderRadius: '0 2px 2px 0',
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#0D0D0D',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container footer-bottom" style={{ padding: '24px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
        <p style={{ color: 'rgba(245,239,230,0.3)', fontSize: '12px', letterSpacing: '0.05em' }}>
          © {currentYear} The Ivory Table. All rights reserved. New York, NY.
        </p>
        <div style={{ display: 'flex', gap: '24px' }}>
          {['Privacy Policy', 'Terms of Service', 'Accessibility'].map(item => (
            <a key={item} href="#" style={{ color: 'rgba(245,239,230,0.3)', fontSize: '12px', textDecoration: 'none', letterSpacing: '0.03em' }}>
              {item}
            </a>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .footer-top { padding-top: 60px !important; padding-bottom: 40px !important; }
          .footer-brand { text-align: center; display: flex; flex-direction: column; alignItems: center; }
          .footer-social { justify-content: center; }
          .footer-newsletter { justify-content: center; text-align: center; }
          .footer-bottom { justify-content: center !important; text-align: center; }
        }
        @media (max-width: 640px) {
          .footer-newsletter-form { flex-direction: column !important; width: 100%; }
          .footer-newsletter-input { border-right: 1px solid rgba(201,168,76,0.25) !important; border-radius: 2px !important; margin-bottom: 12px; min-width: 0 !important; width: 100% !important; }
          .footer-newsletter-btn { border-radius: 2px !important; width: 100% !important; }
        }
      `}</style>
    </footer>
  );
}
