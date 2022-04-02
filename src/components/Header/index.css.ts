import styled from 'styled-components';
import { mq } from '../../constants';

export const HeaderWrapper = styled.div`
    font-family: 'Lato', sans-serif;
    width: 100vw;
    display: flex;
    align-items: center;
    align-content: space-between;
    padding: 1rem 0 1rem 0;
    user-select: none;
    .home {
        position: absolute;
        display: flex;
        align-items: center;
        top: 0;
        left: 0;
        height: auto;
        a {
            transform: scale(1);
            transition: transform 0.2s;
            padding: 1.5rem;
            svg {
                width: 2rem;
                fill: lightgrey;
            }
            &:hover {
                cursor: pointer;
                transform: scale(1.5);
            }
        }
    }
    ul {
        flex-direction: row;
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
        align-content: space-between;
        width: 100%;
        height: 100%;
        a {
            font-size: 1.5rem;
            color: lightgray;
            text-decoration: none;
            transition: transform 0.2s;
            transform: scale(1);
            padding: 0.5rem;
            &:hover {
                cursor: pointer;
                transform: scale(1.5);
            }
        }
    }
    li {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        &.active {
            a {
                transform: scale(1.5);
                color: #00edff;
                &:hover {
                    cursor: default;
                }
            }
        }
    }
    div {
        width: 100%;
        height: 100%;
    }

    @media ${mq('md')} {
        .home {
            a {
                padding: 1.25rem 5%;
            }
        }
        ul {
            margin: 0 15%;
            width: 80%;
            a {
                font-size: 1.25rem;
                padding: 0.5rem 0rem;
            }
        }

        .current-page-home {
            ul {
                width: 100%;
                margin: 0;
            }
        }

        .active {
            display: none;
        }
    }
`;
