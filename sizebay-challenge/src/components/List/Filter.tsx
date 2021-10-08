import React from 'react'
import styled from 'styled-components'
import SearchInput from '../Search'
import { media } from '../../styles'

const STATUS = [{ label: 'Done' }, { label: 'Pending' }]

const Filter: React.FC = () => {
  return (
    <Wrapper>
      {STATUS.map((item, index) => (
        <Button key={index}>{item.label}</Button>
      ))}
      <Spacer />
      <SearchInput />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  flex-flow: wrap;
  margin: 16px 0;
  ${media.maxXsmall} {
    flex-direction: row-reverse;
  }
`
const Button = styled.button`
  background: transparent;
  border: 1px solid #dbdbdb;
  border-radius: 16px;
  color: #848484;
  font-size: 14px;
  line-height: 1;
  padding: 8px 16px;
`

const Spacer = styled.span`
  flex: 1;
`

export default Filter
