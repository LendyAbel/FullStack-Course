import { useState } from "react";

//COMPONENTS
const Button = ({ buttonText, onSmash }) => {
  return (
    <>
      <button onClick={onSmash}>{buttonText}</button>
    </>
  );
};
const Statistics = ({ statisticName, value }) => {
  return (
    <tr>
      <td>{statisticName}</td>
      <td>
        {value}{" "}{statisticName.toUpperCase() === "POSITIVE" ? "%" : null}
      </td>
    </tr>
  );
};

//MAIN COMPONENT
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;
  const average = (good - bad) / total || 0;
  const positive = (good * 100) / total || 0;

  //FUNCTIONS
  const goodClicked = () => {
    console.log(good);
    setGood(good + 1);
  };
  const neutralClicked = () => {
    console.log(neutral);
    setNeutral(neutral + 1);
  };
  const badClicked = () => {
    console.log(bad);
    setBad(bad + 1);
  };

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
        {total === 0 ? (
          <h2>No feedback given</h2>
        ) : (
          <>
            <h2>Statistics</h2>
            <table border={1}>
              <tbody>
              <Statistics statisticName={"Good"} value={good} />
              <Statistics statisticName={"Neutral"} value={neutral} />
              <Statistics statisticName={"Bad"} value={bad} />
              <Statistics statisticName={"All"} value={total} />
              <Statistics statisticName={"Average"} value={average} />
              <Statistics statisticName={"Positive"} value={positive} />
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
