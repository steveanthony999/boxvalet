import styles from './Card.module.css';

interface CardProps {
  cardImage: JSX.Element;
  cardHeader: string;
  cardParagraph: string;
}

export default function Card({
  cardImage,
  cardHeader,
  cardParagraph,
}: CardProps) {
  return (
    <div className={styles.card}>
      <div>{cardImage}</div>
      <div>{cardHeader}</div>
      <div>{cardParagraph}</div>
    </div>
  );
}
