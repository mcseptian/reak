import React from 'react';
import logo from './logo.svg';
import './App.scss';
function App() {
  const [message, setMessage] = React.useState('First Message');
  function handleClick() {
    setMessage('second message')
  }
  return (
    <div class="grid">
      <h1>{message}</h1>
      <button onClick={handleClick}>
        Update the Message!
      </button>
    </div>
  );
}

export default App;
