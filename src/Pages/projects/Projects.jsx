import React from 'react';
import styles from './Projects.module.css';
import dogz from '../../assets/projects/dogz.jpg';
import Project from '../../components/projects/Project';

const Projects = () => {
  return (
    <section className={`${styles.container} animeLeft`}>
      <Project
        name="Dogz"
        src={dogz}
        ghrepo="https://github.com/joaosoutto/dogz"
        linkTo="https://instadogz.herokuapp.com/"
      />
    </section>
  );
};

export default Projects;
