import Course from './course';

const Courses = ({ courses }) => {
  return (
    <div>
      {courses.map(course => (
        <Course key={course.id} course={course} />
      ))}
    </div>
  );
};

export default Courses;