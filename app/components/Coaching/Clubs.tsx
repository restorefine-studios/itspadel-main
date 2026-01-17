import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

const Clubs = () => {
	return (
		<section className="py-12 md:py-20 px-8 md:px-16 lg:px-32 bg-gray-50">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-12">
					<h2 className="font-bison text-4xl md:text-6xl mb-4">Our Clubs</h2>
					<p className="font-inter text-sm md:text-base text-gray-600">
						Choose your location for coaching
					</p>
				</div>

				<div className="grid grid-cols-1 gap-8">
					<Link
						href="https://playtomic.com/clubs/its-padel"
						target="_blank"
						className="w-full md:w-1/3 flex-shrink-0 px-2">
						<div className="relative rounded-2xl overflow-hidden cursor-pointer h-96">
							<Image
								src="/locations/itspadel-mock-location-lightwater.webp"
								alt={"its-padel-eastkilbride"}
								width={400}
								height={450}
								className="w-full h-full object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
							<div className="absolute bottom-6 left-6 text-white">
								<h3 className="font-bison text-2xl md:text-3xl mb-1">
									East Kilbride
								</h3>
								<p className="flex items-center font-inter text-sm md:text-base text-white">
									View Club{" "}
									<ChevronRightIcon className="w-4 h-4 md:w-5 md:h-5 ml-2" />
								</p>
							</div>
						</div>
					</Link>
					{/* <div
            className="bg-white rounded-2xl p-8 shadow-lg text-center"
          >
            <h3 className="font-bison text-2xl mb-4">Manchester</h3>
            <Link
              href="/padel-coaching-manchester"
              className="bg-[#009FF3] text-white px-6 py-3 font-inter font-medium hover:bg-[#0080cc] transition-colors uppercase"
            >
              View Coaching
            </Link>
          </div>
          <div
            className="bg-white rounded-2xl p-8 shadow-lg text-center"
          >
            <h3 className="font-bison text-2xl mb-4">Darlington</h3>
            <Link
              href="/padel-coaching-darlington"
              className="bg-[#009FF3] text-white px-6 py-3 font-inter font-medium hover:bg-[#0080cc] transition-colors uppercase"
            >
              View Coaching
            </Link>
          </div>
          <div
            className="bg-white rounded-2xl p-8 shadow-lg text-center"
          >
            <h3 className="font-bison text-2xl mb-4">Stockport</h3>
            <Link
              href="/padel-coaching-stockport"
              className="bg-[#009FF3] text-white px-6 py-3 font-inter font-medium hover:bg-[#0080cc] transition-colors uppercase"
            >
              View Coaching
            </Link>
          </div>
          <div
            className="bg-white rounded-2xl p-8 shadow-lg text-center"
          >
            <h3 className="font-bison text-2xl mb-4">Nottingham</h3>
            <Link
              href="/padel-coaching-nottingham"
              className="bg-[#009FF3] text-white px-6 py-3 font-inter font-medium hover:bg-[#0080cc] transition-colors uppercase"
            >
              View Coaching
            </Link>
          </div> */}
				</div>
			</div>
		</section>
	);
};

export default Clubs;
