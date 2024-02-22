'use client';

import { useState } from 'react';
import styles from './Hamburger.module.css';

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.container} onClick={toggleMenu}>
        <div
          className={`${styles.bar} ${isOpen ? styles.changeBar1 : ''}`}
        ></div>
        <div
          className={`${styles.bar} ${isOpen ? styles.changeBar2 : ''}`}
        ></div>
        <div
          className={`${styles.bar} ${isOpen ? styles.changeBar3 : ''}`}
        ></div>
      </div>
      <div
        className={`${styles.menuOverlay} ${
          isOpen ? styles.show : styles.hide
        }`}
      >
        <ul className={styles.menuItems}>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Services</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Hamburger;
