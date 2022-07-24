import Link from 'next/link';

function Post({ post }) {
  return (
    <Link href={`/posts/${post.id}`} passHref prefetch={false}>
      <a href=""><h3>{post.title}</h3></a>
    </Link>
  )
}
export default Post;