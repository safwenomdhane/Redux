import './App.css';
import React from 'react';
import Addtask from './Components/Addtask';
import ListTask from './Components/ListTask';

const App = () =>{
  return (
    
    <div className="App">
      <div class="stars"></div>
      <div class="twinkling"></div>
      <Addtask/>
      <ListTask/>
      
    </div>
  );
}
export default App;


