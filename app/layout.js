import { Inter } from 'next/font/google'
import './globals.css'
import '@radix-ui/themes/styles.css'
import { Theme, ThemePanel } from '@radix-ui/themes'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The Chaos Emporium',
  description: 'A collection of random things, dumb ideas, and bad humor.)',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Theme appearance="light" accentColor="sky" panelBackground="solid" scaling="105%">
        {' '}
        <body className={`${inter.className} bg-gradient-to-r from-black via-gray-800 to-teal-900`}>{children}</body>
        {/* <ThemePanel /> */}
      </Theme>
    </html>
  )
}
