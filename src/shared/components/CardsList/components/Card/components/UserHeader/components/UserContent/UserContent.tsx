import React from 'react';

import styles from './UserContent.css';
import { PostedAt, SeeMore, UserLogo, UserNickname } from './components';
import { Dropdown } from '../../../../../../../Dropdown';
import { DropdownCloseButton, DropdownCommentButton, DropdownComplainButton, DropdownHideButton, DropdownSaveButton, DropdownShareButton } from '../../../../../../../Dropdown/components';
import { GenericDropdownList } from '../../../../../../../../GenericDropdownList';
import { generateId } from '../../../../../../../../../utils/react/generateRandomIndex';
import { merge } from '../../../../../../../../../utils/js/merge';
import { IPostsData } from '../../../../../../../../../hooks/usePostsData';

export interface UserContentProps {
  post: IPostsData;
}

const DROPDOWN_LIST_320 = [
  { component: <DropdownHideButton/> },
  { component: <DropdownComplainButton/> },
  { component: <DropdownCloseButton/> },
].map(generateId);

export function UserContent({ post }: UserContentProps) {
  const [list, setList] = React.useState(DROPDOWN_LIST_320);

  const handleItemClick = (id: string) => {
    console.log('id: ', id);
  }

  return (
    <div className={styles.userContent}>
      <div className={styles.userContentInfo}>
        <UserLogo icon_img={post.icon_img} />
        <UserNickname author={post.author} />
        <PostedAt created={post.created} />
      </div>
      <div className={styles.userContentDropdown}>
        <Dropdown
          button={<SeeMore />}
        >
          <ul className={styles.userContentDropdownList}>
            <GenericDropdownList list={list.map(merge({ onClick: handleItemClick }))} />
          </ul>
        </Dropdown>
      </div>
    </div>
  );
}
