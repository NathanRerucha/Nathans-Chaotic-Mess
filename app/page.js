import Navbar from './components/navbar'
import PageTitle from './components/pageTitle'
import PageContent from './components/pageContent'
import Card from './components/Card'
import PageLogo from './components/Logo'

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="Home" />
        <PageContent />
        <div className="flex justify-center gap-10 flex-wrap ">
          <Card title="First card" subtitle="card 1" description="this is a description of a card" authors="me" />
          <Card title="Second card" subtitle="card 2" description="this is a really cute cat" authors="me" />
          <Card title="Third card" subtitle="card 3" description="javascript is neat" authors="me" />
        </div>
        <PageContent content="These are even more words!" />
      </div>
    </div>
  )
}
