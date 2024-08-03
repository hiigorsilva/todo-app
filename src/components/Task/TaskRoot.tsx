import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface TaskRootProps extends HTMLAttributes<HTMLLIElement> {
  children: ReactNode
}

export const TaskRoot = ({ children, className }: TaskRootProps) => {
  return (
    <li className={twMerge("flex justify-between items-center gap-4 px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-50/10 shadow-md shadow-zinc-950/20", className)}>
      {children}
    </li>
  )
}