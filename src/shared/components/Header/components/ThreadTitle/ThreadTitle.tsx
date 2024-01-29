import React from 'react';

import styles from './ThreadTitle.css';

export interface ThreadTitleProps {
  title: string;
}

export function ThreadTitle({ title = 'Title' }: ThreadTitleProps) {
  return (
    <h1 className={styles.threadTitle}>{title}</h1>
  );
}
