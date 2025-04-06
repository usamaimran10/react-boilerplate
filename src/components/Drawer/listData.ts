import { ReactComponent as dashboard } from "@/assets/dashboard/sideNav/black/dashboard.svg";
import { ReactComponent as product } from "@/assets/dashboard/sideNav/black/product.svg";
import { ReactComponent as dashboardWhite } from "@/assets/dashboard/sideNav/white/dashboard.svg";
import { ReactComponent as productWhite } from "@/assets/dashboard/sideNav/white/product.svg";
import routes from "@/global.routes";
import { Svg } from "@/types";

/**
 * This is the list data, that is mapped on the drawer
 *
 */

export const listData: IListData[] = [
  { label: "Dashboard", path: "", icon: dashboard, iconWhite: dashboardWhite },
  {
    label: "Menu",
    path: `${routes.MENU.INDEX}/${routes.MENU.PRODUCTS.INDEX}`,
    icon: product,
    iconWhite: productWhite,
    nested: true,
    nestedData: [
      {
        path: routes.MENU.PRODUCTS.INDEX,
        label: "Products",
      },
      {
        path: routes.MENU.CATEGORIES.INDEX,
        label: "Categories",
      },
      {
        path: routes.MENU.SPECIAL_OFFERS.INDEX,
        label: "Special-Offers",
      },
    ],
  },
];

interface IListData {
  label: string;
  path: string;
  icon: Svg;
  iconWhite: Svg;
  nested?: boolean;
  nestedData?: {
    path: string;
    label: string;
  }[];
}
