import Image from 'next/image';
import Card from './card/Card';
import styles from './Overview.module.css';

export default function Overview() {
  const cardsData = [
    {
      cardImage: (
        <Image
          src='/truck.png'
          alt='Isometric Storage Room'
          width={64}
          height={64}
          priority
        />
      ),
      cardHeader: 'We Bring You Boxes',
      cardParagraph: 'Or whatever other storage containers you&apos;ll need.',
    },
    {
      cardImage: (
        <Image
          src='/clipboard.png'
          alt='Isometric Storage Room'
          width={64}
          height={64}
          priority
        />
      ),
      cardHeader: 'We Pick Up When Ready',
      cardParagraph: 'We&apos;ll provide an itemized invoice.',
    },
    {
      cardImage: (
        <Image
          src='/shelf.png'
          alt='Isometric Storage Room'
          width={64}
          height={64}
          priority
        />
      ),
      cardHeader: 'We Store Your Items',
      cardParagraph: 'In a location-specific, climate-controlled facility.',
    },
    {
      cardImage: (
        <Image
          src='/hand.png'
          alt='Isometric Storage Room'
          width={64}
          height={64}
          priority
        />
      ),
      cardHeader: 'We Return Your Items',
      cardParagraph: 'With our on-demand return services.  Any time.',
    },
  ];

  return (
    <section id='Overview' className={styles.overview_main}>
      <div className='container'>
        <div className={styles.overview_container}>
          <h2>Sit Back. Relax. We’ll Handle It.</h2>
          {cardsData.map((card, index) => (
            <Card
              key={index}
              cardImage={card.cardImage}
              cardHeader={card.cardHeader}
              cardParagraph={card.cardParagraph}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
