const History = ({ text, clicked }) => {
  if (clicked.length === 0) {
    return <td>You have to push buttons to access feedbacks</td>;
  }
  return (
    <td>
      {text}
      {clicked.join(" ")}
    </td>
  );
};

export default History;
