import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteSlice'
import {store} from "../index";

const NewNote = (props) => {
  const dispatch = useDispatch()

  const newAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
      console.log("content:", content)
    dispatch(createAnecdote(content))
  }

  return (
    <div>
      <h2>Add new anecdote</h2>
      <form onSubmit={newAnecdote}>
        <input name='anecdote' />
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default NewNote