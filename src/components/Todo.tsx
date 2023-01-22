import React from 'react';
// import logo from './logo.svg';
import '../styles/Todo.css';

type TodoProps = {
    items: string[],
    id?: number
};
  
const Todo = (props: TodoProps) => {
const {items} = props;
console.log(items);
  return (
    <div className="Todo-container">

        <div className="grid-half">
            <h2>enter an item to your list</h2>
        </div>
        <div className="grid-half">
            {
                items.map((item) =>  <p>{item}</p>)
            }
        </div>

    </div>
  );
}

export default Todo;
