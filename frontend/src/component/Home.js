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
                 color:'white',
                 width: '100%'
             },
            image:{
                 width:'200px',
                height:'140px',
                margin:'auto'

            }
        };

            return (
                <Grid container spacing={2} style={styles.root} direction="column" justify="center" alignItems="center" >

                    <Grid item xs={12} sm={12} style={ {backgroundColor:'red',width:'100%'}}>

                    </Grid>
                    <Grid item xs={12} sm={12} style={ {backgroundColor:'black',width:'100%'}}>

                    </Grid>

                </Grid>
            );
        }
}
export  default  home;