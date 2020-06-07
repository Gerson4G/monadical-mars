import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { StyledMenuIcon, AccountIcon } from './components';

export default function MenuBar() {
    const [anchorElMenu, setAnchorElMenu] = React.useState(null);
    const [anchorElAccount, setAnchorElAccount] = React.useState(null);
  
    const handleCloseMenu = () => {
      setAnchorElMenu(null);
    };

    const handleCloseAccount = () => {
      setAnchorElAccount(null);
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
                  <MenuItem onClick={handleCloseAccount}>Profile</MenuItem>
                  <MenuItem onClick={handleCloseAccount}>Account settings</MenuItem>
                  <MenuItem onClick={handleCloseAccount}>Logout</MenuItem>
              </Menu>
            </Toolbar>
        </AppBar>
  );
}