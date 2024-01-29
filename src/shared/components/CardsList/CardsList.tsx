import React from 'react';

import styles from './CardsList.css';
import { Card } from './components';
import { usePostsData } from '../../../hooks/usePostsData';
import { generateRandomString } from '../../../utils/react/generateRandomIndex';

export interface CardsListProps {
  prop?: string;
}

export function CardsList({prop = 'default value'}: CardsListProps) {
  const [posts] = usePostsData();
  console.log(posts);
  let componentsCarList = [];
  for (const post of posts) {
    componentsCarList.push(<Card post={post} key={generateRandomString()} />);
  }

  if (posts.length === 0) {
    return (
      <ul className={styles.cardsList}></ul>
    )
  } else {
    return (
      <ul className={styles.cardsList}>
        {componentsCarList}
      </ul>
    );
  }
}
