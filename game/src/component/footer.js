import React, {Component} from 'react';
import {Grid,Typography} from "@material-ui/core";

class Footer extends Component {
    render() {
        return (
            <Grid container direction='column' justify='center' alignItems='center'>
                <Grid item spacing={2} >
                    <Typography   style={{color:'white',marginTop:'30px'}}>
                        @copyright 2020  designed by Akindev
                    </Typography>
                </Grid>
            </Grid>
        );
    }
}

export default Footer;