const certifications = [
    { issuer: 'University of Moratuwa', title: 'Web Design for Beginners', image: '/images/uomLogo.png', link: 'https://open.uom.lk/verify' },
    { issuer: 'Simplilearn', title: 'Introduction to Graphic Design; Basics of UI/UX', image: '/images/smplilearnLogo.png', link: 'https://www.simplilearn.com/' },
    { issuer: 'Google', title: 'Gemini Certified University Student', image: '/images/googleLogo.webp', link: 'https://edu.google.accredible.com/7717e16d-a51c-4b08-ae61-5f48f6bc770a#acc.DL3Yjbdy' },
    { issuer: 'Great Learning', title: 'Frontend Development-HTML', image: '/images/greatlearningLogo.jpg', link: 'https://www.mygreatlearning.com/certificate/RGFRZIVK' },
    { issuer: 'SoloLearn', title: 'Introduction to SQL', image: '/images/sololearnLogo.jpg', link: 'https://www.sololearn.com/en/certificates/CC-0S9FMWOJ' },
];

function Certifications() {
    return (
        <section id="certifications" className="section">
            <h2>Certifications</h2>
            <div className="container">
                <div className="card-container">
                    {certifications.map((certificate) => (
                        <article className="card-article" key={certificate.title}>
                            <img src={certificate.image} alt={`${certificate.issuer} logo`} className="card-img" />
                            <div className="card-data">
                                <span className="card-description">{certificate.issuer}</span>
                                <h3>{certificate.title}</h3>
                                <a href={certificate.link} target="_blank" rel="noreferrer" className="card-button">
                                    View Certificate
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Certifications;