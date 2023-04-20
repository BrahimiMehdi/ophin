import Head from "next/head"
import { HeroSection,Header,Footer,NavBar,PlantsSection, About } from "@/components"
import { getPlants } from "@/services"
import { SinglePlantResponse } from "@/services"
import { GetStaticProps} from "next"
import { useState } from "react";

export default function Home({plants}:{plants:SinglePlantResponse[]}) {
  const [openNav, setopenNav] = useState<boolean>(false)
  const links = [
    {
      title: "Home",
      to: "hero",
    },
    {
      title: "About",
      to: "about",
    },
    {
      title: "Plants",
      to: "plants",
    },
    {
      title: "Contact",
      to: "contact",
    },
  ];
  return (
    <div className=" bg-main-brown">
      <Head>
        <title>Ophin</title>
      </Head>
      <main className="flex flex-col items-center min-h-screen">
        <NavBar links={links} openNav={openNav} setopenNav={setopenNav} />
        <Header links={links}  setopenNav={setopenNav}/>
        <HeroSection />
        <About />
        <PlantsSection plants={plants} />
        <Footer />
      </main>
    </div>
  )
}
export const  getStaticProps:GetStaticProps = async() => {
  const plants = await getPlants({type:"partial"})
  return {
    props: {
      plants:plants
    }, // will be passed to the page component as props
  }
}