import { ICONS_CATALOGO_ENUM } from "@/enums/icon.enum";

const IconsComponent = ({
  icon = ICONS_CATALOGO_ENUM.MENU,
  isSolid = false,
  strokeWidth = 1.5,
  className,
  fill,
  onClick,
}: IconsInterface) => {
  const clases = !isSolid ? `${className} fill-transparent` : className;
  return (
    <svg
      data-testid="Icon"
      className={clases}
      stroke={isSolid ? undefined : "currentColor"}
      color={fill}
      fill={isSolid ? "currentColor" : undefined}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth={strokeWidth}
      focusable="false"
      aria-hidden="true"
      onClick={onClick}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
    </svg>
  );
};

export default IconsComponent;
