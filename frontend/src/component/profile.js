import React from "react";
import {
    Breadcrumbs,
    Button,
    Container,
    Grid,
    Link,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Typography
} from "@material-ui/core";
import image from "./assest/ava.JPG"
import Rating from "@material-ui/lab/Rating";

class profile extends React.Component{

    render() {
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
                                <Button variant="contained" color="primary"  style={{backgroundColor:"#5484C2",marginTop:'10px'}}>Edit</Button>
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

                    </Grid>

                </Container>
            );
    }
}

export default profile;

