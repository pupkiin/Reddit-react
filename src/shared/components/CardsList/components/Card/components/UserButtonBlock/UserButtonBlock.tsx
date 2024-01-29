import React from 'react';

import styles from './UserButtonBlock.css';
import { ButtonSeeMore, ButtonsComment, ButtonsLikes, ButtonsShare } from './components';
import { Dropdown } from '../../../../../Dropdown';
import { GenericDropdownList } from '../../../../../../GenericDropdownList';
import { merge } from '../../../../../../../utils/js/merge';
import { DropdownCloseButton, DropdownCommentButton, DropdownComplainButton, DropdownHideButton, DropdownSaveButton, DropdownShareButton } from '../../../../../Dropdown/components';
import { generateId } from '../../../../../../../utils/react/generateRandomIndex';

const DROPDOWN_LIST_1024 = [
  { component: <DropdownCommentButton/> },
  { component: <DropdownShareButton/> },
  { component: <DropdownHideButton/> },
  { component: <DropdownSaveButton/> },
  { component: <DropdownComplainButton/> },
  { component: <DropdownCloseButton/> },
].map(generateId);

export interface UserButtonBlockProps {
  prop?: string;
}

export function UserButtonBlock({prop = 'default value'}: UserButtonBlockProps) {
  const [list, setList] = React.useState(DROPDOWN_LIST_1024);

  const handleItemClick = (id: string) => {
    console.log('id: ', id);
  }

  return (
    <div className={styles.UserButtonBlock}>
      <div className={styles.ButtonSeeMoreDropdown}>
        <Dropdown
          button={<ButtonSeeMore />}
        >
          <ul className={styles.UserButtonBlockDropdownList}>
            <GenericDropdownList list={list.map(merge({ onClick: handleItemClick }))} />
          </ul>
        </Dropdown>
      </div>
      <ButtonsLikes />
      <ButtonsComment />
      <ButtonsShare />
    </div>
  );
}
