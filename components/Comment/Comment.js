import Link from "next/link";

function Comment({ comment }) {
  return (
    <Link href={`/comments/${comment.id}`}>
      <a>{comment.email}</a>
    </Link>
  )
}
export default Comment;