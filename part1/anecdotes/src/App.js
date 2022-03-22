import { useState } from 'react'

const Header = ({ name }) => <h1>{name}</h1>

const Button = ({ click, text }) => (
  <button onClick={click}>
    {text}
  </button>
)

const Anecdote = ({ text, votes }) => (
  <div>
    <p>{text}</p>
    <p>{votes} Votes</p>
  </div>
)


const Winner = ({ anecdotes, allVotes }) => {
  const mostVotes = Math.max(...allVotes)
  const index = allVotes.indexOf(mostVotes)
  const winner = anecdotes[index]

  if (mostVotes === 0) {
    return (
      <p>No votes yet</p>
    )
  }

  return (
    <div>
      <p>{winner}</p>
      <p>{mostVotes} Votes</p>
    </div>
  )
}


const App = () => {


  const [selected, setSelected] = useState(0)
  const [allVotes, setVotes] = useState(Array(7).fill(0))


  const anecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const handleVotes = () => {
    const copyVotes = [...allVotes]
    copyVotes[selected] += 1
    setVotes(copyVotes)
  }

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  return (
    <div>
      <Header name='Anecdote of the day' />
      <Anecdote text={anecdotes[selected]} votes={allVotes[selected]} />
      <br></br>
      <Button click={handleVotes} text='Vote' />
      <Button click={anecdote} text='Random anecdote' />
      <br></br>
      <Header name='Anecdote with most votes' />
      <Winner anecdotes={anecdotes} allVotes={allVotes} />
    </div>
  )
}

export default App