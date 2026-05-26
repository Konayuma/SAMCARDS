const logoUrl = new URL('./samcardsflat.png', import.meta.url).href
const heroImageUrl = new URL('./mukuka1.png', import.meta.url).href
const aboutImageUrl = new URL('./pcseated.png', import.meta.url).href

const iconMarkup = {
  laptop: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7A2.5 2.5 0 0 1 17.5 16h-11A2.5 2.5 0 0 1 4 13.5zM6.5 6A.5.5 0 0 0 6 6.5v7a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5zM3 18.25h18v1.5H3z" fill="currentColor"/></svg>',
  wrench: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.7 3.3a5.2 5.2 0 0 0-4.9 7L4 16.1V20h3.9l5.8-5.8a5.2 5.2 0 0 0 7-4.9 5.1 5.1 0 0 1-2 .4 5.2 5.2 0 0 1-5.2-5.2 5.1 5.1 0 0 1 .4-2ZM7.1 18.5H5.5V16.9l5-5a5.2 5.2 0 0 0 1.1 1.4Z" fill="currentColor"/></svg>',
  idea: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a6 6 0 0 0-3.3 11v2.3h6.6V14A6 6 0 0 0 12 3Zm-2.2 14.8h4.4v1.2h-4.4Zm.7 2.1h3v1.1h-3Z" fill="currentColor"/></svg>',
  student: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 2.5 7.5 12 12l7-3.3V14h1.5V7.5Zm-5.6 9V9.1L12 12l5.6-2.6V12c0 2.5-2.5 4.5-5.6 4.5S6.4 14.5 6.4 12Z" fill="currentColor"/></svg>',
  search: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 4a6 6 0 1 0 3.8 10.7l4.2 4.2 1.1-1.1-4.2-4.2A6 6 0 0 0 10 4Zm0 1.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Z" fill="currentColor"/></svg>',
  developer: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8.5 4.5h7A2.5 2.5 0 0 1 18 7v10a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 6 17V7a2.5 2.5 0 0 1 2.5-2.5Zm0 1.5A1 1 0 0 0 7.5 7v10a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Zm1.2 2.2 1 1-1.8 1.8 1.8 1.8-1 1L6.9 11Zm5.6 0 2.1 4.8-2.1 4.8-1.1-.5 1.8-4.3-1.8-4.3Zm-3.5.3h1.2l-1.1 8.4h-1.2Z" fill="currentColor"/></svg>',
  mentoring: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 12.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm8.5 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM2.5 19a5.5 5.5 0 0 1 11 0v1.5h-11Zm13.2 1.5V19a4.8 4.8 0 0 0-1.4-3.4 5 5 0 0 1 3.2-1.1 4.7 4.7 0 0 1 4.5 4.5v1.5Z" fill="currentColor"/></svg>',
  group: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 11a3 3 0 1 0-3-3 3 3 0 0 0 3 3Zm8 0a3 3 0 1 0-3-3 3 3 0 0 0 3 3ZM4 19a4 4 0 0 1 8 0Zm8 0a4 4 0 0 1 8 0Z" fill="currentColor"/></svg>',
  presentation: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 4.5h15v1.5h-15Zm1.5 3h12v8h-4.2l2.7 3.2-1.1.9-3.5-4.1H11l-3.5 4.1-1.1-.9L9.1 16H6Z" fill="currentColor"/></svg>',
  write: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15.7 4.3 19.7 8.3 9 19H5v-4Zm-1.1 1.1-8.2 8.2V18h4.4l8.2-8.2Z" fill="currentColor"/></svg>',
  phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.7 3.5H9l1.4 4.3-1.8 1.8c.9 1.8 2.4 3.3 4.2 4.2l1.8-1.8L19 13v2.3A3.7 3.7 0 0 1 15.3 19C9.7 19 5 14.3 5 8.7A3.7 3.7 0 0 1 6.7 3.5Z" fill="currentColor"/></svg>',
  mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 20 18H4a1.5 1.5 0 0 1-1.5-1.5v-9A1.5 1.5 0 0 1 4 6Zm0 1.8v.2l8 5 8-5v-.2Zm16 8.7v-6.3l-7.6 4.7a.8.8 0 0 1-.8 0L4 10.2v6.3Z" fill="currentColor"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM3.8 8h2.4v12H3.8ZM9 8h2.3v1.7h.1A3 3 0 0 1 14.1 8c2.6 0 3.1 1.7 3.1 3.9V20h-2.4v-7c0-1.7 0-3.8-2.1-3.8s-2.4 1.6-2.4 3.7V20H9Z" fill="currentColor"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h2V5.5A2.5 2.5 0 0 0 13.5 3H11a3 3 0 0 0-3 3v2H6v3h2v9h3v-9h2.5l.5-3H11V6a1 1 0 0 1 1-1h2Z" fill="currentColor"/></svg>',
  send: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 20.5 21 12 3 3.5V9l11 3-11 3Z" fill="currentColor"/></svg>',
}

const services = [
  { id: 1, title: 'IT Consultancy', icon: iconMarkup.laptop, desc: 'Strategic technology advice to modernise your business.' },
  { id: 2, title: 'Supply, Installation & Maintenance of IT Infrastructure', icon: iconMarkup.wrench, desc: 'End-to-end setup and upkeep of your IT systems.' },
  { id: 3, title: 'Career Coaching', icon: iconMarkup.idea, desc: 'Personalised guidance to accelerate your career path.' },
  { id: 4, title: 'Student Placement', icon: iconMarkup.student, desc: 'Connecting students with the right opportunities.' },
  { id: 5, title: 'Recruitment & Talent Search', icon: iconMarkup.search, desc: 'Finding exceptional talent for your organisation.' },
  { id: 6, title: 'Systems Development', icon: iconMarkup.developer, desc: 'Custom software built to solve your unique challenges.' },
  { id: 7, title: 'Student Mentorship', icon: iconMarkup.mentoring, desc: 'One-on-one mentorship to nurture the next generation.' },
  { id: 8, title: 'Team Building', icon: iconMarkup.group, desc: 'Workshops and activities that forge high-performing teams.' },
  { id: 9, title: 'Training', icon: iconMarkup.presentation, desc: 'Up-skill your workforce with hands-on training programmes.' },
  { id: 10, title: 'Content Creation & Management', icon: iconMarkup.write, desc: 'Compelling content strategies that grow your brand.' },
]

const infoItems = [
  { icon: iconMarkup.phone, label: 'Call or WhatsApp', value: '+260 961 850 020' },
  { icon: iconMarkup.mail, label: 'Email', value: 'sam.mukuka@gmail.com' },
  { icon: iconMarkup.linkedin, label: 'LinkedIn', value: '/samcards' },
  { icon: iconMarkup.facebook, label: 'Facebook', value: '/samcards' },
]

const servicesHtml = services
  .map(
    (service) => `
      <div class="service-card">
        <div class="card-inner">
          <div class="service-icon-wrap">${service.icon}</div>
          <h3 class="service-title">${service.title}</h3>
          <p class="service-desc">${service.desc}</p>
          <div class="card-arrow">→</div>
        </div>
      </div>
    `,
  )
  .join('')

const infoItemsHtml = infoItems
  .map(
    (item) => `
      <div class="info-item">
        <div class="info-icon-wrap">${item.icon}</div>
        <div class="details">
          <span class="detail-label">${item.label}</span>
          <span class="detail-value">${item.value}</span>
        </div>
      </div>
    `,
  )
  .join('')

const app = document.querySelector('#app')

app.innerHTML = `
  <div class="app-wrapper">
    <header class="navbar">
      <div class="container nav-container">
        <div class="logo">
          <a href="#home">
            <img src="${logoUrl}" alt="Samcards logo" class="logo-img" />
          </a>
        </div>
        <nav class="nav-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>

    <main>
      <section class="hero" id="home">
        <div class="container hero-container">
          <div class="hero-content">
            <p class="subtitle">WE</p>
            <h1 class="title">
              <span class="highlight">DIGITIZE</span><br />
              YOUR<br />
              BUSINESS
            </h1>
            <div class="divider"></div>
            <p class="description">
              Streamline your workflows, integrate smart automation, and stay ahead of the competition with modern tech solutions.
            </p>
            <div class="cta-buttons">
              <a href="#services" class="btn">Our Services</a>
              <a href="#contact" class="btn btn-outline">Contact Us</a>
            </div>
          </div>
          <div class="hero-image">
            <div class="blue-circle"></div>
            <div class="image-placeholder">
              <img src="${heroImageUrl}" alt="Samcards CEO" />
            </div>
          </div>
        </div>
      </section>

      <section class="about" id="about">
        <div class="container about-container">
          <div class="about-content">
            <h2 class="section-title">About Samcards</h2>
            <div class="divider"></div>
            <p class="about-text">
              At Samcards, we are dedicated to helping businesses and individuals navigate the complexities of the modern digital landscape. With a focus on innovation and efficiency, we provide comprehensive solutions designed to streamline your workflows and integrate smart automation.
            </p>
            <p class="about-text">
              Our expertise spans across IT consultancy, systems development, and professional coaching. Whether you're looking to upgrade your IT infrastructure, develop custom software, or seek guidance in your career, our team is committed to delivering excellence and ensuring you stay ahead of the competition.
            </p>
            <p class="about-text">
              We believe in the power of technology to transform businesses and empower individuals. Let us partner with you to achieve your goals and unlock your full potential.
            </p>
          </div>
          <div class="about-image">
            <img src="${aboutImageUrl}" alt="Team working together" />
          </div>
        </div>
      </section>

      <section class="services" id="services">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Our Services</h2>
            <div class="divider"></div>
            <p class="section-subtitle">Comprehensive solutions tailored to your business and personal growth needs.</p>
          </div>

          <div class="services-grid">
            ${servicesHtml}
          </div>
        </div>
      </section>

      <section class="contact" id="contact">
        <div class="container">
          <div class="contact-wrapper">
            <div class="contact-info">
              <p class="info-eyebrow">LET'S TALK</p>
              <h2 class="section-title">Get In Touch</h2>
              <div class="divider"></div>
              <p class="contact-desc">
                Ready to digitize your business or take the next step in your career? Reach out — we'd love to hear from you.
              </p>

              <div class="info-items">
                ${infoItemsHtml}
              </div>

              <div class="blob blob-1"></div>
              <div class="blob blob-2"></div>
            </div>

            <div class="contact-form-container">
              <h3 class="form-title">Send a Message</h3>
              <p class="form-subtitle">We'll get back to you within 24 hours.</p>

              <form id="contact-form" class="contact-form">
                <div class="form-row">
                  <div class="form-group">
                    <label for="name">Your Name</label>
                    <input type="text" id="name" name="name" required placeholder="Your full name" />
                  </div>
                  <div class="form-group">
                    <label for="email">Your Email</label>
                    <input type="email" id="email" name="email" required placeholder="your@email.com" />
                  </div>
                </div>

                <div class="form-group">
                  <label for="message">Message</label>
                  <textarea id="message" name="message" rows="6" required placeholder="Tell us how we can help you..."></textarea>
                </div>

                <button type="submit" class="btn submit-btn">
                  ${iconMarkup.send}
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="container footer-container">
        <div class="footer-content">
          <div class="footer-logo">
            <a href="#home">
              <img src="${logoUrl}" alt="Samcards logo" class="footer-logo-img" />
            </a>
          </div>
          <p class="footer-text">Digitize your business with modern tech solutions.</p>
          <div class="social-links">
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="Facebook">f</a>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; ${new Date().getFullYear()} Samcards. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
`

document.querySelector('#contact-form')?.addEventListener('submit', (event) => {
  event.preventDefault()
  const form = event.currentTarget
  const formData = new FormData(form)
  const name = String(formData.get('name') || '')
  const email = String(formData.get('email') || '')
  const message = String(formData.get('message') || '')

  const subject = encodeURIComponent(`Inquiry from ${name}`)
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)
  window.location.href = `mailto:sam.mukuka@gmail.com?subject=${subject}&body=${body}`
})
