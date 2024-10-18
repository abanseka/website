import Navlinks from "@components/navlinks/navlinks";
import style from "./footer.module.scss";

const Footer = () => (
  <footer className={style.footer}>
    <br />

    <Navlinks renderIcon={false} />

    <p className={style.footertext}>
      Copyright © {new Date().getFullYear()} abanseka. All rights reserved.
    </p>
  </footer>
);

export default Footer;
