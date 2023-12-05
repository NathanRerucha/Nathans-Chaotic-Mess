import Image from 'next/image'

export default function Card({
  img = 'http://placekitten.com/g/200/300',
  title = 'Fake Title',
  subtitle = 'Fake Subtitle',
  description = 'Fake Description',
  authors = 'Fake Authors',
}) {
  return (
    <div className="my-5 shadow-lg w-72 max-w-md p-2 rounded-[20px] overflow-hidden bg-white hover:scale-105 transition-all duration-200 active:bg-gray-300">
      <Image
        className="h-48 rounded w-half shadow-md m-auto"
        alt="meaningful text to make the scary warnings disappear"
        src={img}
      />
      <h1 className="font-bold text-xl mb-1">{title}</h1>
      <h2 className="text-gray-500 mb-4">{subtitle}</h2>
      <p className="p-1 mb-3 text-gray-900 text-base border border-solid rounded-lg border-slate-500">{description}</p>
      <span className="bg-gray-300 px-1 py-1 text-sm font-semibold text-gray-700 mr-2 mb-10">{authors}</span>
    </div>
  )
}
