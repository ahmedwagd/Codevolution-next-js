import { useRouter } from 'next/router';

function HousesList() {
  const router = useRouter();
  const { filter } = router.query
  return (
    <div>
      <h1>HousesList page</h1>
      <p></p>
    </div>
  )
}

export default HousesList;