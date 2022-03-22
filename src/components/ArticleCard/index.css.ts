import styled from 'styled-components';

export const ArticleCardWrapper = styled.div`
    margin: 30px;

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
        position: relative;
        max-height: 400px;
        overflow: hidden;
        margin: 0px;

        /* Desktop */
        max-height: 500px;

        &::after {
            position: absolute;
            top: 0;
            display: block;
            content: '';
            width: 100%;
            height: 100%;
            background: linear-gradient(0deg, rgba(0, 0, 0, 0.5) 40%, rgba(255, 255, 255, 0) 100%);
            transition: 0.3s;

            /* Desktop */
            top: calc(100% - 140px);
        }
    }

    img {
        transition: 0.5s ease-in-out;
    }

    figcaption {
        position: absolute;
        top: 50%;
        z-index: 1;
        padding: 0 20px;
        color: white;
        transform: translateY(-50%);
        text-align: center;
        transition: 0.3s;

        /* Desktop */
        top: calc(100% - 110px);
        transform: unset;
    }

    h2 {
        display: -webkit-box;
        max-height: 85px;
        overflow: hidden;
        font-family: 'Inconsolata', monospace;
        font-size: 23px;
        line-height: 28px;
        text-shadow: 0px 1px 5px black;
        text-overflow: ellipsis;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }

    p {
        display: -webkit-box;
        max-height: 150px;
        margin: 20px 0;
        overflow: hidden;
        font-family: 'Lato', sans-serif;
        font-size: 16px;
        line-height: 20px;
        text-overflow: ellipsis;
        transition: 0.5s ease-in-out;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;

        /* Desktop */
        margin: 60px 0;
    }

    a {
        display: inline-block;
        padding: 10px 20px;
        color: white;
        border: 1px solid white;
        font-family: 'Lato', sans-serif;
        font-size: 12px;
        text-transform: uppercase;
        text-decoration: none;
        transition: 0.3s;

        &:hover {
            color: black;
            background-color: white
        }
    }
`;
