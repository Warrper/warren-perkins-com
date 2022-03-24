import styled from 'styled-components';
import { mq } from '../../constants';

export const ButtonWrapper = styled.button`
  background-color: rgba(0,0,0,0);
  border: 1px solid #00edff;
  border-radius: 0.2rem;
  padding: 1rem 2rem;
  text-align: center;
  text-decoration: none;
  font-size: 2rem;
  font-family: 'Lato', sans-serif;
  color: white;
  transform: scale(1);
  transition: 0.1s transform ease-in-out;
  max-width: 300px;
  &:hover {
    background-color: #00edff;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transform: scale(1.1);
  }

  @media ${mq('md')} {
    font-size: 1.5rem;
    margin: 10px;
    padding: 0.5rem 1rem;
  }
`;
