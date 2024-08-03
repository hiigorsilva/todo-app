type TaskCountProps = {
  text: string
  count: number
}

export const TaskCount = ({ text, count }: TaskCountProps) => {
  return (
    <div className="flex items-center gap-1 text-sm text-zinc-200">
      {text}
      <span className="block w-fit px-1.5 py-0 rounded-lg bg-zinc-800">{count}</span>
    </div>
  )
}