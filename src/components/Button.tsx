import React from "react";
import '../styles/Button.css';

export interface ButtonProps {
    onClick:(event: React.MouseEvent<HTMLButtonElement>) => void;
    label: string;
}
export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    return (
        <button className="button" onClick={props.onClick}>{props.label}</button>
    );
};
