import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
        <h1>Kristina</h1>
        <p>I am learning React</p>
        <ul style={listStyle}>
           <li>Vacation 1</li>
           <li>Vacation 2</li>
           <li>Vacation 3</li>
        </ul>
    </div>
  );
}

const listStyle = {
  listStyle: "square"
}
export default App;
