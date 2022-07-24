import Link from 'next/link'

import Navbar from "../../components/Navbar/Navbar";

function Products({ productId = 100 }) {
  return (
    <div>
      <h1>Products Page</h1>
      <Navbar />
      <div>
        <ul>
          <li><Link href={`/product/${encodeURIComponent(1)}`}><a href=''>Product 1</a></Link></li>
          <li><Link href={{ pathname: "/product/[productId]", query: { productId: 2 } }} ><a >Product 2</a></Link></li>
          <li><Link href={{ pathname: "/product/[productId]", query: { productId: 3 } }}><a >Product 3</a></Link></li>
          <li><Link href={{ pathname: "/product/[productId]", query: { productId: productId } }} replace><a >Product {productId}</a></Link></li>
        </ul>
      </div>
    </div>

  )
}
export default Products;