import Image from 'next/image'
import Navbar from '../components/navbar'
import PageTitle from '../components/pageTitle'
import PageContent from '../components/pageContent'
import CardForm from '../components/CardForm'
import PageLogo from '../components/Logo'
import Footer from '../components/Footer'
import OurTable from '../components/OurTable'
import { findCards } from '../utils/supabase-client'

const cardTableColumns = [
  {
    title: 'Title',
    key: 'title',
  },
  {
    title: 'Subtitle',
    key: 'subtitle',
  },
  {
    title: 'Image',
    key: 'img',
  },
  {
    title: 'Description',
    key: 'description',
  },
]

export default async function About() {
  const cards = await findCards()
  return (
    <div className="relative">
      <PageLogo />
      <Navbar />
      <div className="m-12">
        <PageTitle title="About" />
        <PageContent />
        <CardForm />
        <div className="bg-white p-4 rounded-md">
          <OurTable columns={cardTableColumns} records={cards} />
        </div>
      </div>
      <div className="">
        <Footer authors="Nathan Rerucha" />
      </div>
    </div>
  )
}
