import styled from 'styled-components';

export const MarkdownRendererWrapper = styled.div`
    font-size: 1.3rem;
    font-family: 'Lato', sans-serif;
    word-spacing: 0.1rem;
    line-height: 2rem;
    padding: 0 10%;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        color: #00edff;
    }
    p {
        padding: 0 2%;
        text-align: left;
        color: #d9eeff;
        word-spacing: 0.2rem;
    }
    pre {
        border-radius: 0.25rem;
        background-color: rgba(0, 237, 255, 0.35);
        padding: 0.5% 0.5%;
        code {
            border-radius: 0.25rem;
        }
    }
    a {
        color: #00edff;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
`;
