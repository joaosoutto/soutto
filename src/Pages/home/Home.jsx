import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <section className={styles.container}>
      <div className={`${styles.port} animeLeft`}>
        <h1>My</h1>
        <h1>Portfolio</h1>
      </div>
      <div className={`${styles.stacks} animeLeft`}>
        <p className={styles.stack}>ReactJS</p>
        <p className={styles.stack}>JavaScript</p>
        <p className={styles.stack}>HTML</p>
        <p className={styles.stack}>CSS</p>
        <p className={styles.stack}>NodeJS</p>
        <p className={styles.stack}>MySQL</p>
        <p className={styles.stack}>MongoDB</p>
        <p className={styles.stack}>Python</p>
      </div>
    </section>
  );
};

export default Home;
