import React from 'react'
import styled from 'styled-components'
import Filter from '../Filter'
import SearchInput from '../Search'
import { media } from '../../styles'

const Controls: React.FC = () => {
  return (
    <Wrapper>
      <Filter />
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
const Spacer = styled.span`
  flex: 1;
`

export default Controls
