import React from 'react'
import styled from 'styled-components'

const STATUS = [{ label: 'Done' }, { label: 'Pending' }]

const Filter: React.FC = () => {
  return (
    <>
      {STATUS.map((item, index) => (
        <Button key={index}>{item.label}</Button>
      ))}
    </>
  )
}

const Button = styled.button`
  background: transparent;
  border: 1px solid #dbdbdb;
  border-radius: 16px;
  color: #848484;
  font-size: 14px;
  line-height: 1;
  padding: 8px 16px;
`

export default Filter
