const History = ({text, clicked}) => {
  if (clicked.length === 0) {return <div>You have to push buttons to access feedbacks</div>};
  return (
    <div>
     {text}: {clicked.join(' ')}
    </div>
  )
};

export default History;
