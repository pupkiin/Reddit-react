import React from 'react';

interface IItem {
  id: string;
  text: string;
  onClick: (id: string) => void;
  className?: string;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
}

interface IMyGenericListProps {
  list: IItem[];
  // onClick: (id: string) => void;
}

// export function MyList({ list }: IMyGenericListProps) {
//   return (
//     <ul>
//       {list.map((item) => (
//         // <li onClick={() => onClick(item.id)} key={item.id}>{item.value}</li>
//         <li onClick={() => item.onClick(item.id)} key={item.id}>{item.value}</li>
//       ))}
//     </ul>
//   );
// }

export function GenericList({ list }: IMyGenericListProps) {
  return (
    <>
      {list.map(({ As = 'div', text, onClick, className, id, href }) => (
        <As
          className={className}
          onClick={() => onClick(id)}
          key={id}
          href={href}
        >
          {text}
        </As>
      ))}
    </>
  );
}