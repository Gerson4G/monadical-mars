import styled from 'styled-components';

const OptionsContainer = styled.div`
 	flex-grow: 1;
	display: flex;
	height: 28em;
	width: ${({width}) => width};
	.MuiTabs-scroller {
		overflow: auto!important;
	}
`;

export { OptionsContainer };