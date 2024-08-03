import { ComponentProps, ReactNode } from "react"
import { VariantProps, tv } from "tailwind-variants"

const buttonVariants = tv({
  base: 'font-medium text-sm flex justify-center items-center gap-2 cursor-pointer transition-all',
  variants: {
    color: {
      primary: 'bg-sky-600 text-zinc-50 shadow-md shadow-zinc-950/20 hover:bg-sky-700 focus:outline focus:outline-sky-900',
      secondary: 'bg-zinc-800 text-zinc-50 hover:bg-red-500',
      tertiary: 'bg-zinc-50/5 hover:bg-zinc-50/10'
    },
    size: {
      icon: 'w-fit h-fit p-1 rounded bg-zinc-700',
      sm: 'w-fit h-fit p-2 rounded-lg',
      md: 'w-fit px-4 h-12 rounded-lg',
      full: 'w-full px-4 h-12 rounded-lg'
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'md',
  }
})

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof buttonVariants> & {
  children: ReactNode
}

export const Button = ({ color, size, children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={buttonVariants({ color, size })}
    >{children}</button>
  )
}