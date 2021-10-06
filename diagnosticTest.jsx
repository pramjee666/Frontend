import React, { Component } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import axios from "axios";



class DiagnosticTest extends React.Component {

    state={
        diagnostictests: [],
    };

    //axios.get("http://localhost:8081/diagnostictests")
    //component lifecycle
    componentDidMount(){
    axios
      .get("http://localhost:8081/diagnostictests")
      .then((res)=> {
          console.log(res.data);
          this.setState({diagnostictests:res.data});
        });
    }
    render() { 
        // destructuring
        const { diagnostictests } = this.state;
        return <div>
         <TableContainer component={Paper} style={{width:"75%", marginLeft:"auto", marginRight:"auto", marginTop:"20px"}}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
          <TableCell></TableCell>
            <TableCell>Id</TableCell>
            <TableCell align="centre">TestName</TableCell>
            <TableCell align="centre">TestPrice</TableCell>
            <TableCell align="centre">NormalValue</TableCell>
            <TableCell align="centre">Units</TableCell>
            <TableCell align="centre">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {diagnostictests.map((diagnostictest) => (
            <TableRow
              key={diagnostictest.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="diagnostictest">
                {diagnostictest.name}
              </TableCell>
              <TableCell align="centre">{diagnostictest.id}</TableCell>
              <TableCell align="centre">{diagnostictest.testName}</TableCell>
              <TableCell align="centre">{diagnostictest.testPrice}</TableCell>
              <TableCell align="centre">{diagnostictest.normalValue}</TableCell>
              <TableCell align="centre">{diagnostictest.units}</TableCell>  
              <TableCell>
              <Button variant="outlined" startIcon={<DeleteIcon />}>
                Delete
                </Button>
                <Button variant="contained" endIcon={<UpdateIcon />}>
                update
                </Button>

              </TableCell>  
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>;
    }
}
 
export default DiagnosticTest;