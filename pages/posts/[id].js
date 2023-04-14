import Layout from '../../components/layout';
// import { getAllPostIds } from '../../lib/posts';

// export async function getStaticPaths() {
//   const paths = await getAllPostIds();
//   console.log(paths)
//   return {
//     paths,
//     fallback: false,
//   };
// }


export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
}

export default function Post() {
  
  return <Layout>...</Layout>;
}

