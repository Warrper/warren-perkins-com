import { LinksFunction } from '@remix-run/node';
import styles from './index.css';

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];

interface TypeWriterProps {
    text: string;
    typeSpeed: number;
}

export default function TypeWriter({ text, typeSpeed }: TypeWriterProps) {
    return (
        <div className="bg-dark-blue flex items-center justify-center">
            <div
                className={`text-pale-blue border-r-[3px] whitespace-nowrap overflow-hidden font-inconsolata text-3xl type-animation`}
                style={{
                    width: `${text.length}.3ch`,
                    animation: `typing ${typeSpeed}ms steps(${text.length}), blinkCaret 500ms infinite step-end alternate`,
                }}
            >
                {text}
            </div>
        </div>
    );
}
