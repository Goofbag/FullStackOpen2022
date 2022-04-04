import { configureStore, createStore } from '@reduxjs/toolkit'
import anecdoteReducer from './reducers/anecdoteReducer'

import notificationReducer from './reducers/notificationReducer'


const reducer = configureStore({
    reducer: {
      anecdotes: anecdoteReducer,
      notification: notificationReducer
    }
  })

const store = createStore(reducer)

export default store