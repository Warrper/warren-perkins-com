import { FunctionalComponent } from 'preact';
import useDelay from '../../hooks/useDelay';
import { LargeCardWrapper } from './index.css';

interface LargeCardProps {
    title: string;
    content: string;
    delay: number;
}

const LargeCard: FunctionalComponent<LargeCardProps> = ({ title, content, delay }) => {
    const show = useDelay(delay);

    return (
        <>
            {show ? (
                <LargeCardWrapper>
                    <h1>{title}</h1>
                    <p>{content}</p>
                </LargeCardWrapper>
            ) : null}
        </>
    );
};

export default LargeCard;
