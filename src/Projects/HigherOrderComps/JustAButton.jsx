import React from 'react'
import withCounter from './withCounter'

const JustAButton = ({count, incrementCount}) => {
  return (
    <button onClick={incrementCount}>Clicked {count} times</button>
  )
}

const JustAButtonWithCounter = withCounter(JustAButton, 10)

export default JustAButtonWithCounter
