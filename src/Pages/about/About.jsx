import React from "react";
import styles from "./About.module.css";
import me from "../../assets/me.png";
// import Header from '../../components/Header/Header';

const About = () => {
  return (
    <section className={`${styles.container} animeLeft`}>
      <div className={styles.left}>
        <img className={styles.photo} src={me} alt="me" />
      </div>
      <div className={styles.right}>
        <h1 className={styles.maintitle}>
          Olá! Eu sou o <span className={styles.myself}>João Soutto.</span>
        </h1>
        <p>
          Filósofo por formação, sempre gostei de conhecer coisas novas e
          aprender como tudo funciona. Foi assim que, recentemente, descobri a
          programação!
        </p>
        <br />
        <br />

        <p>
          Sem saber ao certo como começar a estudar, conheci a{" "}
          <a
            className={styles.trybe}
            href="https://betrybe.com"
            target="_blank"
          >
            TRYBE
          </a>
          , um lugar onde tenho aprendido muito acerca de desenvolvimento web!
        </p>
        <br />
        <br />

        <p>
          Desde então, tenho o intuito de me tornar um desenvolvedor full stack
          e nesse portfolio você pode acompanhar meu crescimento e visualizar
          meus projetos desenvolvidos desde que comecei a mergulhar nessa área!
          Espero que você goste e não se esqueça de entrar em contato! Quem sabe
          não criamos algo surpreendente juntos?!
        </p>
      </div>
    </section>
  );
};

export default About;
