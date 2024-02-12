import Link from 'next/link';
import styles from './Benefits.module.css';
import Image from 'next/image';

export default function Benefits() {
  return (
    <section id='Benefits' className={`${styles.benefits_main} padding_tb_121`}>
      <div className='container text_white'>
        <div className={styles.benefits_container}>
          <div className={styles.left}>
            <h2 className='heading_secondary'>Solutions. for Everyone.</h2>
            <p className='margin_t_25 text_justify'>
              At BoxValet, we believe in providing flexible and efficient
              storage solutions that cater to a wide array of needs. Whether
              you&apos;re an individual seeking micro storage options for
              personal belongings, a small business needing temporary space for
              inventory, a large corporation looking for an organized way to
              store important documents, or a convention organizer in search of
              a reliable partner to handle event materials, BoxValet has got you
              covered.
            </p>
            <p className='margin_t_25 text_justify'>
              Our tailored services ensure that whether your storage needs are
              big or small, short-term or ongoing, we provide a hassle-free,
              secure, and cost-effective solution. With BoxValet, experience the
              ease of storage and delivery services that adapt to your unique
              requirements, simplifying logistics and freeing up valuable space
              and time for what matters most in your personal and professional
              life.
            </p>
            <div className='margin_t_51'>
              <Link
                href={'/contactus'}
                className='button button_primary corner_radius'
              >
                TALK TO OUR EXPERTS
              </Link>
            </div>
          </div>
          <div className={styles.right}>
            <Image
              src='/beneimg1.jpg'
              alt='Isometric Storage Room'
              width={251}
              height={251}
              priority
              style={{ objectFit: 'cover' }}
              className='corner_radius'
            />
            <Image
              src='/beneimg2.jpg'
              alt='Isometric Storage Room'
              width={251}
              height={251}
              priority
              style={{ objectFit: 'cover' }}
              className='corner_radius'
            />
            <Image
              src='/beneimg3.jpg'
              alt='Isometric Storage Room'
              width={251}
              height={251}
              priority
              style={{ objectFit: 'cover' }}
              className='corner_radius'
            />
            <Image
              src='/beneimg4.jpg'
              alt='Isometric Storage Room'
              width={251}
              height={251}
              priority
              style={{ objectFit: 'cover' }}
              className='corner_radius'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
