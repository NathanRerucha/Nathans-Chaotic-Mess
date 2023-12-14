'use client'
import Navbar from './navbar'

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
function FooterNavbar() {
  return (
    <div>
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

export default function Footer({ logo = './icon.png', authors = 'Nathan Rerucha' }) {
  return (
    <div className="flex bottom-0 w-screen justify-center flex-row bg-black px-4 outline outline-white items-center">
      <div className="flex-1 ">
        <a href="./">
          <img
            className="my-1 h-10 w-10 rounded-full bg-white transition-all active:bg-gray-700 hover:bg-teal-700 hover:outline hover:outline-white"
            src={logo}
          />
        </a>
      </div>

      <div className="flex-1">
        <FooterNavbar />
      </div>

      <div className="invisible flex-1">
        <a href="./about">
          <p className="text-teal-700 text-lg font-bold ml-auto">{authors}</p>
        </a>
      </div>
    </div>
  )
}
