import { Task } from "@/types/Task"

type AddAction = {
  type: 'ADD'
  payload: { text: string }
}

type ToggleDoneAction = {
  type: 'DONE'
  payload: { id: number }
}

type DeleteAction = {
  type: 'DELETE'
  payload: { id: number }
}

type ListActions = AddAction | ToggleDoneAction | DeleteAction

export const listReducer = (list: Task[], action: ListActions) => {
  switch (action.type) {
    case "ADD":
      return [...list, {
        id: Date.now(),
        text: action.payload.text,
        done: false
      }]

    case "DONE":
      return list.map(item => {
        if(item.id === action.payload.id) {
          return { ...item, done: !item.done }
        }
        return item
      })

    case "DELETE":
      return list.filter(item => item.id !== action.payload.id)
    
    default:
      return list
  }
}