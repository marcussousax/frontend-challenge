import React from 'react'
import * as S from './styled'
import { ITodo } from './index'

const ListItem: React.FC<{
  item: ITodo
}> = ({ item }) => {
  return (
    <S.Li>
      {item.title} - {item.isCompleted ? 'Done' : 'Todo'}
    </S.Li>
  )
}

export default ListItem
