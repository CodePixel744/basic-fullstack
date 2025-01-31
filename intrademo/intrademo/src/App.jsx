
function Hello(props) {
  console.log(props);
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  )
}
function HelloOne(props) {
  const { name, age } = props;
  const bornYear = () => {
    const yearNow = new Date().getFullYear();
    return yearNow - age;
  }
  return (
    <div>
      <p>
        Hello {name}, you are {age} years old.
      </p>
      <p>
        So you were probably born in {bornYear()}
      </p>
    </div>
  )
}

function HellWorld({ name, age }) {
  return (
    <p>
      MY NAME IS {name} and MY AGE IS {age}
    </p>
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
      <HellWorld name="hell" age={Infinity} />
    </div>
  )
}

export default App
