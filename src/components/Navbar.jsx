import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu } from 'react-icons/fi'; // Import ikon burger dari react-icons

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false); // State untuk mengontrol dropdown

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
                setMenuOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const awal = "z-[100] fixed w-[100vw] py-[1.2%] px-[12%] font-primary font-semibold text-putih flex justify-between items-center bg-main drop-shadow-lg"
    const setelahScroll = "z-[100] fixed top-[2%] left-1/2 transform -translate-x-1/2 w-[75%] rounded-[15px] font-primary font-semibold py-[1.2%] px-[2%] text-putih flex justify-between items-center bg-main drop-shadow-md border border-abusecond";

    return (
        <motion.div
            className={scrolled ? setelahScroll : awal}
            animate={{
                // paddingTop: scrolled ? '1.2%' : '1.2%',
                // paddingBottom: scrolled ? '1.2%' : '1.2%',
                // paddingRight: scrolled ? '2%' : '12%',
                // paddingLeft: scrolled ? '2%' : '12%',
                // borderRadius: scrolled ? '15px' : '0px',
                // width: scrolled ? '75%' : '100%',
                // top: scrolled ? '2%' : '0%',
                // left: scrolled ? '50%' : '0%',
                // transform: scrolled ? 'translateX(-50%)' : 'none',
            }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
        >
            <h1 className='cursor-pointer' path="/" >BintangAji</h1>
            <ul className="flex gap-[2em]">
                {scrolled ? (
                    <li>
                        <FiMenu size={24} onClick={() => setMenuOpen(!menuOpen)} className="cursor-pointer" /> {/* Toggle dropdown */}
                        {menuOpen && (
                            <motion.ul
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="absolute mt-2 w-[120px] bg-white text-black rounded-lg shadow-lg"
                            >
                                <li className="px-4 py-2 hover:bg-gray-200 rounded-t-lg"><a href="/">Home</a></li>
                                <li className="px-4 py-2 hover:bg-gray-200"><a href="/about">About</a></li>
                                <li className="px-4 py-2 hover:bg-gray-200 rounded-b-lg"><a href="/project">Project</a></li>
                            </motion.ul>
                        )}
                    </li>
                ) : (
                    <>
                        <li><a id='home' href="/">Home</a></li>
                        <li><a id='about' href="/about">About</a></li>
                        <li><a id='project' href="project">Project</a></li>
                    </>
                )}
            </ul>
        </motion.div>
    );
}

export default Navbar;
