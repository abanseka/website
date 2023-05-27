import Navlinks from "@components/navlinks/navlinks";
import style from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <hr />

      <Navlinks renderIcon={false} />
      <p className={style.footertext}>Built with Next.js,scss and Vercel</p>
    </footer>
  );
};

export default Footer;
