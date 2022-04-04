import { createSlice, current } from '@reduxjs/toolkit'


const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const generateId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: generateId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)
const anecdoteSlice = createSlice({
  name: 'anecdote',
  initialState,
  reducers: {
    createAnecdote(state, action) {
      const content = action.payload
      const newAnecdote = {
        content,
        votes: 0,
        id: generateId(),
      }
    },
    increaseVote(state, action) {
      // fixed vote function
      // TODO: Use https://redux.js.org/tutorials/fundamentals/part-8-modern-redux#immutable-updates-with-immer to fix the rest of reducer functions

      const id = action.payload;
      console.log("state:", current(state))
      console.log("action:", action)
      const votedAnecdoteIdx = state.findIndex((anecdote) => anecdote.id === id)
      console.log("votedAnecdoteIdx:", votedAnecdoteIdx)
      state[votedAnecdoteIdx].votes = state[votedAnecdoteIdx].votes + 1
    },
  }
})


const { actions, reducer } = anecdoteSlice
export const { increaseVote, createAnecdote } = actions;
export default reducer;