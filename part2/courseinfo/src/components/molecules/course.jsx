import Header from "../atomes/header";
import Content from "../atomes/content";
import Total from "../atomes/total";

const Course = ({ course }) => {
  console.log(course);
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;
