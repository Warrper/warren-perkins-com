import { FunctionalComponent } from 'preact';
import { useEffect } from 'react';
import { HomeWrapper } from './index.css';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import { browserStore } from '../../utils/browserStore';
// import ArticleCard from '../../components/ArticleCard';
// import { CardWrapper } from '../../components/util.css';
import LargeCard from '../../components/LargeCard';

interface HomeProps {}

const Home: FunctionalComponent<HomeProps> = () => {
    const hasSeenAnimation = browserStore.get('sessionStorage', 'hasSeenAnimation');

    useEffect(() => {
        browserStore.set('sessionStorage', 'hasSeenAnimation', 'true');
    }, []);

    return (
        <HomeWrapper>
            <Header />
            <Hero animate={!hasSeenAnimation} />

            <LargeCard
                title="Frontend"
                content={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa modi dignissimos repellendus, 
                totam maiores fugit quibusdam aperiam facere! Dolores iste numquam quidem quaerat. Assumenda, laboriosam 
                magnam hic suscipit eaque omnis ut vel sunt eos. Harum molestias dignissimos minima odio impedit consectetur, 
                vero soluta maiores unde nam nobis sed cumque perspiciatis.`}
                delay={hasSeenAnimation ? 0 : 3500}
            />
            <LargeCard
                title="Backend"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa modi dignissimos repellendus, totam maiores fugit quibusdam aperiam facere! Dolores iste numquam quidem quaerat. Assumenda, laboriosam magnam hic suscipit eaque omnis ut vel sunt eos. Harum molestias dignissimos minima odio impedit consectetur, vero soluta maiores unde nam nobis sed cumque perspiciatis."
                delay={hasSeenAnimation ? 500 : 4000}
            />
        </HomeWrapper>
    );
};

export default Home;
