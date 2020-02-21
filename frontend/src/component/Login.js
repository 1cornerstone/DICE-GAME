import React from 'react'
import {
    Grid,
    Typography,
    FormControl,
    InputLabel,
    Button,
    OutlinedInput, TextField, FormGroup, FormControlLabel, Checkbox, Container,
} from "@material-ui/core";



class Login extends React.Component {


    render() {
        const styles ={
            divCenter: {
                textAlign:'center',
            },
            formChildrenMargin:{
                marginTop:'20px',
            },
            field:{
                width:'350px',
                backgroundColor:'white'
            }
        };

        return (
           <Container>
               <Grid container spacing={2} direction="column"  style={{margin:"auto"}}>
                   <Grid item sm={12} xs={12} style={{margin:'20px'}}>
                       <Typography variant='h5' component='h5' style={{textAlign:'center'}}>DICE-GAME LOGIN</Typography>
                   </Grid>
                   <Grid item sm={12} xs={12} >

                       <div style={styles.divCenter}>
                           <form>
                               <FormGroup >
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
                                       <FormControlLabel
                                           control={
                                               <Checkbox value="term" />
                                           }
                                           label="Remember me"
                                       />
                                   </Grid>

                                   <Button variant="contained" color="primary"  style={{width:'300px',height:'50px',marginTop:'20px'}}>
                                       LOGIN
                                   </Button>

                               </FormGroup>
                           </form>
                       </div>

                   </Grid>
               </Grid>

           </Container>

        );
    }

}

export default  Login;