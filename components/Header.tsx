import Link from "next/link";
import { HiMenu } from "react-icons/hi";
const Header = () => {
  return (
    <header className="fixed px-20  z-[5] top-0 left-0 h-20 w-full pt-6">
      <div className="flex justify-between w-full gap-x-8">
        <Link
          className="text-2xl font-extrabold font-Montserrat text-dark-brown"
          href={"/"}
        >
          Ophin
        </Link>
        <HiMenu className="block text-5xl justify-left lg:hidden text-dark-brown" />

        <nav className="w-full max-w-xl ">
          <ul className="justify-between hidden text-xl lg:flex text-dark-brown font-Amaranth ">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/"}>About</Link>
            </li>
            <li>
              <Link href={"/"}>Plants</Link>
            </li>
            <li>
              <Link href={"/"}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
