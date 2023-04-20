import Head from "next/head"
import { HeroSection,Header,Footer,NavBar,PlantsSection, About } from "@/components"
import { getPlants } from "@/services"
import { SinglePlantResponse } from "@/services"
import { GetStaticProps} from "next"
import { useState } from "react";

export default function Home({plants}:{plants:SinglePlantResponse[]}) {
  const [openNav, setopenNav] = useState<boolean>(false)

  return (
    <div className=" bg-main-brown">
      <Head>
        <title>Ophin</title>
      </Head>
      <main className="flex flex-col items-center min-h-screen">
        <PlantsSection plants={plants} />
      </main>
    </div>
  )
}
export const  getStaticProps:GetStaticProps = async() => {
  const plants = await getPlants({type:"all"})
  return {
    props: {
      plants:plants
    }, // will be passed to the page component as props
  }
}