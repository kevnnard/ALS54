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
   * REQUIRED: title for the link
   */
  titleMenu: string;
  /**
   * REQUIRED: name from file for icon menu link in the navigator
   */
  iconMenu: string;
  /**
   * OPCIONAL: list of link children for mega menu
   */
  megaMenu?: Array<any>;
}
/**
 * Interface for megaMenu links
 */
interface LinkMegaMenu {
  /**
   * REQUIRED: name of item link in mega menu children
   */
  itemTitle: string;
  /**
   * REQUIRED: list of ityem links to category
   */
  itemLinks: Array<ItemLink>;
}
/**
 * Interfface for item link in item mega menu
 */
interface ItemLink {
  /**
   * REQUIRED: url for item link
   */
  link: string;
  /**
   * REQUIRED: name for link in item link
   */
  name: string;
  /**
   * OPCIONAL: icon image etc, for item link
   */
  icon?: string;
}
