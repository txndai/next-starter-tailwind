import Link from "next/link";
import { useState, useContext } from "react";
import CartContext from './cartContext';


function Header(props) {
  const { cart } = useContext(CartContext);
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <header className="bg-teal-500">
      <div className="flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto md:flex-no-wrap md:p-8">
        <div className="flex items-center">
          <img
            src="tailwind-logo.svg"
            className="w-10 mr-3 text-white"
          />

          <Link href="/">
            <a className="text-xl font-bold text-white">
              Next.js Starter Tailwind
            </a>
          </Link>
        </div>

        <button
          className="flex items-center block px-3 py-2 text-white border border-white rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
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
            isExpanded ? `block` : `hidden`
          } md:flex flex-col md:flex-row md:items-center md:justify-center text-sm w-full md:w-auto`}
        >
          {[
            { title: "Home", route: "/" },
            { title: "About", route: "/about" },
            { title: "Cart", route: "/cart" },
            { title: "store", route: "/store" }
          ].map(navigationItem => (
            <li className="mt-3 md:mt-0 md:ml-6" key={navigationItem.title}>
              <Link href={navigationItem.route}>
                <a className="block text-white">{navigationItem.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      <a href="/cart" className="my-2 btn btn-outline-primary my-sm-0">Cart {cart.length}</a>
      </div>
    </header>
  );
}

export default Header;
