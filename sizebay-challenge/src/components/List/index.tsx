import React from 'react'
import styled from 'styled-components'
import Controls from './Controls'
import { useStore } from '../../useTodoStore'

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
      <Controls />
      <Ul>
        <Li style={{ padding: 0 }}>
          <AddItem />
        </Li>
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

const ListItem: React.FC<{
  item: ITodo
}> = ({ item }) => {
  return (
    <Li>
      {item.title} - {item.isCompleted ? 'Done' : 'Todo'}
    </Li>
  )
}
const Li = styled.li`
  background: #f4f4f4;
  border: 1px solid #dbdbdb;
  font-size: 14px;
  color: #848484;
  border-radius: 4px;
  line-height: calc(40px - 18px);
  padding: 8px 16px;
  display: flex;
`

export default List
