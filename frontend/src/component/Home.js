import React, {Component} from 'react'
import {Grid,Avatar,Typography} from "@material-ui/core";
import background from './assest/diceplay.jpg'
import dice from './assest/dice.png'


class home extends Component{

    render() {

        const styles = {
             root : {
                 flexGrow: 1,
                 width: '100%',
             },
            image:{
                 width:'150px',
                height:'100px',
                textAlign:'center'

            },
            carousel:{
               backgroundImage: `url(${background})`,
                width:'100%',  height:'40vh',
                backgroundSize:'cover',
            }
        };

            return (
                <Grid container style={styles.root} spacing={2} direction="row"  >

                    <Grid item  style={styles.carousel}>

                        <Avatar variant="square" alt="dice" src={dice} style={styles.image}  className='frontImage' />

                    </Grid>
                    <Grid container direction='row'  justify='center' style={{margin:'30px',textAlign:'center'}}>


                            <Typography variant="h4" component="h4">
                                                 DICE GAME
                            </Typography>
                        <Typography variant="h6" component="h6">
                                Dice games are games that use or incorporate one or more dice as their sole or central component, usually as a random device.
                            </Typography>
                            <Typography variant='h6'>
                                How to play:
                            </Typography>

                        <ul style={{textAlign:'left',listStyleType:"none", marginTop:'20px'}}>

                            <li> Register and Sign In,</li>
                            <li>your will get 500DG once you register to play game.</li>
                            <li>you can play with computer or play with your friend.</li>
                        </ul>

                    </Grid>

                </Grid>
            );
        }
}
export  default  home;