import { Copy } from "lucide-react"

import  Button from "../components/Button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { the_night_watch } from "../layout"



export default function DialogCloseButton() {
  return (
    <Dialog>
        <DialogTrigger asChild>
            <Button className="">Book A table</Button>
        </DialogTrigger>
        <DialogContent className=" bg-sea_shell-100 ">
            <DialogHeader className=" mt-10 ">
            <DialogTitle className={` mb-1 text-4xl sm:text-5xl  text-center text-sea_shell-200 ${the_night_watch.className} `}>BOOK A TABLE</DialogTitle>
            <DialogDescription className=" text-sea_shell-200 font-manrope text-center ">
                Write your name and phone number and we will call you back.
            </DialogDescription>
            </DialogHeader>
            <div>
                <Input className=" bg-inherit border-b-2 rounded-none border-l-0 border-t-0 border-r-0 placeholder:text-sea_shell-200 mb-4 "
                placeholder="Your name"
                />

                <Input className=" bg-inherit border-b-2 border-l-0 rounded-none mb-4 border-t-0 border-r-0 placeholder:text-sea_shell-200 "
                placeholder="Your name"
                />

                <Input className=" bg-inherit border-b-2 border-l-0 border-t-0 rounded-none mb-4 border-r-0 placeholder:text-sea_shell-200 "
                placeholder="Your name"
                />
                <Button type="submit"  className={` mx-auto mt-8  `}>Submit</Button>
            </div>
        </DialogContent>
        </Dialog>

  )
}
