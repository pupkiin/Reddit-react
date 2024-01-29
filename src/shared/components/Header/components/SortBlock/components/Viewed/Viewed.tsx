import React from 'react';

import styles from './Viewed.css';

export interface ViewedProps {
  prop?: string;
}

export function Viewed({prop = 'default value'}: ViewedProps) {
  return (
    <a className={styles.Viewed} href='#'>Просмотренное</a>
  );
}
