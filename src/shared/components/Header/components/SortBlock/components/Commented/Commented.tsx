import React from 'react';

import styles from './Commented.css';

export interface CommentedProps {
  prop?: string;
}

export function Commented({prop = 'default value'}: CommentedProps) {
  return (
    <a className={styles.Commented} href='#'>Прокомментированное</a>
  );
}
