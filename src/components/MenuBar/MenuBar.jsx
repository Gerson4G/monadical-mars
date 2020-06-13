import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { StyledMenuIcon, AccountIcon } from './components';

const MenuBar = (props) => {
    const { setLanguage } = props;
    const [anchorElMenu, setAnchorElMenu] = React.useState(null);
    const [anchorElAccount, setAnchorElAccount] = React.useState(null);
  
    const handleCloseMenu = () => {
      setAnchorElMenu(null);
    };

    const handleCloseAccount = () => {
      setAnchorElAccount(null);
    }

    const changeLanguage = (lang) => {
      setLanguage(lang);
      handleCloseAccount();
    }

    return (
        <AppBar position="static">
            <Toolbar>
            <StyledMenuIcon
                edge="start"
                color="inherit" 
                aria-label="menu" 
                aria-controls={"menu-bar"}
                aria-haspopup="true" 
                onClick={(e) => {setAnchorElMenu(e.currentTarget)}}
            />
            
            <Menu
                id="menu-bar"
                anchorEl={anchorElMenu}
                keepMounted
                open={Boolean(anchorElMenu)}
                onClose={handleCloseMenu}
                getContentAnchorEl={null}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
            >
                <MenuItem onClick={handleCloseMenu}>Profile</MenuItem>
                <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
                <MenuItem onClick={handleCloseMenu}>Logout</MenuItem>
            </Menu>
             
                <Typography variant="h6">
                News
                </Typography>
                <AccountIcon
                  edge="start"
                  color="inherit" 
                  aria-label="menu" 
                  aria-controls={"account-bar"}
                  aria-haspopup="true" 
                  onClick={(e) => {setAnchorElAccount(e.currentTarget)}}
               />
               <Menu
                  id="account-bar"
                  anchorEl={anchorElAccount}
                  keepMounted
                  open={Boolean(anchorElAccount)}
                  onClose={handleCloseAccount}
                  getContentAnchorEl={null}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                >
                  <MenuItem onClick={() => changeLanguage('en')}>English</MenuItem>
                  <MenuItem onClick={() => changeLanguage('es')}>Espanol</MenuItem>
              </Menu>
            </Toolbar>
        </AppBar>
  );
}

export default MenuBar;
