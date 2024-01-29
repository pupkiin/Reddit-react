import React from 'react';

import styles from './UserAuth.css';
import { UserIcon } from './components';

export interface UserAuthProps {
  name?: string;
  avatar?: string;
}

export function UserAuth({ name, avatar }: UserAuthProps) {
  return (
    <a
      className={styles.UserAuth}
      href='https://www.reddit.com/api/v1/authorize?client_id=lPaP0w2ewUh8F5xbGs9v5A&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity'
    >
      <div className={styles.UserAuthLogo}>
        {
          avatar
            ? <img className={styles.UserAuthAvatar} src={avatar} alt="avatar" />
            : <UserIcon />
        }
      </div>

      {
        name
         ? <span className={styles.UserAuthNick}>{name}</span>
         : <span className={styles.UserAuthAnonim}>{'Аноним'}</span>
      }
      {/* <span className={styles.UserAuthNick}>{name || 'Аноним'}</span> */}
    </a>
  );
}
