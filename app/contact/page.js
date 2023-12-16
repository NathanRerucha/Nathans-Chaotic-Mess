import Image from 'next/image'
import Navbar from '../components/navbar'
import PageTitle from '../components/pageTitle'
import PageContent from '../components/pageContent'
import PageLogo from '../components/Logo'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div>
      <PageLogo />
      <Navbar />
      <div className="m-12">
        <PageTitle title="Contact" />
        <PageContent />
      </div>
      <div className="absolute bottom-0">
        <Footer authors="Nathan Rerucha" />
      </div>
    </div>
  )
}
