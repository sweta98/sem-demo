import React from 'react';
// import logo from './logo.svg';
import '../styles/Todo.css';
import { Button } from './Button';
import { TextInput } from './TextInput';


export const Todo : React.FC = () => {
const [items, setItems] = React.useState<string[]>([]);
const inputRef = React.useRef<HTMLInputElement>(null);
const addItem = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (inputRef.current) {
        setItems([...items, inputRef.current.value]);
        inputRef.current.value = "";
    }
}
  return (
    <div className="Todo-container">

        <div className="grid-half">
            <div>
            <h2>Enter an item to your TO-DO list</h2>
                <TextInput reference={inputRef} />
                <Button onClick={addItem} label="Add Item"/>
            </div>
        </div>
        
        <div className="grid-half">
            <div className="items-list">
            {items && items.length ? <h2>Pending items</h2> : ""}
            {
                items.map((item) =>  <p className='list-item'>{item}</p>)
            }
            </div>
        </div>

    </div>
  );
}

 
