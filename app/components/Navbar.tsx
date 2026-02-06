"use client";

import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => setIsOpen(!isOpen);

	const navItems = [
		{ name: "About", path: "/about" },
		{ name: "Coaching", path: "/coaching" },
		{ name: "Events", path: "/events" },
		{ name: "What is Padel", path: "/what-is-padel" },
		{ name: "Clubs", path: "/clubs" },
	];

	return (
		<nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-white/20">
			<div className="container mx-auto px-8 md:px-4 py-6 flex justify-between items-center">
				{/* Logo */}
				<Link href="/">
					<Image
						src="/itspadel-logo-main.svg"
						alt="Itspadel Logo"
						width={75}
						height={75}
						className="h-14"
					/>
				</Link>

				{/* Desktop Menu */}
				<div className="hidden md:flex items-center space-x-8">
					{navItems.map((item) => (
						<Link
							key={item.path}
							href={item.path}
							className={` ${item.name === "Clubs" ? "bg-[#009FF3] px-3 py-1 text-white" : "text-white mix-blend-difference"} font-inter tracking-tight hover:text-blue-600 transition-all duration-700 ease-linear cursor-pointer`}>
							{item.name}
						</Link>
					))}
				</div>

				{/* Mobile Menu Button */}
				<button
					onClick={toggleMenu}
					className="bg-transparent md:hidden mix-blend-difference">
					{isOpen ? (
						<XMarkIcon className="size-8 text-white" />
					) : (
						<Bars3Icon className="size-8 text-white" />
					)}
				</button>
			</div>

			{/* Mobile Menu */}
			<div
				className={`md:hidden overflow-hidden transition-all duration-700 ease-in-out ${
					isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
				}`}>
				<div className="bg-black/70 backdrop-blur-md">
					<div className="px-8 py-5">
						{navItems.map((item, index) => (
							<Link
								key={item.path}
								href={item.path}
								className={`font-inter h-full tracking-tight hover:text-blue-600 mix-blend-difference block ${
									isOpen
										? `mobile-menu-enter nav-item-stagger-${index}`
										: "opacity-0"
								}`}
								onClick={toggleMenu}>
								<div className="flex flex-col items-start gap-y-0 py-2 text-white">
									{item.name}
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
