import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2>Contato</h2>
        <p>Gostou do meu trabalho? Vamos conversar!</p>

        <div className={styles.content}>
          {/* Formulário de Contato */}
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Seu Nome" required />
            <input type="email" placeholder="Seu E-mail" required />
            <textarea placeholder="Sua Mensagem" rows="5" required></textarea>
            <button type="submit">Enviar Mensagem</button>
          </form>

          {/* Links Sociais e Informações */}
          <div className={styles.info}>
            <h3>Redes Sociais</h3>
            <div className={styles.links}>
              <a href="https://github.com/Stiegler19" target="_blank" rel="noreferrer">
                GitHub (Stiegler19)
              </a>
              <a href="https://www.linkedin.com/in/eduardostiegler/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
            <div className={styles.address}>
              <p>📍 Telêmaco Borba, Paraná</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}