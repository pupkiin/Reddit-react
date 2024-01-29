import React from 'react';

import styles from './SortBlock.css';
import { Commented, MyPosts, Saved, Viewed } from './components';
import { Dropdown } from '../../../Dropdown';
import { generateId } from '../../../../../utils/react/generateRandomIndex';
import { merge } from '../../../../../utils/js/merge';
import { GenericDropdownList } from '../../../../GenericDropdownList';


const DROPDOWN_HEADER_LIST_320 = [
  { component: <Viewed /> },
  { component: <Saved /> },
  { component: <MyPosts /> },
  { component: <Commented /> },
].map(generateId);
export interface SortBlockProps {
  prop?: string;
}

export function SortBlock({prop = 'default value'}: SortBlockProps) {
  const [list, setList] = React.useState(DROPDOWN_HEADER_LIST_320);

  const handleItemClick = (id: string) => {
    console.log('id: ', id);
  }

  return (
    <div>
      <div className={styles.sortBlock}>
      <Viewed />
      <Saved />
      <MyPosts />
      <Commented />
    </div>
    <div className={styles.sortDropdown}>
      <Dropdown
        button={<button>тык</button>}
      >
        <ul className={styles.sortDropdownList}>
            <GenericDropdownList list={list.map(merge({ onClick: handleItemClick }))} />
          </ul>
      </Dropdown>
    </div>
    </div>
  );
}
