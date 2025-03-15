import Image from "next/image"
import imgSrc from "../../../public/pexels-catscoming-1907223.jpg"
import { twMerge } from "tailwind-merge"

type MenuitemProps = {
    name?: string
}

function Menuitem ({name}:MenuitemProps){
  return (
    <div className="relative w-full h-full ">
        <Image 
        src={imgSrc}
        alt="image of a dish"
        className=" rounded object-cover h-full w-full  "
        />
        <div className=" text-sea_shell-200 bg-sea_shell-100/60 w-full h-1/5 flex items-center pl-8 bottom-0 left-1/2 transform -translate-x-1/2  absolute ">
            <h3 className=" font-bold text-lg font-manrope text-center ">
                {name}
            </h3>
        </div>
    </div>
  )
}

export default Menuitem