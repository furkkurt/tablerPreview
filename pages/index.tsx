import Header from '../components/header'
import Dashboard from '../components/dashboard'
import Body1 from "@/components/body1"
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <main className={'w-full h-full'}>
          <Header/>
          <Dashboard/>
          <Body1/>
      </main>
  )
}
