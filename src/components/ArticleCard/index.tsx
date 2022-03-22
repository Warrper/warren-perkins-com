import { FunctionalComponent } from 'preact';
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
    return (
        <ArticleCardWrapper>
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
