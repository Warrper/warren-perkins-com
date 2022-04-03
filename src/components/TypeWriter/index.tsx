import { useEffect, useRef } from 'react';
import { FunctionalComponent } from 'preact';
import { TypeWriterWrapper } from './index.css';
import useDelay from '../../hooks/useDelay';

interface TypeWriterProps {
    text: string;
    typeSpeed?: number;
    blinkSpeed?: number;
    delayStart?: number;
    noBlink?: boolean;
    noCursor?: boolean;
    fontSize?: string;
    color?: string;
    onEnd?: () => void;
}

const TypeWriter: FunctionalComponent<TypeWriterProps> = ({
    text,
    typeSpeed,
    blinkSpeed,
    delayStart,
    noBlink,
    noCursor,
    fontSize,
    color,
    onEnd,
}) => {
    const delay = delayStart ? delayStart : 0;
    const speed = typeSpeed ? typeSpeed : 0;

    const show = useDelay(delay);
    const animationEnded = useDelay(delay + speed);

    useEffect(() => {
        if (animationEnded && onEnd) {
            onEnd();
        }
    }, [animationEnded]);

    return (
        <TypeWriterWrapper
            characterCount={text.length}
            typeSpeed={typeSpeed ? typeSpeed : 1000}
            blinkSpeed={blinkSpeed ? blinkSpeed : 500}
            fontSize={fontSize}
            color={color}
        >
            {show ? (
                <div className={`typewriter ${noCursor ? 'no-cursor' : ''} ${noBlink ? 'no-blink' : ''}`}>{text}</div>
            ) : null}
        </TypeWriterWrapper>
    );
};

export default TypeWriter;
