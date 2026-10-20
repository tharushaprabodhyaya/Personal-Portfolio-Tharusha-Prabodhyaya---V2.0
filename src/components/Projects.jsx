import { useState } from 'react';

const categories = ['All', 'Software & Web', 'UI/UX & Mobile', 'Graphics & Illustrations'];

const projects = [
    { title: 'Malcolm Lismore Photography Website', category: 'Software & Web', description: 'Technologies: HTML, CSS, JS', image: '/images/Project01.png', link: 'https://malcolmlismorephotography.netlify.app/home' },
    { title: 'E-space Solutions DBMS', category: 'Software & Web', description: 'Technologies: C#, SQL Sever, Guna, Krypton', image: '/images/Project02.jpg', link: 'https://github.com/tharushaprabodhyaya/Malcolm_Lismore_Photography_Website' },
    { title: 'Fresh Grocers Grocery Ordering Website UI Designs', category: 'UI/UX & Mobile', description: 'Technologies & Tools: Figma, Mockups', image: '/images/Project03.png', link: 'https://www.behance.net/gallery/236176743/Fresh-Grocers-Grocery-Ordering-Website-UI-Designs' },
];

function Projects() {
    const [activeCategory, setActiveCategory] = useState('All');
    const visibleProjects = activeCategory === 'All' ? projects : projects.filter((project) => project.category === activeCategory);

    return (
        <section id="projects" className="section">
            <h2>Projects</h2>
            <div className="project-filters" role="tablist" aria-label="Project categories">
                {categories.map((category) => <button key={category} className={activeCategory === category ? 'filter active' : 'filter'} onClick={() => setActiveCategory(category)} role="tab" aria-selected={activeCategory === category}>{category}</button>)}
            </div>
            <div className="container"><div className="card-container project-cards">
                {visibleProjects.map((project) => <article className="card-article" key={project.title}><img src={project.image} alt={project.title} className="project-img" /><div className="card-data"><span className="card-description">{project.description}</span><h3>{project.title}</h3><a href={project.link} target="_blank" rel="noreferrer" className="card-button">View Project</a></div></article>)}
            </div></div>
            {visibleProjects.length === 0 && <p className="empty-state">Projects in this category are coming soon.</p>}
        </section>
    );
}

export default Projects;
