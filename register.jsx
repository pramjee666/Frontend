import React from 'react';

class Register extends React.Component {
    state={};
    render() { 
        return <div>
        <h1>Register Page</h1>
        <form>
            <input type="text" placeholder="Enter FullName"/>
            <input type="tel" placeholder="Enter contact number"/>
            <input type="email" placeholder="Enter Email"/>
            <input type="address" placeholder="Enter City"/>
            <input type="password" placeholder="Enter password"/>
            <input type="submit"/>

            </form>

        </div>;
    }
}
 
export default Register;