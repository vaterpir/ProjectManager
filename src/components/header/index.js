import React from 'react';
import styles from './header';

const Svg = () => (
  <svg
    width='40'
    height='40'
    viewBox='0 0 40 40'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g filter='url(#filter0_d)'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3.5 7C1.567 7 0 5.433 0 3.5C0 1.567 1.567 0 3.5 0H36.5C38.433 0 40 1.567 40 3.5C40 5.433 38.433 7 36.5 7H3.5ZM4 22C1.79086 22 0 20.2091 0 18C0 15.7909 1.79086 14 4 14H36C38.2091 14 40 15.7909 40 18C40 20.2091 38.2091 22 36 22H4ZM0 32.5C0 34.433 1.567 36 3.5 36H36.5C38.433 36 40 34.433 40 32.5C40 30.567 38.433 29 36.5 29H3.5C1.567 29 0 30.567 0 32.5Z'
        fill='#D27D2C'
      />
    </g>
    <defs>
      <filter
        id='filter0_d'
        x='0'
        y='0'
        width='40'
        height='40'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dy='4' />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0.266667 0 0 0 0 0.141176 0 0 0 0 0.203922 0 0 0 1 0'
        />
        <feBlend
          mode='normal'
          in2='BackgroundImageFix'
          result='effect1_dropShadow'
        />
        <feBlend
          mode='normal'
          in='SourceGraphic'
          in2='effect1_dropShadow'
          result='shape'
        />
      </filter>
    </defs>
  </svg>
);

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className='title'>Доски </h1>
      <div className='burger'>
        <Svg />
      </div>
    </header>
  );
};
