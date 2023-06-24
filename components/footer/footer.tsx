import Navlinks from "@components/navlinks/navlinks";
import style from "./footer.module.scss";

const Footer = () => (
  <footer className={style.footer}>
    <hr />
    <br />
    <Navlinks renderIcon={false} />
    <p className={style.footertext}>Built with NEXT.JS, SCSS & VERCEL</p>
  </footer>
);

export default Footer;
