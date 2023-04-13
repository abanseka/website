import Head from "next/head";
import { MainContainer } from "@components/styled/Main";
import PostCard from "@components/widgets/postCard";
import Blog from "../DummyPost.json";
import { post } from "types/common";

export default function Home() {
  const { posts } = Blog;

  return (
    <>
      <Head>
        <title>abanseka</title>
        <meta name="description" content="abanseka's website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/branch_favicon.png" />
      </Head>

      <MainContainer>
        {posts.map((post: post) => (
          <PostCard
            key={post.id}
            title={post.title}
            description={post.summary}
          />
        ))}
      </MainContainer>
    </>
  );
}
