import React from 'react'
import styled from 'styled-components'
import { useStore } from '../useTodoStore'
import { ITodo } from './List'

const ProgressBar = () => {
  // @ts-ignore
  const todos = useStore((state) => state.todos)
  const completedTodos = todos.filter((todo: ITodo) => todo.isCompleted)
  return <Progress value={completedTodos.length} max={todos.length} />
}

const Progress = styled.progress`
  width: 100%;
  height: 24px;
  color: #5de290;
  appearance: none;
  margin: 24px 0;

  &::-webkit-progress-bar {
    background-color: #e4e4e4;
    border-radius: 4px;
  }

  &::-webkit-progress-value {
    background: #5de290;
    border-radius: 4px 0 0 4px;
  }

  &::-moz-progress-bar {
    background: #5de290;
    border-radius: 4px;
  }
`

export default ProgressBar
