interface BlogContentProps {
    children: React.ReactNode;
}

export default function BlogContent({ children }: BlogContentProps) {
    return (
        <div className="w-full flex justify-center mt-8">
            <div className="prose md:prose-lg font-lato text-white prose-headings:text-neon-blue prose-a:no-underline prose-blockquote:text-gray-300 hover:prose-a:underline prose-a:text-neon-blue ">
                {children}
            </div>
        </div>
    );
}
