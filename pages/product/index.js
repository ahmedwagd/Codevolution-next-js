import Link from 'next/link'

function Products() {
  return (
    <div>
      <h1>Products Page</h1>
      <ul>
        <li><Link href={`/product/${encodeURIComponent(1)}`}>Product 1</Link></li>
        <li><Link href={{ pathname: "/product/[productId]", query: { productId: 2 } }}>Product 2</Link></li>
        <li><Link href={{ pathname: "/product/[productId]", query: { productId: 3 } }}>Product 3</Link></li>
      </ul>
    </div>

  )
}
export default Products;