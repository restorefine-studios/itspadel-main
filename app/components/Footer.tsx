import { Instagram, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="font-inter mt-24">
			{/* First Container */}
			<div className="px-8 md:px-16 lg:px-32 py-6 border-t border-b border-gray-200 animate-fade-in-0">
				<div className="max-w-7xl mx-auto flex justify-between items-center">
					<Image
						src="/itspadel-logo-alt.svg"
						alt="Itspadel Logo"
						width={100}
						height={100}
						className="h-16 object-contain"
					/>
					<div className="flex space-x-4">
						<a
							href="https://www.instagram.com/itspadeluk/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-600 hover:text-[#009FF3]">
							<Instagram className="w-6 h-6" />
						</a>
						<a
							href="https://www.tiktok.com/@itspadeluk?lang=en-GB"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-600 hover:text-[#009FF3]">
							<svg
								viewBox="0 0 28 28"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								className="w-7 h-7">
								<path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
							</svg>
						</a>
					</div>
				</div>
			</div>

			{/* Second Container */}
			<div className="px-8 md:px-16 lg:px-32 py-12 md:py-20 border-b border-gray-200 animate-fade-in-1">
				<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
					{/* Left Column */}
					<div className="lg:w-1/2">
						<p className="text-black/50 mb-6">
							Stay up to date with the latest news, tips and exclusive offers by
							joining our awesome newsletter.
						</p>
						<div className="relative">
							<input
								type="email"
								placeholder="example@gmail.com"
								className="w-full px-0 py-3 border-b border-gray-300 bg-transparent tracking-tighter text-sm md:text-base"
							/>
							<div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black/50">
								<ArrowRight className="w-5 h-5" />
							</div>
						</div>
					</div>

					{/* Right Column */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{/* Column 1 */}
						<div>
							<h3 className="font-semibold text-black tracking-tighter mb-4">
								SPORT
							</h3>
							<ul className="space-y-2 text-gray-600">
								<li>
									<a
										href="/clubs"
										className="hover:text-[#009FF3]">
										Locations
									</a>
								</li>
								<li>
									<a
										href="/events"
										className="hover:text-[#009FF3]">
										Events
									</a>
								</li>
								<li>
									<a
										href="/coaching"
										className="hover:text-[#009FF3]">
										Coaching
									</a>
								</li>
								<li>
									<a
										href="/clubs"
										className="hover:text-[#009FF3]">
										Clubs
									</a>
								</li>
							</ul>
						</div>

						{/* Column 2 */}
						<div>
							<h3 className="font-semibold text-black tracking-tighter mb-4">
								RESOURCES
							</h3>
							<ul className="space-y-2 text-gray-600">
								<li>
									<a
										href="#"
										className="hover:text-[#009FF3]">
										Padel News
									</a>
								</li>
								<li>
									<a
										href="#"
										className="hover:text-[#009FF3]">
										How to book
									</a>
								</li>
							</ul>
						</div>

						{/* Column 3 */}
						<div>
							<h3 className="font-semibold text-black tracking-tighter mb-4">
								ABOUT
							</h3>
							<ul className="space-y-2 text-gray-600">
								<li>
									<a
										href="/about"
										className="hover:text-[#009FF3]">
										About Us
									</a>
								</li>
								<li>
									<a
										href="#"
										className="hover:text-[#009FF3]">
										Privacy Policy
									</a>
								</li>
								<li>
									<a
										href="#"
										className="hover:text-[#009FF3]">
										T&C&apos;s
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			{/* Third Container */}
			<div className="px-8 md:px-16 lg:px-32 py-10 animate-fade-in-2">
				<div className="max-w-7xl mx-auto flex justify-between items-center">
					<Link
						href="https://restorefine.com"
						target="_blank"
						className="text-black/50 font-normal hover:text-[#009FF3] text-sm tracking-tighter">
						{" "}
						Designed and built by RestoRefine Studio
					</Link>

					<p className="text-gray-600 text-sm">
						All Rights Reserved. Copyright {currentYear}
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
