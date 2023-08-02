"use client";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const LinkDesktopComponent = ({
  dataLink,
}: {
  dataLink: LinkMenuInterface;
}) => {
  const cn = classNames;
  const [menuStatus, setMenuStatus] = React.useState<boolean>(false);

  const classes = {
    menu: cn({
      "translate-y-0": menuStatus,
      "translate-y-[1000rem]": !menuStatus,
    }),
  };

  return (
    <li
      onMouseEnter={() => setMenuStatus(true)}
      onMouseLeave={() => setMenuStatus(false)}
    >
      <Link
        href={dataLink.link}
        className="flex h-[10vh] gap-2 items-center font-extrabold uppercase transition-all"
      >
        {/* COMPONENT IMAGE FOR IMAGE IN THE LINK MENU */}
        <Image
          src={`/images/icons/${dataLink.iconMenu}.png`}
          alt="Menu Link ALS 54 Studio"
          width={30}
          height={30}
        />
        {dataLink.titleMenu}
      </Link>

      {dataLink.megaMenu && (
        <ul
          className={`${classes.menu} fixed z-[30] top-[5rem] left-0 right-0 bg-white text-black w-[full] h-[50vh] transition ease-in-out duration-100 flex justify-around p-10`}
        >
          {dataLink.megaMenu.map(
            (linkMegaMenu: LinkMegaMenu, index: number) => (
              <li key={index} className="flex flex-col">
                <h3 className="font-extrabold uppercase underline text-lg mb-10">
                  {linkMegaMenu.itemTitle}
                </h3>
                <ul className="flex flex-col justify-between">
                  {linkMegaMenu.itemLinks.map(
                    (itemLink: ItemLink, index2: number) => (
                      <li
                        className="py-2 hover:text-red-400 font-semibold flex gap-2"
                        key={index2}
                      >
                        <Image
                          src={`/images/icons/${itemLink.icon}.png`}
                          alt="Menu Link ALS 54 Studio"
                          width={23}
                          height={20}
                        />
                        <Link href={itemLink.link}>{itemLink.name}</Link>
                      </li>
                    )
                  )}
                </ul>
              </li>
            )
          )}
        </ul>
      )}
    </li>
  );
};
