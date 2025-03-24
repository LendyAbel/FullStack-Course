const Course = (props) => {
  console.log("props", props);
  const courseName = props.course.name;
  const parts = props.course.parts;
  console.log("parts", parts);

  return (
    <>
      <h2>{courseName}</h2>
      <ul>
        {parts.map((part) => (
          <li id={part.id}>
            {part.name} {part.exercises}
          </li>
        ))}
      </ul>
    </>
  );
};

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };

  return <Course course={course} />;
};

export default App;
