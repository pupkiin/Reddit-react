import React from 'react';

import styles from './UserNickname.css';

export interface UserNicknameProps {
  author?: string;
}

export function UserNickname({ author }: UserNicknameProps) {
  return (
    <span className={styles.UserNickname}>
      <a href="#user-page">
        {author}
      </a>
    </span>
  );
}
