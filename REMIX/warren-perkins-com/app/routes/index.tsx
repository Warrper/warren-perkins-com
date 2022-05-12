import { LinksFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';
import TypeWriter, { typeWriterLinks } from '~/components/TypeWriter';

export const links: LinksFunction = () => [...typeWriterLinks()];

interface ITextLink {
    children: React.ReactNode;
    href: string;
}

const TextLink = ({ children, href }: ITextLink) => {
    return (
        <Link className="text-neon-blue cursor-pointer hover:underline" to={href}>
            {children}
        </Link>
    );
};

export default function Index() {
    return (
        <div className="w-full font-lato text-2xl md:text-3xl">
            <div className="w-full p-10">
                <TypeWriter text="Hi, I'm" typeSpeed={600} delay={0} noBlink={true} textClass="text-5xl" />
                <TypeWriter
                    text="Warren Perkins"
                    typeSpeed={1000}
                    delay={700}
                    noBlink={true}
                    textClass="text-neon-blue font-bold"
                />
                <TypeWriter text="I'm a Developer." typeSpeed={1000} delay={2000} textClass="text-3xl" />
            </div>
            <div className="w-full py-10 px-[10vw] spacing-wide">
                <p className="text-3xl md:text-5xl text-neon-blue">About Me</p>
                <p className="py-4">
                    I'm a full stack web developer from the North of England. I currently work at the advertising agency{' '}
                    <TextLink href="https://havaslynx.com/">Havas Lynx</TextLink>, where I have been a full time
                    developer for over 2 years.
                </p>
                <p className="py-4">
                    Over the course of my careerer I have had the chance to use a wide range of frontend and backend
                    technologies including:
                </p>
            </div>
        </div>
    );
}
