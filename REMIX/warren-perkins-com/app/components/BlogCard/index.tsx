import { Link } from '@remix-run/react';

interface BlogCardProps {
    title: string;
    description: string;
    href: string;
}

export default function BlogCard({ title, description, href }: BlogCardProps) {
    return (
        <div className="group m-1 my-4 flex h-96 w-11/12 flex-col overflow-hidden rounded-md bg-[url('https://picsum.photos/1920/1080')] bg-[length:auto_100%] bg-center transition-all duration-700 hover:bg-[length:auto_150%] md:w-5/12 lg:w-3/12 shadow-xl ">
            <div className="h-full w-full bg-[rgba(0,0,0,0.3)] p-6">
                <h1 className="h-1/2 text-3xl text-white transition-all duration-500 group-hover:mb-0 group-hover:h-1/2 group-hover:pt-0 md:mb-10 md:h-full md:pt-72 lg:text-2xl">
                    {title}
                </h1>
                <p className="text-white">{description}</p>
                <div className="mt-8 md:mt-8">
                    <Link
                        to={href}
                        className="w-32 p-4 md:p-2 border border-white text-center hover:bg-white hover:text-black"
                    >
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    );
}
