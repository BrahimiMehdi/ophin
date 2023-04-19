import { Url } from "url";
interface ButtonInputType {
    type:"button" | "reset" | "submit" | "link";
    text:string;
    style:{
        bordered:boolean;
        primary:boolean;
    }
    href?:Url;
}
import Link from "next/link";
const Button = ({type,text,style,href}:ButtonInputType) => {
  if(type!=="link") return (
    <button className={`${style.bordered && "outline outline-dark-brown"} ${style.primary ? "bg-second-green text-white w-64 shadow-xl" :"bg-transparent w-fit text-dark-brown"} capitalize text-lg    rounded-xl  py-4 `} type={type}>
        {text}
    </button>
  )
  if(href) return (
    <Link href={href} className={`${style.bordered && "outline outline-dark-brown"} ${style.primary ? "bg-second-green text-white w-64 shadow-xl" :"bg-transparent w-fit text-dark-brown"} capitalize text-lg    rounded-xl  py-4 `} type={type}>
        {text}
    </Link>
  )
  return(
    <h1>you dipshit dont insert wrong shit</h1>
  )
}

export default Button