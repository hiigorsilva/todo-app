import { Trash2 } from "lucide-react"
import { Button } from "../Button"
import { InputText } from "../InputText"
import { Task } from "../Task"
import { TaskCount } from "../TaskCount"
import { TaskEmpty } from "../TaskEmpty"
import { useReducer, useState } from "react"
import { listReducer } from "@/reducers/listReducers"

export const TaskArea = () => {
  const [list, dispatch] = useReducer(listReducer, [])
  const [inputTask, setInputTask] = useState('')

  const handleAddTask = () => {
    if (inputTask.trim() === '') {
      // Toast.error
      return false
    }
    
    dispatch({
      type: 'ADD',
      payload: { text: inputTask.trim() }
    })
    setInputTask('')
  }

  const handleOnKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if(event.key === 'Enter') {
      handleAddTask()
      setInputTask('')
    }
  }

  const handleDoneTask = (id: number) => {
    dispatch({
      type: 'DONE',
      payload: { id }
    })
  }

  const handleDeleteTask = (id: number) => {
    dispatch({
      type: 'DELETE',
      payload: { id }
    })
  }

  const taskCompleted = list.filter(task => task.done).length

  return (
    <section className="w-full flex-1">
      <div className="max-w-screen-sm w-full space-y-8 mx-auto">
        <div className="w-full flex items-center gap-2 -mt-6">
          <InputText
            value={inputTask}
            onChange={(e) => setInputTask(e.target.value)}
            onKeyUp={(e) => handleOnKeyPress(e)}
            placeholder="Adicionar nova tarefa" 
          />
          <Button
            onClick={handleAddTask}
          >
            Enviar
          </Button>
        </div>

        <div className="w-full flex justify-between items-center">
          <TaskCount count={list.length} text="Tarefas criadas" />
          <TaskCount count={taskCompleted} text="Concluídas" />
        </div>

        <div className="w-full h-px bg-zinc-800" />

        <ul className="flex flex-col w-full space-y-2">
          {list?.map(task => (
            <Task.Root key={task.id} className={`${task.done && 'bg-zinc-800/30 border-zinc-50/5'}`}>
              <Task.Check 
                onChange={() => handleDoneTask(task.id)}
              />
              <Task.Text className={`${task.done && 'line-through text-zinc-500'}`}>
                {task.text}
              </Task.Text>
              <Button
              onClick={() => handleDeleteTask(task.id)}
                color="secondary"
                size="icon"
              >
                <Trash2 size={18} />
              </Button>
            </Task.Root>
          ))}
          
          {list.length === 0 &&  <TaskEmpty />}
        </ul>
      </div>
    </section>
  )
}