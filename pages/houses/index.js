import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar/Navbar';

function HousesList() {
  const router = useRouter();
  const { filter } = router.query
  return (
    <div>
      <h1>HousesList page</h1>
      <Navbar />
      <p></p>
    </div>
  )
}

export default HousesList;