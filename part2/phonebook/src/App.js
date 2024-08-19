import { useState, useEffect } from "react";
import Person from "./components/person";
import Filter from "./components/filter";
import PersonForm from "./components/personForm";
import personsService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    personsService
      .getAll()
      .then((response) => {
        console.log("Full response:", response);
        setPersons(response);
      })
      .catch((error) => {
        console.error("Error fetching:", error);
      });
  }, []);

  const addAll = (event) => {
    event.preventDefault();
    if (!persons || persons.length === 0) return; // Ajout d'une vérification
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

      personsService
        .create(nameObject)
        .then((newPerson) => {
          setPersons(persons.concat(newPerson));
          setNewName("");
          setNewNum("");
        })
        .catch((error) => {
          console.error("Error adding person:", error);
        });
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
    console.log("Filter value before update:", filter);
    setFilter(event.target.value);
    console.log("Filter value after update:", event.target.value);
  };
  // console.log("Current filter:", filter);
  // console.log("Persons array:", persons);

  const personsToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );
  console.log(filter);

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filter={filter} onFilterChange={handleFilterChange} />
      <form onSubmit={addAll}>
        <PersonForm
          newEnterNum={newNum}
          newEnterName={newName}
          onStaffChangeName={handleNameChange}
          onStaffChangeNum={handleNumChange}
        />

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
