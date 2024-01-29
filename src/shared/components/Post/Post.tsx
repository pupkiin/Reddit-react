import React, { useEffect, useRef } from 'react';
import ReactDom from 'react-dom';
import styles from './Post.css';
import { CommentForm } from '../CommentForm';

export interface PostProps {
  onClose?: () => void;
}

export function Post(props: PostProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        props.onClose?.();
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, [])

  const node = document.querySelector('#modal_root');
  if (!node) return null;

  return ReactDom.createPortal((
    <div className={styles.modal} ref={ref}>
      <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum deleniti ab provident magni, neque sequi officiis possimus dolor. Autem laboriosam facilis accusamus consequatur nesciunt neque, recusandae adipisci cumque quas ipsam.</h2>

      <div className={styles.content}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates dolor, a omnis alias, itaque corporis maiores impedit expedita, et rem voluptatibus! Molestiae enim, iure doloremque blanditiis numquam maxime distinctio accusamus?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus et quia blanditiis aperiam quod corporis maiores voluptas alias dignissimos nulla earum a nostrum labore commodi libero architecto, placeat laudantium repellat!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae at soluta aliquam magnam repudiandae officia labore distinctio laborum, veniam voluptas dolor ipsum excepturi possimus assumenda aut quaerat blanditiis quod beatae?</p>
      </div>

      <CommentForm />
    </div>
  ), node);
}
