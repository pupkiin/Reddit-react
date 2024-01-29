import React from 'react';

import styles from './UserLogo.css';
import { Icon } from './components';
import { usePostsData } from '../../../../../../../../../../../hooks/usePostsData';

export interface UserLogoProps {
  icon_img?: string;
}

export function UserLogo({ icon_img }: UserLogoProps) {
  // const [posts] = usePostsData();

  return (
    // <Icon name={'src/Icons/DmitriyGrishin.jpg'} className={styles.UserLogo}/>
    <img
      className={styles.UserLogo}
      src={icon_img}
      // src="https://cdn.dribbble.com/userupload/11257354/file/original-c8dde8479f62510c1fa1365dfbeed2b1.jpg?resize=1200x900"
      alt="user-logo"
    />
  );
}
