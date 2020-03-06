import React from "react";
import {Grid, Typography, Breadcrumbs, Paper, Card, CardContent, CardActions,Button} from "@material-ui/core";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
// import {socket} from "./register";



class dashboard extends React.Component {



    onGamebtnClicked =()=>{
        window.location.href = '/game';

    };

    onWalletBtnClicked = ()=>{
        window.location.href = '/wallet';
    };

    onListBtnClicked = ()=>{
        window.location.href = '/players';

    };


  componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('ds')
  }

    render() {

        const styles ={
            list: {
                margin:'10px',
                padding:'10px',

            },
            cardShadow:{
                boxShadow:`3px 5px 10px grey`,
                elevation:'0.4'
            },
            button:{
                backgroundColor:'#392148',
                color:'white',
            }
        };

        return(
            <Grid container direction='column'  style={{marginTop:"20px"}}>
                <Grid item xs={12} sm={12}>
                    <Paper style={{padding:'20px'}}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Typography color="textPrimary"> Dashboard / </Typography>
                        </Breadcrumbs>
                    </Paper>
                </Grid>

                <Grid container direction='row' justify='center' alignItems='center' style={{marginTop:'20px'}}>

                     <Grid item sm={4} xs={12}  style={styles.list}>
                        <Card  variant="outlined" style={styles.cardShadow} >
                            <CardContent>
                                <Typography color="textPrimary" gutterBottom>
                                  PLAY GAME
                                </Typography>
                                <Typography color="textSecondary" gutterBottom>
                                    Play with computer. Default Score is 100...
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant="contained" style={styles.button} onClick={this.onGamebtnClicked} startIcon={<PlayArrowIcon/>}>PLAY</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item sm={4} xs={12}  style={styles.list} >
                        <Card  variant="outlined"  style={styles.cardShadow} >
                            <CardContent >
                                <Typography color="textPrimary" gutterBottom>
                                    MULTIPLAYER
                                </Typography>
                                <Typography color="textSecondary" gutterBottom>
                                    Play with another online User.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant="outlined" style={styles.button} disabled startIcon={<PlayArrowIcon/>}>PLAY</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item sm={4} xs={12}  style={styles.list}>
                            <Card  variant="outlined" style={styles.cardShadow}>
                                <CardContent>
                                    <Typography color="textPrimary" gutterBottom>
                                       Online Players
                                    </Typography>
                                    <Typography color="textSecondary" gutterBottom>
                                        Check Available User....
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button variant="outlined" style={styles.button} onClick={this.onListBtnClicked} startIcon={<PersonOutlineIcon/>}>View</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    <Grid item xs={12} sm={4} style={styles.list}>
                        <Card  variant="outlined" style={styles.cardShadow} >
                            <CardContent>
                                <Typography color="textPrimary" gutterBottom>
                                    Wallet
                                </Typography>
                                <Typography color="textSecondary" gutterBottom>
                                    Check your Balance ,Top Up....
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant="outlined" style={styles.button} onClick={this.onWalletBtnClicked}  startIcon={<AccountBalanceWalletIcon/>}>Check</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                </Grid>
            </Grid>
        )
    }
}

export default dashboard;
