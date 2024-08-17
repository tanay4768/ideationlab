import React from 'react'
import {Link, NavLink} from 'react-router-dom'

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0   ">
            <nav className=" border-gray-200   bg-black">
                <div className="flex flex-wrap justify-between items-center ">
                    <Link to="/" className="flex flex-col md:flex-row    bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl">
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/chatbot2306125.appspot.com/o/arrow.png?alt=media&token=6dd31316-2e99-46b9-aaa3-993c72fed801"
                            className="h-12 border-2"
                            alt="Logo"
                        />
                        <div className="font-sans text-5xl font-bold border-2">IdeationLab </div>
                        <div className="mt-9 ml-4 text-sm font-bold border-2">Where Ideas Meets Reality </div>
                    </Link>

                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-white bg-gray-700 hover:bg-black-800 focus:ring-4 focus:ring-black-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            about us
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}
