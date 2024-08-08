const Person = ({ person }) => {
  return (
    <div>
      <li>
        {person.name} : {person.num}
      </li>
    </div>
  );
};

export default Person;
