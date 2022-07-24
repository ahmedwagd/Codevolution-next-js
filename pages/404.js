import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function PageNotFound() {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.replace('/')
    }, 2000)
  }, [router])
  return (
    <>
      <Head>
        <title>404 Page</title>
      </Head>
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1 style={{ textAlign: "center" }}>404 Page with all the custom styling ncessary</h1>
        <p style={{ textAlign: "center" }}>You&#39;ll go back to Home page</p>
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  )
}
export default PageNotFound;