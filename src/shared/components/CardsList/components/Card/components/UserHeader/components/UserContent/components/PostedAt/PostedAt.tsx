import React from 'react';

import styles from './PostedAt.css';

export interface PostedAtProps {
  created?: number;
}

export function PostedAt({ created }: PostedAtProps) {
  return (
    <span className={styles.PostedAt}>
      <span className={styles.PublishedAt}>Опубликовано</span> {new Date(created as number).getHours().toString()} часов назад
    </span>
  );
}
