import { FunctionalComponent } from 'preact';
import { HomeWrapper } from './index.css';
import Header from '../../components/Header';
import Hero from '../../components/Hero';

interface HomeProps {}

const Home: FunctionalComponent<HomeProps> = () => {
    return (
        <HomeWrapper>
            <Header />
            <Hero />
        </HomeWrapper>
    );
};

export default Home;
