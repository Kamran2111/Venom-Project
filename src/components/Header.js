import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="grid grid-cols-2">
        <img className=" rounded-full" src="/logo.png" alt="LOGO" />
        <ul className="grid flex-1 grid-cols-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/gallery">Gallery</Link>
          </li>
          <li>
            <Link href="/trailers">Trailers</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
