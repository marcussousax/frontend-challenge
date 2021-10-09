import styled, { css } from 'styled-components'

export const Li = styled.li<{ isEditing?: boolean }>`
  background: ${({ isEditing }) => (isEditing ? '#fff' : '#f4f4f4')};
  font-size: 14px;
  color: #848484;
  border-radius: 4px;
  line-height: calc(40px - 18px);
  display: flex;
  overflow: hidden;
  ${({ isEditing }) => isEditing && css``}
`

export const Spacer = styled.span`
  flex: 1;
`
