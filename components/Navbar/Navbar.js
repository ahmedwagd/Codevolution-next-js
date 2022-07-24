import Link from 'next/link';

function Navbar() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '30px' }}>
      <Link href={'/users'} prefetch={false}>
        <a > Users </a>
      </Link>
      <Link href={'/posts'} prefetch={false}>
        <a > Posts </a>
      </Link>
      <Link href={'/comments'} prefetch={false}>
        <a > Comments </a>
      </Link>
    </div>
  )
}
export default Navbar;