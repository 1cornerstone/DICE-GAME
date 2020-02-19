import React, {Component} from 'react'
import {Grid, Typography, Card, CardContent, Container,Avatar} from "@material-ui/core";
import background from './assest/diceplay.jpg'
import register from './assest/register.png'
import wallet from './assest/wallet.png'
import multiplayer from './assest/multiplayer.png'
import computer from './assest/computer.png'


class home extends Component {

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
               fontSize:'20px' ,
                margin: "auto",
                width: '40px',
                height:'40px'
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
                        <Grid item style={{margin:'2px'}}></Grid>
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
                            <Card>
                                <CardContent>
                                        <Avatar style={{height:'50px', width:'50px', fontSize:'60px',margin:'auto'}} src={register}></Avatar>

                                    <Typography gutterBottom variant="body1"  component="p"  style={styles.typo}>
                                       Register
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                       Register content
                                    </Typography>
                                </CardContent>

                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Card>
                                <CardContent>
                                    <Avatar style={{height: '50px', width: '50px', fontSize: '60px', margin: 'auto'}} src={wallet}/>

                                    <Typography gutterBottom variant="body1"  component="p" style={styles.typo}>
                                       TOP UP
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                       Top up content
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Card>
                                <CardContent>
                                    <Avatar style={{height:'50px', width:'60px', fontSize:'60px',margin:'auto'}} src={multiplayer}/>
                                    <Typography gutterBottom variant="body1" component="p">
                                        Register
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Register content
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Card>
                                <CardContent>
                                    <Avatar style={{height:'50px', width:'50px', fontSize:'60px',margin:'auto'}} src={multiplayer}/>
                                    <Typography gutterBottom variant="body1" component="p">
                                        Register
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Register content
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>


                    </Grid>

                </Grid>

            </Container>
        );
    }
}

export default home;