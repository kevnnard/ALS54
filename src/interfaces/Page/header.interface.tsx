/**
 * Interface for link menu in desktop
 **/
interface LinkMenuInterface {
  /**
   * REQUIRED: number de index menu
   */
  id: number;
  /**
   * REQUIRED: string of route for navigation menu
   */
  link: string;
  /**
   * REQUIRED: name from file for icon menu link in the navigator
   */
  iconMenu: string;
  /**
   * REQUIRED: title for the link
   */
  titleMenu: string;
}
