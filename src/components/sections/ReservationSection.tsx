import { useState } from 'react';
import { Calendar, Clock, Users, CheckCircle } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';

export default function ReservationSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', date: '', time: '', guests: '2', occasion: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name) e.name = 'Name is required';
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required';
    if (!form.date) e.date = 'Please select a date';
    if (!form.time) e.time = 'Please select a time';
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
  };

  const inputStyle = (field: string): React.CSSProperties => ({
    width: '100%',
    padding: '14px 16px',
    background: 'rgba(255,255,255,0.04)',
    border: `1px solid ${errors[field] ? '#E57373' : 'rgba(201,168,76,0.2)'}`,
    borderRadius: '2px',
    color: '#F5EFE6',
    fontFamily: 'Inter, sans-serif',
    fontSize: '14px',
    outline: 'none',
    colorScheme: 'dark',
  });

  const timeSlots = ['5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM'];

  return (
    <section style={{ padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Background */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url('https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=1920&q=80')`,
        backgroundSize: 'cover', backgroundPosition: 'center',
      }} />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(13,13,13,0.88)' }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="reservation-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
          {/* Left: Info */}
          <AnimatedSection direction="left">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <span className="decorative-line" style={{ width: '32px', height: '1px', background: '#C9A84C' }} />
              <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '14px', letterSpacing: '0.35em', color: '#C9A84C', textTransform: 'uppercase' }}>
                Reservations
              </span>
            </div>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(34px, 4vw, 52px)',
              fontWeight: 700, lineHeight: 1.2,
              color: '#F5EFE6', marginBottom: '24px',
            }}>
              Reserve Your<br />
              <span style={{ color: '#C9A84C', fontStyle: 'italic' }}>Perfect Evening</span>
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', lineHeight: 1.8, color: 'rgba(245,239,230,0.55)', marginBottom: '48px' }}>
              Every evening at The Ivory Table is a curated experience. Reserve your table and allow us to craft an unforgettable night for you and your guests.
            </p>

            {[
              { icon: Calendar, title: 'Advance Bookings', desc: 'Reservations accepted up to 60 days in advance' },
              { icon: Users, title: 'Private Dining', desc: 'Groups of 10+ benefit from our exclusive private rooms' },
              { icon: Clock, title: 'Cancellation Policy', desc: '24-hour notice required for cancellations' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} style={{ display: 'flex', gap: '16px', marginBottom: '28px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '2px',
                  border: '1px solid rgba(201,168,76,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Icon size={18} style={{ color: '#C9A84C' }} />
                </div>
                <div>
                  <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '16px', color: '#F5EFE6', marginBottom: '4px' }}>{title}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(245,239,230,0.45)', lineHeight: 1.6 }}>{desc}</div>
                </div>
              </div>
            ))}

            <div style={{ marginTop: '20px', padding: '16px 20px', border: '1px solid rgba(201,168,76,0.15)', borderRadius: '2px', background: 'rgba(201,168,76,0.04)' }}>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(245,239,230,0.5)' }}>
                For same-day reservations, please call us at{' '}
                <a href="tel:+12125550195" style={{ color: '#C9A84C', textDecoration: 'none' }}>+1 (212) 555-0195</a>
              </span>
            </div>
          </AnimatedSection>

          {/* Right: Form */}
          <AnimatedSection direction="right" delay={0.15}>
            <div style={{
              background: 'rgba(13,13,13,0.8)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(201,168,76,0.15)',
              borderRadius: '4px',
              padding: '48px',
            }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <CheckCircle size={56} style={{ color: '#C9A84C', margin: '0 auto 24px' }} />
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', color: '#F5EFE6', marginBottom: '16px' }}>
                    Reservation Confirmed!
                  </h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: 'rgba(245,239,230,0.55)', lineHeight: 1.7 }}>
                    Thank you, <strong style={{ color: '#C9A84C' }}>{form.name}</strong>. We've sent a confirmation to <strong style={{ color: '#C9A84C' }}>{form.email}</strong>.<br />
                    We look forward to welcoming you.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', date: '', time: '', guests: '2', occasion: '' }); }}
                    style={{ marginTop: '32px', padding: '12px 32px', border: '1px solid rgba(201,168,76,0.4)', borderRadius: '2px', background: 'transparent', color: '#C9A84C', fontFamily: 'Inter, sans-serif', fontSize: '13px', letterSpacing: '0.1em', cursor: 'pointer' }}
                  >
                    Make Another Reservation
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', color: '#F5EFE6', marginBottom: '8px' }}>
                    Book a Table
                  </h3>
                  <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,239,230,0.5)', marginBottom: '8px' }}>
                        Full Name *
                      </label>
                      <input style={inputStyle('name')} value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="John Smith" />
                      {errors.name && <span style={{ fontSize: '11px', color: '#E57373', marginTop: '4px', display: 'block' }}>{errors.name}</span>}
                    </div>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,239,230,0.5)', marginBottom: '8px' }}>
                        Email *
                      </label>
                      <input type="email" style={inputStyle('email')} value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="you@email.com" />
                      {errors.email && <span style={{ fontSize: '11px', color: '#E57373', marginTop: '4px', display: 'block' }}>{errors.email}</span>}
                    </div>
                  </div>
                  <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,239,230,0.5)', marginBottom: '8px' }}>
                        Date *
                      </label>
                      <input type="date" style={inputStyle('date')} value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} />
                      {errors.date && <span style={{ fontSize: '11px', color: '#E57373', marginTop: '4px', display: 'block' }}>{errors.date}</span>}
                    </div>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,239,230,0.5)', marginBottom: '8px' }}>
                        Guests
                      </label>
                      <select style={{ ...inputStyle(''), appearance: 'none' }} value={form.guests} onChange={e => setForm(f => ({ ...f, guests: e.target.value }))}>
                        {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n} style={{ background: '#1A1A1A' }}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,239,230,0.5)', marginBottom: '12px' }}>
                      Preferred Time *
                    </label>
                    <div className="time-slots-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {timeSlots.map(slot => (
                        <button
                          key={slot} type="button"
                          onClick={() => setForm(f => ({ ...f, time: slot }))}
                          className="time-slot-btn"
                          style={{
                            padding: '8px 14px',
                            borderRadius: '2px',
                            border: `1px solid ${form.time === slot ? '#C9A84C' : 'rgba(201,168,76,0.2)'}`,
                            background: form.time === slot ? 'rgba(201,168,76,0.15)' : 'transparent',
                            color: form.time === slot ? '#C9A84C' : 'rgba(245,239,230,0.5)',
                            fontFamily: 'Inter, sans-serif', fontSize: '12px',
                            cursor: 'pointer', transition: 'all 0.2s',
                          }}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                    {errors.time && <span style={{ fontSize: '11px', color: '#E57373', marginTop: '4px', display: 'block' }}>{errors.time}</span>}
                  </div>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,239,230,0.5)', marginBottom: '8px' }}>
                      Special Occasion (optional)
                    </label>
                    <select style={{ ...inputStyle(''), appearance: 'none' }} value={form.occasion} onChange={e => setForm(f => ({ ...f, occasion: e.target.value }))}>
                      <option value="" style={{ background: '#1A1A1A' }}>None</option>
                      {['Birthday', 'Anniversary', 'Business Dinner', 'Proposal', 'Graduation', 'Other'].map(o => (
                        <option key={o} value={o} style={{ background: '#1A1A1A' }}>{o}</option>
                      ))}
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="shimmer-btn"
                    style={{
                      width: '100%', padding: '16px',
                      border: 'none', borderRadius: '2px',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '13px', fontWeight: 600,
                      letterSpacing: '0.15em', textTransform: 'uppercase',
                      color: '#0D0D0D', cursor: 'pointer',
                      marginTop: '8px',
                    }}
                  >
                    Confirm Reservation
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
      <style>{`
        @media (max-width: 1024px) {
          .reservation-grid { grid-template-columns: 1fr !important; gap: 60px !important; }
        }
        @media (max-width: 640px) {
          .form-row { grid-template-columns: 1fr !important; }
          .reservation-grid { gap: 48px !important; }
          .reservation-section-padding { padding: 80px 0 !important; }
          .time-slot-btn { padding: 6px 10px !important; font-size: 11px !important; flex: 1 1 40% !important; }
          .time-slots-grid { justify-content: center; display: flex !important; flex-wrap: wrap !important; }
        }
      `}</style>
    </section>
  );
}
