import Head from "next/head";
import Layout from "../../components/layout";
export async function getStaticPaths() {
  // When this is true (in preview environments) don't
  // prerender any static pages
  // // (faster builds, but slower initial page load)
  if (process.env.SKIP_BUILD_STATIC_GENERATION) {
    return {
      paths: [],
      fallback: "blocking",
    };
  }

  // Call an external API endpoint to get products
  const res = await fetch("http://localhost:5000/products");
  const { data } = await res.json();

  // Get the paths we want to prerender based on posts
  // In production environments, prerender all pages
  // (slower builds, but faster initial page load)
  const paths = data.map((product) => ({
    params: { id: `${product.product_id}` },
  }));

  // { fallback: false } means other routes should 404
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const product = await fetch(`http://localhost:5000/products/${params.id}`);
  return {
    props: {
      product: await product.json(),
    },
  };
}

export default function Product({ product }) {
  return (
    <div>
      <Layout>
        <Head>
          <title>{product.data.product_title}</title>
        </Head>
        <h1>{product.data.product_title}</h1>
      </Layout>
    </div>
  );
}
