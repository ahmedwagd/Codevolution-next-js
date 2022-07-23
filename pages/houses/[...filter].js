import { useRouter } from 'next/router';

function Houses() {
  const router = useRouter();
  const { filter = [] } = router.query
  return (
    <>
      {
        filter.length === 2
          ? (
            <div>
              <h1>Houses page</h1>
              <p>this is filter between {filter[0]} $ and {filter[1]} $ houses</p>
            </div>
          ) : filter.length === 1
            ? (
              <div>
                <h1>Houses page</h1>
                <p>this is filter between {filter[0]} $ houses</p>
              </div>
            ) : (
              <div>
                <h1>Houses page</h1>
                <p></p>
              </div>
            )
      }
    </>
  )
}

export default Houses;