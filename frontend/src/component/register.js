import React from 'react'
import {
    Grid,
    Typography,
    FormControl,
    InputLabel,
    Button,
    OutlinedInput, TextField, FormGroup, FormControlLabel, Checkbox

} from "@material-ui/core";



class Register extends React.Component {

    constructor(props) {
        super(props);

        // this.state = {
        //     Username: '',
        //     endpoint: 'http://localhost:4141/',
        //     onlineUser :[],
        //     isUsernameAvailable: ''
        // }
        // // call socketio instance
        // socket = socketio(this.state.endpoint)
        // //check if connection is on
        // socket.on('connection');
        // //receive available User
        // socket.on('onlineUsers',(response)=>{
        //     this.setState({
        //         onlineUser:response,
        //         isUsernameAvailable:"proceed"
        //     })
        //     //this.pairing();
        // })
        //
        // socket.on('usedUsername',(response)=>{
        //     this.setState({
        //         isUsernameAvailable:response
        //     })
        // })
    }

    componentDidMount() {
        //ping Socket to get online Users
        // socket.emit('Users')
        // $('.spinner-grow ').hide();
    }

    //setstate param
    onUsernameSet(e) {
        // this.setState({
        //     Username: e.target.value
        // })
    }

    //send name of the User to our DB
    onJoinClicked(e) {
        // socket.emit('userjoin', this.state.Username)
        // e.preventDefault();
    }

    pairing(){
        // if (this.state.isUsernameAvailable !== "proceed"){
        //     $('.form').hide();
        //     this.setState(({
        //         isUsernameAvailable: "Kindly wait ... Searching for Available player"
        //     }))
        //     $('.spinner-grow ').show();
        // }else{
        //     $('.form').show()
        //     $('text').hide()
        //     $('.spinner-grow ').hide();
        // }
    }

    render() {


        const styles ={
            divCenter: {
                textAlign:'center',
            },
            formChildrenMargin:{
                marginTop:'20px'
            },
            field:{
                width:'330px',
                backgroundColor:'white'
            }
        };


        return (
            <Grid container spacing={2} direction="column"  style={{margin:"auto", color:'white'}}>
                <Grid item sm={12} xs={12} style={{margin:'40px'}}>
                    <Typography variant='h3' component='h5' style={{textAlign:'center'}}>DICE-GAME REGISTRATION</Typography>
                </Grid>
                <Grid item sm={12} xs={12} >

                    <div style={styles.divCenter}>
                        <form >
                           <FormGroup >
                               <Grid>
                                   <FormControl   variant="outlined">
                                       <InputLabel htmlFor="outlined-adornment-amount" >Name</InputLabel>
                                       <OutlinedInput
                                           id="outlined-adornment-amount"
                                           labelWidth={60}
                                           style={styles.field}
                                       />
                                   </FormControl>
                               </Grid>
                               <Grid style={styles.formChildrenMargin}>
                                   <FormControl   variant="outlined">
                                       <InputLabel htmlFor="outlined-adornment-amount" >Username</InputLabel>
                                       <OutlinedInput
                                           id="outlined-adornment-amount"
                                           labelWidth={80}
                                           style={styles.field}
                                       />
                                   </FormControl>
                               </Grid>
                               <Grid style={styles.formChildrenMargin}>
                                   <TextField
                                       id="filled-password-input"
                                       label="Password"
                                       type="password"
                                       autoComplete="current-password"
                                       variant="outlined"
                                       style={styles.field}
                                   />
                               </Grid>
                               <Grid style={styles.formChildrenMargin}>
                                   <TextField
                                       id="filled-password-input"
                                       label="Confirm Password"
                                       type="password"
                                       autoComplete="current-password"
                                       variant="outlined"
                                       style={styles.field}
                                   />
                               </Grid>
                               <Grid style={styles.formChildrenMargin}>
                                   <FormControlLabel
                                       control={
                                           <Checkbox value="term" />
                                       }
                                       label="Agree with our Terms and Condition"
                                   />
                               </Grid>

                               <Button variant="contained" color="primary"  style={{width:'230px',height:'50px'}}>
                                  SIGN UP
                               </Button>

                           </FormGroup>
                        </form>
                    </div>

                </Grid>
            </Grid>


        );
    }

}

export default  Register;