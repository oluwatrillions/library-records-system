import Axios from 'axios';
import {useState} from 'react'
import './App.css';

function App() {

  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [age, setAge] = useState(0)
  const [book, setBook] = useState('')

  const displayInfo = () => {
    Axios.post('http://localhost:400/register', {
      name: name,
      address: address,
      age: age,
      book: book
    }).then();
  }

  return (
    <div className="App">
      <div class="info">
        <h1>Library Record System</h1>
        <h4>What Book Are You Looking To Borrow?</h4>
            <div class="details">
                <label for="name">Name:</label>
                <input type="text" onChange={(e)=>{
                  setName(e.target.value)}}/>
            </div>
            <div class="details">
                <label for="address">Address:</label>
                <input type="text" onChange={(e)=>{
                  setAddress(e.target.value)}}/>
            </div>
            <div class="details">
                <label for="age">Age:</label>
                <input type="number" onChange={(e)=>{
                  setAge(e.target.value)}}/>
            </div>
            <div class="details">
                <label for="bookOfChoice">Book of Choice:</label>
                <input type="text" onChange={(e)=>{
                  setBook(e.target.value)}}/>
            </div>
            <button onClick={displayInfo}>Submit</button>
      </div>
    </div>
  );
}

export default App;
