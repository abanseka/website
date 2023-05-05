import Head from "next/head";
import { allNotes } from "contentlayer/generated";
import { NotePage } from "@styledComponents/notePage";
import { useMDXComponent } from "next-contentlayer/hooks";

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

export default function Note({ note }: any) {
  const MDXContent = useMDXComponent(note.body.code);
  return (
    <>
      <Head>
        <title>{note.title}</title>
      </Head>

      <NotePage>
        <MDXContent />
      </NotePage>
    </>
  );
}
