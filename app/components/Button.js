export default function Button({ children, onClick, type = 'button' }) {
  return (
    <button
      className="p-4 w-32 my-2 rounded-full outline outline-teal-700 bg-white text-black hover:text-teal-700 font-bold hover:bg-black"
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
