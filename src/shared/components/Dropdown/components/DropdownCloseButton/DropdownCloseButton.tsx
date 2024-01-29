import React from 'react';

import styles from './DropdownCloseButton.css';

export interface DropdownCloseButtonProps {
  prop?: string;
}

export function DropdownCloseButton({prop = 'default value'}: DropdownCloseButtonProps) {
  return (
    <button className={styles.DropdownCloseButton}>Закрыть</button>
  );
}
