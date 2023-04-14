import { ReactNode } from "react";
import Navbar from "@components/navbar/navbar";
import { AppContainer, MainContainer } from "@styledComponents/global";
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
