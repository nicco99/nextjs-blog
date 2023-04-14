
import Head from 'next/head';
import Link from 'next/link';


export async function getStaticProps() {
    const res = await fetch('http://localhost:5000/products');
    return {
      props: {
        products: await res.json()
      },
    };
  }
  

export default function ProductList({products}) {
  
 const {data} = products
    return(
        <div>
            <h1>This is the product list</h1>
            <ul>
              {
                data.map(({product_title,product_description,product_quantity_in_stock,product_price,product_id})=><li className="grid border bottom-1 grid-cols-4 gap-4 m-4" key={product_id}>
                  <span className='text-blue-500'>{product_title}</span>
                  <span className='text-bolded'>{product_description}</span>
                  <span className='text-4xl p-2'>{product_quantity_in_stock}</span>
                  <span className='text-4xl p-2'>{product_price}</span>
                  <Link href={`${product_id}`}> Go</Link>
                </li>)
              }
            </ul>
        </div>
    )
}