import Button from "./Button"
import { the_night_watch } from "../layout"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className=" w-full flex h-20 bg-transparent sm:bg-sea_green/60 z-20 fixed font-manrope  ">
        <ul className=" flex w-full items-center justify-between text-sm mx-auto">
            <li className=" text-sea_shell-200 rounded ml-8 sm:ml-16">
                <Link href="/" className={` hover:text-sea_shell-300 text-center text-3xl ${the_night_watch.className} `}>
                  SAILOR
                </Link>
                <p className={` text-xs font-manrope `}>seafood restaurant</p>
            </li>
            <li className=" hidden sm:flex sm:justify-around items-center gap-10 ">
              <Link href="/Menu" className=" hidden sm:block hover:text-sea_shell-300 text-sea_shell-200 ">
                MENU
              </Link>
              <Link href="/about" className=" hidden sm:block hover:text-sea_shell-300 text-sea_shell-200 ">
                ABOUT US
              </Link>
              <Link href="/contacts" className="hidden sm:block text-sea_shell-200 hover:text-sea_shell-300 ">
                CONTACTS
              </Link>
            </li>
            
            <Button className="mr-16" >Book a table</Button>
        </ul>
    </nav>
  )
}

export default Navbar