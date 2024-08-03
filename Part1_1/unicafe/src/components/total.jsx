const Total = ({ good, neutral, bad }) => {
  const sum = good + neutral + bad;
  return <div id="sum"> {sum}</div>;
};
export default Total;
