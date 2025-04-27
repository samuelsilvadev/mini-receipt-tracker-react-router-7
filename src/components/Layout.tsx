import { Navigation } from "./Navigation";
import { Outlet } from "react-router";

export function Layout() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}
