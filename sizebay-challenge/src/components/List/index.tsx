import React from 'react'
import styled from 'styled-components'
import Filter from './Filter'
import { useStore } from '../../useTodoStore'
import * as S from './styled'
import ListItem from './Item'

export interface ITodo {
  _id: string
  title: string
  isCompleted: boolean
  createAt: string
}

const List = () => {
  // @ts-ignore
  const todos = useStore((state) => state.todos)
  debugger
  return (
    <>
      <Filter />
      <Ul>
        <S.Li style={{ padding: 0 }}>
          <AddItem />
        </S.Li>
        {todos.map((item: ITodo) => (
          <ListItem key={item._id} item={item} />
        ))}
      </Ul>
    </>
  )
}
const Ul = styled.ul`
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0;
`

const AddItem = () => {
  const [todoValue, setTodoValue] = React.useState('')

  // @ts-ignore
  const { addTodo } = useStore((state) => state)

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()

    addTodo(todoValue)
    setTodoValue('')
  }
  debugger
  return (
    <>
      <AddItemInput
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
        type={'text'}
        placeholder={'Add new item...'}
      />
      <button onClick={handleSubmit} type={'submit'}>
        +
      </button>
    </>
  )
}
const AddItemInput = styled.input`
  flex: 1;
  padding: 8px 16px;
  background: #f4f4f4;
  border: none;
  overflow: hidden;
  border-radius: 4px;
  line-height: calc(40px - 18px);
`

export default List
