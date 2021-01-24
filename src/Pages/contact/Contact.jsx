import React from 'react';
import GHIco from '../../assets/svgs/GHIco';
import IGIco from '../../assets/svgs/IGIco';
import LKIco from '../../assets/svgs/LKIco';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section className={`${styles.container} animeLeft`}>
      <div className={styles.contact}>
        <div className={styles.right}>
          <h1 className={styles.title}>joaosoutto@hotmail.com</h1>
          <h3 className={styles.subtitle}>(31) 99341-7939</h3>
        </div>
        <div className={styles.social}>
          <a
            className={styles.link}
            href="https://www.linkedin.com/in/joaosoutto/"
            target="_blank"
          >
            <LKIco /> <span>Linkedin</span>
          </a>
          <a
            className={styles.link}
            href="https://github.com/joaosoutto"
            target="_blank"
          >
            <GHIco />
            <span>GitHub</span>
          </a>
          <a
            className={styles.link}
            href="https://www.instagram.com/jsoutto/"
            target="_blank"
          >
            <IGIco /> <span>Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
