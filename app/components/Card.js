export default function Card({ img, title, subtitle, description }) {
  return (
    <div className="flex flex-col shadow-lg max-w-[288px] h-[370px] p-2 rounded-[20px] overflow-hidden bg-white hover:scale-105 transition-all duration-200 active:bg-gray-300 active:scale-[102px]">
      <img className="h-48 rounded w-half shadow-md mx-auto" src={img} />
      <h1 className="font-bold text-xl mt-2 -mb-1">{title}</h1>
      <hr className="bg-black h-[2px] mr-auto w-3/4" />
      <h2 className="text-gray-500 mt-2 mb-4">{subtitle}</h2>
      <p className="p-1 my-auto text-gray-900 text-base overflow-y-scroll border border-solid rounded-lg border-slate-500">
        {description}
      </p>
    </div>
  )
}
