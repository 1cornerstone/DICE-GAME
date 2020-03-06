import React from "react";
import {
    Breadcrumbs,
    Button,
    Container, FormControl,
    Grid, InputAdornment, InputLabel,
    Link, Modal, OutlinedInput,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow, TextField,
    Typography
} from "@material-ui/core";
import image from "./assest/ava.JPG"
import Rating from "@material-ui/lab/Rating";

class profile extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            editBtn : false
        }
    }


    setEditState =(param)=>{
        this.setState({
            edit :param
        })
    };

     setClose = ()=>{
        this.setEditState(false)};

     onEditClicked =()=>{
         this.setEditState(true);
     };

    render() {

        const styles = {
            modalPaper:{
                padding:'20px',
                margin:'auto',
                width:'400px',
                justifyContent:'center'
            },
            inputMargin:{
                marginTop:'10px'
            },
            margin :{
                padding: '10px'

            },
            legend:{
                padding: '3px'
            }

        };
        return(
                <Container>
                    <Grid container direction='column' spacing={2} style={{marginTop:'20px'}}>

                        <Grid item xs={12} sm={12}>
                            <Paper style={{padding: '20px'}}>
                                <Breadcrumbs aria-label="breadcrumb">
                                    <Link color="inherit" href="/dashboard/">
                                        Dashboard
                                    </Link>
                                    <Typography color="textPrimary"> Profile</Typography>
                                </Breadcrumbs>
                            </Paper>
                        </Grid>

                        <Grid container spacing={2} direction='row' style={{backgroundColor:'white',marginTop:'10px'}}>

                            <Grid item sm='2' xs='6' style={{margin:'auto'}} >
                                <img src={image} alt='pro' style={{ height:'270px'}}/>
                                <Button variant="contained" color="primary"  style={{backgroundColor:"#5484C2",marginTop:'10px'}} onClick={this.onEditClicked}>Edit</Button>
                            </Grid>

                            <Grid item sm='6' xs='12' style={{margin:'10px',color:'gray'}}>
                                <Typography variant='h4' style={{textAlign:'center'}}>Profile</Typography>

                                <TableContainer >
                                    <Table aria-label="table">
                                        <TableBody>
                                            <TableRow>
                                                <TableCell align="leftt">Name</TableCell>
                                                <TableCell align="center"> Akintunde israel segun</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell align="left">Email</TableCell>
                                                <TableCell align="center"> Akintundeayofesegun@gmail.com</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell align="left">Username</TableCell>
                                                <TableCell align="center">Akindev</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell align="left">Rank</TableCell>
                                                <TableCell align="center"> <Rating name="read-only" value={3} readOnly />
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell align="left">State</TableCell>
                                                <TableCell align="center">New York</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell align="left">Country</TableCell>
                                                <TableCell align="center">USA</TableCell>
                                            </TableRow>

                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Grid>
                        </Grid>


                        <Modal
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                            open={this.state.edit}
                            onClose={this.setClose}>



                            <Paper style={styles.modalPaper}  id='sendModal'>

                                <Typography variant='overline'> Edit Profile</Typography>

                                <Grid container direction='column' justify='center' alignItems='center'>

                                    <Grid item>

                                        <fieldset style={styles.margin}>
                                            <legend style={styles.legend}>  <Typography variant='overline'> Change Password </Typography></legend>
                                            <TextField
                                                id="filled-password-input"
                                                label="Password"
                                                type="password"
                                                autoComplete="current-password"
                                                variant="outlined"
                                                fullWidth
                                                style={styles.inputMargin}

                                            />
                                            <TextField
                                                id="filled-password-input"
                                                label="ReType Password"
                                                type="password"
                                                autoComplete="current-password"
                                                variant="outlined"
                                                fullWidth
                                                style={styles.inputMargin}

                                            />
                                        </fieldset>

                                        <fieldset style={styles.margin}>
                                            <legend style={styles.legend}> <Typography variant='overline'> Info </Typography></legend>

                                            <Button variant="outlined" component="span" style={{marginBottom:'10px'}}> Upload Image </Button>

                                            <FormControl fullWidth variant="outlined" >
                                                <InputLabel htmlFor="outlined-adornment-amount" >Country</InputLabel>
                                                <OutlinedInput
                                                    id="outlined-adornment-amount"
                                                    labelWidth={60}
                                                />
                                            </FormControl>
                                            <FormControl fullWidth variant="outlined" style={{marginTop:'10px'}} >
                                                <InputLabel htmlFor="outlined-adornment-amount" >State</InputLabel>
                                                <OutlinedInput
                                                    id="outlined-adornment-amount"
                                                    labelWidth={40}
                                                />
                                            </FormControl>

                                        </fieldset>


                                        <Button variant="contained" color="primary"  style={{width:'230px',height:'50px' ,marginTop:'10px'}}>
                                          Update
                                        </Button>
                                    </Grid>

                                </Grid>
                            </Paper>

                        </Modal>


                    </Grid>

                </Container>
            );
    }
}

export default profile;

