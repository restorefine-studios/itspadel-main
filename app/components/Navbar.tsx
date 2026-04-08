"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	const toggleMenu = () => setIsOpen(!isOpen);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 80) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navItems = [
		{ name: "About", path: "/about" },
		{ name: "Coaching", path: "/coaching" },
		{ name: "Events", path: "/events" },
		{ name: "What is Padel", path: "/what-is-padel" },
		{ name: "Pro Shop", path: "/pro-shop" },
		{ name: "Clubs", path: "/clubs" },
	];

	// Theme values depending on scroll
	const containerBg = isScrolled ? "bg-[#0c0c0c]/85 border-white/10" : "bg-white/95 border-[#0c0c0c]/10";
	const textColor = isScrolled ? "text-gray-300" : "text-[#0c0c0c]";
	const logoClass = isScrolled ? "h-10 md:h-12 w-auto invert brightness-0" : "h-10 md:h-12 w-auto";
	const iconColor = isScrolled ? "text-white" : "text-[#0c0c0c]";
	const mobileBg = isScrolled ? "bg-[#0c0c0c]/95 border-white/10" : "bg-white/95 border-[#0c0c0c]/10";

	return (
		<nav className={`fixed top-0 left-1/2 -translate-x-1/2 w-[90%] sm:w-[85%] md:w-[90%] lg:w-[80%] xl:w-[70%] 2xl:w-[60%] z-50 backdrop-blur-xl ${containerBg} rounded-b-[2rem] md:rounded-b-[2.5rem] shadow-xl border-b border-l border-r border-t-0 flex flex-col transition-all duration-500`}>
			<div className="mx-auto w-full px-6 md:px-8 py-3 md:py-4 flex justify-between items-center z-10 transition-all duration-500">
				{/* Logo */}
				<Link href="/">
					<Image
						src="/itspadel-logo-main.svg"
						alt="Itspadel Logo"
						width={75}
						height={75}
						className={`${logoClass} transition-all duration-500`}
					/>
				</Link>

				{/* Desktop Menu */}
				<div className="hidden md:flex items-center space-x-6 lg:space-x-8">
					{navItems.map((item) => {
						const isHighlight = item.name === "Clubs";
						return (
							<Link
								key={item.path}
								href={item.path}
								className={`font-bison uppercase tracking-widest text-lg lg:text-xl transition-all duration-300 flex items-center justify-center ${
									isHighlight
										? "bg-[#009FF3] text-white px-6 py-1.5 hover:bg-[#0080cc]"
										: `${textColor} hover:text-[#009FF3]`
								}`}
								style={isHighlight ? { transform: "skewX(-15deg)" } : undefined}
							>
								{isHighlight ? (
									<span style={{ transform: "skewX(15deg)" }}>{item.name}</span>
								) : (
									item.name
								)}
							</Link>
						);
					})}
				</div>

				{/* Mobile Menu Button */}
				<button
					onClick={toggleMenu}
					className={`bg-transparent md:hidden ${iconColor} hover:text-[#009FF3] transition-colors duration-500`}>
					{isOpen ? (
						<XMarkIcon className="size-8" />
					) : (
						<Bars3Icon className="size-8" />
					)}
				</button>
			</div>

			{/* Mobile Menu */}
			<div
				className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out w-full rounded-b-[2rem] ${
					isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
				}`}>
				<div className={`${mobileBg} backdrop-blur-xl border-t px-8 py-6 transition-all duration-500`}>
					<div className="flex flex-col space-y-4">
						{navItems.map((item, index) => {
							const isHighlight = item.name === "Clubs";
							return (
								<Link
									key={item.path}
									href={item.path}
									className={`font-bison uppercase tracking-widest text-xl transition-all duration-300 flex w-fit ${
										isHighlight
											? "bg-[#009FF3] text-white px-6 py-2 mt-2 hover:bg-[#0080cc]"
											: `${textColor} hover:text-[#009FF3]`
									} ${
										isOpen
											? `mobile-menu-enter nav-item-stagger-${index}`
											: "opacity-0"
									}`}
									style={isHighlight ? { transform: "skewX(-10deg)" } : undefined}
									onClick={toggleMenu}>
									{isHighlight ? (
										<span style={{ transform: "skewX(10deg)" }}>{item.name}</span>
									) : (
										item.name
									)}
								</Link>
							);
						})}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
