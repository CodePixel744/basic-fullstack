function useThis() {
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
  ];
  return parts.map(({ name, exercises }) => (
    <Content key={name} part={name} exercises={exercises} />
  ));
}

function Header({ course }) {
  return (
    <h2>
      {course}
    </h2>
  );
}

function Content({ part, exercises }) {
  return (
    <p>{part} {exercises}</p>
  );
}

function Total({ e1, e2, e3 }) {
  return (
    <p>Number of exercises {e1 + e2 + e3}</p>
  );
}

function App() {
  const course = 'Half Stack application development';
  const exercises1 = 10;
  const exercises2 = 7;
  const exercises3 = 14;
  return (
    <div>
      <Header course={course} />
      {useThis()}
      <Total e1={exercises1} e2={exercises2} e3={exercises3} />
    </div>
  );
}

export default App;
