"use client";
import IconsComponent from "@/components/UI-utilities/icon";
import { ICONS_CATALOGO_ENUM } from "@/enums/icon.enum";
import classNames from "classnames";
import React from "react";

export const MenuMobileComponent = () => {
  const cn = classNames;
  const [menuStatus, setMenuStatus] = React.useState(false);

  const handleChangeMenu = () => {
    setMenuStatus(() => !menuStatus);
  };

  const classes = {
    menu: cn({
      "translate-x-0": menuStatus,
      "translate-x-[100rem]": !menuStatus,
    }),
  };

  return (
    <>
      {/* MENU ICON FOR MOBILE HEADER  */}
      <IconsComponent
        icon={ICONS_CATALOGO_ENUM.MENU}
        fill="#020202"
        className="w-12 cursor-pointer"
        strokeWidth={2}
        onClick={handleChangeMenu}
      />

      {/* MENU DRAWER FOR NAVIGATION IN THE APP */}
      <div
        className={`${classes.menu} transition ease-in-out duration-500 fixed top-0 right-0 backdrop-blur-xl w-full h-[100vh]`}
      >
        <div className={`bg-black w-[50%] h-[100vh] fixed top-0 right-0`}>
          {/* CLOSE ICON FOR CLOSING DRAWER MENU */}
          <IconsComponent
            icon={ICONS_CATALOGO_ENUM.CLOSE}
            className="fixed right-2 top-2 w-10 cursor-pointer transition ease-in-out duration-300 hover:scale-[.8] focus:scale-[.8]"
            strokeWidth={2.5}
            fill="#f2f2f2"
            onClick={handleChangeMenu}
          />

          {/* RENDER OTHER COMPONENTS */}
        </div>
      </div>
    </>
  );
};
