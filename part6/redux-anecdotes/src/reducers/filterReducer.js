const filterState = ''

const filterReducer = (state = filterState, action) => {
  switch (action.type) {
    case 'SET_FILTER': return action.data

    default: return state
  }
}

export const filterChange = (value) => {
  return {
    type: 'SET_FILTER',
    data: value,
  }
}

export default filterReducer