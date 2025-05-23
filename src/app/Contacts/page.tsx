

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
  import { Slash } from "lucide-react"
  

  import localFont from "next/font/local"
  import Menuitem from "../components/Menuitem";
  import Link from "next/link";
  import allDishes from "../../data/dishes.json"
import { HiArrowLongRight } from "react-icons/hi2";
import LeafletMap from "../components/LeafletMap";
  
  

const the_night_watch = localFont({
  src: "../fonts/thenightwatch.ttf",
  display: "swap",
})


export default function contacts() {
    const locations = [
        { id: "550e8400-e29b-41d4-a716-446655440000", lat: 51.5074, lng: -0.1278 },
        
      ];
    return(
        <>
            <div id="about page" className=" pt-24 font-manrope text-sea_shell-200 bg-sea_shell-100 w-full ">

                <div id="breadcrumb" className="  max-w-[1800px] sm:mx-auto ml-8 sm:ml-16 ">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/" className=" text-sea_shell-200 hover:text-sea_shell-300 ">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator>
                                <Slash/>
                            </BreadcrumbSeparator>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/Contacts" className=" text-sea_shell-200 hover:text-sea_shell-300 ">Contacts</BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>

                <section className=" mb-24 sm:mb-40 w-full max-w-[1800px] mx-auto mt-8 sm:mt-14 sm:h-[700px] overflow-hidden sm:px-32 ">
                    <div className=" flex justify-center items-center h-full flex-col sm:flex-row gap-8 ">

                        <div>
                            <h2 className={` text-4xl sm:text-5xl mb-4 text-sea_shell-200 ${the_night_watch.className}`}>STAY TUNED</h2>
                            <p className=" mb-10 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, veniam qui consectetur</p>
                            <div className=" w-2/3 mb-2 border-b-2 pb-2 border-sea_shell-300 ">
                                <input type="text" placeholder=" Your email "  className=" bg-transparent w-3/5 font-manrope placeholder:text-sea_shell-200/50  " />
                                <button className=" float-right "><HiArrowLongRight className=" text-4xl inline-block "/></button>
                            </div>
                            <p className=" text-sm mb-8 ">By clicking this button you agree with the terms & conditions and privacy policy</p>
                            <div>
                                <ul className=" ">
                                <li className=" mb-2 ">
                                        <p><span>WORKING HOURS:</span> Monday-Sunday, 10.00-23.00</p>
                                    </li>
                                    <li className=" mb-2 ">
                                    <span className=" font-bold ">PHONE: </span>  +00000000
                                    </li>
                                    <li className=" mb-2 ">
                                    <span className=" font-bold ">ADDRESS: </span>  Blah, blah blah, blah.
                                    </li>
                                    <li className=" mb-8 ">
                                    <span className=" font-bold ">EMAIL: </span>  sailor@gmail.com
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className=" h-[600px] sm:h-[400px] sm:w-1/2 w-full  ">
                            <LeafletMap />
                        </div>
                    </div>
                    
                </section>

                <section id="instagram" className=" max-w-[1800px] sm:pb-24 pb-16 sm:mx-auto w-full px-4 sm:px-32 ">
                          <h2 className={` text-5xl mb-8 text-sea_shell-200 ${the_night_watch.className}`}>OUR INSTAGRAM</h2>
                
                          <div className="  w-full grid gap-4 sm:grid-cols-12 sm:grid-rows-6 ">
                            <div className=" sm:row-span-6 sm:col-span-6 w-full aspect-square ">
                              <Menuitem 
                               name={allDishes.main_dishes[0].name}
                               url={allDishes.main_dishes[0].image.url}
                               id={allDishes.main_dishes[0].id.toString()}
                               height={allDishes.main_dishes[0].image.height}
                               width={allDishes.main_dishes[0].image.width}
                               key={allDishes.main_dishes[0].id}
                              />
                            </div>
                            
                            <div  className=" sm:row-span-3 sm:col-span-3 w-full aspect-square ">
                              <Menuitem 
                              name={allDishes.desserts[3].name}
                              url={allDishes.desserts[3].image.url}
                              id={allDishes.desserts[3].id.toString()}
                              height={allDishes.desserts[3].image.height}
                              width={allDishes.desserts[3].image.width}
                              key={allDishes.desserts[3].id}
                              />
                            </div>
                
                            <div className=" sm:row-span-3 sm:col-span-3 w-full aspect-square ">
                              <Menuitem name={allDishes.drinks[0].name}
                               url={allDishes.drinks[0].image.url}
                               id={allDishes.drinks[0].id.toString()}
                               height={allDishes.drinks[0].image.height}
                               width={allDishes.drinks[0].image.width}
                               key={allDishes.drinks[0].id}
                               />
                            </div>
                            
                            <Link href="/about" className=" sm:row-start-6 sm:col-start-11 text-right sm:col-span-2 text-sea_shell-200 hover:text-sea_shell-300 font-manrope " > <HiArrowLongRight className=" text-4xl inline-block "/> Follow us </Link>
                          </div>
                        </section>

                


            </div>
        </>
    )
}