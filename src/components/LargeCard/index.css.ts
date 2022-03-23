import styled, { keyframes } from 'styled-components';
import { mq } from '../../constants';

const animation = keyframes`
  0% {
    transform: translateY(200%);
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
        color: #00EDFF;
    }
    p {
        animation: ${animation} 1500ms;
        text-align: left;
        font-size: 2rem;
        color: #D9EEFF;
    }

    @media ${mq('lg')} {
      h1 {
        font-size: 2.5rem;
      }
      p {
        font-size: 1.25rem
      }
    }

    @media ${mq('sm')} {
      h1 {
        font-size: 2rem;
      }
      p {
        font-size: 1.25rem
      }
    }

`;
