export default function Label({ htmlFor, label }) {
  return (
    <label className="text-teal-700 text-xl" htmlFor={htmlFor}>
      {label}
    </label>
  )
}
