import Link from "next/link";
 
 
 
 export async function getServerSideProps(context) {
    const res = await fetch('http://localhost:5000/suppliers');
    return {
      props: {
        suppliers: await res.json()
      },
    };
  }

export default function SupplierList({suppliers}) {
    console.log(suppliers)
    return (
        <div>
            <h1 className="text-4xl text-black font-extrabold">This is a list of all the suppliets</h1>
            <ul className="grid grid-cols-3 gap-3">
              {
                suppliers.data.map(({supplier_name,supplier_notes,supplier_city,supplier_email,supplier_id})=><li className="grid border rounded-md bottom-1 grid-cols-1 gap-4 m-4" key={supplier_id}>
                  <span className='text-blue-500 text-center'>Supplier Name:{supplier_name.toUpperCase()}</span>
                  <span className='text-bolded flex flex-col p-2 bg-indigo-300 rounded-md m-2'>
                    <span className="font-bolded text-red-500">Notes:</span>
                    <span className="p-2">{supplier_notes}</span>
                    </span>
                  <span className=' text-bolded flex flex-col p-2 '>
                  <span className="font-bold text-blue-500">City</span>
                  <span className="p-2">{supplier_city}</span>
                    
                    
                    </span>
                
                  <Link href={`${supplier_id}`} className="px-3 outline outline-1 rounded-md m-4 text-blue-600 hover:text-white hover:bg-blue-600 h-10"> View more about {supplier_name.toLowerCase()}</Link>
                </li>)
              }
            </ul>
        </div>
    )
}