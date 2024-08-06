import Part from "./part";

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part, index) => (
        <Part key={index} name={part.name} exercise={part.exercises} />
      ))}
    </div>
  );
};
export default Content;
