import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

const Regions = () => {
	const regions = [
		{
			name: "Glasgow",
			clubs: [
				{
					name: "East Kilbride",
					courts: "7 Stroud Road, Colvilles Road",
					link: "https://playtomic.com/clubs/its-padel",
				},
				// {
				// 	name: "Manchester",
				// 	courts: "6 indoor courts",
				// 	link: "/pure-padel-manchester",
				// },
				// {
				// 	name: "Stockport",
				// 	courts: "5 indoor courts",
				// 	link: "/padel-stockport",
				// },
			],
		},
		// {
		//   "name": "Midlands",
		//   "clubs": [
		//     {
		//       "name": "Nottingham",
		//       "courts": "7 indoor courts",
		//       "link": "/padel-nottingham"
		//     },
		//     {
		//       "name": "Solihull",
		//       "courts": "4 covered courts",
		//       "status": "Coming soon",
		//       "link": "/padel-solihull"
		//     },
		//     {
		//       "name": "Birmingham",
		//       "courts": "7 indoor courts",
		//       "status": "Coming soon",
		//       "link": "/padel-birmingham"
		//     }
		//   ]
		// },
		// {
		//   "name": "Yorkshire",
		//   "clubs": [
		//     {
		//       "name": "North Leeds",
		//       "courts": "4 outdoor courts",
		//       "link": "/padel-north-leeds"
		//     },
		//     {
		//       "name": "York",
		//       "courts": "5 covered courts",
		//       "status": "Coming soon",
		//       "link": "/padel-york"
		//     }
		//   ]
		// },
		// {
		//   "name": "North East",
		//   "clubs": [
		//     {
		//       "name": "Darlington",
		//       "courts": "7 indoor courts",
		//       "link": "/padel-darlington"
		//     },
		//     {
		//       "name": "Gosforth",
		//       "courts": "10 indoor courts",
		//       "status": "Coming soon",
		//       "link": "/padel-gosforth"
		//     }
		//   ]
		// },
		// {
		//   "name": "South West",
		//   "clubs": [
		//     {
		//       "name": "Lightwater",
		//       "courts": "6 covered courts",
		//       "status": "Coming soon",
		//       "link": "/padel-lightwater"
		//     }
		//   ]
		// },
		// {
		//   "name": "Scotland",
		//   "clubs": [
		//     {
		//       "name": "Glasgow",
		//       "courts": "11 indoor courts",
		//       "status": "Coming soon",
		//       "link": "/padel-glasgow"
		//     }
		//   ]
		// }
	];

	return (
		<section className="py-12 md:py-20 px-8 md:px-16 lg:px-32">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-12">
					<h2 className="font-bison text-4xl md:text-6xl mb-4">
						Find Your Club
					</h2>
				</div>

				<div>
					{regions.map((region, index) => (
						<div key={index}>
							{region.clubs.map((club, clubIndex) => (
								<Link
									href={club.link}
									target="_blank"
									key={`${index}-${clubIndex}`}
									className="w-full md:w-1/3 flex-shrink-0 px-2">
									<div className="relative rounded-2xl overflow-hidden cursor-pointer h-96">
										<Image
											src="/locations/itspadel-mock-location-lightwater.webp"
											alt={club.name}
											width={400}
											height={450}
											className="w-full h-full object-cover"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
										<div className="absolute bottom-6 left-6 text-white">
											<h3 className="font-bison text-2xl md:text-3xl mb-1">
												{club.name}
											</h3>
											<p className="flex items-center font-inter text-sm md:text-base text-white">
												View Club{" "}
												<ChevronRightIcon className="w-4 h-4 md:w-5 md:h-5 ml-2" />
											</p>
										</div>
									</div>
								</Link>
							))}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Regions;
