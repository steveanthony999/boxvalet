import Image from 'next/image';
import styles from './Hero.module.css';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id='Hero' className={`${styles.hero_main} margin_t_75`}>
      <div className='container'>
        <div className={styles.hero_container}>
          <div className={styles.left}>
            <h1 className='heading_primary'>
              Store a Little. Save a Lot. It&apos;s That Simple.
            </h1>
            <p className='margin_t_25'>
              For when you need just a bit more space. Quick, secure,
              <br /> and tailored to your schedule.
            </p>
            <div className='margin_t_51'>
              <Link
                href='/booking'
                className='button button_primary corner_radius'
              >
                SCHEDULE YOUR PICKUP TODAY
              </Link>
              <Link
                href='/howitworks'
                className='button button_secondary corner_radius'
              >
                LEARN MORE
              </Link>
            </div>
          </div>
          <div className={styles.right}>
            <Image
              src='/heroimg.png'
              alt='Isometric Storage Room'
              width={469}
              height={428}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
