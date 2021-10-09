import React from 'react'
import styled from 'styled-components'
import { FaPlusCircle } from 'react-icons/fa'
import Filter from './Filter'
import { useStore } from '../../useTodoStore'
import * as S from './styled'
import ListItem from './Item'
import Button from '../Button'

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

  const handleSubmit = () => {
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
      <Button variant={'add'} onClick={handleSubmit}>
        <FaPlusCircle size={18} color={'#fff'} />
      </Button>
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

  & + button {
    opacity: 0.5;
  }
  &:focus {
    background: #fff;

    & + button {
      opacity: 1;
    }
  }
`

export default List
