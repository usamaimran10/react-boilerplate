// import { useUserContext } from "@/context/UserContext";
// import routes from "@/global.routes";
import routes from "@/global.routes";
import { JSX } from "react";
import { Navigate } from "react-router";

export default function PrivateRoute({ children }: { children: JSX.Element }) {
  // const { isAuthenticated } = useUserContext();

  if (false) {
    return <Navigate to={routes.LOGIN} replace />;
  }

  return children;
}
