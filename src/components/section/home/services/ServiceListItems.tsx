import { dataService } from "./types"

const HomeServiceListItems = () => {
  return (
    <>
      {dataService?.map(service => (
        <div key={service.id} className="relative flex flex-col justify-between gap-6 p-5 border rounded-lg shadow-lg cursor-pointer group border-dev-black-gray/30">
          <h4 className="absolute px-2 py-px text-xs border rounded-full top-2 border-dev-black-gray/20 dark:text-white bg-dev-black-gray/10 text-dev-black-gray/50 right-2">{service.type}</h4>
            <figure className="mx-auto ">
                <img src={service.image} alt={service.title} className="w-full h-full" />
            </figure>
            <div>
                <h3 className="text-sm font-semibold">{service.title}</h3>
                <p className="text-xs text-dev-black-gray dark:text-white/70 group-hover:line-clamp-none line-clamp-2">{service.desc}</p>
            </div>
        </div>
      ))}
    </>
  )
}

export default HomeServiceListItems
