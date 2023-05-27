import Head from "next/head";
import { compareDesc, format, parseISO } from "date-fns";
import { allNotes } from "contentlayer/generated";
import { NoteType } from "types/note";
import NoteCard from "@components/notecard/noteCard";

export async function getStaticProps() {
  const notes = allNotes
    .sort((a: NoteType, b: NoteType) => compareDesc(+a.date, +b.date))
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

      {notes.map((note: NoteType) => (
        <NoteCard
          url={note.url}
          key={note.title}
          title={note.title}
          description={note.description}
          date={format(parseISO(note.date), "d MMMM, yyyy")}
        />
      ))}
    </>
  );
}
