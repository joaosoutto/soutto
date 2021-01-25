import React from 'react';
import styles from './Project.module.css';
import GHIco from '../../assets/svgs/GHIco';
import EXIco from '../../assets/svgs/EXIco';

const Project = ({ name, src, ghrepo, linkTo }) => {
  return (
    <section className={styles.container}>
      <img src={src} alt="project cover" className={styles.image} />
      <div className={styles.middle}>
        <div className={styles.text}>
          <div className={styles.infos}>
            <h1>{name}</h1>
          </div>
          <div className={styles.links}>
            <a href={ghrepo} target="_blank">
              Ir para GittHub
              <span>
                <GHIco />
              </span>
            </a>
            <a href={linkTo} target="_blank">
              Ir para projeto
              <span>
                <EXIco />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
