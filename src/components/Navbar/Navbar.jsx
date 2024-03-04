
import { Link, NavLink } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa6";
import { LuMoveRight } from "react-icons/lu";
import { GrLanguage } from "react-icons/gr";
import { IoCloseCircleOutline, IoReorderThreeOutline } from "react-icons/io5";

import logo from '../../assets/images/svg.png';
import { useState } from 'react';


const NavItem = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative group xl:block hidden">
            {/* NavLink for the main item */}
            <NavLink
                to={item.path}
                className="lg:hover:bg-[#F1F3FD] lg:hover_transition px-3 py-2 rounded-md mx-1 flex items-center gap-2"
                onClick={() => setIsOpen(!isOpen)}
            >
                {item.label} {item.dropdownItems && <FaAngleDown className="text-sm mt-1" />}
            </NavLink>
            {/* Dropdown items */}
            {item.dropdownItems && isOpen && (
                <div className="w-52 absolute hidden mt-1 space-y-2 bg-white border rounded-md shadow-lg lg:group-hover:block">
                    {item.dropdownItems.map((dropdownItem, idx) => (
                        <Link
                            key={idx}
                            to={dropdownItem.path}
                            className="block px-4 py-2 text-gray-800 lg:hover:bg-gray-200"
                        >
                            {dropdownItem.label}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

// DynamicLink component for rendering dynamic links
const DynamicLink = ({ link }) => {
    return (
        <Link to={link.to} className={link.className}>
            {link.label}
        </Link>
    );
};

const Navbar = () => {
    const [toggle, setToggle] = useState(false);


    const navItems = [
        {
            path: '/product', label: 'Product', dropdownItems: [
                { path: '/product/item1', label: 'Product Item 1' },
                { path: '/product/item2', label: 'Product Item 2' },
                // Add more product dropdown items as needed
            ]
        },
        {
            path: '/solutions', label: 'Solutions', dropdownItems: [
                { path: '/solutions/item1', label: 'Solutions Item 1' },
                { path: '/solutions/item2', label: 'Solutions Item 2' },
                // Add more solutions dropdown items as needed
            ]
        },
        {
            path: '/resources', label: 'Resources', dropdownItems: [
                { path: '/resources/item1', label: 'Resources Item 1' },
                { path: '/resources/item2', label: 'Resources Item 2' },
                // Add more resources dropdown items as needed
            ]
        },
        { path: '/enterprise', label: 'Enterprise' },
        { path: '/pricing', label: 'Pricing' },
    ];

    const dynamicLinks = [
        { to: '/', label: <><GrLanguage className='text-2xl' /> EN</>, className: 'hover:bg-[#F1F3FD] hover_transition px-3 py-2 rounded-md mx-1 flex items-center gap-2' },
        { to: '/', label: 'Contact Sales', className: 'hover:bg-[#F1F3FD] hover_transition px-3 py-2 rounded-md mx-1 flex items-center gap-2' },
        { to: '/', label: 'Login', className: 'hover:bg-[#F1F3FD] hover_transition px-3 py-2 rounded-md mx-1 flex items-center gap-2' },
        { to: '/', label: <>Sign Up free <LuMoveRight /></>, className: 'flex items-center gap-2 bg-[#4262FF] hover:bg-[#F1F3FD] hover:text-[#4262FF] text-white px-8 py-3 rounded-full hover_transition' },
    ];

    return (
        <div className="">
            <div className="flex lg:flex-row flex-col items-center lg:justify-between justify-center container mx-auto py-3">
                <div className="flex lg:flex-row flex-col">
                    <div className="flex gap-2 ">
                        {/* Toggle button for mobile view */}
                        <button onClick={() => setToggle(!toggle)} className="lg:hidden block">
                            <IoReorderThreeOutline className="text-3xl" />
                        </button>
                        {/* Logo */}
                        <Link to={'/'}>
                            <img src={logo} className="mb-2 mr-5" alt="Logo" />
                        </Link>
                    </div>
                    {/* Navigation items for larger screens */}
                    <div className="hidden lg:flex lg:flex-row items-center gap-2">
                        {navItems.map((item, index) => (
                            <NavItem key={index} item={item} />
                        ))}
                    </div>
                </div>
                {/* Mobile menu */}
                {toggle && (
                    <div className="h-screen overflow-y-scroll lg:hidden fixed top-0 border inset-0 bg-white  z-50 px-5">
                        <div className="flex justify-end ">
                            <button onClick={() => setToggle(false)}>
                                <IoCloseCircleOutline className="text-3xl mt-5" />
                            </button>
                        </div>
                        <div className="flex flex-col ">
                            {/* Navigation items in mobile view */}
                            {navItems.map((item, index) => (
                                <div key={index} className="relative group">
                                    <NavLink
                                        to={item.path}
                                        className="hover:bg-[#F1F3FD] lg:hover_transition px-3 py-2 rounded-md mx-1 flex items-center gap-2"
                                        onClick={() => setToggle(false)} // Close menu on item click
                                    >
                                        {item.label} {item.dropdownItems && <FaAngleDown className="text-sm mt-1" />}
                                    </NavLink>
                                    {item.dropdownItems && (
                                        <div className="w-52 absolute hidden mt-1 space-y-2 bg-white border rounded-md shadow-lg lg:group-hover:block">
                                            {item.dropdownItems.map((dropdownItem, idx) => (
                                                <Link
                                                    key={idx}
                                                    to={dropdownItem.path}
                                                    className="block px-4 py-2 text-gray-800 lg:hover:bg-gray-200"
                                                    onClick={() => setToggle(false)} // Close menu on item click
                                                >
                                                    {dropdownItem.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            {/* Dynamic links in mobile view */}
                            <div className="flex flex-col gap-2 mt-24">
                                {dynamicLinks.map((link, index) => (
                                    <DynamicLink key={index} link={link} />
                                ))}
                            </div>
                        </div>
                    </div>
                )}
                {/* Desktop view dynamic links */}
                <div className="xl:block hidden">
                    <div className="flex lg:flex-row flex-col items-center gap-2">
                        {dynamicLinks.map((link, index) => (
                            <DynamicLink key={index} link={link} />
                        ))}
                    </div>
                </div>
            </div>
            <hr />
        </div>

    );
};

export default Navbar;
