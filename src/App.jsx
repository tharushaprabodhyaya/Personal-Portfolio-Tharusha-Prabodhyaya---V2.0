import Education from './components/Education.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';

const certifications = [
  { issuer: 'University of Moratuwa', title: 'Web Design for Beginners', image: '/images/uomLogo.png', link: 'https://open.uom.lk/verify' },
  { issuer: 'Simplilearn', title: 'Introduction to Graphic Design; Basics of UI/UX', image: '/images/smplilearnLogo.png', link: 'https://www.simplilearn.com/' },
  { issuer: 'Google', title: 'Gemini Certified University Student', image: '/images/googleLogo.webp', link: 'https://edu.google.accredible.com/7717e16d-a51c-4b08-ae61-5f48f6bc770a#acc.DL3Yjbdy' },
  { issuer: 'Great Learning', title: 'Frontend Development-HTML', image: '/images/greatlearningLogo.jpg', link: 'https://www.mygreatlearning.com/certificate/RGFRZIVK' },
  { issuer: 'SoloLearn', title: 'Introduction to SQL', image: '/images/sololearnLogo.jpg', link: 'https://www.sololearn.com/en/certificates/CC-0S9FMWOJ' },
];

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">THARUSHA PRABODHYAYA</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li><li><a href="#education">Educations</a></li><li><a href="#certifications">Certifications</a></li><li><a href="#projects">Projects</a></li><li><a href="#skills">Skills</a></li><li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="home" className="hero">
        <div className="hero-text">
          <h1>Hello, I&apos;m Tharusha 👋</h1>
          <p>Undergraduate Student Software Engineering | UI/UX Enthusiast</p>
          <p className="bio">I am Motivated and detail-oriented undergraduate Software Engineering student with a strong passion for software engineering, web development, and IT systems. Actively learning new technologies and building real-world projects, with practical experience in programming, networking, and database management. Skilled at applying technical knowledge to solve real-world problems, with a commitment to continuous learning and professional growth. Eager to contribute to innovative projects, collaborate with dynamic teams, and develop industry-ready skills in software engineering.</p>
          <a href="#contact" className="hero-btn">Contact Me</a><a href="https://drive.google.com/file/d/1Rq5XyFiwGv2_odFtTfa43n6dIhx7PU6q/view?usp=sharing" target="_blank" rel="noreferrer" className="hero-btn-new">View My CV</a>
          <div className="social-media"><a href="https://www.linkedin.com/in/tharushaprabodhyaya/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://x.com/Tharusha5856" target="_blank" rel="noreferrer">X</a><a href="https://github.com/tharushaprabodhyaya" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.behance.net/tharushaprabodhyaya" target="_blank" rel="noreferrer">Behance</a><a href="mailto:tharushaprabodhyaya@gmail.com">Email</a></div>
        </div>
        <div className="hero-image"><img src="/images/ProfilePic.png" alt="Profile Image" /></div>
      </section>

      <Education />

      <section id="certifications" className="section"><h2>Certifications</h2><div className="container"><div className="card-container">{certifications.map((certificate) => <article className="card-article" key={certificate.title}><img src={certificate.image} alt={certificate.issuer} className="card-img" /><div className="card-data"><span className="card-description">{certificate.issuer}</span><h3>{certificate.title}</h3><a href={certificate.link} target="_blank" rel="noreferrer" className="card-button">View Certificate</a></div></article>)}</div></div></section>

      <Projects />

      <Skills />

      <section id="contact" className="section contact"><h2>Contact Me</h2><form name="contact" method="post" data-netlify="true"><input type="hidden" name="form-name" value="contact" /><p><label>Name<input type="text" name="name" required /></label></p><p><label>Email<input type="email" name="email" required /></label></p><p><label>Message<textarea name="message" required /></label></p><p><button type="submit">Send</button></p></form><div className="links"><a href="https://github.com/tharushaprabodhyaya" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/tharushaprabodhyaya/" target="_blank" rel="noreferrer">LinkedIn</a><a href="mailto:tharushaprabodhyaya@gmail.com">Email</a><a href="#home">Portfolio</a><a href="https://www.behance.net/tharushaprabodhyaya" target="_blank" rel="noreferrer">Behance</a></div></section>
      <footer><p>© 2026 Tharusha Prabodhyaya. All rights reserved.<br />✨ v1.2.0</p></footer>
    </>
  );
}

export default App;
