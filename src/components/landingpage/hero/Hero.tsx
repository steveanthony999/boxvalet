import Image from 'next/image';
import styles from './Hero.module.css';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id='Hero' className={styles.hero_main}>
      <div className='container'>
        <div className={styles.hero_container}>
          <div className={styles.left}>
            <h1>Store a Little. Save a Lot. It’s That Simple.</h1>
            <p>
              For when you need just a bit more space. Quick, secure, and
              tailored to your schedule.
            </p>
            <Link href='/booking'>SCHEDULE YOUR PICKUP TODAY</Link>
            <Link href='/howitworks'>LEARN MORE</Link>
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
