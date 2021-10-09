import React from 'react'
import { FaMinusCircle, FaCheckCircle } from 'react-icons/fa'
import * as S from './styled'
import { ITodo } from './index'
import { useStore } from '../../useTodoStore'
import Button from '../Button'
import styled from 'styled-components'

const ListItem: React.FC<{
  item: ITodo
}> = ({ item }) => {
  const [isEditing, setIsEditing] = React.useState(false)

  // @ts-ignore
  const { removeTodo, toggleDone } = useStore((state) => state)

  return (
    <S.Li onClick={() => setIsEditing(!isEditing)} isEditing={isEditing}>
      <ListItemTitle>
        {item.title} - {item.isCompleted ? 'Done' : 'Todo'}
      </ListItemTitle>
      {isEditing && (
        <>
          <Button variant="remove" onClick={() => removeTodo(item)}>
            <FaMinusCircle size={18} color={'#fff'} />
          </Button>
          <Button variant="complete" onClick={() => toggleDone(item)}>
            <FaCheckCircle size={18} color={'#fff'} />
          </Button>
        </>
      )}
    </S.Li>
  )
}

const ListItemTitle = styled.span`
  border: 1px solid #dbdbdb;
  padding: 8px 16px;
  flex: 1;
`

export default ListItem
