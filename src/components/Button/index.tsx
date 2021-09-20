import React from 'react';
import { ButtonWrapper } from './index.css';

interface ButtonProps {
    text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
    return (<ButtonWrapper>
        <h1>{text}</h1>
    </ButtonWrapper>)
}

export default Button;