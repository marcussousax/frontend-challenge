import React from 'react'
import styled from 'styled-components'
import { media } from '../styles'
import { useDebounce } from '../useDebounce'

// @ts-ignore
const SearchInput = ({ searchState, setSearchState }) => {
  const delayedSearch = useDebounce(searchState, 500)
  // @ts-ignore

  React.useEffect(() => {
    debugger
    if (searchState !== null) {
      setSearchState(delayedSearch)
    }
  }, [delayedSearch])
  debugger
  return (
    <Input
      placeholder="Search items"
      value={searchState}
      onChange={(e) => setSearchState(e.target.value)}
      type="search"
    />
  )
}

const Input = styled.input`
  background: #ffffff padding-box;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  line-height: calc(40px - 18px);
  padding: 8px 16px;
  ${media.maxXsmall} {
    order: -2;
    width: 100%;
  }
`

export default SearchInput
