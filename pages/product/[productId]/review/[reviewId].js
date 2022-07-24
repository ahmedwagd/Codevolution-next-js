import { useRouter } from 'next/router';
import Navbar from '../../../../components/Navbar/Navbar';

function ReviewDetails() {
  const router = useRouter();
  const { productId, reviewId } = router.query
  return (
    <div>
      <h2>Product {productId} - review {reviewId}</h2>
      <Navbar />
    </div>
  )
}
export default ReviewDetails;