import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer_main}>
      <div className='container text_white'>
        <div className={styles.footer_container}>
          <Link href='/'>
            <Image
              src='/logodark.svg'
              alt='BoxValet logo'
              width={204}
              height={71}
              priority
            />
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Malesuada fames ac turpis egestas integer eget aliquet nibh.
          </p>
          <ul>
            <li>Contact</li>
            <li>
              <Link href='#' />
              Phone:{' '}
            </li>
            <li>
              <Link href='#' />
              Email:{' '}
            </li>
          </ul>
          <ul>
            <li>Support</li>
            <li>
              <Link href='/privacypolicy' className='text_white'>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href='/termsofservice' className='text_white'>
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
