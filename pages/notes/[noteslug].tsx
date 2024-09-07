import Head from "next/head";
import { allNotes } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import BackIcon from "@assets/leftArrow.svg";
import style from "./note.module.scss";
import Link from "next/link";

export async function getStaticPaths() {
  const paths = allNotes.map((note: any) => note.url);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const note = allNotes.find((n) => n._raw.flattenedPath === params.noteslug);

  return {
    props: {
      note,
    },
  };
}

const PageBackArrow = ({ note }: any) => (
  <Link href="/" className={style.backArrow}>
    <BackIcon />
    <h1>{note}</h1>
  </Link>
);

export default function Note({ note }: any) {
  const MDXContent = useMDXComponent(note.body.code);
  return (
    <>
      <Head>
        <title>{note.title}</title>
      </Head>

      <PageBackArrow note={note?.title} />

      <article className={style.notepage}>
        <MDXContent />
      </article>

      <PageBackArrow note={note?.title} />
    </>
  );
}
