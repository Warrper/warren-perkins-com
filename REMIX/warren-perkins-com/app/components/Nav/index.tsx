interface NavProps {
  navItems: { text: string; link: string }[];
}

export default function Nav({navItems}: NavProps) {
  return <nav className="font-lato w-screen flex items-center content-space-between px-4 select-none">
    <div>
      <ul className="flex flex-row list-none m-0 p-0 items-center content-space-between w-full h-full">
        {navItems.map(item => {
          return <a className="text-grey-400 no-underline p-1 scale-100 cursor-pointer hover:scale-150 transition-all" href={`${item.link}`}>{item.text}</a>
        })}
      </ul>
    </div>
  </nav>
}