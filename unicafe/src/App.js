import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const addGoodFeedback = () => {
    setGood(good + 1)
    setTotal(total + 1)
  }

  const addNeutralFeedback = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }

  const addBadFeedback = () => {
    setBad(bad + 1)
    setTotal(total + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>

      <Button text="good" onClick={addGoodFeedback}/>
      <Button text="neutral" onClick={addNeutralFeedback}/>
      <Button text="bad" onClick={addBadFeedback}/>

      <h1>statistics</h1>

      <Statistics good={good} neutral={neutral} bad={bad} total={total}/>

    </div>
  )
}

const Button = ({onClick, text}) => (
  <button onClick={ onClick }>
    { text }
  </button>
)

const Statistics = ({ good, neutral, bad, total }) => {
  if (total === 0) return <div>No feedback given</div>
  
  else return (
    <table>
      <tbody>
        <StatisticLine name='good' value={ good }/>
        <StatisticLine name='neutral' value={ neutral }/>
        <StatisticLine name='bad' value={ bad }/>
        <StatisticLine name='total' value={ total }/>
        <StatisticLine name='average' value={ (good - bad) / total }/>
        <StatisticLine name='positive' value={ good * 100 / total }/>
      </tbody>
    </table>
  )
}

const StatisticLine = ({name, value}) => {
  if (name === 'positive') return (
    <tr>
      <td>{name}</td>
      <td>{value}%</td>
    </tr>
  )

  else return (
    <tr>
      <td>{name}</td>
      <td>{value}</td>
    </tr>
  )
}

export default App
