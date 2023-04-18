import Link from "next/link"
const Header = () => {
  return (
    <header className='fixed px-20 z-[5] top-0 left-0 h-20 w-full pt-6'>
        <div className='w-full flex justify-between gap-x-8'>
            <Link className="font-Montserrat text-2xl font-extrabold text-dark-brown" href={"/"}>
                Ophin
            </Link>
            <nav className="w-full max-w-xl">
                <ul className="flex text-xl text-dark-brown font-Amaranth justify-between ">
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
  )
}

export default Header