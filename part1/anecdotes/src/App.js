import { useState } from 'react';
import Button from "./components/buttons/buttonAnecdote.jsx"
import ButtonNote from './components/buttons/buttonNote.jsx';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const handleClick = () => {
    const randomAnecdote =
    Math.floor(Math.random() * anecdotes.length)
  setSelected(randomAnecdote)}

  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const handleVote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1;
    setVotes(newVotes);
    
  }
  console.log(votes);

  const handleMaxNotes = () => {
    const maxNotes = Math.max(...votes)
    const maxNotesIndex = votes.indexOf(maxNotes)
    return maxNotesIndex
  };
  const maxNotesIndex = handleMaxNotes();

  return (
    <div>
      <h1>Anecdote of the day : </h1>
      {anecdotes[selected]}
      <ButtonNote text="vote" click={handleVote}/>
      <Button text="next anecdote" click={handleClick}/>
      <h1>Anecdote with most votes :</h1>
      {anecdotes[maxNotesIndex]}

    </div>
  )
}

export default App