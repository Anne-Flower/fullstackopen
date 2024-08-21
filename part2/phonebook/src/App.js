import { useState, useEffect } from "react";
import Person from "./components/person";
import Filter from "./components/filter";
import PersonForm from "./components/personForm";
import personsService from "./services/persons";
import Notification from "./components/notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");
  const [filter, setFilter] = useState("");
  const [actionMessage, setActionMessage] = useState("some message for you");

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

  const handleDelete = (id) => {
    const person = persons.find((p) => p.id === id);
    if (!person) {
      console.error(`Person with ID ${id} not found`);
      return;
    }

    if (window.confirm(`Delete ${person.name}?`)) {
      personsService
        .deletePersons(id)
        .then(() => {
          setPersons(persons.filter((p) => p.id !== id));
        })
        .catch((error) => {
          console.error("Error deleting person:", error);
        });
    }
  };

  const addAll = (event) => {
    event.preventDefault();
    if (!persons || persons.length === 0) return;
    const nameExists = persons.find((person) => person.name === newName);
    if (nameExists) {
      const confirmUpdate = window.confirm(
        `${newName} is already added, replace the old number with a new one?`
      );
      if (confirmUpdate) {
        const updatedPerson = { ...nameExists, number: newNum };
        personsService
          .update(nameExists.id, updatedPerson)
          .then((returnedPerson) => {
            setPersons(
              persons.map((p) => (p.id !== nameExists.id ? p : returnedPerson))
            );

            setActionMessage(`Updated ${newName}`);
            setTimeout(() => {
              setActionMessage("");
            }, 5000);
            setNewName("");
            setNewNum("");
          })

          .catch((error) => {
            console.error("Error updating person:", error);
          });
      }
    } else {
      const nameObject = {
        id: persons.length + 1,
        // date: new Date().toISOString(),
        name: newName,
        number: newNum,
      };

      personsService
        .create(nameObject)
        .then((newPerson) => {
          setPersons(persons.concat(newPerson));
          setActionMessage(`Created ${newName}`);
          setTimeout(() => {
            setActionMessage("");
          }, 5000);
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
  const handleNumChanged = (event) => {
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
    <main>
      <h1>Phonebook</h1>
      <Notification message={actionMessage} />

      <Filter filter={filter} onFilterChange={handleFilterChange} />
      <form onSubmit={addAll}>
        <PersonForm
          newEnterNum={newNum}
          newEnterName={newName}
          onStaffChangeName={handleNameChange}
          onStaffChangeNum={handleNumChanged}
        />

        <div>
          <button type="submit" className="add">Add</button>
        </div>
      </form>
      <h1>Numbers</h1>
      <ul>
        {personsToShow.map((person) => (
          <Person
            key={person.id}
            person={person}
            onDelete={handleDelete}
          ></Person>
        ))}
      </ul>
    </main>
  );
};

export default App;
