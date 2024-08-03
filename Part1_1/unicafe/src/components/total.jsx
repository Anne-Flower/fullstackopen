const Total = ({ good, neutral, bad }) => {
  const sum = good + neutral + bad;
  return <td id="sum"> {sum}</td>;
};
export default Total;
