import { FunctionalComponent } from 'preact';
import { ButtonWrapper } from './index.css';

interface ButtonProps {
    text: string;
}

const Button: FunctionalComponent<ButtonProps> = ({ text }) => {
    return (
        <ButtonWrapper>
            <h1>{text}</h1>
        </ButtonWrapper>
    );
};

export default Button;
