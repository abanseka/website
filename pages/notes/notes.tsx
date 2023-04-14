import PostCard from "@components/widgets/postCard";

export default function Notes({ allNotesData }: { allNotesData: any }) {
  return allNotesData.map(
    ({ date, title }: { date: string; title: string }) => (
      <PostCard key={title} title={title} date={date} />
    )
  );
}
