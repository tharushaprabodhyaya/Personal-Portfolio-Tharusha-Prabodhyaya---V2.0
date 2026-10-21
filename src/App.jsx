import { useEffect, useState } from 'react';
import Education from './components/Education.jsx';
import Certifications from './components/Certifications.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';



function App() {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const hasSeenWelcome = window.localStorage.getItem('portfolio-welcome-seen');
    setShowWelcome(!hasSeenWelcome);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('welcome-open', showWelcome);

    return () => document.body.classList.remove('welcome-open');
  }, [showWelcome]);

  useEffect(() => {
    if (!showWelcome) return undefined;

    const handleEscape = (event) => {
      if (event.key === 'Escape') closeWelcome();
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [showWelcome]);

  const closeWelcome = () => {
    window.localStorage.setItem('portfolio-welcome-seen', 'true');
    setShowWelcome(false);
  };

  return (
    <>
      {showWelcome && (
        <div className="welcome-overlay" role="presentation" onClick={closeWelcome}>
          <section className="welcome-modal" role="dialog" aria-modal="true" aria-labelledby="welcome-title" onClick={(event) => event.stopPropagation()}>
            <div className="welcome-wave" aria-hidden="true">👋</div>
            <h2 id="welcome-title">Welcome to My Personal Portfolio Website!</h2>
            <p>&lt; @tharushaprabodhyaya &gt;</p>
            <p aria-hidden="true">🧑‍💻 🚀</p>
            <button type="button" className="welcome-button" onClick={closeWelcome}>OK</button>
          </section>
        </div>
      )}
      <nav className="navbar">
        <div className="logo">THARUSHA PRABODHYAYA</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li><li><a href="#education">Educations</a></li><li><a href="#certifications">Certifications</a></li><li><a href="#projects">Projects</a></li><li><a href="#skills">Skills</a></li><li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="home" className="hero">
        <div className="hero-text">
          <h1>Hello, I&apos;m Tharusha 👋</h1>
          <p className="about">Undergraduate Student Software Engineering | UI/UX Enthusiast</p>
          <p className="bio">I am Motivated and detail-oriented undergraduate Software Engineering student with a strong <br></br>
            passion for software engineering, web development, and IT systems. Actively learning new technologies <br></br>and
            building real-world projects, with practical experience in programming, networking, and database
            management. Skilled at applying technical knowledge to solve real-world problems, with a commitment <br></br>
            to continuous learning and professional growth. Eager to contribute to innovative projects, collaborate <br></br>
            with dynamic teams, and develop industry-ready skills in software engineering.</p>
          <a className="quick-access-btn" href="#contact">Contact Me</a><a href="https://drive.google.com/file/d/1Rq5XyFiwGv2_odFtTfa43n6dIhx7PU6q/view?usp=sharing" target="_blank" rel="noreferrer" className="hero-btn-new">View My CV</a>
          <div className="social-media"><a href="https://www.linkedin.com/in/tharushaprabodhyaya/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fa-brands fa-square-linkedin" aria-hidden="true"></i></a>
            <a href="https://x.com/Tharusha5856" target="_blank" rel="noreferrer"><i class="fa-brands fa-square-x-twitter"></i></a>
            <a href="https://github.com/tharushaprabodhyaya" target="_blank" rel="noreferrer"><i class="fa-brands fa-square-github"></i></a>
            <a href="https://www.behance.net/tharushaprabodhyaya" target="_blank" rel="noreferrer"><i class="fa-brands fa-square-behance"></i></a>
            <a href="mailto:tharushaprabodhyaya@gmail.com"><i class="fa-solid fa-square-envelope"></i></a></div>
        </div>
        <div className="hero-image"><img src="/images/ProfilePic.png" alt="Profile Image" /></div>
      </section>

      <Education />

      <Certifications />

      <Projects />

      <Skills />

      <section id="contact" className="section contact"><h2>Contact Me</h2><form name="contact" method="post" data-netlify="true"><input type="hidden" name="form-name" value="contact" /><p><label>Name<input type="text" name="name" required /></label></p><p><label>Email<input type="email" name="email" required /></label></p><p><label>Message<textarea name="message" required /></label></p><p><button type="submit">Send</button></p></form><div className="links"><a href="https://github.com/tharushaprabodhyaya" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/tharushaprabodhyaya/" target="_blank" rel="noreferrer">LinkedIn</a><a href="mailto:tharushaprabodhyaya@gmail.com">Email</a><a href="#home">Portfolio</a><a href="https://www.behance.net/tharushaprabodhyaya" target="_blank" rel="noreferrer">Behance</a></div></section>
      <footer><p>© 2026 Tharusha Prabodhyaya. All rights reserved.<br />✨ v1.2.0</p></footer>
    </>
  );
}

export default App;
