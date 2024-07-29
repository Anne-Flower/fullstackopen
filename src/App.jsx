import Header from "./components/header.jsx";
import Content from "./components/content.jsx";
import Total from "./components/total";


const App = () => {

  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  const totalExo = parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <div>
      <Header course={course} />
      <Content
        parts={parts}
      />
      <Total
        total={totalExo}
      />
    </div>
  );
};

export default App;
