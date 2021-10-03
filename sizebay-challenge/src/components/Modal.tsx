import React from 'react'
import styled from 'styled-components'
import { media } from '../styles'

const Modal: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  &:before {
    content: ' ';
    background-color: #555;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
  }

  padding: 16px;
  min-height: calc(100vh - 32px);

  ${media.xsmall} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
  }
`

const CONTENT_PADDING = 60
const Content = styled.div`
  background-color: #fff;
  border-radius: 4px;
  padding: 5vw;
  max-width: calc(800px - ${CONTENT_PADDING * 2}px);

  ${media.xsmall} {
    width: 65vw;
    padding: ${CONTENT_PADDING}px;
  }
`

export default Modal
