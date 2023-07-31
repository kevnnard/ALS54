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

      <div
        className={`${classes.menu} fixed z-[30] top-[5rem] left-0 right-0 bg-red-500 w-full h-[50vh] transition ease-in-out duration-100`}
      >
        {dataLink.iconMenu}
      </div>
    </li>
  );
};
