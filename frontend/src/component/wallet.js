import React from "react";
import {Breadcrumbs, Button, Container, Grid, Link, Paper, Typography,Modal} from "@material-ui/core";
import NearMeOutlinedIcon from '@material-ui/icons/NearMeOutlined';
import TransitEnterexitOutlinedIcon from '@material-ui/icons/TransitEnterexitOutlined';
import TimelineOutlinedIcon from '@material-ui/icons/TimelineOutlined';


class wallet extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            modal:false,
            open:false
        }
    }


    render() {

       const setOpen =(param)=>{
            this.setState({
               modal:param
           })
        };

        const handleClose = () => {
            setOpen(false);
        };

        const styles = {
            actionItem: {
                textAlign: 'center',
                color: 'white'
            }

        };
        return (
            <Container>
                <Grid container direction='column' style={{marginTop: '20px'}} spacing={2}>

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

                    <Grid container direction='row' spacing={1} alignItems='center' justify='center'
                          style={{marginTop: '10px'}}>
                        <Grid item sm='6' xs='12'>
                            <Paper style={{height: '130px', padding: '25px'}}>
                                <Typography variant='h6'>Account Overview</Typography>
                                <Typography variant='h7'>Your account overview and recent transactions</Typography>

                            </Paper>
                        </Grid>
                        <Grid item sm='6' xs='12'>
                            <Paper style={{height: '130px', padding: '25px'}}>
                                <Typography variant='h6'>Your Balance</Typography>
                                <Typography variant='h6' style={{fontFamily: 'Arial'}}>500DG</Typography>

                                <Button variant="contained" color="primary"
                                        style={{backgroundColor: "#5484C2", textAlign: 'right'}}> Top Up</Button>
                            </Paper>
                        </Grid>
                    </Grid>

                    <Grid container direction='row' spacing={1} alignItems='center' justify='center'
                          style={{marginTop: '30px', marginBottom: '25px'}}>
                        <Grid item sm='3' xs='12' >
                              <Paper style={{padding: '40px', backgroundColor: "#816ED4"}} class='option' onClick={setOpen(true)}>
                                  <div style={styles.actionItem}>
                                      <NearMeOutlinedIcon/>
                                      <Typography>SEND</Typography>
                                  </div>
                              </Paper>
                        </Grid>
                        <Grid item sm='3' xs='12'>
                            <Paper style={{padding: '40px', backgroundColor: '#5093EB', color: 'white'}} class='option'>
                                <div style={styles.actionItem}>
                                    <TransitEnterexitOutlinedIcon/>
                                    <Typography>RECEIVE</Typography>
                                </div>
                            </Paper>
                        </Grid>
                        <Grid item sm='3' xs='12'>
                            <Paper style={{padding: '40px', backgroundColor: '#5484C2', color: 'white'}} class='option'>
                                <div style={styles.actionItem}>
                                    <TimelineOutlinedIcon/>
                                    <Typography>Transactions</Typography>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>


                    <Modal
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"

                        onClose={handleClose}
                    >
                        <div>
                            <h2 id="simple-modal-title">Text in a modal</h2>
                            <p id="simple-modal-description">
                                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                            </p>
                            {/*<SimpleModal />*/}
                        </div>
                    </Modal>
                </Grid>
            </Container>
        )
    }

}

export default wallet;