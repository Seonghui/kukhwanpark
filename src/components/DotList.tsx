import React from "react";

interface DotListProps {
  list: { title?: string; content: string }[];
}

function DotList({ list }: DotListProps) {
  if (!list.length) {
    return null;
  }
  return (
    <ul className="list-disc pl-8">
      {list?.map((item, index) => (
        <li key={index}>
          {item.title && <strong>{item.title}: </strong>}
          {item.content}
        </li>
      ))}
    </ul>
  );
}

export default DotList;
