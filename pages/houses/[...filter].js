import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar/Navbar';

function Houses() {
  const router = useRouter();
  const { filter = [] } = router.query
  return (
    <div>
      <h1>Houses page</h1>
      <Navbar />
      {
        filter.length === 2
          ? (
            <div>
              <p>this is filter between {filter[0]} $ and {filter[1]} $ houses</p>
            </div>
          ) : filter.length === 1
            ? (
              <div>
                <p>this is filter between {filter[0]} $ houses</p>
              </div>
            ) : (
              <div>
                <p></p>
              </div>
            )
      }
    </div>
  )
}

export default Houses;