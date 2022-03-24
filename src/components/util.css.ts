import styled from 'styled-components';

interface ICardWrapper {
	justifyContent?: string;
}

export const CardWrapper = styled.div<ICardWrapper>`
	display: flex;
	flex-wrap: wrap;
	justify-content: ${(props) => props.justifyContent ? props.justifyContent : 'center'};
	width: 100%;
	margin: 20px 0 80px;
`