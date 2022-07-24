import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Next Js pre-rendering</h1>
      <Link href={'/users'} prefetch={false}>
        <a > Users </a>
      </Link>
      <Link href={'/posts'} prefetch={false}>
        <a > Posts </a>
      </Link>
    </>
  )
}
