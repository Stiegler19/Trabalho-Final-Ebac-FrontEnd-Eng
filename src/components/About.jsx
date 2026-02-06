import styles from './About.module.css';
import eu from '/src/assets/eu.jpg'; // Certifique-se de que o caminho da imagem está correto

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.imageArea}>
          {/* Substitua o src pelo caminho da sua foto na pasta assets */}
          <img 
            src={eu} 
            alt="Eduardo A. Stiegler" 
            className={styles.profilePic} 
          />
        </div>
        
        <div className={styles.content}>
          <h1>Eduardo A. Stiegler</h1>
          <h3>Desenvolvedor Front-end / UI e UX Design</h3>
          
          <p>
            Localizado em Telêmaco Borba - PR, sou um desenvolvedor apaixonado por tecnologia 
            e inovação, trago uma 
            base sólida em resolução de problemas e processos lógicos para o mundo do desenvolvimento.
          </p>
          
          <p>
            Atualmente, foco na criação de interfaces modernas e funcionais utilizando React e Next 
            buscando sempre entregar a melhor experiência para o usuário.
          </p>

          <div className={styles.contactInfo}>
            <span>📍 Telêmaco Borba, PR</span>
            <a href="mailto:eduarpelau@gmail.com" className={styles.btnContact}>Entrar em contato</a>
          </div>
        </div>
      </div>
    </section>
  );
}