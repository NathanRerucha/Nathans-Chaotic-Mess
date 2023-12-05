import Navbar from './components/navbar'
import PageTitle from './components/pageTitle'
import PageContent from './components/pageContent'
import Card from './components/Card'
import PageLogo from './components/Logo'

import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://fjsdwfsbprblvilylazn.supabase.co', process.env.SUPABASE_SERVICE_ROLE_KEY)

export const revalidate = 0

export default async function Home() {
  const { data: xards, error } = await supabase.from('xards').select('*')

  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="Home" />
        <PageContent />
        <div className="flex justify-center gap-10 flex-wrap ">
          {xards.map((xards, idx) => (
            <Card
              key={idx}
              title={xards.title}
              subtitle={xards.subtitle}
              img={xards.img}
              description={xards.description}
              authors={xards.authors}
            />
          ))}
        </div>
        <PageContent content="These are even more words!" />
      </div>
    </div>
  )
}
