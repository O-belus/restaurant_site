'use client'

import Button from "./Button"

import Link from "next/link"
import DialogPop from "./DialogPop"
import { useState } from "react"
import localFont from "next/font/local"

const the_night_watch = localFont({
  src: "../fonts/thenightwatch.ttf",
  display: "swap",
})

const Navbar = () => {
   const [sidebarOpen, setSidebarOpen] = useState(false)

   function showSidebar(){
    setSidebarOpen(true)
   }

   function closeSidevar(){
    setSidebarOpen(false)
   }


  return (
    <nav className=" w-svw flex h-20 bg-transparent sm:bg-sea_green/60 z-20 fixed font-manrope  ">
        <ul className=" flex w-full items-center justify-between text-sm mx-auto">

            <li className=" text-sea_shell-200 rounded ml-8 sm:ml-16 ">
                <Link href="/" className={` hover:text-sea_shell-300 text-center text-3xl ${the_night_watch.className} `}>
                  SAILOR
                </Link>
                <p className={` text-xs font-manrope `}>seafood restaurant</p>
            </li>

            <li className=" hidden sm:flex sm:justify-around items-center gap-10 ">
              <Link href="/Menu" className=" hidden sm:block hover:text-sea_shell-300 text-sea_shell-200 ">
                MENU
              </Link>
              <Link href="/About" className=" hidden sm:block hover:text-sea_shell-300 text-sea_shell-200 ">
                ABOUT US
              </Link>
              <Link href="/Contacts" className="hidden sm:block text-sea_shell-200 hover:text-sea_shell-300 ">
                CONTACTS
              </Link>
            </li>

            <li className=" mr-16 hidden sm:block ">
              <DialogPop/>
            </li>

            <li className=" sm:hidden mr-8 ">
              <button 
                onClick={() => setSidebarOpen(true)}
                className=" text-sea_shell-200 hover:text-sea_shell-300 "
                aria-label=" Open menu "
              >
              <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              </button>
            </li>

        </ul>

        <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSidebarOpen(false)}
      >
        <div
          className={`fixed top-0 right-0 h-screen w-3/4 bg-white/5 backdrop-blur-sm shadow-lg transition-transform duration-300 ${
            sidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 flex flex-col gap-6">
            <button
              onClick={() => setSidebarOpen(false)}
              className="self-end text-sea_shell-200"
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <nav className="flex flex-col gap-6 text-xl text-sea_shell-200 ">
              <Link href="/Menu">Menu</Link>
              <Link href="/About">About</Link>
              <Link href="/Contacts">Contacts</Link>
            </nav>
          </div>
        </div>
      </div>

        



        
    </nav>
  )
}

export default Navbar