import React from 'react'

import Modal from './components/Modal'
import Header from './components/Header'
import List, { ITodo } from './components/List'
import ProgressBar from './components/ProgressBar'
import { useStore } from './useTodoStore'

function App() {
  const todos = useStore((state) => state.todos)
  const [filter, setFilter] = React.useState('')
  const [search, setSearch] = React.useState('')

  let filteredTodos: ITodo[]
  switch (filter) {
    case 'Done':
      filteredTodos = todos.filter((todo: Partial<ITodo>) => todo.isCompleted)
      break
    case 'Pending':
      filteredTodos = todos.filter((todo: Partial<ITodo>) => !todo.isCompleted)
      break
    default:
      filteredTodos = todos
  }

  if (search) {
    filteredTodos = filteredTodos.filter((x) => x.title.includes(search))
  }

  return (
    <Modal>
      <Header />
      <ProgressBar />
      <List
        todos={filteredTodos}
        filter={filter}
        setFilter={setFilter}
        searchState={search}
        setSearchState={setSearch}
      />
    </Modal>
  )
}

export default App
