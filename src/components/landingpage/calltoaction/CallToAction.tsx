import Image from 'next/image';
import styles from './CallToAction.module.css';

export default function CallToAction() {
  return (
    <section
      id='CallToAction'
      className={`${styles.calltoaction_main} padding_tb_121`}
    >
      <div className='container'>
        <div className={styles.calltoaction_container}>
          <div className={styles.left}>
            <Image
              src='/items.png'
              alt='Isometric Storage Room'
              width={480}
              height={480}
              priority
            />
          </div>
          <div className={styles.right}>
            <div className={styles.top}>
              <div className='heading_tertiary text_right'>
                <div className='text_uppercase'>
                  No matter how big or how small
                </div>
                <br />
                <div className='text_uppercase'>
                  Whether it is wide or if it&apos;s tall
                </div>
                <br />
                <div className='text_uppercase'>
                  Fits on a shelf or a whole wall
                </div>
                <br />
                <div className='heading_secondary'>
                  Simple Storage Solutions
                </div>
                <br />
                <div className='text_uppercase'>For one and for all</div>
              </div>
            </div>
            <div className={`${styles.bottom} corner_radius`}>
              <p className='heading_tertiary text_white'>
                GET MORE INFO IN YOUR INBOX
              </p>
              <form className='margin_t_25'>
                <input type='email' />
                <input type='submit' />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
