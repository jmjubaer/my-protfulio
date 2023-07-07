import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import Logo from "../../Components/Logo";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="fixed z-50 bg-white top-0 left-0 w-full jm_container">
            <nav className="flex justify-between items-center jm_container py-3">
                <Logo />
                <div className={`fixed lg:static bg-white h-screen lg:h-auto lg:w-auto top-0 left-0 ${open ? "w-4/5" : "w-0 overflow-hidden"} transition-all ease-linear duration-500`}>
                    <ul className={`flex flex-col m-10 lg:m-0 lg:flex-row gap-4 text-lg`}>
                        <li>
                            <NavLink
                                to={"#home"}
                                className={({ isActive }) =>
                                    isActive ? "gradient_text" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            {/* <NavLink to={"#about"} className={({isActive}) => isActive ? "gradient_text" : ""}>About me</NavLink> */}
                            <a href="#about">About Me</a>
                        </li>
                        <li>
                            {/* <NavLink to={"service"} className={({isActive}) => isActive ? "gradient_text" : ""}>Service</NavLink> */}
                            <a href="#service">Services</a>
                        </li>
                        <li>
                            {/* <NavLink to={"project"} className={({isActive}) => isActive ? "gradient_text" : ""}>Project</NavLink> */}
                            <a href="#project">Projects</a>
                        </li>
                        <li>
                            {/* <NavLink to={"contact"} className={({isActive}) => isActive ? "gradient_text" : ""}>Contact Me</NavLink> */}
                            <a href="#contact">Contact Me</a>
                        </li>
                    </ul>
                </div>
                <button
                    onClick={() => setOpen(!open)}
                    className="block lg:hidden"
                >
                    {open ? <FaTimes className="text-5xl"/> : <FaBars className="text-5xl"/>}
                </button>
            </nav>
        </div>
    );
};

export default Navbar;
