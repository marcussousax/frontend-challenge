import create from 'zustand'
import { uid } from 'react-uid'
import { ITodo } from './components/List'

export interface ITodoStore {
  addTodo: (todoItem: string) => void
  removeTodo: (todoItem: string) => void
  toggleDone: (todoItem: string) => void
  todos: ITodo[]
}

export const useStore = create(
  (set): ITodoStore => ({
    addTodo: (todoItem: string) =>
      set((state: ITodoStore) => ({
        todos: [
          ...state.todos,
          {
            title: todoItem,
            _id: uid(`${todoItem}-${state.todos.length}`),
            isCompleted: false,
            createdAt: new Date().getTime(),
          },
        ],
      })),
    removeTodo: (todoItem: string) =>
      set((state: ITodoStore) => ({
        // @ts-ignore
        todos: [...state.todos.filter((todo) => todo._id !== todoItem._id)],
      })),
    toggleDone: (todoItem: string) => {
      set((state: ITodoStore) => ({
        todos: state.todos.map((todo) =>
          // @ts-ignore
          todo._id === todoItem._id ? { ...todo, isCompleted: true } : todo,
        ),
      }))
    },
    todos: [],
  }),
)
