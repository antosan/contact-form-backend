import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-100 border-gray-200 px-2 py-5">
      <div className="container flex flex-wrap items-center justify-center mx-auto">
        <ul className="flex flex-row space-x-8 mt-0 text-sm font-medium">
          <li>
            <Link href="/" className="text-blue-700" aria-current="page">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-700 hover:text-blue-700">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
