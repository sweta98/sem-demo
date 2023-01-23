import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import {Header} from './components/Header';
function App() {
  const initialItems: string[] = ["SEM recitation", "18790 Quiz", "Order pizza sauce"];
  return (
    <div className="App">
      <Header title="My Todo List"/>
      <Todo items={initialItems}/>
    </div>
  );
}

export default App;
