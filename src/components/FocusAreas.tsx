import type { FocusArea } from '../data/profile'

type FocusAreasProps = {
  items: FocusArea[]
}

export function FocusAreas({ items }: FocusAreasProps) {
  return (
    <div className="focus-grid" aria-label="Engineering focus">
      {items.map((item) => (
        <article key={item.title} className="focus-card">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </article>
      ))}
    </div>
  )
}
