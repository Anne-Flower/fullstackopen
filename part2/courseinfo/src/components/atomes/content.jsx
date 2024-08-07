import Part from "./part";

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => (
        <Part key={part.id} name={part.name} exercises={part.exercises}>
          
        </Part>
      ))}
    </div>
  );
};
export default Content;
