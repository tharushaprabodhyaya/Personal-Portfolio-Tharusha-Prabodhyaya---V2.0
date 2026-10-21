const education = [
    { qualification: 'Pearson HND in Computing (Software Engineering)', institute: 'ESOFT Metro Campus (Pearson Assured)', year: 'FEB 2024 - SEP 2025' },
    { qualification: 'Pearson Level 3 Diploma in Information Technology', institute: 'ESOFT Metro Campus (Pearson Assured)', year: 'JUL 2023 - APR 2024' },
    { qualification: 'Pearson Level 3 Diploma in English', institute: 'ESOFT Metro Campus (Pearson Assured)', year: 'JUL 2023 - APR 2024' },
    { qualification: 'GCE Ordinary Level (O/L)', institute: 'MR/ Siddratha College Weligama', year: 'JAN 2020 - MAY 2023' },
];

function Education() {
    return (
        <section id="education" className="section">
            <div className="section-heading">
                <span className="section-eyebrow">My academic journey</span>
                <h2>Education</h2>
            </div>
            <div className="education-grid">
                {education.map(({ qualification, institute, year }, index) => (
                    <article className="education-card" key={qualification}>
                        <div className="education-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</div>
                        <div className="education-card-content">
                            <span className="education-year">{year}</span>
                            <h3>{qualification}</h3>
                            <p>{institute}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Education;
