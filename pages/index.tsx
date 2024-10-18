import Head from "next/head";
import { allNotes } from ".contentlayer/generated";
import { NoteProps } from "types/common";
import { CSSProperties } from "react";
import PenIcon from "@assets/penIcon.svg";
import NoteCard from "@components/notecard/noteCard";
import { openGraphData } from "datastore/OG";

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
        <meta name="description" content={openGraphData?.description} />

        <meta property="og:url" content="https://abanseka.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="abanseka" />
        <meta property="og:description" content={openGraphData?.description} />
        <meta property="og:image" content={openGraphData?.image} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="abanseka.vercel.app" />
        <meta property="twitter:url" content="https://abanseka.vercel.app/" />
        <meta name="twitter:title" content="abanseka" />
        <meta name="twitter:description" content={openGraphData?.description} />
        <meta name="twitter:image" content={openGraphData?.image} />
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
