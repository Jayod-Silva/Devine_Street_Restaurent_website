import { useState } from 'react';
import { Search } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';
import { MENU_ITEMS } from '../data/siteData';

const ALL_ITEMS = [
  ...MENU_ITEMS.starters.map(i => ({ ...i, category: 'Starters' })),
  ...MENU_ITEMS.mains.map(i => ({ ...i, category: 'Main Courses' })),
  ...MENU_ITEMS.desserts.map(i => ({ ...i, category: 'Desserts' })),
  ...MENU_ITEMS.cocktails.map(i => ({ ...i, category: 'Cocktails' })),
];

type Category = 'All' | 'Starters' | 'Main Courses' | 'Desserts' | 'Cocktails';
type DietaryFilter = 'All' | "Chef's Special" | 'Vegetarian' | 'Gluten-Free' | 'Seafood';

const CATEGORIES: Category[] = ['All', 'Starters', 'Main Courses', 'Desserts', 'Cocktails'];
const DIETARY_FILTERS: DietaryFilter[] = ["All", "Chef's Special", 'Vegetarian', 'Gluten-Free', 'Seafood'];

export default function Menu() {
  const [category, setCategory] = useState<Category>('All');
  const [dietary, setDietary] = useState<DietaryFilter>('All');
  const [search, setSearch] = useState('');

  const filtered = ALL_ITEMS.filter(item => {
    const matchCat = category === 'All' || item.category === category;
    const matchDiet = dietary === 'All' || item.tags.includes(dietary);
    const matchSearch = !search || item.name.toLowerCase().includes(search.toLowerCase()) || item.description.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchDiet && matchSearch;
  });

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh', backgroundColor: '#0D0D0D' }}>
      {/* Hero */}
      <div style={{
        position: 'relative', padding: '100px 0 80px',
        backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80')`,
        backgroundSize: 'cover', backgroundPosition: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(13,13,13,0.85)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <AnimatedSection direction="up">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '16px' }}>
              <span className="decorative-line" style={{ width: '32px', height: '1px', background: '#C9A84C' }} />
              <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '14px', letterSpacing: '0.4em', color: '#C9A84C', textTransform: 'uppercase' }}>Fine Dining</span>
              <span className="decorative-line" style={{ width: '32px', height: '1px', background: '#C9A84C' }} />
            </div>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(48px, 7vw, 80px)', fontWeight: 700, color: '#F5EFE6', marginBottom: '16px' }}>
              Our Menu
            </h1>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontStyle: 'italic', color: 'rgba(245,239,230,0.6)' }}>
              Seasonal. Artisanal. Unforgettable.
            </p>
          </AnimatedSection>
        </div>
      </div>

      <div className="container" style={{ padding: '64px 24px' }}>
        {/* Filters */}
        <AnimatedSection direction="up" style={{ marginBottom: '48px' }}>
          {/* Search */}
          <div style={{ position: 'relative', maxWidth: '480px', margin: '0 auto 32px' }}>
            <Search size={16} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(245,239,230,0.4)' }} />
            <input
              type="text"
              placeholder="Search dishes..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{
                width: '100%', padding: '13px 16px 13px 42px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(201,168,76,0.2)',
                borderRadius: '2px', color: '#F5EFE6',
                fontFamily: 'Inter, sans-serif', fontSize: '14px',
                outline: 'none',
              }}
            />
          </div>

          {/* Category tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                style={{
                  padding: '10px 22px', borderRadius: '2px',
                  border: '1px solid',
                  borderColor: category === cat ? '#C9A84C' : 'rgba(201,168,76,0.2)',
                  background: category === cat ? '#C9A84C' : 'transparent',
                  color: category === cat ? '#0D0D0D' : 'rgba(245,239,230,0.6)',
                  fontFamily: 'Inter, sans-serif', fontSize: '12px',
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  fontWeight: category === cat ? 600 : 400,
                  cursor: 'pointer', transition: 'all 0.3s',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Dietary filters */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
            {DIETARY_FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setDietary(f)}
                style={{
                  padding: '7px 16px', borderRadius: '20px',
                  border: '1px solid',
                  borderColor: dietary === f ? 'rgba(201,168,76,0.6)' : 'rgba(201,168,76,0.15)',
                  background: dietary === f ? 'rgba(201,168,76,0.12)' : 'transparent',
                  color: dietary === f ? '#C9A84C' : 'rgba(245,239,230,0.45)',
                  fontFamily: 'Inter, sans-serif', fontSize: '11px',
                  letterSpacing: '0.07em',
                  cursor: 'pointer', transition: 'all 0.2s',
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Results count */}
        <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(245,239,230,0.3)', marginBottom: '32px', textAlign: 'center' }}>
          {filtered.length} {filtered.length === 1 ? 'dish' : 'dishes'} found
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 0', color: 'rgba(245,239,230,0.3)', fontFamily: 'Cormorant Garamond, serif', fontSize: '24px', fontStyle: 'italic' }}>
            No dishes match your search.
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '28px' }}>
            {filtered.map((item, idx) => (
              <AnimatedSection key={item.id} direction="up" delay={idx * 0.05}>
                <div
                  style={{
                    background: 'rgba(255,255,255,0.025)',
                    border: '1px solid rgba(201,168,76,0.1)',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.borderColor = 'rgba(201,168,76,0.35)';
                    e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.4)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.borderColor = 'rgba(201,168,76,0.1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div className="img-zoom-wrap" style={{ position: 'relative', height: '210px' }}>
                    <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,13,13,0.7) 0%, transparent 60%)' }} />
                    <span style={{
                      position: 'absolute', top: '12px', right: '12px',
                      padding: '4px 10px', background: 'rgba(13,13,13,0.7)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(201,168,76,0.3)',
                      borderRadius: '2px',
                      fontFamily: 'Inter, sans-serif', fontSize: '10px',
                      letterSpacing: '0.1em', color: '#C9A84C',
                    }}>
                      {item.category}
                    </span>
                    {'badge' in item && item.badge && (
                      <span style={{
                        position: 'absolute', top: '12px', left: '12px',
                        padding: '4px 10px', background: '#C9A84C',
                        borderRadius: '2px',
                        fontFamily: 'Inter, sans-serif', fontSize: '10px',
                        fontWeight: 700, letterSpacing: '0.1em', color: '#0D0D0D',
                      }}>
                        {item.badge}
                      </span>
                    )}
                    {/* Tags */}
                    {item.tags.length > 0 && (
                      <div style={{ position: 'absolute', bottom: '10px', left: '10px', display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                        {item.tags.map(tag => (
                          <span key={tag} style={{ padding: '3px 8px', background: 'rgba(13,13,13,0.75)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: '2px', fontSize: '10px', color: '#C9A84C', fontFamily: 'Inter, sans-serif' }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div style={{ padding: '20px 22px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                      <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', fontWeight: 600, color: '#F5EFE6', flex: 1, paddingRight: '12px' }}>{item.name}</h3>
                      <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', color: '#C9A84C', whiteSpace: 'nowrap' }}>LKR {item.price.toLocaleString()}</span>
                    </div>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', lineHeight: 1.7, color: 'rgba(245,239,230,0.45)' }}>{item.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
