import { combineReducers, createStore } from '@reduxjs/toolkit'
import anecdoteReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import notificationReducer from './reducers/notificationReducer'


const reducer = combineReducers({

      anecdotes: anecdoteReducer,
      notification: notificationReducer,
      filter: filterReducer,
  })

export const store = createStore(reducer)
