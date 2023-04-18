import Head from "next/head"
import { HeroSection,Header } from "@/components"
export default function Home() {
  return (
    <div className="w-full items-center bg-white">
      <Head>
        <title>Ophin</title>
      </Head>
      <main className="flex items-center flex-col min-h-screen">
        <Header />
        <HeroSection />
      </main>
    </div>
  )
}
