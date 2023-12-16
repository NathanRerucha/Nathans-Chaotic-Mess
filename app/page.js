import Navbar from './components/navbar'
import PageTitle from './components/pageTitle'
import PageContent from './components/pageContent'
import Card from './components/Card'
import PageLogo from './components/Logo'
import Footer from './components/Footer'
import { findCards } from './utils/supabase-client'
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://fjsdwfsbprblvilylazn.supabase.co', process.env.SUPABASE_SERVICE_ROLE_KEY)

export const revalidate = 0

export default async function Home() {
  const xards = await findCards()

  return (
    <div>
      <PageLogo />
      <div className="my-4">
        <Navbar />
      </div>
      <div className="m-12">
        <PageTitle title="Home" />
        <PageContent content="This is The Chaos Emporium, a collection of bad ideas, poor styling, and abysmal time management. This site was uspposed to be interesting and funny, but I think thats happening." />
        <div className="flex justify-center gap-10 flex-wrap ">
          {xards.map((xards, idx) => (
            <Card
              key={idx}
              title={xards.title}
              subtitle={xards.subtitle}
              img={xards.img}
              description={xards.description}
            />
          ))}
        </div>
      </div>
      <div className="absolute bottom-0">
        <Footer authors="Nathan Rerucha" />
      </div>
    </div>
  )
}
