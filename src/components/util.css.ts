import styled from 'styled-components';

interface IFlexWrapper {
	justifyContent?: string;
	margin?: string;
	width?: string;
}

export const FlexWrapper = styled.div<IFlexWrapper>`
	display: flex;
	flex-wrap: wrap;
	justify-content: ${(props) => props.justifyContent ? props.justifyContent : 'center'};
	width: ${(props) => props.width ? props.width : '100%'};
	margin: ${(props) => props.margin ? props.margin : '20px 0 80px'};
`
