import { NoteType } from "types/note";
import Link from "next/link";
import style from "./notecard.module.scss";

const NoteCard = (note: NoteType) => (
  <Link className={style.notecard} href={note.url}>
    <p className={style.notetitle}>{note.title}</p>
    <p className={style.notedescription}>{note.description}</p>
    <p className={style.notedate}>{note.date}</p>
  </Link>
);
export default NoteCard;
