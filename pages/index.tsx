import Header from '../components/header'
import Dashboard from '../components/dashboard'
import Body1 from "@/components/body1"
import Body2 from "@/components/body2"
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <main className={'h-full'}>
          <Header/>
          <div className={'mx-auto w-full xl:w-3/4'}>
              <Dashboard/>
              <Body1/>
              <Body2/>
          </div>
      </main>
  )
}
