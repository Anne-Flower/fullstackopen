
const Total = ({ parts }) => {
  const sum = parts.reduce((sum, part) => sum + part.name, 0);
  return <div>Number of exercises {sum}</div>;
};
export default Total;
