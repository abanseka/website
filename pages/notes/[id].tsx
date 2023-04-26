import Head from "next/head";
import { getAllPostIds, getNotesData } from "../../lib/notes";
import { MainContainer } from "@styledComponents/global";

export default function Note({ notes }: any) {
  return (
    <>
      <Head>
        <title>{notes.title}</title>
      </Head>

      <MainContainer>
        <article>
          <h1>{notes.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: notes.htmlContent }} />
        </article>
      </MainContainer>
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
