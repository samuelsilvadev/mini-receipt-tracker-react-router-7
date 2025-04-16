import { ReactNode } from "react";
import { Navigation } from "./Navigation";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
}
