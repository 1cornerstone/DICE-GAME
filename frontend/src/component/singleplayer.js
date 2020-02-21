import React from "react";
import {Avatar, Breadcrumbs, Button, Chip, Container, Grid, Link, Paper, Typography} from "@material-ui/core";
import dice6 from './assest/dice-1.png';
import diceImage from "./assest/dice.png";
import $ from 'jquery'

class singlePlayer extends React.Component {

    constructor(props) {
      super(props);

      this.state ={
        yourScore: 0,
        computerScore: 0,
        yourPoint: 0,
        computerPoint: 0,
        toWin: 100,
        turn: 0
      };
    }


    onDiceRoll =(e)=> {
        let diceNumber = ( Math.floor(Math.random() * 6) + 1);
        document.getElementById('diceImage').src = diceImage;

      ((this.state.turn % 2) === 0) ? (this.updateTotal(0, diceNumber)) : (this.updateTotal(1, diceNumber));
      e.preventDefault();

    };
    //

    updateTotal(player, number) {

      $("#diceImage").attr("src", "img/dice-" + number + ".png");

      if (number === 1) {
        this.incrementTurn();
        if(player === 0){
          this.removeStyle();
          this.setState({yourPoint :0})
        }else{
          this.setState({computerPoint: 0});
          this.addStyle()
        }
      } else {

        if (player === 0) {
          let addPlayer1 = (this.state.yourPoint + number);
          this.setState({yourPoint: addPlayer1});
          const value1 = (this.state.yourScore + addPlayer1);
          //this.isFinised("Player 1", value1);

        } else {
          var addPlayer2 = (this.state.computerPoint + number);
          this.setState({computerPoint: addPlayer2});
          var value2 = (this.state.computerScore + addPlayer2);
          //this.isFinised("Player 2", value2);
        }
     }
    }
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
    onHold =(e)=> {

      let whom = this.state.turn % 2;
      this.incrementTurn();
      switch (whom) {
        case 0:
          this.removeStyle();
          let pl1 = this.state.yourPoint + this.state.yourScore;
          this.setState({
            yourScore: pl1,
            yourPoint: 0
          });
          break;
        case 1:
          this.addStyle();
          let pl2 = this.state.computerScore + this.state.computerPoint;
          this.setState({
            computerScore: pl2,
              computerPoint: 0
          });
          break;
        default:
          break;
      }
    };
    //
    addStyle() {
        document.getElementById('player-0-panel').style.backgroundColor = '#392148';
        document.getElementById('player-1-panel').style.backgroundColor = '#fff';
    }
    //
    removeStyle() {
        document.getElementById('player-1-panel').style.backgroundColor = '#392148';
        document.getElementById('player-0-panel').style.backgroundColor = '#fff';
    }
    incrementTurn() {
        this.setState({turn: this.state.turn + 1});
    }
    //
    reset =()=> {

      this.setState({
          yourScore: 0,
          computerScore: 0,
          yourPoint: 0,
          computerPoint: 0,
          toWin: 100,
          turn: 0
      });

      this.addStyle();

      //e.preventDefault();
    }

    componentDidMount() {
        this.addStyle()
    }

    onQuitGameBtnClicked =()=>{
        window.location.href = '/home'
    };

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
                height: '4%',
            },
            scoreboard: {
                fontFamily: "Arial",
                textAlign: "center",
                width: '140px',
                borderRadius: '1px',
                backgroundColor: '#392148',
                margin: "auto",
                padding: '5px',
                color: 'white'
            },point: {
                fontFamily: "Arial",
                textAlign: "center",
                width: '80px',
                borderRadius: '1px',
                backgroundColor: '#392148',
                margin: "5px",
                padding: '5px',
                float:'right',
                color: 'white'
            },
            usernamePanel:{
                margin:'5px',
                width: '30px',
                height: '15px'
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
                            <Button variant="contained" color='primary' onClick={this.reset}>
                                New Game
                            </Button>
                        </Grid>

                        {/* Quit*/}
                        <Grid item xs={12} sm={5}>
                            <Button variant="contained" color="default" onClick={this.onQuitGameBtnClicked}>
                                Quit Game
                            </Button>
                        </Grid>
                    </Grid>

                    {/* main singleplayer Container*/}

                    <Grid container direction='row' justify='center' alignItems='center' style={{marginTop: '20px'}}>

                        {/* player 1 panel*/}
                        <Grid item sm={4} xs={12}>
                            <Paper style={styles.panel} id='player-0-panel' >

                                <Grid container direction='column'>

                                    <Grid item sm={12} xs={12}>
                                        <Chip style={{height: '30px', float: 'left',margin:'10px'}}
                                              color="primary"
                                              avatar={<Avatar alt="dice" src={diceImage}
                                                              style={styles.usernamePanel}/>}
                                              label="Akindev"
                                        />

                                        <Typography variant='h5' style={styles.point} >{this.state.yourPoint}</Typography>

                                    </Grid>
                                    <Grid item sm={12} xs={12} style={{padding: '30px'}}>
                                        <Typography variant='h3' style={styles.scoreboard}>{this.state.yourScore}</Typography>
                                    </Grid>

                                </Grid>

                            </Paper>
                        </Grid>

                        {/* dice roll*/}
                        <Grid item sm={3} xs={12} style={{ padding:'5%'}}>
                            <Grid container direction='column' justify='center' alignItems='center'>

                                <Grid item sm={4} xs={12} style={{marginBottom:'20px'}}>
                                    <Button variant="outlined" style={{backgroundColor:'white'}}  onClick={this.onDiceRoll}>ROll</Button>
                                </Grid>

                                <Grid item sm={4} xs={12}>
                                    <Avatar variant="square" alt="dice" src={dice6}
                                            id='diceImage' style={{height:'50px',background:'black'}}/>
                                </Grid>

                                <Grid item sm={4} xs={12} style={{marginTop:'20px'}}>
                                    <Button variant="outlined" style={{backgroundColor:'white'}} onClick={this.onHold}  >HOLD</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        .
                        {/* player 2 panel*/}
                        <Grid item sm={4} xs={12} >
                            <Paper style={styles.panel} id='player-1-panel'>

                                <Grid container direction='column'>

                                    <Grid item sm={12} xs={12}>
                                        <Chip style={{height: '30px', float: 'left',margin:'10px'}}
                                              color="primary"
                                              avatar={<Avatar alt="dice" src={diceImage}
                                                              style={styles.usernamePanel}/>}
                                              label="DICE-GAME"
                                        />
                                        <Typography variant='h5' style={styles.point}>{this.state.computerPoint}</Typography>

                                    </Grid>
                                    <Grid item sm={12} xs={12} style={{padding: '30px'}}>
                                        <Typography variant='h2' style={styles.scoreboard}>{this.state.computerScore}</Typography>
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

export default singlePlayer;
