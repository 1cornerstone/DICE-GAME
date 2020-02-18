import React from "react";
import {Breadcrumbs, Grid, Paper, Typography, Link, Avatar, Chip, Button, Container} from "@material-ui/core";
import dice1 from './assest/dice-1.png';
import dice6 from './assest/dice-6.png';
import diceImage from "./assest/dice.png";

class singleplayer extends React.Component {

    // constructor(props) {
    //   super(props);
    //
    //   this.state ={
    //     player1total: 70,
    //     player2total: 70,
    //     player1: 0,
    //     player2: 0,
    //     toWin: 100,
    //     turn: 0
    //   };
    //
    // }
    //
    // incrementTurn() {
    //   this.setState({turn: this.state.turn + 1});
    // }
    //
    // onDiceRoll(e) {
    //   var diceNumber = ( Math.floor(Math.random() * 6) + 1);
    //
    //   // here what i did is
    //   ((this.state.turn % 2) === 0) ? (this.updateTotal(0, diceNumber)) : (this.updateTotal(1, diceNumber))
    //   e.preventDefault();
    // }
    //
    // updateTotal(player, number) {
    //
    //   $(".dice").attr("src", "img/dice-" + number + ".png");
    //
    //   if (number === 1) {
    //     this.incrementTurn();
    //     if(player === 0){
    //       this.removeStyle()
    //       this.setState({player1 :0})
    //     }else{
    //       this.setState({player2: 0});
    //       this.addStyle()
    //     }
    //   } else {
    //
    //     if (player === 0) {
    //       var addPlayer1 = (this.state.player1 + number);
    //       this.setState({player1: addPlayer1});
    //       const value1 = (this.state.player1total + addPlayer1);
    //       this.isFinised("Player 1", value1);
    //
    //     } else {
    //       var addPlayer2 = (this.state.player2 + number);
    //       this.setState({player2: addPlayer2});
    //       var value2 = (this.state.player2total + addPlayer2);
    //       this.isFinised("Player 2", value2);
    //     }
    //   }
    // }
    //
    // isFinised(player, val) {
    //
    //   if (val >= this.state.toWin) {
    //     if (player === "Player 1") {
    //       this.setState({
    //         player1total: val
    //       })
    //     } else {
    //       this.setState({
    //         player2total: val
    //       })
    //     }
    //     $('#rolldice ').attr("disabled", true);
    //     $('.btn-hold ').attr("disabled", true);
    //     $('.btn-new ').focus();
    //   }
    // }
    //
    // onHold(e) {
    //
    //   var whom = this.state.turn % 2;
    //   this.incrementTurn();
    //   switch (whom) {
    //     case 0:
    //       this.removeStyle()
    //       var pl1 = this.state.player1total + this.state.player1;
    //       this.setState({
    //         player1total: pl1,
    //         player1: 0
    //       });
    //       break;
    //     case 1:
    //       this.addStyle()
    //       var pl2 = this.state.player2total + this.state.player2;
    //       this.setState({
    //         player2total: pl2,
    //         player2: 0
    //       });
    //       break;
    //     default:
    //       break;
    //   }
    // }
    //
    // addStyle() {
    //   $(".player-1-panel").removeClass("active");
    //   $(".player-0-panel").addClass("active");
    //
    // }
    //
    // removeStyle() {
    //   $(".player-0-panel").removeClass("active");
    //   $(".player-1-panel").addClass("active");
    //
    // }
    //
    // reset() {
    //
    //   this.setState({
    //     player1total: 0,
    //     player2total: 0,
    //     player1: 0,
    //     player2: 0,
    //     turn: 0
    //   });
    //   $('#rolldice ').attr("disabled", false);
    //   $('.btn-hold ').attr("disabled", false);
    //   this.addStyle();
    //
    //   //e.preventDefault();
    // }

    render() {

        const styles = {
            dicePanel: {
                backgroundColor: 'gray',
                boxShadow: `3px 5px 10px grey`,
                textAlign: 'center',
                width: '70px',
                height: '50px',
                margin: 'auto',
                justifyContent: 'center'
            },
            panel: {
                height: '10%',
            },
            scoreboard: {
                fontFamily: "Arial",
                textAlign: "center",
                width: '140px',
                borderRadius: '1px',
                backgroundColor: '#392148',
                margin: "auto",
                padding: '12px',
                color: 'white'
            },
            usernamePanel:{
                margin:'5px',
                width: '30px',
                height: '25px'
            }
        };
        return (
            <Container>
                <Grid container direction='column' style={{marginTop: "20px"}}>

                    {/* Breadcrumb*/}

                    <Grid item xs={12} sm={12}>
                        <Paper style={{padding: '20px'}}>
                            <Breadcrumbs aria-label="breadcrumb">
                                <Link color="inherit" href="/dashboard">
                                    Dashboard
                                </Link>
                                <Typography color="textPrimary"> Game </Typography>
                            </Breadcrumbs>
                        </Paper>
                    </Grid>

                    {/*Options Container*/}

                    <Grid container direction='row' justify='center' alignItems='center' style={{marginTop: '20px'}}>
                        {/* new singleplayer*/}
                        <Grid item xs={12} sm={5} style={{marginBottom: '10px'}}>
                            <Button variant="contained" color='primary'>
                                New Game
                            </Button>
                        </Grid>

                        {/* Quit*/}
                        <Grid item xs={12} sm={5}>
                            <Button variant="contained" color="default">
                                Quit Game
                            </Button>
                        </Grid>
                    </Grid>

                    {/* main singleplayer Container*/}

                    <Grid container direction='row' justify='center' alignItems='center' style={{marginTop: '20px'}}>

                        {/* player 1 panel*/}
                        <Grid item sm={4} xs={12} className='player-1'>
                            <Paper style={styles.panel}>

                                <Grid container direction='column'>

                                    <Grid item sm={12} xs={12}>
                                        <Chip style={{height: '40px', float: 'left',margin:'10px'}}
                                              color="primary"
                                              avatar={<Avatar alt="dice" src={diceImage}
                                                              style={styles.usernamePanel}/>}
                                              label="Akindev"
                                        />
                                    </Grid>
                                    <Grid item sm={12} xs={12} style={{padding: '40px'}}>
                                        <Typography variant='h2' style={styles.scoreboard}>0</Typography>
                                    </Grid>

                                </Grid>

                            </Paper>
                        </Grid>

                        {/* dice roll*/}
                        <Grid item sm={3} xs={12} style={{ padding:'5%'}}>
                            <Grid container direction='column' justify='center' alignItems='center'>

                                <Grid item sm={4} xs={12} style={{marginBottom:'20px'}}>
                                    <Button variant="outlined" style={{backgroundColor:'white'}} >ROll</Button>
                                </Grid>

                                <Grid item sm={4} xs={12}>
                                    <Avatar variant="square" alt="dice" src={dice6}
                                            className='frontImage' style={{height:'50px'}}/>
                                </Grid>

                                <Grid item sm={4} xs={12} style={{marginTop:'20px'}}>
                                    <Button variant="outlined" style={{backgroundColor:'white'}} >HOLD</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        .
                        {/* player 2 panel*/}
                        <Grid item sm={4} xs={12} className='player-1'>
                            <Paper style={styles.panel}>

                                <Grid container direction='column'>

                                    <Grid item sm={12} xs={12}>
                                        <Chip style={{height: '40px', float: 'right',margin:'10px'}}
                                              color="primary"
                                              avatar={<Avatar alt="dice" src={diceImage}
                                                              style={styles.usernamePanel}/>}
                                              label="DICE-GAME"
                                        />
                                    </Grid>
                                    <Grid item sm={12} xs={12} style={{padding: '40px'}}>
                                        <Typography variant='h2' style={styles.scoreboard}>0</Typography>
                                    </Grid>

                                </Grid>

                            </Paper>
                        </Grid>

                    </Grid>

                </Grid>

            </Container>
            );
    }
}

export default singleplayer;
