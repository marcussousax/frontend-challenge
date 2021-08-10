import React from 'react'
import styled from 'styled-components'
import { media } from '../styles'

function Header() {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  const date = new Date()

  return (
    <Header.Wrapper>
      <h1 className="headline-1">
        <p className="date">
          <span className="day">{date.getDate()}</span>
          <span className="month">{months[date.getMonth()]}</span>
          <span className="year">{date.getFullYear()}</span>
        </p>
        <p className="weekday">Wednesday</p>
      </h1>
    </Header.Wrapper>
  )
}

Header.Wrapper = styled.header`
  .headline-1 {
    color: #848484;
    flex: 1;

    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
    margin-bottom: 0;

    ${media.xsmall} {
      margin: 0;
    }

    .date {
      display: grid;
      align-items: center;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 0 5px;
      grid-template-areas:
        'day month'
        'day year';
      margin: 0;
      line-height: 24px;
    }
  }

  .day {
    grid-area: day;
    font-weight: 500;
    font-size: 60px;
  }

  .month {
    grid-area: month;
    font-weight: 400;
    font-size: 24px;
    text-align: left;
  }

  .year {
    grid-area: year;
    font-weight: 300;
    font-size: 24px;
    text-align: left;
  }

  .weekday {
    font-size: 24px;
    font-weight: 400;
    margin: 0;
  }
`

export default Header
