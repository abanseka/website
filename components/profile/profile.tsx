import Link from "next/link";
import Image from "next/image";
import NavLinks from "@components/navlinks/navlinks";
import dp from "../../public/assets/dp.jpeg";
import style from "./profile.module.scss";

const Profile = () => {
  const projectprops = {
    href: "https://archisacademy.com",
    target: "blank",
  };

  return (
    <nav className={style.navbar}>
      <NavLinks renderIcon={false} />

      <div className={style.profiledetails}>
        <div className={style.details}>
          <div className={style.logowrapper}>
            <p className={style.logoblack}>A</p>
            <p className={style.logolight}>banseka</p>
          </div>

          <h5 className={style.role}>Front-end developer</h5>
          <Link {...projectprops} className={style.companywrapper}>
            <span className={style.company}>@archisacademy</span>
          </Link>
        </div>

        <Image src={dp} priority alt="my dp" className={style.profile} />
      </div>
    </nav>
  );
};

export default Profile;
