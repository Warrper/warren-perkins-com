import { FunctionalComponent } from 'preact';
import { useEffect } from 'react';
import { HomeWrapper } from './index.css';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import { browserStore } from '../../utils/browserStore';
import LargeCard from '../../components/LargeCard';
import Button from '../../components/Button';
import { CardWrapper } from '../../components/util.css';
import { useNavigate } from 'react-router-dom';

interface HomeProps {}

const Home: FunctionalComponent<HomeProps> = () => {
    const navigate = useNavigate();
    const hasSeenAnimation = browserStore.get('sessionStorage', 'hasSeenAnimation');

    useEffect(() => {
        browserStore.set('sessionStorage', 'hasSeenAnimation', 'true');
    }, []);

    return (
        <HomeWrapper>
            <Header />
            <Hero animate={!hasSeenAnimation} />

            <LargeCard
                title="About Me"
                content={
                    <>
                        <p>
                            I'm a full stack web developer from the north of england. I currently work at the
                            advertising agency <a href="https://havaslynx.com/">Havas Lynx</a>, where I have been a full
                            time developer for over 2 years.
                        </p>
                        <p>
                            While working I have the chance to work with a wide range of frontend and backend
                            technologies including:
                        </p>
                        <ul>
                            <li>React</li>
                            <li>Remix</li>
                            <li>NodeJS</li>
                            <li>Express</li>
                            <li>MongoDB</li>
                            <li>Typescript</li>
                            <li>AWS DynamoDB</li>
                            <li>AWS Lambda</li>
                            <li>AWS API Gateway</li>
                            <li>AWS SES</li>
                            <li>AWS CloudFront</li>
                            <li>AWS S3</li>
                            <li>AWS EKS</li>
                            <li>Pulumi</li>
                            <li>BabylonJS</li>
                        </ul>
                        <div style={{ marginTop: '8vh' }}></div>
                        <CardWrapper justifyContent="space-evenly">
                            <Button onClick={() => navigate('./projects')} text="Check out my Projects" />
                            <Button onClick={() => navigate('./blog')} text="Read more on my blog" />
                        </CardWrapper>
                    </>
                }
                delay={hasSeenAnimation ? 0 : 3000}
            />
        </HomeWrapper>
    );
};

export default Home;
