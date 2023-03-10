import React from "react";
import '../styles/Header.css';
export interface HeaderProps {
    title: string;
}
export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
    return (
        <header className="header">
            <h1>{props.title}</h1>
        </header>
    );
};