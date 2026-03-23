import { useState } from 'react';
import { Calendar, Clock, Users, CheckCircle } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';

export default function Reservations() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', date: '', time: '', guests: '2', occasion: '', requests: '' });
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

  const inputStyle = (field?: string): React.CSSProperties => ({
    width: '100%', padding: '14px 16px',
    background: 'rgba(255,255,255,0.04)',
    border: `1px solid ${field && errors[field] ? '#E57373' : 'rgba(201,168,76,0.2)'}`,
    borderRadius: '2px', color: '#F5EFE6',
    fontFamily: 'Inter, sans-serif', fontSize: '14px',
    outline: 'none', colorScheme: 'dark',
  });

  const timeSlots = ['5:00 PM','5:30 PM','6:00 PM','6:30 PM','7:00 PM','7:30 PM','8:00 PM','8:30 PM','9:00 PM','9:30 PM','10:00 PM'];

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh', backgroundColor: '#0D0D0D' }}>
      {/* Hero */}
      <div style={{
        position: 'relative', padding: '100px 0 80px',
        backgroundImage: `url('https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=1600&q=80')`,
        backgroundSize: 'cover', backgroundPosition: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(13,13,13,0.88)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <AnimatedSection direction="up">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '16px' }}>
              <span className="decorative-line" style={{ width: '32px', height: '1px', background: '#C9A84C' }} />
              <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '14px', letterSpacing: '0.4em', color: '#C9A84C', textTransform: 'uppercase' }}>Book Your Table</span>
              <span className="decorative-line" style={{ width: '32px', height: '1px', background: '#C9A84C' }} />
            </div>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(48px, 7vw, 80px)', fontWeight: 700, color: '#F5EFE6', marginBottom: '16px' }}>
              Reservations
            </h1>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontStyle: 'italic', color: 'rgba(245,239,230,0.6)' }}>
              Your exceptional evening begins here.
            </p>
          </AnimatedSection>
        </div>
      </div>

      <div className="container" style={{ padding: '80px 24px' }}>
        <div className="reservation-page-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '64px', alignItems: 'start' }}>
          {/* Info col */}
          <AnimatedSection direction="left">
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', color: '#F5EFE6', marginBottom: '24px' }}>Before You Reserve</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {[
                { icon: Calendar, title: 'Advance Booking', desc: 'We accept reservations up to 60 days in advance. Walk-ins are welcomed subject to availability.' },
                { icon: Users, title: 'Group Dining', desc: 'For parties of 10 or more, please contact us directly for our private dining rooms.' },
                { icon: Clock, title: 'Cancellation', desc: 'Please notify us at least 24 hours in advance. Late cancellations may incur a fee.' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '2px', border: '1px solid rgba(201,168,76,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={18} style={{ color: '#C9A84C' }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '15px', color: '#F5EFE6', marginBottom: '4px' }}>{title}</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(245,239,230,0.45)', lineHeight: 1.6 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '32px', padding: '20px', background: 'rgba(201,168,76,0.05)', border: '1px solid rgba(201,168,76,0.15)', borderRadius: '2px' }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(245,239,230,0.5)', lineHeight: 1.7 }}>
                For same-day reservations or assistance, call us at{' '}
                <a href="tel:+12125550195" style={{ color: '#C9A84C', textDecoration: 'none' }}>+1 (212) 555-0195</a>
              </p>
            </div>
          </AnimatedSection>

          {/* Form col */}
          <AnimatedSection direction="right" delay={0.1}>
            <div className="reservation-form-container" style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(201,168,76,0.12)', borderRadius: '4px', padding: '48px' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <CheckCircle size={64} style={{ color: '#C9A84C', margin: '0 auto 28px' }} />
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', color: '#F5EFE6', marginBottom: '16px' }}>Reservation Confirmed!</h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: 'rgba(245,239,230,0.55)', lineHeight: 1.7 }}>
                    Thank you, <strong style={{ color: '#C9A84C' }}>{form.name}</strong>. A confirmation has been sent to{' '}
                    <strong style={{ color: '#C9A84C' }}>{form.email}</strong>.<br /><br />
                    We look forward to welcoming you on {form.date} at {form.time}.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', date: '', time: '', guests: '2', occasion: '', requests: '' }); setErrors({}); }}
                    style={{ marginTop: '32px', padding: '13px 36px', border: '1px solid rgba(201,168,76,0.4)', borderRadius: '2px', background: 'transparent', color: '#C9A84C', fontFamily: 'Inter, sans-serif', fontSize: '13px', letterSpacing: '0.1em', cursor: 'pointer' }}
                  >
                    New Reservation
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <div>
                    <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '26px', color: '#F5EFE6', marginBottom: '8px' }}>Book a Table</h3>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(245,239,230,0.35)' }}>Fields marked * are required.</p>
                  </div>
                  <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,239,230,0.5)', marginBottom: '8px' }}>Full Name *</label>
                      <input style={inputStyle('name')} value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="John Smith" />
                      {errors.name && <span style={{ fontSize: '11px', color: '#E57373', display: 'block', marginTop: '4px' }}>{errors.name}</span>}
                    </div>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,239,230,0.5)', marginBottom: '8px' }}>Phone</label>
                      <input type="tel" style={inputStyle()} value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} placeholder="+1 (212) 000-0000" />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,239,230,0.5)', marginBottom: '8px' }}>Email *</label>
                    <input type="email" style={inputStyle('email')} value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="you@email.com" />
                    {errors.email && <span style={{ fontSize: '11px', color: '#E57373', display: 'block', marginTop: '4px' }}>{errors.email}</span>}
                  </div>
                  <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,239,230,0.5)', marginBottom: '8px' }}>Date *</label>
                      <input type="date" style={inputStyle('date')} value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} />
                      {errors.date && <span style={{ fontSize: '11px', color: '#E57373', display: 'block', marginTop: '4px' }}>{errors.date}</span>}
                    </div>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,239,230,0.5)', marginBottom: '8px' }}>Guests</label>
                      <select style={{ ...inputStyle(), appearance: 'none' }} value={form.guests} onChange={e => setForm(f => ({ ...f, guests: e.target.value }))}>
                        {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n} style={{ background: '#1A1A1A' }}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,239,230,0.5)', marginBottom: '12px' }}>Preferred Time *</label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {timeSlots.map(slot => (
                        <button key={slot} type="button" onClick={() => setForm(f => ({ ...f, time: slot }))}
                          style={{ padding: '8px 14px', borderRadius: '2px', border: `1px solid ${form.time === slot ? '#C9A84C' : 'rgba(201,168,76,0.2)'}`, background: form.time === slot ? 'rgba(201,168,76,0.15)' : 'transparent', color: form.time === slot ? '#C9A84C' : 'rgba(245,239,230,0.5)', fontFamily: 'Inter, sans-serif', fontSize: '12px', cursor: 'pointer', transition: 'all 0.2s' }}>
                          {slot}
                        </button>
                      ))}
                    </div>
                    {errors.time && <span style={{ fontSize: '11px', color: '#E57373', display: 'block', marginTop: '4px' }}>{errors.time}</span>}
                  </div>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,239,230,0.5)', marginBottom: '8px' }}>Special Occasion</label>
                    <select style={{ ...inputStyle(), appearance: 'none' }} value={form.occasion} onChange={e => setForm(f => ({ ...f, occasion: e.target.value }))}>
                      <option value="" style={{ background: '#1A1A1A' }}>None</option>
                      {['Birthday', 'Anniversary', 'Business Dinner', 'Proposal', 'Graduation', 'Other'].map(o => <option key={o} value={o} style={{ background: '#1A1A1A' }}>{o}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,239,230,0.5)', marginBottom: '8px' }}>Special Requests</label>
                    <textarea rows={3} style={{ ...inputStyle(), resize: 'vertical' }} value={form.requests} onChange={e => setForm(f => ({ ...f, requests: e.target.value }))} placeholder="Dietary restrictions, allergies, high chair needed, etc." />
                  </div>
                  <button type="submit" className="shimmer-btn"
                    style={{ width: '100%', padding: '16px', border: 'none', borderRadius: '2px', fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#0D0D0D', cursor: 'pointer', marginTop: '8px' }}>
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
          .reservation-page-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        @media (max-width: 640px) {
          .form-row { grid-template-columns: 1fr !important; }
          .reservation-form-container { padding: 32px 20px !important; }
        }
      `}</style>
    </div>
  );
}
