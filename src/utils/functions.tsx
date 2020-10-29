const changeIndexHandler = (state, type, length) => {
  if (type === 'plus') {
    if (state < length - 1) {
      return state + 1
    } else return 0
  }
  if (type === 'minus') {
    if (state !== 0) {
      return state - 1
    } else return length - 1
  }
}

export default changeIndexHandler
