import { useRouter } from "next/router";
import Layout from "../../components/layout";
import Head from "next/head";
export async function getStaticPaths() {
    if (process.env.SKIP_BUILD_STATIC_GENERATION) {
        return {
          paths: [],
          fallback: "blocking",
        };
      }
    
      // Call an external API endpoint to get products
      const res = await fetch("http://localhost:5000/suppliers");
      const { data } = await res.json();
    
      // Get the paths we want to prerender based on posts
      // In production environments, prerender all pages
      // (slower builds, but faster initial page load)
      const paths = data.map((supplier) => ({
        params: { id: `${supplier.supplier_id}` },
      }));
    
      // { fallback: false } means other routes should 404
      return { paths, fallback: false };
    }

export async function getStaticProps({ params }) {
  const supplier = await fetch(`http://localhost:5000/suppliers/${params.id}`);
  return {
    props: {
      supplier: await supplier.json(),
    },
  };
}

export default function Supplier({ supplier }) {
    const {data: {supplier_name,supplier_notes, supplier_city,supplier_email}} = supplier;
    const router = useRouter()
  return (
    <div>
    
        <Head>
          <title>{supplier.data.supplier_name}</title>
        </Head>
        <div className="flex flex-col justify-center items-center my-2">
            <h1 className='text-blue-500 text-center'>{supplier_name}</h1>
                  <p className='text-bolded'>{supplier_notes}</p>
                  <span className='text-xl p-2'>{supplier_city}</span>
                  <span className='text-italic'>{supplier_email}</span>
                  <button onClick={()=>router.push("/suppliers/supplier-list") } className="text-white bg-sky-600 p-2 rounded-lg animate-bounce mt-6">Back</button>
        </div>
    </div>
  );
}
