import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
function App() {
  const initialItems: string[] = ["SEM recitation", "18790 Quiz", "Order pizza sauce"];
  return (
    <div className="App">
      <header className="App-header">
        <h1>To do list</h1> 
      </header>
      <Todo items={initialItems}/>
    </div>
  );
}

export default App;
