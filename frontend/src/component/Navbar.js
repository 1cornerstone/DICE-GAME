import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {AppBar, Button, Grid} from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles(theme => ({
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },

    },
}));

export default function Navbar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = event => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>

                <p>LOGIN</p>
            </MenuItem>
            <MenuItem>
                <p>SIGN UP</p>
            </MenuItem>
        </Menu>
    );
    const btnwidth ={
       width:'auto'
       }


    return (
        <div className={classes.grow} >
            <AppBar position="static" style={{backgroundColor: '#392148'}}>
                <Toolbar>
                    <Grid container direction='row' spacing={2} alignItems='center'>

                        <Grid item xs={5} sm={4}>
                            <Typography variant="h6">
                                DICE-GAME
                            </Typography>
                        </Grid>
                        <Grid item xs={7} sm={8} >

                            <div className={classes.sectionDesktop}>

                                <Grid item xs={12} sm={12} style={{width:'100%'}}>
                                    <Grid container spacing={1}  direction='row' justify='flex-end' >
                                        <Grid item xs={5} sm={2}>
                                            <Button  color="inherit" style={btnwidth} > SIGN UP </Button>
                                        </Grid>
                                        <Grid item xs={5} sm={2} >
                                            <Button color="inherit"style={btnwidth} > LOGIN </Button>
                                        </Grid>

                                        <Grid item xs={5} sm={2}  hidden >
                                            <Typography color="inherit"  > DASHBOARD </Typography>
                                        </Grid>

                                        <Grid item xs={5} sm={2}    hidden  >
                                            <Typography  color="inherit"> WALLET </Typography>
                                        </Grid>

                                        <Grid item xs={5} sm={2}   hidden>
                                            <AccountCircle />
                                        </Grid>

                                    </Grid>
                                </Grid>

                            </div>

                            <div className={classes.sectionMobile}  style={{float:'right'}}>
                                <IconButton
                                    aria-label="show more"
                                    aria-controls={mobileMenuId}
                                    aria-haspopup="true"
                                    color="inherit"
                                    onClick={handleMobileMenuOpen}
                                    style={{width:'60px'}}
                                >
                                    <MenuIcon/>
                                </IconButton>
                            </div>

                        </Grid>

                    </Grid>


                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
}
