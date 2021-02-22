import React from 'react';
import styles from './Projects.module.css';
import dogz from '../../assets/projects/dogz.jpg';
import pokemon from '../../assets/projects/pokemon.jpg';
import games from '../../assets/projects/games.jpg';
import cl from '../../assets/projects/cl.jpg';



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
      <Project
        name="Poke Decks"
        src={pokemon}
        ghrepo="https://github.com/joaosoutto/pokemon-deck"
        linkTo="https://pokedeckss.herokuapp.com/"
      />
            <Project
        name="Games E-commerce"
        src={games}
        ghrepo="https://github.com/joaosoutto/games-ecommerce"
        linkTo="https://github.com/joaosoutto/games-ecommerce"
      />
                  <Project
        name="CL Beauty"
        src={cl}
        ghrepo="https://github.com/joaosoutto/cl-beauty"
        linkTo="https://github.com/joaosoutto/cl-beauty"
      />
    </section>
  );
};

export default Projects;
