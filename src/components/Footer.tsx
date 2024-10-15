"use clinet";
import React, { Fragment } from "react";
import { Link, usePathname, useRouter } from "../i18n/routing";
import { useParams, useSelectedLayoutSegment } from "next/navigation";
import { useTranslations } from "next-intl";

function Footer() {
  const params = useParams();
  const { locale } = params;
  return (
    <Fragment>
      <div>
        <div className="*:block md*:text-xl underline text-neutral-500">
          <Link
            href="https://drive.google.com/file/d/16xFaL8Mn4qnF6LR8nc2fy2KWVWFIrYFI/view"
            target="_blank"
          >
            Resume
          </Link>
          <Link
            href="https://www.linkedin.com/in/kukhwan-park-61ab40133/"
            target="_blank"
          >
            LinkedIn
          </Link>
          <Link href="mailto:p1990h@gmail.com" rel="mailto">
            Contact
          </Link>
        </div>
        <div className="mt-5 *:underline">
          <Link
            href="/"
            locale="ko"
            className={`inline-block mr-5 ${
              locale === "ko" ? "text-[#3D3D3D]" : "text-[#797979]"
            }`}
          >
            KR
          </Link>
          <Link
            href="/"
            locale="en"
            className={`inline-block ${
              locale === "en" ? "text-[#3D3D3D]" : "text-[#797979]"
            }`}
          >
            EN
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

export default Footer;
