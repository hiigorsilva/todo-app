import { NotepadText } from "lucide-react"

export const TaskEmpty = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center space-y-4">
      <NotepadText
        size={48}
        strokeWidth={1.5}
        className="text-zinc-700"
      />
      <p className="text-sm text-zinc-500 text-center">
        <span className="font-medium block">
          Você ainda não tem nenhuma tarefa cadastrada.
        </span>
        Crie novas tarefas e organize sua rotina.
      </p>
    </div>
  )
}