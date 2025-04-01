"use client"

import Link from "next/link";
import { useState } from "react";
import {FiMenu, FiX} from "react-icons/fi";

const NavBar = () => {
    const[isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen)
    }
    return (
        <header className="bg-[#060608] text-white fixed top-0 left-0 right-0 z-[9999] px-5">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center md:py-8 py-5">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-0.5 bg-white"></div>
                    <Link href="/" className="text-lg font-semibold">JADE</Link>
                </div>
                {/* desktop navigation */}
                <div>
                    <p className="text-[#868680] hidden md:block ">Web Developer & Designer<br/>
                    based in Abuja Nigeria</p>
                </div>

                <div className="hidden md:flex items-center space-x-6 font-semibold">
                <Link href="#case-studies" className="hover:underline hover:text-gray-400 transition-all duration-200 ease in">Case Studies</Link>
                <Link href="#case-studies" className="hover:underline hover:text-gray-400 transition-all duration-200 ease in">Experience</Link>
                <Link href="#case-studies" className="hover:underline hover:text-gray-400 transition-all duration-200 ease in">Hire me</Link>
                </div>

                {/* desktop navigation */}
                <div className="hidden md:flex items-center justify-end">
                    <button className="bg-black outline outline-2 outline-white px-5 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-200 ease in">Book Appointment</button>
                </div>

                {/* mobile menu icon */}
                <div className="md:hidden">
                    <button onClick={toggleDrawer}className="text-2xl">
                        {
                            isDrawerOpen ? <FiX />
                            :<FiMenu />
                        }
                    </button>
                </div>

            </div>

            {/* Mobile Drawer */}
            {
                isDrawerOpen && (
                    <div className="mt-3 bg-gray-800 p-4 rounded-lg md:hidden">
                    <p className="mb-4">Web Developer & Designer<br/>
                    based in Abuja Nigeria</p>
                <Link href="#case-studies" className="block mb-2 hover:underline hover:text-gray-400">Case Studies</Link>
                <Link href="#work-experience" className="block mb-2 hover:underline hover:text-gray-400">Experience</Link>
                <Link href="#case-studies" className="block mb-2 hover:underline hover:text-gray-400">Hire me</Link>
                    </div>
                )
            }
        </header>
    );
};

export default NavBar;