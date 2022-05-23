import { LinksFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';
import TypeWriter, { typeWriterLinks } from '~/components/TypeWriter';
import TagCloud from '~/components/TagCloud';
import Animation from '~/components/Animation';

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
        <div className="w-full font-lato text-xl md:text-3xl">
            <div className="w-full p-4 sm:p-10">
                <TypeWriter text="Hi, I'm" typeSpeed={600} delay={0} noBlink={true} textClass="text-4xl sm:text-5xl" />
                <TypeWriter
                    text="Warren Perkins"
                    typeSpeed={1000}
                    delay={700}
                    noBlink={true}
                    textClass="text-neon-blue font-bold"
                />
                <TypeWriter text="I'm a Developer." typeSpeed={1000} delay={2000} textClass="text-xl sm:text-4xl" />
            </div>
            <div className="w-full py-4 sm:py-10 px-[10vw] spacing-wide overflow-hidden">
                <Animation delay={3000} animation="animate-slide-in-up">
                    <p className="text-2xl md:text-5xl text-neon-blue">About Me</p>
                </Animation>

                <Animation delay={3200} animation="animate-slide-in-up">
                    <p className="py-4">
                        I'm a full stack web developer from the North of England. I currently work at the advertising
                        agency <TextLink href="https://havaslynx.com/">Havas Lynx</TextLink>, where I have been a full
                        time developer for over 2 years.
                    </p>
                </Animation>

                <Animation delay={3500} animation="animate-slide-in-up">
                    <p className="py-4">
                        Over the course of my careerer I have had the chance to use a wide range of frontend and backend
                        technologies including:
                    </p>
                </Animation>

                <Animation delay={3500} animation="animate-slide-in-up">
                    <TagCloud
                        items={[
                            { text: 'React' },
                            { text: 'Remix' },
                            { text: 'NodeJS' },
                            { text: 'Express' },
                            { text: 'MongoDB' },
                            { text: 'Typescript' },
                            { text: 'AWS DynamoDB' },
                            { text: 'AWS Lambda' },
                            { text: 'AWS API Gateway' },
                            { text: 'AWS SES' },
                            { text: 'AWS CloudFront' },
                            { text: 'AWS S3' },
                            { text: 'AWS EKS' },
                            { text: 'Pulumi' },
                            { text: 'BabylonJS' },
                        ]}
                    />
                </Animation>
            </div>
        </div>
    );
}
