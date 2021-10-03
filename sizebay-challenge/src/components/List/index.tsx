import React from 'react'
import styled from 'styled-components'
import Controls from './Controls'

const ITEMS = [
  {
    label: 'Drive a Cadillac across the Irish Sea',
    status: 'todo',
  },
  {
    label: 'Sell an elevator to Geronimo',
    status: 'todo',
  },
]

const List = () => {
  return (
    <>
      <Controls />
      <Ul>
        {ITEMS.map((item) => (
          <ListItem item={item} />
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

const ListItem: React.FC<{
  item: { label: string; status: string }
}> = ({ item }) => {
  return (
    <Li>
      {item.label} - {item.status}
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
`

export default List
