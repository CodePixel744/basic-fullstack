import { useState } from 'react'
import './App.css'

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handlePhoneChange = (event) => {
    console.log(event.target.value);
    console.log(typeof (event.target.value));
    let phoneNum = event.target.value;
    for (let i = 0; i < phoneNum.length; ++i) {
      if (phoneNum[i] != '1' && phoneNum[i] != '2' && phoneNum[i] != '3' && phoneNum[i] != '4' && phoneNum[i] != '5' && phoneNum[i] != '6' && phoneNum[i] != '7' && phoneNum[i] != '8' && phoneNum[i] != '9' && phoneNum[i] != '0') {
        alert('enter valid digits');
        setNewPhone('');
        return;
      }
    }
    if (phoneNum.length > 10) {
      alert('Enter the valid phone number.');
      setNewPhone('');
      return;
    }
    setNewPhone(event.target.value);
  }

  const formSubmit = (event) => {
    event.preventDefault();
    let nameflag = false;
    for (let i = 0; i < persons.length; ++i) {
      if (newName != '' && persons[i].name === newName) {
        nameflag = true;
        break;
      }
    }
    let phoneflag = false;
    for (let i = 0; i < persons.length; ++i) {
      if (newPhone != '' && persons[i].phone === newPhone) {
        phoneflag = true;
        break;
      }
    }
    if (!nameflag) {
      console.log(`Entering here `);
      if (newName === '') {
        alert('Please enter a valid Name.');
        return;
      }
    }
    if (!phoneflag) {
      console.log(`second entering here.`);
      if (newPhone === '') {
        alert('Please enter a valid phone number.');
        return;
      }
    }
    if (nameflag && phoneflag) {
      alert(`choose both new name and new phone.`);
    }
    else if (nameflag) {
      alert(`choose new name`);
    }
    else if (phoneflag) {
      alert(`choose new phone.`);
    }
    else {
      const newPerson = { name: newName, phone: newPhone };
      setPersons([...persons, newPerson]);
      setNewName('');
      setNewPhone('');
    }
  }

  return (
    <div className='wrapper'>
      <div className="wrapper1">
        <h2>Phonebook</h2>
        <form onSubmit={formSubmit} className='form1'>
          <div>
            name: <input type='text' value={newName} onChange={handleNameChange} />
          </div>
          <div>
            number: <input type='text' value={newPhone} onChange={handlePhoneChange} />
          </div>
          <button type="submit">add</button>
        </form>
      </div>
      <div className="wrapper2">
        <h2>Numbers</h2>
        {
          <ul>
            {persons.map((person, index) => (
              <li key={index}>{person.name} {person.phone}</li>
            ))}
          </ul>
        }
        {/* <div>debug: {newName} {newPhone}</div> */}
      </div>
    </div>
  )
}

export default App
