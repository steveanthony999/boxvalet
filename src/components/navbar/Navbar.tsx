import Link from 'next/link';
import Image from 'next/image';
import Hamburger from './hamburger/Hamburger';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <>
      <nav className={styles.main}>
        <div className={styles.inner}>
          <div className={styles.left}>
            <Link href='/'>
              <Image
                src='/logo.svg'
                alt='BoxValet logo'
                width={204}
                height={71}
                priority
              />
            </Link>
          </div>
          <div className={styles.right}>
            <ul>
              <li>
                <Link href='/howitworks'>HOW IT WORKS</Link>
              </li>
              <li>
                <Link href='/pricing'>PRICING</Link>
              </li>
              <li>
                <Link href='/signin'>SIGN IN</Link>
              </li>
              <li>
                <Link href='/contactus'>CONTACT US</Link>
              </li>
              <li>
                <Link href='/booking'>BOOK NOW</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* MOBILE */}
      <nav className={styles.mobile_main}>
        <div className={styles.logo}>
          <Link href='/'>
            <Image
              src='/logo.svg'
              alt='BoxValet logo'
              width={204}
              height={71}
              priority
            />
          </Link>
        </div>
        <div className={styles.hamburger}>
          <Hamburger />
        </div>
      </nav>
    </>
  );
}
