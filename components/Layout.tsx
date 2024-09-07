import { ReactNode } from "react";
import Profile from "@components/profile/profile";
import Footer from "@components/footer/footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="appContainer">
      <Profile />
      <div className="mainContainer">{children}</div>
      <Footer />
    </main>
  );
}
