import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import {Link as LinkS} from "react-scroll" 
export type linkType = {
  to:string;
  title:string;
}
const Header = ({setopenNav,links}:{setopenNav:Function,links:Array<linkType>}) => {
  
  return (
    <header className="absolute  top-0 px-8 pt-2  lg:px-20  z-[5] left-0 h-20 w-full">
      <div className="flex justify-between items-center w-full gap-x-8">
        <Link className="text-2xl font-extrabold font-Montserrat text-dark-brown" href={"/"}>
          <img className="lg:w-16 w-10 " src="/Logo.png" alt="" />
        </Link>
        <HiMenu onClick={()=>setopenNav((prev:any)=>!prev)} className="block cursor-pointer text-4xl justify-left lg:hidden text-dark-brown" />

        <nav className="w-full max-w-xl lg:block hidden ">
          <ul className="justify-between items-center h-full hidden text-xl lg:flex text-dark-brown font-Amaranth ">
            {links.map((item) => (
              <li key={item.to}>
                <LinkS smooth  className="relative cursor-pointer group" to={item.to} >
                {item.title}
                <span className="absolute group-focus:w-full group-hover:w-full transition-all duration-500 ease-in-out -bottom-4 w-0 bg-dark-brown h-1 left-0"></span>
                </LinkS>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
