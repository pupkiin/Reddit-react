import React from 'react';

import styles from './Icon.css';

export interface IconProps {
  name: string;
  className: string;
}

export function Icon({ name, className}: IconProps) {
  return (
    <img
      className={className}
      src={name}
    />
  );
}
