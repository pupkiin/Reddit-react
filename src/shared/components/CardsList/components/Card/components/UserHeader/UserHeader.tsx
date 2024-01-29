import React from 'react';

import styles from './UserHeader.css';
import { UserContent } from './components/UserContent';
import { TextContent } from './components/TextContent';
import { HeaderComments } from './components';
import { IPostsData } from '../../../../../../../hooks/usePostsData';

export interface UserHeaderProps {
  post: IPostsData;
}

export function UserHeader({ post }: UserHeaderProps) {
  return (
    <div className={styles.UserHeader}>
      <UserContent post={post} />
      <TextContent title={post.title} />
      <HeaderComments />
    </div>
  );
}
