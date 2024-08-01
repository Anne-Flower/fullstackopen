import { useState } from "react";
import Button from "./components/button";
import Part from "./components/parts";

const App = () => {
  // enregistrer les clics de chaque bouton dans un état différent
  const [allClicks, setAllClicks] = useState([]);
  const [good, setGood] = useState(0);
  const handleClickGood = () => {
    setGood(good + 1);
    console.log("well done baby ", good + 1);
    setAllClicks(allClicks);
    console.log(allClicks);
  };
  const [neutral, setNeutral] = useState(0);
  const handleClickNeutral = () => {
    console.log("well done baby ", neutral + 1);
    setNeutral(neutral + 1);
    setAllClicks(allClicks);
  };
  const [bad, setBad] = useState(0);
  const handleClickBad = () => {
    console.log("well done baby ", bad + 1);
    setBad(bad + 1);
    setAllClicks(allClicks);
  };

  const name = {
    buttonGood: "good",
    buttonNeutral: "neutral",
    buttonBad: "bad",
  };

  return (
    <div>
      <h1> Give feedback</h1>
      <Button feedback={name.buttonGood} onClick={handleClickGood}></Button>
      <Button feedback={name.buttonNeutral} onClick={handleClickNeutral} />
      <Button feedback={name.buttonBad} onClick={handleClickBad} />
      <h1>stactistics</h1>
      <Part name={name.buttonGood} number={good} />
      <Part name={name.buttonNeutral} number={neutral} />
      <Part name={name.buttonBad} number={bad} />
    </div>
  );
};

export default App;
