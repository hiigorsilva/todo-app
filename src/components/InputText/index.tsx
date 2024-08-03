import { ComponentProps } from "react"

interface InputTextProps extends ComponentProps<'input'> {
  placeholder: string
}

export const InputText = ({ placeholder, ...props }: InputTextProps) => {

  return (
    <input
      {...props}
      className={`w-full h-12 text-zinc-100 px-4 rounded-lg bg-zinc-800 shadow-md shadow-zinc-950/20 focus:outline focus:outline-sky-500 placeholder:text-zinc-500`}
      type="text"
      placeholder={placeholder}
    />
  )
}