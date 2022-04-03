import styled from 'styled-components';

interface IArticleCardWrapper {
    isMobile?: boolean;
}

export const ArticleCardWrapper = styled.div<IArticleCardWrapper>`
    margin: 30px;
    width: 300px;
    height: 400px;

    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.5);
    &:hover {
        figcaption {
            top: 50%;
            transform: translateY(-50%);
        }

        img {
            transform: translateY(-10px);
        }

        figure {
            &::after {
                top: 0;
            }
        }

        p {
            margin: 20px 0;
        }
    }

    figure {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        margin: 0px;

        &::after {
            position: absolute;
            top: ${props => props.isMobile ? '0' : 'calc(100% - 140px)'};
            display: block;
            content: '';
            width: 100%;
            height: 100%;
            background: linear-gradient(0deg, rgba(0, 0, 0, 0.8) 50%, rgba(255, 255, 255, 0) 100%);
            transition: 0.3s;
        }
    }

    img {
        transition: 0.5s ease-in-out;
        filter: brightness(80%);
    }

    figcaption {
        position: absolute;
        top: ${props => props.isMobile ? '50%' : 'calc(100% - 130px)'};
        left: 1rem;
        z-index: 1;
        color: white;
        transform: ${props => props.isMobile ? 'translateY(-50%)' : 'unset'};
        text-align: left;
        transition: 0.3s;
        width: 100%;
        margin: 0 auto;
    }

    h2 {
        width: 100%;
        margin: 0;
        height: 130px;
        overflow: hidden;
        font-family: 'Inconsolata', monospace;
        font-size: 1.75rem;
        line-height: 28px;
        text-shadow: 0px 1px 5px black;
        text-overflow: ellipsis;
    }

    p {
        line-height: 1.3rem;
        max-height: 5.3rem;
        width: 80%;
        margin: 0;
        overflow: hidden;
        font-family: 'Lato', sans-serif;
        font-size: 1rem;
        text-overflow: ellipsis;
        transition: 0.5s ease-in-out;
    }

    a {
        display: inline-block;
        padding: 10px 20px;
        color: white;
        border: 1px solid white;
        font-family: 'Lato', sans-serif;
        font-size: 1.25rem;
        text-transform: uppercase;
        text-decoration: none;
        transition: 0.3s;
        margin-top: 1rem;

        &:hover {
            color: black;
            background-color: white
        }
    }
`;
