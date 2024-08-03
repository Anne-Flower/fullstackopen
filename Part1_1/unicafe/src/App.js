import { useState } from "react";
import Button from "./components/button";
import Statistics from "./components/statistics";

const App = () => {
  // enregistrer les clics de chaque bouton dans un état différent
  const [isClickedInGeneral, setIsClickedInGeneral] = useState(false);
  const [isNotClicked, setIsNotClicked] = useState(true);
  const [allClicks, setAllClicks] = useState([]);
  const [good, setGood] = useState(0);
  const handleClickGood = () => {
    setGood(good + 1);
    console.log("well done baby ", good + 1);
    setAllClicks([...allClicks, "good"]);
    setIsClickedInGeneral(true);
    setIsNotClicked(false);
    // console.log(allClicks);
  };
  const [neutral, setNeutral] = useState(0);
  const handleClickNeutral = () => {
    console.log("well done baby ", neutral + 1);
    setNeutral(neutral + 1);
    setAllClicks([...allClicks, "neutral"]);
    setIsClickedInGeneral(true);
    setIsNotClicked(false);
  };
  const [bad, setBad] = useState(0);
  const handleClickBad = () => {
    console.log("well done baby ", bad + 1);
    setBad(bad + 1);
    setAllClicks([...allClicks, "bad"]);
    setIsClickedInGeneral(true);
    setIsNotClicked(false);
  };

  const name = {
    buttonGood: "good",
    buttonNeutral: "neutral",
    buttonBad: "bad",
  };
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
    <>
      <main>
        <h1> Give feedback</h1>
        <div id="buttons">
          <Button feedback={name.buttonGood} onClick={handleClickGood}></Button>
          <Button feedback={name.buttonNeutral} onClick={handleClickNeutral} />
          <Button feedback={name.buttonBad} onClick={handleClickBad} />
        </div>

        {isNotClicked && (
          <>
            <h1> Statistics</h1>
            <p>no feedback</p>
          </>
        )}

        {isClickedInGeneral && (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            allClicks={allClicks}
          />
        )}
      </main>
    </>
  );
};

export default App;
