import React from 'react';

import styles from './ButtonSeeMore.css';

export interface ButtonSeeMoreProps {
  prop?: string;
}

export function ButtonSeeMore({prop = 'default value'}: ButtonSeeMoreProps) {
  return (
    <div className={styles.ButtonSeeMore}>
      <button className={styles.SeeMore}>
        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="20" viewBox="0 0 5 20" fill="none">
          <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9"/>
          <circle cx="2.5" cy="10" r="2.5" fill="#D9D9D9"/>
          <circle cx="2.5" cy="17.5" r="2.5" fill="#D9D9D9"/>
        </svg>
      </button>
    </div>
  );
}
