'use client'

import { ButtonHTMLAttributes, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export default function Button ({children, className, ...props}:ButtonProps){
  return (
    <button  className={twMerge(" text-sea_shell-200 h-10 rounded-md border-sea_shell-200 border-2 px-10 py-0 hidden sm:block hover:text-sea_shell-300 ", className)} {...props}>
        {children}
    </button>
  )
}
