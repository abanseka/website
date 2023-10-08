import Link from "next/link";
import Image from "next/image";
import NavLinks from "@components/navlinks/navlinks";
import dp from "../../public/assets/dp.jpeg";
import BlockIcon from "@assets/block.svg";
import style from "./nav.module.scss";

const Navbar = () => {
  const workprops = {
    href: "https://archisacademy.com",
    target: "blank",
  };

  return (
    <nav className={style.navbar}>
      <NavLinks />

      <div className={style.profiledetails}>
        <div className={style.details}>
          <div className={style.logowrapper}>
            <p className={style.logoblack}>abanseka</p>
            <p className={style.logolight}>.dev</p>
          </div>

          <h5 className={style.role}>Front-end developer</h5>
          <Link {...workprops} className={style.companywrapper}>
            <BlockIcon />
            <span className={style.company}>@archisacademy</span>
          </Link>
        </div>

        <Image src={dp} priority alt="my dp" className={style.profile} />
      </div>
    </nav>
  );
};

export default Navbar;
