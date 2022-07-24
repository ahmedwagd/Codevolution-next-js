import Link from 'next/link'
import { useRouter } from 'next/router';
import Navbar from '../../../components/Navbar/Navbar';

function ProductDetail() {
  const router = useRouter()
  const { productId } = router.query
  const handleClick = () => {
    console.log('Placing your order');
    router.replace('/')
  }
  return (
    <div>
      <h1>Details about product {productId}</h1>
      <Navbar />
      <div>
        <ul>
          <li><Link href={{ pathname: `/product/${productId}/review/[reviewId]`, query: { reviewId: 1 } }} replace><a>Review 1</a></Link></li>
          <li><Link href={{ pathname: `/product/${productId}/review/[reviewId]`, query: { reviewId: 2 } }} replace><a>Review 2</a></Link></li>
          <li><Link href={{ pathname: `/product/${productId}/review/[reviewId]`, query: { reviewId: 3 } }} replace><a>Review 3</a></Link></li>
        </ul>
      </div>
      <button onClick={handleClick}>
        Place Order
      </button>
    </div>
  )
}
export default ProductDetail;