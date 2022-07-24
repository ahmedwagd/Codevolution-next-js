
function PostDetails({ post }) {
  return (
    <>
      <h1>{post.title}</h1>
      <div>
        <p>{post.body}</p>
      </div>
    </>
  )
}
export default PostDetails;

export async function getStaticProps(context) {
  const { params } = context
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
  const data = await response.json()
  return {
    props: {
      post: data
    }
  }
}

export async function getStaticPaths() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json()
  const paths = data.map(post => {
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
    fallback: false
  }
}