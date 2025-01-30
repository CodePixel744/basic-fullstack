

function App() {
  const friends = [
    { name: 'Peter', age: 4 },
    { name: 'Balaji', age: 21 },
  ]

  return (
    <div>
      {friends[0].name} {friends[0].age}
    </div>
  )
}

export default App
