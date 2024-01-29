import React from 'react';

import styles from './UserPicture.css';
import { IPostsData } from '../../../../../../../hooks/usePostsData';

export interface UserPictureProps {
  banner_img: string | undefined;
}

export function UserPicture({ banner_img }: UserPictureProps) {
  return (
    <img
      className={styles.UserPicture}
      src={banner_img}
      // src="https://cdn.dribbble.com/userupload/11284843/file/original-729a663c6c024685c547d7f4a26c504e.png?resize=700x525&vertical=center"
      alt="some-picture"
    />
    // <div className={styles.UserPicture}></div>
  );
}
