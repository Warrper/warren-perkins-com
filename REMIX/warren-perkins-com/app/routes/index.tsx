import { LinksFunction } from '@remix-run/node';
import TypeWriter, { typeWriterLinks } from '~/components/TypeWriter';

export const links: LinksFunction = () => [...typeWriterLinks()];

export default function Index() {
    return (
        <>
            <div className="w-full pt-10">
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
        </>
    );
}
