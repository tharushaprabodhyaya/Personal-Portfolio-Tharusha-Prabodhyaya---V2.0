import { useState } from 'react';

const categories = ['All', 'Software & Web', 'UI/UX & Mobile', 'Graphics & Illustrations'];

const projects = [
  { title: 'Malcolm Lismore Photography Website', category: 'Software & Web', description: 'Technologies: HTML, CSS, JS', image: '/images/Project01.png', link: 'https://malcolmlismorephotography.netlify.app/home' },
  { title: 'E-space Solutions DBMS', category: 'Software & Web', description: 'Technologies: C#, SQL Sever, Guna, Krypton', image: '/images/Project02.jpg', link: 'https://github.com/tharushaprabodhyaya/Malcolm_Lismore_Photography_Website' },
  { title: 'Fresh Grocers Grocery Ordering Website UI Designs', category: 'UI/UX & Mobile', description: 'Technologies & Tools: Figma, Mockups', image: '/images/Project03.png', link: 'https://www.behance.net/gallery/236176743/Fresh-Grocers-Grocery-Ordering-Website-UI-Designs' },
];

const certifications = [
  { issuer: 'University of Moratuwa', title: 'Web Design for Beginners', image: '/images/uomLogo.png', link: 'https://open.uom.lk/verify' },
  { issuer: 'Simplilearn', title: 'Introduction to Graphic Design; Basics of UI/UX', image: '/images/smplilearnLogo.png', link: 'https://www.simplilearn.com/' },
  { issuer: 'Google', title: 'Gemini Certified University Student', image: '/images/googleLogo.webp', link: 'https://edu.google.accredible.com/7717e16d-a51c-4b08-ae61-5f48f6bc770a#acc.DL3Yjbdy' },
  { issuer: 'Great Learning', title: 'Frontend Development-HTML', image: '/images/greatlearningLogo.jpg', link: 'https://www.mygreatlearning.com/certificate/RGFRZIVK' },
  { issuer: 'SoloLearn', title: 'Introduction to SQL', image: '/images/sololearnLogo.jpg', link: 'https://www.sololearn.com/en/certificates/CC-0S9FMWOJ' },
];

const skills = ['HTML.png', 'CSS.png', 'JS.png', 'Java.jpg', 'Python.png', 'CSharp.webp', 'NET.png', 'PHP.png', 'SQL.webp', 'MongoDB.png', 'Figma.png', 'Photoshop.jpg'];

function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const visibleProjects = activeCategory === 'All' ? projects : projects.filter((project) => project.category === activeCategory);

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

      <section id="education" className="section"><h2>Educations</h2><div className="table-wrap"><table className="content-table"><thead><tr><th>Qualification</th><th>Institute</th><th>Year</th></tr></thead><tbody><tr><td>Pearson HND in Computing (Software Engineering)</td><td>ESOFT Metro Campus (Pearson Assured)</td><td>FEB 2024 - SEP 2025</td></tr><tr><td>Pearson Level 3 Diploma in Information Technology</td><td>ESOFT Metro Campus (Pearson Assured)</td><td>JUL 2023 - APR 2024</td></tr><tr><td>Pearson Level 3 Diploma in English</td><td>ESOFT Metro Campus (Pearson Assured)</td><td>JUL 2023 - APR 2024</td></tr><tr><td>GCE Ordinary Level (O/L)</td><td>MR/ Siddratha College Weligama</td><td>JAN 2020 - MAY 2023</td></tr></tbody></table></div></section>

      <section id="certifications" className="section"><h2>Certifications</h2><div className="container"><div className="card-container">{certifications.map((certificate) => <article className="card-article" key={certificate.title}><img src={certificate.image} alt={certificate.issuer} className="card-img" /><div className="card-data"><span className="card-description">{certificate.issuer}</span><h3>{certificate.title}</h3><a href={certificate.link} target="_blank" rel="noreferrer" className="card-button">View Certificate</a></div></article>)}</div></div></section>

      <section id="projects" className="section"><h2>Projects</h2><div className="project-filters" role="tablist" aria-label="Project categories">{categories.map((category) => <button key={category} className={activeCategory === category ? 'filter active' : 'filter'} onClick={() => setActiveCategory(category)} role="tab" aria-selected={activeCategory === category}>{category}</button>)}</div><div className="container"><div className="card-container project-cards">{visibleProjects.map((project) => <article className="card-article" key={project.title}><img src={project.image} alt={project.title} className="project-img" /><div className="card-data"><span className="card-description">{project.description}</span><h3>{project.title}</h3><a href={project.link} target="_blank" rel="noreferrer" className="card-button">View Project</a></div></article>)}</div></div>{visibleProjects.length === 0 && <p className="empty-state">Projects in this category are coming soon.</p>}</section>

      <section id="skills" className="section"><h2>Skills</h2><div className="container"><div className="skills-grid">{skills.map((skill) => <div className="skill-card" key={skill}><img src={`/images/${skill}`} alt={skill.split('.')[0]} /></div>)}</div></div></section>

      <section id="contact" className="section contact"><h2>Contact Me</h2><form name="contact" method="post" data-netlify="true"><input type="hidden" name="form-name" value="contact" /><p><label>Name<input type="text" name="name" required /></label></p><p><label>Email<input type="email" name="email" required /></label></p><p><label>Message<textarea name="message" required /></label></p><p><button type="submit">Send</button></p></form><div className="links"><a href="https://github.com/tharushaprabodhyaya" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/tharushaprabodhyaya/" target="_blank" rel="noreferrer">LinkedIn</a><a href="mailto:tharushaprabodhyaya@gmail.com">Email</a><a href="#home">Portfolio</a><a href="https://www.behance.net/tharushaprabodhyaya" target="_blank" rel="noreferrer">Behance</a></div></section>
      <footer><p>© 2026 Tharusha Prabodhyaya. All rights reserved.<br />✨ v1.2.0</p></footer>
    </>
  );
}

export default App;
