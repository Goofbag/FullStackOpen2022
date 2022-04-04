import NewNote from './components/AnecdoteForm';
import ListAnecdotes from './components/AnecdoteList';
import Notification from './components/Notification';


const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <ListAnecdotes />
      <Notification />
      <NewNote />
    </div>
  )
}

export default App