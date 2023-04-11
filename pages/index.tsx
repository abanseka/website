import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>abanseka</title>
        <meta name="description" content="abanseka's website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/branch_favicon.png" />
      </Head>

      <main>
        <pre style={{ display: "none" }}>
          <code>
            {JSON.stringify({
              sources: {
                favicon: "https://icons8.com/icon/33280/code-fork",
              },
            })}
          </code>
        </pre>
      </main>
    </>
  );
}
