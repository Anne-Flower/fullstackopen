import StatisticLine from "./statisticLine";
import Total from "./total";
// import History from "./history";

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

      <table>
        <tbody>
          <StatisticLine name="good" number={good} />
          <StatisticLine name="neutral" number={neutral} />
          <StatisticLine name="bad" number={bad} />
        </tbody>
      </table>
      <table id="total">
        <tbody>
          <tr>
            <td>
              <p>
                {good}+{neutral}+{bad} ={""}
              </p>
            </td>

            <Total good={good} neutral={neutral} bad={bad} />
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            {/* <History text="all in order " clicked={allClicks} /> */}
            <td>Average</td>
            <td>{calculateAverage()}</td>
          </tr>
          <tr>
            <td>Percentage</td>
            <td>{CalculatePercentagePositive()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Statistics;
