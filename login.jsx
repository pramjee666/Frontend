import React from 'react';

const Login = () => {
    return ( 
        <div>
        <p className="fs-3">Login Form</p>
            <form className="bg-lime w-50 mx-auto border p-4 mt-3 text-start form-control shadow-lg p-3 mb-5 bg-body rounded">
                <div className="mb-1">
                 <label forHtml="exampleInputEmail1" className="form-label">Email address</label>
                 <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                 </div>
                 <div className="mb-3">
                   <label forHtml="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1"/>
                 </div>
                 <div className="mb-1 form-check"></div>
                 <div className="d-grid">
                 <button type="submit" className="btn btn-primary">
                 Submit
                 </button>
                 </div>
            </form>
        </div>
     );
}
 
export default Login;