"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "../i18n/routing";
import { projects } from "../constants";
import Footer from "./Footer";
import { Fragment, useState } from "react";
import { EllipsisHorizontalIcon, XMarkIcon } from "@heroicons/react/24/solid";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("menu");
  const pathname = usePathname();

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <Fragment>
      <div className="sticky top-0 left-0 right-0 md:hidden px-4 py-3 flex justify-between bg-opacity-80 backdrop-blur-lg z-10">
        <div className="font-semibold underline">Kukhwan Park</div>
        <button onClick={handleToggleMenu}>
          {isMenuOpen ? (
            <XMarkIcon className="size-6" />
          ) : (
            <EllipsisHorizontalIcon className="size-6" />
          )}
        </button>
      </div>
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:block absolute top-10 md:top-0 left-0 bottom-0 p-5 w-full md:w-1/3 bg-[#F2F2F2] md:bg-transparent`}
      >
        <header className="justify-between *:text-xl hidden md:flex">
          <div>Kukhwan Park</div>
          <div>2017~2024</div>
        </header>

        <nav className="pt-12">
          <ul className="">
            {projects.map((project) => {
              const isActive = pathname === project.href; // 현재 경로와 비교
              return (
                <li key={project.id}>
                  <Link
                    href={project.href}
                    className="inline-block md:text-xl pb-1"
                  >
                    <span className="mr-8">{project.id}</span>
                    <span
                      className={`underline  ${
                        isActive ? "text-[#3D3D3D]" : "text-[#797979]"
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
        </nav>
        <footer className="fixed bottom-10">
          <Footer />
        </footer>
      </div>
    </Fragment>
  );
}

export default Navigation;
