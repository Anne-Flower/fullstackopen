const Person = ({person}) => {
  return (
    <div>
      <li>
      {person.name} {person.important ? "(important)" : ""}
    </li>
    </div>
  )
}

export default Person