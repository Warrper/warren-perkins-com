interface AnimationProps {
    delay?: number;
    animation?: string;
    children: React.ReactNode;
}

export default function Animation({ delay, animation, children }: AnimationProps) {
    return (
        <div style={{ animation: `hideShow ${delay ? delay + 50 : 0}ms` }}>
            <div className={`${animation}`} style={{ animationDelay: `${delay ? delay : 0}ms` }}>
                {children}
            </div>
        </div>
    );
}
