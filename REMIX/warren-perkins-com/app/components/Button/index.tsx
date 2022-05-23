import { Link } from '@remix-run/react';

interface ButtonProps {
    href?: string;
    onClick?: () => void;
    children: React.ReactNode;
}

const className = `m-4 text-xl sm:text-3xl py-4 px-10 border border-2 border-neon-blue text-white
font-lato rounded-md scale-100 cursor-pointer hover:scale-125 transition-all duration-300 hover:bg-neon-blue`;

export default function Button({ href, onClick, children }: ButtonProps) {
    return href ? (
        <Link className={className} to={href} onClick={onClick}>
            {children}
        </Link>
    ) : (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
}
