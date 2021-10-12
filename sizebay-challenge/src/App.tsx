import React from 'react'

import Modal from './components/Modal'
import Header from './components/Header'
import List, { ITodo } from './components/List'
import ProgressBar from './components/ProgressBar'
import { useStore } from './useTodoStore'
import styled from 'styled-components'

function App() {
  // @ts-ignore
  const todos = useStore((state) => state.todos)
  const [filter, setFilter] = React.useState('')
  const [search, setSearch] = React.useState('')

  let filteredTodos: ITodo[]
  if (filter === 'Done') {
    filteredTodos = todos.filter((todo: Partial<ITodo>) => todo.isCompleted)
  } else if (filter === 'Pending') {
    filteredTodos = todos.filter((todo: Partial<ITodo>) => !todo.isCompleted)
  } else {
    filteredTodos = todos
  }

  React.useEffect(() => {
    debugger
    filteredTodos.filter((x) => x.title.includes(search))
  }, [search, filteredTodos])

  debugger
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
