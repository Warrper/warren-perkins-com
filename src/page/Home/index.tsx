import { FunctionalComponent } from 'preact';
import { HomeWrapper } from './index.css';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import LargeCard from '../../components/LargeCard';

interface HomeProps {}

const Home: FunctionalComponent<HomeProps> = () => {
    return (
        <HomeWrapper>
            <Header />
            <Hero />
            <LargeCard />
        </HomeWrapper>
    );
};

export default Home;
