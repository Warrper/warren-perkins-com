import { FunctionalComponent } from 'preact';
import { ButtonWrapper } from './index.css';

interface ButtonProps {
    text: string;
    onClick?: () => void;
}

const Button: FunctionalComponent<ButtonProps> = ({ text, onClick }) => {
    return <ButtonWrapper onClick={onClick}>{text}</ButtonWrapper>;
};

export default Button;
