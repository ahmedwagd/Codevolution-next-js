import { useRouter } from 'next/router';

function ReviewDetails() {
  const router = useRouter();
  const { productId, reviewId } = router.query
  return (
    <div>
      <h2>Product {productId} - review {reviewId}</h2>
    </div>
  )
}
export default ReviewDetails;