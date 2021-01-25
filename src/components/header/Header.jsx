import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/logo_robot.png';

import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.navDiv1}>
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="logo" style={{ width: '70px' }} />
          <h1 className={styles.logoT}>soutto</h1>
        </Link>
      </div>

      <div className={styles.navDiv2}>
        <NavLink to="/about" className={styles.linkB} activeClassName={styles.active}>
          Sobre
        </NavLink>
        <NavLink to="/projects" className={styles.linkB} activeClassName={styles.active}>
         Projetos
        </NavLink>
        <NavLink to="/contact" className={styles.linkB} activeClassName={styles.active}>
         Contato
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
