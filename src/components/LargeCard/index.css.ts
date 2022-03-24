import styled, { keyframes } from 'styled-components';
import { mq } from '../../constants';

const animation = keyframes`
  0% {
    transform: translateY(80vh);
  }
  100% {
    transform: translateY(0);
  }
`;


export const LargeCardWrapper = styled.div`
    padding: 0 5vw 0 5vw;
    overflow: hidden;
    margin: 0 5vw;
    h1 {
        font-size: 3rem;
        animation: ${animation} 1500ms;
        color: #00edff;
    }
    p {
        animation: ${animation} 1800ms;
        text-align: left;
        font-size: 2rem;
        color: #d9eeff;
        word-spacing: 0.4rem;
    }
    a {
        text-decoration: none;
        color: #00edff;
        &:hover {
          text-decoration: underline;
        }

    } 

    ul {
        
        list-style: none;
        padding: 0vh 5vw;
        display: flex;
        flex-direction: row;
        animation: ${animation} 2000ms;
        justify-content: center;
        font-size: 2rem;
        flex-wrap: wrap;
        color: #d9eeff;
        
        li {
            margin: 0.5rem 1rem;
            user-select: none;
            padding: 0.26rem;
            box-shadow: 0px 5px 10px 0px rgba(0, 237, 255, 0.2);
        }
    }

    button {
        animation: ${animation} 1800ms;
    }

    @media ${mq('lg')} {
        h1 {
            font-size: 2.5rem;
        }
        p {
            font-size: 1.25rem;
        }
        ul { 
            font-size: 1.25rem;
            li {
            margin: 0.25rem 0.5rem;
        }
        }
    }

    @media ${mq('sm')} {
        h1 {
            font-size: 2rem;
        }
    }
`;
