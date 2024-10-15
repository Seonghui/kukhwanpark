import React, { Fragment } from "react";

interface PageHeaderProps {
  workId: string;
  title: string;
  year: string;
}

function PageHeader({ workId, title, year }: PageHeaderProps) {
  return (
    <Fragment>
      <div className="block xl:hidden pb-5 xl:pb-0">
        <div className="flex justify-between">
          <div>{workId}</div>
          <div>{year}</div>
        </div>
        <div>{title}</div>
      </div>
      <div className="hidden xl:flex justify-between py-5 *:text-xl">
        <div className="flex">
          <div className="mr-24">{workId}</div>
          <div>{title}</div>
        </div>
        <div>{year}</div>
      </div>
    </Fragment>
  );
}

export default PageHeader;
