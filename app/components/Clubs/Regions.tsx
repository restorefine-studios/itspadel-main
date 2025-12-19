import Link from 'next/link'

const Regions = () => {
  const regions = [
    {
      "name": "North West",
      "clubs": [
        {
          "name": "Alderley Park",
          "courts": "3 outdoor courts",
          "link": "/pure-padel-alderley-park"
        },
        {
          "name": "Manchester",
          "courts": "6 indoor courts",
          "link": "/pure-padel-manchester"
        },
        {
          "name": "Stockport",
          "courts": "5 indoor courts",
          "link": "/padel-stockport"
        }
      ]
    },
    {
      "name": "Midlands",
      "clubs": [
        {
          "name": "Nottingham",
          "courts": "7 indoor courts",
          "link": "/padel-nottingham"
        },
        {
          "name": "Solihull",
          "courts": "4 covered courts",
          "status": "Coming soon",
          "link": "/padel-solihull"
        },
        {
          "name": "Birmingham",
          "courts": "7 indoor courts",
          "status": "Coming soon",
          "link": "/padel-birmingham"
        }
      ]
    },
    {
      "name": "Yorkshire",
      "clubs": [
        {
          "name": "North Leeds",
          "courts": "4 outdoor courts",
          "link": "/padel-north-leeds"
        },
        {
          "name": "York",
          "courts": "5 covered courts",
          "status": "Coming soon",
          "link": "/padel-york"
        }
      ]
    },
    {
      "name": "North East",
      "clubs": [
        {
          "name": "Darlington",
          "courts": "7 indoor courts",
          "link": "/padel-darlington"
        },
        {
          "name": "Gosforth",
          "courts": "10 indoor courts",
          "status": "Coming soon",
          "link": "/padel-gosforth"
        }
      ]
    },
    {
      "name": "South West",
      "clubs": [
        {
          "name": "Lightwater",
          "courts": "6 covered courts",
          "status": "Coming soon",
          "link": "/padel-lightwater"
        }
      ]
    },
    {
      "name": "Scotland",
      "clubs": [
        {
          "name": "Glasgow",
          "courts": "11 indoor courts",
          "status": "Coming soon",
          "link": "/padel-glasgow"
        }
      ]
    }
  ]

  return (
    <section className="py-12 md:py-20 px-8 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-bison text-4xl md:text-6xl mb-4">Find Your Club</h2>
        </div>

        <div>
          {regions.map((region: {name: string, clubs: {name: string, courts: string, link: string, status?: string}[]}, index: number) => (
            <div
              key={index}
              className="mb-16"
            >
              <h3 className="font-bison text-3xl mb-8 text-center">{region.name}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {region.clubs.map((club: {name: string, courts: string, link: string, status?: string}, clubIndex: number) => (
                  <div
                    key={clubIndex}
                    className="bg-white rounded-2xl p-6 shadow-lg"
                  >
                    <h4 className="font-bison text-xl mb-2">{club.name}</h4>
                    <p className="font-inter text-gray-600 mb-4">{club.courts}</p>
                    {club.status && (
                      <p className="font-inter text-[#009FF3] font-medium mb-4">{club.status}</p>
                    )}
                    <Link
                      href={club.link}
                      className="bg-[#009FF3] text-white px-6 py-3 font-inter font-medium hover:bg-[#0080cc] transition-colors uppercase"
                    >
                      View Club
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Regions