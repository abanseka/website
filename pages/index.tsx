import Head from "next/head";
import { allNotes } from "contentlayer/generated";
import { NoteType } from "types/note";
import NoteCard from "@components/widgets/noteCard";

export async function getStaticProps() {
  const notes = allNotes;
  return {
    props: {
      notes,
    },
  };
}

export default function Home({ notes }: { notes: any }) {
  return (
    <>
      <Head>
        <title>abanseka</title>
        <meta name="description" content="abanseka's website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/branch_favicon.png" />
      </Head>

      {notes.map((note: NoteType) => (
        <NoteCard
          key={note.title}
          title={note.title}
          date={note.date}
          url={note.url}
          description={note.description}
        />
      ))}
    </>
  );
}
