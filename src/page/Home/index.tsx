import { FunctionalComponent } from 'preact';
import { HomeWrapper } from './index.css';
import Header from '../../components/Header';

interface HomeProps {}

const Home: FunctionalComponent<HomeProps> = () => {
    return (
        <HomeWrapper>
            <Header />
            <p>I'm a developer</p>
        </HomeWrapper>
    );
};

export default Home;
