import Link from "next/link";
import JournalIcon from "@assets/journal.svg";
import WorkIcon from "@assets/work.svg";
import GitHub from "@assets/rocket.svg";
import Person from "@assets/person.svg";
import style from "./navlinks.module.scss";

type navLink = {
  id: number;
  label: string;
  href: string;
  icon?: React.ReactNode;
};

type MenuWidgetProps = {
  renderIcon?: boolean;
};

const Navlinks = ({ renderIcon = true }: MenuWidgetProps) => {
  const navLinks: navLink[] = [
    { id: 1, label: "Notes", href: "/", icon: <JournalIcon /> },
    { id: 2, label: "Works", href: "/works", icon: <WorkIcon /> },
  ];

  const socialLinks: navLink[] = [
    {
      id: 3,
      label: "GitHub",
      href: "https://github.com/abanseka",
      icon: <GitHub />,
    },
    {
      id: 4,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/abanseka-sylvester/",
      icon: <Person />,
    },
  ];

  return (
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
};

export default Navlinks;
