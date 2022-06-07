import { Link } from '@remix-run/react';
import Button from '~/components/Button';

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
            <div className="h-full w-full bg-[rgba(0,0,0,0.5)] p-6">
                <h1 className="text-shadow-md h-1/2 text-2xl text-white transition-all duration-500 group-hover:mb-0 group-hover:h-1/2 group-hover:pt-0 md:mb-10 md:h-full md:pt-72 md:text-3xl">
                    {title}
                </h1>
                <p className="font-bold text-white text-md lg:text-xl text-shadow-md">{description}</p>
                <div className="mt-8 md:mt-8">
                    <Link
                        to={href}
                        className="text-shadow-md font-bold w-32 p-3 md:p-2 border border-neon-blue text-center hover:bg-neon-blue rounded-md"
                    >
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    );
}
