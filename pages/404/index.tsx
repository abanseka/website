import Head from "next/head";
import NotFountIcon from "@assets/404.svg";
import style from "./404.module.scss";
import Link from "next/link";

export default function Index() {
  return (
    <>
      <Head>
        <title>Dead End!</title>
        <link rel="icon" href="/branch_favicon.png" />
      </Head>

      <div className={style.deadEnd}>
        <NotFountIcon className={style.notfoundicon} />

        <h3 className={style.notfoundtext}>
          Dead end!. Go{" "}
          <Link href="/" className={style.notfoundtext}>
            Home
          </Link>
        </h3>
      </div>
    </>
  );
}
