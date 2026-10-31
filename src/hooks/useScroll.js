import { useEffect, useState } from 'react';

// True once the page is scrolled past a few pixels (header shadow).
export function useScrolled(offset = 8) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > offset);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [offset]);
  return scrolled;
}

// Returns the id of the section crossing the upper-middle of the viewport ('' while in the hero).
export function useActiveSection(ids) {
  const [active, setActive] = useState('');
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id === 'top' ? '' : e.target.id));
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );
    ['top', ...ids].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids.join(',')]); // eslint-disable-line react-hooks/exhaustive-deps
  return active;
}
