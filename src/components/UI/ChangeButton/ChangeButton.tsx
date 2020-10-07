import React from 'react'

const ChangeButton = ({ type, click }): JSX.Element => {
  switch (type) {
    case 'right':
      return <button onClick={click}>right</button>
    case 'left':
      return <button onClick={click}>left</button>
  }
}

export default ChangeButton
