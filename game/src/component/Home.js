import React, {Component} from 'react'
import {Grid,Avatar,Typography} from "@material-ui/core";
import diceImage from './assest/dice.png'


class home extends Component{

    constructor(props){
        super(props);

        this.state = {
            username : ""
        }
    }


    render() {

        const styles = {
             root : {
                 marginTop: '10%',
                 flexGrow: 1,
                 color:'white'
             },
            image:{
                 width:'200px',
                height:'140px',
                margin:'auto'

            }
        };

            return (
                <Grid container spacing={2} style={styles.root} direction="row" justify="center" alignItems="center" >
                    <Grid item xs={12} sm={4} >
                            <Avatar variant="square" alt="dice" src={diceImage} style={styles.image}  className='frontImage' />

                    </Grid>
                    <Grid item xs={12} sm={6} >
                           <Typography variant="h5" component="h5">
                               Dice games are games that use or incorporate one or more dice as their sole or central component, usually as a random device.
                           </Typography>
                    </Grid >

                    <Grid item xs={12} sm={12} direction='row'  justify='center' alignItems='center' style={{textAlign:'center',marginTop:'30px'}}>
                            <Typography variant='h6'>
                               How to play:
                                Register and Sign In,
                                your will get 500DG once you register to play game.
                                you can play with computer or play with your friend.
                            </Typography>
                    </Grid>
                </Grid>
            );
        }
}
export  default  home;