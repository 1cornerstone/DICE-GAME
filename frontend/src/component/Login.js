import React from 'react'
import {
    Grid,
    Typography,
    FormControl,
    InputLabel,
    Button,
    OutlinedInput, TextField, FormGroup, FormControlLabel, Checkbox,
} from "@material-ui/core";



class Login extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        const styles ={
            divCenter: {
                textAlign:'center',
            },
            formChildrenMargin:{
                marginTop:'20px',
                color:'white'
            },
            field:{
                width:'330px',
                backgroundColor:'white'
            }
        };

        return (
            <Grid container spacing={2} direction="column"  style={{margin:"auto"}}>
                <Grid item sm={12} xs={12} style={{margin:'40px'}}>
                    <Typography variant='h3' component='h5' style={{textAlign:'center',color:'white'}}>DICE-GAME LOGIN</Typography>
                </Grid>
                <Grid item sm={12} xs={12} >

                    <div style={styles.divCenter}>
                        <form>
                            <FormGroup >
                                <Grid style={styles.formChildrenMargin}>
                                    <FormControl   variant="outlined">
                                        <InputLabel htmlFor="outlined-adornment-amount" >Email</InputLabel>
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
                                    <FormControlLabel
                                        control={
                                            <Checkbox value="term" />
                                        }
                                        label="Remember me"
                                    />
                                </Grid>

                                <Button variant="contained" color="primary"  style={{width:'330px',height:'50px',marginTop:'20px'}}>
                                    LOGIN
                                </Button>

                            </FormGroup>
                        </form>
                    </div>

                </Grid>
            </Grid>


        );
    }

}

export default  Login;