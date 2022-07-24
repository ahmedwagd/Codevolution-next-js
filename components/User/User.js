import Link from 'next/link';

function User({ user }) {
  return (
    <Link href={`/users/${user.id}`}>
      <a><h3>{user.name}</h3></a>
    </Link>
  )
}
export default User;