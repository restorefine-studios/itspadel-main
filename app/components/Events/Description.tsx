import eventsData from '../../../languages/padelevents.json'

const Description = () => {
  return (
    <section className="py-12 md:py-20 px-8 md:px-16 lg:px-32 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <div>
          <p className="font-inter text-sm md:text-base text-black/50 max-w-4xl mx-auto">
            {eventsData.description.paragraph}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Description