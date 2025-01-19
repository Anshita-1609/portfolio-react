import { useState } from "react";
import { RiMenu2Line, RiCloseLine, RiHomeSmileLine, RiAwardLine, RiUser3Line, RiMailLine, RiFolderLine } from '@remixicon/react';

const Navbar = () => {
    const [menu, openMenu] = useState(false);
    const [showMenu, setShowMenu] = useState(true);

    return (
        <nav className='flex  flex-wrap justify-between items-center bg-gray-800 text-white px-10 pt-6 md:px-20 text-lg font-semibold'>
            <span className='text-3xl font-bold tracking-wide text-gray-100'>Welcome to my portfolio!</span>
            <ul className={`${menu ? "block" : "hidden"} text-lg mx-24 mt-4 py-2 font-semibold md:mt-5 bg-gray-800 px-2 rounded-xl bg-opacity-90 md:border-none text-center md:static md:mx-0 md:flex gap-6`}>
                <a href="#home" className="flex items-center gap-2 transition-all duration-300 p-1 md:p-0 rounded-lg hover:bg-pink-600 hover:text-white">
                    <RiHomeSmileLine /> Home
                </a>
                <a href="#about" className="flex items-center gap-2 transition-all duration-300 p-1 md:p-0 rounded-lg hover:bg-pink-600 hover:text-white">
                    <RiUser3Line /> About
                </a>
                <a href="#projects" className="flex items-center gap-2 transition-all duration-300 p-1 md:p-0 rounded-lg hover:bg-pink-600 hover:text-white" >
                    <RiFolderLine /> Projects
                </a>
                <a href="#participation" className="flex items-center gap-2 transition-all duration-300 p-1 md:p-0 rounded-lg hover:bg-pink-600 hover:text-white">
                    <RiAwardLine />
                    Participations
                </a>
                <a href="#contact" className="flex items-center gap-2 transition-all duration-300 p-1 md:p-0 rounded-lg hover:bg-pink-600 hover:text-white">
                    <RiMailLine /> Contact
                </a>
            </ul>
            {
                showMenu ? (
                    <RiMenu2Line
                        size={30}
                        className="text-gray-100 md:hidden absolute right-10 top-6 transition-all duration-300"
                        onClick={() => { openMenu(!menu); setShowMenu(!showMenu); }}
                    />
                ) : (
                    <RiCloseLine
                        size={30}
                        className="text-gray-100 md:hidden absolute right-10 top-6 transition-all duration-300"
                        onClick={() => { openMenu(!menu); setShowMenu(!showMenu); }}
                    />
                )
            }
        </nav >
    );
};

export default Navbar;
