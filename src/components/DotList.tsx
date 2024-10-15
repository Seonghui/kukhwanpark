import React from "react";

interface DotListProps {
  list: { title?: string; content: string }[];
}

function DotList({ list }: DotListProps) {
  if (!list.length) {
    return null;
  }
  return (
    <ul className="list-disc pl-8 *:md:text-lg">
      {list?.map((item, index) => (
        <li key={index}>
          {item.title && <span className="font-medium">{item.title}: </span>}
          {item.content}
        </li>
      ))}
    </ul>
  );
}

export default DotList;
