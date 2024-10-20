import Link from "next/link";
import { navLinks, socialLinks } from "datastore/navlinks";
import { navLink } from "types/common";
import HomeIcon from "@assets/home.svg";
import style from "./navlinks.module.scss";
import classNames from "classnames";

type MenuWidgetProps = {
  renderIcon?: boolean;
};

const Navlinks = ({ renderIcon = true }: MenuWidgetProps) => (
  <div className={style.navlinks}>
    <Link href="/" className={style.homeIcon}>
      <HomeIcon />
    </Link>

    <div className={style.linkwrapper}>
      {navLinks.map(({ href, id, icon, label }: navLink) => (
        <Link
          key={id}
          href={href}
          className={classNames(style.link, {
            [style.solid]: true,
          })}
        >
          {renderIcon && icon}
          {label}
        </Link>
      ))}

      {socialLinks.map(
        ({ href, id, icon, label, renderSocialIcon }: navLink) => (
          <Link href={href} key={id} className={style.link}>
            {(renderSocialIcon && icon) || (renderIcon && icon)}
            {label !== "" && label}
          </Link>
        ),
      )}
    </div>
  </div>
);

export default Navlinks;
