import { FunctionalComponent } from 'preact';
import { mq } from '../../constants';
import useMediaQuery from '../../hooks/useMediaQuery';
import { ArticleCardWrapper } from './index.css';

interface ArticleCardProps {
    img: {
        src: string;
        alt: string;
    };
    title: string;
    content: string;
    button: {
        text: string;
        link: string;
    };
}

const ArticleCard: FunctionalComponent<ArticleCardProps> = ({ img, title, content, button }) => {
    const isMobile = useMediaQuery(mq('lg'));
    return (
        <ArticleCardWrapper isMobile={isMobile}>
            <figure>
                <img src={img.src} alt={img.alt} />
                <figcaption>
                    <h2>{title}</h2>
                    <p>{content}</p>
                    <a href={button.link}>{button.text}</a>
                </figcaption>
            </figure>
        </ArticleCardWrapper>
    );
};

export default ArticleCard;
