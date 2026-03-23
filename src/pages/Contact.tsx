import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';
import { RESTAURANT } from '../data/siteData';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name) e.name = 'Name required';
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required';
    if (!form.message) e.message = 'Message required';
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
    outline: 'none',
  });

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh', backgroundColor: '#0D0D0D' }}>
      {/* Hero */}
      <div style={{
        position: 'relative', padding: '100px 0 80px',
        backgroundImage: `url('https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1600&q=80')`,
        backgroundSize: 'cover', backgroundPosition: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(13,13,13,0.88)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <AnimatedSection direction="up">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '16px' }}>
              <span style={{ width: '32px', height: '1px', background: '#C9A84C' }} />
              <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '14px', letterSpacing: '0.4em', color: '#C9A84C', textTransform: 'uppercase' }}>Get in Touch</span>
              <span style={{ width: '32px', height: '1px', background: '#C9A84C' }} />
            </div>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(48px, 7vw, 80px)', fontWeight: 700, color: '#F5EFE6' }}>Contact</h1>
          </AnimatedSection>
        </div>
      </div>

      <div className="container" style={{ padding: '80px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }}>
          {/* Contact info */}
          <AnimatedSection direction="left">
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', color: '#F5EFE6', marginBottom: '12px', fontWeight: 700 }}>
              We'd Love to Hear From You
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', lineHeight: 1.8, color: 'rgba(245,239,230,0.5)', marginBottom: '40px' }}>
              Whether you have questions about our menu, want to arrange a special event, or simply want to share your experience — we're here to help.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '48px' }}>
              {[
                { icon: Phone, label: 'Phone', value: RESTAURANT.phone, href: `tel:${RESTAURANT.phone}` },
                { icon: Mail, label: 'Email', value: RESTAURANT.email, href: `mailto:${RESTAURANT.email}` },
                { icon: MapPin, label: 'Address', value: RESTAURANT.address, href: '#' },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', border: '1px solid rgba(201,168,76,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={18} style={{ color: '#C9A84C' }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '4px' }}>{label}</div>
                    <a href={href} style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: 'rgba(245,239,230,0.7)', textDecoration: 'none', lineHeight: 1.6 }}>{value}</a>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ borderTop: '1px solid rgba(201,168,76,0.1)', paddingTop: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <Clock size={16} style={{ color: '#C9A84C' }} />
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C9A84C' }}>Opening Hours</span>
              </div>
              {[
                { day: 'Mon – Thu', hours: RESTAURANT.hours.monThu },
                { day: 'Fri – Sat', hours: RESTAURANT.hours.friSat },
                { day: 'Sunday', hours: RESTAURANT.hours.sun },
              ].map(({ day, hours }) => (
                <div key={day} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid rgba(201,168,76,0.06)' }}>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: 'rgba(245,239,230,0.45)' }}>{day}</span>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: 'rgba(245,239,230,0.7)' }}>{hours}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Contact form */}
          <AnimatedSection direction="right" delay={0.1}>
            <div style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(201,168,76,0.12)', borderRadius: '4px', padding: '48px' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <CheckCircle size={56} style={{ color: '#C9A84C', margin: '0 auto 24px' }} />
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', color: '#F5EFE6', marginBottom: '12px' }}>Message Sent!</h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: 'rgba(245,239,230,0.5)', lineHeight: 1.7 }}>
                    Thank you, {form.name}. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', color: '#F5EFE6', marginBottom: '8px' }}>Send a Message</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,239,230,0.5)', marginBottom: '8px' }}>Name *</label>
                      <input style={inputStyle('name')} value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="Your name" />
                      {errors.name && <span style={{ fontSize: '11px', color: '#E57373', display: 'block', marginTop: '4px' }}>{errors.name}</span>}
                    </div>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,239,230,0.5)', marginBottom: '8px' }}>Email *</label>
                      <input type="email" style={inputStyle('email')} value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="your@email.com" />
                      {errors.email && <span style={{ fontSize: '11px', color: '#E57373', display: 'block', marginTop: '4px' }}>{errors.email}</span>}
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,239,230,0.5)', marginBottom: '8px' }}>Subject</label>
                    <select style={{ ...inputStyle(), appearance: 'none' }} value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}>
                      <option value="" style={{ background: '#1A1A1A' }}>Select a subject...</option>
                      {['General Inquiry', 'Private Event', 'Press & Media', 'Feedback', 'Careers'].map(s => <option key={s} value={s} style={{ background: '#1A1A1A' }}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,239,230,0.5)', marginBottom: '8px' }}>Message *</label>
                    <textarea rows={5} style={{ ...inputStyle('message'), resize: 'vertical' }} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} placeholder="How can we help you?" />
                    {errors.message && <span style={{ fontSize: '11px', color: '#E57373', display: 'block', marginTop: '4px' }}>{errors.message}</span>}
                  </div>
                  <button type="submit" className="shimmer-btn"
                    style={{ width: '100%', padding: '16px', border: 'none', borderRadius: '2px', fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#0D0D0D', cursor: 'pointer' }}>
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>

        {/* Map */}
        <AnimatedSection direction="up" delay={0.2} style={{ marginTop: '64px', borderRadius: '4px', overflow: 'hidden', height: '400px' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.5042!2d-73.9818!3d40.7614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f4b0096c09%3A0x7b71b7c0c7b1e8a!2s45+W+53rd+St%2C+New+York%2C+NY+10019!5e0!3m2!1sen!2sus!4v1"
            width="100%" height="400"
            style={{ border: 'none', display: 'block', filter: 'invert(90%) hue-rotate(180deg) brightness(0.8)' }}
            loading="lazy"
            title="The Ivory Table Contact Map"
          />
        </AnimatedSection>
      </div>
    </div>
  );
}
