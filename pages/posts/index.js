import Post from "../../components/Post/Post";


function Posts({ posts }) {
  return (
    <>
      <h1>Posts page</h1>
      {
        posts.map(post => (
          <div key={post.id} style={{ textAlign: 'center', marginBottom: '20px' }}>
            <Post post={post} />
          </div>
        ))
      }
    </>
  )
}
export default Posts;

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json()
  return {
    props: {
      posts: data.slice(0, 10)
    }
  }
}