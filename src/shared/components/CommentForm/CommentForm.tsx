import React, { ChangeEvent, FormEvent, useContext, useRef, useState } from 'react';

import styles from './CommentForm.css';
import { commentContext } from '../../context/commentContext';

export interface CommentFormProps {
  prop?: string;
}

export function CommentForm({prop = 'default value'}: CommentFormProps) {
  // const [value, setValue] = useState(''); -> в App
  const { value, onChange } = useContext(commentContext);


  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    onChange(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(value);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea className={styles.input} value={value} onChange={handleChange} />
      <button type='submit' className={styles.button}>Комментировать</button>
    </form>
  );
}
