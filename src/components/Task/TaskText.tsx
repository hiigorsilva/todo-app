import { HTMLAttributes, ReactNode } from "react"
import { twMerge } from "tailwind-merge";

interface TaskTextProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export const TaskText = ({ children, className }: TaskTextProps) => {
  return (
    <p className={twMerge("flex-1 flex-wrap line-clamp-3 overflow-hidden text-ellipsis", className)}
    >{children}</p>
  )
}