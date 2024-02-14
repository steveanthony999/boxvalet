import React, { PropsWithChildren } from 'react';
import Image from 'next/image';
import styles from './ArrowsAndButtons.module.css';

type PropType = PropsWithChildren<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
>;

export const DotButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button type='button' {...restProps}>
      <Image src={'/dot.svg'} alt={'dot'} width={10} height={10} priority />
      {children}
    </button>
  );
};

export const PrevButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    // className='embla__button embla__button--prev'
    <button className={styles.carousel_button} type='button' {...restProps}>
      <Image
        src={'/prevbutton.svg'}
        alt={'previous'}
        width={37}
        height={37}
        priority
      />
      {children}
    </button>
  );
};

export const NextButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    // className='embla__button embla__button--next'
    <button className={styles.carousel_button} type='button' {...restProps}>
      <Image
        src={'/nextbutton.svg'}
        alt={'previous'}
        width={37}
        height={37}
        priority
      />
      {children}
    </button>
  );
};
