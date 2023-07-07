// import { Link } from "react-router-dom";
import {
    FaInstagram,
    FaTwitter,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaRegEnvelope,
    FaEnvelope,
    FaGithub,
    FaLinkedinIn,
    FaFacebookF,
} from "react-icons/fa";
import Logo from "../../Components/Logo";

const Footer = () => {
    return (
        <div className="bg-[#333] text-white overflow-hidden">
            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-10 py-10 border-b-2 border_gradient jm_container">
                <div className="xl:col-span-2">
                    <div className="w-fit">
                        <Logo></Logo>
                    </div>
                    <p className="my-5">
                        Edwin Diaz is a software and web technologies engineer,
                        a life coach trainer who is also a serial .
                    </p>
                    <ul className="flex flex-wrap gap-10 mt-5">
                        <li className="p-3 border rounded-full ">
                            <a
                                target="_blank"
                                href="https://web.facebook.com/jm.jubaerm"
                                rel="noreferrer"
                            >
                                <FaFacebookF className="text-lg text-[#0C83E9]" />
                            </a>
                        </li>
                        <li className="p-3 border rounded-full ">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.linkedin.com/in/jmjubaer/"
                            >
                                <FaLinkedinIn className="text-lg text-[#0077B5]" />
                            </a>
                        </li>
                        <li className="p-3 border rounded-full ">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://github.com/jmjubaer"
                            >
                                <FaGithub className="text-lg text-[#000]" />
                            </a>
                        </li>
                        <li className="p-3 border rounded-full ">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://twitter.com/MDJUBAERM"
                            >
                                <FaTwitter className="text-lg text-[#1DA1F2]" />
                            </a>
                        </li>
                        <li className="p-3 border rounded-full ">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.instagram.com/jmjubaer16247/"
                            >
                                <FaInstagram className="text-lg text-[#B62EB1]" />
                            </a>
                        </li>
                        <li className="p-3 border rounded-full ">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.instagram.com/jmjubaer16247/"
                            >
                                <FaEnvelope className="text-lg text-[#BF211E]" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="">
                    <h2 className="text-2xl font-bold mb-4">Contact Info</h2>
                    <div className="flex gap-3 items-center">
                        <div className="p-3 rounded-full bg_gradient w-fit">
                            <FaMapMarkerAlt className="text-2xl text-white" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">Location:</h3>
                            <p>Khulna, Bangladesh</p>
                        </div>
                    </div>
                    <div className="flex gap-3 mt-3 items-center">
                        <div className="p-3 rounded-full bg_gradient w-fit">
                            <FaPhoneAlt className="text-2xl text-white" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">Phone:</h3>
                            <p>(+880) 1316467454</p>
                        </div>
                    </div>
                    <div className="flex gap-3 mt-3 items-center">
                        <div className="p-3 rounded-full bg_gradient w-fit">
                            <FaRegEnvelope className="text-2xl text-white" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">Email:</h3>
                            <p>jmjubaer3927@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
                    <ul>
                        <li>
                            {/* <Link
                                to="/"
                                className="hover:text-[#1C99FE] block my-2"
                            >
                                Home
                            </Link> */}
                            <a className="hover:text-[#1C99FE] block my-2" href="#">Home</a>
                        </li>
                        <li>
                            {/* <Link
                                to="/allToys"
                                className="hover:text-[#1C99FE] block my-2"
                            >
                                {" "}
                                Aboute Me
                            </Link> */}
                            <a className="hover:text-[#1C99FE] block my-2" href="#about">About Me</a>
                        </li>
                        <li>
                            {/* <Link
                                to="/myToy"
                                className="hover:text-[#1C99FE] block my-2"
                            >
                                {" "}
                                Services
                            </Link> */}
                            <a className="hover:text-[#1C99FE] block my-2" href="#service">Services</a>
                        </li>
                        <li>
                            {/* <Link
                                to="/addToys"
                                className="hover:text-[#1C99FE] block my-2"
                            >
                                Project
                            </Link> */}
                            <a className="hover:text-[#1C99FE] block my-2" href="#project">Projects</a>
                        </li>
                    </ul>
                </div>
            </div>
            <p className="text-center my-5">
                © 2023. JM Jubaer . All rights reserved.{" "}
            </p>
        </div>
    );
};

export default Footer;
