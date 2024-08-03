import { ReactNode } from "react"

type TaskRootProps = {
  children: ReactNode
}

export const TaskRoot = ({ children }: TaskRootProps) => {
  return (
    <li className="flex justify-between items-center gap-4 px-4 py-3 rounded-lg bg-zinc-800 shadow-md shadow-zinc-950/20">
      {children}
    </li>
  )
}