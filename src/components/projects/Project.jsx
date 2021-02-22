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
            <h3>{name}</h3>
          </div>
          <div className={styles.links}>
            <a href={ghrepo} target="_blank">
              <GHIco />
            </a>
            <a href={linkTo} target="_blank">
              <EXIco />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
