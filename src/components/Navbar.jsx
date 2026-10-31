import { useEffect, useState } from 'react';
import Dropdown from './Dropdown';
import { asset, navItems } from '../data/content';
import { useActiveSection, useScrolled } from '../hooks/useScroll';

const SECTION_IDS = navItems.map((n) => n.section);

export default function Navbar() {
  const [openId, setOpenId] = useState(null);
  const scrolled = useScrolled();
  const active = useActiveSection(SECTION_IDS);

  // Close dropdowns on outside click or when focus leaves the dropdown area.
  useEffect(() => {
    const close = (e) => { if (!e.target.closest('.has-dropdown')) setOpenId(null); };
    document.addEventListener('click', close);
    document.addEventListener('focusin', close);
    return () => {
      document.removeEventListener('click', close);
      document.removeEventListener('focusin', close);
    };
  }, []);

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Florie Mae Magsalay, back to top">
          <img src={asset('logo_circle.jpg')} alt="" width="36" height="36" />
          <span>Florie Mae</span>
        </a>
        <ul className="nav-list">
          {navItems.map((item) =>
            item.type === 'dropdown' ? (
              <Dropdown
                key={item.id}
                {...item}
                active={active}
                open={openId === item.id}
                onOpenChange={(o) => setOpenId(o ? item.id : null)}
              />
            ) : (
              <li key={item.href}>
                <a
                  className={`nav-link${active === item.section ? ' active' : ''}`}
                  href={item.href}
                  aria-current={active === item.section ? 'true' : undefined}
                >
                  {item.label}
                </a>
              </li>
            )
          )}
        </ul>
      </nav>
    </header>
  );
}
