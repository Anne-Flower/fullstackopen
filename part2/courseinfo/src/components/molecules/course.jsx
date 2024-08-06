import Header from "../atomes/header";
import Content from "../atomes/content";

const Course = ({course}) => {
  return (
    <div>
      <Header course="Half Stack application development" />
      <Content parts={course.parts} />
    </div>
  );
};

export default Course;
