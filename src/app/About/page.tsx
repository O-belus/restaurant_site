import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
  import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  import { Separator } from "@/components/ui/separator"

  import { Slash } from "lucide-react"
  
import Image from "next/image"
import ambImage1 from "../../../public/pexels-catscoming-1907223.jpg"
import ambImage2 from "../../../public/pexels-cottonbro-3296546.jpg"  
import ambImage3 from "../../../public/pexels-taryn-elliott-4457125.jpg"
import localFont from "next/font/local"

const the_night_watch = localFont({
  src: "../fonts/thenightwatch.ttf",
  display: "swap",
})


export default function about(){
    return (
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
                                <BreadcrumbLink href="/About" className=" text-sea_shell-200 hover:text-sea_shell-300 ">About</BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>

                
                <section id="ambience" className=" mb-16 sm:mb-24 w-full max-w-[1800px] mx-auto mt-8 sm:mt-14 sm:h-[700px] overflow-hidden sm:px-32 ">
                    <div className="grid grid-rows-6 grid-cols-4 sm:grid-rows-3 sm:grid-cols-4 gap-4 px-4 h-full">
                        
                        <div className="flex flex-col row-span-3 col-span-4 sm:row-span-1 sm:col-span-2 h-full overflow-auto">
                        <h2 className={` text-4xl sm:text-5xl mb-4 text-sea_shell-200 ${the_night_watch.className}`}>
                            OUR AMBIENCE
                        </h2>
                        <p className="font-manrope mb-8 text-sea_shell-200 pr-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio consequuntur voluptatibus voluptate consequatur maiores nisi magnam nobis sunt hic totam eius perspiciatis eveniet dolor, eaque sequi aliquam, non modi libero!
                        </p>
                        </div>

                        
                        <div className="row-span-2 col-span-2 row-start-5 sm:row-start-2 sm:col-span-2 h-full  ">
                        <Image 
                            src={ambImage1}
                            alt="ambience image"
                            className="h-full w-full object-cover aspect-square rounded"
                        />
                        </div>

                        
                        <div className="row-span-3 row-start-4 col-span-2 sm:row-span-3 h-full">
                        <Image 
                            src={ambImage2}
                            alt="ambience image"
                            className="h-full w-full object-cover rounded"
                        />
                        </div>
                    </div>
                </section>


                <section id="about image section" className="w-full mb-16 sm:mb-24 xl:h-[500px] h-[350px] sm:h-[800px] overflow-hidden">
                    <div className="h-full w-full relative">
                        <Image 
                        src={ambImage1} 
                        alt="image section"
                        fill
                        className="object-cover "
                        sizes="(max-width: 768px) 100vw, 80vw"
                        />
                    </div>
                </section>



                <section id="who we are" className=" w-full h-[600px] sm:h-[400px] mx-auto mb-16 sm:mb-24 max-w-[1800px] sm:px-32 ">

                    <div className=" flex flex-col-reverse sm:flex-row justify-evenly gap-8 w-full h-full ">

                        <div className=" sm:w-1/2 h-full relative ">
                            <Image 
                            src={ambImage3} 
                            alt=" chef "
                            fill  
                            className="  rounded sm:float-right object-cover "
                            />
                        </div>

                        <div className=" sm:w-1/2 mx-4 ">
                        <h2 className={` text-4xl sm:text-5xl mb-4 text-sea_shell-200 ${the_night_watch.className}`}>WHO WE ARE</h2>
                        <Popover>
                            <PopoverTrigger className=" text-xl font-bold py-4  ">Our Concept</PopoverTrigger>
                            <PopoverContent className=" bg-sea_shell-100 text-sea_shell-200 font-manrope ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, magnam fugiat ea nisi, recusandae minima officiis totam quos eligendi.</PopoverContent>
                        </Popover>
                        <Separator />

                        <Popover>
                            <PopoverTrigger className=" text-xl py-4 font-bold ">Our Concept</PopoverTrigger>
                            <PopoverContent className=" bg-sea_shell-100 text-sea_shell-200 font-manrope ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, magnam fugiat ea nisi, recusandae minima officiis totam quos eligendi.</PopoverContent>
                        </Popover>
                        <Separator />

                        <Popover>
                            <PopoverTrigger className=" text-xl py-4 font-bold ">Our Concept</PopoverTrigger>
                            <PopoverContent className=" bg-sea_shell-100 text-sea_shell-200 font-manrope ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, magnam fugiat ea nisi, recusandae minima officiis totam quos eligendi.</PopoverContent>
                        </Popover>
                        <Separator />

                        </div>

                    </div>

                </section>

                <section id="chef" className=" w-full mx-auto max-w-[1800px] sm:px-32 pb-24 ">

                    <div className=" flex flex-col sm:flex-row gap-4 px-4 sm:gap-16 ">

                        <div className=" sm:w-5/12 ">
                            <h2 className={` text-4xl sm:text-5xl mb-4 text-sea_shell-200 ${the_night_watch.className}`}>OUR CHEF</h2>
                            <p className=" mb-2 text-lg ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptates sint quae vero et quos vitae voluptatibus</p>
                            <p className=" sm:mb-8 text-lg ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias eligendi quis id vero quos, quia blanditiis aliquam reprehenderit </p>

                            <div className=" hidden sm:block sm:w-3/5 ">
                            <Image 
                            src={ambImage1} 
                            alt="image of a dish" 
                            className=" object-cover rounded "
                            />
                            </div>

                        </div>

                        <div className=" flex sm:w-7/12 gap-4 w-full ">

                            <div className=" w-1/2 sm:w-5/12 ">
                                <Image 
                                src={ambImage1} 
                                alt="image of a dish"
                                className=" aspect-square rounded object-cover " 
                                />
                            </div>

                            <div className=" w-1/2 sm:h-[500px] overflow-hidden ">
                            <Image 
                            src={ambImage2} 
                            alt="image of a dish"
                            className=" object-cover rounded  " 
                            />
                            </div>
                        </div>
                    </div>


                </section>

            </div>

        </>
    )
}