import React from 'react'
import styled, { css } from 'styled-components'
import { FaCheck } from 'react-icons/fa'
import SearchInput from '../Search'
import { media } from '../../styles'

const STATUS = [{ label: 'Done' }, { label: 'Pending' }]

const Filter: React.FC<{
  searchState: any
  setSearchState: any
  filter: any
  setFilter: any
}> = (props) => {
  const handleClick = (item: { label: string }) => {
    if (props.filter === item.label) {
      props.setFilter('')
    } else {
      props.setFilter(item.label)
    }
  }
  return (
    <Wrapper>
      {STATUS.map((item, index) => (
        <Button
          key={index}
          selected={props.filter === item.label}
          onClick={() => handleClick(item)}
        >
          {props.filter === item.label && <FaCheck />} {item.label}
        </Button>
      ))}
      <Spacer />
      <SearchInput
        searchState={props.searchState}
        setSearchState={props.setSearchState}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  flex-flow: wrap;
  margin: 16px 0;

  ${media.maxXsmall} {
    flex-direction: row-reverse;
  }
`
const Button = styled.button<{ selected: any }>`
  border-radius: 16px;
  font-size: 14px;
  line-height: 1;
  padding: 8px 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  ${({ selected }) =>
    selected
      ? css`
          color: #4da6b3;
          border: 1px solid #4da6b3;
          background-color: #f7f7f8;
        `
      : css`
          color: #848484;
          border: 1px solid #dbdbdb;
          background: transparent;
        `}
`

const Spacer = styled.span`
  flex: 1;
`

export default Filter
