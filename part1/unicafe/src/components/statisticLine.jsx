const StatisticLine = ({ name, number }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{number}</td>
    </tr>
  );
};
export default StatisticLine;
