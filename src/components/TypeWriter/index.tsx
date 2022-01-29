import { useEffect, useRef, useState } from 'react';
import { FunctionalComponent } from 'preact';
import { TypeWriterWrapper } from './index.css';

interface TypeWriterProps {
    text: string;
    typeSpeed?: number;
    blinkSpeed?: number;
    delayStart?: number;
    noBlink?: boolean;
    noCursor?: boolean;
}

const TypeWriter: FunctionalComponent<TypeWriterProps> = ({
    text,
    typeSpeed,
    blinkSpeed,
    delayStart,
    noBlink,
    noCursor,
}) => {
    const [show, setShow] = useState(false);
    const startTimeRef = useRef<NodeJS.Timeout>();

    useEffect(() => {
        if (delayStart) {
            startTimeRef.current = setTimeout(() => {
                setShow(true);
            }, delayStart);
        } else {
            setShow(true);
        }
        return () => {
            clearTimeout(startTimeRef.current as any);
        };
    }, [delayStart]);

    return (
        <TypeWriterWrapper
            characterCount={text.length}
            typeSpeed={typeSpeed ? typeSpeed : 1000}
            blinkSpeed={blinkSpeed ? blinkSpeed : 500}
        >
            {show ? (
                <div className={`typewriter ${noCursor ? 'no-cursor' : ''} ${noBlink ? 'no-blink' : ''}`}>{text}</div>
            ) : null}
        </TypeWriterWrapper>
    );
};

export default TypeWriter;
