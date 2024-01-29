import React, { useContext } from 'react';

import styles from './SearchBlock.css';
import { SearchInput, UserAuth, UserMessages } from './components';
import { useUserData } from '../../../../../hooks/useUserData';
import { userContext } from '../../../../context/userContext';
import { usePostsData } from '../../../../../hooks/usePostsData';

// export interface SearchBlockProps {
//   token: string;
// }

export function SearchBlock() {

  // const [data] = useUserData();
  const { name, iconImg } = useContext(userContext);
  // const posts  = usePostsData()


  // useEffect(() => {
  //   axios.get(
  //   'https://oauth.reddit.com/api/v1/me',
  //     {
  //       headers: { Authorization: `bearer ${token}` }
  //     }
  //   ).then((resp) => {
  //     const userData = resp.data;
  //     setData({ name: userData.name, iconImg: userData.icon_img })
  //   }).catch(console.log);
  //   console.log(data.name, data.iconImg);
  // }, [token]);

  return (
    <div className={styles.searchBlock}>
      <UserMessages />
      <SearchInput />
      <UserAuth name={name} avatar={iconImg} />
    </div>
  );
}
