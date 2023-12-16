import Image from 'next/image'
import Navbar from '../components/navbar'
import PageTitle from '../components/pageTitle'
import PageContent from '../components/pageContent'
import PageLogo from '../components/Logo'
import Footer from '../components/Footer'
import OurTable from '../components/OurTable'
import { findCards } from '../utils/supabase-client'

export default async function About() {
  return (
    <div>
      <PageLogo />
      <div className="my-4">
        <Navbar />
      </div>
      <div className="m-12">
        <PageTitle title="Products" />
        <div className="">
          <PageContent />
        </div>
      </div>
      <div className="absolute bottom-0">
        <Footer />
      </div>
    </div>
  )
}
