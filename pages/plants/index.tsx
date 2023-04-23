import Head from "next/head"
import { PlantsSection,Footer } from "@/components"
import { getPlants } from "@/services"
import { SinglePlantResponse } from "@/services"
import { GetStaticProps} from "next"
import { AiFillLeftCircle } from "react-icons/ai"
import Link from "next/link"
export default function Home({plants}:{plants:SinglePlantResponse[]}) {

  return (
    <div className=" bg-main-brown relative">
      <div className="relative top-4 left-4 w-16 grid place-items-center">
      <Link className="w-fit " href={"/"}>
      <AiFillLeftCircle className="text-5xl w-fit text-second-green " />
      </Link>
      </div>
      <Head>
        <title>Ophin</title>
      </Head>
      <main className="flex flex-col items-center min-h-screen">
        <PlantsSection plants={plants} />
        <Footer />
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
    revalidate:60

  }
}