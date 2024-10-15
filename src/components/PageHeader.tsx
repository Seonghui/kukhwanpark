import React from "react";

interface PageHeaderProps {
  workId: string;
  title: string;
  year: string;
}

function PageHeader({ workId, title, year }: PageHeaderProps) {
  return (
    <div className="flex justify-between py-5 *:text-xl">
      <div className="flex">
        <div className="mr-24">{workId}</div>
        <div>{title}</div>
      </div>
      <div>{year}</div>
    </div>
  );
}

export default PageHeader;
