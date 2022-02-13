import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const LargeCardWrapper = styled.div`
    margin-top: 4rem;
    padding: 0 5rem 0 5rem;
    animation: ${animation} 3500ms ;
    h1 {
        font-size: 2rem;
    }
    p {
            text-align: left;
            font-size: 1.2rem;
    }
`;
