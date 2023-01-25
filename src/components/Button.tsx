import React from "react";

export interface ButtonProps {
    onClick:(event: React.MouseEvent<HTMLButtonElement>) => void;
    label: string;
}
export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    return (
        <button onClick={props.onClick}>{props.label}</button>
    );
};
