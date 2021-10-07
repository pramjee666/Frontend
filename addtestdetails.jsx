import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


class AddTestDetails extends React.Component {
    state={
        id:"",
        testName:"",
        testPrice:"",
        normalValue:"",
        units:"",
    };
    render() { 
        return <div>
        <form>
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <Button variant="contained" color="submit"> Submit</Button>
        </form>
        </div>;
    }
}
 
export default AddTestDetails;