import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The Chaos Emporium',
  description: 'A collection of random things, dumb ideas, and bad humor.)',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-r from-black via-gray-800 to-teal-900`}>{children}</body>
    </html>
  )
}
