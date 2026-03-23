import { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'fade';
}

export default function AnimatedSection({
  children,
  className = '',
  style = {},
  delay = 0,
  direction = 'up',
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const initial = {
    up: { opacity: 0, transform: 'translateY(40px)' },
    left: { opacity: 0, transform: 'translateX(-40px)' },
    right: { opacity: 0, transform: 'translateX(40px)' },
    fade: { opacity: 0, transform: 'none' },
  }[direction];

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
        ...(visible ? { opacity: 1, transform: 'none' } : initial),
      }}
    >
      {children}
    </div>
  );
}
