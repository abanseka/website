import Head from "next/head";
import { allNotes } from "contentlayer/generated";
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
    width: "1rem",
    height: "1rem",
  };

  const chipContainerStyle: CSSProperties = {
    display: "flex",
    paddingInline: 20,
    alignItems: "center",
    fontSize: 12,
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

      <div style={{ marginBlockEnd: 40, paddingInline: 20 }}>
        <p style={{ fontSize: 14, lineHeight: 2, marginBlockEnd: 10 }}>
          Hi I am abanseka sylvester, a code junkie, anime crackHead and sucker
          for arts. Here's where I dump my stuff for future references
        </p>

        <div
          style={{
            height: 500,
            borderRadius: 4,
            border: "2px solid lightgray",
          }}
        >
          <img
            alt="banner"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top",
            }}
            src="https://i.pinimg.com/enabled_hi/564x/b4/fc/fe/b4fcfecd185b6207f90d95360a0568de.jpg"
          />

          {/* prettier-ignore */}
          <a 
            href="https://www.pinterest.com/pin/3799980929646402/"
            style={{ fontSize: 12, marginBlock: 10,color:"teal",textDecoration:"none" }}> arts by 心琳 蔣 on Pinterest{" "} </a>
        </div>
      </div>

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
