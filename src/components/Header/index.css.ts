import styled from 'styled-components';
import { bounceIn } from '../../animations';

export const HeaderWrapper = styled.div`
    font-family: 'Lato', sans-serif;
    width: 100vw;
    height: 3rem;
    background-color: grey;
    display: flex;
    align-items: center;
    align-content: space-between;
    padding: 1rem 0 1rem 0;
    user-select: none;
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
        align-content: space-between;
        width: 100%;
        height: 100%;
        a {
            color: black;
            text-decoration: none;
            transition: transform .2s;
            transform: scale(1);
            padding: 0.5rem;
            &:hover {
                cursor: pointer;
                transform: scale(1.5);
            }
        }
        li {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            
        }
    }
    div {
        width: 100%;
        height: 100%;
        &.center {
            animation: ${bounceIn} 0.75s linear;
            font-size: 2.5rem;
            text-align: center;
        }
    }
`;
