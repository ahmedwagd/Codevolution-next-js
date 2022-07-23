import Link from 'next/link'
import { useRouter } from 'next/router';

function ProductDetail() {
  const productId = useRouter().query.productId
  return (
    <div>
      <h1>Details about product {productId}</h1>
      <ul>
        <li><Link href={{ pathname: `/product/${productId}/review/[reviewId]`, query: { reviewId: 1 } }}>Review 1</Link></li>
        <li><Link href={{ pathname: `/product/${productId}/review/[reviewId]`, query: { reviewId: 2 } }}>Review 2</Link></li>
        <li><Link href={{ pathname: `/product/${productId}/review/[reviewId]`, query: { reviewId: 3 } }}>Review 3</Link></li>
      </ul>
    </div>
  )
}
export default ProductDetail;