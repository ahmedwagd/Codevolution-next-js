import Link from 'next/link';


function Navbar() {
  return (
    <div>
      <Link href='/'>
        <a href=""> Home </a>
      </Link>
      <Link href='/blog'>
        <a href=""> Blog </a>
      </Link>
      <Link href='/about'>
        <a href=""> About Us </a>
      </Link>
      <Link href='/product'>
        <a href=""> Products </a>
      </Link>
      <Link href='/houses'>
        <a href=""> Houses </a>
      </Link>
    </div>
  )
}

export default Navbar;