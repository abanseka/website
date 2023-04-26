import Head from "next/head";
import { getAllPostIds, getNotesData } from "../../lib/notes";

export default function Note({ notes: note }: any) {
  return (
    <>
      <Head>
        <title>{note.title}</title>
      </Head>

      <article>
        <h1>{note.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: note.htmlContent }} />
      </article>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const notes = await getNotesData(params.id);
  return {
    props: {
      notes,
    },
  };
}
