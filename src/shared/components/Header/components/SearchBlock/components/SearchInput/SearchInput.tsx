import React from 'react';

import styles from './SearchInput.css';

export interface SearchInputProps {
  prop?: string;
}

export function SearchInput({prop = 'default value'}: SearchInputProps) {
  return (
    <div className={styles.SearchInput}>
      <input className={styles.headerInput} type="text" placeholder="Поиск" />
      <svg className={styles.headerSearchIcon} xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
        <path d="M13.5407 11.9497H12.7035L12.4067 11.6564C13.4454 10.418 14.0707 8.81018 14.0707 7.06118C14.0707 3.16124 10.9865 0 7.18169 0C3.37686 0 0.292725 3.16124 0.292725 7.06118C0.292725 10.9611 3.37686 14.1224 7.18169 14.1224C8.88804 14.1224 10.4566 13.4814 11.6648 12.4168L11.951 12.721V13.5792L17.2502 19L18.8293 17.3814L13.5407 11.9497ZM7.18169 11.9497C4.54269 11.9497 2.41241 9.76615 2.41241 7.06118C2.41241 4.3562 4.54269 2.17267 7.18169 2.17267C9.8207 2.17267 11.951 4.3562 11.951 7.06118C11.951 9.76615 9.8207 11.9497 7.18169 11.9497Z" fill="#C4C4C4"/>
      </svg>
    </div>
  );
}
