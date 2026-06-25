import { NavLink } from 'react-router-dom'

// The five permanent tabs. "Deliberately kept to five tabs because
// anything beyond that creates decision fatigue for new users."
// (Product Overview, Navigation Architecture.)
const tabs = [
  { to: '/home', icon: '🏠', label: 'Home' },
  { to: '/learn', icon: '📺', label: 'Learn' },
  { to: '/reps', icon: '🏛', label: 'My Reps' },
  { to: '/polis', icon: '🗣', label: 'Polis' },
  { to: '/passport', icon: '📘', label: 'Passport' },
]

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      {tabs.map((t) => (
        <NavLink
          key={t.to}
          to={t.to}
          className={({ isActive }) => 'nav-item' + (isActive ? ' active' : '')}
        >
          <span className="nav-icon">{t.icon}</span>
          <span className="nav-label">{t.label}</span>
        </NavLink>
      ))}
    </nav>
  )
}
