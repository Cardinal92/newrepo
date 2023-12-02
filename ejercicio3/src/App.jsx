import { useState } from "react"
import React from "react"

const StatisticLine = ({coment, statistic}) => {
  return (
      <tr>
        <td>{coment}</td>
        <td>{statistic}</td>
      </tr>
  )
}


const Statistics = ({good, neutral, bad, all, average}) => {
  if (all === 0) {
    return <h1>No statistics yet :3</h1>
      
  }

  return (
    <React.Fragment>
      <h2>Statistics</h2>
      <StatisticLine coment="Good" statistic={good}/>
      <StatisticLine coment="Neutral" statistic={neutral}/>
      <StatisticLine coment="Bad" statistic={bad}/>
      <StatisticLine coment="All" statistic={all}/>
      <Average average={average} all={all}/>
      <Positive good={good} hundred={100} all={all}/>
    </React.Fragment>
  )
}

const Average = ({average, all}) => {
  return (
    <tr>
      <td>Average</td>
      <td>{average / all}</td>
    </tr>
  )
}

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Positive = ({good, all, hundred}) => {
  return (
    <tr>
      <td>Positive</td>
      <td>{good * hundred / all}%</td>
    </tr>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [average, setAverage] = useState(0)
  const [all, setAll] = useState(0)
  
  const handleGood = () => {
    setAverage(average + 1)
    setGood(good + 1)
    setAll(all + 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }  
  const handleBad = () => {
    setAverage(average - 1)
    setBad(bad + 1)
    setAll(all + 1)
  }

  return (
    <React.Fragment>
      <h1>Give feedback</h1>

      <Button handleClick={handleGood} text={"good"}/>
      <Button handleClick={handleNeutral} text={"Neutral"}/>
      <Button handleClick={handleBad} text={"Bad"}/>
      <Statistics all={all} good={good} neutral={neutral} bad={bad} average={average}/>
    </React.Fragment>
  )
}


export default App
