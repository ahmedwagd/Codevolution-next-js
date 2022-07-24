import { useRouter } from 'next/router';

function PostDetails({ post }) {
  const router = useRouter()
  if (router.isFallback) {
    return <h1>Loading....</h1>
  }
  return (
    <div style={{ textAlign: 'center', padding: '100px 50px 0px', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '150px', flexDirection: 'column' }}>
      <h1>{post.title}</h1>
      <div>
        <p>{post.body}</p>
      </div>
    </div>
  )
}
export default PostDetails;

export async function getStaticPaths() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json()
  const paths = data.slice(0, 3).map(post => {
    return {
      params: {
        postId: `${post.id}`
      }
    }
  })
  return {
    paths: [
      ...paths
    ],
    fallback: true
  }
}

export async function getStaticProps(context) {
  const { params } = context
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
  const data = await response.json()
  if (!data.id) {
    return {
      notFound: true
    }
  }
  console.log(`Generating page for /post/${params.postId}`);
  return {
    props: {
      post: data
    }
  }
}
