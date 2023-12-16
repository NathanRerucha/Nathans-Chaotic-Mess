import Image from 'next/image'
import Navbar from '../components/navbar'
import PageTitle from '../components/pageTitle'
import PageContent from '../components/pageContent'
import PageLogo from '../components/Logo'
import Footer from '../components/Footer'
import OurTable from '../components/OurTable'
import { findCards } from '../utils/supabase-client'

export default async function About() {
  const cards = await findCards()
  return (
    <div>
      <PageLogo />
      <Navbar />
      <div className="m-12">
        <PageTitle title="Products" />
        <PageContent />
      </div>
      <div className="absolute bottom-0">{/* <Footer authors="Nathan Rerucha" /> */}</div>
    </div>
  )
}
