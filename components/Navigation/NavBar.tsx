import { linkType } from "./Header";
import { Link as LinkS } from "react-scroll";
const NavBar = ({ openNav, setopenNav, links }: { openNav: boolean; setopenNav: Function; links: Array<linkType> }) => {
  return (
    <div
      onClick={() => setopenNav(false)}
      className={`fixed transition-all duration-[1000ms] ease-in-out z-[5]  p-20 ${
        openNav ? "pointer-events-auto " : " pointer-events-none"
      } h-screen w-full  `}
    >
      <div
        className={` absolute rounded-full transition-all duration-[1000ms] ease-in-out h-full -right-96 -top-96 w-full ${
          openNav ? "bg-white pointer-events-auto" : "bg-transparent pointer-events-none"
        } ${openNav ? "scale-[800%] " : "scale-0"}`}
      ></div>
      <div className={`h-full py-16 relative fade-in  ${openNav ? "flex" : "hidden"}  w-full flex-col`}>
        <ul className="justify-between items-center h-full  text-xl flex-col flex text-dark-brown font-Amaranth ">
          {links.map((item) => (
            <li key={item.to}>
              <LinkS onClick={() => setopenNav(false)} smooth className="relative cursor-pointer group" to={item.to}>
                {item.title}
                <span className="absolute group-focus:w-full group-hover:w-full transition-all duration-500 ease-in-out -bottom-4 w-0 bg-dark-brown h-1 left-0"></span>
              </LinkS>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
