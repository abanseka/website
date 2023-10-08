import Link from "next/link";
import style from "./navlinks.module.scss";
import { navLinks, socialLinks } from "datastore/navlinks";
import { navLink } from "types/common";


type MenuWidgetProps = {
  renderIcon?: boolean;
};

const Navlinks = ({ renderIcon = true }: MenuWidgetProps) =>
(
  <div className={style.navlinks}>
    <div className={style.linkwrapper}>
      {navLinks.map(({ href, id, icon, label }: navLink) => (
        <Link href={href} key={id} className={style.link}>
          {renderIcon && icon}
          {label}
        </Link>
      ))}

      <p className={style.divider}>|</p>

      {socialLinks.map(({ href, id, icon, label }: navLink) => (
        <Link href={href} key={id} className={style.link}>
          {renderIcon && icon}
          {label}
        </Link>
      ))}
    </div>
  </div>
);

export default Navlinks;
