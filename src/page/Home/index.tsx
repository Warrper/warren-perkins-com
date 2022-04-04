import { FunctionalComponent } from 'preact';
import { useEffect } from 'react';
import { HomeWrapper } from './index.css';
import Header from '../../components/Header';
import { browserStore } from '../../utils/browserStore';
import Button from '../../components/Button';
import { FlexWrapper } from '../../components/util.css';
import { useNavigate } from 'react-router-dom';
import useMediaQuery from '../../hooks/useMediaQuery';
import { mq } from '../../constants';
import TypeWriter from '../../components/TypeWriter';
import useDelay from '../../hooks/useDelay';

interface HomeProps {}

const Home: FunctionalComponent<HomeProps> = () => {
    const navigate = useNavigate();
    const hasSeenAnimation = browserStore.get('sessionStorage', 'hasSeenAnimation');
    const isMobile = useMediaQuery(mq('md'));
    const showMainContent = useDelay(hasSeenAnimation ? 0 : 3000);

    return (
        <HomeWrapper>
            <Header currentPage="home" />
            <div>
                <TypeWriter
                    fontSize={isMobile ? '3rem' : '5rem'}
                    text={"Hi, I'm"}
                    typeSpeed={!hasSeenAnimation ? 600 : 0.0001}
                    delayStart={0}
                    noBlink={true}
                />
                <TypeWriter
                    fontSize={isMobile ? '3rem' : '5rem'}
                    text={'Warren Perkins'}
                    color={'#00EDFF'}
                    typeSpeed={!hasSeenAnimation ? 1000 : 0.0001}
                    delayStart={!hasSeenAnimation ? 700 : 0}
                    noBlink={true}
                />
                <TypeWriter
                    fontSize={isMobile ? '1rem' : '2rem'}
                    text={`I'm a developer.`}
                    typeSpeed={!hasSeenAnimation ? 1000 : 0.0001}
                    delayStart={!hasSeenAnimation ? 2200 : 0}
                    onEnd={() => {
                        browserStore.set('sessionStorage', 'hasSeenAnimation', 'true');
                    }}
                />
            </div>

            {showMainContent ? (
                <div className="main-content">
                    <h1>About Me</h1>
                    <p>
                        I'm a full stack web developer from the North of England. I currently work at the advertising
                        agency <a href="https://havaslynx.com/">Havas Lynx</a>, where I have been a full time developer
                        for over 2 years.
                    </p>
                    <p>
                        While working I have had the chance to use a wide range of frontend and backend technologies
                        including:
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
                    <FlexWrapper justifyContent="space-evenly">
                        <Button onClick={() => navigate('./blog')} text="Read more on my blog" />
                        {/* <Button onClick={() => navigate('./projects')} text="Check out my Projects" /> */}
                    </FlexWrapper>
                </div>
            ) : null}
        </HomeWrapper>
    );
};

export default Home;
