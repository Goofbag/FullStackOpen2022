import { configureStore, createStore } from '@reduxjs/toolkit'
import anecdoteReducer from './reducers/anecdoteSlice'

import notificationReducer from './reducers/notificationReducer'


const reducer = configureStore({
    reducer: {
      anecdotes: anecdoteSlice,
      notification: notificationReducer
    }
  })

const store = createStore(reducer)

export default store