import React from "react";
import '../styles/TextInput.css';

export interface TextInputProps {
    reference: React.RefObject<HTMLInputElement>;
};
export const TextInput : React.FC<TextInputProps> = (props:TextInputProps) => {
    return (
        <input className="text-box" type="text" placeholder="Enter an item" ref={props.reference}
        />
    );
    };