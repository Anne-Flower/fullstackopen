import { useState, useEffect } from "react";
import Person from "./components/person";
import Filter from "./components/filter";
import PersonForm from "./components/personForm";
import axios from 'axios';


const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons').then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
        
      })
  }, [])

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
        number: newNum,
      };
      console.log(nameObject);
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

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const personsToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  
  );
  console.log(filter);

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filter={filter} onFilterChange={handleFilterChange} />
      <form onSubmit={addAll}>
        <PersonForm newEnterNum={newNum} newEnterName={newName} onStaffChangeName={handleNameChange} onStaffChangeNum={handleNumChange}/>

        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map((person) => (
          <Person key={person.id} person={person}></Person>
        ))}
      </ul>
    </div>
  );
};

export default App;
