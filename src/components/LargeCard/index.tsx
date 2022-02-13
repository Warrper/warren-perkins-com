import { FunctionalComponent } from 'preact';
import useDelay from '../../hooks/useDelay';
import { LargeCardWrapper } from './index.css';

interface LargeCardProps {}

const LargeCard: FunctionalComponent<LargeCardProps> = () => {
    const show = useDelay(3500);

    return (
        <>
            {show ? (
                <LargeCardWrapper>
                    <h1>LOREM IPSUM</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quas eligendi nulla totam
                        officiis, neque, illo molestias voluptatem molestiae assumenda cupiditate reprehenderit qui
                        deleniti a asperiores. Numquam, quis ratione enim optio repellendus repudiandae esse ullam
                        necessitatibus dolor fuga quae veritatis amet beatae. Consectetur tenetur doloribus, ipsam porro
                        dolor distinctio obcaecati.
                    </p>
                </LargeCardWrapper>
            ) : null}
        </>
    );
};

export default LargeCard;
