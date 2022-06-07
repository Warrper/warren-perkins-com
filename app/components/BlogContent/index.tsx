interface BlogContentProps {
    children: React.ReactNode;
}

export default function BlogContent({ children }: BlogContentProps) {
    return (
        <div className="w-full flex justify-center mt-8">
            <div
                className={`prose md:prose-lg font-lato text-white prose-headings:text-neon-blue prose-a:no-underline prose-blockquote:text-gray-300 prose-code:text-white
                hover:prose-a:underline prose-a:text-neon-blue max-w-[95vw] lg:max-w-4xl prose-pre:p-1 md:prose-pre:p-1 prose-pre:bg-[#00edff59] prose-pre:max-w-[100vw]`}
            >
                {children}
            </div>
        </div>
    );
}
