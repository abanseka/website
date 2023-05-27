import Head from "next/head";
import MicroScopeImage from "@assets/404.svg";
import style from "./404.module.scss";

export default function Index() {
  return (
    <>
      <Head>
        <title>Dead End!</title>
        <link rel="icon" href="/branch_favicon.png" />
      </Head>

      <div className={style.deadEnd}>
        <MicroScopeImage className={style.notfoundicon} />
        <h3 className={style.notfoundtext}>Dead end!</h3>
      </div>
    </>
  );
}
