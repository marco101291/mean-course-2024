import React from 'react'

import Wrapper from '../assets/wrappers/StatItem'

const StatItem = ({count, title, icon, color, bcg}) => {
  return (
    <div>
      <Wrapper color={color} bcg={bcg}>
        <header>
            <span className="count">{count}</span>
            <span className="count">{icon}</span>
        </header>
        <h5 className="title">{title}</h5>
      </Wrapper>
    </div>
  )
}

export default StatItem
