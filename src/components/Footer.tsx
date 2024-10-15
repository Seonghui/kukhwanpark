import React, { Fragment } from "react";
import { Link } from "../i18n/routing";

function Footer() {
  return (
    <Fragment>
      <div>
        <div className="*:block *:text-xl underline text-neutral-500">
          <Link href="">Resume</Link>
          <Link href="">LinkedIn</Link>
          <Link href="">Contack</Link>
        </div>
        <div className="mt-5">
          <Link href="/" locale="ko" className="inline-block mr-5">
            Ko
          </Link>
          <Link href="/" locale="en">
            En
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

export default Footer;
