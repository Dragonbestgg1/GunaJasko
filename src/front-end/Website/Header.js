import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolling, setScrolling] = useState(false); // State to detect scroll

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleScroll = () => {
        // When user scrolls down, set scrolling to true
        if (window.scrollY > 0) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };

    useEffect(() => {
        // Add scroll event listener
        window.addEventListener("scroll", handleScroll);
        // Clean up the event listener on unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="relative z-50">
            {/* Fixed position header with black background on scroll */}
            <header className="bg-cover bg-center relative">
                <div className={`fixed top-0 w-full ${scrolling ? "bg-black bg-opacity-40 backdrop-blur-md h-[73px] md:h-[93px]" : "bg-transparent"} transition-all duration-300 ease-in-out`}
                >
                    {/* Header Section */}
                    <div className="w-full max-w-screen-xl mx-auto px-8 flex justify-between items-center">
                        {/* Logo Section */}
                        <a href="https://guna.lucid-websites.com/">
                            <h1 className="text-3xl xs:text-4xl md:text-6xl text-[#CDC697] font-marcellus tracking-wide p-3">
                                GUNA JASKO
                            </h1>
                        </a>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex lg:space-x-8 text-white text-sm font-barlow400">
                            <Link
                                to="/"
                                className="hover:text-[#CDC697] transition duration-300 ease-in-out"
                            >
                                SĀKUMS
                            </Link>
                            <Link
                                to="/par-mani"
                                className="hover:text-[#CDC697] transition duration-300 ease-in-out"
                            >
                                PAR MANI
                            </Link>
                            <Link
                                to="/pakalpojumi"
                                className="hover:text-[#CDC697] transition duration-300 ease-in-out"
                            >
                                PAKALPOJUMI
                            </Link>
                            <Link
                                to="/objekti"
                                className="hover:text-[#CDC697] transition duration-300 ease-in-out"
                            >
                                OBJEKTI
                            </Link>
                            <Link
                                to="/kontakti"
                                className="hover:text-[#CDC697] transition duration-300 ease-in-out"
                            >
                                KONTAKTI
                            </Link>
                            <Link
                                to="/"
                                className="hover:text-[#CDC697] transition duration-300 ease-in-out"
                            >
                                LV
                            </Link>
                        </nav>

                        {/* Hamburger Menu Icon */}
                        <div
                            className="lg:hidden text-3xl cursor-pointer z-50 mr-1 xs:mr-3 md:mr-6 text-white"
                            onClick={toggleMenu}
                        >
                            {!menuOpen && <FaBars />}
                        </div>
                    </div>
                    {/* Yellow Line */}
                    <div className="w-full max-w-screen-xl mx-auto px-8 mt-2 relative z-10">
                        <div className="border-b-[1px] border-[#CDC697]"></div>
                    </div>

                    {/* Mobile Navigation */}
                    <nav
                        className={`lg:hidden text-white text-sm z-10 transition-all duration-500 ease-in-out ${
                            menuOpen
                                ? "opacity-100 translate-y-0 visible fixed top-0 left-0 w-full bg-[#5B3767] p-4"
                                : "opacity-0 translate-y-[-100%] invisible"
                        }`}
                    >
                        <div className="flex items-center justify-between px-3">
                            <h1 className="text-3xl xs:text-4xl md:text-6xl text-[#CDC697] font-marcellus tracking-wide">
                                GUNA JASKO
                            </h1>
                            <div
                                className="text-3xl text-white cursor-pointer"
                                onClick={toggleMenu}
                            >
                                <FaTimes />
                            </div>
                        </div>
                        <div className="w-full max-w-screen-xl mx-auto px-4">
                            <div className="border-b-[1px] border-[#CDC697] mt-2"></div>
                        </div>
                        <Link
                            to="/"
                            className="p-1 block hover:text-[#CDC697] transition duration-300 ease-in-out"
                            onClick={() => setMenuOpen(false)}
                        >
                            SĀKUMS
                        </Link>
                        <Link
                            to="/par-mani"
                            className="p-1 block hover:text-[#CDC697] transition duration-300 ease-in-out"
                            onClick={() => setMenuOpen(false)}
                        >
                            PAR MANI
                        </Link>
                        <Link
                            to="/pakalpojumi"
                            className="p-1 block hover:text-[#CDC697] transition duration-300 ease-in-out"
                            onClick={() => setMenuOpen(false)}
                        >
                            PAKALPOJUMI
                        </Link>
                        <Link
                            to="/objekti"
                            className="p-1 block hover:text-[#CDC697] transition duration-300 ease-in-out"
                            onClick={() => setMenuOpen(false)}
                        >
                            OBJEKTI
                        </Link>
                        <Link
                            to="/kontakti"
                            className="p-1 block hover:text-[#CDC697] transition duration-300 ease-in-out"
                            onClick={() => setMenuOpen(false)}
                        >
                            KONTAKTI
                        </Link>
                        <Link
                            to="/"
                            className="p-1 block hover:text-[#CDC697] transition duration-300 ease-in-out"
                            onClick={() => setMenuOpen(false)}
                        >
                            LV
                        </Link>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default Header;
