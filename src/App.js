import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <ul style={listStyle}>
       <li>Item 1</li>
       <li>Item 2</li>
       <li>Item 3</li>
      </ul>
    </div>
  );
}

const listStyle = {
  listStyle: "square"
}
export default App;
