import { Trash2 } from "lucide-react"
import { Button } from "../Button"
import { InputText } from "../InputText"
import { Task } from "../Task"
import { TaskCount } from "../TaskCount"
import { TaskEmpty } from "../TaskEmpty"

export const TaskArea = () => {
  return (
    <section className="w-full flex-1">
      <div className="max-w-screen-sm w-full space-y-8 mx-auto">
        <div className="w-full flex items-center gap-2 -mt-6">
          <InputText
            placeholder="Adicionar nova tarefa" 
          />
          <Button>
            Enviar
          </Button>
        </div>

        <div className="w-full flex justify-between items-center">
          <TaskCount text="Tarefas criadas" />
          <TaskCount text="Concluídas" />
        </div>

        <div className="w-full h-px bg-zinc-800" />

        <ul className="flex flex-col w-full space-y-2">
          {/* <TaskEmpty /> */}

          <Task.Root>
            <Task.Check />
            <Task.Text>
              Tarefa
            </Task.Text>
            <Button color="secondary" size="icon">
              <Trash2 size={18} />
            </Button>
          </Task.Root>
        </ul>
      </div>
    </section>
  )
}