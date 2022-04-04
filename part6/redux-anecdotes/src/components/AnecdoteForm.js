import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'


const AnecdoteForm = (props) => {
	const dispatch = useDispatch()

	const newAnecdote = (event) => {
		event.preventDefault()
		const content = event.target.anecdote.value
		event.target.anecdote.value = ''
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

export default AnecdoteForm