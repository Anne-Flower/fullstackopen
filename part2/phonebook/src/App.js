import { useState } from "react";
import Person from "./components/person";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const addName = (event) => {
    event.preventDefault();
    const nameObject = {
      id: persons.length + 1,
      date: new Date().toISOString(),
      name: newName,
    };
    console.log("button clicked", event.target);
    setPersons(persons.concat(nameObject));
    setNewName("");
  };
  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
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
