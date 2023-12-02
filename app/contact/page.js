import Image from 'next/image'
import Navbar from '../components/navbar'
import PageTitle from '../components/pageTitle'
import PageContent from '../components/pageContent'

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="Contact" />
        <PageContent />
      </div>
    </div>
  )
}
