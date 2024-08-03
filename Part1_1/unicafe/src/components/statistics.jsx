import StatisticLine from "./statisticLine";
import Total from "./total";
import History from "./history";

const Statistics = ({ good, neutral, bad, allClicks }) => {
  const calculateAverage = () => {
    const totalFeedbacks = good + neutral + bad;
    if (totalFeedbacks === 0) return 0;
    const average = (good - bad) / totalFeedbacks;
    return average.toFixed(10);
  };

  const CalculatePercentagePositive = () => {
    const totalFeedbacks = good + neutral + bad;
    if (totalFeedbacks === 0) return 0;
    const positivePercentage = (good / totalFeedbacks) * 100;
    return positivePercentage.toFixed(10);
  };
  return (
    <div>
      <h1>STATISTICS</h1>
      <StatisticLine name="good" number={good} />
      <StatisticLine name="neutral" number={neutral} />
      <StatisticLine name="bad" number={bad} />
      <div id="total">
        <p>
          {good}+{neutral}+{bad} ={" "}
        </p>
        <Total good={good} neutral={neutral} bad={bad} />
      </div>
      <History text="all in order " clicked={allClicks} />
      <div> Average {calculateAverage()}</div>
      <div>Percentage {CalculatePercentagePositive()}</div>
    </div>
  );
};

export default Statistics;
