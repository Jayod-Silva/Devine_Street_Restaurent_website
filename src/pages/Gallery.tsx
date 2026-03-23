import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';
import { GALLERY_IMAGES } from '../data/siteData';

type GalleryCategory = 'All' | 'Food' | 'Ambiance' | 'Events';
const CATEGORIES: GalleryCategory[] = ['All', 'Food', 'Ambiance', 'Events'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === 'All' ? GALLERY_IMAGES : GALLERY_IMAGES.filter(img => img.category === activeCategory);

  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex(prev => prev !== null ? (prev - 1 + filtered.length) % filtered.length : null);
  const nextImage = () => setLightboxIndex(prev => prev !== null ? (prev + 1) % filtered.length : null);

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh', backgroundColor: '#0D0D0D' }}>
      {/* Hero */}
      <div style={{
        position: 'relative', padding: '100px 0 80px',
        backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80')`,
        backgroundSize: 'cover', backgroundPosition: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(13,13,13,0.85)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <AnimatedSection direction="up">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '16px' }}>
              <span style={{ width: '32px', height: '1px', background: '#C9A84C' }} />
              <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '14px', letterSpacing: '0.4em', color: '#C9A84C', textTransform: 'uppercase' }}>Visual Story</span>
              <span style={{ width: '32px', height: '1px', background: '#C9A84C' }} />
            </div>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(48px, 7vw, 80px)', fontWeight: 700, color: '#F5EFE6' }}>
              Gallery
            </h1>
          </AnimatedSection>
        </div>
      </div>

      <div className="container" style={{ padding: '64px 24px' }}>
        {/* Filters */}
        <AnimatedSection direction="up" style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '10px 24px', borderRadius: '2px',
                  border: '1px solid',
                  borderColor: activeCategory === cat ? '#C9A84C' : 'rgba(201,168,76,0.2)',
                  background: activeCategory === cat ? '#C9A84C' : 'transparent',
                  color: activeCategory === cat ? '#0D0D0D' : 'rgba(245,239,230,0.6)',
                  fontFamily: 'Inter, sans-serif', fontSize: '12px',
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  fontWeight: activeCategory === cat ? 600 : 400,
                  cursor: 'pointer', transition: 'all 0.3s',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Masonry */}
        <div style={{ columns: '3', columnGap: '16px' }}>
          {filtered.map((img, idx) => (
            <AnimatedSection key={img.id} direction="up" delay={idx * 0.04} style={{ breakInside: 'avoid', marginBottom: '16px' }}>
              <div
                className="img-zoom-wrap"
                style={{ borderRadius: '3px', overflow: 'hidden', cursor: 'pointer', position: 'relative' }}
                onClick={() => setLightboxIndex(idx)}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  style={{ width: '100%', display: 'block', aspectRatio: idx % 3 === 0 ? '4/3' : idx % 3 === 1 ? '3/4' : '1/1', objectFit: 'cover' }}
                  loading="lazy"
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'transparent',
                  display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                  padding: '20px', transition: 'background 0.3s',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(13,13,13,0.65)';
                    const el = e.currentTarget.querySelector('.caption') as HTMLElement;
                    if (el) el.style.opacity = '1';
                    if (el) el.style.transform = 'translateY(0)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'transparent';
                    const el = e.currentTarget.querySelector('.caption') as HTMLElement;
                    if (el) el.style.opacity = '0';
                    if (el) el.style.transform = 'translateY(8px)';
                  }}
                >
                  <div className="caption" style={{ opacity: 0, transform: 'translateY(8px)', transition: 'all 0.3s' }}>
                    <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '16px', color: '#F5EFE6' }}>{img.title}</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: '#C9A84C', letterSpacing: '0.1em', marginTop: '4px' }}>{img.category}</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 9999, backgroundColor: 'rgba(0,0,0,0.95)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onClick={closeLightbox}>
          <button onClick={closeLightbox} style={{ position: 'absolute', top: '24px', right: '24px', background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', width: '44px', height: '44px', color: '#F5EFE6', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <X size={20} />
          </button>
          <button onClick={e => { e.stopPropagation(); prevImage(); }} style={{ position: 'absolute', left: '24px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: '50%', width: '52px', height: '52px', color: '#F5EFE6', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ChevronLeft size={24} />
          </button>
          <img src={filtered[lightboxIndex].src.replace('w=800', 'w=1600')} alt={filtered[lightboxIndex].title} style={{ maxWidth: '90vw', maxHeight: '85vh', objectFit: 'contain' }} onClick={e => e.stopPropagation()} />
          <button onClick={e => { e.stopPropagation(); nextImage(); }} style={{ position: 'absolute', right: '24px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: '50%', width: '52px', height: '52px', color: '#F5EFE6', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ChevronRight size={24} />
          </button>
          <div style={{ position: 'absolute', bottom: '32px', textAlign: 'center', fontFamily: 'Playfair Display, serif', fontSize: '16px', color: '#F5EFE6' }}>
            {filtered[lightboxIndex].title}
            <span style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#C9A84C', marginTop: '4px' }}>{lightboxIndex + 1} / {filtered.length}</span>
          </div>
        </div>
      )}
    </div>
  );
}
