import { FunctionalComponent } from 'preact';
import { HomeWrapper } from './index.css';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
// import ArticleCard from '../../components/ArticleCard';
// import { CardWrapper } from '../../components/util.css';
import LargeCard from '../../components/LargeCard';

interface HomeProps {}

const Home: FunctionalComponent<HomeProps> = () => {
    return (
        <HomeWrapper>
            <Header />
            <Hero />

            <LargeCard
                title="Frontend"
                content={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa modi dignissimos repellendus, 
                totam maiores fugit quibusdam aperiam facere! Dolores iste numquam quidem quaerat. Assumenda, laboriosam 
                magnam hic suscipit eaque omnis ut vel sunt eos. Harum molestias dignissimos minima odio impedit consectetur, 
                vero soluta maiores unde nam nobis sed cumque perspiciatis.`}
                delay={3500}
            />
            <LargeCard
                title="Backend"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa modi dignissimos repellendus, totam maiores fugit quibusdam aperiam facere! Dolores iste numquam quidem quaerat. Assumenda, laboriosam magnam hic suscipit eaque omnis ut vel sunt eos. Harum molestias dignissimos minima odio impedit consectetur, vero soluta maiores unde nam nobis sed cumque perspiciatis."
                delay={4000}
            />
        </HomeWrapper>
    );
};

export default Home;
