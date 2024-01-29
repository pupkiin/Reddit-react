import React from 'react';

interface IItem {
  id: string;
  component: React.ReactNode;
  onClick: (id: string) => void;
  className?: string;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
}

interface IMyGenericListProps {
  list: IItem[];
}

export function GenericDropdownList({ list }: IMyGenericListProps) {
  return (
    <>
      {list.map(({ As = 'li', component, onClick, className, id, href }) => (
        <As
          className={className}
          onClick={() => onClick(id)}
          key={id}
          href={href}
        >
          {component}
        </As>
      ))}
    </>
  );
}