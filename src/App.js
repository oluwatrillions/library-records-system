import {useState} from 'react'
import './App.css';

function App() {

  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [age, setAge] = useState(0)
  const [book, setBook] = useState('')
  const [date, setDate] = useState(0)

  return (
    <div className="App">
      <div class="info">
        <h1>Library Record System</h1>
            <div class="details">
                <label for="name">Name</label>
                <input type="text" onChange={(e)=>{
                  setName(e.target.value)}}/>
            </div>
            <div class="details">
                <label for="address">Address</label>
                <input type="text" onChange={(e)=>{
                  setAddress(e.target.value)}}/>
            </div>
            <div class="details">
                <label for="age">Age</label>
                <input type="number" onChange={(e)=>{
                  setAge(e.target.value)}}/>
            </div>
            <div class="details">
                <label for="bookOfChoice">Book of Choice</label>
                <input type="text" onChange={(e)=>{
                  setBook(e.target.value)}}/>
            </div>
            <div class="details">
                <label for="returnDate">Date</label>
                <input type="date" onChange={(e)=>{
                  setDate(e.target.value)}}/>
            </div>
            <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
