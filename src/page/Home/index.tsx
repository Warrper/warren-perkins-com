import { FunctionalComponent } from 'preact';
import { HomeWrapper } from './index.css';

interface HomeProps {}

const Home: FunctionalComponent<HomeProps> = () => {
    return <HomeWrapper>Home Page</HomeWrapper>;
};

export default Home;
