import React from "react";
export interface TextInputProps {
    reference: React.RefObject<HTMLInputElement>;
};
export const TextInput : React.FC<TextInputProps> = (props:TextInputProps) => {
    return (
        <input type="text" placeholder="Enter an item" ref={props.reference}
        />
    );
    };