import React from 'react'
import { FaMinusCircle, FaCheckCircle } from 'react-icons/fa'
import ReactTooltip from 'react-tooltip'
import * as S from './styled'
import { ITodo } from './index'
import { useStore } from '../../useTodoStore'
import Button from '../Button'
import styled from 'styled-components'

const ListItem: React.FC<{
  item: ITodo
}> = ({ item }) => {
  const [isEditing, setIsEditing] = React.useState(false)

  const { removeTodo, toggleDone } = useStore((state) => state)

  return (
    <>
      <S.Li
        onClick={() => setIsEditing(!isEditing)}
        isCompleted={item.isCompleted}
        isEditing={isEditing}
      >
        <ListItemTitle data-tip data-for="title">
          {!isEditing && (
            <ReactTooltip id="title" type="dark">
              Edit task
            </ReactTooltip>
          )}

          {item.title}
        </ListItemTitle>

        {isEditing && (
          <>
            <Button variant="remove" onClick={() => removeTodo(item)}>
              <FaMinusCircle size={18} color={'#fff'} />
            </Button>
            <Button
              variant="complete"
              disabled={item.isCompleted}
              onClick={() => toggleDone(item)}
            >
              <FaCheckCircle size={18} color={'#fff'} />
            </Button>
          </>
        )}
      </S.Li>
    </>
  )
}

const ListItemTitle = styled.span`
  border: 1px solid #dbdbdb;
  padding: 8px 16px;
  flex: 1;
  cursor: pointer;
`

export default ListItem
