
function PostDetails({ post }) {
  console.log(post);
  return (
    <>
      <h3>{post.title}</h3>
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
    params: {
      post: data
    }
  }
}