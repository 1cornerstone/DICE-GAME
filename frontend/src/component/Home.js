import React, {Component} from 'react'
import {Avatar, Card, CardContent, Container, Grid, Typography} from "@material-ui/core";
import playnow from './assest/playnow.jpeg'
import register from './assest/register.png'
import wallet from './assest/wallet.png'
import multiplayer from './assest/multiplayer.png'


class home extends Component {


    onPlayNowClicked =()=>{
         window.location.href = "/game";
    };

    render() {

        const styles = {
            root: {
                flexGrow: 1,
                width: '100%',
                marginTop:'20px'
            },
            typo: {
               margin:'10px',
                textAlign:'center'

            },
            avatar :{
               fontSize:'25px' ,
                margin: "auto",
                width: '40px',
                height:'40px'
            },
            card:{
                height:'170px',
                paddingTop:'10px'
            }
        };

        return (
            <Container>
                <Grid container style={styles.root} spacing={2} direction="column" justify='center' alignItems='center' >

                    <Grid container direction="row" justify='center' alignItems='center' >
                        <Grid item ><Avatar style={styles.avatar}>D</Avatar></Grid>
                        <Grid item ><Avatar style={styles.avatar}>I</Avatar></Grid>
                        <Grid item ><Avatar style={styles.avatar}>C</Avatar></Grid>
                        <Grid item ><Avatar style={styles.avatar}>E</Avatar></Grid>
                        <Grid item style={{margin:'3px'}}></Grid>
                        <Grid item ><Avatar style={styles.avatar}>G</Avatar></Grid>
                        <Grid item ><Avatar style={styles.avatar}>A</Avatar></Grid>
                        <Grid item ><Avatar style={styles.avatar}>M</Avatar></Grid>
                        <Grid item ><Avatar style={styles.avatar}>E</Avatar></Grid>

                    </Grid>

                    <Grid item>
                        <Typography variant="h5" component="h5">How it works</Typography>

                    </Grid>
                    <Grid container spacing={2} direction="row" justify='center' alignItems='center'>

                        <Grid item xs={12} sm={3}>
                            <Card style={styles.card}>
                                <CardContent>
                                        <Avatar style={{height:'50px', width:'50px', fontSize:'60px',margin:'auto'}} src={register}></Avatar>
                                    <Typography gutterBottom variant="body1"  component="p"  style={styles.typo}>
                                       Register
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                    Join the game community.
                                    </Typography>
                                </CardContent>

                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Card style={styles.card}>
                                <CardContent>
                                    <Avatar style={{height: '50px', width: '50px', fontSize: '60px', margin: 'auto'}} src={wallet}/>

                                    <Typography gutterBottom variant="body1"  component="p" style={styles.typo}>
                                      Wallet
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                      Secure wallet available to keep your earned DG coin
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Card style={styles.card}>
                                <CardContent>
                                    <Avatar style={{height:'50px', width:'60px', fontSize:'60px',margin:'auto'}} src={multiplayer}/>
                                    <Typography gutterBottom variant="body1" component="p" style={styles.typo}>
                                       Computer
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                      Play with computer.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Card style={styles.card}>
                                <CardContent>
                                    <Avatar style={{height:'50px', width:'50px', fontSize:'60px',margin:'auto'}} src={multiplayer}/>
                                    <Typography gutterBottom variant="body1" component="p" style={styles.typo}>
                                       Multiplayer
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" >
                                      Bet with another player online using DG Coin.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={12} style={{textAlign:'center'}}>
                                <img style={{textAlign:'center', margin: 'auto', height:'80px'}} src={playnow} onClick={this.onPlayNowClicked}/>
                        </Grid>

                    </Grid>

                </Grid>

            </Container>
        );
    }
}

export default home;