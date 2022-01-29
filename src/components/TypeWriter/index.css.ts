import styled, {keyframes} from "styled-components";

const typing = keyframes`
  from {
    width: 0
  }

`;

const blinkCaret = keyframes`
  50% {
    border-color: transparent
  }
`;

const solidCaret = keyframes`
  0% {
    border-right: 3px solid;
  }
  99% {
    border-right: 3px solid;
  }
  100% {
    border-color: transparent
  }
`;

interface TypeWriterWrapperProps {
    characterCount: number;
    typeSpeed: number;
    blinkSpeed: number;
    fontSize?: string
}

export const TypeWriterWrapper = styled.div<TypeWriterWrapperProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    .typewriter {
        width: ${(props) => props.characterCount}ch;
        animation: ${typing} ${(props) => props.typeSpeed}ms steps(${(props) => props.characterCount}),
            ${blinkCaret} ${(props) => props.blinkSpeed}ms infinite step-end alternate;
        white-space: nowrap;
        overflow: hidden;
        border-right: 3px solid;
        font-family: 'Inconsolata', monospace;
        font-size: ${props => props.fontSize ? props.fontSize : '2rem'};
        &.no-blink {
          border-right: transparent;
          animation: ${typing} ${(props) => props.typeSpeed}ms steps(${(props) => props.characterCount}), ${solidCaret} ${(props) => props.typeSpeed}ms;
        }
        &.no-cursor {
          animation: ${typing} ${(props) => props.typeSpeed}ms steps(${(props) => props.characterCount});
          border-right: transparent;
        }
    }
`;