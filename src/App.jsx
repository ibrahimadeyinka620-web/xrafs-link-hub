import { useState } from 'react'
import './App.css'

const links = [
  { label: 'Instagram', detail: 'Photos & little moments', href: 'https://www.instagram.com/', icon: 'ig' },
  { label: 'GitHub', detail: 'Things I am building', href: 'https://github.com/', icon: 'gh' },
  { label: 'My portfolio', detail: 'Selected work & projects', href: 'https://www.x.com/', icon: '↗' },
  { label: 'Say hello', detail: 'xrafselon@gmail.com', href: 'mailto:xrafselon@gmail.com', icon: '@' },
]

function App() {
  const [isDark, setIsDark] = useState(false)

  return (
    <main className={`page min-h-screen ${isDark ? 'theme-dark' : ''}`}>
      <div className="paper-grain" aria-hidden="true" />
      <div className="page-inner mx-auto w-full max-w-xl px-6">
        <header className="topbar flex items-center justify-between">
          <a className="wordmark" href="#home" aria-label="Home">little<span>links</span><b>.</b></a>
          <button
            className="theme-toggle"
            type="button"
            onClick={() => setIsDark(!isDark)}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          >
            <span aria-hidden="true">{isDark ? '☼' : '◐'}</span>
            {isDark ? 'Light' : 'Dark'} mode
          </button>
        </header>

        <section id="home" className="profile" aria-labelledby="profile-name">
          <div className="portrait-wrap">
            <img
              className="portrait"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=320&h=320&q=85"
              alt="Portrait of Maya Chen"
            />
            <span className="status-dot" aria-label="Available for projects" />
          </div>
          <p className="eyebrow"><span /> A LITTLE BIT ABOUT ME</p>
          <h1 id="profile-name">Hey, I’m <span>Xrafs</span></h1>
          <p className="bio">Designer, daydreamer, and collector of tiny joys. I make thoughtful things for the internet and share bits of the process here.</p>
          <p className="location"><span aria-hidden="true">✳</span> Currently somewhere in Brooklyn, NY</p>
        </section>

        <section className="links-section" aria-labelledby="links-heading">
          <div className="section-heading flex items-end justify-between">
            <div>
              <p className="eyebrow">FIND ME AROUND</p>
              <h2 id="links-heading">The good stuff</h2>
            </div>
            <span className="link-count">0{links.length} LINKS</span>
          </div>
          <div className="link-list">
            {links.map((link, index) => (
              <a
                className="link-row flex items-center"
                href={link.href}
                key={link.label}
                target="_blank"
                rel="noreferrer"
                style={{ '--delay': `${index * 90}ms` }}
              >
                <span className={`link-icon icon-${index}`} aria-hidden="true">{link.icon}</span>
                <span className="link-copy">
                  <span className="link-label">{link.label}</span>
                  <span className="link-detail">{link.detail}</span>
                </span>
                <span className="link-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </section>

        <footer className="footer flex items-center justify-between">
          <span>MADE WITH A Xrafs Elon <span aria-hidden="true">☀</span></span>
          <span>© 2026 Xrafs Elon</span>
        </footer>
      </div>
    </main>
  )
}

export default App
