import { FunctionalComponent } from 'preact';
import { HeroWrapper } from './index.css';
import TypeWriter from '../TypeWriter';

interface HeroProps {}

const Hero: FunctionalComponent<HeroProps> = () => {
    return (
        <HeroWrapper>
            <TypeWriter text={"I'm"} typeSpeed={200} delayStart={0} noBlink={true} />
            <TypeWriter text={'Warren Perkins'} typeSpeed={1000} delayStart={300} noBlink={true} />
            <TypeWriter text={`I'm a developer.`} typeSpeed={1000} delayStart={300 + 1500} />
        </HeroWrapper>
    );
};

export default Hero;
