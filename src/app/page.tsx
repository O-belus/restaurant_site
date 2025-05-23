

import Image from "next/image";
import Link from "next/link";
import heroImage from "../../public/pexels-valeriya-1833349_compressed.webp"
import heroImage2 from "../../public/pexels-ilyas-10839568_compressed.webp"


import chefImage from "../../public/pexels-taryn-elliott-4457125_compressed.webp"
import { the_night_watch } from "./layout";
import Menuitem from "./components/Menuitem";
import Button from "./components/Button";
import interiorImage from "../../public/pexels-davidguerrero-2945691_compressed.webp"
import Carousel_feedback from "./components/Carousel_feedback";
import allDishes from "../data/dishes.json"
import DialogPop from "./components/DialogPop"
import LeafletMap from "./components/LeafletMap";

import { FaArrowRight } from "react-icons/fa";
import { HiArrowLongRight } from "react-icons/hi2";





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
            <Link href="/Menu" className=" hidden sm:block hover:text-sea_shell-300 text-sea_shell-200 float-right font-manrope " > <HiArrowLongRight className=" text-4xl inline-block "/> view menu </Link>
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

          <Link href="/About" className=" sm:row-start-3 sm:col-span-4 text-sea_shell-200 hover:text-sea_shell-300 font-manrope " ><HiArrowLongRight className=" text-4xl inline-block "/> Learn more </Link>
        </section>



        <section id="menu_section" className=" max-w-[1800px] sm:mb-24 mb-16 sm:mx-auto w-full px-4 sm:px-32 ">
          <h2 className={` text-5xl mb-8 text-sea_shell-200 ${the_night_watch.className}`}>OUR MENU</h2>

          <div className="  w-full grid gap-4 sm:grid-cols-12 sm:grid-rows-6 ">
            <Link href="/menu" className=" sm:row-span-6 sm:col-span-6 w-full aspect-square ">
              <Menuitem 
              name="Main dishes"
              url={allDishes.main_dishes[0].image.url}
              id={allDishes.main_dishes[0].id.toString()}
              height={allDishes.main_dishes[0].image.height}
              width={allDishes.main_dishes[0].image.width}
              key={allDishes.main_dishes[0].id}
              />
            </Link>
            
            <Link href="/menu" className=" sm:row-span-3 sm:col-span-3 w-full aspect-square ">
            <Menuitem 
              name="Desserts"
              url={allDishes.desserts[3].image.url}
              id={allDishes.desserts[3].id.toString()}
              height={allDishes.desserts[3].image.height}
              width={allDishes.desserts[3].image.width}
              key={allDishes.desserts[3].id}
              />
            </Link>

            <Link href="/menu" className=" sm:row-span-3 sm:col-span-3 w-full aspect-square ">
            <Menuitem 
              name="Drinks"
              url={allDishes.drinks[0].image.url}
              id={allDishes.drinks[0].id.toString()}
              height={allDishes.drinks[0].image.height}
              width={allDishes.drinks[0].image.width}
              key={allDishes.drinks[0].id}
              />
            </Link>
            
            <Link href="/Menu" className=" sm:row-start-6 sm:col-start-11 text-right sm:col-span-2 text-sea_shell-200 hover:text-sea_shell-300 font-manrope " ><HiArrowLongRight className=" text-4xl inline-block "/> All menu </Link>
          </div>
        </section>



        <section id="table booking" className=" flex sm:mb-24 mb-16 flex-col items-center justify-center relative h-svh sm:h-[calc(100vh-200px)] ">
          <div className=" absolute py-6 max-w-3xl w-5/6 sm:bg-sea_green/50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h3 className={` mb-4 text-4xl sm:text-5xl  text-center text-sea_shell-200 ${the_night_watch.className} `}>HOW TO BOOK A TABLE</h3>
            <p className=" font-manrope mb-8 text-center text-sea_shell-200 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat magni, Velit consequatur  </p>
            <div className=" pl-20 sm:pl-72 ">
              <DialogPop/>
            </div>
            
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
          <Carousel_feedback/>
          <div className=" text-sea_shell-200 w-full flex justify-end mt-8 " >
            <p className="  "><HiArrowLongRight className=" text-4xl inline-block "/> Leave feedback</p>
          </div>
          
        </section>

        <section id="instagram" className=" max-w-[1800px] sm:mb-24 sm:mx-auto w-full px-4 sm:px-32 ">

          <h2 className={` text-5xl mb-8 text-sea_shell-200 ${the_night_watch.className}`}>OUR INSTAGRAM</h2>

          <div className=" grid grid-rows-4 sm:grid-rows-3 grid-cols-4 gap-4 sm:grid-cols-8  ">

            <div className=" col-span-2 row-span-2 aspect-square ">
            <Image 
            src={heroImage}
            height={400}
            width={400}
            alt="image of a dish"
            className="rounded object-cover h-full w-full "
            />
            </div>


            <div className=" col-span-2 row-span-3  ">
            <Image 
            src={heroImage}
            alt="image of a dish"
            height={600}
            width={400}
            className="rounded object-cover h-full w-full "
            />
            </div>

            <div className=" hidden  col-span-2 row-span-2 row-start-2 col-start-5 sm:block aspect-square ">
            <Image 
            src={heroImage2}
            alt="image of a dish"
            height={400}
            width={400}
            className="rounded object-cover h-full w-full "
            />

            </div>
          
            <div className=" hidden col-span-2 row-span-2 sm:block aspect-square ">
            <Image 
            src={heroImage}
            alt="image of a dish"
            height={600}
            width={400}
            className="rounded object-cover h-full w-full "
            />
            </div>

            <div className=" sm:col-span-1 sm:col-start-8 sm:row-start-3 sm:row-span-1 row-start-4 col-span-2  ">
              <Link href="/follow us" className=" font-manrope float-right text-sea_shell-200 sm:mt-16 hover:text-sea_shell-300 "><HiArrowLongRight className=" text-4xl inline-block "/> Follow us</Link>
            </div>

          </div>

        </section>


        <section id="our location" className=" hidden sm:block text-sea_shell-200  w-full max-w-[1800px] mx-auto mt-8 sm:mt-14 sm:h-[700px] overflow-hidden sm:px-32 ">
          <h2 className={` text-5xl mb-8 text-sea_shell-200 ${the_night_watch.className}`}>OUR LOCATION</h2>
          <div className=" flex  justify-center   flex-col sm:flex-row gap-8 ">
              <div className=" h-[600px] sm:h-[500px] sm:w-2/3 w-full  ">
                  <LeafletMap />
              </div>

              <div className=" sm:w-1/3 ">
                <ul className="mb-16 ">
                  <li className=" mb-4 ">
                    <p><span>WORKING HOURS:</span> Monday-Sunday, 10.00-23.00</p>
                  </li>
                  <li className=" mb-4 ">
                     <span className=" font-bold ">PHONE: </span>  +00000000
                  </li>
                  <li className=" mb-4 ">
                    <span className=" font-bold ">ADDRESS: </span>  Blah, blah blah, blah.
                  </li>
                  <li className=" mb-8 ">
                    <span className=" font-bold ">EMAIL: </span>  sailor@gmail.com
                  </li>
                </ul>
                
                <div className="  ">
                  <Image 
                  src={heroImage2} 
                  alt="image of the restaurant"
                  className=" aspect-video object-cover rounded "
                  />
                </div>
              </div>

                        

           </div>
                    
         </section>

         

        
      </div>
    </>
  )
}
