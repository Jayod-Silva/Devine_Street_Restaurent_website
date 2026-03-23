import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../ui/AnimatedSection';
import { GALLERY_IMAGES } from '../../data/siteData';

type GalleryCategory = 'All' | 'Food' | 'Ambiance' | 'Events';
const CATEGORIES: GalleryCategory[] = ['All', 'Food', 'Ambiance', 'Events'];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === 'All'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex(prev => prev !== null ? (prev - 1 + filtered.length) % filtered.length : null);
  const nextImage = () => setLightboxIndex(prev => prev !== null ? (prev + 1) % filtered.length : null);

  return (
    <section style={{ padding: '120px 0', backgroundColor: '#0D0D0D' }}>
      <div className="container">
        {/* Header */}
        <AnimatedSection direction="up" style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '16px' }}>
            <span className="decorative-line" style={{ width: '32px', height: '1px', background: '#C9A84C' }} />
            <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '14px', letterSpacing: '0.35em', color: '#C9A84C', textTransform: 'uppercase' }}>
              Visual Experience
            </span>
            <span className="decorative-line" style={{ width: '32px', height: '1px', background: '#C9A84C' }} />
          </div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 700, color: '#F5EFE6', marginBottom: '40px' }}>
            Gallery
          </h2>

          {/* Category filters */}
          <div className="gallery-filters" style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="gallery-filter-btn"
                style={{
                  padding: '9px 22px',
                  borderRadius: '2px',
                  border: '1px solid',
                  borderColor: activeCategory === cat ? '#C9A84C' : 'rgba(201,168,76,0.2)',
                  background: activeCategory === cat ? '#C9A84C' : 'transparent',
                  color: activeCategory === cat ? '#0D0D0D' : 'rgba(245,239,230,0.6)',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '12px', letterSpacing: '0.1em',
                  textTransform: 'uppercase', fontWeight: activeCategory === cat ? 600 : 400,
                  cursor: 'pointer', transition: 'all 0.3s',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Masonry grid */}
        <div className="gallery-grid" style={{
          columns: '3', columnGap: '12px',
          marginBottom: '56px',
        }}>
          {filtered.map((img, idx) => (
            <AnimatedSection key={img.id} direction="up" delay={idx * 0.05} style={{ breakInside: 'avoid', marginBottom: '12px', display: 'block' }}>
              <div
                className="img-zoom-wrap"
                style={{ position: 'relative', cursor: 'pointer', borderRadius: '3px', overflow: 'hidden' }}
                onClick={() => openLightbox(idx)}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  style={{ width: '100%', display: 'block', aspectRatio: idx % 3 === 1 ? '3/4' : '4/3', objectFit: 'cover' }}
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'rgba(13,13,13,0)',
                  display: 'flex', alignItems: 'flex-end',
                  padding: '20px',
                  transition: 'background 0.3s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(13,13,13,0.6)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(13,13,13,0)'; }}
                >
                  <div style={{ opacity: 0 }}
                    onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.opacity = '1'; }}
                  >
                    <span style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '16px', color: '#F5EFE6',
                      display: 'block',
                    }}>
                      {img.title}
                    </span>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#C9A84C', letterSpacing: '0.1em' }}>
                      {img.category}
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection direction="up" style={{ textAlign: 'center' }}>
          <Link
            to="/gallery"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              padding: '16px 40px',
              border: '1px solid rgba(201,168,76,0.4)',
              borderRadius: '2px',
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px', letterSpacing: '0.15em', textTransform: 'uppercase',
              color: '#F5EFE6', textDecoration: 'none',
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#C9A84C'; e.currentTarget.style.color = '#C9A84C'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)'; e.currentTarget.style.color = '#F5EFE6'; }}
          >
            View Full Gallery <ArrowRight size={16} />
          </Link>
        </AnimatedSection>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            backgroundColor: 'rgba(0,0,0,0.95)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            style={{
              position: 'absolute', top: '24px', right: '24px',
              background: 'rgba(255,255,255,0.1)', border: 'none',
              borderRadius: '50%', width: '44px', height: '44px',
              color: '#F5EFE6', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <X size={20} />
          </button>
          {/* Prev */}
          <button
            onClick={e => { e.stopPropagation(); prevImage(); }}
            style={{
              position: 'absolute', left: '24px',
              background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(201,168,76,0.3)',
              borderRadius: '50%', width: '52px', height: '52px',
              color: '#F5EFE6', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <ChevronLeft size={24} />
          </button>
          {/* Image */}
          <img
            src={filtered[lightboxIndex].src.replace('w=800', 'w=1600')}
            alt={filtered[lightboxIndex].title}
            style={{ maxWidth: '90vw', maxHeight: '85vh', objectFit: 'contain', borderRadius: '2px' }}
            onClick={e => e.stopPropagation()}
          />
          {/* Next */}
          <button
            onClick={e => { e.stopPropagation(); nextImage(); }}
            style={{
              position: 'absolute', right: '24px',
              background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(201,168,76,0.3)',
              borderRadius: '50%', width: '52px', height: '52px',
              color: '#F5EFE6', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <ChevronRight size={24} />
          </button>
          {/* Caption */}
          <div style={{
            position: 'absolute', bottom: '32px',
            fontFamily: 'Playfair Display, serif',
            fontSize: '16px', color: '#F5EFE6',
            textAlign: 'center',
          }}>
            {filtered[lightboxIndex].title}
            <span style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#C9A84C', letterSpacing: '0.1em', marginTop: '4px' }}>
              {lightboxIndex + 1} / {filtered.length}
            </span>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .gallery-grid { columns: 2 !important; }
          .gallery-filter-btn { padding: 6px 14px !important; font-size: 11px !important; }
        }
        @media (max-width: 480px) {
          .gallery-grid { columns: 1 !important; }
          .gallery-filters { gap: 4px !important; }
        }
      `}</style>
    </section>
  );
}
