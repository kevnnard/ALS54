"use client";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const LinkComponent = ({
  dataLink,
  index,
}: {
  dataLink: LinkMenuInterface;
  index: number;
}): JSX.Element => {
  const cn = classNames;
  const [menuStatus, setMenuStatus] = React.useState(false);

  const handleChangeMenu = () => {
    setMenuStatus((state) => !state);
  };

  const classes = {
    menu: cn({
      "translate-y-0": menuStatus,
      "translate-y-[-100rem]": !menuStatus,
    }),
  };
  return (
    // COMPONENT LINK TO NAVIGATION
    <>
      <Link
        href={dataLink.link}
        className="flex gap-2 items-center font-extrabold uppercase transition-all"
        onMouseEnter={handleChangeMenu}
        onMouseLeave={handleChangeMenu}
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
        className={`${classes.menu} fixed z-[${
          30 + 1 + index
        }] top-[5rem] left-0 right-0 bg-red-500 w-full h-[50vh] transition ease-in-out duration-500`}
        onMouseLeave={handleChangeMenu}
      >
        {dataLink.iconMenu}
      </div>
    </>
  );
};
