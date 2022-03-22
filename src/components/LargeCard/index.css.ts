import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  0% {
    transform: translateY(200%);
  }
  100% {
    transform: translateY(0);
  }
`;

export const LargeCardWrapper = styled.div`
    padding: 0 5rem 0 5rem;
    overflow: hidden;
    margin: 0 12rem;
    h1 {
        font-size: 3rem;
        animation: ${animation} 1000ms;
        color: #00EDFF;
    }
    p {
        animation: ${animation} 1000ms;
        text-align: left;
        font-size: 2rem;
        color: #D9EEFF;
    }
`;
