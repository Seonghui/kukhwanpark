"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "../i18n/routing";
import { projects } from "../constants";

function Navigation() {
  const t = useTranslations("menu");
  const pathname = usePathname();

  return (
    <ul>
      {projects.map((project) => {
        const isActive = pathname === project.href; // 현재 경로와 비교
        return (
          <li key={project.id}>
            <Link href={project.href} className="inline-block text-xl pb-1">
              <span className="mr-8">{project.id}</span>
              <span
                className={`underline  ${
                  isActive ? "text-neutral-900" : "text-neutral-500"
                }`}
                style={{ maxWidth: "" }}
              >
                {t(project.id)}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Navigation;
