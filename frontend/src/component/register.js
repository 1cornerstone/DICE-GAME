import React from 'react'
import {
    Button,
    Checkbox,
    Container,
    FormControl,
    FormControlLabel,
    Grid,
    InputLabel,
    OutlinedInput,
    TextField,
    Typography
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
                width:'350px',
                backgroundColor:'white',
                margin:'2px'

            },
            div:{
                marginTop: '20px'
            }
        };


        return (
            <Container>
                <Grid container spacing={2} direction="column"  style={{margin:"auto"}}>
                    <Grid item  style={{margin:'20px'}}>
                        <Typography variant='h5' component='h5' style={{textAlign:'center'}}>DICE-GAME REGISTRATION</Typography>
                    </Grid>

                    <Grid container spacing={2} direction='column' justify='center' alignItems='center'>
                        <div style={styles.div}>
                            <FormControl   variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-amount" >Name</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    labelWidth={50}
                                    style={styles.field}
                                />
                            </FormControl>
                        </div>
                        <div style={styles.div}>

                            <FormControl   variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-amount" >Email</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    labelWidth={50}
                                    style={styles.field}
                                />
                            </FormControl>
                        </div>
                        <div style={styles.div}>
                            <FormControl   variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-amount" >Username</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    labelWidth={80}
                                    style={styles.field}
                                />
                            </FormControl>
                        </div>
                        <div style={styles.div}>
                            <TextField
                                id="filled-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                variant="outlined"
                                style={styles.field}
                            />
                        </div>
                        <div style={styles.div}>
                            <TextField
                                id="filled-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                variant="outlined"
                                style={styles.field}
                            />
                        </div>
                        <div style={styles.div}>
                            <FormControlLabel
                                control={
                                    <Checkbox value="term" />
                                }
                                label="Agree with our Terms and Condition"
                            />
                        </div>
                        <div style={styles.div}>
                            <Button variant="contained" color="primary"  style={{width:'230px',height:'50px'}}>
                                SIGN UP
                            </Button>

                        </div>
                    </Grid>

                </Grid>


            </Container>
        );
    }

}

export default  Register;