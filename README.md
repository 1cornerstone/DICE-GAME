   
    Development Architecture 
    
         developing DICE GAME .......
        
         paypal As payment gateway,
         circle ci/cd testing
         mysql db
         redis  sesion store
          frontend testing framework (cypress e2e)
          backend testing (Jest)
          Sequelize ORM
          material UI 
         
         frontend 70% done 
         backend ......
    
   
 
  <Grid item xs={12} sm={4} >
                            <Avatar variant="square" alt="dice" src={diceImage} style={styles.image}  className='frontImage' />
 
                     </Grid>
                     <Grid item xs={12} sm={6} >
                            <Typography variant="h5" component="h5">
                                Dice games are games that use or incorporate one or more dice as their sole or central component, usually as a random device.
                            </Typography>
                     </Grid >
 
                     <Grid item xs={12} sm={12} direction='row'  justify='center' alignItems='center' style={{textAlign:'center',marginTop:'30px'}}>
                             <Typography variant='h6'>
                                How to play:
                                 Register and Sign In,
                                 your will get 500DG once you register to play game.
                                 you can play with computer or play with your friend.
                             </Typography>
                     </Grid>

 
 
 
  <FormControl   variant="outlined">
                                 <InputLabel htmlFor="outlined-adornment-amount" >Name</InputLabel>
                                 <OutlinedInput
                                     id="outlined-adornment-amount"
                                     labelWidth={60}
                                     style={styles.field}
                                 />
                             </FormControl>
 
                             <FormControl   variant="outlined">
                                 <InputLabel htmlFor="outlined-adornment-amount" >Email</InputLabel>
                                 <OutlinedInput
                                     id="outlined-adornment-amount"
                                     labelWidth={60}
                                     style={styles.field}
                                 />
                             </FormControl>
                             <div style={styles.divCenter}>
                                 <form >
                                     <FormGroup >
                                         <Grid item spacing={ 2}>
                                            
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
                                         <Grid style={styles.formChildrenMargin} spacing={2}>
                                             <TextField
                                                 id="filled-password-input"
                                                 label="Password"
                                                 type="password"
                                                 autoComplete="current-password"
                                                 variant="outlined"
                                                 style={styles.field}
                                             />
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

 
 
    
                           