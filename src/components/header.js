import Link from "next/link";
import { useState } from "react";

function Header() {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  return (
    <header className="bg-teal-600">
      <div className="flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto md:flex-no-wrap md:p-8">
        <div className="flex items-center">
          <img
            alt="Tailwind CSS logo"
            className="w-10 mr-3 text-white"
            src="tailwind-logo.svg"
          />

          <Link href="/">
            <a className="text-xl font-bold text-white">
              Next.js Starter Tailwind
            </a>
          </Link>
        </div>

        <button
          className="flex items-center block px-3 py-2 text-white border border-white rounded md:hidden"
          onClick={() => setIsMenuExpanded(!isMenuExpanded)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <ul
          className={`${
            isMenuExpanded ? `block` : `hidden`
          } md:flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-6 md:justify-center text-sm w-full md:w-auto`}
        >
          {[
            { label: "Home", route: "/" },
            { label: "About", route: "/about" },
          ].map((link) => (
            <li key={link.label}>
              <Link href={link.route}>
                <a className="block text-white">{link.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
