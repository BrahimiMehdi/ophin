import Head from "next/head"
import { HeroSection,Header, About } from "@/components"
export default function Home() {
  return (
    <div className=" bg-main-brown">
      <Head>
        <title>Ophin</title>
      </Head>
      <main className="flex flex-col items-center min-h-screen">
        <Header />
        <HeroSection />
        <About />
      </main>
    </div>
  )
}
