const skills = ['HTML.png', 'CSS.png', 'JS.png', 'Java.jpg', 'Python.png', 'CSharp.webp', 'NET.png', 'PHP.png', 'SQL.webp', 'MongoDB.png', 'Figma.png', 'Photoshop.jpg'];

function Skills() {
    return (
        <section id="skills" className="section">
            <h2>Skills</h2>
            <div className="container"><div className="skills-grid">
                {skills.map((skill) => <div className="skill-card" key={skill}><img src={`/images/${skill}`} alt={skill.split('.')[0]} /></div>)}
            </div></div>
        </section>
    );
}

export default Skills;
