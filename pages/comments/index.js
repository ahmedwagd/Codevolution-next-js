import Comment from "../../components/Comment/Comment";


function Comments({ comments }) {
  console.log(comments);
  return (
    <>
      <h1>Comments page</h1>
      {
        comments.map(comment => (
          <div key={comment.id} style={{ textAlign: 'center', marginBottom: '20px' }}>
            <Comment comment={comment} />
          </div>
        ))
      }
    </>
  )
}
export default Comments;

export async function getStaticProps() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/comments`);
  const data = await response.json();
  return {
    props: {
      comments: data.slice(0, 10)
    }
  }
}