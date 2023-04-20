import Head from "next/head"
import { Footer} from "@/components"
import Image from "next/image"
import { getPlants } from "@/services"
import { SinglePlantResponse } from "@/services"
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext} from "next"
import { AiFillLeftCircle } from "react-icons/ai"
import Link from "next/link"
import { RichText } from '@graphcms/rich-text-react-renderer';
export default function Home({plant}:{plant:SinglePlantResponse}) {
  return (
    <div className=" bg-main-brown">
      <Head>
        <title>Ophin</title>
      </Head>
      
      <main className="flex items-center flex-col min-h-screen">
      <div className="absolute top-4 left-4 w-16 grid place-items-center">
      <Link className="w-fit " href={"/plants"}>
      <AiFillLeftCircle className="text-5xl w-fit text-second-green " />
      </Link>
      </div>
        <article className="w-full text-stone-700 px-8 prose gap-12 py-20 mt-8 max-w-7xl grid lg:grid-cols-2">
            <Image className="h-full w-full object-cover rounded-md" alt={plant.name} width={plant.image.width} height={plant.image.height} src={plant.image.url} />
            <div className="flex w-full h-full flex-col">
            <h1 className="text-5xl relative z-[2]  font-bold font-Montserrat  text-dark-brown">{plant.name}</h1>
            <RichText  content={plant.fullDescription.raw} />
            </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}

export const getStaticPaths:GetStaticPaths = async ()=>{
    const plants = await getPlants({type:"all"})
    const paths = plants.map((plante)=> ({
        params:{slug:plante.slug}
    }))
    return{
        paths,fallback:false,
        revalidate:60

    }
}
export const  getStaticProps:GetStaticProps = async(context:GetStaticPropsContext) => {
    const slug = context?.params?.slug;
    const plant = await getPlants({type:"single",slug:slug})
  return {
    props: {
      plant:plant[0],
      revalidate:60
    }, // will be passed to the page component as props
  }
}