import Image from 'next/image'
import Navbar from '../components/navbar'
import PageTitle from '../components/pageTitle'
import PageContent from '../components/pageContent'
import CardForm from '../components/CardForm'
import PageLogo from '../components/Logo'

export default function About() {
  return (
    <div>
      <PageLogo />
      <Navbar />
      <div className="m-12">
        <PageTitle title="About" />
        <PageContent />
        <CardForm />
      </div>
    </div>
  )
}
