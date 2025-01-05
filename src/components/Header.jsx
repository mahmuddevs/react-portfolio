import { useState } from "react"
import { CiMenuFries } from "react-icons/ci"
import { IoMdClose } from "react-icons/io"
import { motion } from "motion/react"
import { Link } from "react-scroll"
import { Link as RouterLink } from "react-router-dom"

const Header = () => {
    const [navOpen, setNavOpen] = useState(false)
    const navItems = (
        <>
            <li className="flex justify-between">
                <Link
                    to="banner"
                    smooth={true}
                    duration={500}
                    spy={true}
                    activeClass="active"
                    className="cursor-pointer"
                >
                    Home
                </Link>
                <IoMdClose
                    onClick={() => setNavOpen(false)}
                    className="block lg:hidden cursor-pointer text-xl"
                />
            </li>
            <li>
                <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    spy={true}
                    activeClass="active"
                    className="cursor-pointer"
                >
                    About
                </Link>
            </li>
            <li>
                <Link
                    to="skills"
                    smooth={true}
                    duration={500}
                    spy={true}
                    activeClass="active"
                    className="cursor-pointer"
                >
                    Skills
                </Link>
            </li>
            <li>
                <Link
                    to="projects"
                    smooth={true}
                    duration={500}
                    spy={true}
                    activeClass="active"
                    className="cursor-pointer"
                >
                    Projects
                </Link>
            </li>
            <li>
                <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    spy={true}
                    activeClass="active"
                    className="cursor-pointer"
                >
                    Contact
                </Link>
            </li>
        </>
    )
    return (
        <header className="z-50 fixed left-0 right-0 bg-[#151515]/50 drop-shadow-sm">
            <div className="w-11/12 md:container lg:w-9/12 mx-auto flex justify-between items-center py-3 text-white">
                <Link to='/'>
                    <h4 className="font-black md:text-2xl">Mahmud</h4>
                </Link>
                <nav className="nav">
                    <motion.ul className={`uppercase flex flex-col lg:flex-row lg:items-center gap-6 font-extrabols fixed lg:static top-0  w-56 h-screen lg:h-auto lg:w-auto p-8 md:p-4 bg-[#151515]/90 lg:bg-transparent text-sm font-medium`}
                        initial={{ right: '-14rem' }}
                        animate={{ right: navOpen ? '0' : '-14rem' }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    >
                        {navItems}
                        <a href="/cv-prototype.pdf" download="cv-prototype.pdf" className="color-accent py-3 px-2 md:px-5 rounded-md hover:bg-[#9615db]/60">Download Resume</a>
                    </motion.ul>
                    <div>
                        <CiMenuFries onClick={() => { setNavOpen(true) }} className="block lg:hidden cursor-pointer text-xl" />
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header