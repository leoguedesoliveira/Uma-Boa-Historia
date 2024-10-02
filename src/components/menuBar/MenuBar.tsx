import { Link } from "react-router-dom";

export default function MenuBar() {
    return(
        <>
            <header className="bg-white shadow-md fixed w-full top-0 z-50 flex">
                <nav className="container mx-auto flex items-center justify-between px-4 py-4">
                    <div className="">
                        <h1 className="font-mali text-orange-700 font-bold text-xl">Uma Boa História</h1>
                        <p className="font-mali text-sm text-center">Tenha bons sonhos...</p>
                    </div>

                    {/* Menu de navegação */}
                    <ul className="flex justify-center space-x-8">
                    <li>
                        {/* <a href="#home" className="text-gray-800 hover:text-orange-700 transition duration-300">
                        Home
                        </a> */}
                        <Link to={'/Uma-Boa-Historia'} className="text-gray-800 hover:text-orange-700 transition duration-300">Home</Link>
                    </li>
                    <li>
                        <a href="#contribuicao" className="text-gray-800 hover:text-orange-700 transition duration-300">
                        Contribuição
                        </a>
                    </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}