"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "../i18n/routing";

function Navigation() {
  const t = useTranslations("menu");
  const pathname = usePathname();
  const projects = [
    { id: 1, href: "/" },
    { id: 2, href: "/dms" },
    { id: 3, href: "/autobook" },
    { id: 4, href: "/kart" },
    { id: 5, href: "/cargen" },
  ];

  return (
    <ul>
      {projects.map((project) => {
        const isActive = pathname === project.href; // 현재 경로와 비교
        return (
          <li key={project.id}>
            <Link href={project.href} className="inline-block text-2xl pb-3">
              <span className="mr-8">{`Work_0${project.id}`}</span>
              <span
                className={`underline ${
                  isActive ? "text-gray-900" : "text-gray-500"
                }`}
              >
                {t(`Work_0${project.id}`)}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Navigation;
