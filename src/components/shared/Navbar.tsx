import Image from "next/image";
import logo from "@/assets/book.ico";

const Navbar = () => {
  return (
    <div className="border-b border-gray-200 bg-base-100">
      <div className="navbar mx-auto max-w-6xl px-4">

        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content z-10 mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
            >
              <li>
                <a href="/">Home</a>
              </li>

              <li>
                <a href="/listed-books">Listed Books</a>
              </li>

              <li>
                <a href="/pages-to-read">Pages to Read</a>
              </li>
            </ul>
          </div>

          <a href="/" className="flex items-center gap-2">
            <Image
              src={logo}
              alt="Book Vibe"
              width={35}
              height={35}
            />

            <span className="text-lg font-semibold">
              Book Vibe
            </span>
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-1 px-1">
            <li>
              <a
                href="/"
                className="text-green-600"
              >
                Home
              </a>
            </li>

            <li>
              <a href="/listed-books">
                Listed Books
              </a>
            </li>

            <li>
              <a href="/pages-to-read">
                Pages to Read
              </a>
            </li>
          </ul>
        </div>

        <div className="navbar-end gap-2">
          <button className="btn btn-sm bg-emerald-400 text-white hover:bg-emerald-500">
            Sign In
          </button>

          <button className="btn btn-sm border-0 bg-pink-400 text-white hover:bg-pink-500">
            Sign Up
          </button>
        </div>

      </div>
    </div>
  );
};

export default Navbar;