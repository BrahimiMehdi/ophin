import { Url } from "url";
interface ButtonInputType {
    type:"button" | "reset" | "submit";
    text:string;
    style:{
        bordered:boolean;
        primary:boolean;
    }
    href?:Url;
    scrollTo?:"home" | "about" | "plants" | "contact"
}
import Link from "next/link";
import {Link as LinkS} from "react-scroll"
const Button = ({type,text,style,href,scrollTo}:ButtonInputType) => {
   
  if(href) return (
    <Link href={href} className={`${style.bordered && "outline outline-dark-brown"} ${style.primary ? "bg-second-green text-white w-64 shadow-xl transition-all duration-500 ease-in-out hover:bg-dark-brown hover:-translate-y-3 hover:bg-opacity-80" :"bg-transparent w-fit text-dark-brown"} capitalize text-lg    rounded-xl  py-4 `} type={type}>
        {text}
    </Link>
  )
 if(!scrollTo) return (
    <button className={`${style.bordered && "outline outline-dark-brown"} ${style.primary ? "bg-second-green text-white w-64 shadow-xl transition-all duration-500 ease-in-out hover:bg-dark-brown hover:-translate-y-3 hover:bg-opacity-80" :"bg-transparent w-fit text-dark-brown"} capitalize text-lg    rounded-xl  py-4 `} type={type}>
        {text}
    </button>
  )
  return(
    <LinkS to={scrollTo} smooth className={`grid place-items-center cursor-pointer ${style.bordered && "outline outline-dark-brown"} ${style.primary ? "bg-second-green text-white w-64 shadow-xl transition-all duration-500 ease-in-out hover:bg-dark-brown hover:-translate-y-3 hover:bg-opacity-80" :"bg-transparent w-fit text-dark-brown"} capitalize text-lg    rounded-xl  py-4 `} type={type}>
        {text}
    </LinkS>
  )

}

export default Button