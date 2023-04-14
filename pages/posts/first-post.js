import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function FirstPost({ todos }) {
  const list = todos.map((todo,i) => (
    <li key={i}>
      <span>{todo.title}</span>
      <br></br>
      <span>{todo.description}</span>
    </li>
  ));
  return (
    <Layout>
      <Head>
        <title>Posts</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">← Back to home</Link>

        <p>todo list </p>
        <ul>{list}</ul>
      </h2>
    </Layout>
  );
}
