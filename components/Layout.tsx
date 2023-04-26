import { ReactNode } from "react";
import Navbar from "@components/navbar/navbar";
import { AppContainer } from "@styledComponents/global";
import { MainContainer } from "@styledComponents/maincontainer";
import Footer from "@components/footer/footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <AppContainer>
      <Navbar />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </AppContainer>
  );
}
