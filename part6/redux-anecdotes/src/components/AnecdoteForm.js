import { createAnecdote } from '../reducers/anecdoteReducer'
import { connect } from 'react-redux'
import { saveMessage, hideMessage } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {


  const newAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    console.log("content:", content)
    props.createAnecdote(content)
    props.saveMessage(content)

    setTimeout(() => {
      props.hideMessage()
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


export default connect(null, {createAnecdote, saveMessage, hideMessage})(AnecdoteForm)