"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "../i18n/routing";
import { projects } from "../constants";
import Footer from "./Footer";
import { Fragment, useEffect, useState } from "react";
import { EllipsisHorizontalIcon, XMarkIcon } from "@heroicons/react/24/solid";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("menu");
  const pathname = usePathname();

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <Fragment>
      {/* 모바일 내비바 */}
      <div className="fixed bg-[#F2F2F2] top-0 left-0 right-0 xl:hidden px-4 py-3 flex justify-between z-10">
        <div className="font-semibold underline">
          <Link href="/">Kukhwan Park</Link>
        </div>
        <button onClick={handleToggleMenu}>
          {isMenuOpen ? (
            <XMarkIcon className="size-6" />
          ) : (
            <EllipsisHorizontalIcon className="size-6" />
          )}
        </button>
      </div>
      {/* 메뉴 리스트 */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } xl:block fixed xl:max-w-[440px] top-10 xl:top-0 left-0 xl:left-auto bottom-0 p-5 w-full bg-[#F2F2F2] xl:bg-transparent overflow-hidden z-10`}
      >
        <header className="justify-between *:text-xl hidden xl:flex">
          <div>
            <Link href="/">Kukhwan Park</Link>
          </div>
          <div>2017~2024</div>
        </header>

        <nav className="pt-12">
          <ul className="">
            {projects.map((project) => {
              const isActive = pathname === project.href; // 현재 경로와 비교
              return (
                <li key={project.id} className="flex items-center pb-1">
                  <Link href={project.href} className="inline-flex xl:text-xl">
                    {/* project.id와 name을 같은 줄에 유지 */}
                    <span className="mr-4">{project.id}</span>
                    <span
                      className={`underline  ${
                        isActive ? "text-[#3D3D3D]" : "text-[#797979]"
                      }`}
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
