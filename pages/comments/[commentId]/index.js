

function CommentDetail({ comment }) {
  return (
    <div style={{ textAlign: 'center', padding: '100px 50px 0px', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '150px', flexDirection: 'column' }}>
      <h1>{comment.id} - {comment.email}</h1>
      <div>
        <p>Name: {comment.name}</p>
        <p>{comment.body}</p>
      </div>
    </div>
  )
}
export default CommentDetail;

/*
 * * gestStaticPaths > fallback : 'blocking' 
 * 1- The paths returned from gestStaticPaths will be rerenderd to HTML at build time by gestStaticProps.
 * 2- The paths that have not been generated at build time will not  result in a 404 page. Instead, on the first request, Next.js will render the page on the server and the generated HTML.
 * 3- When that's done, the browser recevies the JSON for the generated path. From the user's prespective, it will  transition from "the browser is requesting the page" to 
 *        "the full page is loaded" . There is no flash of loading/fallback state.
 * 4- At the same time, Next.js keeps track of the new list of pre-rendered pages. Subsequent request to the same path will serve the generated page,
 *        just like other pages pre-rendered at build time.
 * * When?

 */

export async function getStaticPaths() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/comments`);
  const data = await response.json();
  const paths = data.map(comment => {
    return {
      params: {
        commentId: `${comment.id}`
      }
    }
  })
  return {
    paths,
    fallback: 'blocking'
  }
}
export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${params.commentId}`)
  const data = await response.json();
  if (!data.id) {
    return {
      notFound: true
    }
  }
  return {
    props: {
      comment: data
    },
    revalidate: 10,
  }
}