import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { saveMessage, hideMessage } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const newAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    console.log("content:", content)
    dispatch(createAnecdote(content))
    dispatch(saveMessage(content))

    setTimeout(() => {
      dispatch(hideMessage())
    }, 5000)
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

export default AnecdoteForm