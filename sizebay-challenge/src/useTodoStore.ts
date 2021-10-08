import create from 'zustand'
import { uid } from 'react-uid'
import { ITodo } from './components/List'

export interface ITodoStore {
  addTodo: (todoItem: string) => void
  removeTodo: () => null
  todos: ITodo[]
}

export const useStore = create(
  (set): ITodoStore => ({
    addTodo: (todoItem: string) => {
      debugger
      return set((state: ITodoStore) => ({
        todos: [
          ...state.todos,
          {
            title: todoItem,
            _id: uid(`${todoItem}-${state.todos.length}`),
            isCompleted: false,
            createdAt: new Date().getTime(),
          },
        ],
      }))
    },
    removeTodo: () => null,
    todos: [],
  }),
)
