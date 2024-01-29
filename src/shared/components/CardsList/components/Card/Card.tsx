import React from 'react';

import styles from './Card.css';
import { UserPicture, UserButtonBlock, UserHeader } from './components';
import { IPostsData } from '../../../../../hooks/usePostsData';

export interface CardProps {
  post: IPostsData;
}

export function Card({ post }: CardProps) {
  return (
    <li className={styles.card}>
      <UserHeader post={post} />
      <UserPicture banner_img={post.banner_img} />
      <UserButtonBlock />
    </li>
  );
}
