import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  SignupFunc
} from "../../Services/UserService";

const Login = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [name, setName] = useState()
    const [username, setUsername] = useState()

    const onSubmitHandler = (e) => {
      e.preventDefault();
      const data = { name, username, email, password }
      console.log(data)
      SignupFunc(data)
      .then(() => console.log('logged in successfully !'))
      .catch(() => console.log('got err'))
    }

  return (
    <div className="container border mt-5 p-3 rounded">
    <h3 className="text-center">Signup Page</h3>
    <hr />
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} name="name" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label>UserName</label>
          <input type="text" className="form-control" onChange={(e) => setUsername(e.target.value)} name="username" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input type="text" className="form-control" onChange={(e) => setEmail(e.target.value)} name="email" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} name="password" placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <Link to="/">Go to Login</Link>
    </div>
  );
};

export default Login;
