import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import type { PreLoginNavItem, PreLoginHeaderProps } from '@/types/header';

const navItems: PreLoginNavItem[] = [
    { label: 'Features', href: '/features', hasDropdown: true },
    { label: 'Solutions', href: '/solutions', hasDropdown: true },
    { label: 'Resources', href: '/resources', hasDropdown: true },
    { label: 'Tools', href: '/tools', hasDropdown: true },
    { label: 'Pricing', href: '/pricing' }
];

const PreLoginHeader: React.FC<PreLoginHeaderProps> = ({ className = '' }) => {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleDropdownToggle = (label: string) => {
        setOpenDropdown(openDropdown === label ? null : label);
    };

    return (
        <header
            className={`
                fixed top-0 left-0 right-0 z-50 h-24
                bg-black border-b border-gray-600
                ${className}
            `}
        >
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 h-full">
                <div className="flex items-center justify-between h-full">
                    {/* Logo */}
                    <div className="flex justify-center items-center">
                        <NavLink to="/" className="text-2xl lg:text-3xl font-bold font-heading leading-tight text-gradient-primary">
                            VIREACT
                        </NavLink>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-10 font-heading">
                        {navItems.map((item) => (
                            <div key={item.label} className="relative">
                                {item.hasDropdown ? (
                                    <button
                                        onClick={() => handleDropdownToggle(item.label)}
                                        className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200 font-heading"
                                    >
                                        <span className="text-base xl:text-lg font-normal leading-relaxed">
                                            {item.label}
                                        </span>
                                        <div className="w-3 h-3 flex items-center justify-center">
                                            <FaChevronDown
                                                className={`w-3 h-3 transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''
                                                    }`}
                                            />
                                        </div>
                                    </button>
                                ) : (
                                    <NavLink
                                        to={item.href}
                                        className="text-base xl:text-lg font-normal leading-relaxed text-gray-300 hover:text-white transition-colors duration-200 font-heading"
                                    >
                                        {item.label}
                                    </NavLink>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Desktop Buttons */}
                    <div className="hidden lg:flex items-center gap-3 xl:gap-4">
                        <NavLink
                            to="/login"
                            className="btn-outline"
                        >
                            Log in
                        </NavLink>
                        <NavLink
                            to="/signup"
                            className="btn-primary"
                        >
                            Sign up - It's FREE
                        </NavLink>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center lg:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-200"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMobileMenuOpen ? (
                                <FaTimes className="block h-6 w-6" />
                            ) : (
                                <FaBars className="block h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden absolute top-full left-0 right-0 bg-black bg-opacity-95 backdrop-blur-sm border-t border-gray-600 rounded-b-lg">
                        <div className="px-4 py-6 space-y-4 ">
                            {navItems.map((item) => (
                                <div 
                                className='font-heading'
                                key={item.label}>
                                    {item.hasDropdown ? (
                                        <button
                                            onClick={() => handleDropdownToggle(item.label)}
                                            className="flex items-center justify-between w-full text-gray-300 hover:text-white transition-colors duration-200 py-2"
                                        >
                                            <span className="text-lg font-normal ">
                                                {item.label}
                                            </span>
                                            <FaChevronDown
                                                className={`w-3 h-3 transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''
                                                    }`}
                                            />
                                        </button>
                                    ) : (
                                        <NavLink
                                            to={item.href}
                                            className="block text-lg font-normal text-gray-300 hover:text-white transition-colors duration-200 py-2"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {item.label}
                                        </NavLink>
                                    )}
                                </div>
                            ))}

                            {/* Mobile Buttons */}
                            <div className="flex flex-col gap-3 pt-4 border-t border-gray-600">
                                <NavLink
                                    to="/login"
                                    className="btn-outline"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Log in
                                </NavLink>
                                <NavLink
                                    to="/signup"
                                    className="btn-primary"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Signup - It's FREE
                                </NavLink>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default PreLoginHeader;
