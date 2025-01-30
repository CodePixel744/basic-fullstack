function Hello() {
  return (
    <div>
      <p>Hello World.</p>
    </div>
  )
}
function App() {
  console.log('hello world');
  const now = new Date();
  const a = 10;
  const b = 20;
  console.log(now, a + b);
  return (
    <div>
      <p>Hello World,it is now ${now.toString()}</p>
      <p>{a} plus {b} is {a + b}</p>
      <Hello />
      <Hello />
      <Hello />
    </div>
  )
}

export default App
