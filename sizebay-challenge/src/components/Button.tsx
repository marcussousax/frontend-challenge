import React from 'react'
import styled, { css } from 'styled-components'

interface IButton {
  variant: 'add' | 'remove' | 'complete' | undefined
  onClick: () => void
  disabled?: boolean
}

const Button: React.FC<IButton> = (props) => {
  return (
    <StyledButton
      onClick={props.onClick}
      disabled={props.disabled}
      variant={props.variant}
    >
      {props.children}
    </StyledButton>
  )
}

const theme = {
  add: '#4DA6B3',
  remove: '#E34F4F',
  complete: '#5DE290',
}

const StyledButton = styled.button<Partial<IButton>>`
  border: none;
  width: 44px;
  background: #4da6b3 0 0 no-repeat padding-box;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ variant }) => {
    return variant
      ? css`
          background: ${theme[variant]};
        `
      : '#ccc'
  }};

  > svg {
    color: #fff;
  }
`

export default Button
