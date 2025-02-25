import React from 'react'
import styled from 'styled-components'
import { FaPlusCircle } from 'react-icons/fa'
import Filter from './Filter'
import { useStore } from '../../useTodoStore'
import ListItem from './Item'
import Button from '../Button'

export interface ITodo {
  _id: string
  title: string
  isCompleted: boolean
  createAt: string
}

const List = ({
  todos,
  filter,
  setFilter,
  searchState,
  setSearchState,
}: {
  todos: ITodo[]
  searchState: string
  setSearchState: React.Dispatch<React.SetStateAction<string>>
  filter: string
  setFilter: React.Dispatch<React.SetStateAction<string>>
}) => {
  return (
    <>
      <Filter
        filter={filter}
        setFilter={setFilter}
        searchState={searchState}
        setSearchState={setSearchState}
      />

      {filter && !todos.length && (
        <BlankStateMessage>
          There are no items marked as {filter.toLowerCase()}.&nbsp;
          <u style={{ cursor: 'pointer' }} onClick={() => setFilter('')}>
            Clear the filter here
          </u>
          &nbsp;to see all items.
        </BlankStateMessage>
      )}

      {searchState && !todos.length ? (
        <BlankStateMessage>
          Your search found no results.&nbsp;
          <u style={{ cursor: 'pointer' }} onClick={() => setSearchState('')}>
            Clean the search here
          </u>
          &nbsp;to see all items.
        </BlankStateMessage>
      ) : (
        <>
          {!searchState && !filter && <AddItem />}
          <div style={{ overflow: 'auto' }}>
            <Ul>
              {todos.map((item: ITodo) => (
                <ListItem key={item._id} item={item} />
              ))}
            </Ul>
          </div>
        </>
      )}
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

const BlankStateMessage = styled.p`
  font-size: 14px;
  color: #848484;
  margin: 8px;
`

const AddItem = () => {
  const [todoValue, setTodoValue] = React.useState('')

  // @ts-ignore
  const { addTodo } = useStore((state) => state)

  const handleSubmit = () => {
    addTodo(todoValue)
    setTodoValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <AddItemWrapper>
        <AddItemInput
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
          type={'text'}
          placeholder={'Add new item...'}
        />
        <Button disabled={!todoValue} variant={'add'}>
          <FaPlusCircle size={18} color={'#fff'} />
        </Button>
      </AddItemWrapper>
    </form>
  )
}
const AddItemWrapper = styled.div`
  display: flex;
  margin-bottom: 16px;
`
const AddItemInput = styled.input`
  flex: 1;
  padding: 8px 16px;
  background: #f4f4f4;
  border: 1px solid #dbdbdb;
  border-radius: 4px 0 0 4px;

  line-height: calc(40px - 18px);

  & + button {
    opacity: 0.5;
    border-radius: 0 4px 4px 0;
  }

  &:focus {
    background: #fff;
    outline: none;

    & + button {
      opacity: 1;
    }
  }
`

export default List
