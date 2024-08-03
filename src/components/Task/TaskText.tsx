import { ReactNode } from "react"

type TaskTextProps = {
  children: ReactNode
}

export const TaskText = ({ children }: TaskTextProps) => {
  return (
    <p 
      className="flex-1 text-ellipsis truncate line-clamp-3"
    >{children}</p>
  )
}