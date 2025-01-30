
function Hello(props) {
  console.log(props);
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  )
}
function HelloOne(props) {
  console.log(props);
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old.
      </p>
    </div>
  )
}
function App() {
  console.log('hello world');
  const now = new Date();
  const a = 10;
  const b = 20;
  const name = "Peter";
  const age = 21;
  console.log(now, a + b);
  return (
    <div>
      <p>Hello World,it is now ${now.toString()}</p>
      <p>{a} plus {b} is {a + b}</p>
      <Hello name="Balaji" />
      <Hello name="Vivek" />
      <Hello name="Ganesh" />
      <HelloOne name={name} age={age} />
    </div>
  )
}

export default App
