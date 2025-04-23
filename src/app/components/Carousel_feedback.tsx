'use client'

import Button from "./Button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    
  } from "@/components/ui/carousel"
import { type CarouselApi } from "@/components/ui/carousel"
import Image from "next/image";
import { useState, useEffect } from "react";
import feedback from "../../data/feedback_data.json"
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";
import Autoplay from 'embla-carousel-autoplay'
import type { EmblaOptionsType } from 'embla-carousel'


export default function Carousel_feedback() {

    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    
    


    useEffect(() => {
        if (!api) {
          return
        }
     
        setCurrent(api.selectedScrollSnap())
     
        api.on("select", () => {
          setCurrent(api.selectedScrollSnap())
        })
      }, [api])

  return (
    <div id="carousel" className=" overflow-hidden sm:overflow-visible flex justify-center relative max-w-[1800px] text-sea_shell-200 " >
      
        <Carousel  setApi={setApi} opts={{
          align: "start",
          loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className=" w-full  "
          >
            <div className=" flex gap-y-3 ">
              <div className=" flex right-0 justify-end absolute -top-14 ">
                <Button className=" inline border-none pr-1  " onClick={()=>api?.scrollTo(current-1)}><HiArrowLongLeft className=" text-4xl inline-block "/></Button>
                <Button className=" inline border-none pl-1 " onClick={()=>api?.scrollTo(current+1)}><HiArrowLongRight className=" text-4xl inline-block "/></Button>
              </div>
            </div>
            <CarouselContent className=" sm:gap-1 gap-2 ">

              {feedback.map((item) => (

                <CarouselItem key={item.id}  className=" sm:basis-1/3  ">
                  <div  className=" bg-sea_shell-100 h-[400px]  sm:w-80 p-5  ">
                    <Image 
                    src={item.image.url} 
                    alt="feedback photo" 
                    height={item.image.height}
                    width={item.image.width}
                    placeholder="blur"
                    blurDataURL={item.image.url}
                    className=" rounded mb-2 aspect-video object-cover "
                    /> 
                    <h2 className=" text-xl mb-2 ">{item.name}<span> ⭐⭐⭐⭐⭐</span></h2>
                      <p className=" text-sm ">{item.feedback}</p>
                  </div>
                </CarouselItem>
              ))}



              
            </CarouselContent>
            <div className=" flex gap-y-3 ">
              <div className=" flex right-0 justify-end absolute -top-14 ">
                <Button className=" inline border-none pr-1  " onClick={()=>api?.scrollTo(current-1)}><HiArrowLongLeft className=" text-4xl inline-block "/></Button>
                <Button className=" inline border-none pl-1 " onClick={()=>api?.scrollTo(current+1)}><HiArrowLongRight className=" text-4xl inline-block "/></Button>
              </div>
            </div>
        </Carousel>

    </div>
  )
}

