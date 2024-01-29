import React, { useContext } from 'react';

import styles from './Header.css';
import { SearchBlock, SortBlock, ThreadTitle } from './components';
import { tokenContext } from '../../context/tokenContext';

// export interface HeaderProps {
//   token: string;
// }

export function Header() {
  // const { Consumer } = tokenContext;
  // const token = useContext(tokenContext);

  return (
    <header>
      <div className={styles.header}>
        <ThreadTitle title={'Личный кабинет'}/>
        {/* <Consumer>
          {(token) => <SearchBlock token={token}/>}
        </Consumer> */}
        <SearchBlock />
      </div>
      <div>
        <SortBlock />
      </div>
    </header>
  );
}
