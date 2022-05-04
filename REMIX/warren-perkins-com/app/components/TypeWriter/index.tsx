import { LinksFunction } from '@remix-run/node';
import styles from './index.css';

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];

interface TypeWriterProps {
    text: string;
    typeSpeed: number;
    delay: number;
    noBlink?: boolean;
}

export default function TypeWriter({ text, typeSpeed, delay, noBlink }: TypeWriterProps) {
    return (
        <div
            className="flex items-center justify-center"
            style={{
                animation: `hideShow ${delay + 50}ms`,
            }}
        >
            <div
                className={`text-white border-r-[3px] border-white whitespace-nowrap overflow-hidden font-inconsolata text-3xl type-animation`}
                style={{
                    width: `${text.length}ch`,
                    borderRight: noBlink ? '3px transparent' : '3px solid',
                    animation: noBlink
                        ? `typing ${typeSpeed}ms steps(${text.length}), solidCaret ${typeSpeed}ms`
                        : `typing ${typeSpeed}ms steps(${text.length}), blinkCaret 500ms infinite step-end alternate`,
                    animationDelay: `${delay}ms`,
                }}
            >
                {text}
            </div>
        </div>
    );
}
