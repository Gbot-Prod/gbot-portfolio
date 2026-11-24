import { useEffect, useRef, useState } from 'react'
import './App.css'
import SkillContainer from './components/SkillContainer/SkillContainer.tsx'
import ProjectContainer from './components/ProjectContainer/ProjectContainer.tsx'
import Background from './components/Background/Background.tsx'
import Profile from './components/Profile/Profile.tsx'

const sections = [
  { id: 'cover', label: 'Cover Page' },
  { id: 'profile', label: 'Professional Profile' },
  { id: 'skills', label: 'Key Skills' },
  { id: 'projects', label: 'Projects & Work Samples' },
  { id: 'achievements', label: 'Achievements & Training' },
  { id: 'objective', label: 'Career Objective' },
  { id: 'contact', label: 'Contact Information' },
]

function App() {
  const scrollerRef = useRef<HTMLElement>(null)
  const [activeSection, setActiveSection] = useState(sections[0].id)

  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (mostVisible) setActiveSection(mostVisible.target.id)
      },
      { root: scroller, threshold: [0.35, 0.6, 0.8] },
    )

    scroller.querySelectorAll<HTMLElement>('[data-portfolio-section]').forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const goToSection = (id: string) => {
    scrollerRef.current?.querySelector<HTMLElement>(`#${id}`)?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      block: 'start',
    })
  }

  return (
    <div className="portfolio-shell relative h-screen overflow-hidden text-white">
      <Background />
      <main ref={scrollerRef} className="portfolio-scroller relative z-10 h-full overflow-y-auto">
        <section id="cover" data-portfolio-section className="portfolio-section">
          <Profile />
        </section>

        <section id="profile" data-portfolio-section className="portfolio-section">
          <div className="section-content">
            <p className="section-kicker">02 / About</p>
            <h2 className="section-title">Professional Profile</h2>
            <div className="glass-panel">
              <p>
                Add a brief introduction: who you are, what you are studying or have studied,
                and the kind of work you are interested in pursuing.
              </p>
              <div className="profile-details">
                <div>
                  <h3>Education</h3>
                  <p>Add your school, qualification, and relevant dates.</p>
                </div>
                <div>
                  <h3>Career interests</h3>
                  <p>Describe the roles, industries, or problems that interest you.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" data-portfolio-section className="portfolio-section">
          <div className="section-content">
            <p className="section-kicker">03 / Capabilities</p>
            <SkillContainer />
            <p className="section-hint">
              Add a brief example showing how you have used these technical and transferable skills.
            </p>
          </div>
        </section>

        <section id="projects" data-portfolio-section className="portfolio-section">
          <div className="section-content">
            <p className="section-kicker">04 / Selected work</p>
            <ProjectContainer />
            <p className="section-hint">
              For each project, include your contribution, skills demonstrated, and the outcome or
              lesson learned.
            </p>
          </div>
        </section>

        <section id="achievements" data-portfolio-section className="portfolio-section">
          <div className="section-content">
            <p className="section-kicker">05 / Experience</p>
            <h2 className="section-title">Achievements &amp; Training</h2>
            <div className="glass-panel">
              <p>
                Add relevant awards, certificates, seminars, internships, volunteer work, or
                organizational experience.
              </p>
            </div>
          </div>
        </section>

        <section id="objective" data-portfolio-section className="portfolio-section">
          <div className="section-content">
            <p className="section-kicker">06 / Direction</p>
            <h2 className="section-title">Career Objective</h2>
            <div className="glass-panel">
              <p>
                Write a concise statement about your professional goals and how you hope to
                contribute to your chosen field.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" data-portfolio-section className="portfolio-section">
          <div className="section-content">
            <p className="section-kicker">07 / Get in touch</p>
            <h2 className="section-title">Contact Information</h2>
            <div className="glass-panel contact-panel">
              <p>Add a professional email address and links to relevant professional profiles.</p>
            </div>
          </div>
        </section>
      </main>

      <nav className="section-indicator" aria-label="Portfolio sections">
        {sections.map((section, index) => (
          <button
            aria-label={`Go to ${section.label}`}
            aria-current={activeSection === section.id ? 'location' : undefined}
            className={`indicator-link${activeSection === section.id ? ' is-active' : ''}`}
            key={section.id}
            onClick={() => goToSection(section.id)}
            type="button"
          >
            <span className="indicator-number">{String(index + 1).padStart(2, '0')}</span>
            <span className="indicator-label">{section.label}</span>
          </button>
        ))}
      </nav>
    </div>
  )
}

export default App
