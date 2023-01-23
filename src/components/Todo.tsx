import React from 'react';
// import logo from './logo.svg';
import '../styles/Todo.css';
import { TextInput } from './TextInput';
type TodoProps = {
    items: string[],
    id?: number
};
  
const Todo = (props: TodoProps) => {
const {items} = props;
  return (
    <div className="Todo-container">

        <div className="grid-half">
            <div>
            <h2>enter an item to your list</h2>
                <TextInput />
            </div>
        </div>
        
        <div className="grid-half">
            <div className="items-list">
            {
                items.map((item) =>  <p>{item}</p>)
            }
            </div>
        </div>

    </div>
  );
}

export default Todo;
