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
import IconButton from '@mui/material/IconButton';
import axios from "axios";
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Icon from '@mui/material/Icon';





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
    handleDelete = (id) =>{
        console.log(id);
        axios
        .delete('http://localhost:8081/diagnostictests/delete/${id}')
        .then((res) => {
          alert("Deleted test details successfully!");
          console.log(res);
          const diagostictests =this.state.diagnostictests.filter((d) => d.id != id);
          this.setState({diagostictests : diagostictests})
         })
         .catch((error) => console.log(error));
         };
      render() { 
        // destructuring
        const { diagnostictests } = this.state;
        return <div>
        <Container>
        <Box style={{float:"right", marginTop:"20px", marginBottom:"10px"}}>
        <Button variant="contained" color="success">
         AddTestDetails        
        </Button>
        </Box>
            <TableContainer component={Paper} style={{marginTop:"20px"}}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
            <TableRow>
            <TableCell></TableCell>
            <TableCell align="justify">Id</TableCell>
            <TableCell align="justify">TestName</TableCell>
            <TableCell align="justify">TestPrice</TableCell>
            <TableCell align="justify">NormalValue</TableCell>
            <TableCell align="justify">Units</TableCell>
            <TableCell align="justify">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {diagnostictests.map((diagnostictest) => (
            <TableRow
              key={diagnostictest.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="diagnostictest">
                {diagnostictest.testName}
              </TableCell>
              <TableCell align="justify">{diagnostictest.id}</TableCell>
              <TableCell align="justify">{diagnostictest.testName}</TableCell>
              <TableCell align="justify">{diagnostictest.testPrice}</TableCell>
              <TableCell align="justify">{diagnostictest.normalValue}</TableCell>
              <TableCell align="justify">{diagnostictest.units}</TableCell>  
              <TableCell align="justify">
              <Box sx={{ justifyContent: 'flex-end' }}>
              <IconButton aria-label="delete">
             <DeleteIcon  
             onClick={ () => this.handleDelete(diagnostictest.id)}/>
            </IconButton>
            <IconButton aria-label="update">
            <UpdateIcon />
            </IconButton>
              </Box>
              </TableCell>  
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
        </div>;
    }
}
 
export default DiagnosticTest;