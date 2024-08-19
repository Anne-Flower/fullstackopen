const Person = ({ person, onDelete }) => {
  return (
    <div>
      <li>
        {person.name} : {person.number}
        <button onClick={() => onDelete(person.id)}>DELETE</button>
      </li>
    </div>
  );
};

export default Person;
