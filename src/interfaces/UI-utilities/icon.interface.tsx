/**
 * interface for the props for icons component
 */
interface IconsInterface {
  /**
   * REQUIRED - url string for icon
   */
  icon: string;
  /**
   * OPCIONAL - true or false for icon solid
   */
  isSolid?: boolean;
  /**
   * OPCIONAL - number in pixels for the icon stroke
   */
  strokeWidth?: number;
  /**
   * REQUIRED -  classNames like Width, Height ...
   */
  className: string;
  /**
   * REQUIRED - color in format Hexadecimal #000000
   */
  fill: string;
  /**
   * OPTIONAL - any CLICK function when pressing the icon
   */
  onClick?: () => void;
}
