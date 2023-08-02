import LogoBrandComponent from "@/components/UI-utilities/Logo.component";
import Link from "next/link";
import { MenuDesktopComponent } from "./Desktop";
import { MenuMobileComponent } from "./Mobile";

export const HeaderComponent = () => {
  return (
    <nav className="bg-black w-full h-20 sticky top-0 z-[50] flex justify-between items-center px-5">
      {/* LOGO BRAND HEADER */}
      <Link href="/">
        <LogoBrandComponent logo="icon" width={110} height={110} />
      </Link>

      {/* MENU MOBILE */}
      <div className="lg:hidden">
        <MenuMobileComponent />
      </div>

      {/* MENU DESKTOPX */}
      <div className="hidden lg:flex">
        <MenuDesktopComponent />
      </div>
      <div className="hidden lg:flex"></div>
    </nav>
  );
};
