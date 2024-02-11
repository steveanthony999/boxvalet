import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer_main}>
      <div className='container text_white'>
        <div className={styles.footer_container}>Footer</div>
      </div>
    </footer>
  );
}
