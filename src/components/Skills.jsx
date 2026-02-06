import styles from './Skills.module.css';

export default function Skills() {
  const devSkills = ["React", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS Modules", "Vite", "Git & GitHub"];
  const designSkills = ["UI Design", "UX Design", "Figma", "Design Responsivo", "Layout & Composição"];

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2>Habilidades</h2>
        
        <div className={styles.sections}>
          {/* Categoria de Desenvolvimento */}
          <div className={styles.category}>
            <h3>Desenvolvimento</h3>
            <div className={styles.grid}>
              {devSkills.map((skill, index) => (
                <div key={index} className={styles.skillItem}>{skill}</div>
              ))}
            </div>
          </div>

          {/* Categoria de Design */}
          <div className={styles.category}>
            <h3>Design & UX</h3>
            <div className={styles.grid}>
              {designSkills.map((skill, index) => (
                <div key={index} className={styles.skillItem}>{skill}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}