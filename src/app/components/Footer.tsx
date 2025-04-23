'use client'

import Link from "next/link"
import { the_night_watch } from "../layout"
import { HiArrowLongRight } from "react-icons/hi2"





const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
  return (
    <footer id="footer" className=" hidden border-t-2 border-sea_shell-300 bg-sea_green w-full sm:block " >
        <div className=" flex text-lg pt-8 border-b-2 border-sea_shell-300 pb-8 max-w-[1800px] justify-between w-11/12  mx-auto flex-row text-sea_shell-200 font-manrope ">
            <ul>

                <li className=" mb-12  text-sea_shell-200 rounded">
                    <Link href="/" className={` hover:text-sea_shell-300 text-center text-4xl ${the_night_watch.className} `}>
                    SAILOR
                    </Link>
                    <p className={` text-sm font-manrope `}>seafood restaurant</p>
                </li>
                <li className=" mb-4 ">WORK HOURS</li>
                <li className="mb-2">Monday to Sunday</li>
                <li>Till 10:00 to 23:00</li>

            </ul>






            <ul>
                <li className=" mb-4 ">MENU</li>
                <li className=" mb-2 ">
                    <Link href="/menu">Menu</Link>
                </li>
                <li className=" mb-2 ">
                    <Link href="/about">About us</Link>
                </li>
                <li className=" mb-8 ">
                    <Link href="/contacts">Contacts</Link>
                </li>
                <li className=" mb-2 ">Book a table</li>
                <li>Leave feedback</li>

            </ul>


            <div className=" flex flex-col w-1/2  ">

                <div className=" flex flex-row w-full justify-between ">
                    <ul className=" w-3/5 ">
                        <li className=" mb-4 ">CONTACTS</li>
                        <li className=" mb-2 ">
                            Phone: +00000000
                        </li>
                        <li className=" mb-2 ">
                            Address: Blah, blah blah, blah.
                        </li>
                        <li className=" mb-8 ">
                            Email: sailor@gmail.com
                        </li>
                        <li className="mb-4">STAY TUNED</li>
                    </ul>

                    <ul className=" w-1/5 ">
                    <li className=" mb-4 ">SOCIAL MEDIA</li>
                        <li className=" mb-2 ">
                            Instagram
                        </li>
                        <li className=" mb-2 ">
                            Telegram
                        </li>
                        
                    </ul>

                    <button onClick={() => scrollToTop()}  className=" left-0 p-0 h-8 -rotate-90  transform translate-y-full translate-x-1/3 "><HiArrowLongRight className=" text-4xl inline-block "/></button>

                </div>

                <div className=" w-1/2 border-b-2 pb-2 border-sea_shell-300 ">
                    <input type="text" placeholder=" Your email "  className=" bg-transparent w-3/5 font-manrope placeholder:text-sea_shell-200/50  " />
                    <button className=" float-right "><HiArrowLongRight className=" text-4xl inline-block "/></button>
                </div>
            </div>

            

        </div>
    </footer>
  )
}

export default Footer