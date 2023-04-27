import Head from "next/head";
import { getAllPostIds, getNotesData } from "../../lib/notes";
import { NotePage } from "@styledComponents/notePage";

export default function Note({ notes: note }: any) {
  return (
    <>
      <Head>
        <title>{note.title}</title>
      </Head>

      <NotePage>
        <div dangerouslySetInnerHTML={{ __html: note.htmlContent }} />
      </NotePage>
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
