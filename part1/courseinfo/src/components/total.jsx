const Total = ({ parts }) => {
  const totalExo = parts.reduce((sum, part) => sum + part.name, 0);
  return <div>{totalExo}</div>;
};

export default Total;
