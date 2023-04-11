import { ReactNode } from "react";
import Navbar from "@components/navbar/navbar";
import { AppContainer } from "@components/styled/global";
import NavWidget from "@components/widgets/navigation";
import Footer from "@components/footer/footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <AppContainer>
      <Navbar />
      <NavWidget />
      <main>{children}</main>
      <Footer />
    </AppContainer>
  );
}
