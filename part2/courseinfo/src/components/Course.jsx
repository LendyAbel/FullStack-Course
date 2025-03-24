const Course = (props) => {
  console.log("props", props);
  const courseName = props.course.name;
  const parts = props.course.parts;

  console.log("parts", parts);

  const total = parts.reduce((acc, part) => acc + part.exercises, 0);

  return (
    <>
      <h2>{courseName}</h2>
      <ul>
        {parts.map((part) => (
          <li key={part.id}>
            {part.name} {part.exercises}
          </li>
        ))}
      </ul>
      <p>
        <strong>Total of {total} exercises</strong>
      </p>
    </>
  );
};
export default Course;
