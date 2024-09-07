import Head from "next/head";
import { allNotes } from "contentlayer/generated";
import { NoteProps } from "types/common";
import { CSSProperties } from "react";
import PenIcon from "@assets/penIcon.svg";
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
  const chipIconstyle: CSSProperties = {
    width: "1.2rem",
    height: "1.2rem",
  };

  const chipContainerStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 8,
  };

  return (
    <>
      <Head>
        <title>abanseka</title>
        <meta name="description" content="abanseka's website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/branch_favicon.png" />
      </Head>

      <h5 style={chipContainerStyle}>
        <PenIcon style={chipIconstyle} />
        My Notes
      </h5>

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
