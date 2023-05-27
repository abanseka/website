import { ReactNode } from "react";
import Navbar from "@components/navbar/navbar";
import Footer from "@components/footer/footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="appContainer">
      <Navbar />
      <div className="mainContainer">{children}</div>
      <Footer />
    </main>
  );
}
