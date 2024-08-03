import { ComponentProps } from "react"

interface TaskCheckProps extends ComponentProps<'input'> {}

export const TaskCheck = ({ ...props}: TaskCheckProps) => {

  return (
    <input
      {...props}
      type="checkbox"
      className="size-3.5 accent-sky-600 cursor-pointer"
    />
  )
}