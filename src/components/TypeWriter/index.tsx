import { useEffect, useRef, useState } from 'react';
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
}

const TypeWriter: FunctionalComponent<TypeWriterProps> = ({
    text,
    typeSpeed,
    blinkSpeed,
    delayStart,
    noBlink,
    noCursor,
    fontSize,
}) => {
    const show = useDelay(delayStart ? delayStart : 0);

    return (
        <TypeWriterWrapper
            characterCount={text.length}
            typeSpeed={typeSpeed ? typeSpeed : 1000}
            blinkSpeed={blinkSpeed ? blinkSpeed : 500}
            fontSize={fontSize}
        >
            {show ? (
                <div className={`typewriter ${noCursor ? 'no-cursor' : ''} ${noBlink ? 'no-blink' : ''}`}>{text}</div>
            ) : null}
        </TypeWriterWrapper>
    );
};

export default TypeWriter;
