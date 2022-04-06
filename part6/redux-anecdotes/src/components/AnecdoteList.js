import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increaseVote } from '../reducers/anecdoteReducer'
import { voteMessage, hideMessage } from '../reducers/notificationReducer'
import Filter from './Filter'

const AnecdoteList = () => {

  const anecdotes = useSelector(state => state.anecdotes
    .filter(anecdote => anecdote.content.toLowerCase().includes(state.filter.toLowerCase()))
    .sort((a,b) => b.votes - a.votes))
    
  const dispatch = useDispatch()


  const vote = (id) => {
    const anecdote = anecdotes.find(anecdote => anecdote.id === id)
    dispatch(increaseVote(id))
    dispatch(voteMessage(anecdote.content))

    setTimeout(() => {
      dispatch(hideMessage())
    }, 5000)
  }

  return (
    <div>
      <Filter />
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )

}

export default AnecdoteList