import { useEffect, useState } from "react"
import { CiMenuFries } from "react-icons/ci"
import { IoMdClose } from "react-icons/io"
import { motion } from "motion/react"
import { Link, scroller } from "react-scroll"
import { Router, Link as RouterLink, useLocation } from "react-router-dom"

const Header = () => {
    const { pathname } = useLocation()
    const [navOpen, setNavOpen] = useState(false)

    useEffect(() => {
        if (pathname === '/') {
            scroller.scrollTo("banner", {
                duration: 0,
                delay: 0,
                smooth: true
            });
            const activeLinks = document.querySelectorAll('.active');
            activeLinks.forEach(link => link.classList.remove('active'));
        }
    }, [pathname]);

    const navItems = (
        <>
            <li className="flex justify-between">
                {
                    pathname === '/' ? (
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
                    ) : (
                        <RouterLink
                            to="/"
                            className="cursor-pointer"
                        >
                            Home
                        </RouterLink>
                    )
                }
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
                    className={`cursor-pointer ${pathname !== '/' ? 'pointer-events-none' : 'pointer-events-auto'}`}
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
                    className={`cursor-pointer ${pathname !== '/' ? 'pointer-events-none' : 'pointer-events-auto'}`}
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
                    className={`cursor-pointer ${pathname !== '/' ? 'pointer-events-none' : 'pointer-events-auto'}`}
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
                    className={`cursor-pointer ${pathname !== '/' ? 'pointer-events-none' : 'pointer-events-auto'}`}
                >
                    Contact
                </Link>
            </li>
        </>
    )

    return (
        <header className="z-50 fixed left-0 right-0 bg-[#151515]/50 drop-shadow-sm">
            <div className="w-11/12 md:container lg:w-9/12 mx-auto flex justify-between items-center py-3 text-white">
                <RouterLink to='/'>
                    <img src="/images/logo.png" alt="" className="w-16 md:w-24" />
                </RouterLink>
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