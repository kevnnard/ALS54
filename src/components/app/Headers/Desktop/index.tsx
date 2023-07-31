import { LinkComponent } from "@/components/UI-utilities/Link.component.";
import menuDesktop from "@/utils/json/menudesk.json";

export const MenuDesktopComponent = () => {
  return (
    <ul className="flex gap-10 items-center ">
      {menuDesktop.map((dataLink: LinkMenuInterface, index: number) => (
        <li key={index}>
          <LinkComponent dataLink={dataLink} index={index} />
        </li>
      ))}
    </ul>
  );
};
