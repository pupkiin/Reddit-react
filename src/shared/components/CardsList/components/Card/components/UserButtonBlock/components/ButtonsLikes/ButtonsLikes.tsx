import React from 'react';

import styles from './ButtonsLikes.css';

export interface ButtonsLikesProps {
  prop?: string;
}

export function ButtonsLikes({prop = 'default value'}: ButtonsLikesProps) {
  return (
    <div className={styles.ButtonsLikes}>
      <button className={styles.LikeUp}>
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="10" viewBox="0 0 19 10" fill="none">
          <path d="M9.5 0L0 10H19L9.5 0Z" fill="#C4C4C4"/>
        </svg>
      </button>
      <span className={styles.LikesCount}>145</span>
      <button className={styles.LikeDown}>
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="10" viewBox="0 0 19 10" fill="none">
          <path d="M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z" fill="#C4C4C4"/>
        </svg>
      </button>
    </div>
  );
}
