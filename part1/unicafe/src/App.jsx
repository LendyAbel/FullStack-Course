import { useState } from 'react'


//COMPONENTS
const Button = (props) =>{
  const {buttonText, onSmash} = props
  return (
    <>
    <button onClick={onSmash}>{buttonText}</button>
    </>
  )
}


//MAIN COMPONENT
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  //FUNCTIONS
const goodClicked = ()=>{
  console.log(good)
  setGood(good+1)
}
const neutralClicked = ()=>{
  console.log(neutral)
  setNeutral(neutral+1)
}
const badClicked = ()=>{
  console.log(bad)
  setBad(bad+1)
}

  return (
    <div>
      <header>
      <h1>Give feedback</h1>
      </header>
      <div>
      <Button buttonText="Good" onSmash={goodClicked} />
      <Button buttonText="Neutral" onSmash={neutralClicked} />
      <Button buttonText="Bad" onSmash={badClicked} />
      </div>
      <div>
        <h2>Statistics</h2>
        <p>good: <span>{good}</span></p>
        <p>neutral: <span>{neutral}</span></p>
        <p>bad: <span>{bad}</span></p>
      </div>
    </div>
  )
}

export default App