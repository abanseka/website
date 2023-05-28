import { NoteProps } from "types/common";
import Link from "next/link";
import style from "./notecard.module.scss";

const NoteCard = (note: NoteProps) => (
  <Link className={style.notecard} href={note.url}>
    <p className={style.notetitle}>{note.title}</p>
    <p className={style.notedescription}>{note.description}</p>
    <p className={style.notedate}>{note.date}</p>
  </Link>
);
export default NoteCard;
