import './App.css'

const linkItems = [
  {
    title: 'Vibe Coding: The Beginner\'s Guide',
    subtitle: 'Master the art of AI-assisted app building with AI & Cursor...',
    icon: '⟡',
    tone: 'purple',
    href: '#'
  },
  {
    title: 'GitHub / Xrafsdreamscom',
    subtitle: 'Open-source code, starter templates & micro-ideas',
    icon: '◌',
    tone: 'blue',
    href: '#'
  },
  {
    title: 'Twitter / @Xrafsdreamscom',
    subtitle: 'Daily notes on generative AI, product hacking & craft',
    icon: 'x',
    tone: 'amber',
    href: '#'
  },
  {
    title: 'Personal Portfolio & Lab',
    subtitle: 'Selected work, 30+ experiments & WebGL, da...',
    icon: '✦',
    tone: 'green',
    href: '#'
  },
  {
    title: 'Get in Touch',
    subtitle: '@xrafsdreamscom • Open to advising & contracts',
    icon: '✉',
    tone: 'pink',
    href: '#'
  }
]

const socialLinks = [
  { label: 'Globe', icon: '◎', href: '#' },
  { label: 'LinkedIn', icon: 'in', href: '#' },
  { label: 'Dribbble', icon: '◫', href: '#' },
  { label: 'Mail', icon: '✉', href: '#' }
]

function App() {
  return (
    <main className="page-shell">
      <div className="hub-card">
        <header className="topbar">
          <div className="brand" aria-label="Links home">
            <span className="brand-icon">✦</span>
            <span>Links</span>
          </div>

          <div className="top-actions" aria-label="Quick actions">
            <button type="button" className="icon-button" aria-label="Theme switch">
              ☾
            </button>
            <button type="button" className="icon-button" aria-label="Share profile">
              ↗
            </button>
            <button type="button" className="icon-button profile-pill" aria-label="Profile menu">
              ☰
            </button>
          </div>
        </header>

        <section className="profile-panel" aria-labelledby="profile-name">
          <div className="avatar-shell">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80"
              alt="Profile portrait"
            />
            <span className="avatar-plus" aria-label="Online status">＋</span>
          </div>

          <h1 id="profile-name">Dreamer</h1>
          <p className="handle">@Xrafsdreamscom · San Francisco / Remote</p>

          <p className="bio">
            Product builder &amp; Debugger and Software Engineer. Shipping software with AI,
            React, and resilient systems.
          </p>

          <div className="chip-row" aria-label="Profile tags">
            <span className="chip">Founder</span>
            <span className="chip">Build &amp; vibe</span>
            <span className="chip">Travel</span>
          </div>
          <div className="chip-row secondary" aria-label="Additional tags">
            <span className="chip">LLM &amp; Agents</span>
            <span className="chip">Vlog: Synthwave Focus Radio</span>
          </div>
        </section>

        <section className="link-list" aria-label="Profile links">
          {linkItems.map((item) => (
            <a key={item.title} href={item.href} className="link-item" target="_blank" rel="noreferrer">
              <span className={`link-icon ${item.tone}`} aria-hidden="true">{item.icon}</span>
              <span className="link-copy">
                <span className="link-title">{item.title}</span>
                <span className="link-subtitle">{item.subtitle}</span>
              </span>
              <span className="link-arrow" aria-hidden="true">→</span>
            </a>
          ))}
        </section>

        <div className="connect-bar">
          <span>Connect anywhere</span>
          <div className="social-row" aria-label="Social links">
            {socialLinks.map((social) => (
              <a key={social.label} href={social.href} className="social-link" aria-label={social.label} target="_blank" rel="noreferrer">
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
