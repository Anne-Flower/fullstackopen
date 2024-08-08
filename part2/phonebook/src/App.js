import { useState } from "react";
import Person from "./components/person";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");

  const addAll = (event) => {
    event.preventDefault();
    const nameExists = persons.some((person) => person.name === newName);
    if (nameExists) {
      alert(`${newName} is already added`);
    } else {
      const nameObject = {
        id: persons.length + 1,
        date: new Date().toISOString(),
        name: newName,
        num: newNum,
      };
      console.log("button clicked", event.target);
      setPersons(persons.concat(nameObject));
      setNewName("");
      setNewNum("");
    }
  };

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };
  const handleNumChange = (event) => {
    console.log(event.target.value);
    setNewNum(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addAll}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNum} onChange={handleNumChange} />
        </div>

        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <Person key={person.id} person={person}></Person>
        ))}
      </ul>
    </div>
  );
};

export default App;
