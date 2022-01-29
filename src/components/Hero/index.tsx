import { FunctionalComponent } from 'preact';
import { HeroWrapper } from './index.css';
import TypeWriter from '../TypeWriter';
import useMediaQuery from '../../hooks/useMediaQuery';

interface HeroProps {}

const Hero: FunctionalComponent<HeroProps> = () => {
    const isMobile = useMediaQuery('(max-width: 600px)');
    return (
        <HeroWrapper>
            <TypeWriter
                fontSize={isMobile ? '3rem' : '5rem'}
                text={"Hi, I'm"}
                typeSpeed={600}
                delayStart={0}
                noBlink={true}
            />
            <TypeWriter
                fontSize={isMobile ? '3rem' : '5rem'}
                text={'Warren Perkins'}
                typeSpeed={1000}
                delayStart={700}
                noBlink={true}
            />
            <TypeWriter
                fontSize={isMobile ? '1rem' : '2rem'}
                text={`I'm a developer.`}
                typeSpeed={1000}
                delayStart={700 + 1500}
            />
        </HeroWrapper>
    );
};

export default Hero;
