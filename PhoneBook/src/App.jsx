import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3002/persons')
      .then(response => {
        setPersons(response.data)
        console.log(response.data);
      })
      .catch(error => console.log(error));
  }, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handlePhoneChange = (event) => {
    console.log(event.target.value);
    console.log(typeof (event.target.value));
    let phoneNum = event.target.value;
    for (let i = 0; i < phoneNum.length; ++i) {
      if (phoneNum[i] != '1' && phoneNum[i] != '2' && phoneNum[i] != '3' && phoneNum[i] != '4' && phoneNum[i] != '5' && phoneNum[i] != '6' && phoneNum[i] != '7' && phoneNum[i] != '8' && phoneNum[i] != '9' && phoneNum[i] != '0') {
        setErrorMessage('enter valid digits');
        setNewPhone('');
        return;
      }
    }
    if (phoneNum.length > 10) {
      setErrorMessage('Enter the valid phone number.');
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
        setErrorMessage('Please enter a valid Name.');
        return;
      }
    }
    if (!phoneflag) {
      console.log(`second entering here.`);
      if (newPhone === '') {
        setErrorMessage('Please enter a valid phone number.');
        return;
      }
    }
    if (nameflag && phoneflag) {
      setErrorMessage(`choose both new name and new phone.`);
      return;
    }
    else if (nameflag) {
      setErrorMessage(`choose new name`);
      return;
    }
    else if (phoneflag) {
      setErrorMessage(`choose new phone.`);
      return;
    }
    else {
      const newPerson = { name: newName, phone: newPhone };
      setPersons([...persons, newPerson]);
      setNewName('');
      setNewPhone('');
      setErrorMessage('');
    }
  }

  return (
    <div className='wrapper'>
      <div className="wrapper1">
        <h2>Phonebook</h2>
        <form onSubmit={formSubmit} className='form1'>
          <div className="input-group">
            <label htmlFor="name">Name:</label>
            <input type='text' id="name" value={newName} onChange={handleNameChange} />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Number:</label>
            <input type='text' id="phone" value={newPhone} onChange={handlePhoneChange} />
          </div>
          <button type="submit" className="submit-btn">Add</button>
        </form>
        {errorMessage && <p className="error">{errorMessage}</p>}
      </div>
      <div className="wrapper2">
        <h2>Numbers</h2>
        <ul className="person-list">
          {persons.map((person, index) => (
            <li key={index} className="person-item">{person.name} {person.number}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
