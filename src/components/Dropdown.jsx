import { useRef } from 'react';

export default function Dropdown({ id, label, section, items, active, open, onOpenChange }) {
  const btn = useRef(null);
  const menu = useRef(null);
  const links = () => Array.from(menu.current.querySelectorAll('a'));

  const handleKeyDown = (e) => {
    if (e.key === 'Escape' && open) {
      onOpenChange(false);
      btn.current.focus();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (!open) {
        onOpenChange(true);
        setTimeout(() => links()[0]?.focus(), 0);
        return;
      }
      const l = links();
      l[(l.indexOf(document.activeElement) + 1) % l.length]?.focus();
    } else if (e.key === 'ArrowUp' && open) {
      const l = links();
      const i = l.indexOf(document.activeElement);
      if (i >= 0) {
        e.preventDefault();
        l[(i - 1 + l.length) % l.length].focus();
      }
    }
  };

  return (
    <li className="has-dropdown" onKeyDown={handleKeyDown}>
      <button
        ref={btn}
        type="button"
        className={`nav-link dropdown-toggle${active === section ? ' active' : ''}`}
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={id}
        onClick={(e) => { e.stopPropagation(); onOpenChange(!open); }}
      >
        {label} <span className="arrow" aria-hidden="true">{open ? '▲' : '▼'}</span>
      </button>
      <ul className={`dropdown-menu${open ? ' open' : ''}`} id={id} ref={menu}>
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              onClick={() => onOpenChange(false)}
              {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
}
