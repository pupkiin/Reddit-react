import React from 'react';

import styles from './MyPosts.css';

export interface MyPostsProps {
  prop?: string;
}

export function MyPosts({prop = 'default value'}: MyPostsProps) {
  return (
    <a className={styles.MyPosts} href='#'>Мои посты</a>
  );
}
