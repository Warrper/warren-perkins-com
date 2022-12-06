import { LinksFunction } from '@remix-run/node';
import styles from './index.css';

export const typeWriterLinks: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];

interface TypeWriterProps {
    text: string;
    typeSpeed: number;
    delay: number;
    noBlink?: boolean;
    textClass?: string;
}

export default function TypeWriter({ textClass, text, typeSpeed, delay, noBlink }: TypeWriterProps) {
    return (
        <div
            className="flex items-center justify-center text-white text-4xl sm:text-5xl md:text-7xl spacing-default"
            style={{
                animation: `hideShow ${delay + 50}ms`,
            }}
        >
            <div
                className={`border-r-[3px] border-white whitespace-nowrap overflow-hidden font-inconsolata ${
                    textClass ? textClass : ''
                }`}
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
