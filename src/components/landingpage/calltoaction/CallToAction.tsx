import Image from 'next/image';
import styles from './CallToAction.module.css';

export default function CallToAction() {
  return (
    <section id='CallToAction' className={styles.calltoaction_main}>
      <div className='container'>
        <div className={styles.calltoaction_container}>
          <Image
            src='/items.png'
            alt='Isometric Storage Room'
            width={480}
            height={480}
            priority
          />
          <h3>
            No matter how big or how small
            <br />
            Whether it is wide or if it&apos;s tall
            <br />
            Fits on a shelf or a whole wall
            <br />
            Simple Storage Solutions
            <br />
            For one and for all
          </h3>
          <p>GET MORE INFO IN YOUR INBOX</p>
          <form>
            <input type='email' />
            <input type='submit' />
          </form>
        </div>
      </div>
    </section>
  );
}
