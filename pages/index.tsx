import Head from "next/head";
import { getSortedNotesData } from "../lib/notes";
import { NoteType } from "types/note";
import NoteCard from "@components/widgets/noteCard";

export async function getStaticProps() {
  const allNotesData = getSortedNotesData();
  return {
    props: {
      allNotesData,
    },
  };
}

export default function Home({ allNotesData }: { allNotesData: any }) {
  return (
    <>
      <Head>
        <title>abanseka</title>
        <meta name="description" content="abanseka's website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/branch_favicon.png" />
      </Head>

      {allNotesData?.map(({ date, title, noteslug, description }: NoteType) => (
        <NoteCard
          key={title}
          title={title}
          date={date}
          noteslug={noteslug}
          description={description}
        />
      ))}
    </>
  );
}
