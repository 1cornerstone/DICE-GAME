import React from "react";
import {
    Breadcrumbs,
    Button,
    Container,
    Grid,
    Link,
    Paper,
    Typography,
    Modal,
    TextField,
    FormControl,
    InputLabel, OutlinedInput, InputAdornment,
} from "@material-ui/core";
import NearMeOutlinedIcon from '@material-ui/icons/NearMeOutlined';
import TransitEnterexitOutlinedIcon from '@material-ui/icons/TransitEnterexitOutlined';
import TimelineOutlinedIcon from '@material-ui/icons/TimelineOutlined';


class wallet extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            sendModal:false,
            receiveModal:false,
        }
    }

    setSendOpen =()=>{
        this.setState({
            sendModal:true
        })
    };
    setReceiveOpen =()=>{
        this.setState({
            receiveModal:true
        })
    };

     sendHandleClose = () => {
         this.setState({
             sendModal:false
         });
     };

    receiveHandleClose = () => {
        this.setState({
            receiveModal: false
        });
    };

     transactionClicked =()=>{
            window.location.href = '/transactions'
     };

    render() {

        const styles = {
            actionItem: {
                textAlign: 'center',
                color: 'white'
            },
            modalPaper:{
                padding:'20px',
                margin:'auto',
                width:'400px',
                justifyContent:'center'
            },
            inputMargin:{
                marginTop:'10px'
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
                              <div style={{padding: '40px', backgroundColor: "#816ED4"}} class='option' onClick={this.setSendOpen}>
                                  <div style={styles.actionItem}>
                                      <NearMeOutlinedIcon/>
                                      <Typography>SEND</Typography>
                                  </div>
                              </div>
                        </Grid>
                        <Grid item sm='3' xs='12'>
                            <div style={{padding: '40px', backgroundColor: '#5093EB', color: 'white'}} class='option' onClick={this.setReceiveOpen}>
                                <div style={styles.actionItem}>
                                    <TransitEnterexitOutlinedIcon/>
                                    <Typography>RECEIVE</Typography>
                                </div>
                            </div>
                        </Grid>
                        <Grid item sm='3' xs='12'>
                            <Paper style={{padding: '40px', backgroundColor: '#5484C2', color: 'white'}} class='option' onClick={this.transactionClicked}>
                                <div style={styles.actionItem}>
                                    <TimelineOutlinedIcon/>
                                    <Typography>Transactions</Typography>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>


                    {/*send money Modal*/}
                    <Modal
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                       open={this.state.sendModal}
                        onClose={this.sendHandleClose}>

                            <Paper style={styles.modalPaper}  id='sendModal'>
                               <Grid container direction='column' justify='center' alignItems='center'>
                                   <Grid item>
                                       <Typography variant='overline'> Available Balance  599 DG</Typography>
                                   </Grid>


                                       <Grid item>

                                           <FormControl fullWidth variant="outlined" style={styles.inputMargin}>
                                               <InputLabel htmlFor="outlined-adornment-amount" >Email</InputLabel>
                                               <OutlinedInput
                                                   id="outlined-adornment-amount"
                                                   labelWidth={120}
                                               />
                                           </FormControl>
                                           <FormControl  fullWidth  variant="outlined" style={styles.inputMargin}
                                           >
                                               <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                                               <OutlinedInput
                                                   id="outlined-adornment-amount"
                                                   startAdornment={<InputAdornment position="start">DG</InputAdornment>}
                                                   labelWidth={60}
                                                   type='number'
                                               />
                                           </FormControl>
                                           <TextField
                                               id="filled-password-input"
                                               label="Password"
                                               type="password"
                                               autoComplete="current-password"
                                               variant="outlined"
                                               fullWidth
                                               style={styles.inputMargin}

                                           />
                                           <Button variant="contained" color="primary"  style={{width:'230px',height:'50px' ,marginTop:'10px'}}>
                                               SEND
                                           </Button>
                                       </Grid>

                               </Grid>
                            </Paper>

                    </Modal>


                    {/*receive money modal*/}
                    <Modal
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                       open={this.state.receiveModal}
                        onClose={this.receiveHandleClose}>

                            <Paper style={styles.modalPaper}   id='recModal'>
                                <Grid item>
                                    <Typography variant='body1'> Request Payment </Typography>
                                </Grid>
                                <Grid container direction='column' justify='center' alignItems='center'>

                                    <Grid item>
                                        <Typography variant='overline'>Enter User email address </Typography>
                                        <FormControl fullWidth variant="outlined" style={styles.inputMargin}>
                                            <InputLabel htmlFor="outlined-adornment-amount" >Email</InputLabel>
                                            <OutlinedInput
                                                id="outlined-adornment-amount"
                                                labelWidth={120}
                                            />
                                        </FormControl>

                                        <FormControl  fullWidth  variant="outlined" style={styles.inputMargin}
                                        >
                                            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                                            <OutlinedInput
                                                id="outlined-adornment-amount"
                                                startAdornment={<InputAdornment position="start">DG</InputAdornment>}
                                                labelWidth={60}
                                                type='number'
                                            />
                                        </FormControl>
                                        <Button variant="contained" color="primary"  style={{width:'230px',height:'50px' ,marginTop:'10px'}}>
                                            Request
                                        </Button>
                                    </Grid>

                                </Grid>
                            </Paper>
                    </Modal>
                </Grid>
            </Container>
        )
    }

}

export default wallet;