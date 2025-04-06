import routes from "@/global.routes";
import * as React from "react";
/**
 * This is for dashboard routes.
 * All dashboard routes is used here.
 */

const MainLayout = React.lazy(() => import("@/layouts/MainLayout"));
const Dashboard = React.lazy(() => import("@/pages/Dashboard/Dashboard"));

export const DashboardRoutes = [
  {
    path: routes.DASHBOARD,
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
    ],
  },
];
