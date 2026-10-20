const education = [
    ['Pearson HND in Computing (Software Engineering)', 'ESOFT Metro Campus (Pearson Assured)', 'FEB 2024 - SEP 2025'],
    ['Pearson Level 3 Diploma in Information Technology', 'ESOFT Metro Campus (Pearson Assured)', 'JUL 2023 - APR 2024'],
    ['Pearson Level 3 Diploma in English', 'ESOFT Metro Campus (Pearson Assured)', 'JUL 2023 - APR 2024'],
    ['GCE Ordinary Level (O/L)', 'MR/ Siddratha College Weligama', 'JAN 2020 - MAY 2023'],
];

function Education() {
    return (
        <section id="education" className="section">
            <h2>Educations</h2>
            <div className="table-wrap"><table className="content-table"><thead><tr><th>Qualification</th><th>Institute</th><th>Year</th></tr></thead><tbody>
                {education.map(([qualification, institute, year]) => <tr key={qualification}><td>{qualification}</td><td>{institute}</td><td>{year}</td></tr>)}
            </tbody></table></div>
        </section>
    );
}

export default Education;
