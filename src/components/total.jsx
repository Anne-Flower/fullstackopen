const Total = ({parts}) => {
  const totalExo = parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <div>Number of exercises {totalExo}</div>
  )
}

export default Total;