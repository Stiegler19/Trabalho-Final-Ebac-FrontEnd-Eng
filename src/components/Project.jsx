import styles from './Project.module.css';

export default function Project() {
  const meusProjetos = [
    {
      id: 1,
      title: "O Jardim de Epicuro",
      image: "/epicuro.png",
      description: "Webdesign criado para unir os estudos de filosofia e desenvolvimento front-end, inspirado na obra de Epicuro.",
      techs: ["React", "Tailwind", "Framer-Motion"],
      link: "https://o-jardim-de-epicuro.vercel.app/"
    },
    {
      id: 2,
      title: "PsicoMariana",
      image: "/psico.png",
      description: "Landing page conceitual focada em design moderno e clean, utilizando técnicas de UI/UX para uma experiência intuitiva.",
      techs: ["React", "Design Responsivo", "UX Design"],
      link: "https://psico-portfolio.vercel.app/"
    },
    {
      id: 3,
      title: "Portfolio Fotografia",
      image: "/foto.png",
      description: "Landing page profissional desenvolvida para o fotógrafo Henrique Abreu.",
      techs: ["React", "Layout Responsivo", "Assets"],
      link: "https://henrique-abreu-fotografia.vercel.app/"
    }
  ];

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2>Projetos</h2>
        <div className={styles.grid}>
          {meusProjetos.map((proj) => (
            <div key={proj.id} className={styles.card}>
              <div className={styles.imageContainer}>
                <img src={proj.image} alt={proj.title} className={styles.projectImg} />
              </div>
              <div className={styles.cardContent}>
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>
                <div className={styles.tags}>
                  {proj.techs.map((tech, index) => (
                    <span key={index} className={styles.tag}>{tech}</span>
                  ))}
                </div>
                <a href={proj.link} target="_blank" rel="noreferrer" className={styles.link}>
                  Ver Projeto
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}