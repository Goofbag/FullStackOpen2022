import { useState } from 'react'


const Button = ({ click, text }) => (
  <button onClick={click}>
    {text}
  </button>
)

const Statistics = ({ value, text }) => (
  <tr>
    <th align='left'> {text}</th>
    <td>{value}</td>
  </tr>
)


const Stats = ({ good, neutral, bad, total, average, positive }) => {

  if (total === 0) {
    return (
      <div>No feedback given.</div>
    )
  }

  return (
    <table>
      <tbody>
        <Statistics text='good' value={good} />
        <Statistics text='neutral' value={neutral} />
        <Statistics text='bad' value={bad} />
        <Statistics text='Total' value={total} />
        <Statistics text='Average' value={average} />
        <Statistics text='Positive' value={positive + '%'} />
      </tbody>
    </table>
  )

}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClick = () => {
    setGood(good + 1)
  }

  const neutralClick = () => {
    setNeutral(neutral + 1)
  }

  const badClick = () => {
    setBad(bad + 1)
  }

  const total = good + bad + neutral
  const average = (good + bad * -1) / total
  const positive = good / total * 100


  return (
    <div>
      <h1>Give feedback:</h1>
      <Button click={goodClick} text='good' />
      <Button click={neutralClick} text='neutral' />
      <Button click={badClick} text='bad' />
      <h1>Statistics:</h1>
      <Stats good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive} />
    </div>
  )
}

export default App