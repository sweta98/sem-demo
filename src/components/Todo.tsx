import React from 'react';
// import logo from './logo.svg';
import '../styles/Todo.css';

type TodoProps = {
    items: string[],
    id?: number
};
  
const Todo = (props: TodoProps) => {
const {items} = props;
  return (
    <div className="Todo-container">

        <div className="grid-half">
            <h2>enter an item to your list</h2>
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
