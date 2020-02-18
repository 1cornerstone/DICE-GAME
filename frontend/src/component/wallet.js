import React from "react";
import {Grid, Breadcrumbs, Paper, Link, Icon, Typography, Button, Container} from "@material-ui/core";
import NearMeOutlinedIcon from '@material-ui/icons/NearMeOutlined';
import TransitEnterexitOutlinedIcon from '@material-ui/icons/TransitEnterexitOutlined';
import TimelineOutlinedIcon from '@material-ui/icons/TimelineOutlined';


class wallet extends React.Component{

    render() {

        const styles ={
        actionItem:{
            textAlign:'center',
            color:'white'
        }

        };
        return (
            <Container>
                <Grid container direction='column' style={{marginTop:'20px'}} spacing={2} >

                    <Grid item xs={12} sm={12}>
                        <Paper style={{padding: '20px'}}>
                            <Breadcrumbs aria-label="breadcrumb">
                                <Link color="inherit" href="/dashboard/">
                                    Dashboard
                                </Link>
                                <Typography color="textPrimary"> Wallet</Typography>
                            </Breadcrumbs>
                        </Paper>
                    </Grid>

                    <Grid container direction='row' spacing={1} alignItems='center' justify='center' style={{marginTop:'10px'}}>
                        <Grid item sm='6' xs='12'>
                            <Paper style={{height:'130px', padding:'25px'}}>
                                <Typography variant='h6'>Account Overview</Typography>
                                <Typography variant='h7'>Your account overview and recent transactions</Typography>

                            </Paper>
                        </Grid>
                        <Grid item sm='6' xs='12'>
                            <Paper style={{height:'130px', padding:'25px'}}>
                                <Typography variant='h6' >Your Balance</Typography>
                                <Typography variant='h6' style={{fontFamily:'Arial'}}>500DG</Typography>

                                <Button variant="contained" color="primary"  style={{backgroundColor:"#5484C2", textAlign:'right'}}> Top Up Balance</Button>
                            </Paper>
                        </Grid>
                    </Grid>

                    <Grid container direction='row' spacing={1} alignItems='center' justify='center' style={{marginTop:'30px',marginBottom:'25px'}}>
                        <Grid item sm='3' xs='12' style={{padding:'50px',backgroundColor:"#816ED4"}}>
                            <div style={styles.actionItem}>
                                <NearMeOutlinedIcon/>
                                <Typography>SEND</Typography>
                            </div>
                        </Grid>
                        <Grid item sm='3' xs='12'>
                            <Paper style={{ padding:'50px',backgroundColor:'#5093EB',color:'white'}}>
                                <div style={styles.actionItem}>
                                    <TransitEnterexitOutlinedIcon/>
                                    <Typography>RECEIVE</Typography>
                                </div>
                            </Paper>
                        </Grid>
                        <Grid item sm='3' xs='12'>
                            <Paper style={{ padding:'50px',backgroundColor:'#5484C2',color:'white'}}>
                                <div style={styles.actionItem}>
                                    <TimelineOutlinedIcon />
                                    <Typography>Transactions</Typography>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        )
    }

}
export default wallet;