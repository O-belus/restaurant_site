'use client'

import { Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbSeparator 
} from "@/components/ui/breadcrumb"
import { Slash } from "lucide-react"
import allDishes from "../../data/dishes.json"
import Menuitem from "../components/Menuitem"
import { useState } from "react"



type Dish = {
  id: number;
  image: {
    url: string;
    width: number;
    height: number;
  };
  name: string;
};

// Define the menu data type
type MenuData = {
  main_dishes: Dish[];
  soups: Dish[];
  desserts: Dish[];
  drinks: Dish[];
};

// Type assertion for imported JSON
const menuData = allDishes as MenuData;

// In your component
const Page = () => {

  const activeClass = " border-b text-sea_shell-300 border-sea_shell-300 text-2xl "
  const inactiveClass = ""

  const [currentMenu, setCurrentMenu] = useState<Dish[]>(menuData.main_dishes);

  function menuHandle(i:number) {
    const categories = Object.keys(menuData) as Array<keyof typeof allDishes>
    const selectedCategory = categories[i]
    setCurrentMenu(menuData[selectedCategory])
  }


  const itemList = currentMenu.map((item, index) => {
    const gridClass = `${
      index === 2 || index === 3 || index === 8
        ? " sm:col-span-4 sm:row-span-4 aspect-square  "
        : index === 0 || index === 1 || index === 5 || index === 6
          ? " sm:col-span-2 sm:row-span-2 aspect-square "
          : index === 7
            ? " sm:col-span-2 sm:row-span-4 sm:aspect-auto "
            : index === 4
              ? " sm:col-span-4 sm:row-span-2 sm:aspect-video  "
              : ""
    }`
    const positionClass = `${
      index === 5
        ? " sm:row-start-9 "
        : index === 6
          ? "sm:row-start-7"
          : index === 7
            ? "sm:row-start-7 sm:col-start-3"
            : ""
    }`
    
    return (
      <div  className={` col-span-2 aspect-square ${gridClass} ${positionClass} `}>

        <Menuitem 
        name={item.name}
        url={item.image.url}
        id={item.id.toString()}
        height={item.image.height}
        width={item.image.width}
        key={item.id}
        />

      </div>
    )
  })


  return (
    <>
                  <div id="menu page" className=" pt-24 font-manrope text-sea_shell-200 bg-sea_shell-100 w-full ">


                  <div id="breadcrumb" className="  max-w-[1800px] sm:mx-auto ml-8 sm:ml-16 mb-10 ">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/" className=" text-sea_shell-200 hover:text-sea_shell-300 ">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator>
                                <Slash/>
                            </BreadcrumbSeparator>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/Menu" className=" text-sea_shell-200 hover:text-sea_shell-300 ">Menu</BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>

                <div className=" flex flex-wrap gap-6 sm:gap-12 w-full max-w-[1800px] sm:mx-auto ml-8 sm:ml-16 sm:text-3xl ">
                  <button onClick={() => menuHandle(0)} className={currentMenu===allDishes.main_dishes? activeClass : inactiveClass}>Main dishes</button>
                  <button onClick={() => menuHandle(1)} className={currentMenu===allDishes.desserts? activeClass : inactiveClass}>Desserts</button>
                  <button onClick={() => menuHandle(2)} className={currentMenu===allDishes.soups? activeClass : inactiveClass}>Soups</button>
                  <button onClick={() => menuHandle(3)} className={currentMenu===allDishes.drinks? activeClass : inactiveClass}>Drinks</button>
                </div>


                <section className=" pb-24 sm:pb-40 w-full max-w-[1800px] mx-auto mt-8 sm:mt-14  overflow-hidden sm:px-32 ">


                  <div className=" inline-grid grid-cols-4 gap-4 px-4 sm:grid-cols-8  ">


                    {itemList}


                  </div>


                </section>


                  </div>
    </>
  )
}

export default Page