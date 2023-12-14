import { CodeBracketIcon } from '@heroicons/react/24/outline'

const menuItems = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
  {
    title: 'Services',
    href: '/services',
  },
  {
    title: 'Products',
    href: '/products',
  },
]

export default function Navbar() {
  return (
    <div className="flex items-center mx-auto justify-center">
      <div className="flex gap-4 items-start text-center">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="flex-auto w-24 px-4 py-2 ease-out duration-[1500ms] bg-gray-100 outline-2 shadow-md rounded-md hover:bg-gray-800 hover:text-teal-700 hover:outline hover:outline-2 hover:outline-white hover:ease-in hover:duration-200 active:font-bold active:ease-in active:duration-100 active:scale-[1.1]"
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  )
}
