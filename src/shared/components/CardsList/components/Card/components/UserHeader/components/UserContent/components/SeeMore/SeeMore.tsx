import React from 'react';

import styles from './SeeMore.css';

export interface SeeMoreProps {
  prop?: string;
}

export function SeeMore({prop = 'default value'}: SeeMoreProps) {
  return (
    <button className={styles.SeeMore}>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="5" viewBox="0 0 20 5" fill="none">
        <circle cx="17.5" cy="2.5" r="2.5" transform="rotate(90 17.5 2.5)" fill="#D9D9D9"/>
        <circle cx="10" cy="2.5" r="2.5" transform="rotate(90 10 2.5)" fill="#D9D9D9"/>
        <circle cx="2.5" cy="2.5" r="2.5" transform="rotate(90 2.5 2.5)" fill="#D9D9D9"/>
      </svg>
    </button>
  );
}
