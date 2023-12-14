import Image from 'next/image'
import Navbar from '../components/navbar'
import PageTitle from '../components/pageTitle'
import PageContent from '../components/pageContent'
import PageLogo from '../components/Logo'

export default function About() {
  return (
    <div>
      <PageLogo />
      <Navbar />
      <div className="m-12">
        <PageTitle title="Services" />
        <PageContent content="aaahhhhhhhhhhhhHHHHHHHHHHHHHHHHhhhHHHHHHhhhHHHhHHHHHHHHHHHHHHhHHhHHhhhhhhHHHHHHhhhHHHHhhHHHHhhhHHHhHHHhHHhhHHHHHHHHHHhhhHHHHHHHHHhhHHHHHHhhHHHhhhHHHHHHhhhHHHHHhhHHHHHhhHHHHHHHHhhHHHHHHHHHhhhHHHHHHHhhHHHHHHHHHhhHHHHHHHHHhhHHHHHHHhHHHhHHHHHHHhhHHHHhhHHHhhHHHHHHHhhHHHHhHHhhHHhhHHhHHHHHHhhHHHHHhHHHHhhhhHHHHHHhhhhHHHHHHHHhhhhhhhhhHHHHHHHhhhhhhHHHHHhhhHHHHHhhhhhhhhhhhhhhhhhhhhhhhHHHHHHHHHHHHHHHHHHHHHHHHHhhhHHHhhHHhhhhhHHHhhhhhhHHHHHHHhhHHHhHHHhhHHhhhHHHHHHHHHhhhHHHHhhHHHhhHHHHHHhhHHHHHhhHHHHhhhhhhhHHHHHHHHhhHHhhHHhhHHhhhhhhhhHHHHHHHHhhhhhhhhhhhhhhHHHHHHHHHHHhhhhhHHHhhhhhHHhhhhhhhhhHHHHHHHHHHHhhhhhhhhhhhhhHHHHHHHHHhhhhhhhhHHHhhhhhHHHhhhhhhhhhHHHHHHHHHHHHhhhhhhhhhhHHHHHHHHHHHHhhhhhhHHHhhhhhhHHHHhhhhhhHHHHHHHHHHHHhhhhhhhhhhHHHHHHHHHHHHhhhhhhhhHHHhhhhhHHHhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhHHHHHHHHHHHHHhhhhhhhHHhhhhhhhhhhhhhhhhhhhhhhhhhhHHHhhHHhhhhhhHHhhhhhhhhhhhhhhHHhHHhhHHhHHhhhhhHHhhhhhHhhHHhhhhHHhhhhhhhhhHHhhhhhhhh" />
      </div>
    </div>
  )
}
