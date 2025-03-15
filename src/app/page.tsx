import Image from "next/image";
import Link from "next/link";
import heroImage from "../../public/pexels-valeriya-1833349.jpg"
import heroImage2 from "../../public/pexels-ilyas-10839568.jpg"
import chefImage from "../../public/pexels-taryn-elliott-4457125.jpg"
import { the_night_watch } from "./layout";
import Menuitem from "./components/Menuitem";
import Button from "./components/Button";
import interiorImage from "../../public/pexels-davidguerrero-2945691.jpg"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export default function Home() {
  return (
    <>
      <div  className="bg-sea_green ">
        <section id="hero"  className=" relative h-svh flex sm:mb-24 mx-auto mb-16 ">
          <Image 
          src={heroImage}
          alt="image of a dish"
          width={1200}
          height={500}
          className=" h-svh rounded object-cover w-screen sm:w-1/2 "
          />
          <Image 
          src={heroImage2}
          alt="dish no.2"
          className=" hidden sm:block sm: sm:w-96 mt-24 ml-52 object-cover sm:h-52 rounded-md "
          />
          <div className="absolute hidden sm:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 leading-tight font-thin ">
            <h1 className={` text-sea_shell-200 sm:text-[200px]  ${the_night_watch.className} `}>SAILOR</h1>
            <Link href="/menu" className=" hidden sm:block hover:text-sea_shell-300 text-sea_shell-200 float-right font-manrope " >------------{">"} view menu </Link>
          </div>
        </section>



        <section id="about_section" className=" mb-16 sm:mb-24 max-w-[1800px] mx-auto grid px-4 sm:px-32 grid-cols-2 gap-4 sm:grid-cols-12 sm:grid-rows-3 ">
          <div className=" col-span-2 sm:row-span-2 sm:col-span-4 " >
            <h2 className={` text-5xl mb-2 text-sea_shell-200 ${the_night_watch.className}` }>ABOUT US</h2>
            <p className=" text-sea_shell-200 text-lg text-left mb-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo iure sunt earum odit error temporibus illum pariatur cumque perspiciatis? Assumenda quis ut aperiam unde officiis blanditiis odio saepe voluptatum sunt!</p>
            <p className=" text-sea_shell-200 text-lg text-left  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo iure sunt earum odit error temporibus illum pariatur cumque perspiciatis?</p>
          </div>
          <div className="col-span-1 sm:relative  sm:col-span-3 sm:row-span-2 sm:row-start-2 sm:col-start-6 rounded">
            <Image
            src={heroImage2}
            alt="food"
            className="  object-cover sm:absolute sm:bottom-0 rounded  "
            />
          </div>
          
          <div className="sm:row-span-3 col-span-1 sm:h- sm:col-span-4">
            <Image 
            src={chefImage} 
            alt="chef's image"
            className=" object-cover rounded sm: "
            />
          </div>

          <Link href="/about" className=" sm:row-start-3 sm:col-span-4 text-sea_shell-200 hover:text-sea_shell-300 font-manrope " > --------------{">"} Learn more </Link>
        </section>



        <section id="menu_section" className=" max-w-[1800px] sm:mb-24 mb-16 sm:mx-auto w-full px-4 sm:px-32 ">
          <h2 className={` text-5xl mb-8 text-sea_shell-200 ${the_night_watch.className}`}>OUR MENU</h2>

          <div className="  w-full grid gap-4 sm:grid-cols-12 sm:grid-rows-6 ">
            <Link href="/menu" className=" sm:row-span-6 sm:col-span-6 w-full aspect-square ">
              <Menuitem name = "pop"/>
            </Link>
            
            <Link href="/menu" className=" sm:row-span-3 sm:col-span-3 w-full aspect-square ">
              <Menuitem name = "pop"/>
            </Link>

            <Link href="/menu" className=" sm:row-span-3 sm:col-span-3 w-full aspect-square ">
              <Menuitem name = "pop"/>
            </Link>
            
            <Link href="/about" className=" sm:row-start-6 sm:col-start-11 text-right sm:col-span-2 text-sea_shell-200 hover:text-sea_shell-300 font-manrope " > --------------{">"} All menu </Link>
          </div>
        </section>



        <section id="table booking" className=" flex flex-col items-center justify-center relative h-svh sm:h-[calc(100vh-200px)] ">
          <div className=" absolute max-w-3xl w-5/6 sm:bg-sea_green/50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h3 className={` mb-4 text-4xl sm:text-5xl  text-center text-sea_shell-200 ${the_night_watch.className} `}>HOW TO BOOK A TABLE</h3>
            <p className=" font-manrope mb-8 text-center text-sea_shell-200 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat magni, Velit consequatur  </p>
            <Button className=" block mx-auto " >Book a table</Button>
          </div>

          <Image 
          src={interiorImage}
          alt="interior image"
          width={1200}
          height={600}
          quality={100}
          className=" w-full object-cover h-full "
          />
        </section>

        <section id="our clients" className=" max-w-[1800px] sm:mb-24 mb-16 sm:mx-auto w-full px-4 sm:px-32 ">
          <h1 className={` text-5xl mb-8 text-sea_shell-200 ${the_night_watch.className}`}>OUR CLIENTS</h1>          
        </section>


        
      </div>
    </>
  )
}
