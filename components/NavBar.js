import Link from "next/link";
import { useRouter } from 'next/router';

export default function NavBar() {
  const router = useRouter();
  return <nav>
    <Link href="/">
      <a style={{ color: router.pathname === "/" ? "red" : "blue" }}>Home</a>
    </Link>
    <Link style={{ color: router.pathname === "/about" ? "red" : "blue" }} href="/about">
      <a>About</a>
    </Link>
  </nav>
}