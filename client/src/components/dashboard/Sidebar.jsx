import React from 'react'
import { Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa"
import { FaTimes } from "react-icons/fa"
import { FaCog } from "react-icons/fa"
import { FaBook } from "react-icons/fa"

export default function Sidebar() {
    return (
        <div className='font-Archivo'>

            <div
                className="bg-purple-50 h-screen rounded-lg p-8 md:block px-3 w-30 md:w-60 lg:w-44 overflow-x-hidden transition-transform duration-300 ease-in-out"
            >
                <div className="space-y-6 md:space-y-6">
                    <h1 className="hidden md:block font-bold text-sm md:text-xl text-center">
                        Fit Book<span className="text-purple-600">.</span>
                    </h1>
                    <div id="profile" className="space-y-3">
                        <img
                            src="https://pbs.twimg.com/profile_images/1467997254929854470/mDYbXoVl_400x400.jpg"
                            alt="Avatar user"
                            className="w-10 md:w-16 rounded-full mx-auto"
                        />
                        <div>
                            <h2
                                className="font-medium text-xs md:text-sm text-center text-purple-500"
                            >
                                {localStorage.getItem("username")}
                            </h2>
                            <p className="text-xs text-gray-500 text-center">Administrator</p>
                        </div>
                    </div>

                    <div id="menu" className="flex flex-col space-y-2">
                        <Link
                            to="/dashboard/home"
                            className=" text-sm font-medium text-gray-800 py-2 px-2 hover:bg-purple-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out"
                        >
                            <FaBook
                                className="w-6 h-6 mr-2 fill-current inline-block"

                            >

                            </FaBook>
                            <span className="">Tarifleri Keşfet</span>
                        </Link>

                        <Link
                            to="/dashboard/recipes"
                            className="text-sm font-medium text-gray-800 py-2 px-2 hover:bg-purple-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                        >
                            <FaShoppingBasket
                                className="w-6 h-6 mr-2 fill-current inline-block"

                            >

                            </FaShoppingBasket>
                            <span className="">Tariflerim</span>
                        </Link>
                        <Link
                            to="/dashboard/favs"
                            className="text-sm font-medium text-gray-800 py-2 px-2 hover:bg-purple-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                        >
                            <FaUsers
                                className="w-6 h-6 mr-2 fill-current inline-block"

                            >

                            </FaUsers>
                            <span className="">Favorilerim</span>
                        </Link>

                        <Link
                            to="/dashboard/settings"
                            className="text-sm font-medium text-gray-800 py-2 px-2 hover:bg-purple-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                        >
                            <FaCog
                                className="w-6 h-6 mr-2 fill-current inline-block"

                            />

                            <span className="">Ayarlar</span>
                        </Link>

                        <Link
                            to="/login"
                            className="text-sm font-medium text-gray-800 py-2 px-2 hover:bg-red-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                        >
                            <FaTimes
                                className="w-6 h-6 mr-2 fill-current inline-block"

                            />

                            <span className="">Çıkış Yap</span>
                        </Link>





                    </div>
                </div>
            </div>



        </div>
    )
}
