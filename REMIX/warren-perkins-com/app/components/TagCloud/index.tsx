interface TagCloudProps {
    items: {
        text: string;
    }[];
}

export default function TagCloud({ items }: TagCloudProps) {
    return (
        <ul className={`flex flex-row justify-center font-xl flex-wrap text-pale-blue px-[5vw] select-none`}>
            {items.map((item) => (
                <li
                    key={item.text}
                    className={`mx-2 sm:mx-4 my-1 sm:my-2 p-1 text-xl sm:text-3xl shadow-[0px_5px_10px_0px_rgba(0,237,255,0.2)]`}
                >
                    {item.text}
                </li>
            ))}
        </ul>
    );
}
