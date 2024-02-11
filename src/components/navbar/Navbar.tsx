import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.main}>
      <div className={styles.inner}>
        <div className={styles.left}>Left</div>
        <div className={styles.right}>Right</div>
      </div>
    </nav>
  );
}
