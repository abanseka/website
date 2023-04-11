import { ReactNode } from "react";
import Navbar from "./navbar/navbar";
import { AppContainer } from "./styled/global";
import NavWidget from "./widgets/navigation";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <AppContainer>
      <Navbar />
      <NavWidget />
      <main>{children}</main>
    </AppContainer>
  );
}
