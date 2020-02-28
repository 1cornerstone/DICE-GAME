import React from "react";
import {Avatar, Breadcrumbs, Button, Chip, Container, Grid, Link, Paper, Typography,List,ListItem,ListItemIcon,ListItemText} from "@material-ui/core";
import dice6 from './assest/dice-1.png';
import diceImage from "./assest/dice.png";
import winner from "./assest/winner.png";
import hurray from "./assest/hurray.png";
import $ from 'jquery'
import dialog from "./dialog";


class singlePlayer extends React.Component {

    constructor(props) {
      super(props);
      this.state ={
        yourScore: 0,
        computerScore: 0,
        yourPoint: 0,
        computerPoint: 0,
        toWin: 100,
        turn: 0,
          Username:'AKINDEV',
          gamePanel:false,
          winnerPanel:true,
          nextCheck:'false'
      };
    }

    incrementTurn() {
        let counter  = this.state.turn + 1;
        this.setState({turn: counter});

    }

    onDiceRoll =()=> {

        let diceNumber = ( Math.floor(Math.random() * 6) + 1);
        document.getElementById('diceImage').src = diceImage;
        console.log(` Rolled Number ${diceNumber}`);

        ((this.state.turn % 2) === 0) ? (this.updateTotal(0, diceNumber)) : (this.updateTotal(1, diceNumber));

     return false;

    };
    //

    updateTotal(player, number) {

      $("#diceImage").attr("src", "img/dice-" + number + ".png");

      // rule one if use play 1 auto-hold user
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
          this.isFinished("Player 1", value1);

        } else {
          let addPlayer2 = (this.state.computerPoint + number);
          this.setState({computerPoint: addPlayer2});
          let value2 = (this.state.computerScore + addPlayer2);
          this.isFinished("Player 2", value2);
          this.computerFunc()

        }
     }
    }

    //
    isFinished(player, val) {

      if (val >= this.state.toWin) {
        if (player === "Player 1") {
          this.setState({
           yourScore: val
          });
        } else {
          this.setState({
            computerScore: val,
              Username:'Computer'
          });
        }

          this.setState({
              gamePanel:true,
              winnerPanel:false
          });
      }
    }
    //

    onHold =(e)=> {

        let whom = this.state.turn % 2;
        this.incrementTurn();

        switch (whom) {
            case 0:
                let pl1 = this.state.yourPoint + this.state.yourScore;
                this.setState({
                    yourScore: pl1,
                    yourPoint: 0
                });
                console.log('user hold');

                this.removeStyle();
                break;
            case 1:
                this.addStyle();
                let pl2 = this.state.computerScore + this.state.computerPoint;
                this.setState({
                    computerScore: pl2,
                    computerPoint: 0
                });

                console.log('computer hold');
                break;
            default:
                break;
        }
    };

    //
    computerFunc = ()=>{
        /*check if to hold,
        * else generate rand for computer*/
       var check_hold ;
       //
         setTimeout(()=>{
           check_hold = ( Math.floor(Math.random() * 10)+1);
           ((check_hold % 3) === 0)?( this.onHold()):( this.onDiceRoll());
        },1000);

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
        this.computerFunc();
    }

    disableBtn (param){
        this.setState({
            nextCheck:param
        })
    }
    //
    reset =()=> {

      this.setState({
          yourScore: 0,
          computerScore: 0,
          yourPoint: 0,
          computerPoint: 0,
          toWin: 10,
          turn: 0,
          winnerUsername:'',
          gamePanel:false,
          winnerPanel:true
      });

      this.addStyle();

      //e.preventDefault();
    };

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
                justifyContent: 'center',

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
            },
            winnerDisplay:{
               marginTop:'40px',
                textAlign:'center',
                display:'block',
                backgroundImage:`url(${hurray})`,
                backgroundPosition:'center',
                backgroundSize:'auto',
                height:'300px',
                width:'300px',
                padding:'20px'

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
                            <Button variant="contained" color='primary' id='newGame' onClick={this.reset}>
                                New Game
                            </Button>
                        </Grid>

                        {/* Quit*/}
                        <Grid item xs={12} sm={5}>
                            <Button variant="contained" color="default"  onClick={this.onQuitGameBtnClicked}>
                                Quit Game
                            </Button>
                        </Grid>
                    </Grid>


                    {/*Game rules*/}


                    <Grid  item >
                        <List component="nav"   >
                            <ListItem button>
                                <ListItemIcon>
                                    {/*<StarIcon />*/}
                                </ListItemIcon>
                                <ListItemText style={{textAlign:"center"}} primary="If 1 is rolled user player is hold automatically and it will not be added to your Scoreboard" />
                            </ListItem>
                        </List>
                    </Grid>
                    {/* main singleplayer Container*/}

                    <Grid container  direction='row' justify='center' alignItems='center' style={{marginTop: '20px'}}>

                        <Grid container justify='center' alignItems='center' >
                            <Grid item hidden={this.state.winnerPanel}>
                                <Paper style={styles.winnerDisplay} >
                                    <div >
                                        <img src={winner} style={{width:'200px',height:'200px'}}/>

                                        <br/>
                                        <Typography variant='overline'>{this.state.Username} won the game</Typography>

                                    </div>
                                </Paper>
                            </Grid>
                        </Grid>
                        {/* player 1 panel*/}
                        <Grid item sm={4} xs={12}  hidden={this.state.gamePanel}>
                            <Paper style={styles.panel} id='player-0-panel' >

                                <Grid container direction='column'>

                                    <Grid item sm={12} xs={12}>
                                        <Chip style={{height: '30px', float: 'left',margin:'10px'}}
                                              color="primary"
                                              avatar={<Avatar alt="dice" src={diceImage}
                                                              style={styles.usernamePanel}/>}
                                              label={this.state.Username}
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
                        <Grid item sm={3} xs={12} style={{ padding:'5%'}} hidden={this.state.gamePanel}>
                            <Grid container direction='column' justify='center' alignItems='center'>

                                <Grid item sm={4} xs={12} style={{marginBottom:'20px'}}>
                                    <Button variant="outlined"  style={{backgroundColor:'white'}}  id='roll'   onClick={this.onDiceRoll}>ROll</Button>
                                </Grid>

                                <Grid item sm={4} xs={12}>
                                    <Avatar variant="square" alt="dice" src={dice6}
                                            id='diceImage' class='dices'/>
                                </Grid>

                                <Grid item sm={4} xs={12} style={{marginTop:'20px'}}>
                                    <Button variant="outlined" style={{backgroundColor:'white'}} id='hold'   onClick={this.onHold}  >HOLD</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        .
                        {/* player 2 panel*/}
                        <Grid item sm={4} xs={12} hidden={this.state.gamePanel} >
                            <Paper style={styles.panel} id='player-1-panel'>

                                <Grid container direction='column'>

                                    <Grid item sm={12} xs={12}>
                                        <Chip style={{height: '30px', float: 'left',margin:'10px'}}
                                              color="primary"
                                              avatar={<Avatar alt="dice" src={diceImage}
                                                              style={styles.usernamePanel}/>}
                                              label="COMPUTER"
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
