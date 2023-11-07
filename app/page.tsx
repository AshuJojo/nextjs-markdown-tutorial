import Image from 'next/image'
import { Markdown } from './components/markdown'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Markdown />
    </main>
  )
}
