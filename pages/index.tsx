import Head from "next/head";
import { allNotes } from "contentlayer/generated";
import { NoteProps } from "types/common";
import NoteCard from "@components/notecard/noteCard";

export async function getStaticProps() {
  const notes = allNotes
    .map((notes: NoteProps) => ({
      title: notes.title,
      description: notes.description,
      url: notes.url,
    }))
    .reverse();

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

      {notes.map((note: NoteProps) => (
        <NoteCard
          url={note.url}
          key={note.title}
          title={note.title}
          description={note.description}
        />
      ))}
    </>
  );
}
