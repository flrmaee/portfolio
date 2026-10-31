export default function Tags({ items, className = '', label }) {
  return (
    <ul className={`tags ${className}`.trim()} aria-label={label}>
      {items.map((t) => <li key={t}>{t}</li>)}
    </ul>
  );
}
