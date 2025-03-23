import { useState } from "react";

const App = () => {
  // console.log("---------------------------");
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  // console.log(selected)
  // console.log(votes)

  //FUNCTIONS
  const selectRandom = () => {
    const randomAnecdote = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomAnecdote);
  };
  const addVote = () => {
    const votesCopy = [...votes];
    votesCopy[selected] += 1;
    setVotes(votesCopy);
  };

  //One way to do it:
  // const findMostVotes = (arr) => {
  //   let mostVotesIndex = 0;
  //   let mostVotesValue = arr[0];
  //   for (let index = 1; index < arr.length; index++) {
  //     let currentValue = arr[index];
  //     let currentIndex = index;
  //     if (currentValue > mostVotesValue) {
  //       mostVotesValue = currentValue;
  //       mostVotesIndex = currentIndex;
  //     }
  //   }
  //   console.log(mostVotesIndex);
  //   return mostVotesIndex;
  // };

  //Another way to do it:
  // const mostVotesIndex = votes.reduce((maxIndex, value, index, arr) =>
  //   value > arr[maxIndex] ? index : maxIndex, 0
  // );

  const mostVotesIndex = votes.indexOf(Math.max(...votes));

  // console.log("mostVotesIndex:",mostVotesIndex)
  // console.log("votes:", votes);

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <div>
        <p>{anecdotes[selected]}</p>
        <p>has {votes[selected]} votes</p>
      </div>
      <button onClick={addVote}>vote</button>
      <button onClick={selectRandom}>next anecdotes</button>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[mostVotesIndex]}</p>
    </div>
  );
};

export default App;
