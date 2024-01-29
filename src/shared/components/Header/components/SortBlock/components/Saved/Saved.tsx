import React from 'react';

import styles from './Saved.css';

export interface SavedProps {
  prop?: string;
}

export function Saved({prop = 'default value'}: SavedProps) {
  return (
    <a className={styles.Saved} href='#'>Сохранённое</a>
  );
}
