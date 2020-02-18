import React from "react";
import {
    Grid,
    Table,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TableBody,
    Chip,
    Breadcrumbs,
    Link, Typography, TablePagination, Container
} from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import Rating from '@material-ui/lab/Rating';


class onlineUserList extends React.Component{

    render() {


        return (
                <Container>
                    <Grid container direction='column' style={{marginTop:'20px'}} >
                        <Grid item xs={12} sm={12}>
                            <Paper style={{padding: '20px'}}>
                                <Breadcrumbs aria-label="breadcrumb">
                                    <Link color="inherit" href="/dashboard">
                                        Dashboard
                                    </Link>
                                    <Typography color="textPrimary"> Available-Users </Typography>
                                </Breadcrumbs>
                            </Paper>
                        </Grid>

                        <Grid item sm={12} xs={12} >
                            <TableContainer component={Paper} style={{marginTop:'20px'}}  >
                                <Table  aria-label="customized table" >
                                    <TableHead >
                                        <TableRow style={{backgroundColor:'black',color:'white'}}>
                                            <TableCell style={{color:"white"}}> S/N</TableCell>
                                            <TableCell style={{color:"white"}}>Username</TableCell>
                                            <TableCell style={{color:"white"}}>info</TableCell>
                                            <TableCell style={{color:"white"}}> Rank</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell > 1</TableCell>
                                            <TableCell>Akindev</TableCell>
                                            <TableCell>
                                                <Chip
                                                    label="Win 15"
                                                />
                                                <Chip
                                                    label="Lose 10"
                                                    color="secondary"/>

                                            </TableCell>
                                            <TableCell>
                                                <Rating name="read-only" value={3} readOnly />
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell > 2</TableCell>
                                            <TableCell>Isreal</TableCell>
                                            <TableCell>
                                                <Chip
                                                    label="Win 5"
                                                />
                                                <Chip
                                                    label="Lose 2"
                                                    color="secondary"/>

                                            </TableCell>
                                            <TableCell>  <Rating name="read-only" value={1} readOnly /></TableCell>
                                        </TableRow>

                                    </TableBody>
                                </Table>
                            </TableContainer>

                        </Grid>

                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25]}
                            component="div"
                        />

                    </Grid>

                </Container>
        )
    }

}
export default onlineUserList;