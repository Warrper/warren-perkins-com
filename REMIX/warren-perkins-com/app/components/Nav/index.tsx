interface NavProps {
    navItems: { text: string; link: string }[];
}

export default function Nav({ navItems }: NavProps) {
    return (
        <nav className="text-white fixed font-lato w-screen flex p-4 border-b-2 border-[#45515C] bg-dark-blue">
            <ul className="flex flex-row list-none m-0 p-0 w-full h-full justify-around text-2xl">
                {navItems.map((item) => {
                    return (
                        <a
                            key={item.link}
                            className="text-grey-400 no-underline p-1 scale-100 cursor-pointer hover:scale-150 transition-all duration-300 "
                            href={`${item.link}`}
                        >
                            {item.text}
                        </a>
                    );
                })}
            </ul>
        </nav>
    );
}
