import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';
import LanguageIcon from '@material-ui/icons/Language';


const screens = [
	{name: 'chart', label: 'Pathfinder data Chart'},
	{name: 'slideshow', label: 'Images Slideshow'},
	{name: 'videofeed', label: 'Live Video'},
	{name: 'tabledata', label: 'Data tables (Viking Lander & Pathfinder)'},
	{name: 'currentdata', label: 'Lastest data from Viking Lander'},
];

const AccountIcon = styled(LanguageIcon)`
    cursor: pointer;
`;

const StyledMenuIcon = styled(MenuIcon)`
    cursor: pointer;
`;

export { StyledMenuIcon, AccountIcon, screens };
