import { FunctionalComponent } from 'preact';
import { HeroWrapper } from './index.css';
import TypeWriter from '../TypeWriter';
import useMediaQuery from '../../hooks/useMediaQuery';

interface HeroProps {
    animate: boolean;
}

const Hero: FunctionalComponent<HeroProps> = ({ animate }) => {
    const isMobile = useMediaQuery('(max-width: 600px)');
    return (
        <HeroWrapper>
            <TypeWriter
                fontSize={isMobile ? '3rem' : '5rem'}
                text={"Hi, I'm"}
                typeSpeed={animate ? 600 : 0.0001}
                delayStart={0}
                noBlink={true}
            />
            <TypeWriter
                fontSize={isMobile ? '3rem' : '5rem'}
                text={'Warren Perkins'}
                color={'#00EDFF'}
                typeSpeed={animate ? 1000 : 0.0001}
                delayStart={animate ? 700 : 0}
                noBlink={true}
            />
            <TypeWriter
                fontSize={isMobile ? '1rem' : '2rem'}
                text={`I'm a developer.`}
                typeSpeed={animate ? 1000 : 0.0001}
                delayStart={animate ? 2200 : 0}
            />
        </HeroWrapper>
    );
};

export default Hero;
