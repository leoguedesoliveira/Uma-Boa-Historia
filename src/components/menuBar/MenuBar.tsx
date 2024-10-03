import { useState } from "react";
import { Link } from "react-router-dom";

export default function MenuBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <header className="bg-white shadow-md fixed w-full top-0 z-50 flex">
        <nav className="container mx-auto flex items-center justify-between px-4 py-4">
          <div>
            <h1 className="font-mali text-orange-700 font-bold text-xl">
              Uma Boa História
            </h1>
            <p className="font-mali text-sm text-center">Tenha bons sonhos...</p>
          </div>

          {/* Botão de menu para mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-orange-700 focus:outline-none transition duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Menu de navegação - visível em telas maiores */}
          <ul className="hidden md:flex justify-center space-x-8">
            <li>
              <Link
                to={"/Uma-Boa-Historia"}
                className="text-gray-800 hover:text-orange-700 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href="#contribuicao"
                className="text-gray-800 hover:text-orange-700 transition duration-300"
              >
                Contribuição
              </a>
            </li>
          </ul>
        </nav>

        {/* Menu de navegação - visível em mobile */}
        {isOpen && (
          <ul className="flex flex-col items-center md:hidden bg-white w-full absolute top-16 space-y-4 py-4 shadow-lg z-40">
            <li>
              <Link
                to={"/Uma-Boa-Historia"}
                onClick={() => setIsOpen(false)}
                className="text-gray-800 hover:text-orange-700 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href="#contribuicao"
                onClick={() => setIsOpen(false)}
                className="text-gray-800 hover:text-orange-700 transition duration-300"
              >
                Contribuição
              </a>
            </li>
          </ul>
        )}
      </header>
    </>
  );
}
