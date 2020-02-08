
import React from 'react'
import {Breadcrumbs, Grid, Link, Paper, Typography} from "@material-ui/core";


class multiplayer extends React.Component{

render() {
    return(
        <Grid container direction='column' spacing={2}  style={{marginTop:'20px'}}>
            <Grid item xs={12} sm={12}>
                <Paper style={{padding: '20px'}}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link color="inherit" href="/dashboard/">
                            Dashboard
                        </Link>
                        <Typography color="textPrimary">Multiplayer</Typography>
                    </Breadcrumbs>
                </Paper>
            </Grid>
        </Grid>
    )
}
}
export default multiplayer;