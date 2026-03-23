import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_LINKS, RESTAURANT } from '../../data/siteData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'all 0.4s ease',
          backgroundColor: scrolled ? 'rgba(13,13,13,0.97)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(201,168,76,0.15)' : '1px solid transparent',
          padding: scrolled ? '16px 0' : '24px 0',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#C9A84C', letterSpacing: '0.05em' }}>
              {RESTAURANT.name}
            </span>
            <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '11px', letterSpacing: '0.4em', color: '#F5EFE6', textTransform: 'uppercase', marginTop: '2px' }}>
              {RESTAURANT.tagline}
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul style={{ display: 'flex', gap: '36px', listStyle: 'none', alignItems: 'center' }} className="hidden-mobile">
            {NAV_LINKS.map(link => {
              const isActive = location.pathname === link.path;
              return (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '13px',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: isActive ? '#C9A84C' : '#F5EFE6',
                      textDecoration: 'none',
                      position: 'relative',
                      paddingBottom: '4px',
                      transition: 'color 0.3s',
                    }}
                    onMouseEnter={e => { if (!isActive) (e.target as HTMLAnchorElement).style.color = '#C9A84C'; }}
                    onMouseLeave={e => { if (!isActive) (e.target as HTMLAnchorElement).style.color = '#F5EFE6'; }}
                  >
                    {link.label}
                    {isActive && (
                      <span style={{
                        position: 'absolute', bottom: 0, left: 0, right: 0,
                        height: '1px', background: '#C9A84C',
                      }} />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }} className="hidden-mobile">
            <a href={`tel:${RESTAURANT.phone}`} style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'rgba(245,239,230,0.6)', fontSize: '13px', textDecoration: 'none', fontFamily: 'Inter, sans-serif' }}>
              <Phone size={14} />
              <span>{RESTAURANT.phone}</span>
            </a>
            <Link
              to="/reservations"
              className="shimmer-btn"
              style={{
                padding: '10px 24px',
                borderRadius: '2px',
                fontFamily: 'Inter, sans-serif',
                fontSize: '12px',
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
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ background: 'none', border: 'none', color: '#F5EFE6', cursor: 'pointer', padding: '4px' }}
            className="show-mobile"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 999,
        backgroundColor: 'rgba(13,13,13,0.98)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        gap: '40px',
        transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.4s cubic-bezier(0.76, 0, 0.24, 1)',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: 1, marginBottom: '16px' }}>
          <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', fontWeight: 700, color: '#C9A84C' }}>{RESTAURANT.name}</span>
          <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '13px', letterSpacing: '0.5em', color: '#F5EFE6', textTransform: 'uppercase' }}>{RESTAURANT.tagline}</span>
        </div>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px' }}>
          {NAV_LINKS.map(link => (
            <li key={link.path}>
              <Link
                to={link.path}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '28px',
                  color: location.pathname === link.path ? '#C9A84C' : '#F5EFE6',
                  textDecoration: 'none',
                  letterSpacing: '0.05em',
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to="/reservations"
          onClick={() => setMobileOpen(false)}
          className="shimmer-btn"
          style={{
            padding: '14px 40px', borderRadius: '2px',
            fontFamily: 'Inter, sans-serif', fontSize: '13px',
            fontWeight: 600, letterSpacing: '0.15em',
            textTransform: 'uppercase', color: '#0D0D0D',
            textDecoration: 'none',
          }}
        >
          Reserve a Table
        </Link>
        <a href={`tel:${RESTAURANT.phone}`} style={{ color: 'rgba(245,239,230,0.5)', fontSize: '14px', fontFamily: 'Inter, sans-serif', textDecoration: 'none' }}>
          {RESTAURANT.phone}
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}
