export default function Card({ img, title, subtitle, description }) {
  return (
    <div className="flex flex-col my-5 justify-start shadow-lg w-72 max-w-md h-fit p-2 rounded-[20px] overflow-hidden bg-white hover:scale-105 transition-all duration-200 active:bg-gray-300">
      <img className="h-48 rounded w-half shadow-md mx-auto" src={img} />
      <h1 className="font-bold text-xl mb-1">{title}</h1>
      <h2 className="text-gray-500 mb-4">{subtitle}</h2>
      <p className="p-1 mb-1 text-gray-900 text-base border border-solid rounded-lg border-slate-500">{description}</p>
    </div>
  )
}
