const LAYERS = [
  { key: 'what', label: 'What' },
  { key: 'why', label: 'Why' },
  { key: 'power', label: 'Power' },
  { key: 'act', label: 'Act' },
] as const

export default function LayerPills() {
  return (
    <div className="layers">
      {LAYERS.map((l) => (
        <span key={l.key} className={`layer-pill ${l.key}`}>
          {l.label}
        </span>
      ))}
    </div>
  )
}
