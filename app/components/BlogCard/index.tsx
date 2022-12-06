import { Link } from '@remix-run/react';

interface BlogCardProps {
    title: string;
    description: string;
    href: string;
    image?: string;
}

export default function BlogCard({ title, description, href, image }: BlogCardProps) {
    return (
        <div
            className={`group m-1 my-4 flex h-96 w-11/12 flex-col overflow-hidden rounded-md bg-[length:auto_100%] bg-center transition-all duration-700 hover:bg-[length:auto_150%] md:w-5/12 lg:w-3/12 shadow-xl`}
            style={{ backgroundImage: `url(${image ? image : 'https://picsum.photos/1920/1080'})` }}
        >
            <div className="h-full w-full bg-[rgba(0,0,0,0.5)] text-white">
                <div className="flex flex-col h-1/2 md:h-full group-hover:h-1/2 transition-all duration-500">
                    <div className='flex flex-grow md:group-hover:flex-grow-0 transition-all duration-700'></div>
                    <h1 className='font-bold text-shadow-md text-3xl md:text-3xl text-white px-2 py-5'>{title}</h1>
                </div>
                <div className="flex h-1/2 flex-col">
                    <p className=" text-white text-md text-shadow-md px-4">{description}</p>
                    <div className="mt-8 md:mt-8 px-4">
                        <Link
                            to={href}
                            className="text-shadow-md font-bold w-32 p-3 md:p-2 border border-neon-blue text-center hover:bg-neon-blue rounded-md"
                        >
                            Read More
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
