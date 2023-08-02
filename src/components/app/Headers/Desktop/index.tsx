import menuDesktop from "@/utils/json/menudesk.json";
import { LinkDesktopComponent } from "./LinkDesktop";

export const MenuDesktopComponent = () => {
  return (
    <ul className="flex gap-10 items-center ">
      {menuDesktop.map((dataLink, index: number) => (
        <LinkDesktopComponent key={index} dataLink={dataLink} />
      ))}
    </ul>
  );
};
