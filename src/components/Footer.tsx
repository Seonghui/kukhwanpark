import React, { Fragment } from "react";
import { Link } from "../i18n/routing";

function Footer() {
  return (
    <Fragment>
      <div>
        <div className="*:block md*:text-xl underline text-neutral-500">
          <Link href="">Resume</Link>
          <Link href="">LinkedIn</Link>
          <Link href="">Contack</Link>
        </div>
        <div className="mt-5 *:underline">
          <Link href="/" locale="ko" className="inline-block mr-5">
            KR
          </Link>
          <Link href="/" locale="en">
            EN
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

export default Footer;
