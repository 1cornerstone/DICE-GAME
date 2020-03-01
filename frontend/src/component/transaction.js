import React from "react";
import {
    Container,
    Grid,
    Paper,
    ListItem,
    List,
    ListItemText,
    Breadcrumbs,
    Link,
    Typography,
    Divider,
    TableContainer, Table, TableHead, TableRow, TableBody, Chip
} from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import Rating from "@material-ui/lab/Rating";

class Transaction extends React.Component{

    render() {

        const Styles = {
            headColor:{
                color:'gray'
            }
        };
        return (
            <Container>
                <Grid container direction='column' style={{marginTop: "20px"}}>

                    <Grid item xs={12} sm={12}>
                        <Paper style={{padding: '20px'}}>
                            <Breadcrumbs aria-label="breadcrumb">
                                <Link color="inherit" href="/dashboard">
                                    Dashboard
                                </Link>
                                <Link color="inherit" href="/wallet">
                                   Wallet
                                </Link>
                                <Typography color="textPrimary"> Transactions </Typography>
                            </Breadcrumbs>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={12} style={{marginTop:'30px'}}>
                        <Paper style={{padding: '20px'}}>
                            <TableContainer component={Paper} style={{marginTop:'20px'}}  >
                                <Table  aria-label="customized table" >
                                    <TableHead >
                                        <TableRow >
                                            <TableCell style={Styles.headColor}>Date</TableCell>
                                            <TableCell style={Styles.headColor}> Type</TableCell>

                                            <TableCell style={Styles.headColor}>Email</TableCell>
                                            <TableCell style={Styles.headColor}> Amount</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>29/02/2020</TableCell>
                                            <TableCell>Received|Won|Lose|Sent</TableCell>
                                            <TableCell> Akintundeayofesegun@gmail.com
                                            </TableCell>
                                            <TableCell>400DG</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>29/02/2020</TableCell>
                                            <TableCell>Received|Won|Lose|Sent</TableCell>
                                            <TableCell> Akintundesegun@gmail.com
                                            </TableCell>
                                            <TableCell>30DG</TableCell>
                                        </TableRow>

                                    </TableBody>
                                </Table>
                            </TableContainer>


                        </Paper>
                    </Grid>
                </Grid>

            </Container>
        )
    }
}
export default Transaction;