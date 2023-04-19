import Head from "next/head"
import { HeroSection,Header,PlantsSection, About } from "@/components"
import { getAllPlants } from "@/services"
import { SinglePlantResponse } from "@/services"
import { GetStaticProps ,InferGetStaticPropsType} from "next"
export default function Home({plants}:{plants:SinglePlantResponse[]}) {
  return (
    <div className=" bg-main-brown">
      <Head>
        <title>Ophin</title>
      </Head>
      <main className="flex flex-col items-center min-h-screen">
        <Header />
        <HeroSection />
        <About />
        <PlantsSection plants={plants} />
      </main>
    </div>
  )
}
export const  getStaticProps:GetStaticProps = async() => {
  const plants = await getAllPlants()
  return {
    props: {
      plants:plants
    }, // will be passed to the page component as props
  }
}