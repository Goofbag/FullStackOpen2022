import { useSelector ,useDispatch } from 'react-redux'
import {store} from '../index';
import { increaseVote } from '../reducers/anecdoteSlice'

const ListAnecdotes = (props) => {
  const anecdotes = useSelector(state => state)
  console.log("anecdotes:", anecdotes)
  const dispatch = useDispatch()
  const vote = (id) => {
    console.log('vote', id)
    console.log("store.getState():", store.getState())
    const state = store.getState();
    dispatch(increaseVote(id))
  }

  const sortedAnecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes);

  return (
    <div>
      {sortedAnecdotes.length > 0  && sortedAnecdotes.map(anecdote =>
        <div key={anecdote?.id}>
          <div>
            {anecdote?.content ? anecdote.content : 'missing content...'}
          </div>
          <div>
            has {anecdote?.votes >= 0 ? anecdote.votes : 'no data...'}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )

}

export default ListAnecdotes