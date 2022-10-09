import React from 'react'
import '../styles/App.css';
import { useState, useEffect } from 'react';
const App = () => {
//code here 
const[name,setName]=useState("");
const[input,setInput]=useState("");
const changeInput = async(event)=>{
  setInput(event.target.value);
} 
useEffect(() =>{
const getData = async(id=1) => {
  await fetch(`https://content.newtonschool.co/v1/pr/main/users/${id}`)
  .then((response) => response.json())
  .then((data) => setName(data.name))
  .catch((err) => console.log(err))
}
if(input)getData(+input);
else getData();
}, [input])


  return (
    <div className="App">
      <h1 id="text">Type a number between 1 and 10</h1>
      <input id="input" onChange={changeInput} />
      <p id="name">{name}</p>
    </div>
  );
}


export default App;
