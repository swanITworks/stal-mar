import React, { useState, useEffect } from 'react'

const Counter = (): JSX.Element => {
  const max = 10
  const [counterValue, setCounterValue] = useState(0)

  useEffect(() => {
    let myTimer

    if (counterValue !== 0 && counterValue < max) {
      myTimer = setTimeout(
        () => setCounterValue(counterValue => counterValue + 1),
        1000
      )
    }
    return () => {
      clearTimeout(myTimer)
    }
  }, [counterValue])

  return (
    <div
      onMouseEnter={() => setCounterValue(counterValue => counterValue + 1)}
      style={{ width: '100px' }}
    >
      wartosc: {counterValue}
    </div>
  )
}

export default Counter
