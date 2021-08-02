import React from 'react';
import profileImage from './img/image.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>my react app</h1>
      <img src={profileImage} alt="profile-image"/>     
    </div>
  );
}

export default App;
