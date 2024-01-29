import React, { useState } from 'react';

import styles from './TextContent.css';
import { Post } from '../../../../../../../Post';

export interface TextContentProps {
  title?: string;
}

export function TextContent({ title }: TextContentProps) {
  const [isModalOpened, setIsModalOpen] = useState(false);

  return (
    <h2>
      <a href='#post' className={styles.TextContent} onClick={() => { setIsModalOpen(true); }}>
        {title}
      </a>

      {isModalOpened && (
        <Post
          onClose={() => { setIsModalOpen(false); }}
        />
      )}
    </h2>
  );
}
